# Ressource — variables et paramètres inutilisés en C (GNU89)

## Origine

- Martin Licht, *Unused variables in C/C++: why and how?* — https://dev.to/martinlicht/unused-variables-in-cc-why-and-how-4cm4
- GCC, *Warning Options* (source primaire des règles de diagnostic) — https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html

## Application aux questions de la PR #21

- `-Wunused-variable` détecte une variable locale ou statique inutilisée ; l'option est incluse par `-Wall` dans GCC.
- `-Wunused-parameter` concerne les paramètres nommés non utilisés ; `-Wall -Wextra` suffit pour l'activer dans GCC.
- `-Werror` fait échouer la compilation lorsqu'un avertissement activé est émis ; ce n'est pas une règle nouvelle du langage C.
- `(void)parametre;` peut exprimer un paramètre intentionnellement inutilisé. Si une variable locale n'a plus d'utilité, la supprimer reste généralement préférable à masquer systématiquement le signalement.
- Le cas `[[maybe_unused]]` de l'article vient du C++17 (et existe dans des révisions modernes du C), **pas du GNU89 demandé ici** ; ne pas le présenter comme portable en C89.
- `__attribute__((unused))` est une extension GNU et non une syntaxe ISO C89 portable. Éviter de demander aux élèves d'utiliser l'extension comme solution universelle.

## État de validation

Les cinq nouvelles questions (`V2-N14_002-05`, `-06`, `-07`, `V2-N14_004-05`, `V2-N14_005-05`) reposent sur des essais GCC locaux et la documentation du compilateur, mais leurs quatre/cinq options doivent recevoir une relecture contradictoire. Leur statut reste `a_verifier`.

Ce complément ne change pas les fiches publiées et ne justifie pas la fusion de la PR #21.
