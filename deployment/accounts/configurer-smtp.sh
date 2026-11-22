#!/usr/bin/env bash
# Configure uniquement les identifiants SMTP Holberton, sans les afficher ni
# toucher à la configuration de l'application Comptes.
set +x
set -Eeuo pipefail
umask 077
private=/etc/holberton-revision
destination="$private/accounts.env"
[[ "$EUID" -eq 0 ]] || { echo 'Lancer en root.' >&2; exit 1; }
[[ -d "$private" && "$(stat -c '%a' "$private")" == 700 ]] || {
 echo "Le répertoire privé $private doit exister et être à 0700." >&2; exit 1;
}
[[ ! -e "$destination" ]] || {
 echo "Fichier déjà présent : $destination. Aucune donnée ne sera remplacée." >&2; exit 1;
}
echo "Entre des identifiants SMTP Brevo dédiés à Holberton."
echo "Les valeurs ne seront pas imprimées et ne seront pas reprises de l'application Comptes."
read -r -p 'Identifiant SMTP Brevo : ' smtp_user
read -r -s -p 'Clé SMTP Brevo (saisie masquée) : ' smtp_password
printf '\n'
read -r -p 'Adresse expéditeur vérifiée chez Brevo : ' mail_from
if [[ -z "$smtp_user" || -z "$smtp_password" || ! "$mail_from" =~ ^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$ ]]; then
 echo 'Paramètres manquants ou adresse expéditeur invalide. Aucun fichier créé.' >&2
 exit 1
fi
for value in "$smtp_user" "$smtp_password" "$mail_from"; do
 [[ "$value" != *$'\r'* ]] || { echo 'Retour chariot refusé.' >&2; exit 1; }
done
tmp=$(mktemp "$private/.accounts.env.XXXXXXXX")
trap 'rm -f -- "$tmp"' EXIT
{
 printf 'NODE_ENV=production\n'
 printf 'HBTN_PUBLIC_ORIGIN=https://revision-hbtn.soleiljaune.be\n'
 printf 'HBTN_DB_PATH=/data/accounts.sqlite\n'
 printf 'HBTN_BIND_HOST=127.0.0.1\n'
 printf 'HBTN_PORT=3024\n'
 printf 'HBTN_TRUST_LOCAL_PROXY=0\n'
 printf 'HBTN_SMTP_HOST=smtp-relay.brevo.com\n'
 printf 'HBTN_SMTP_PORT=587\n'
 printf 'HBTN_SMTP_USER=%s\n' "$smtp_user"
 printf 'HBTN_SMTP_PASSWORD=%s\n' "$smtp_password"
 printf 'HBTN_MAIL_FROM=%s\n' "$mail_from"
} > "$tmp"
chmod 0600 "$tmp"
mv -n -- "$tmp" "$destination"
[[ -f "$destination" ]] || { echo 'Échec création de accounts.env.' >&2; exit 1; }
unset smtp_password
echo "Fichier Holberton créé : $destination (root, 0600), sans afficher ses valeurs."
echo "Ne pas copier le fichier dans Git ni transmettre son contenu dans la conversation."
