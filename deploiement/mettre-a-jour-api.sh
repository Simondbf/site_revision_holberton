#!/usr/bin/env bash
# Mise à jour de l'API depuis le timer existant (OnSuccess du service statique).
set -Eeuo pipefail
umask 077
repo=/opt/holberton-revision
state_dir=/var/lib/holberton-revision-api-deploy
state_file=$state_dir/last-successful-main.sha
accounts_env=/etc/holberton-revision/accounts.env
image_name=holberton-accounts:local
workdir=''
rollback_needed=0
old_image=''
compose_file=''

say(){ printf '[Holberton API] %s\n' "$*"; }
abort(){ say "ERREUR : $*" >&2; exit 1; }

cleanup(){
 local result=$?
 trap - EXIT
 if (( result != 0 && rollback_needed == 1 )); then
  say "Échec du déploiement : restauration de l'image précédente." >&2
  if ! docker image tag "$old_image" "$image_name" ||
     ! docker compose -f "$compose_file" up -d --no-deps --no-build --force-recreate api; then
   say "ÉCHEC DU ROLLBACK : contrôler l'API et la sauvegarde avant toute autre intervention." >&2
  else
   say "Image précédente restaurée. La base persistante n'a pas été supprimée." >&2
  fi
 fi
 if [[ -n "$workdir" ]]; then
  git -C "$repo" worktree remove --force "$workdir/src" >/dev/null 2>&1 || :
  rm -rf -- "$workdir"
 fi
 exit "$result"
}
trap cleanup EXIT

(( EUID == 0 )) || abort 'Exécution root requise pour Docker et les secrets du service.'
for command in git docker curl jq flock systemctl mktemp; do
 command -v "$command" >/dev/null || abort "Outil absent : $command"
done
[[ -d "$repo/.git" || -f "$repo/.git" ]] || abort "Dépôt absent : $repo"
[[ -r "$accounts_env" ]] || abort "Configuration API absente : $accounts_env"
[[ -f "$repo/deploiement/verifier_ci_main.sh" ]] || abort 'Garde CI introuvable.'
[[ -f "$repo/deployment/accounts/backup-now.sh" ]] || abort 'Script de sauvegarde introuvable.'
origin=$(git -C "$repo" remote get-url origin)
case "$origin" in
 https://github.com/Simondbf/site_revision_holberton.git|https://github.com/Simondbf/site_revision_holberton|git@github.com:Simondbf/site_revision_holberton.git) ;;
 *) abort 'Dépôt distant inattendu : refus de publier.';;
esac

mkdir -p -m 0700 "$state_dir"
exec 9>"$state_dir/deploy.lock"
if ! flock -n 9; then say 'Une mise à jour API est déjà en cours ; aucune action.'; exit 0; fi

git -C "$repo" fetch --quiet --no-tags origin main
candidate=$(git -C "$repo" rev-parse --verify 'refs/remotes/origin/main^{commit}')
# Aucun déploiement si verifier ET navigateur ne sont pas verts POUR CE SHA.
bash "$repo/deploiement/verifier_ci_main.sh" "$candidate"
current=''
if [[ -f "$state_file" ]]; then current=$(cat "$state_file"); fi
if [[ "$candidate" == "$current" ]]; then
 say "API déjà synchronisée avec main ${candidate:0:12}."
 exit 0
fi

# Ne pas reconstruire l'API pour une PR exclusivement pédagogique.
if [[ "$current" =~ ^[0-9a-f]{40}$ ]] &&
 git -C "$repo" cat-file -e "$current^{commit}" 2>/dev/null &&
 git -C "$repo" diff --quiet "$current" "$candidate" -- server/ deployment/accounts/compose.yml; then
 printf '%s\n' "$candidate" > "$state_file.tmp"
 mv -f "$state_file.tmp" "$state_file"
 say "Aucun changement backend depuis ${current:0:12} : API conservée."
 exit 0
fi

# Worktree isolé au SHA vérifié : ne pas changer la branche du dépôt.
workdir=$(mktemp -d /tmp/holberton-api-deploy.XXXXXXXX)
git -C "$repo" worktree add --quiet --detach "$workdir/src" "$candidate"
compose_file="$workdir/src/deployment/accounts/compose.yml"
docker compose -f "$compose_file" config --quiet
previous_id=$(docker compose -f "$compose_file" ps -q api)
[[ -n "$previous_id" ]] || abort 'Conteneur API existant introuvable : déploiement initial refusé.'
old_image=$(docker inspect --format '{{.Image}}' "$previous_id")
[[ "$old_image" =~ ^sha256:[0-9a-f]{64}$ ]] || abort 'Image précédente non identifiée.'
docker image inspect "$old_image" >/dev/null
docker image tag "$old_image" holberton-accounts:rollback

# Sauvegarde SQLite chiffrée AVANT remplacement, par le service existant.
systemctl is-active --quiet holberton-backup-docker.timer ||
 abort 'Timer de sauvegarde Holberton inactif : refus de déployer.'
say 'Sauvegarde chiffrée préalable…'
systemctl start holberton-backup-docker.service
[[ "$(systemctl show holberton-backup-docker.service -p Result --value)" == success ]] ||
 abort 'Sauvegarde préalable en échec.'

release_image="holberton-accounts:release-${candidate:0:12}"
say "Construction de l'API au SHA ${candidate:0:12}…"
docker build --pull=false -t "$release_image" -f "$workdir/src/server/Dockerfile" "$workdir/src"

# Valider le démarrage réel dans un conteneur sans données ni réseau de production.
bash "$workdir/src/deploiement/verifier-image-api.sh" "$release_image"

# À partir d'ici, restaurer l'ancienne image sur toute erreur.
rollback_needed=1
docker image tag "$release_image" "$image_name"
docker compose -f "$compose_file" up -d --no-deps --no-build --force-recreate api
container_id=$(docker compose -f "$compose_file" ps -q api)
[[ -n "$container_id" ]] || abort 'Nouveau conteneur API introuvable.'
healthy=0
for i in {1..30}; do
 health=$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}missing{{end}}' "$container_id" 2>/dev/null || :)
 if [[ "$health" == healthy ]]; then healthy=1; break; fi
 if [[ "$health" == unhealthy || "$health" == missing ]]; then break; fi
 sleep 2
done
if (( healthy != 1 )); then
 docker inspect --format '{{json .State.Health}}' "$container_id" >&2 || :
 docker logs --tail 40 "$container_id" >&2 || :
 abort "Conteneur API non sain (${health:-inconnu})."
fi
curl --fail --silent --show-error --connect-timeout 3 --max-time 8 \
 'http://127.0.0.1:3024/api/health' |
 jq -e '.status=="ok" and .emailsAvailable==true' >/dev/null ||
 abort 'API /health invalide ou SMTP non opérationnel.'
code=$(curl --silent --show-error --output /dev/null --write-out '%{http_code}' \
 --connect-timeout 3 --max-time 8 'http://127.0.0.1:3024/api/admin/stats')
[[ "$code" == 401 ]] || abort "Accès admin invité inattendu (HTTP $code)."

printf '%s\n' "$candidate" > "$state_file.tmp"
mv -f "$state_file.tmp" "$state_file"
rollback_needed=0
say "API mise à jour et vérifiée : ${candidate:0:12}. Image de rollback conservée."
