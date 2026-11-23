#!/usr/bin/env bash
# Installer UNE FOIS le chaînage vers le timer statique déjà en place.
# Ne crée aucun nouveau timer et ne redéploie rien pendant l'installation.
set -Eeuo pipefail

(( EUID == 0 )) || { echo 'Lancer avec sudo/root.' >&2; exit 1; }
base=/opt/holberton-revision/deploiement
static_service=holberton-deploy.service
api_service=holberton-api-deploy.service
static_timer=holberton-deploy.timer
target=/etc/systemd/system/$api_service
hook_dir=/etc/systemd/system/$static_service.d
hook=$hook_dir/50-api-on-success.conf

[[ -f "$base/mettre-a-jour-api.sh" &&
   -f "$base/holberton-api-deploy.service" &&
   -f "$base/holberton-deploy-api-on-success.conf" ]] ||
 { echo 'Scripts de mise en service absents : mettre à jour le dépôt Holberton sur main.' >&2; exit 1; }
command -v systemctl >/dev/null && command -v docker >/dev/null ||
 { echo 'Docker et systemd sont requis.' >&2; exit 1; }
systemctl is-enabled --quiet "$static_timer" ||
 { echo 'Le timer statique Holberton n’est pas activé ; installation arrêtée.' >&2; exit 1; }
[[ "$(systemctl show "$static_service" --value -p Type)" == oneshot ]] ||
 { echo 'Le service statique ne possède pas Type=oneshot. Vérifier avant d’ajouter OnSuccess.' >&2; exit 1; }
[[ "$(systemctl show "$static_service" --value -p RemainAfterExit)" == no ]] ||
 { echo 'RemainAfterExit n’est pas no : OnSuccess ne serait pas déclenché normalement.' >&2; exit 1; }
exec_start=$(systemctl show "$static_service" --value -p ExecStart)
[[ "$exec_start" == *update-holberton-revision* ]] ||
 { echo 'Déployeur statique inattendu. Afficher systemctl cat holberton-deploy.service pour audit.' >&2; exit 1; }
[[ ! -e "$target" ]] ||
 cmp -s "$base/holberton-api-deploy.service" "$target" ||
 { echo 'Service API local différent : ne pas écraser automatiquement.' >&2; exit 1; }
[[ ! -e "$hook" ]] ||
 cmp -s "$base/holberton-deploy-api-on-success.conf" "$hook" ||
 { echo 'Drop-in du service statique différent : ne pas écraser automatiquement.' >&2; exit 1; }
install -D -m 0644 "$base/holberton-api-deploy.service" "$target"
install -d -m 0755 "$hook_dir"
install -m 0644 "$base/holberton-deploy-api-on-success.conf" "$hook"
systemctl daemon-reload
systemd-analyze verify "$target" >/dev/null
on_success=$(systemctl show "$static_service" -p OnSuccess --value)
[[ "$on_success" == *holberton-api-deploy.service* ]] ||
 { echo 'La relation OnSuccess n’a pas été prise en compte.' >&2; exit 1; }
echo 'Autodéploiement API branché sur holberton-deploy.timer ; aucun deuxième timer installé.'
echo 'La prochaine publication statique réussie déclenchera le service holberton-api-deploy.service.'
echo 'Déclenchement manuel immédiat possible : systemctl start holberton-api-deploy.service'
