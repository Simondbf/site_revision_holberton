# Sources — arguments de `main` : `argc` et `argv`

## Ressources fournies pour le nouveau projet Holberton

1. **The C Book — Arguments to main** : https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html — version canonique de l'URL transmise, chapitre expliquant le comptage, le tableau de pointeurs et le parcours des arguments.
2. **The GNU C Programming Tutorial — argc and argv** : lien original https://crasseux.com/books/ctutorial/argc-and-argv.html ; son serveur n'a pas répondu au moment de l'audit. Miroir accessible : https://www.linuxtopia.org/online_books/programming_books/gnu_c_programming_tutorial/argc-and-argv.html .
3. **Vidéo YouTube fournie** : https://www.youtube.com/watch?v=aP1ijjeZc24 — lien conservé, contenu de la vidéo non directement vérifié ; aucune affirmation pédagogique ne lui est attribuée sans consultation.

## Vérification indépendante

- GNU C Language Manual — Command-line Parameters : https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Command_002dline-Parameters.html
- cppreference — main function : https://en.cppreference.com/w/c/language/main_function
- GNU C Reference Manual : https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html

## Fiches créées

Cinq nouvelles fiches, indices 9:72 à 9:76, à la **fin** du thème « Pointeurs et tableaux C », sans renuméroter les 72 anciennes. Elles couvrent la signature de main, argc, argv, la double indirection et argv[argc] == NULL. Les exemples GNU89 sont compilés et exécutés par `scripts/verifier_arguments_main.mjs`.

Les questions correspondantes sont destinées **à la PR #19**, en brouillon non publié et relues indépendamment avant fusion. La PR #22 ne modifie pas la banque de quiz, les comptes ni le déploiement.
