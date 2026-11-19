#!/usr/bin/env bash
# Modèle de publication statique atomique, non installé sur le VPS.
# Utilisation UNIQUEMENT après configuration manuelle du lien Nginx et recette.
set -Eeuo pipefail
: "${HBTN_SOURCE_REPO:?Répertoire Git requis}"
: "${HBTN_RELEASES_DIR:?Répertoire des versions requis}"
: "${HBTN_ACTIVE_LINK:?Lien symbolique servi par Nginx requis}"
site_url=${HBTN_SITE_URL:-https://revision-hbtn.soleiljaune.be}
for path in "$HBTN_SOURCE_REPO" "$HBTN_RELEASES_DIR" "$HBTN_ACTIVE_LINK"; do
  [[ "$path" == /* ]] || { echo "Chemin non absolu : $path" >&2; exit 2; }
done
[[ "$site_url" =~ ^https://[a-zA-Z0-9.-]+$ ]] || { echo 'URL HTTPS invalide.' >&2; exit 2; }
[[ -d "$HBTN_SOURCE_REPO/.git" && -d "$HBTN_RELEASES_DIR" ]] || {
  echo 'Dépôt source ou répertoire de versions absent.' >&2
  exit 2
}
[[ -L "$HBTN_ACTIVE_LINK" ]] || {
  echo 'Publication bloquée : le chemin actuel n’est pas un lien symbolique préconfiguré.' >&2
  exit 2
}
for binary in git node curl jq flock cmp mktemp mv ln; do
  command -v "$binary" >/dev/null || { echo "Commande absente : $binary" >&2; exit 2; }
done
# Éviter deux passages du timer en parallèle.
exec 9>"$HBTN_RELEASES_DIR/.publication.lock"
flock -n 9 || { echo 'Un déploiement est déjà en cours.' >&2; exit 1; }
origin=$(git -C "$HBTN_SOURCE_REPO" remote get-url origin)
[[ "$origin" == "https://github.com/Simondbf/site_revision_holberton.git" ||
   "$origin" == "git@github.com:Simondbf/site_revision_holberton.git" ||
   "$origin" == "https://github.com/Simondbf/site_revision_holberton" ]] || {
  echo 'Dépôt distant inattendu : publication bloquée.' >&2; exit 2;
}
git -C "$HBTN_SOURCE_REPO" fetch --quiet --no-tags origin main
sha=$(git -C "$HBTN_SOURCE_REPO" rev-parse --verify refs/remotes/origin/main^{commit})
guard="$HBTN_SOURCE_REPO/deploiement/verifier_ci_main.sh"
[[ -f "$guard" ]] || { echo 'Garde CI non encore installé dans le dépôt de référence.' >&2; exit 1; }
bash "$guard" "$sha"
previous=$(readlink -f "$HBTN_ACTIVE_LINK")
release="$HBTN_RELEASES_DIR/$sha"
if [[ "$previous" == "$release" ]]; then
  echo "Version $sha déjà servie."
  exit 0
fi
worktree=$(mktemp -d "$HBTN_RELEASES_DIR/.prepare-${sha}.XXXXXXXX")
new_link=''
cleanup(){
  git -C "$HBTN_SOURCE_REPO" worktree remove --force "$worktree" >/dev/null 2>&1 || :
  rmdir "$worktree" >/dev/null 2>&1 || :
  if [[ -n "$new_link" && -L "$new_link" ]]; then rm -f -- "$new_link"; fi
}
trap cleanup EXIT
git -C "$HBTN_SOURCE_REPO" worktree add --quiet --detach "$worktree" "$sha"
if [[ ! -d "$release" ]]; then
  node "$worktree/scripts/preparer_publication.mjs"
  mv -- "$worktree/publication" "$release"
fi
[[ -f "$release/index.html" && -f "$release/manifest-publication.json" ]] || {
  echo 'Le paquet de publication est incomplet.' >&2; exit 1;
}
# Contrôle des empreintes avant la bascule.
while IFS=$'\t' read -r path expected; do
  actual=$(sha256sum "$release/$path" | cut -d' ' -f1)
  [[ "$actual" == "$expected" ]] || {
    echo "Intégrité invalide : $path" >&2; exit 1;
  }
done < <(jq -r '.files[] | [.path,.sha256] | @tsv' "$release/manifest-publication.json")
new_link="$HBTN_ACTIVE_LINK.next.$$"
ln -s "$release" "$new_link"
mv -Tf "$new_link" "$HBTN_ACTIVE_LINK"
new_link=''
# La vérification HTTP doit voir les octets de cette version, pas un cache ou une page d'erreur.
healthy=true
while IFS= read -r path; do
  if [[ "$path" == 'index.html' ]]; then
    url="$site_url/?revision=$sha"
  else
    url="$site_url/$path?revision=$sha"
  fi
  if ! cmp -s "$release/$path" <(curl -fsSL --retry 1 --connect-timeout 8 --max-time 25 "$url"); then
    echo "Ressource absente ou incorrecte en production : $path" >&2
    healthy=false
    break
  fi
done < <(jq -r '.files[].path' "$release/manifest-publication.json")
if [[ "$healthy" != true ]]; then
  rollback="$HBTN_ACTIVE_LINK.rollback.$$"
  ln -s "$previous" "$rollback"
  mv -Tf "$rollback" "$HBTN_ACTIVE_LINK"
  echo "Échec de publication : lien précédent rétabli ($previous)." >&2
  exit 1
fi
echo "Publication statique $sha vérifiée ; version précédente conservée : $previous."
