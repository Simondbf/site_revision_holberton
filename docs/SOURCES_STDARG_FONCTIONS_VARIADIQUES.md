# Nouveau projet C — fonctions variadiques et stdarg.h

## Ressources proposées

- [Wikipedia — stdarg.h](https://en.wikipedia.org/wiki/Stdarg.h) : aperçu de va_list, va_start, va_arg, va_end, va_copy.
- [Manuel de la bibliothèque GNU C](https://sourceware.org/glibc/manual/) : documentation générale (ressource fournie par le propriétaire).
- [Vidéo YouTube fournie](https://www.youtube.com/watch?v=1W4oyuOdXv8) : lien conservé ; le contenu de cette vidéo n'a pas pu être inspecté et n'est pas utilisé comme preuve technique.

## Sources techniques recoupées

- [GNU C Library — Argument Access Macros](https://sourceware.org/glibc/manual/2.43/html_node/Argument-Macros.html) : type va_list, macros et versions.
- [GNU C Library — Variadic Example](https://sourceware.org/glibc/manual/2.43/html_node/Variadic-Example.html).
- [POSIX — stdarg.h](https://man7.org/linux/man-pages/man0/stdarg.h.0p.html) : règles d'accès, d'arrêt et de nettoyage des listes.
- [cppreference — Variadic functions](https://www.cppreference.com/c/variadic).

## Fiches créées (thème Programmation C)

Les nouvelles notions sont ajoutées en indices **8:31 à 8:36** après les 31 notions existantes, sans déplacer les anciennes :

1. Syntaxe des fonctions variadiques en C89 et nécessité d'un contrat d'appel.
2. `va_list` et `va_start`.
3. `va_arg`, type attendu et promotions entières/float.
4. `va_end`, y compris la prévention des retours prématurés.
5. Protocole compteur ou sentinelle et risque de lecture après la fin.
6. `vprintf`, transmission d'une liste, différence entre `va_copy` (C99) et `__va_copy` (extension GNU).

## Garanties et limites

Tous les **six exemples autonomes** sont vérifiés automatiquement avec `gcc -std=gnu89 -Wall -Wextra -Werror -pedantic` et comparés à leur sortie attendue. Les cours utilisent des analogies, des explications détaillées et des sources fiables. Le contenu de la vidéo n'est pas présenté comme vérifié.

Cette PR ne déploie **ni quiz, ni compte, ni Brevo** ; elle n'ajoute que des fiches pédagogiques à `index.html`, un test et ce document. Aucune fusion sans validation du propriétaire.
