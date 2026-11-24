# Dossier de relecture aveugle — 55 questions C (19 novembre 2026)

> Ce document NE CONTIENT PAS les corrigés. Il est destiné à un deuxième relecteur indépendant de la rédaction initiale. Les réponses doivent être déduites avant toute lecture des JSON sources.

**Cadre** : langage C (ISO C89/GNU89 lorsque précisé), notions `argc`/`argv` et `<stdarg.h>` ; 25 + 30 questions ; 4 ou 5 réponses possibles. Pour chaque question, évaluer chacune des options A–E. Pour une question multiple, ne pas supposer combien d'options sont correctes.

**Consigne** : pour chaque ID, répondre avec la liste complète des lettres retenues, puis expliquer séparément pourquoi chaque proposition est vraie ou fausse, en citant une source technique vérifiable. Marquer `ambiguë` si deux interprétations plausibles changent le verdict. Examiner également la qualité des distracteurs et l'adéquation avec le niveau Holberton.

**Sources à privilégier** : https://en.cppreference.com/w/c/language/main_function ; https://en.cppreference.com/w/c/language/variadic ; https://sourceware.org/glibc/manual/2.43/html_node/Argument-Macros.html ; https://man7.org/linux/man-pages/man0/stdarg.h.0p.html ; https://manpages.debian.org/unstable/manpages-dev/stdarg.3.en.html .

## A. Arguments de main : 25 questions

### V1-N09_072-01 — main(int argc, char *argv[]) — recevoir des arguments

**Mode : une seule bonne réponse.** Quelle définition de `main` permet de recevoir des arguments transmis au lancement d'un programme C hébergé ? (Une seule réponse correcte.)

- **A.** `int main(int argc, char *argv[])`
- **B.** `int main(char *argv)`
- **C.** `void main(int argc)`
- **D.** `int main(int *argc, char *argv[])`

### V1-N09_072-02 — main(int argc, char *argv[]) — recevoir des arguments

**Mode : une seule bonne réponse.** Sous Linux, pour la commande `./outil bonjour "deux mots"`, quelle valeur de argc reçoit normalement main ? (Une seule réponse correcte.)

- **A.** 1
- **B.** 2
- **C.** 3
- **D.** 4

### V1-N09_072-03 — main(int argc, char *argv[]) — recevoir des arguments

**Mode : plusieurs bonnes réponses possibles.** Quelles affirmations à propos des arguments de `main` sont correctes ? (Plusieurs réponses correctes.)

- **A.** Les arguments sont lus exclusivement par scanf.
- **B.** Les arguments sont transmis lors du lancement du programme.
- **C.** Le C force chaque argument à être un entier.
- **D.** Un shell peut grouper deux mots entre guillemets en un seul argument.

### V1-N09_072-04 — main(int argc, char *argv[]) — recevoir des arguments

**Mode : une seule bonne réponse.** Avec `int main(int argc, char *argv[])`, quelle vérification permet de lire `argv[1]` comme une chaîne sans accéder à une sentinelle ? (Une seule réponse correcte.)

- **A.** `argc >= 1`
- **B.** `argc == 1`
- **C.** `argc > 1`
- **D.** `argc < 1`

### V1-N09_072-05 — main(int argc, char *argv[]) — recevoir des arguments

**Mode : une seule bonne réponse.** Dans `int main(int argc, char *argv[])`, quel type a l'expression `argv[0]` si argc est positif ? (Une seule réponse correcte.)

- **A.** `char *`
- **B.** `int`
- **C.** `char **`
- **D.** `char`

### V1-N09_073-01 — argc — compter les arguments de la ligne de commande

**Mode : une seule bonne réponse.** Sous Linux, l’utilisateur lance la commande `./outil un deux trois`. Quelle est normalement la valeur de `argc` reçue par `main` ? (Une seule réponse correcte.)

- **A.** 3
- **B.** 2
- **C.** 0
- **D.** 4

### V1-N09_073-02 — argc — compter les arguments de la ligne de commande

**Mode : une seule bonne réponse.** Que mesure `argc` dans la signature de `main` prenant des arguments ? (Une seule réponse correcte.)

- **A.** Le nombre d'octets réservé à chaque argument.
- **B.** Le nombre d'éléments de argv avant argv[argc].
- **C.** La longueur de la première chaîne utilisateur.
- **D.** Le nombre de caractères de argv[0].

### V1-N09_073-03 — argc — compter les arguments de la ligne de commande

