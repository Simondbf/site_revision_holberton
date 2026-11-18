# Quiz invité — première version fonctionnelle (PR dépendante de #24 et #23)

## Ce qui fonctionne dans l'interface

- Accès par l'onglet `#quiz` **sans créer de compte**.
- 25 questions initiales sur `argc`/`argv` et 30 questions nouvelles sur `stdarg.h`, soit **55 questions candidates et 11 notions**.
- Sessions de 5, 10, 20 ou toutes les questions, au choix ; sélection des thèmes argc/argv, stdarg.h ou mixte.
- Mode **unique** (radio) ou **multiple** (cases à cocher), sans révélation du nombre exact de bonnes réponses.
- Validation explicite ; correction exacte : cocher un choix incorrect ou omettre un bon choix donne zéro point à cette question.
- Explication après validation et lien direct vers la fiche lorsque la fiche est déjà présente ; pour les six notions stdarg.h, cela nécessite la fusion préalable de #23.
- Pause et reprise dans le navigateur ; bilan global et par notion, notions à retravailler sans qualifier une notion de non maîtrisée après une seule erreur.
- Progression locale accessible sur `#compte`, historique et statistiques cumulées ; export JSON et suppression volontaire **uniquement** des résultats de quiz.
- La répartition initiale couvre plusieurs notions ; la sélection des sessions suivantes donne plus de poids aux notions sur lesquelles des erreurs ont déjà été observées, sans proposer de difficulté manuelle.

## Statut éditorial important

**Les 55 questions sont des candidates, au statut `a_verifier`.** Le moteur est utilisable comme **préversion de test clairement signalée**, mais ce n'est pas un quiz pédagogique certifié. La PR #19 a fusionné ses fichiers dans `main` en tant que banque documentaire et non comme contenu validé définitivement. Toute publication générale doit faire l'objet d'une relecture indépendante des bonnes et mauvaises réponses. Les 30 questions stdarg.h ont notamment besoin de cette revue.

Les autres 784 questions de la PR #21 ne sont pas intégrées au moteur : elles sont encore en travail et ne sont pas fusionnées.

## Comptes et Brevo

Les pages `#compte` et `#quiz` restent accessibles en invité. La synchronisation, l'inscription, la récupération de compte et l'e-mail transactionnel Brevo ne sont **pas** actifs ; ils requièrent un backend séparé et testé avant déploiement. Ce moteur n'appelle aucun service externe, ne demande aucune clé et n'utilise aucune IA facturée par visiteur.

## Tests

`scripts/verifier_quiz.mjs` vérifie le corpus, les identifiants, les modes, la sélection, la notation exacte, la conservation et le bilan. Un test navigateur dédié contrôle également le parcours utilisateur dans un navigateur réel.

**Aucune fusion automatique ; validation finale réservée au propriétaire.**
