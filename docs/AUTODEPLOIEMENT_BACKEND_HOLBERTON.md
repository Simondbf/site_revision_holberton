# Autodéploiement de l'API Holberton

## Architecture

Un seul déclencheur périodique : le timer **existant** `holberton-deploy.timer`. Quand son service de publication statique `holberton-deploy.service` se termine avec succès, l'attribut systemd `OnSuccess` lance un **nouveau service oneshot**, pas un second timer : `holberton-api-deploy.service`.

La PR n'installe rien sur le VPS à elle seule. Une intervention SSH unique est indispensable pour installer ce chaînage dans systemd.

Le service de mise à jour API tourne en root pour accéder au socket Docker. Son script est installé en mode 0700 dans `/usr/local/sbin/holberton-auto-update-api`, hors du dépôt Git potentiellement modifiable. Il ne met à jour ni le site financier Comptes, ni les autres applications, ni Nginx.

## Installation unique après fusion de la PR et CI verte

Avant toute modification du serveur, vérifier le service existant :

```bash
systemctl cat holberton-deploy.service
systemctl show holberton-deploy.service -p Type -p RemainAfterExit -p ExecStart
systemctl is-enabled holberton-deploy.timer
```

L'installeur accepte uniquement le service statique connu de type `oneshot`, sans `RemainAfterExit`, et dont l'`ExecStart` fait référence à `update-holberton-revision`. Sinon il s'arrête sans changer systemd.

Le dépôt `/opt/holberton-revision` peut encore être sur l'ancienne branche préparatoire des comptes. Une fois la PR fusionnée, vérifier qu'il est propre, puis basculer sans écraser les modifications locales :

```bash
cd /opt/holberton-revision
git status --short
git fetch origin main
git switch main || git switch -c main origin/main
git merge --ff-only origin/main
sudo bash deploiement/installer-autodeploiement-api.sh
```

L'installeur copie deux unités, exécute `systemctl daemon-reload`, vérifie l'`OnSuccess` et **ne lance pas immédiatement de déploiement**. Il ne modifie pas le timer actuel.

## Premier lancement contrôlé

Si le propriétaire veut l'onglet Administration, ajouter une seule fois `HBTN_ADMIN_EMAIL=` suivi de **l'adresse déjà vérifiée du propriétaire** dans le fichier privé `/etc/holberton-revision/accounts.env`. Ne jamais publier le contenu de ce fichier dans GitHub ni dans un journal.

```bash
sudo nano /etc/holberton-revision/accounts.env
sudo systemctl start holberton-api-deploy.service
sudo systemctl status holberton-api-deploy.service --no-pager
sudo journalctl -u holberton-api-deploy.service -n 80 --no-pager
curl -fsS http://127.0.0.1:3024/api/health
```

Vérifier ensuite qu'un compte ordinaire ne voit pas l'onglet Administration (et reçoit HTTP 403 en consultant les statistiques) ; un visiteur non connecté reçoit HTTP 401.

## Cycle automatique

1. Récupérer `origin/main` et exiger les deux checks verts `verifier` et `navigateur` pour le **SHA exact**.
2. Si aucun fichier backend (`server/` ou configuration Compose) n'a changé depuis la dernière version validée, ne pas reconstruire le conteneur.
3. Créer un worktree temporaire sur le SHA approuvé, sans changer la branche du dépôt local.
4. Identifier le conteneur API existant et conserver son image précédente.
5. Déclencher la **sauvegarde SQLite chiffrée existante** via `holberton-backup-docker.service` ; refuser de poursuivre si elle échoue ou si son timer est inactif.
6. Construire la nouvelle image, recréer uniquement le service Docker `api`, attendre sa santé et vérifier `/api/health` et le refus HTTP 401 de `/api/admin/stats` sans session.
7. En cas d'échec, restaurer l'image précédente et recréer le conteneur. Ne changer la référence de déploiement qu'après succès.

## Limites et retour arrière

- Ne pas créer de `holberton-api-deploy.timer`, de cron supplémentaire ni de deuxième sauvegarde Restic.
- Le premier lancement exige que le service `api` existe déjà ; ce mécanisme ne provisionne pas une nouvelle application.
- Le rollback restaure **l'image Docker**, pas une migration de schéma SQLite éventuellement incompatible. Toute migration destructrice future doit être préparée hors de cet autodéploiement ; sauvegardes et compatibilité arrière restent indispensables.
- La construction peut durer plus longtemps que le déploiement statique. Il peut y avoir une brève interruption de l'API lors de la recréation du conteneur.
- Les nouvelles versions du script de déploiement lui-même nécessitent de **relancer l'installeur** afin de conserver le script root hors du dépôt.
- Les mesures d'audience sont approximatives et non rétroactives ; elles ne représentent pas des visiteurs uniques.
- En cas de doute sur l'unité systemd existante, l'installeur refuse plutôt que d'écraser une configuration inconnue.

Diagnostic :

```bash
systemctl show holberton-deploy.service -p OnSuccess
systemctl status holberton-api-deploy.service --no-pager
journalctl -u holberton-api-deploy.service -n 100 --no-pager
systemctl list-timers --all --no-pager | grep holberton
```

Pour arrêter l'autodéploiement API sans interrompre le site statique, retirer uniquement le fichier `/etc/systemd/system/holberton-deploy.service.d/50-api-on-success.conf` puis exécuter `systemctl daemon-reload`.
