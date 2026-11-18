# Quiz Holberton — PR #21 : autres notions

**784 questions candidates pour 121 notions, réparties dans 11 thèmes** ; deuxième lot du corpus initial de 1 273 questions de la PR #19.

> ÉTAT : BROUILLON NON VALIDÉ. Aucune question n'est intégrée à la production. Les corrections déjà réalisées sur la branche d'origine (y compris les questions `do…while`) sont conservées.

## Séparation approuvée

La PR #19 se concentre exclusivement sur les **pointeurs, tableaux et structures** et contient actuellement **519 questions candidates** (dont 25 ajouts sur argc/argv avant la présente ressource). La présente PR conserve les **784 autres questions**. Le transfert initial ne modifiait ni les identifiants, ni les choix, ni les corrigés. Les 1 273 questions historiques sont conservées ; 25 questions argc/argv ont ensuite été ajoutées en #19 et 5 questions liées aux variables inutilisées en #21.

## Thèmes et décomptes

| Thème | Notions | Questions |
|---|---:|---:|
| Bases informatiques | 6 | 27 |
| Terminal et Shell | 4 | 18 |
| Chemins et fichiers Linux | 9 | 48 |
| Permissions et flux | 12 | 86 |
| Variables et Bash | 14 | 73 |
| Conditions et boucles C | 10 | 81 |
| Git et GitHub | 11 | 61 |
| Programmation C | 31 | 172 |
| Modulo et arithmétique | 9 | 109 |
| Incrémentation et décrémentation | 6 | 60 |
| Qualité et méthode en C | 9 | 49 |
| **Total** | **121** | **784** |

## Questions transversales comprises dans les thèmes

- [Applications et situations numériques](questions-application.md) : 198 questions.
- [Questions techniques C](questions-c-techniques.md) : 41 questions.
- [Raisonnement Linux, Shell et Git](raisonnement-domaines.md) : 41 questions.
- [Questions spécialisées sur scanf](questions-scanf-specialisees.md) : 15 questions.

## Nouvelle ressource : variables inutilisées

Cinq questions candidates supplémentaires sur les avertissements GCC, `-Wall`, `-Wextra`, `-Werror` et `(void)parametre` dans le cadre GNU89. [Documentation des sources](SOURCES_VARIABLES_INUTILISEES.md). Les exemples ont été testés localement avec GCC ; les corrigés restent soumis à relecture indépendante.

## Contrôle éditorial à poursuivre

Vérifier individuellement chaque option, la qualité des distracteurs, les références et la diversité pédagogique. Les questions de calcul `APP-10` restent à refondre. Les rapports Grok, GLM et Manus ne prouvent pas que la totalité des questions est exacte. L'ancien prototype #14 (25 questions) n'est pas repris.

**Ne pas fusionner sans validation explicite du propriétaire.**
