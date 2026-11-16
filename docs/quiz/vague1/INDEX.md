# Quiz Holberton — Première vague : index de revue

**1273 questions candidates** pour **214 notions** regroupées en **13 thèmes**, réparties en fichiers Markdown (lisibles par Claude, Gemini et autres relecteurs) et JSON (contrôles automatiques).

> **ÉTAT : BROUILLON NON VALIDÉ.** Les réponses et les « mauvaises » propositions doivent être contestées et documentées avant toute intégration au site. Cette branche sert à la revue technique **uniquement sur GitHub**. Aucune donnée du quiz n'est chargée dans `index.html` publié.

## Périmètre de la première vague

**Inclus :** fondamentaux, terminal, Linux, Shell/Bash, permissions, conditions C, programmation C, arithmétique, tableaux, pointeurs, structures, qualité C et **Git/GitHub uniquement** dans les outils de développement.

**Exclus, deuxième vague :** Docker, performance/mesures, IA responsable, Green IT/énergie et autres outils de développement.

Les **six notions sur les pointeurs de fonctions** proviennent de la [PR #20](https://github.com/Simondbf/site_revision_holberton/pull/20), encore en brouillon et **non publiées** : leurs liens vers les fiches ne fonctionneront sur le site qu'après fusion et déploiement de cette PR.

## Accès à toutes les questions par thème

| Thème | Notions | Questions candidates | Markdown | JSON |
|---|---:|---:|---|---|
| Bases informatiques | 6 | 27 | [Lire les 24 questions structurées](section-00-bases-informatiques.md) | [Données JSON](section-00-bases-informatiques.json) |
| Terminal et Shell | 4 | 18 | [Lire les 16 questions structurées](section-01-terminal-et-shell.md) | [Données JSON](section-01-terminal-et-shell.json) |
| Chemins et fichiers Linux | 9 | 48 | [Lire les 36 questions structurées](section-02-chemins-et-fichiers-linux.md) | [Données JSON](section-02-chemins-et-fichiers-linux.json) |
| Permissions et flux | 12 | 86 | [Lire les 48 questions structurées](section-03-permissions-et-flux.md) | [Données JSON](section-03-permissions-et-flux.json) |
| Variables et Bash | 14 | 73 | [Lire les 56 questions structurées](section-04-variables-et-bash.md) | [Données JSON](section-04-variables-et-bash.json) |
| Conditions et boucles C | 10 | 81 | [Lire les 40 questions structurées](section-05-conditions-et-boucles-c.md) | [Données JSON](section-05-conditions-et-boucles-c.json) |
| Git et GitHub | 11 | 61 | [Lire les 44 questions structurées](section-06-git-et-github.md) | [Données JSON](section-06-git-et-github.json) |
| Programmation C | 31 | 172 | [Lire les 124 questions structurées](section-08-programmation-c.md) | [Données JSON](section-08-programmation-c.json) |
| Pointeurs et tableaux C | 72 | 389 | [Lire les 288 questions structurées](section-09-pointeurs-et-tableaux-c.md) | [Données JSON](section-09-pointeurs-et-tableaux-c.json) |
| Modulo et arithmétique | 9 | 109 | [Lire les 36 questions structurées](section-10-modulo-et-arithmetique.md) | [Données JSON](section-10-modulo-et-arithmetique.json) |
| Incrémentation et décrémentation | 6 | 60 | [Lire les 24 questions structurées](section-11-incrementation-et-decrementation.md) | [Données JSON](section-11-incrementation-et-decrementation.json) |
| Qualité et méthode en C | 9 | 44 | [Lire les 36 questions structurées](section-14-qualite-et-methode-en-c.md) | [Données JSON](section-14-qualite-et-methode-en-c.json) |
| Structures et typedef en C | 21 | 105 | [Lire les 84 questions structurées](section-16-structures-et-typedef-en-c.md) | [Données JSON](section-16-structures-et-typedef-en-c.json) |
| **Total** | **214** | **1273** | | |

**À lire aussi :** les fichiers ci-dessous contiennent les questions d'application **complémentaires**, comptées dans les totaux du tableau ci-dessus.

- [238 applications chiffrées et pratiques](questions-application.md) · [JSON](questions-application.json).
- [41 situations de raisonnement sur Linux, Shell et Git](raisonnement-domaines.md) · [JSON](raisonnement-domaines.json).
- [123 questions techniques supplémentaires sur C et la mémoire](questions-c-techniques.md) · [JSON](questions-c-techniques.json).
- [15 questions originales et spécialisées sur scanf](../nouvelles-questions-scanf.md) · [JSON](questions-scanf-specialisees.json).

La banque **originale du prototype de 25 questions de la PR #14 n'est pas réutilisée**. #14 reste fermée, non fusionnée.

## État de la couverture

La première vague couvre **toutes les 214 notions sélectionnées**, mais **pas encore le volume ni la diversité définitifs** : la moyenne actuelle est d'environ **5,9 questions par notion**, contre une ambition future de **50 à 100 en moyenne**, avec des exceptions pour les notions simples. **Cette livraison ne satisfait pas encore la cible quantitative finale.**

Les 856 questions structurées sont surtout des exercices de correspondance avec les fiches, par définition ou avertissement, dont certaines propositions peuvent être trop évidentes ou ambiguës. Les autres 417 questions sont des scénarios pratiques, y compris des exercices numériques dont les résultats sont calculables. **Le volume seul ne constitue pas une validation pédagogique.**

## Règles de production et d'évaluation

1. **Une seule bonne réponse** : choix unique. **Plusieurs bonnes réponses** : cases à cocher. Dans l'interface utilisateur, indiquer le mode mais **ne jamais révéler le nombre exact** de bonnes réponses pour une question multiple avant sa validation.
2. La correction doit afficher la justification et un **lien direct vers la fiche de révision** correspondant à la notion. Les cases erronées et manquantes doivent pouvoir alimenter le diagnostic par notion.
3. En fin de session : résultat global, taux de réussite, bilan **par notion**, erreurs récurrentes, notions à retravailler, liens vers les fiches et nouvelles séries proposées. Les conclusions doivent refléter le nombre de questions réellement posées.
4. **Aucun compte obligatoire**. Les résultats invités sont stockés localement ; les comptes volontaires, si implémentés, ajoutent un espace « Ma progression » avec historique daté et synchronisation entre appareils.
5. La notation du mode multiple devra être définie clairement, sans donner le maximum à une personne qui coche tout.
6. Une vérification multi-IA et technique indépendante est requise **avant** de déclarer une question validée ; il ne faut pas utiliser la réponse cochée dans ces fichiers comme preuve.
7. Les identifiants `Nxx_yyy` proviennent actuellement des indices du site. Ils doivent être **figés ou migrés vers des identifiants canoniques indépendants de la position** avant toute sauvegarde durable de progression entre versions des cours.
8. Les questions proposées sur GitHub ne doivent pas être présentées comme du contenu déjà disponible en production.

## Guide de relecture pour Claude et Gemini

Revue exhaustive par lots, sans se contenter d'approuver en bloc :

```text
Identifiant de question :
Verdict : VALIDE / À CORRIGER / AMBIGU / À REJETER
Toutes les propositions vraies (lettres) :
Pourquoi chaque autre proposition est fausse :
Cas limites / dépendances d'environnement / comportement indéfini :
Reformulation éventuelle :
Source externe ou test reproductible :
Niveau de confiance :
```

**Rappel :** une réponse vraie mais non pertinente peut être ambiguë si l'énoncé n'exclut pas les autres interprétations. Tester les programmes C sous `-std=gnu89 -Wall -Wextra -Werror -pedantic` lorsque pertinent, en évitant toute exécution de cas à comportement indéfini pour en déduire une « sortie certaine ».

## Validation automatisée

Le script `node scripts/verifier_banque_quiz.mjs` contrôle les identifiants, la structure des questions, la cohérence des modes unique/multiple, l'existence des liens vers les fiches, les doublons d'options et la présence de toutes les notions. Ce contrôle **ne valide pas l'exactitude scientifique ni le caractère réellement faux des distracteurs**.

La publication sur le site et l'intégration au futur moteur adaptatif sont des travaux distincts et nécessitent une nouvelle revue ainsi que les tests d'interface.