**Mode : une seule bonne réponse.** Dans une invocation normale où argc vaut 3, combien d'arguments utilisateur ont été fournis ? (Une seule réponse correcte.)

- **A.** 2
- **B.** 3
- **C.** 4
- **D.** 0

### V1-N09_073-04 — argc — compter les arguments de la ligne de commande

**Mode : plusieurs bonnes réponses possibles.** Lesquelles de ces affirmations sur argc sont correctes en C ? (Plusieurs réponses correctes.)

- **A.** argc est un pointeur vers le premier argument.
- **B.** argc est un entier non négatif.
- **C.** argc indique le nombre de caractères de argv[1].
- **D.** Dans un lancement classique, argc compte également argv[0].

### V1-N09_073-05 — argc — compter les arguments de la ligne de commande

**Mode : une seule bonne réponse.** Quelle expression mesure la longueur de la chaîne `argv[1]`, une fois l'existence et la validité de cet argument assurées ? (Une seule réponse correcte.)

- **A.** `argc - 1`
- **B.** `sizeof argv`
- **C.** `strlen(argv[1])`
- **D.** `argv[argc]`

### V1-N09_074-01 — argv — tableau de chaînes et indices

**Mode : une seule bonne réponse.** Dans une invocation normale `./outil rouge`, que désigne habituellement argv[0] ? (Une seule réponse correcte.)

- **A.** La chaîne rouge
- **B.** Le nom ou chemin d'invocation du programme
- **C.** Un pointeur NULL
- **D.** Le nombre total d'arguments

### V1-N09_074-02 — argv — tableau de chaînes et indices

**Mode : une seule bonne réponse.** Dans la commande shell `./outil "deux mots"`, combien d'arguments utilisateur sont normalement transmis ? (Une seule réponse correcte.)

- **A.** 0
- **B.** 2
- **C.** 3
- **D.** 1

### V1-N09_074-03 — argv — tableau de chaînes et indices

**Mode : une seule bonne réponse.** Lorsqu'une invocation normale fournit `argc == 3`, quel élément contient le deuxième argument utilisateur ? (Une seule réponse correcte.)

- **A.** `argv[2]`
- **B.** `argv[1]`
- **C.** `argv[3]`
- **D.** `argv[0]`

### V1-N09_074-04 — argv — tableau de chaînes et indices

**Mode : plusieurs bonnes réponses possibles.** Quelles affirmations sur les éléments de argv sont exactes ? (Plusieurs réponses correctes.)

- **A.** Pour un indice i valide inférieur à argc, argv[i] pointe vers une chaîne terminée par '\0'.
- **B.** argv[i] est toujours un int.
- **C.** argv[argc] vaut NULL et ne représente aucune chaîne à afficher.
- **D.** Chaque argument occupe obligatoirement un tableau de même longueur.

### V1-N09_074-05 — argv — tableau de chaînes et indices

**Mode : une seule bonne réponse.** Avec l'invocation `./outil ab cd`, que vaut `argv[1][1]` ? (Une seule réponse correcte.)

- **A.** `'c'`
- **B.** `'\0'`
- **C.** `'a'`
- **D.** `'b'`

### V1-N09_075-01 — argv[i][j] — caractère d'un argument et double indirection

**Mode : une seule bonne réponse.** Dans un paramètre de fonction C, à quel type est ajusté `char *argv[]` ? (Une seule réponse correcte.)

- **A.** `char *`
- **B.** `char **`
- **C.** `char`
- **D.** `char (*)[2]`

### V1-N09_075-02 — argv[i][j] — caractère d'un argument et double indirection

**Mode : une seule bonne réponse.** Si argv[1] désigne la chaîne `code`, quelle est la valeur de argv[1][0] ? (Une seule réponse correcte.)

- **A.** `'c'`
- **B.** `'o'`
- **C.** `'\0'`
- **D.** `'d'`

### V1-N09_075-03 — argv[i][j] — caractère d'un argument et double indirection

**Mode : une seule bonne réponse.** Pour `argv[1]` égal à `code`, que désigne `*(*(argv + 1) + 1)` ? (Une seule réponse correcte.)

- **A.** Le pointeur argv[0]
- **B.** Le caractère c
- **C.** Le terminateur nul après code
- **D.** Le caractère o

### V1-N09_075-04 — argv[i][j] — caractère d'un argument et double indirection

**Mode : une seule bonne réponse.** Quel test vérifie sans accès hors limites que argv[1] contient au moins deux caractères non nuls, même si le premier argument est absent ou trop court ? (Une seule réponse correcte.)

