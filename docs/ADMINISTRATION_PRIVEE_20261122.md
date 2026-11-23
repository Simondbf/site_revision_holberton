# Administration Holberton — PR de livraison

Le tableau de bord privé vient **après** l'interface des comptes de la PR #38. Il s'appuie exclusivement sur le backend déjà déployé : aucune nouvelle application Comptes (finances) n'est créée.

## Fonctionnement

- Onglet **Administration** visible seulement après connexion d'un compte dont l'adresse vérifiée correspond à `HBTN_ADMIN_EMAIL`, variable définie **sur le VPS seulement**.
- L'API `GET /api/admin/stats` impose elle-même l'authentification (401 sans session, 403 pour les comptes ordinaires ou si `HBTN_ADMIN_EMAIL` est absent). Ce n'est **pas** une protection fondée sur le seul bouton masqué.
- Statistiques : inscrits, comptes avec progression, sessions de quiz encore conservées dans les historiques synchronisés, activité navigateur sur 30 jours, contributeurs au dépôt GitHub.
- `POST /api/analytics/visit` n'enregistre que des **comptages par date UTC**, sans adresse IP, e-mail, identifiant utilisateur ni identifiant de navigateur dans la table d'audience. Le navigateur ne déclare au plus qu'un événement par jour via sa préférence locale. Quotas globaux côté API. **Ce ne sont pas des visiteurs uniques**, et des comptages artificiels restent possibles.
- Historique non rétroactif : les mesures d'audience commencent après la publication. Un navigateur sans stockage peut ne pas être compté.

## Prévisualisation et gouvernance

Les captures de l'interface en modes clair et sombre sont générées dans le workflow navigateur (`apercus/espace-admin-pr39-*.png`) à partir de **données fictives**. Elles doivent être présentées au propriétaire avant fusion. Ne pas annoncer la production sur la seule base d'une CI verte.

## Mise en service après validation des images

1. Confirmer les deux checks verts sur le commit PR final et recueillir la validation explicite du propriétaire sur les visuels.
2. Fusionner la PR, vérifier les checks de `main`, puis laisser le pipeline statique publier `index.html`.
3. **Sur le VPS par l'opérateur** : dans `/etc/holberton-revision/accounts.env`, ajouter `HBTN_ADMIN_EMAIL=` avec **la même adresse que le compte vérifié** du propriétaire, sans la committer ni afficher les autres secrets. Conserver les permissions du fichier privé.
4. Mettre le dépôt de référence à jour sur la branche `main` (vérifier qu'il n'y a pas de modifications locales) puis reconstruire seulement le service Holberton `api` depuis `deployment/accounts/compose.yml` avec Docker Compose. Ne pas toucher aux autres applications ni aux données SQLite persistantes.
5. Vérifier `/api/health`, la connexion du propriétaire, l'onglet Admin, l'accès 403 à `/api/admin/stats` avec un compte ordinaire et l'accès libre aux quiz invités. Si `HBTN_ADMIN_EMAIL` n'est pas renseigné, le panneau n'apparaît pour personne.
6. En cas d'échec, conserver la base et les sauvegardes ; revenir à l'image précédente et/ou retirer `HBTN_ADMIN_EMAIL` jusqu'à résolution.

**Attention :** le timer historique du site ne redéploie pas le conteneur API. Un changement de `server/app.mjs` nécessite une reconstruction/redémarrage ciblé du service. Les sauvegardes Restic chiffrées et leur timer restent indépendants. Les données d'audience sont agrégées, mais les journaux du reverse proxy peuvent toujours contenir des IP : la politique de confidentialité doit le refléter.

## Sécurité et tests

- `node --test server/auth.test.mjs` : session propriétaire, refus 401/403, absence d'accès aux données d'autrui, agrégats, protection Origin et absence de rôle administrateur par défaut.
- Playwright : compte propriétaire avec onglet Administration, compte ordinaire sans onglet et 403 côté serveur, continuité du quiz, synchronisation, captures.
- Aucun rôle administrateur modifiable depuis le navigateur. Pas de listing d'e-mails ou de progression individuelle des utilisateurs.
