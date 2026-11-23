// Garde-fous statiques : empêcher de publier un pipeline qui lancerait un
// second timer ou modifierait la base sans sauvegarde ni contrôle de la CI.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const deploy=read('deploiement/mettre-a-jour-api.sh');
const installer=read('deploiement/installer-autodeploiement-api.sh');
const service=read('deploiement/holberton-api-deploy.service');
const hook=read('deploiement/holberton-deploy-api-on-success.conf');

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
assert.match(service,/ExecStart=\/bin\/bash \/opt\/holberton-revision\/deploiement\/mettre-a-jour-api\.sh/);
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
before('systemctl start holberton-backup-docker.service','docker compose -f "$compose_file" up -d','Sauvegarde avant remplacement.');
assert.ok(deploy.lastIndexOf('mv -f "$state_file.tmp" "$state_file"')>deploy.indexOf('docker compose -f "$compose_file" up -d'),
 'L’état doit être validé seulement après le déploiement.');
assert.doesNotMatch(deploy,/\brm\s+-rf\s+\/opt\/holberton-revision\/accounts\/data/,'Interdiction de supprimer les données SQLite.');
console.log('Autodéploiement Holberton : règles de sécurité et chaînage systemd vérifiés.');
