# Mise en service des comptes — Docker, Brevo et Restic

**Statut : préparation sur branche, pas encore installée sur le VPS.**

## Contraintes de sécurité

- Ne toucher ni aux applications Comptes, CinéPrivé ou Germain, ni à leurs ports, volumes, bases, sauvegardes et timers.
- Le site statique Holberton reste sur le port 3020. Les comptes utiliseront le port hôte 127.0.0.1:3024 après vérification de sa disponibilité.
- Comptes et Holberton peuvent employer Brevo, mais les clés SMTP, les fichiers secrets, les SQLite et les dépôts Restic doivent être indépendants.
- Toute exécution Node, SQLite, Restic et sauvegarde doit rester dans Docker ; le timer système se limite à déclencher le conteneur.
- Les invités continuent à utiliser cours et quiz sans connexion.

## Autorisation de préparer le déploiement — 21 novembre 2026

Le propriétaire a autorisé la mise en service **si les prérequis opérationnels sont réunis**. Cette autorisation ne remplace pas les tests de sauvegarde, la preuve de délivrabilité Brevo sur Holberton et la validation finale des chemins Nginx. Un e-mail Brevo reçu depuis l'application financière Comptes valide uniquement cette application et éventuellement le fournisseur : il ne prouve pas la configuration des identifiants Holberton.

La connexion GitHub n'exécute aucune commande sur le VPS. **Ne pas fusionner la PR #37 uniquement pour tenter de déployer** : l'ancien timer ne publie que `index.html`, jamais le backend, la base ni les services de sauvegarde. Installer d'abord la branche PR en espace de staging privé, sans route publique `/api/`.

### Prévol non destructif sur le VPS

Après avoir installé explicitement le code de la branche de PR dans `/opt/holberton-revision`, créé les répertoires dédiés et provisionné les secrets distincts, lancer :

~~~sh
sudo bash /opt/holberton-revision/deployment/accounts/preflight-staging.sh
~~~

Le prévol ne modifie ni un service ni un fichier, ne révèle aucune valeur de secret et refuse de poursuivre si Docker/Compose, Nginx, le port 3024, les fichiers ou les permissions ne sont pas prêts. **Ne pas stopper arbitrairement le service qui occuperait ce port.** Il ne remplace pas un audit des namespaces Docker/rootless ni la vérification hors bande du `known_hosts`.

Lorsque ce prévol réussit : démarrer l'API privée, tester une authentification Brevo **depuis Holberton**, deux comptes isolés et la synchronisation sur deux navigateurs. Exécuter ensuite une sauvegarde Restic sur le dépôt SFTP propre à Holberton et une restauration de contrôle isolée. Seulement après ces preuves, examiner et tester Nginx/HTTPS, la rétention des données et le retour arrière avant toute publication.

## Dossiers VPS (à préparer sans perturber les services existants)

~~~sh
sudo install -d -m 0700 /etc/holberton-revision
sudo install -d -m 0700 -o 1000 -g 1000 /opt/holberton-revision/accounts/data
sudo install -d -m 0700 -o 1000 -g 1000 /opt/holberton-revision/accounts-backup/work
sudo install -d -m 0700 -o 1000 -g 1000 /opt/holberton-revision/accounts-backup/cache
sudo install -d -m 0700 -o 1000 -g 1000 /opt/holberton-revision/accounts-backup/restore
~~~

Vérifier que UID/GID 1000 correspondent aux droits voulus et ajuster si nécessaire. Les sources server/ et deployment/accounts/ doivent être installées sous /opt/holberton-revision, car l'ancien déployeur ne publie que index.html.

Placer les variables de server/env.example dans /etc/holberton-revision/accounts.env (0600). Utiliser une clé SMTP propre à Holberton, un expéditeur Brevo vérifié, et vérifier SPF/DKIM/DMARC. Aucun secret dans GitHub.

## Démarrage local de staging

~~~sh
cd /opt/holberton-revision
docker compose -f deployment/accounts/compose.yml config
docker compose -f deployment/accounts/compose.yml up -d --build api
curl -fsS http://127.0.0.1:3024/api/health
~~~

La réponse doit indiquer emailsAvailable: true, mais cela ne prouve PAS que le message arrive. Tester un vrai lien à usage unique, puis deux comptes indépendants, la protection CSRF, la connexion HTTPS et la synchronisation entre navigateurs. Ne pas exposer /api/ publiquement avant validation.

