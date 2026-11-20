# Quiz invité — première version fonctionnelle (PR dépendante de #24 et #23)

## Améliorations de l'expérience de révision

- **« Je ne sais pas »** : case explicite sous les propositions, sans obligation de cocher une réponse au hasard. Valider ouvre le corrigé détaillé, puis « Question suivante » permet de continuer. La question est comptée comme traitée mais incorrecte, et la difficulté est conservée dans la progression locale.
- **Questions plus lisibles** : les 55 énoncés disposent d'une reformulation en français plus direct. Les extraits C sont présentés en code. Les formulations d'origine, les options et les clés de réponses restent conservées.
- **Après une erreur ou un « Je ne sais pas »** : la page affiche les bonnes propositions, l'explication générale, et **une justification de chacune des 226 propositions**, indépendamment de leur position aléatoire à l'écran.
- **Liens propres** : suppression à l'affichage des paramètres de provenance `source=gpt...` et `utm_source=chatgpt...`, en préservant la page et l'ancre courante.
- L'aide d'affichage est stockée dans `quiz/aide-pedagogique.json`, versionnée, puis intégrée à `index.html` par `scripts/integrer_quiz_html.mjs` pour rester compatible avec le déploiement statique actuel. Les explications par option proviennent de la revue technique interne et doivent rester révisables par un humain.

## Ce qui fonctionne dans l'interface

- Accès par l'onglet `#quiz` **sans créer de compte**.
- 25 questions initiales sur `argc`/`argv` et 30 questions nouvelles sur `stdarg.h`, soit **55 questions candidates et 11 notions**.
- **Aucun quota de 5/10/15/20 questions** : révision libre jusqu’à ce que l’apprenant choisisse « Terminer et voir mon bilan » après une réponse. La banque disponible sert de limite naturelle, sans exiger d’aller jusqu’à sa dernière question. Sélection des thèmes argc/argv, stdarg.h ou mixte.
- Mode **unique** (radio) ou **multiple** (cases à cocher), sans révélation du nombre exact de bonnes réponses.
- **Ordre des réponses aléatoire et équitable à chaque nouvelle session** : permutation Fisher-Yates de **3, 4 ou 5 propositions**, sans déplacer ou modifier les bonnes réponses stockées dans la banque. **Les 55 questions actuellement relues possèdent encore 4 ou 5 choix**, mais le moteur accepte désormais les QCM à 3 choix, y compris avec 2 bonnes réponses. Les lettres A–E sont attribuées après mélange ; la notation compare les identifiants stables, jamais leur position visible.
- Pour `n` propositions, **chaque proposition précise** a une probabilité `1/n` d'occuper une position donnée. Si `k` propositions sont correctes, **une position donnée** a une probabilité `k/n` de présenter une réponse correcte et chacun des `C(n,k)` groupes possibles de positions correctes est équiprobable (`1/C(n,k)`). Par exemple, avec 5 choix et 2 réponses correctes, les 10 paires de positions sont équiprobables.
- Le tirage est enregistré avec la session pour éviter qu'une réponse change de place lors de la validation, d'une pause, d'un rechargement ou d'un transfert de progression. Les QCM multiples peuvent avoir 2 bonnes réponses sur 3 choix, 2 ou 3 sur 4, ou 2, 3 ou 4 sur 5, en conservant au moins un distracteur incorrect. **Une nouvelle session effectue un nouveau tirage**, y compris pour une question déjà vue.
- Validation explicite ; correction exacte : cocher un choix incorrect ou omettre un bon choix donne zéro point à cette question.
- Explication après validation et lien direct vers la fiche. Les six notions stdarg.h ont été ajoutées par la PR #23 (fusionnée le 18 novembre 2026).
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
