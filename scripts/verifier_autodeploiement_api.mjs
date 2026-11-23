// Garde-fous statiques : empêcher de publier un pipeline qui lancerait un
// second timer ou modifierait la base sans sauvegarde ni contrôle de la CI.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const deploy=read('deploiement/mettre-a-jour-api.sh');
const installer=read('deploiement/installer-autodeploiement-api.sh');
const service=read('deploiement/holberton-api-deploy.service');
const hook=read('deploiement/holberton-deploy-api-on-success.conf');
const dockerfile=read('server/Dockerfile');
const smoke=read('deploiement/verifier-image-api.sh');
const workflow=read('.github/workflows/verifier-site.yml');

const before=(first,second,description)=>{
 const a=deploy.indexOf(first),b=deploy.indexOf(second);
 assert.ok(a>=0&&b>=0&&a<b,description);
};
assert.match(hook,/^\[Unit\]\nOnSuccess=holberton-api-deploy\.service/m);
assert.match(installer,/static_timer=holberton-deploy\.timer/);
assert.match(installer,/Type\)" == oneshot/);
assert.match(installer,/RemainAfterExit\)" == no/);
assert.match(installer,/systemctl daemon-reload/);
assert.doesNotMatch(installer,/systemctl enable holberton-api-deploy\.timer/);
assert.doesNotMatch(service,/^\[Timer\]/m,'Pas de second timer.');
assert.match(service,/Type=oneshot/);
assert.match(service,/ExecStart=\/usr\/local\/sbin\/holberton-auto-update-api/);
assert.match(installer,/install -D -m 0700 "\$base\/mettre-a-jour-api\.sh" "\$deploy_bin"/);
assert.match(deploy,/flock -n 9/,'Empêcher les déploiements simultanés.');
assert.match(deploy,/verifier_ci_main\.sh/,'Vérifier les deux jobs du SHA avant publication.');
assert.match(deploy,/origin main/,'Suivre seulement main.');
assert.match(deploy,/worktree add --quiet --detach/,'Construire au SHA vérifié.');
assert.match(deploy,/docker compose -f "\$compose_file" ps -q api/,'Ne pas créer silencieusement un service inattendu.');
assert.match(deploy,/systemctl start holberton-backup-docker\.service/,'Sauvegarde préalable.');
assert.match(deploy,/docker image tag "\$old_image" "\$image_name"/,'Retour arrière par ancienne image.');
assert.match(deploy,/\/api\/health/,'Vérifier la santé de l’API.');
assert.match(deploy,/\/api\/admin\/stats/,'Vérifier la protection de la route admin.');
assert.match(deploy,/diff --quiet "\$current" "\$candidate"/,'Ignorer les commits uniquement pédagogiques.');
before('verifier_ci_main.sh" "$candidate"','docker build','CI validée avant build.');
before('systemctl start holberton-backup-docker.service','docker image tag "$release_image" "$image_name"','Sauvegarde avant remplacement de l’image.');
assert.ok(deploy.lastIndexOf('mv -f "$state_file.tmp" "$state_file"')>deploy.indexOf('docker compose -f "$compose_file" up -d'),
 'L’état doit être validé seulement après le déploiement.');
assert.doesNotMatch(deploy,/\brm\s+-rf\s+\/opt\/holberton-revision\/accounts\/data/,'Interdiction de supprimer les données SQLite.');
assert.match(dockerfile,/COPY --chmod=0644 server\/app\.mjs server\/email\.mjs server\/index\.mjs/);
assert.match(dockerfile,/^USER node$/m);
assert.match(smoke,/--network none --read-only/);
assert.match(smoke,/--tmpfs \/data:rw,uid=1000,gid=1000,mode=0700/);
assert.doesNotMatch(smoke,/--env-file|--publish|\s-p\s/);
assert.match(workflow,/chmod 0600 "\$RUNNER_TEMP\/hbtn-private"/);
assert.match(workflow,/bash deploiement\/verifier-image-api\.sh holberton-accounts:test/);
before('bash "$workdir/src/deploiement/verifier-image-api.sh" "$release_image"','docker image tag "$release_image" "$image_name"','Tester réellement l’image avant toute bascule.');
assert.match(deploy,/docker logs --tail 40 "\$container_id"/);
console.log('Autodéploiement Holberton : règles de sécurité et chaînage systemd vérifiés.');