## Sauvegardes : méthode Comptes adaptée à Holberton

Sur Comptes, le mécanisme éprouvé repose sur un snapshot SQLite cohérent, Docker + Restic chiffré, un dépôt Hetzner SFTP distant, une restauration et un contrôle intégral. Réutiliser cette architecture et non les données ni les secrets de Comptes.

1. Créer un dépôt Restic propre à Holberton (par exemple /restic-holberton chez Hetzner), avec un mot de passe indépendant et, idéalement, une clé SFTP distincte.
2. Placer les secrets privés sous /etc/holberton-revision/ : backup.env, restic_password, id_ed25519, known_hosts. Vérifier **hors bande** la clé hôte SSH (ne jamais accepter automatiquement une empreinte inconnue). Le conteneur Restic s'exécute en UID/GID **1000:1000** ; attention, les fichiers secrets montés **root:root en 0600 seraient illisibles dans le conteneur**, même si Docker peut les monter. Laisser le répertoire parent privé à root (0700) et ajuster les propriétaires des trois fichiers nécessaires :

~~~sh
sudo chown 1000:1000 /etc/holberton-revision/restic_password /etc/holberton-revision/id_ed25519 /etc/holberton-revision/known_hosts
sudo chmod 0400 /etc/holberton-revision/restic_password /etc/holberton-revision/id_ed25519
sudo chmod 0444 /etc/holberton-revision/known_hosts
sudo chown root:root /etc/holberton-revision/backup.env
sudo chmod 0600 /etc/holberton-revision/backup.env
~~~

Vérifier d'abord que le démon Docker et les UID réels correspondent à ce modèle (un Docker rootless/userns-remap peut nécessiter des droits différents). Ne pas réutiliser les secrets d'un autre service. Les permissions du répertoire /etc/holberton-revision empêchent les utilisateurs ordinaires de parcourir ces fichiers sur l'hôte.
3. Construire le conteneur : docker build -t holberton-restic:local -f deployment/accounts/restic.Dockerfile deployment/accounts
4. Rendre exécutables les scripts deployment/accounts/*.sh sur le VPS (chmod 0700), puis initialiser le dépôt avec deployment/accounts/restic-docker.sh init.
5. Exécuter deployment/accounts/backup-now.sh. Le conteneur SQLite produit un snapshot via VACUUM INTO, puis vérifie PRAGMA integrity_check ; Restic transfère une copie chiffrée.
6. Restaurer dans /opt/holberton-revision/accounts-backup/restore, vérifier le SQLite avec deployment/accounts/restic-restore-check.sh /backup/data/accounts.sqlite. Ne jamais écraser la base active pendant le test.
7. Activer seulement ensuite le timer holberton-backup-docker.timer. Contrôler les journaux et connecter une surveillance Healthchecks distincte. Vérifier périodiquement non seulement la réussite du timer mais aussi la présence de snapshots récents et la capacité à les restaurer.

**Ne jamais restaurer sur la base active** : le test doit porter sur une copie isolée. La rétention des snapshots chiffrés et celle du fichier temporaire local `accounts-backup/work/accounts.sqlite` doivent être prises en compte dans l'information de confidentialité et dans le nettoyage des sauvegardes.

La rotation Restic proposée est de 7 jours sous réserve d'une exécution régulière et réussie de la purge. IMPORTANT : supprimer un compte supprime immédiatement la base active, mais pas instantanément toutes les anciennes copies Restic chiffrées. Ne promettre aucun effacement instantané des sauvegardes ; vérifier la rétention et les engagements RGPD avant publication.

## Nginx et retour arrière

Le fichier deployment/accounts/nginx-api.snippet prépare le reverse proxy vers le port privé 3024. Valider nginx -t, HTTPS, les cookies Secure/HttpOnly, CSRF et restrictions de débit avant reload. La suppression de la seule route /api/ suffit à désactiver les comptes sans toucher au site statique existant. Sauvegarder le schéma SQLite avant toute migration.

## Conditions bloquantes avant ouverture publique

- Envoi Brevo réel réussi depuis le conteneur Holberton.
- Sauvegarde et restauration Restic réellement testées sur le VPS.
- Tests d'isolation de plusieurs utilisateurs et conflits multi-appareils.
- Politique de confidentialité et de suppression tenant compte des copies chiffrées.
- Vérification des logs du reverse proxy et de la non-exposition de secrets.
- CI GitHub verte, validation explicite du propriétaire et sauvegarde avant fusion/déploiement.
