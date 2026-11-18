# Ressource — variables et paramètres inutilisés en C, appliquée aux pointeurs

## Références

- Martin Licht, *Unused variables in C/C++: why and how?* — https://dev.to/martinlicht/unused-variables-in-cc-why-and-how-4cm4
- GCC, *Warning Options* — https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html

## Applications en PR #19

- Une variable `int *p` pointant vers un objet local peut elle-même être inutilisée ; le compilateur signale la variable `p`, pas nécessairement l'objet `*p`.
- L'avertissement `-Wunused-variable` est inclus par `-Wall`, et `-Werror` le transforme en erreur lorsqu'il est déclenché.
- Les paramètres `argc` et `argv` de `main` peuvent être volontairement inutilisés ; `(void)argc;` et `(void)argv;` constituent une méthode compatible GNU89 pour l'indiquer.
- Ne jamais appeler `free(p)` pour « résoudre » une variable inutilisée si p contient l'adresse d'une variable locale ; `free` exige un pointeur admissible provenant d'une allocation dynamique.
- Préférer supprimer les variables mortes lors du refactoring lorsque leur valeur et leur initialisation sont inutiles ; un cast vers void ne doit pas masquer un vrai bug.
- Les fonctionnalités C++17 `[[maybe_unused]]` ne sont **pas** des constructions C89 portables. `__attribute__((unused))` est une extension GNU, pas ISO C89.

## Révision en cours

Deux nouvelles questions candidates : `V1-N09_003-05` (pointeur local inutilisé) et `V1-N09_072-06` (paramètres de main inutilisés). Les tests de compilation GNU89 stricts ont été effectués localement ; aucune question n'est validée pédagogiquement. Les données et questions déjà travaillées par Claude sur sa branche de proposition nécessiteront une réconciliation lors de la revue de sa future PR.

Le complément ne modifie aucun cours en production et ne doit pas provoquer de fusion automatique.
