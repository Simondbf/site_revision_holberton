#!/usr/bin/env bash
# Vérification en lecture seule avant tout déploiement de main.
# À appeler depuis le script VPS existant, avant la moindre modification publique.
set -Eeuo pipefail
if [[ $# -ne 1 || ! "$1" =~ ^[0-9a-f]{40}$ ]]; then
  echo 'Usage : verifier_ci_main.sh <SHA complet de origin/main>' >&2
  exit 2
fi
for tool in curl jq; do
  command -v "$tool" >/dev/null || { echo "Outil manquant : $tool" >&2; exit 2; }
done
sha=$1
api="https://api.github.com/repos/Simondbf/site_revision_holberton/commits/${sha}/check-runs?per_page=100"
# Toute erreur réseau, API ou donnée incomplète fait échouer le contrôle.
json=$(curl --fail --silent --show-error --retry 2 --connect-timeout 8 --max-time 30 \
  -H 'Accept: application/vnd.github+json' \
  -H 'X-GitHub-Api-Version: 2022-11-28' "$api")
printf '%s' "$json" | jq -e '.total_count >= 0 and .total_count <= 100 and (.check_runs | type == "array")' >/dev/null || {
  echo 'Réponse GitHub incomplète : publication interdite.' >&2
  exit 1
}
for name in verifier navigateur; do
  if ! printf '%s' "$json" | jq -e --arg name "$name" --arg sha "$sha" \
   '[.check_runs[] | select(.name == $name and .head_sha == $sha and .app.slug == "github-actions")] | sort_by(.id) | last | .status == "completed" and .conclusion == "success"' >/dev/null; then
    echo "Contrôle ${name} absent, échoué ou en cours pour ${sha} : publication interdite." >&2
    exit 1
  fi
done
echo "CI GitHub validée pour ${sha} : verifier et navigateur réussis."
