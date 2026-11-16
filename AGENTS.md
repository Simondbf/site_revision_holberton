# Instructions pour les assistants IA — Holberton Révision

Ce fichier est destiné aux agents et assistants qui proposent des modifications au dépôt. Les explications destinées aux visiteurs et aux contributeurs humains restent dans `README.md`, `CONTRIBUTING.md` et l'onglet « À propos ».

## Mission et ton

- Améliorer un site de révision **indépendant de Holberton**, en français, compréhensible par un débutant.
- Préserver la justesse technique : vérifier dans les documentations pertinentes, ne pas deviner le comportement du C ni les faits absents du code fourni.
- Donner des définitions courtes et des explications progressives, **aérées**. Éviter les gros blocs compacts.
- Employer les termes techniques anglais usuels avec une définition en français à leur première apparition (ex. *heap*, *stack*, *ownership*).
- Expliquer les mécanismes, les raisons, les pièges et la correction, sans recopier un corrigé d'exercice évalué.
- Éviter les doublons : consulter toutes les notions existantes avant d'en créer une nouvelle. Enrichir une fiche existante lorsque le sujet y est déjà traité.
- Ne pas créer de quiz à partir d'une question d'exercice collée comme simple contexte, sauf demande explicite. Ne pas reproduire ses mauvaises propositions comme des vérités.

## Architecture actuelle

Le site est principalement un **fichier HTML statique autonome** : `index.html`, avec CSS et JavaScript intégrés. Il doit conserver ses fonctionnalités : accueil, thèmes, fiches, cours à lecture continue, recherche, sommaire, favoris, thème clair/sombre, navigation par URL, affichage mobile et hors ligne.

Les données pédagogiques se trouvent dans des scripts JSON intégrés à `index.html` :

- `content-data` : `sections[si].items[ii]`, chacun avec `term` (titre) et `definition` (résumé bref).
- `extra-lessons` : fiche détaillée, pour les sections autres que « Pointeurs et tableaux C », avec la clé `"si:ii"`.
- `pointer-data` : fiches de « Pointeurs et tableaux C » (**section 9**), indexées par `"ii"`, sans préfixe.
- `teaching-notes` : analogie et décryptage de l'exemple, sous la clé `"si:ii"`.
- `course-data` : informations générales par chapitre. Ne pas les employer pour remplacer une explication propre à une notion.
- `quiz-bank` peut exister **sur une branche de développement non encore fusionnée** : vérifier les branches avant de supposer les quiz en production.

Pour une notion nouvelle, **l'ajouter à la fin de son chapitre** pour ne pas renuméroter les clés existantes, puis ajouter ses données détaillées et ses notes. Ne jamais renommer ou réordonner une notion existante sans vérifier les liens directs, les clés associées et les tests. Le nombre total de notions évolue : le calculer depuis les données plutôt que reprendre une valeur historique.

## Style attendu pour une fiche

Une fiche réussie reprend la présentation actuelle :

1. **Titre** précis et identifiable, avec le nom de la commande ou de la fonction si utile.
2. **Résumé** : une phrase claire, utilisable sans ouvrir la fiche.
3. **Comprendre la notion** : deux à quatre paragraphes thématiques (davantage seulement si nécessaire), en commençant par ce que c'est, puis comment cela fonctionne, les limites et les erreurs courantes. Dans les chaînes JSON, séparer les paragraphes par `\n\n` ; le site les affiche séparément.
4. **Exemple** : simple, autonome quand c'est du C, lié au point expliqué ; le résultat attendu et les éventuelles limites doivent être cohérents.
5. **À retenir** : un rappel concret et spécifique, pas une formule répétée partout.
6. **Analogie et décryptage** : utiles et techniquement corrects, sans contredire le cours.
7. **Sources** : références ciblées (`sources: [[titre, url], ...]`) si une notion s'appuie sur la documentation ; préférer manuels, standards et documentations officielles.

Les champs détaillés habituels sont `explanation`, `example`, `note` et éventuellement `sources`. Pour `teaching-notes`, les champs sont `analogy` et `explained`. Éviter les longues explications sans sauts de paragraphe ; conserver la lisibilité mobile.

## Exemples C et sécurité mémoire