- **A.** `argc > 0`
- **B.** `argv[1][0] != '\0'` sans vérifier argc
- **C.** `argc > 1 && argv[1][0] != '\0' && argv[1][1] != '\0'`
- **D.** `argc == 1 || argv[1][1] != '\0'`

### V1-N09_075-05 — argv[i][j] — caractère d'un argument et double indirection

**Mode : plusieurs bonnes réponses possibles.** Quelles affirmations sur `argv[i][j]` sont correctes ? (Plusieurs réponses correctes.)

- **A.** i choisit une chaîne argument et j un caractère à l'intérieur.
- **B.** i sélectionne un octet de argc.
- **C.** L'accès nécessite un indice d'argument valide et un indice de caractère compatible avec la chaîne.
- **D.** Toutes les chaînes argv[i] ont forcément la même longueur.

### V1-N09_076-01 — argv[argc] == NULL — borne de fin et parcours sûr

**Mode : une seule bonne réponse.** En C hébergé, quelle valeur possède l'élément argv[argc] ? (Une seule réponse correcte.)

- **A.** Le caractère '0'
- **B.** La chaîne vide
- **C.** Le pointeur NULL
- **D.** L'adresse de argc

### V1-N09_076-02 — argv[argc] == NULL — borne de fin et parcours sûr

**Mode : une seule bonne réponse.** Lorsqu'argc vaut 3, combien de fois s'exécute normalement la boucle `for (i = 1; i < argc; i++)` ? (Une seule réponse correcte.)

- **A.** 3
- **B.** 2
- **C.** 1
- **D.** 4

### V1-N09_076-03 — argv[argc] == NULL — borne de fin et parcours sûr

**Mode : une seule bonne réponse.** Si argc vaut 4, à quel indice se trouve le dernier élément chaîne valide de argv ? (Une seule réponse correcte.)

- **A.** 4
- **B.** 0
- **C.** 5
- **D.** 3

### V1-N09_076-04 — argv[argc] == NULL — borne de fin et parcours sûr

**Mode : une seule bonne réponse.** Quelle opération doit être évitée pour le pointeur de fin argv[argc] ? (Une seule réponse correcte.)

- **A.** `puts(argv[argc]);`
- **B.** `argv[argc] == NULL`
- **C.** `argv[argc] != NULL`
- **D.** `argc >= 0`

### V1-N09_076-05 — argv[argc] == NULL — borne de fin et parcours sûr

**Mode : plusieurs bonnes réponses possibles.** Quelles affirmations distinguent correctement le terminateur de chaîne et la sentinelle de argv ? (Plusieurs réponses correctes.)

- **A.** Le dernier caractère de chaque argument est le pointeur NULL.
- **B.** Chaque chaîne argv[i] valable est terminée par le caractère nul '\0'.
- **C.** argv[argc] contient nécessairement la chaîne littérale "NULL".
- **D.** argv[argc] est un pointeur nul qui marque la fin de la liste des arguments.

## B. stdarg.h : 30 questions

### VAR-08-031-01 — Fonction variadique — déclarer des arguments avec ...

**Mode : une seule bonne réponse.** En ISO C89, quelle déclaration autorise des arguments facultatifs ? (Une seule réponse correcte.)

- **A.** `void f(...);`
- **B.** `void f(int n, ...);`
- **C.** `void f(int ... n);`
- **D.** `void f(int n, int ...);`

### VAR-08-031-02 — Fonction variadique — déclarer des arguments avec ...

**Mode : une seule bonne réponse.** Avec `f(2, 7, 9)`, combien d'arguments suivent le paramètre fixe `n` ? (Une seule réponse correcte.)

- **A.** 1
- **B.** 3
- **C.** 2
- **D.** 0

### VAR-08-031-03 — Fonction variadique — déclarer des arguments avec ...

**Mode : plusieurs bonnes réponses possibles.** Quelles affirmations sont correctes sur les fonctions variadiques ? (Plusieurs réponses correctes.)

- **A.** Les arguments après ... peuvent être en nombre variable.
- **B.** Leur nombre est disponible automatiquement dans argc.
- **C.** La fonction doit suivre une convention d'interprétation.
- **D.** Un paramètre fixe est requis dans cette forme C89.
- **E.** va_arg découvre automatiquement les types.

### VAR-08-031-04 — Fonction variadique — déclarer des arguments avec ...

