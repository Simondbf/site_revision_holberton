#!/bin/sh
set -eu
cd /opt/holberton-revision/deployment/accounts
./restic-docker.sh restore latest --target /restore
# Le chemin du fichier SQLite est à récupérer depuis la sortie de restore.
# Pour contrôler sans écraser la base active :
docker run --rm --network none --read-only --cap-drop ALL \
  --security-opt no-new-privileges \
  -v /opt/holberton-revision/accounts-backup/restore:/backup:ro \
  -v /opt/holberton-revision/server/snapshot.mjs:/tools/snapshot.mjs:ro \
  node:22.15.0-bookworm-slim node /tools/snapshot.mjs check "${1:?Chemin /backup/data/accounts-...sqlite requis}"
