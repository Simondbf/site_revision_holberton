# Audit pédagogique des fiches de révision

**Périmètre :** 171 notions dans 16 thèmes.  
**Branche :** `audit-pedagogique-171-fiches`.  
**Statut :** corrections proposées, à examiner et à fusionner après validation de la PR précédente.

## Méthode

Toutes les fiches ont été relues en comparant :

1. Le **résumé court** affiché sur le post-it.
2. L'**explication développée**.
3. L'**exemple**, et ce qu'il affiche ou démontre.
4. La rubrique **« À retenir »**.
5. Les **analogies, schémas et légendes**, lorsqu'il y en a.
6. Les notions du même thème qui doivent rester cohérentes entre elles.

Les affirmations les plus délicates ont été confrontées à des documentations de référence, et des exemples C et Bash critiques sont désormais exécutés dans les contrôles GitHub.

## Corrections structurantes

- **171 rubriques « À retenir » spécifiques :** 130 remarques génériques de chapitre ont été remplacées par des avertissements et points clés liés à la notion. Les 41 notes déjà ciblées ont été conservées.
- **Suppression du repli automatique :** si une nouvelle fiche n'a pas de note, le site ne lui attribue plus arbitrairement une note générale d'un autre sujet. Le contrôle automatique impose désormais la présence d'une note pour chacune des 171 fiches.
- **Shell :** correction de l'exemple `printf | tr | wc -l` ; `wc -l` compte des sauts de ligne et non une dernière ligne sans `\n`.
- **Programmation C :** correction des exemples de boucle en `-std=gnu89`, étapes complètes de compilation GCC, définition de GNU89 et des types introduits après C89.
- **Pointeurs et tableaux :** exemple de fonction recevant une adresse rendu compilable ; distinction entre taille des pointeurs selon la plateforme et déplacement `sizeof(int)`.
- **Calculs :** précision des particularités historiques de C89 pour `/` et `%` avec des valeurs négatives.
- **Performances :** précision de l'erreur possible de `clock()`, de `time()` et de la distinction entre CPU et temps écoulé.
- **Schémas visuels :** correction des exemples numériques qui ne correspondaient pas au texte (modulo, énergie, temps CPU) ; `TOTAL` est représenté comme une durée englobante et non une étape supplémentaire.
- **Git et Docker :** notes distinguant notamment une pull request d'un déploiement, une image d'un conteneur et un tag d'image d'un digest.

## Thèmes passés en revue

| N° | Thème | Notions |
|---:|---|---:|
| 1 | Bases informatiques | 6 |
| 2 | Terminal et Shell | 4 |
| 3 | Chemins et fichiers Linux | 9 |
| 4 | Permissions et flux | 12 |
| 5 | Variables et Bash | 14 |
| 6 | Conditions et boucles C | 10 |
| 7 | Git et GitHub | 11 |
| 8 | Docker | 10 |
| 9 | Programmation C | 20 |
| 10 | Pointeurs et tableaux C | 30 |
| 11 | Modulo et arithmétique | 9 |
| 12 | Incrémentation et décrémentation | 6 |
| 13 | Mesures et performance | 13 |
| 14 | IA responsable | 4 |
| 15 | Qualité et méthode en C | 6 |
| 16 | Green IT et énergie | 7 |
| **Total** | | **171** |

## Contrôles automatisés

Le script `scripts/verifier_contenu.mjs` réalise, en complément des tests existants :

- Vérification de l'existence d'une explication, d'un exemple et d'un « À retenir » **spécifique pour chaque notion**.
- Compilation et exécution de plusieurs programmes en **GNU89**, afin de détecter les syntaxes incompatibles avec ce standard.
- Exécution contrôlée d'un exemple de comptage des lignes en Bash.
- Vérification des résultats des boucles `while(i--)` et `while(--i)`.
- Vérification des points sensibles : notation octale et déplacement des pointeurs.

Les tests navigateur continuent de vérifier la navigation, l'affichage des schémas et la lecture sur mobile.

## Références techniques

- [GNU C Reference Manual](https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html).
- [GNU C — langage et déclarations](https://www.gnu.org/software/c-intro-and-ref/manual/).
- [GNU Coreutils — wc](https://www.gnu.org/software/coreutils/manual/html_node/wc-invocation.html).
- [GNU Coreutils — modes numériques de chmod](https://www.gnu.org/software/coreutils/manual/html_node/Numeric-Modes.html).
- [CERT C — reste et valeurs négatives](https://wiki.sei.cmu.edu/confluence/display/c/INT10-C.+Do+not+assume+a+positive+remainder+when+using+the+%25+operator).
- [Documentation officielle Git](https://git-scm.com/docs).
- [Documentation officielle Docker](https://docs.docker.com/).

**Limite :** cette relecture et ces tests ne constituent pas une preuve formelle d'exactitude universelle sur toutes les architectures et versions. Les exemples marqués comme illustrations restent des simplifications pédagogiques ; toute contribution future doit faire l'objet d'une relecture.