**Mode : une seule bonne réponse.** Que risque `f(3, 5, 7)` si f lit trois int facultatifs ? (Une seule réponse correcte.)

- **A.** Une lecture inexistante, donc un comportement indéfini.
- **B.** L'ajout automatique d'un zéro.
- **C.** Une erreur de compilation obligatoire.
- **D.** La lecture d'une valeur indéterminée, mais un comportement toujours défini.

### VAR-08-031-05 — Fonction variadique — déclarer des arguments avec ...

**Mode : une seule bonne réponse.** Pourquoi le paramètre `n` de `somme(int n, ...)` peut-il être utile ? (Une seule réponse correcte.)

- **A.** Il contient la somme déjà calculée.
- **B.** Il indique combien de valeurs facultatives lire.
- **C.** Il convertit tous les arguments en double.
- **D.** Il réserve automatiquement un tableau.

### VAR-08-032-01 — va_list et va_start — initialiser le parcours

**Mode : une seule bonne réponse.** Quel type de <stdarg.h> représente l'état d'un parcours ? (Une seule réponse correcte.)

- **A.** `vararg_t`
- **B.** `va_arg`
- **C.** `va_list`
- **D.** `va_start`

### VAR-08-032-02 — va_list et va_start — initialiser le parcours

**Mode : une seule bonne réponse.** En C89, pour `void f(int nombre, ...)`, comment initialiser `va_list ap` ? (Une seule réponse correcte.)

- **A.** `va_start(ap, nombre);`
- **B.** `va_start(nombre, ap);`
- **C.** `va_arg(ap, nombre);`
- **D.** `va_start(ap, 0);`

### VAR-08-032-03 — va_list et va_start — initialiser le parcours

**Mode : une seule bonne réponse.** Quelle séquence respecte le cycle de vie de va_list ? (Une seule réponse correcte.)

- **A.** va_arg, va_start, va_end
- **B.** va_end, va_start, va_arg
- **C.** va_start, va_end, va_arg
- **D.** va_start, va_arg, va_end

### VAR-08-032-04 — va_list et va_start — initialiser le parcours

**Mode : plusieurs bonnes réponses possibles.** Quelles affirmations sur va_list sont exactes ? (Plusieurs réponses correctes.)

- **A.** Sa représentation est opaque et dépend de l'implémentation.
- **B.** Elle est toujours un char * portable.
- **C.** va_start initialise un objet va_list déclaré.
- **D.** Un va_end correspondant est nécessaire.
- **E.** Une `va_list` initialisée peut toujours être copiée par une simple affectation C.

### VAR-08-032-05 — va_list et va_start — initialiser le parcours

**Mode : une seule bonne réponse.** En C89, pour `void f(const char *format, ...)`, quel second argument faut-il donner à va_start ? (Une seule réponse correcte.)

- **A.** ap
- **B.** format
- **C.** argc
- **D.** argv

### VAR-08-033-01 — va_arg — lire les valeurs et comprendre les promotions

**Mode : une seule bonne réponse.** Pour un `signed char` transmis par `...`, quel type faut-il demander à `va_arg` après les promotions par défaut ? (Une seule réponse correcte.)

- **A.** char
- **B.** int
- **C.** char *
- **D.** float

### VAR-08-033-02 — va_arg — lire les valeurs et comprendre les promotions

**Mode : une seule bonne réponse.** Un float transmis par ... doit être lu avec va_arg(ap, ...) en quel type ? (Une seule réponse correcte.)

- **A.** int
- **B.** float
- **C.** double
- **D.** long double

### VAR-08-033-03 — va_arg — lire les valeurs et comprendre les promotions

**Mode : une seule bonne réponse.** La fonction additionne trois int facultatifs 4, 5 et 6 : quel est le total ? (Une seule réponse correcte.)

- **A.** 15
- **B.** 14
- **C.** 11
- **D.** 16

### VAR-08-033-04 — va_arg — lire les valeurs et comprendre les promotions

**Mode : plusieurs bonnes réponses possibles.** Quelles affirmations sur va_arg sont exactes ? (Plusieurs réponses correctes.)

- **A.** Chaque appel avance au prochain argument.
- **B.** La macro vérifie automatiquement la présence de l'argument.
- **C.** Le choix du type demandé doit tenir compte des promotions par défaut.
- **D.** Lire un argument inexistant est indéfini.
- **E.** va_arg fonctionne avant va_start.

### VAR-08-033-05 — va_arg — lire les valeurs et comprendre les promotions

