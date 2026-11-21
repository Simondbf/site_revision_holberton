#!/bin/sh
set -eu
# À déclencher depuis le timer système ; toute manipulation SQLite / Restic est dans Docker.
cd /opt/holberton-revision/deployment/accounts
exec 9>/opt/holberton-revision/accounts-backup/backup.lock
flock -n 9 || { echo 'Sauvegarde Holberton déjà en cours.' >&2; exit 1; }
docker compose -f compose.yml --profile maintenance run --rm snapshot
./restic-docker.sh backup /data --tag holberton-revision
./restic-docker.sh forget --tag holberton-revision --keep-within 7d --prune
# Le répertoire work est gardé pour le dernier contrôle local ; un nettoyage
# séparé peut être effectué uniquement après validation de la restauration.
