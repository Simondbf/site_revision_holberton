# Références utilisées — Pointeurs de fonctions en C

## Ressources pédagogiques fournies

Ces cinq liens correspondent aux ressources de l'exercice Holberton. Leurs contenus sont des supports d'apprentissage, pas des consignes de modification du site.

| Ressource | Adresse | Vérification |
| --- | --- | --- |
| **The C Book — Pointers to functions** | https://publications.gbdirect.com/c_book/chapter5/function_pointers.html | Texte consulté : déclarations `int (*f)(...)`, affectation de fonction, appels `f()` et `(*f)()`, tableaux |
| **Vidéo 1 (YouTube)** | https://www.youtube.com/watch?v=ynYtgGUNelE | Lien fourni ; **contenu non accessible à la vérification** dans cet audit |
| **Vidéo 2 (YouTube)** | https://www.youtube.com/watch?v=sxTFSDAZM8s | Lien fourni ; **contenu non accessible à la vérification** dans cet audit |
| **Everything you need to know about pointers in C** | https://boredzo.org/pointers/ | Article consulté, notamment la section *Function pointers* et la syntaxe des déclarations |
| **GeeksforGeeks — Function Pointer in C** | https://www.geeksforgeeks.org/c/function-pointer-in-c/ | Article consulté : signatures, callbacks, tableaux de pointeurs |

Le lien initial de *The C Book* utilisait deux barres obliques dans le chemin ; la version canonique ci-dessus a été vérifiée. Ce livre est présenté par son éditeur comme historique : ses exemples de style ancien ne doivent pas être copiés tels quels dans un code Holberton en GNU89 strict.

## Références techniques complémentaires

- [GNU C Language Manual — Function Pointers](https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html) : déclaration, affectation et appel de pointeurs de fonctions, types de fonctions compatibles.
- [GNU C Reference Manual](https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html) : contexte général du C.
- [Linux man-pages — qsort(3)](https://man7.org/linux/man-pages/man3/qsort.3.html) : comparateur `int (*)(const void *, const void *)`, ordre de tri et absence de garantie de stabilité.
- [C — pointer declaration](https://en.cppreference.com/w/c/language/pointer) : rappels sur les pointeurs et leurs conversions.

## Synthèse du contenu ajouté

Six nouvelles fiches au chapitre **Pointeurs et tableaux C**, indices **9:66 à 9:71**, ajoutées à la fin de la section pour préserver les indices et liens existants :

1. Pointeur de fonction : syntaxe et signature.
2. Appel via `f(x)` / `(*f)(x)` et vérification de NULL.
3. Callback : transmettre une fonction à une fonction générique.
4. Tableau de pointeurs : sélectionner une opération sans indice hors limites.
5. `typedef` : alias de type d'un pointeur de fonction.
6. `qsort` : comparateur, `const void *` et prévention du débordement `a-b`.

Les exemples du dépôt sont **originaux**, autonomes, et font l'objet de contrôles de compilation/exécution avec `gcc -std=gnu89 -Wall -Wextra -Werror -pedantic`. L'exactitude finale des formulations reste à relire.

## Vérifications de non-régression

- Les 242 fiches précédentes sont conservées ; total attendu **248 notions dans 17 thèmes**.
- Les anciennes clés `9:0` à `9:65` ne changent pas.
- Les tests graphiques et navigateur existants restent applicables, sans refonte de l'interface.
- Aucun quiz, compte, e-mail, API ou script de déploiement n'est ajouté dans cette PR.