**Mode : une seule bonne réponse.** Dans `void f(const char *format, ...)`, après `va_start(ap, format)` et pour l’appel `f("%d %.1f", 42, 2.5f)`, quelle suite de lectures récupère correctement les deux arguments facultatifs ? (Une seule réponse correcte.)

- **A.** `va_arg(ap, int); va_arg(ap, double);`
- **B.** `va_arg(ap, double); va_arg(ap, int);`
- **C.** `va_arg(ap, int); va_arg(ap, float);`
- **D.** `va_arg(ap, int); va_arg(ap, long double);`

### VAR-08-034-01 — va_end — terminer correctement une liste variadique

**Mode : une seule bonne réponse.** Quelle macro doit suivre l'usage d'une liste initialisée ? (Une seule réponse correcte.)

- **A.** va_next
- **B.** va_copy
- **C.** va_end
- **D.** free

### VAR-08-034-02 — va_end — terminer correctement une liste variadique

**Mode : une seule bonne réponse.** Si la fonction retourne après va_start, que doit-elle faire auparavant ? (Une seule réponse correcte.)

- **A.** Appeler va_end.
- **B.** Appeler free sur va_list.
- **C.** Appeler une seconde fois va_start.
- **D.** Rien, va_end est facultative.

### VAR-08-034-03 — va_end — terminer correctement une liste variadique

**Mode : une seule bonne réponse.** Peut-on appeler va_arg après va_end sans réinitialisation ? (Une seule réponse correcte.)

- **A.** Oui, sans condition.
- **B.** Oui, si la valeur vaut zéro.
- **C.** Oui, si n est positif.
- **D.** Non, il faut initialiser à nouveau.

### VAR-08-034-04 — va_end — terminer correctement une liste variadique

**Mode : plusieurs bonnes réponses possibles.** Quelles affirmations sur va_end sont justes ? (Plusieurs réponses correctes.)

- **A.** Elle termine l'usage de va_list.
- **B.** Elle réinitialise le parcours au premier argument facultatif.
- **C.** Elle contrôle automatiquement que tous les arguments facultatifs ont été lus.
- **D.** Elle ne libère pas automatiquement les arguments pointés.
- **E.** Elle crée un nouvel argument sentinelle.

### VAR-08-034-05 — va_end — terminer correctement une liste variadique

**Mode : une seule bonne réponse.** Une branche retourne avant tout va_start : que faut-il faire de va_end ? (Une seule réponse correcte.)

- **A.** L'appeler sur une liste non initialisée.
- **B.** Appeler deux fois va_end.
- **C.** Ne pas l'appeler puisque la liste n'a pas été initialisée.
- **D.** Allouer une liste avec malloc.

### VAR-08-035-01 — Fonction variadique — compteur ou sentinelle de fin

**Mode : une seule bonne réponse.** Avec des valeurs 2, 3, 5 puis la sentinelle -1, combien de valeurs de données ? (Une seule réponse correcte.)

- **A.** 2
- **B.** 4
- **C.** 3
- **D.** 5

### VAR-08-035-02 — Fonction variadique — compteur ou sentinelle de fin

**Mode : une seule bonne réponse.** Si la sentinelle manque, que risque une lecture répétée via va_arg ? (Une seule réponse correcte.)

- **A.** Une lecture hors de la liste, comportement indéfini.
- **B.** Un ajout automatique de -1.
- **C.** L'arrêt automatique au dernier élément.
- **D.** Un retour NULL garanti.

### VAR-08-035-03 — Fonction variadique — compteur ou sentinelle de fin

**Mode : une seule bonne réponse.** Quel contrat correspond à `somme(int n, ...)` ? (Une seule réponse correcte.)

- **A.** n est le résultat final.
- **B.** n décrit le nombre de valeurs facultatives.
- **C.** n est le type des arguments.
- **D.** n contient sizeof(va_list).

### VAR-08-035-04 — Fonction variadique — compteur ou sentinelle de fin

**Mode : plusieurs bonnes réponses possibles.** Quelles règles rendent une sentinelle fiable ? (Plusieurs réponses correctes.)

- **A.** Elle doit être transmise à chaque appel.
- **B.** Elle peut toujours être utilisée comme une donnée normale.
- **C.** Son type doit convenir à va_arg.
- **D.** Une valeur réservée évite de confondre données et arrêt.
- **E.** Elle est automatiquement générée par ...

### VAR-08-035-05 — Fonction variadique — compteur ou sentinelle de fin

