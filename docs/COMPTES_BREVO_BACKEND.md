# Comptes facultatifs — Holberton Révision

**Statut : backend et interface développés sur une branche de revue ; aucun compte n'est activé en production.** L'application existante reste consultable en invité.

## Architecture

- Site statique : toutes les fiches, favoris et quiz invités restent disponibles même si le backend est arrêté.
- Service privé Node.js 22 (boucle locale uniquement), routé à travers Nginx sur `/api/`.
- **SQLite dédiée** : utilisateurs vérifiés, jetons de connexion à usage unique stockés sous forme de condensat SHA-256, sessions côté serveur, progression et révisions.
- **Connexion sans mot de passe** : un courriel transactionnel Brevo contient un lien valable 15 minutes, à usage unique. L'ouverture du lien valide la possession de l'adresse et crée une session.
- Cookies de session `__Host-hbtn_session` avec `Secure; HttpOnly; SameSite=Lax; Path=/` en HTTPS. Vérification de l'en-tête Origin et jeton CSRF pour les changements d'état.
- Durée de session : 14 jours ; suppression de session à la déconnexion.
- Progrès : accès uniquement via l'identifiant extrait de la session authentifiée, jamais via un identifiant de compte dans l'URL. Mise à jour avec `revision` pour refuser les écrasements concurrents par HTTP 409.
- Export et suppression du compte ; suppression réservée à une session récemment authentifiée.

Les secrets SMTP et la base sont **strictement séparés** de l'application financière « Comptes ». Réutiliser le même prestataire Brevo ne signifie pas partager les données d'utilisateurs ni recopier les fichiers `/etc/compte.env` dans le dépôt.

## Endpoints

| Méthode | Route | Accès |
|---|---|---|
| GET | /api/health | État du service, disponibilité SMTP (aucune donnée personnelle) |
| GET | /api/auth/me | État connecté ou invité |
| POST | /api/auth/request-link | Envoyer un lien à usage unique, anti-énumération, limitation de débit |
| POST | /api/auth/verify | Valider une adresse et ouvrir une session |
| POST | /api/auth/logout | Session + CSRF |
| GET / PUT | /api/progress | Progression propre à la session ; PUT avec CSRF et révision |
| GET | /api/account/export | Export des données personnelles du compte |
| DELETE | /api/account | Suppression définitive ; CSRF + connexion récente |

Les identifiants e-mail, les jetons et les réponses aux quiz ne doivent pas être consignés dans les logs HTTP. Les e-mails sont transactionnels uniquement.

## Configuration et installation, seulement après audit

1. Installer Node.js **22.13 ou plus récent** sur le VPS, ainsi que les dépendances de `server/package.json`. Le fichier **package-lock.json** est maintenant versionné (Nodemailer 7.0.13) ; utiliser `npm ci --omit=dev` et effectuer un audit de dépendances avant déploiement. `node:sqlite` est encore marqué expérimental dans certaines versions de Node 22 ; revoir sa stabilité et figer le runtime.
2. Créer un utilisateur système dédié `holberton-revision`, un dossier non public `/var/lib/holberton-revision/` avec permissions minimales et une base SQLite `accounts.sqlite` hors de la racine Web.
3. Définir les variables de `server/env.example` dans un fichier privé `/etc/holberton-revision.env` (`root:root`, `chmod 600`). Ne jamais copier d'identifiants dans le HTML, Git, une capture ou les logs.
4. Configurer le relais **SMTP Brevo** existant avec un expéditeur vérifié (par exemple `contact@soleiljaune.be`), mais sous variables propres à ce service. Le domaine `soleiljaune.be` a déjà été authentifié pour le projet Comptes ; **un envoi réel depuis ce service n'est pas encore confirmé**.
5. Configurer Nginx, après vérification de HTTPS, pour envoyer uniquement `/api/` au serveur local. Exemple :

