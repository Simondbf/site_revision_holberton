#!/usr/bin/env bash
# Prévol NON DESTRUCTIF : aucune installation, aucun secret affiché.
# À exécuter sur le VPS avec sudo après avoir copié la branche de staging.
set -Eeuo pipefail

if [[ "${1:-}" == "--help" ]]; then
  echo "Usage : sudo bash deployment/accounts/preflight-staging.sh"
  echo "Contrôle les prérequis AVANT le démarrage de l'API Docker Holberton."
  exit 0
fi
if [[ $# -ne 0 ]]; then echo "Argument inconnu : $*" >&2; exit 2; fi

root=/opt/holberton-revision
private=/etc/holberton-revision
backup="$root/accounts-backup"
errors=0

ok(){ printf '[OK] %s\n' "$1"; }
block(){ printf '[BLOQUANT] %s\n' "$1" >&2; errors=$((errors+1)); }
command_required(){
  if command -v "$1" >/dev/null 2>&1; then ok "Commande disponible : $1"
  else block "Commande absente : $1"; fi
}
valid_config(){
  local file=$1 key=$2
  [[ -r "$file" ]] || return 1
  awk -v k="$key" '
    index($0,k"=")==1 {
      value=substr($0,length(k)+2);
      if(value!="" && value !~ /^(REMPLACER|CHANGER|YOUR_)/) found=1;
    }
    END {exit !found}
  ' "$file"
}
private_mode(){
  local file=$1 mode
  [[ -f "$file" ]] || { block "Fichier secret absent : $file"; return; }
  mode=$(stat -c '%a' "$file") || { block "Permissions illisibles : $file"; return; }
  if (( (8#$mode & 0077) != 0 )); then
    block "Accès groupe/autres interdit pour $file (mode $mode)"
  else ok "Permissions privées : $file"; fi
}
echo "Prévol Holberton : lecture seule, aucune modification."
if [[ "$EUID" -ne 0 ]]; then block "Exécuter avec sudo pour pouvoir inspecter les secrets"; fi
for tool in docker ss stat awk nginx; do command_required "$tool"; done
if command -v docker >/dev/null 2>&1; then
  docker info >/dev/null 2>&1 && ok "Démon Docker accessible" || block "Démon Docker inaccessible"
  docker compose version >/dev/null 2>&1 && ok "Docker Compose disponible" || block "Docker Compose absent"
fi
for f in "$root/server/Dockerfile" "$root/server/snapshot.mjs" \
         "$root/deployment/accounts/compose.yml" "$root/deployment/accounts/restic-docker.sh" \
         "$root/deployment/accounts/backup-now.sh"; do
  [[ -f "$f" ]] && ok "Fichier source présent : $f" || block "Source non installée : $f"
done
for d in "$root/accounts/data" "$backup/work" "$backup/cache" "$backup/restore"; do
  [[ -d "$d" ]] && ok "Dossier présent : $d" || block "Dossier manquant : $d"
done
if [[ -d "$private" ]]; then
  mode=$(stat -c '%a' "$private")
  [[ "$mode" == 700 ]] && ok "Répertoire privé à 0700" || block "$private doit être à 0700 (actuellement $mode)"
else block "Répertoire de secrets absent : $private"; fi

accounts="$private/accounts.env"
restic_env="$private/backup.env"
private_mode "$accounts"
private_mode "$restic_env"
for key in HBTN_PUBLIC_ORIGIN HBTN_SMTP_HOST HBTN_SMTP_PORT HBTN_SMTP_USER HBTN_SMTP_PASSWORD HBTN_MAIL_FROM; do
  valid_config "$accounts" "$key" && ok "Variable $key renseignée (valeur masquée)" || block "Variable $key absente ou provisoire"
done
if [[ -r "$accounts" ]] && ! grep -qx 'HBTN_PUBLIC_ORIGIN=https://revision-hbtn.soleiljaune.be' "$accounts"; then
  block "Origine publique Holberton incorrecte ou non confirmée"
fi
valid_config "$restic_env" RESTIC_REPOSITORY && ok "Dépôt Restic spécifié (valeur masquée)" || block "RESTIC_REPOSITORY absent ou provisoire"
for file in restic_password id_ed25519; do
  private_mode "$private/$file"
  if [[ -f "$private/$file" ]]; then
    owner=$(stat -c '%u' "$private/$file")
    [[ "$owner" == 1000 ]] && ok "Propriétaire UID 1000 : $file" || block "Vérifier propriétaire conteneur UID 1000 : $file (actuel $owner)"
  fi
done
[[ -f "$private/known_hosts" ]] && ok "Empreinte SSH connue : fichier présent (à vérifier hors bande)" || block "known_hosts absent"
if command -v ss >/dev/null 2>&1; then
  if ss -H -ltn '( sport = :3024 )' | grep -q .; then
    block "Port 3024 déjà utilisé : examiner le service, ne pas arrêter un autre conteneur"
  else ok "Port privé 3024 libre"; fi
fi
if command -v nginx >/dev/null 2>&1; then
  nginx -t >/dev/null 2>&1 && ok "Configuration Nginx existante valide" || block "nginx -t échoue"
fi
if command -v docker >/dev/null 2>&1 && [[ -f "$root/deployment/accounts/compose.yml" && -f "$accounts" ]]; then
  docker compose -f "$root/deployment/accounts/compose.yml" --profile maintenance config -q >/dev/null 2>&1 \
    && ok "Compose Holberton valide" || block "Compose invalide ou fichiers d'environnement non disponibles"
fi
echo "IMPORTANT : ce prévol ne teste ni la délivrabilité Brevo Holberton, ni la restauration Hetzner, ni HTTPS."
if ((errors>0)); then
  echo "$errors point(s) bloquant(s). Ne pas activer /api/ ou fusionner la PR." >&2
  exit 1
fi
echo "Prévol hôte terminé. Autorisation de staging seulement ; pas de mise en production."