**Mode : une seule bonne réponse.** Pour un protocole qui compte des int positifs jusqu'au marqueur int -1, quel appel est conforme ? (Une seule réponse correcte.)

- **A.** `f(2, 4, 6)`
- **B.** `f(2, 4, 6, 0)`
- **C.** `f(2, 4, 6, -1)`
- **D.** `f(2, 4, 6, -1.0)`

### VAR-08-036-01 — vprintf et va_copy — transmettre ou dupliquer une liste

**Mode : une seule bonne réponse.** Quelle fonction standard accepte un format et une va_list préparée ? (Une seule réponse correcte.)

- **A.** printf
- **B.** scanf
- **C.** vprintf
- **D.** puts

### VAR-08-036-02 — vprintf et va_copy — transmettre ou dupliquer une liste

**Mode : une seule bonne réponse.** Après `va_start(ap,format); vprintf(format,ap);`, quelle opération est requise ? (Une seule réponse correcte.)

- **A.** va_end(ap);
- **B.** free(ap);
- **C.** fclose(stdout);
- **D.** va_start(ap,format);

### VAR-08-036-03 — vprintf et va_copy — transmettre ou dupliquer une liste

**Mode : une seule bonne réponse.** Quelle norme ISO C a introduit va_copy ? (Une seule réponse correcte.)

- **A.** C89
- **B.** C99
- **C.** C90
- **D.** Aucune norme ISO C

### VAR-08-036-04 — vprintf et va_copy — transmettre ou dupliquer une liste

**Mode : une seule bonne réponse.** En C99, `src` est une `va_list` déjà initialisée par `va_start(src, n)` et `dest` est déclarée mais non initialisée. Quelle séquence permet de lire indépendamment une copie et de terminer correctement les deux listes ? (Une seule réponse correcte.)

- **A.** `va_copy(dest, src); /* lire dest */ va_end(dest); va_end(src);`
- **B.** `dest = src; /* lire dest */ va_end(src);`
- **C.** `va_end(src); va_copy(dest, src); /* lire dest */ va_end(dest);`
- **D.** `va_copy(src, dest); /* lire dest */ va_end(dest); va_end(src);`

### VAR-08-036-05 — vprintf et va_copy — transmettre ou dupliquer une liste

**Mode : plusieurs bonnes réponses possibles.** Quelles affirmations sont exactes ? (Plusieurs réponses correctes.)

- **A.** vprintf utilise une va_list fournie par l'appelant.
- **B.** va_copy est obligatoire en ISO C89.
- **C.** __va_copy est une extension GNU, pas une garantie ISO C89.
- **D.** Les arguments doivent correspondre au format donné à vprintf.
- **E.** vprintf doit être suivie de free(ap) plutôt que va_end.

## Six cours à auditer également

Les six fiches existent déjà dans `main` (PR #23 fusionnée). Vérifier indépendamment : définition, nuances C89/C99, code exemple, sa sortie attendue, explication et sources.

- **8:31 — Déclaration des fonctions variadiques** : consulter la fiche dans la rubrique Programmation C du site, et le contenu `extra-lessons` de `index.html` sur `main`.
- **8:32 — va_list et va_start** : consulter la fiche dans la rubrique Programmation C du site, et le contenu `extra-lessons` de `index.html` sur `main`.
- **8:33 — va_arg et promotions** : consulter la fiche dans la rubrique Programmation C du site, et le contenu `extra-lessons` de `index.html` sur `main`.
- **8:34 — va_end** : consulter la fiche dans la rubrique Programmation C du site, et le contenu `extra-lessons` de `index.html` sur `main`.
- **8:35 — Compteur ou sentinelle** : consulter la fiche dans la rubrique Programmation C du site, et le contenu `extra-lessons` de `index.html` sur `main`.
- **8:36 — vprintf et va_copy** : consulter la fiche dans la rubrique Programmation C du site, et le contenu `extra-lessons` de `index.html` sur `main`.

## Format de retour

Pour chaque question : `ID | Lettres jugées correctes | Verdict (conforme / ambiguë / erronée / à vérifier) | Analyse de CHAQUE option | Sources | Correction proposée`.

Pour chaque fiche : `Notion | Exactitude | Exemples GNU89 | Pédagogie | Sources | Corrections nécessaires`.

**Attention : ce document n'est ni une approbation éditoriale ni un feu vert de fusion.** Les statuts JSON restent `a_verifier` jusqu'à validation des réponses avec preuve.
