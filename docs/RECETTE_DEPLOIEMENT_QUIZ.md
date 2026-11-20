# Recette de publication — interface, quiz et comptes (19 novembre 2026)

**Statut : procédures PRÉPARÉES, non installées sur le VPS.** Ne pas interpréter les checks verts de la PR comme un déploiement réussi ni lancer les scripts de publication sur un serveur non préparé.

## Dépendances et décision de fusion

1. La PR #23, six fiches `stdarg.h`, est déjà fusionnée.
2. La PR #24 prépare les pages `Compte` et `Quiz`, sans moteur.
3. La PR #25, empilée sur #24, charge des **fichiers externes** : `quiz/core.mjs`, `quiz/engine.mjs`, `quiz/styles.css`, `quiz/questions-variadiques.json` et `docs/quiz/vague1/section-09-pointeurs-et-tableaux-c.json`. Le timer actuel, qui ne copie que `index.html` d'après `AGENTS.md`, **ne suffit pas**.
4. La PR #26 est empilée sur #25 : comptes facultatifs, backend local, Brevo ; **ne pas activer l'API sans essais VPS et audit des données personnelles**.
5. Les 55 questions restent `review_status: a_verifier` en attendant un relecteur réellement indépendant. La seule réussite de la CI ne confirme pas les réponses.

Le propriétaire décide seul de la sortie du brouillon, de la fusion et du passage en production.

## Ce qui est prêt dans le dépôt

- `node scripts/preparer_publication.mjs` crée `publication/` avec tous les fichiers **statiques référencés**, et un `manifest-publication.json` avec SHA-256. Le dossier `server/` n'est jamais inclus.
- Le workflow `verifier-site.yml` crée l'artefact `site-statique-a-valider` lorsque les vérifications passent.
- `deploiement/verifier_ci_main.sh SHA` n'autorise une publication que si les checks GitHub Actions `verifier` et `navigateur` du SHA exact sur `main` sont terminés avec succès. Une API inaccessible ou un test manquant bloque le déploiement.
- `deploiement/publier_statique.sh` est un **modèle à intégrer** : il construit une release à partir du commit contrôlé, contrôle les empreintes, bascule un lien symbolique et restaure le lien précédent si le contenu HTTP ne correspond pas. Il n'est pas installé et ne doit pas être exécuté tant que les prérequis ci-dessous ne sont pas remplis.

## Contrôles VPS en lecture seule, avant toute modification

Depuis le VPS, confirmer les chemins exacts plutôt que de les deviner :

```bash
systemctl cat holberton-deploy.timer holberton-deploy.service
systemctl status holberton-deploy.timer --no-pager
systemctl status holberton-deploy.service --no-pager
sudo sed -n '1,240p' /usr/local/sbin/update-holberton-revision
sudo nginx -T 2>/dev/null | grep -n -C 8 'revision-hbtn.soleiljaune.be'
```

Ne pas publier de secrets, cookies, SMTP, fichiers `.env` ou chemins contenant des informations personnelles dans un commentaire public. Vérifier quelle racine Nginx est réellement servie, les droits de cet utilisateur système et l'état des sauvegardes.

## Préparer l'activation du nouveau déploiement

1. Sauvegarder d'abord le script, les unités systemd, la configuration Nginx et le contenu public existants. Tester une restauration réelle.
2. **Conserver le timer existant**, ne pas en créer un second. Le mettre en pause pendant l'installation pour empêcher qu'une ancienne commande ne publie entre la fusion et la vérification CI.
3. Préparer un répertoire privé de releases, lisible par Nginx, et un **lien symbolique déjà utilisé comme racine Web**. Adapter et tester la configuration Nginx, `nginx -t`, avec rollback disponible. Ne jamais transformer automatiquement un répertoire existant en lien sans l'avoir sauvegardé.
4. Installer ensemble les deux scripts depuis une version examinée, dans le même répertoire, en définissant `HBTN_SOURCE_REPO`, `HBTN_RELEASES_DIR`, `HBTN_ACTIVE_LINK` et éventuellement `HBTN_SITE_URL`. Le script refuse de toucher à un chemin public qui n'est pas déjà un lien symbolique.
5. Modifier le **service existant** pour appeler `publier_statique.sh` à la place de l'ancien mécanisme, puis tester manuellement une release et son rollback. N'activer son timer qu'après vérification de la version réellement servie.
6. Activer les règles GitHub protégeant `main` : pull request obligatoire, checks `verifier` et `navigateur` requis, interdiction des pushes directs/bypass non justifiés, sans imposer un second approbateur au propriétaire unique.
7. Une fois l'infrastructure vérifiée et **seulement avec l'accord explicite du propriétaire**, fusionner #24, contrôler le rendu de l'interface, puis #25 ; après chaque fusion vérifier le SHA, les checks de `main` et la version servie avant de passer à la suite.

## Recette après déploiement du quiz

- Vérifier HTTP 200 **et contenu identique au paquet** pour la page, les deux modules, le CSS, les JSON ; une page HTML 200 renvoyée à la place d'un JSON n'est pas une réussite.
- Tester sur desktop et mobile la navigation `Accueil · Compte · Quiz · Fiches · À propos`, recherche, favoris, thème et liens profonds existants.
- Tester sans compte et sans API disponible : démarrer un quiz, question unique/multiple, montrer correction seulement après validation, fin libre au bout de deux questions, bilan, pause/reprise après rechargement, historique invité et export.
- Tester en navigateur avec stockage local interdit ou plein : un enregistrement impossible ne doit pas être annoncé comme sauvegardé.
- Vérifier la synchronisation future (PR #26) seulement après recette isolée de son backend. Le chargement distant doit actualiser l'état affiché du quiz, et les réponses nouvellement enregistrées doivent déclencher l'événement de synchronisation.

## Blocages indépendants du code

- Pas d'accès SSH ni de vérification réelle des timers, Nginx, sauvegardes, headers ou chemins par cette PR.
- La protection GitHub de `main` doit être activée par le propriétaire ; l'intégration actuelle n'a pas le droit d'administration pour le faire.
- La relecture pédagogique indépendante (55 questions / 226 propositions, 6 fiches) doit être documentée : les documents de `docs/quiz/relecture-20261119/` servent à cette seconde expertise.
- La PR #26 demande en plus les tests réels Brevo, SQLite, RGPD, isolation, HTTPS et restauration. Elle ne doit pas être activée en même temps que la simple publication des quiz.

**Aucune fusion automatique, aucun redémarrage et aucune modification VPS ne sont effectués depuis le dépôt.**