- Les exemples compilables sont compatibles avec `gcc -std=gnu89 -Wall -Wextra -Werror -pedantic` lorsque c'est applicable. Éviter des fonctionnalités C99 accidentelles.
- Ne pas présenter le comportement indéfini comme une sortie certaine : distinguer ce que garantit le C de ce qu'une implémentation affiche parfois.
- Vérifier les pointeurs, tailles, terminaisons `\0`, allocations et durées de vie. `free(p); p = NULL;` ne protège pas automatiquement les alias.
- Pour les scénarios de lab (*base bundle*, etc.), distinguer les risques possibles des défauts confirmés dans le code. Un intitulé de diagnostic pédagogique n'est pas nécessairement un message littéral de Valgrind.
- Les exemples de fonctionnement normal doivent être sûrs. Si un cas défectueux est expliqué, ne pas en faire une démonstration dangereuse à exécuter dans les tests.

## Contrôles avant de proposer une PR

Le dépôt propose :
```bash
node scripts/verifier_site.mjs
node scripts/verifier_visuels.mjs
node scripts/verifier_contenu.mjs
```

Les tests navigateur se trouvent dans `scripts/verifier_navigateur.mjs` (Playwright/Chrome) et sont exécutés dans GitHub Actions. Ajouter/adapter les contrôles lorsqu'une nouvelle notion, illustration ou interaction apparaît ; vérifier les exemples C avec les résultats annoncés. Les workflows doivent réussir avant fusion. Vérifier aussi l'affichage mobile et les liens de navigation.

## GitHub, publication et évolutions

- Travailler sur une branche dédiée, proposer une pull request ; ne pas modifier `main` ou le serveur de production directement.
- **Site actuel** : après fusion dans `main`, le VPS récupère automatiquement `index.html` grâce à `holberton-deploy.timer` / `holberton-deploy.service`, avec le script `/usr/local/sbin/update-holberton-revision`. Le timer vérifie environ toutes les cinq minutes et **ne vérifie pas les résultats de la CI**. Attendre que tous les contrôles soient verts avant de fusionner.
- **Évolution à préserver** : lorsque des comptes, une API, une base de données et les quiz adaptatifs seront mis en production, remplacer ce déploiement simplifié par un pipeline GitHub Actions conditionné aux tests, incluant sauvegardes, migrations et stratégie de retour arrière ; désactiver alors le timer pour ne pas laisser deux déploiements concurrents.
- **Quiz à terme** : sélection des notions par l'élève, **aucun choix manuel de difficulté**, sélection adaptative, pause/reprise fiable. Banque de questions variées : **viser 50 à 100 questions par notion en moyenne**, davantage si nécessaire, nettement moins pour les notions courtes (culture générale, etc.), jamais de quota rigide. Questions documentées et validées **en amont** par plusieurs modèles indépendants et vérifications techniques, plutôt que dépendance à une IA pendant chaque session. Progression locale des invités, synchronisation future avec comptes. La PR #14 est un prototype historique non destiné à être fusionné : ses **25 questions et propositions** sont archivées en [PR #19](https://github.com/Simondbf/site_revision_holberton/pull/19) pour revue inter-IA, sans publication. Le nouveau moteur doit gérer **une ou plusieurs bonnes réponses**, annoncer le mode sans donner le nombre exact de réponses correctes en mode multiple, afficher les corrections avec liens directs aux fiches et produire un bilan automatique par notion. Résultats locaux pour invités, historique « Ma progression » dans les comptes facultatifs.
- **Comptes facultatifs uniquement** : cours et quiz **sans inscription**, suivi local pour invités, connexion proposée sans obligation pour synchroniser historique, favoris et difficultés par notion. Prestataire d'e-mails transactionnels **Brevo validé** : secrets uniquement côté serveur, authentification du domaine et anti-abus nécessaires. Ne pas ajouter de collecte ni de backend utilisateur sans architecture, revue d'accès entre comptes, gestion sûre des sessions/e-mails, droits sur les données, contrôles et sauvegardes. Lire [docs/COMPTES_OPTIONNELS_ET_QUIZ.md](docs/COMPTES_OPTIONNELS_ET_QUIZ.md).
- **Audit et fusion** : lire [docs/AUDIT_CI_SECURITE_2026-11-16.md](docs/AUDIT_CI_SECURITE_2026-11-16.md), consulter les résultats de la **dernière tête** de chaque PR ; ne pas confondre anciennes exécutions rouges et échec du commit fusionné. Les checks doivent être obligatoires avant fusion et le déploiement futur bloqué si la CI échoue.
- Garder `README.md`, `CONTRIBUTING.md` et l'onglet « À propos » orientés **humains** : pas de procédures internes de serveur, instructions d'agent, rappels administratifs ou commentaires de correction d'un QCM dans les textes publics. Les détails internes restent ici.
