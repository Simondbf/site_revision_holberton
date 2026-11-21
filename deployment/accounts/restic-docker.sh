#!/bin/sh
set -eu
# L'outil et SSH tournent uniquement dans Docker, jamais sur l'hôte.
# Initialiser /etc/holberton-revision/backup.env et les secrets privés.
: "${HBTN_BACKUP_ROOT:=/opt/holberton-revision/accounts-backup}"
exec docker run --rm --read-only --cap-drop ALL --security-opt no-new-privileges \
  --tmpfs /tmp:rw,nosuid,noexec,size=128m \
  --env-file /etc/holberton-revision/backup.env \
  -e RESTIC_PASSWORD_FILE=/run/secrets/restic_password \
  -e RESTIC_CACHE_DIR=/cache \
  -v /etc/holberton-revision/restic_password:/run/secrets/restic_password:ro \
  -v /etc/holberton-revision/id_ed25519:/run/secrets/id_ed25519:ro \
  -v /etc/holberton-revision/known_hosts:/run/secrets/known_hosts:ro \
  -v "${HBTN_BACKUP_ROOT}/work:/data:ro" \
  -v "${HBTN_BACKUP_ROOT}/cache:/cache:rw" \
  -v "${HBTN_BACKUP_ROOT}/restore:/restore:rw" \
  holberton-restic:local -o "sftp.command=ssh -i /run/secrets/id_ed25519 -o StrictHostKeyChecking=yes -o UserKnownHostsFile=/run/secrets/known_hosts -o BatchMode=yes" "$@"
