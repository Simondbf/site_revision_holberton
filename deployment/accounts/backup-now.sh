#!/bin/sh
set -eu
# À déclencher depuis le timer système ; toute manipulation SQLite / Restic est dans Docker.
cd /opt/holberton-revision/deployment/accounts
exec 9>/opt/holberton-revision/accounts-backup/backup.lock
flock -n 9 || { echo 'Sauvegarde Holberton déjà en cours.' >&2; exit 1; }
# Ne pas accumuler de copies locales d'une base contenant des comptes supprimés.
# Le snapshot local est temporaire ; la restauration se fait depuis Restic.
trap 'rm -f -- /opt/holberton-revision/accounts-backup/work/accounts.sqlite' EXIT
docker compose -f compose.yml --profile maintenance run --rm snapshot
# Le nom d'hôte doit rester stable malgré les conteneurs éphémères.
sh ./restic-docker.sh backup /data --tag holberton-revision --host holberton-revision
# Grouper par chemin et tag, pas par hôte Docker : sinon chaque conteneur
# crée un groupe distinct dont la première sauvegarde est gardée indéfiniment.
sh ./restic-docker.sh forget --tag holberton-revision --group-by paths,tags --keep-within 7d --prune
# Le fichier temporaire local est effacé par le trap, même en cas d'échec.
