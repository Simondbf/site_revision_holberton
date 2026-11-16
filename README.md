# Holberton Révision

Un support de révision **indépendant**, consultable librement, qui associe des **résumés courts** à des explications plus développées, exemples et schémas. Ce projet n'est pas une publication officielle de Holberton.

🌐 Site actuellement publié : https://revision-hbtn.soleiljaune.be

## Utiliser le site

- **Accueil** : découvrir les thèmes et le nombre de notions.
- **Catégories** : choisir un grand domaine, puis un thème.
- **Fiches** : lire le résumé sans ouvrir le cours complet.
- **Cours détaillés** : cliquer sur un post-it pour rejoindre sa notion dans un chapitre à lecture continue, sans fenêtre superposée.
- **Retour aux fiches** : le bouton du haut retrouve la liste et sa position de défilement précédente lorsqu'on arrive depuis un post-it.
- **Sommaire synchronisé** : pendant la lecture continue, la notion active se surligne automatiquement dans le menu de gauche, qui défile indépendamment pour la garder visible. Les liens directs sont partageables ; le simple défilement n'ajoute aucune entrée à l'historique.
- **Favoris** : conserver ses notions préférées dans le navigateur utilisé, sans compte.
- **Recherche** : retrouver une notion par son nom, sa définition ou son thème.

Le site est statique : les cours sont intégrés à `index.html`. Il n'exige **ni API payante ni serveur d'IA**.

## Quiz adaptatif — pilote

La branche de développement du pilote contient **25 questions réparties sur 5 notions C** : `scanf`, `fgets`, `malloc`, `free`, `realloc`. Cette banque volontairement limitée permet de tester l'expérience avant de l'élargir.

- L'élève choisit uniquement les notions couvertes qu'il souhaite réviser ; **aucun niveau de difficulté à sélectionner**.
- Le moteur ajuste automatiquement le niveau interne des questions selon les réponses, et revient davantage sur les notions où des erreurs sont détectées.
- Chaque question propose quatre réponses, une correction et un accès à la fiche correspondante.
- La session est enregistrée dans `localStorage` **dès son démarrage, après chaque réponse et changement de question**, et reste reprenable sur le même navigateur après fermeture de l'onglet. L'action « Mettre en pause » permet de suspendre explicitement la session.
- Une session se termine quand toutes les questions des notions sélectionnées ont été utilisées. Le bilan montre les réponses correctes par notion.
- **Limites** : pas encore de comptes, pas de synchronisation entre appareils ni de banque complète pour les 228 notions. Effacer les données du site ou utiliser la navigation privée peut supprimer la session.
- Aucun appel de modèle IA n'est nécessaire pendant l'utilisation du quiz. La banque doit être enrichie et faire l'objet d'une **validation éditoriale croisée par plusieurs IA ainsi que de vérifications indépendantes** avant généralisation. Les tests automatiques actuels contrôlent sa structure, les réponses attendues enregistrées et le comportement du moteur ; **ils ne prouvent pas à eux seuls l'exactitude pédagogique des 25 questions**.

Le code du pilote reste dans `index.html` pour être compatible avec le timer systemd actuellement installé, qui ne déploie automatiquement que ce fichier. Lors de l'arrivée des comptes, du backend et de la grande banque de questions, le déploiement sera à migrer vers GitHub Actions avec tests bloquants.

## Participer

Des corrections, suggestions, exemples plus simples, schémas et nouvelles notions sont les bienvenus !

1. Ouvrir une [issue](https://github.com/Simondbf/site_revision_holberton/issues/new) pour proposer une idée, ou corriger un détail.
2. Pour un changement de contenu, créer une branche / un fork puis une **pull request**.
3. Expliquer ce qui a changé et, lorsque c'est utile, fournir une source de référence.

Lire [CONTRIBUTING.md](CONTRIBUTING.md) pour les recommandations.

## Organisation

- `index.html` : interface, styles, données de cours et comportements de navigation.
- `scripts/verifier_site.mjs` : contrôle syntaxique et cohérence des fiches.
- `.github/workflows/verifier-site.yml` : contrôle automatique proposé pour les pull requests.

Le projet est volontairement facile à ouvrir sans compilation : on peut consulter `index.html` directement. Pour tester une vraie navigation dans un navigateur, on peut aussi lancer un serveur HTTP local.

## Publier une nouvelle version

**La publication est automatisée côté VPS** : un service `holberton-deploy.service` et un timer systemd `holberton-deploy.timer` vérifient `main` environ toutes les cinq minutes. Le script `/usr/local/sbin/update-holberton-revision` compare le fichier distant au fichier en production, sauvegarde l'ancienne version et remplace `site/index.html` uniquement si le contenu a changé. Cette procédure a été activée et confirmée dans les journaux systemd le 13 novembre 2026.

Les modifications passent toujours par une pull request et une fusion manuelle dans `main`. **Attention : le timer ne vérifie pas les résultats des GitHub Actions** ; il faut attendre des contrôles réussis avant de fusionner. Aucun secret de serveur ne doit figurer dans le dépôt.

**Évolution prévue à ne pas oublier :** au moment d'ajouter les comptes utilisateurs, l'API et les quiz adaptatifs, remplacer cette publication périodique par un déploiement piloté par GitHub Actions, conditionné à la réussite des tests et adapté aux changements de base de données (sauvegardes, migrations, retour arrière). Désactiver alors le timer pour éviter deux méthodes concurrentes de déploiement.

## Évolutions envisagées

- Améliorer régulièrement les cours et les illustrations pédagogiques.
- Ajouter progressivement de nouveaux langages selon le cursus (Python, Java, PHP, etc.).
- Étudier des quiz adaptatifs, d'abord sans IA obligatoire.
- Examiner plus tard l'utilité de comptes utilisateurs pour synchroniser la progression, en tenant compte de la sécurité et de la vie privée.

## Licence et réutilisation

Le dépôt est consultable publiquement mais aucune licence de réutilisation n'a encore été choisie. **Public ne signifie pas automatiquement libre de droits.** Une licence explicite sera discutée avant de présenter le code ou le contenu comme réutilisables sans conditions.
