#!/usr/bin/env bash
# Amorceur du staging Holberton, sans aucun démarrage Docker, ni accès aux autres applications.
set -Eeuo pipefail
root=/opt/holberton-revision
branch=preparer-comptes-docker-brevo-restic-20261121
[[ "$EUID" -eq 0 ]] || { echo 'Exécuter en root.' >&2; exit 1; }
[[ -d "$root/.git" ]] || { echo "Dépôt de staging absent : $root" >&2; exit 1; }
[[ "$(git -C "$root" rev-parse --show-toplevel)" == "$root" ]] || { echo 'Mauvais dépôt.' >&2; exit 1; }
[[ "$(git -C "$root" branch --show-current)" == "$branch" ]] || { echo 'Branche de staging incorrecte.' >&2; exit 1; }
origin=$(git -C "$root" remote get-url origin)
[[ "$origin" == "https://github.com/Simondbf/site_revision_holberton.git" || "$origin" == "git@github.com:Simondbf/site_revision_holberton.git" ]] || {
 echo "Origine Git inattendue, installation refusée." >&2; exit 1;
}
if command -v ss >/dev/null && ss -H -ltn '( sport = :3024 )' | grep -q .; then
 echo 'Port 3024 déjà occupé : ne pas perturber le service présent.' >&2; exit 1
fi
if [[ -e /etc/holberton-revision && ! -d /etc/holberton-revision ]]; then
 echo 'Le chemin privé attendu existe mais n’est pas un dossier.' >&2; exit 1
fi
for d in "$root/accounts/data" "$root/accounts-backup/work" "$root/accounts-backup/cache" "$root/accounts-backup/restore"; do
 if [[ -e "$d" && ! -d "$d" ]]; then echo "Chemin inattendu : $d" >&2; exit 1; fi
done
install -d -m 0700 -o root -g root /etc/holberton-revision
install -d -m 0700 -o root -g root "$root/accounts" "$root/accounts-backup"
for d in "$root/accounts/data" "$root/accounts-backup/work" "$root/accounts-backup/cache" "$root/accounts-backup/restore"; do
 install -d -m 0700 -o 1000 -g 1000 "$d"
done
echo 'Répertoires Holberton créés sans modifier les autres services.'
echo 'Staging non démarré : renseigner séparément les secrets privés et vérifier Restic avant exposition publique.'
echo 'Contrôle suivant : bash /opt/holberton-revision/deployment/accounts/preflight-staging.sh'
