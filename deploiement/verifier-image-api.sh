#!/usr/bin/env bash
# Test de démarrage de l'image avec une base éphémère et sans accès réseau.
set -Eeuo pipefail
[[ $# -eq 1 ]] || { echo 'Usage : verifier-image-api.sh IMAGE' >&2; exit 2; }
image=$1
container=''
cleanup(){
 local result=$?
 trap - EXIT
 if [[ -n "$container" ]]; then
  if (( result != 0 )); then
   docker logs --tail 40 "$container" >&2 || :
  fi
  docker rm -f "$container" >/dev/null 2>&1 || :
 fi
 exit "$result"
}
trap cleanup EXIT
# Aucune donnée ni configuration réelle, aucun port publié.
container=$(docker run -d --network none --read-only --cap-drop ALL \
 --security-opt no-new-privileges:true --pids-limit 80 --memory 256m \
 --tmpfs /data:rw,uid=1000,gid=1000,mode=0700 \
 --tmpfs /tmp:rw,noexec,nosuid,size=16m \
 -e HBTN_PUBLIC_ORIGIN=https://revision-hbtn.soleiljaune.be \
 -e HBTN_BIND_HOST=0.0.0.0 -e HBTN_CONTAINER_ONLY=1 \
 -e HBTN_TRUST_LOCAL_PROXY=1 -e HBTN_DB_PATH=/data/accounts.sqlite \
 -e HBTN_PORT=3024 -e HBTN_ADMIN_EMAIL=admin@example.invalid \
 -e HBTN_SMTP_HOST=smtp.example.invalid -e HBTN_SMTP_PORT=587 \
 -e HBTN_SMTP_USER=ci-fictif -e HBTN_SMTP_PASSWORD=ci-fictif \
 -e HBTN_MAIL_FROM=contact@example.invalid "$image")
for i in {1..30}; do
 if docker exec "$container" node -e '
 (async()=>{
   if(process.getuid()===0)throw Error("Utilisateur root interdit");
   const base="http://127.0.0.1:3024";
   const response=await fetch(base+"/api/health",{signal:AbortSignal.timeout(2000)});
   const data=await response.json();
   if(!response.ok||data.status!=="ok"||data.emailsAvailable!==true)throw Error("Santé API invalide");
   const admin=await fetch(base+"/api/admin/stats",{signal:AbortSignal.timeout(2000)});
   if(admin.status!==401)throw Error("Route administration non protégée");
 })().catch(()=>process.exit(1))' >/dev/null 2>&1; then
  echo 'Image API validée : démarrage non-root, santé HTTP 200 et administration HTTP 401.'
  exit 0
 fi
 [[ "$(docker inspect --format '{{.State.Running}}' "$container")" == true ]] || break
 sleep 1
done
echo 'Échec du test de démarrage isolé de l’image API.' >&2
exit 1