```nginx
location /api/ {
    client_max_body_size 300k;
    proxy_pass http://127.0.0.1:3024;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Real-IP $remote_addr;   # Nécessaire au quota par IP derrière Nginx
    proxy_read_timeout 20s;
}
```

6. L'API écoute uniquement sur 127.0.0.1 et n'accepte X-Real-IP que depuis cette interface ; Nginx doit systématiquement réécrire cet en-tête et ajouter des limitations de débit et de taille de requête au niveau proxy.
7. Ne pas activer avant d'avoir testé deux comptes isolés, confirmation des liens, CSRF, expirations, limites d'envois, authentification, perte de session, sauvegarde/restauration SQLite, cookies HTTPS, suppression, export, erreurs SMTP et mode invité.
8. Le déploiement automatique VPS actuellement déclenché par timer doit être conditionné aux tests GitHub réussis et à une politique de rollback ; protéger `main` avant toute ouverture publique des comptes. Un blocage ou indisponibilité Brevo ne doit jamais bloquer le cours ni le quiz invité.
9. Finaliser les mentions RGPD et politiques de conservation, notamment l'effacement dans les sauvegardes selon une période définie. **Une CI verte n'est pas une certification de sécurité**.

## Synchronisation côté navigateur

- Les favoris et le thème demeurent locaux pour les visiteurs anonymes.
- À la connexion, la page affiche séparément l'historique local et l'historique du compte.
- L'import de la progression invitée vers le compte demande une confirmation. Si un historique existe déjà côté serveur, l'utilisateur doit être averti explicitement avant tout remplacement.
- Le chargement de l'historique du compte vers le navigateur demande deux confirmations lorsqu'il remplace des données locales.
- Après activation volontaire, les nouvelles réponses sont synchronisées. Un conflit HTTP 409 stoppe la synchronisation automatique et conserve les deux versions sans écrasement silencieux.
- Export des résultats invités et du compte ; suppression du compte sans suppression silencieuse des favoris invités.
- Pas de statistique par personne transmise à Brevo ; Brevo reçoit seulement l'adresse et le lien transactionnel nécessaire à la connexion.

## Vérifications automatisées

`node --test server/auth.test.mjs` : authentification, jeton à usage unique, sessions, anti-CSRF et Origin, deux utilisateurs isolés, contrôle de révision, export, suppression, déconnexion, SMTP désactivé. Cela ne remplace ni audit de sécurité ni test SMTP réel.

## Décision de fusion

Cette PR est **empilée sur #25, lui-même dépendant de #24**. Elle ne doit pas être fusionnée avant la validation des PR de navigation et de quiz, et **ne déploie pas** le backend à elle seule. La protection de `main` et le déploiement sécurisé doivent être validés par le propriétaire.

## Administration et statistiques — PR complémentaire, non activée

- L'administrateur se connecte avec une adresse vérifiée, correspondant exactement à la variable privée `HBTN_ADMIN_EMAIL` définie côté VPS. Le navigateur ne peut jamais s'attribuer ce droit.
- `GET /api/admin/stats` vérifie la session côté serveur et ne fournit que des agrégats : comptes inscrits, comptes synchronisés, visites journalières, nombre d'auteurs de commits GitHub. Invité : 401 ; compte ordinaire : 403.
- `POST /api/analytics/visit` compte au plus une ouverture par onglet et jour UTC grâce à `sessionStorage`, avec contrôle d'origine ; ces visites approximatives ne sont pas des visiteurs uniques, peuvent être bloquées et sont susceptibles d'abus. Aucun e-mail, adresse IP ou identifiant de session n'est stocké dans la table des visites ; limitation par IP hachée en mémoire.
- Auteurs de commits via l'API GitHub publique, cache une heure ; nombre indisponible en cas d'échec ou indiqué comme minimum si plus de 100 contributeurs.
- Statistiques non rétroactives et non activées en production avant audit du backend, SMTP Brevo réel, sauvegardes, sécurité RGPD, HTTPS, CI et rollback.
