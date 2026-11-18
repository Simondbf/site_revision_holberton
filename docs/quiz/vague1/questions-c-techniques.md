# Relecture — undefined

**82 questions candidates, toujours à vérifier.**

## CDEEP-09-000-01 — Pointeur (pointer)

**Une seule bonne réponse**

Quel opérateur donne l'adresse d'un objet ordinaire en C ? (Une seule réponse correcte.)

- **A ✅** &
- **B ❌** ||
- **C ❌** %
- **D ❌** *

**Corrigé candidat :** A. L'opérateur unaire & prend l'adresse.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/1-pointeur-pointer

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-002-01 — & (opérateur d’adresse)

**Une seule bonne réponse**

Avec `int a=7;`, quelle expression a le type int * ? (Une seule réponse correcte.)

- **A ❌** a
- **B ❌** sizeof a
- **C ✅** &a
- **D ❌** *a

**Corrigé candidat :** C. &a désigne l'adresse de l'objet a.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/3-operateur-d-adresse

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-003-01 — * dans une déclaration

**Une seule bonne réponse**

Quelle déclaration exprime correctement un pointeur vers int ? (Une seule réponse correcte.)

- **A ✅** int *p;
- **B ❌** pointer<int> p;
- **C ❌** int &p;
- **D ❌** int p*;

**Corrigé candidat :** A. L'astérisque appartient à la déclaration du pointeur C.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-004-01 — * dans une expression

**Une seule bonne réponse**

Avec `int a=7; int *p=&a;`, que vaut `*p` ? (Une seule réponse correcte.)

- **A ❌** Une chaîne vide
- **B ❌** La taille d'un int
- **C ❌** L'adresse de a
- **D ✅** 7

**Corrigé candidat :** D. *p lit l'objet pointé tant que l'adresse est valide.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/5-dans-une-expression

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-005-01 — Modifier une valeur par un pointeur

**Une seule bonne réponse**

Avec `int n=2; int *p=&n; *p=9;`, que vaut n ? (Une seule réponse correcte.)

- **A ❌** L'adresse de p
- **B ❌** 0
- **C ✅** 9
- **D ❌** 2

**Corrigé candidat :** C. Le déréférencement modifie l'objet original n.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/6-modifier-une-valeur-par-un-pointeur

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-006-01 — Valeur de p, *p et &p

**Plusieurs bonnes réponses**

Avec `int n=3; int *p=&n;`, quelles affirmations sont exactes ? (Plusieurs réponses correctes.)

- **A ✅** *p lit la valeur actuellement stockée dans n.
- **B ✅** p contient l'adresse de n.
- **C ✅** &p désigne l'adresse de la variable pointeur p.
- **D ❌** p et *p ont obligatoirement le même type.
- **E ✅** L'affectation *p=7 modifierait n.

**Corrigé candidat :** A, B, C, E. p contient l'adresse de n, *p lit ou modifie cet int, et &p est l'adresse de la variable pointeur elle-même.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/7-valeur-de-p-p-et-p

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-007-01 — Type pointé

**Une seule bonne réponse**

Pourquoi le type pointé d'un int * est-il important ? (Une seule réponse correcte.)

- **A ❌** Il autorise la modification arbitraire de n'importe quel objet
- **B ❌** Il force toutes les adresses à valoir zéro
- **C ✅** Il définit le type de l'objet lors du déréférencement
- **D ❌** Il donne automatiquement la capacité d'une zone allouée

**Corrigé candidat :** C. Le type guide l'interprétation et la taille d'un accès.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/8-type-pointe

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-008-01 — %p avec printf

**Une seule bonne réponse**

Comment afficher correctement un pointeur vers objet avec printf `%p` ? (Une seule réponse correcte.)

- **A ❌** printf("%d", p);
- **B ✅** printf("%p", (void *)p);
- **C ❌** printf("%c", p);
- **D ❌** printf("%s", p);

**Corrigé candidat :** B. %p attend un argument void * dans les règles de printf.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/9-p-avec-printf

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-009-01 — sizeof

**Une seule bonne réponse**

Que mesure sizeof pour un tableau local `int a[4]` dans sa portée ? (Une seule réponse correcte.)

- **A ✅** La taille de tout le tableau en octets
- **B ❌** La valeur du premier élément
- **C ❌** Toujours 4 octets
- **D ❌** La taille du pointeur implicite

**Corrigé candidat :** A. sizeof sur le tableau entier donne la taille des quatre objets int.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/10-sizeof

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-010-01 — Tailles des pointeurs

**Une seule bonne réponse**

Est-il portable de considérer que tout pointeur de fonction fait exactement 8 octets ? (Une seule réponse correcte.)

- **A ❌** Oui, même en C89
- **B ❌** Oui, pour tout système Linux
- **C ❌** Oui, seulement avec GNU89
- **D ✅** Non

**Corrigé candidat :** D. La représentation et taille des pointeurs dépendent de la plateforme.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/11-tailles-des-pointeurs

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-011-01 — Passage d’arguments par valeur

**Une seule bonne réponse**

En C, modifier un paramètre `int n` change-t-il automatiquement l'argument original ? (Une seule réponse correcte.)

- **A ❌** Oui : C utilise le passage par référence partout
- **B ❌** Oui : seulement si n vaut 0
- **C ❌** Oui : la pile est toujours partagée
- **D ✅** Non : les arguments sont passés par valeur

**Corrigé candidat :** D. Un paramètre reçoit une copie de la valeur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/12-passage-d-arguments-par-valeur

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-012-01 — Passer une adresse à une fonction

**Une seule bonne réponse**

Comment une fonction peut-elle modifier un int de l'appelant ? (Une seule réponse correcte.)

- **A ✅** Recevoir son adresse dans int *p et écrire *p
- **B ❌** Recevoir une copie int p et écrire p
- **C ❌** Déclarer p en local et l'affecter
- **D ❌** Recevoir int p et appeler printf

**Corrigé candidat :** A. Le pointeur donne accès à l'objet original.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/13-passer-une-adresse-a-une-fonction

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-013-01 — Tableau

**Une seule bonne réponse**

Combien d'éléments comporte `int tab[5]` ? (Une seule réponse correcte.)

- **A ❌** 6
- **B ✅** 5
- **C ❌** sizeof(int)
- **D ❌** 4

**Corrigé candidat :** B. La déclaration donne cinq éléments indexés 0…4.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/14-tableau

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-015-01 — Tableau ≠ pointeur

**Une seule bonne réponse**

Pourquoi un tableau n'est-il pas un pointeur, même s'il peut se convertir en pointeur ? (Une seule réponse correcte.)

- **A ✅** Il s'agit de types et d'objets distincts
- **B ❌** Parce que tous les tableaux sont des fonctions
- **C ❌** Parce que sizeof(array) vaut toujours sizeof(pointer)
- **D ❌** Parce que les tableaux ne contiennent jamais de valeurs

**Corrigé candidat :** A. Le tableau est un ensemble d'éléments, le pointeur est un objet pouvant contenir une adresse.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/16-tableau-pointeur

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-016-01 — Conversion tableau → pointeur

**Une seule bonne réponse**

Dans un appel f(tab), que devient normalement un tableau d'int comme expression argument ? (Une seule réponse correcte.)

- **A ❌** Une structure contenant sa longueur
- **B ✅** Une adresse de son premier élément
- **C ❌** Une copie automatique de tous les octets dans un int
- **D ❌** Toujours NULL

**Corrigé candidat :** B. Le tableau est converti en pointeur vers son premier élément, sauf contextes particuliers.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/17-conversion-tableau-pointeur

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-018-01 — &tableau

**Une seule bonne réponse**

Pour un tableau int tab[5], quelle différence entre &tab et &tab[0] ? (Une seule réponse correcte.)

- **A ❌** &tab[0] désigne toute une structure
- **B ✅** Ils ont des types de pointeurs différents
- **C ❌** Ils désignent nécessairement des allocations différentes
- **D ❌** &tab correspond à un int *

**Corrigé candidat :** B. &tab est pointeur vers tableau, &tab[0] est pointeur vers élément int.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/19-tableau

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-019-01 — Arithmétique des pointeurs

**Une seule bonne réponse**

Que signifie `p+1` lorsque p est un int * valide pointant dans un tableau ? (Une seule réponse correcte.)

- **A ❌** Déréférencer p puis ajouter 1 à la valeur de cet int.
- **B ✅** Avancer d'un élément int, sans lire directement sa valeur.
- **C ❌** Avancer d'un caractère, quelle que soit la taille de int.
- **D ❌** Faire pointer p vers le même int après modification de l'adresse.

**Corrigé candidat :** B. L'arithmétique des pointeurs est exprimée en éléments du type pointé. p+1 désigne l'int suivant si ce déplacement respecte les limites.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/20-arithmetique-des-pointeurs

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-021-01 — Chaîne de caractères en C

**Une seule bonne réponse**

Qu'est-ce qu'une chaîne C valide ? (Une seule réponse correcte.)

- **A ❌** Un pointeur non initialisé
- **B ❌** Une valeur char unique
- **C ✅** Une suite de caractères terminée par '\0' dans une zone accessible
- **D ❌** Un tableau obligatoirement de 100 octets

**Corrigé candidat :** C. La terminaison nulle délimite la chaîne.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/22-chaine-de-caracteres-en-c

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-022-01 — Caractère nul

**Une seule bonne réponse**

Quel rôle joue '\0' dans une chaîne C ? (Une seule réponse correcte.)

- **A ❌** Indiquer la mémoire allouée
- **B ❌** Être un saut de ligne
- **C ❌** Signifier EOF dans le fichier source
- **D ✅** Marquer la fin de chaîne

**Corrigé candidat :** D. Les fonctions sur les chaînes repèrent le caractère nul.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/23-caractere-nul

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-023-01 — %s avec printf

**Une seule bonne réponse**

Que faut-il passer à printf %s ? (Une seule réponse correcte.)

- **A ❌** Une adresse de tableau sans terminateur
- **B ✅** Une adresse de chaîne valide terminée par nul
- **C ❌** Un simple caractère sans adresse
- **D ❌** Une valeur int quelconque

**Corrigé candidat :** B. %s lit une chaîne terminée par un caractère nul.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/24-s-avec-printf

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-030-01 — malloc — allocation dynamique

**Plusieurs bonnes réponses**

Quels comportements sont possibles pour malloc selon la taille et l'environnement ? (Plusieurs réponses correctes.)

- **A ❌** Mettre obligatoirement tous les octets à zéro
- **B ❌** Libérer le pointeur automatiquement à la fin du bloc local
- **C ✅** Renvoyer un pointeur utilisable si elle réussit
- **D ✅** Renvoyer NULL si l'allocation échoue

**Corrigé candidat :** C, D. malloc peut échouer et n'initialise pas les octets alloués.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-031-01 — free — libérer la mémoire

**Une seule bonne réponse**

Que fait `free(NULL)` selon la bibliothèque standard C ? (Une seule réponse correcte.)

- **A ❌** Libère un bloc de taille zéro.
- **B ❌** Provoque une double libération.
- **C ❌** Modifie automatiquement les autres pointeurs du programme.
- **D ✅** N'a aucun effet.

**Corrigé candidat :** D. free(NULL) est défini comme une opération sans effet ; cela ne correspond à aucune libération de bloc.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-033-01 — Chaîne littérale et tableau de char

**Une seule bonne réponse**

Avec `char *s="abc";`, peut-on modifier s[0] de façon définie ? (Une seule réponse correcte.)

- **A ✅** Non : modifier un littéral de chaîne est indéfini
- **B ❌** Oui : les littéraux sont toujours en mémoire écrivable
- **C ❌** Oui : uniquement sous Linux
- **D ❌** Oui : char * garantit l'écriture

**Corrigé candidat :** A. Un littéral de chaîne n'est pas modifiable par le programme.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/34-chaine-litterale-et-tableau-de-char · https://en.cppreference.com/w/c/language/string_literal

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-034-01 — malloc : vérifier NULL

**Une seule bonne réponse**

Après un malloc qui peut échouer, quel fragment empêche de déréférencer NULL ? (Une seule réponse correcte.)

- **A ❌** `if (p == NULL) { *p = 1; }`
- **B ❌** `if (*p != 0) { *p = 1; }`
- **C ❌** `if (sizeof p > 0) { *p = 1; }`
- **D ✅** `if (p != NULL) { *p = 1; }`

**Corrigé candidat :** D. Il faut vérifier la valeur du pointeur avant de le déréférencer.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/35-malloc-verifier-null

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-035-01 — Fuite mémoire — allocation perdue

**Une seule bonne réponse**

Quelle situation caractérise une fuite mémoire certaine ? (Une seule réponse correcte.)

- **A ❌** Un bloc alloué qui a été libéré puis dont un alias est encore stocké.
- **B ❌** Un bloc alloué conservé volontairement et accessible jusqu'à la fin du programme.
- **C ✅** Un bloc alloué non libéré devenu inaccessible pour le programme.
- **D ❌** Un tableau automatique dont la durée de vie s'est normalement terminée.

**Corrigé candidat :** C. Un bloc dynamique devenu inaccessible avant d'avoir été libéré est une fuite ; un pointeur encore accessible n'implique pas nécessairement une fuite.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/36-fuite-memoire-allocation-perdue

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-036-01 — Valgrind — détecter les fuites

**Une seule bonne réponse**

Quel outil peut rapporter une fuite dans la catégorie `definitely lost` ? (Une seule réponse correcte.)

- **A ❌** Le préprocesseur gcc -E.
- **B ❌** Le chargeur de bibliothèques ldd.
- **C ✅** Valgrind Memcheck.
- **D ❌** Le débogueur gdb utilisé sans analyse de fuites.

**Corrigé candidat :** C. La catégorie definitely lost appartient aux rapports de fuites de Memcheck ; les autres outils n'émettent pas ce diagnostic.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/37-valgrind-detecter-les-fuites

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-038-01 — malloc et sizeof : allouer le bon nombre d’octets

**Une seule bonne réponse**

Pour un int *p et un nombre d'éléments n, quel schéma d'allocation est généralement adéquat si le produit ne déborde pas ? (Une seule réponse correcte.)

- **A ❌** malloc(n) toujours
- **B ❌** malloc(sizeof n) toujours
- **C ✅** malloc(n * sizeof *p)
- **D ❌** malloc(sizeof p) toujours

**Corrigé candidat :** C. Le produit doit tenir compte de la taille de l'élément.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/39-malloc-et-sizeof-allouer-le-bon-nombre-d-octets

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-039-01 — strlen, sizeof et terminateur nul

**Une seule bonne réponse**

Avec `char mot[]="abc";`, que valent strlen(mot) et sizeof mot ? (Une seule réponse correcte.)

- **A ❌** 3 et 3
- **B ✅** 3 et 4
- **C ❌** 4 et 4
- **D ❌** 4 et 3

**Corrigé candidat :** B. strlen exclut le terminateur nul, sizeof mesure tout le tableau.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-040-01 — strcpy : copier dans un espace existant

**Une seule bonne réponse**

Quel risque présente `strcpy(dest, src)` si dest ne possède pas assez de place ? (Une seule réponse correcte.)

- **A ❌** Une conversion automatique en int.
- **B ❌** Une allocation automatique de la zone manquante.
- **C ❌** Une troncature garantie sans dépassement.
- **D ✅** Une écriture hors des limites de dest.

**Corrigé candidat :** D. strcpy copie aussi le caractère nul final, sans connaître la capacité de dest. L'appelant doit fournir une destination suffisamment grande.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/41-strcpy-copier-dans-un-espace-existant

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-041-01 — strdup : copie allouée dynamiquement

**Une seule bonne réponse**

Pourquoi faut-il généralement free le résultat réussi de strdup ? (Une seule réponse correcte.)

- **A ❌** Le résultat pointe forcément vers un littéral
- **B ✅** La chaîne dupliquée est allouée dynamiquement
- **C ❌** strdup renvoie toujours un objet automatique
- **D ❌** Le résultat est une constante du compilateur

**Corrigé candidat :** B. La copie sur le tas doit être libérée.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/42-strdup-copie-allouee-dynamiquement

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-042-01 — Pile et tas : durée de vie des allocations

**Plusieurs bonnes réponses**

Quelles propositions sur les durées de vie sont correctes en C ? (Plusieurs réponses correctes.)

- **A ✅** Une allocation malloc peut rester vivante après la sortie du bloc contenant le pointeur.
- **B ❌** malloc donne automatiquement une durée de vie de bloc à la zone allouée.
- **C ✅** Un objet local ordinaire à durée de vie automatique existe durant l'exécution de son bloc.
- **D ❌** Renvoyer un pointeur vers une variable automatique prolonge la durée de vie de celle-ci.

**Corrigé candidat :** A, C. Le stockage dynamique survit au bloc contenant le pointeur jusqu'à sa libération ; la durée de vie automatique ne se prolonge pas en renvoyant une adresse.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/43-pile-et-tas-duree-de-vie-des-allocations

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-043-01 — free : quelles adresses peut-on libérer ?

**Une seule bonne réponse**

Quelle adresse est libérable par free ? (Une seule réponse correcte.)

- **A ✅** Un pointeur issu d'un malloc réussi et non encore libéré
- **B ❌** Une adresse calculée en plein milieu d'un bloc
- **C ❌** L'adresse d'un int local
- **D ❌** L'adresse d'un littéral de chaîne

**Corrigé candidat :** A. free doit recevoir un pointeur compatible issu de l'allocateur, ou NULL.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/44-free-quelles-adresses-peut-on-liberer

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-044-01 — Pointeur non initialisé : comportement indéfini

**Une seule bonne réponse**

Quel risque avec `int *p; *p=3;` si p n'a pas été initialisé ? (Une seule réponse correcte.)

- **A ❌** Allocation automatique d'un int pointé
- **B ✅** Comportement indéfini
- **C ❌** Écriture garantie dans un bloc malloc
- **D ❌** Valeur 3 stockée dans p

**Corrigé candidat :** B. Le pointeur indéterminé ne désigne pas une cible valide garantie.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/45-pointeur-non-initialise-comportement-indefini

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-045-01 — realloc — redimensionner une allocation

**Une seule bonne réponse**

Pourquoi utiliser `tmp = realloc(p, taille)` avant de mettre p à jour ? (Une seule réponse correcte.)

- **A ❌** Éviter tout besoin de free
- **B ❌** Rendre p utilisable après succès sans mise à jour
- **C ❌** Initialiser les nouveaux octets à zéro
- **D ✅** Préserver p si realloc échoue

**Corrigé candidat :** D. Un échec laisse l'ancien bloc intact ; un succès invalide l'ancien pointeur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation · https://en.cppreference.com/c/memory/realloc

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-045-02 — realloc — redimensionner une allocation

**Une seule bonne réponse**

Après un realloc réussi de taille positive, peut-on continuer à utiliser l'ancienne valeur de p pour accéder au bloc ? (Une seule réponse correcte.)

- **A ❌** Oui, parce que realloc ne déplace jamais un bloc
- **B ✅** Non, même si l'adresse numérique semble identique
- **C ❌** Oui, toujours
- **D ❌** Oui, uniquement pour écrire

**Corrigé candidat :** B. L'ancien pointeur est invalidé par une réallocation réussie.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation · https://en.cppreference.com/c/memory/realloc

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-046-01 — Segfault — faute de segmentation

**Une seule bonne réponse**

Une erreur de segmentation signifie-t-elle automatiquement qu'un pointeur nul a été déréférencé ? (Une seule réponse correcte.)

- **A ❌** Non, elle ne concerne jamais la mémoire
- **B ✅** Non, plusieurs accès mémoire invalides peuvent la provoquer
- **C ❌** Oui, c'est sa cause unique
- **D ❌** Oui, sinon ce n'est pas une segfault

**Corrigé candidat :** B. Une segfault peut avoir différentes causes, selon l'environnement.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/47-segfault-faute-de-segmentation

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-047-01 — strncpy() — copie limitée et terminaison

**Une seule bonne réponse**

Pourquoi strncpy ne garantit-elle pas systématiquement le terminateur nul ? (Une seule réponse correcte.)

- **A ✅** Une source de longueur >= n peut remplir les n octets sans '\0'
- **B ❌** Parce qu'elle agrandit le tableau sans borne
- **C ❌** Parce que toutes les destinations sont des int
- **D ❌** Parce qu'elle ajoute toujours deux terminateurs

**Corrigé candidat :** A. En cas de troncation, la destination peut manquer de caractère nul.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/48-strncpy-copie-limitee-et-terminaison

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-048-01 — calloc() — allouer et initialiser à zéro

**Une seule bonne réponse**

Quelle propriété de calloc est correcte ? (Une seule réponse correcte.)

- **A ❌** Il empêche tous les accès hors limites après allocation.
- **B ❌** Il garantit toujours le retour d'une adresse non NULL.
- **C ✅** Il initialise à zéro les octets de la zone allouée.
- **D ❌** Il rend inutile l'appel à free.

**Corrigé candidat :** C. calloc met les octets alloués à zéro, sans garantir la réussite de l'allocation ni la sécurité des accès futurs.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/49-calloc-allouer-et-initialiser-a-zero

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-049-01 — Buffer overflow — dépassement de tampon

**Une seule bonne réponse**

Quel accès dépasse les bornes de `int t[3]` ? (Une seule réponse correcte.)

- **A ❌** t[0]
- **B ❌** t[2]
- **C ❌** t[1]
- **D ✅** t[3]

**Corrigé candidat :** D. Les indices valides sont 0, 1 et 2.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/50-buffer-overflow-depassement-de-tampon

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-050-01 — Use-after-free — réutiliser un bloc libéré

**Une seule bonne réponse**

Après `free(p)`, que produit l'accès `*p=4` au bloc libéré ? (Une seule réponse correcte.)

- **A ❌** Un zéro automatique
- **B ✅** Un comportement indéfini
- **C ❌** Un appel valide de malloc
- **D ❌** Une réallocation implicite

**Corrigé candidat :** B. La durée de vie du bloc est terminée.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/51-use-after-free-reutiliser-un-bloc-libere

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-051-01 — Double free — ne pas libérer deux fois

**Une seule bonne réponse**

Si q est un alias de p et que free(p) a réussi, que risque free(q) ? (Une seule réponse correcte.)

- **A ✅** Double free et comportement indéfini
- **B ❌** Réduction du bloc de moitié
- **C ❌** Garantie de libération sûre sans erreur
- **D ❌** Remise automatique de q à NULL

**Corrigé candidat :** A. Les deux pointeurs visaient le même bloc déjà libéré.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/52-double-free-ne-pas-liberer-deux-fois

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-052-01 — Débordement du calcul de taille avant malloc

**Une seule bonne réponse**

Avant malloc(n * sizeof *p), quel contrôle empêche le débordement de size_t (taille élément positive) ? (Une seule réponse correcte.)

- **A ❌** n == 0 seulement
- **B ❌** sizeof p == sizeof *p
- **C ❌** n <= sizeof *p
- **D ✅** `n <= ((size_t)-1) / sizeof *p`

**Corrigé candidat :** D. Le plus grand size_t est ((size_t)-1), expression compatible GNU89 ; vérifier cette borne avant le produit évite son débordement.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/53-debordement-du-calcul-de-taille-avant-malloc

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-053-01 — Valgrind Memcheck — comprendre les alertes

**Une seule bonne réponse**

Dans un rapport Memcheck, que signifie un diagnostic `Invalid write` ? (Une seule réponse correcte.)

- **A ✅** Une écriture dans un emplacement que Memcheck estime invalide.
- **B ❌** Une fuite directe de 32 octets sans écriture.
- **C ❌** La lecture d'une valeur non initialisée sans écriture.
- **D ❌** Un bloc encore accessible lors de la fin du processus.

**Corrigé candidat :** A. Invalid write décrit une écriture considérée invalide : adresse hors limites, libérée ou autrement inaccessible.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/54-valgrind-memcheck-comprendre-les-alertes

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-054-01 — memcpy() ou memmove() — zones qui se recouvrent

**Une seule bonne réponse**

Quel outil standard convient si source et destination de la copie peuvent se recouvrir ? (Une seule réponse correcte.)

- **A ✅** memmove
- **B ❌** strcpy sans conditions
- **C ❌** calloc
- **D ❌** memcpy

**Corrigé candidat :** A. memmove gère le recouvrement, contrairement à memcpy.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/55-memcpy-ou-memmove-zones-qui-se-recouvrent

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-055-01 — Dépassement de tampon sur la pile — erreur avant malloc

**Une seule bonne réponse**

La saisie déborde déjà un tampon local avant un appel ultérieur à malloc. Quel correctif doit intervenir en premier ? (Une seule réponse correcte.)

- **A ❌** Contrôler la taille seulement après que la lecture est terminée.
- **B ✅** Limiter la lecture d'après la capacité réelle du tableau local.
- **C ❌** Conserver strcpy, puisque malloc corrigera la corruption initiale.
- **D ❌** Ajouter un second appel à free lors du nettoyage.

**Corrigé candidat :** B. La lecture elle-même doit être bornée. Une copie ou une libération ultérieure ne répare pas les écritures hors limites déjà commises.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/56-depassement-de-tampon-sur-la-pile-erreur-avant-malloc

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-056-01 — Tampon fixe, statique et dynamique — emplacement et durée de vie

**Plusieurs bonnes réponses**

Quelles affirmations montrent que taille, durée de vie et allocation d'un tampon sont des propriétés distinctes ? (Plusieurs réponses correctes.)

- **A ✅** Un tableau local de taille fixe peut avoir une durée de vie automatique.
- **B ✅** Un tableau déclaré static dans une fonction possède une durée de vie statique.
- **C ✅** Un tampon obtenu par malloc a une durée de vie dynamique indépendante du bloc du pointeur.
- **D ❌** Tout tampon de taille fixe est alloué statiquement.
- **E ❌** Tout tampon alloué dynamiquement est nécessairement une variable globale.

**Corrigé candidat :** A, B, C. Une taille fixe n'implique pas une durée de vie statique ; le mode d'allocation et la durée de vie doivent être distingués.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/57-tampon-fixe-statique-et-dynamique-emplacement-et-duree-de-vie

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-057-01 — Stack overflow — épuisement de la pile d'appels

**Une seule bonne réponse**

Quelle situation peut épuiser la pile d'appels d'un processus ? (Une seule réponse correcte.)

- **A ❌** Une boucle itérative qui n'ajoute aucun appel de fonction.
- **B ❌** Une opération malloc dont le résultat est conservé dans un pointeur.
- **C ❌** Une fonction qui retourne aussitôt au premier appel.
- **D ✅** Une récursion qui ne rencontre jamais de condition d'arrêt.

**Corrigé candidat :** D. Chaque appel récursif peut ajouter des informations de pile ; une récursion non bornée peut épuiser cette ressource.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/58-stack-overflow-epuisement-de-la-pile-d-appels

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-058-01 — Valgrind : « definitely lost » et les octets perdus

**Une seule bonne réponse**

Que signifie `definitely lost: 32 bytes in 1 blocks` dans Memcheck ? (Une seule réponse correcte.)

- **A ❌** Un bloc de 32 octets correctement libéré.
- **B ✅** Un bloc inaccessible de 32 octets perdu directement.
- **C ❌** Trente-deux blocs d'un octet encore accessibles.
- **D ❌** Un bloc de 32 octets classé comme still reachable.

**Corrigé candidat :** B. Un seul bloc totalisant 32 octets a été perdu sans pointeur connu permettant de le récupérer.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/59-valgrind-definitely-lost-et-les-octets-perdus

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-059-01 — strlen sans terminateur nul — lecture hors limites

**Une seule bonne réponse**

Pourquoi `strlen` sur un tableau sans caractère nul accessible est-elle dangereuse ? (Une seule réponse correcte.)

- **A ❌** Elle complète automatiquement le tableau avec un nul.
- **B ❌** Elle s'arrête automatiquement aux limites réelles du tableau.
- **C ❌** Elle utilise sizeof pour déterminer la capacité sans aide.
- **D ✅** Elle continue à rechercher le nul, avec accès potentiel hors limites.

**Corrigé candidat :** D. strlen ne reçoit pas de capacité : une chaîne doit avoir un terminateur nul accessible.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/60-strlen-sans-terminateur-nul-lecture-hors-limites

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-060-01 — memcpy() — copier des octets sans chevauchement

**Une seule bonne réponse**

Que garantit `memcpy(dest,src,n)` si les n octets sont valides et les zones sans recouvrement ? (Une seule réponse correcte.)

- **A ✅** La copie des n octets demandés.
- **B ❌** La terminaison du résultat comme chaîne C.
- **C ❌** La détection de la taille maximale de dest.
- **D ❌** La copie dans l'ordre lexical des caractères.

**Corrigé candidat :** A. memcpy copie des octets, sans ajouter de nul ni vérifier la taille réelle de la destination.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/61-memcpy-copier-des-octets-sans-chevauchement

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-061-01 — Ownership — qui est responsable de free() ?

**Une seule bonne réponse**

Copier un pointeur p dans q transfère-t-il automatiquement la responsabilité de free ? (Une seule réponse correcte.)

- **A ❌** Oui, q devient obligatoirement propriétaire unique
- **B ❌** Oui, p devient NULL
- **C ❌** Non, mais malloc devient inutile
- **D ✅** Non, il faut définir explicitement le propriétaire

**Corrigé candidat :** D. L'ownership est une convention du programme, pas une opération implicite du langage C.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/62-ownership-qui-est-responsable-de-free

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-062-01 — Dangling pointer — pointeur vers un objet qui n'existe plus

**Une seule bonne réponse**

Un pointeur vers un objet local dont la durée de vie s'est terminée est appelé comment ? (Une seule réponse correcte.)

- **A ❌** Pointeur vers un objet toujours valide
- **B ✅** Dangling pointer
- **C ❌** Pointeur de fonction
- **D ❌** Pointeur garanti NULL

**Corrigé candidat :** B. La cible n'existe plus.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/63-dangling-pointer-pointeur-vers-un-objet-qui-n-existe-plus

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-063-01 — Raw pointer — pointeur brut en C

**Une seule bonne réponse**

Que garantit un raw pointer non NULL en C ? (Une seule réponse correcte.)

- **A ✅** Il contient une valeur de pointeur, pas la validité de sa cible
- **B ❌** La mémoire est libérée automatiquement
- **C ❌** La cible est forcément accessible
- **D ❌** La taille du bloc pointé est connue

**Corrigé candidat :** A. La non-nullité ne prouve ni validité ni propriété.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/64-raw-pointer-pointeur-brut-en-c

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-064-01 — char * — pointeur vers un caractère ou une chaîne

**Une seule bonne réponse**

Une variable `char *p` connaît-elle automatiquement la capacité de la zone qu'elle désigne ? (Une seule réponse correcte.)

- **A ✅** Non : la capacité doit être déterminée par ailleurs.
- **B ❌** Oui : sizeof p renvoie la taille du tableau désigné.
- **C ❌** Oui : strlen(p) mesure la capacité même sans caractère nul.
- **D ❌** Oui : le type char * intègre une longueur cachée.

**Corrigé candidat :** A. char * indique le type de caractère visé, pas la capacité. sizeof p est la taille du pointeur, et strlen exige une chaîne terminée.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/65-char-pointeur-vers-un-caractere-ou-une-chaine

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-065-01 — Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites

**Une seule bonne réponse**

Pourquoi un intitulé de diagnostic mémoire ne suffit-il pas à établir la cause exacte d'un problème ? (Une seule réponse correcte.)

- **A ❌** Il garantit que toute erreur mémoire provient de malloc.
- **B ❌** La présence d'un nom de catégorie suffit à identifier la ligne fautive.
- **C ✅** Il faut confronter la catégorie aux accès, allocations et traces d'exécution réels.
- **D ❌** Un rapport de fuite prouve qu'aucun dépassement de tampon n'a eu lieu.

**Corrigé candidat :** C. Les catégories de diagnostics résument un symptôme ; leur contexte d'exécution et les traces sont nécessaires pour conclure.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/66-diagnostics-memoire-invalid-write-uninitialized-value-et-fuites

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-000-01 — struct : regrouper plusieurs données

**Une seule bonne réponse**

En C, que définit `struct point { int x; int y; };` ? (Une seule réponse correcte.)

- **A ❌** Une allocation sur le tas créée automatiquement.
- **B ❌** Une union où les membres partagent le même stockage.
- **C ✅** Un type composé de deux membres entiers nommés.
- **D ❌** Une fonction dont les paramètres sont x et y.

**Corrigé candidat :** C. La déclaration définit un type de structure possédant deux membres nommés ; elle n'alloue pas à elle seule une variable.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/1-struct-regrouper-plusieurs-donnees

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-001-01 — struct : type et variable

**Une seule bonne réponse**

Avec `struct point {int x; int y;};`, comment déclarer une variable du type ? (Une seule réponse correcte.)

- **A ❌** struct p point;
- **B ✅** struct point p;
- **C ❌** point p; sans typedef
- **D ❌** int point;

**Corrigé candidat :** B. Sans typedef, le nom de type inclut le mot-clé struct.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/2-struct-type-et-variable

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-002-01 — Accès aux membres avec .

**Une seule bonne réponse**

Pour `struct point p;`, quel opérateur accède au membre x ? (Une seule réponse correcte.)

- **A ❌** &p.x comme accès à la valeur
- **B ❌** p->x
- **C ❌** *p.x
- **D ✅** p.x

**Corrigé candidat :** D. . accède à un membre d'objet structure.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/3-acces-aux-membres-avec

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-003-01 — Accès par pointeur avec ->

**Une seule bonne réponse**

Pour `struct point *p` valide, comment accéder à x ? (Une seule réponse correcte.)

- **A ❌** p.x()
- **B ✅** p->x
- **C ❌** p.x
- **D ❌** (*p)->x

**Corrigé candidat :** B. p->x correspond à (*p).x.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/4-acces-par-pointeur-avec

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-004-01 — Initialiser une struct avec { }

**Une seule bonne réponse**

Que permet l'initialisation `struct point p={1,2};` ? (Une seule réponse correcte.)

- **A ❌** Créer forcément un tableau de deux structures
- **B ✅** Initialiser les membres dans leur ordre de déclaration
- **C ❌** Déclarer une fonction retournant int
- **D ❌** Appeler implicitement malloc

**Corrigé candidat :** B. Une liste d'initialisation affecte les membres correspondants.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/5-initialiser-une-struct-avec

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-005-01 — Initialiseurs désignés .membre (C99)

**Une seule bonne réponse**

Quel mécanisme introduit en C99 permet `struct point p={.x=1,.y=2};` ? (Une seule réponse correcte.)

- **A ❌** Une affectation à des membres par flèche dans une fonction.
- **B ✅** Des initialiseurs désignés par le nom des membres.
- **C ❌** Une réorganisation physique de l'ordre des membres.
- **D ❌** Une allocation dynamique implicite des membres.

**Corrigé candidat :** B. Les initialiseurs désignés C99 choisissent les membres par leurs noms. Ce mécanisme n'appartient pas au C89 strict.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/6-initialiseurs-designes-membre-c99

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-006-01 — Tableau de structures

**Une seule bonne réponse**

Avec `struct point p[3];`, combien de structures contient le tableau ? (Une seule réponse correcte.)

- **A ❌** 0
- **B ✅** 3
- **C ❌** 1
- **D ❌** 6

**Corrigé candidat :** B. Le tableau comporte trois éléments struct.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/7-tableau-de-structures

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-007-01 — Structure imbriquée

**Une seule bonne réponse**

Comment accéder au champ x d'un membre position lui-même de type struct, dans un objet p ? (Une seule réponse correcte.)

- **A ❌** p[x][position]
- **B ❌** p->position->x dans tous les cas
- **C ✅** p.position.x
- **D ❌** p.position->x quelle que soit sa déclaration

**Corrigé candidat :** C. L'opérateur . s'enchaîne sur les objets structures imbriquées.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/8-structure-imbriquee

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-008-01 — Copier une struct par affectation

**Une seule bonne réponse**

Que signifie `b=a;` pour deux objets du même type struct ? (Une seule réponse correcte.)

- **A ❌** Interdiction absolue du langage C
- **B ✅** Copie par valeur des membres de a vers b
- **C ❌** Simple alias automatique de a
- **D ❌** Allocation implicite de b sur le tas

**Corrigé candidat :** B. L'affectation de structures copie la valeur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/9-copier-une-struct-par-affectation

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-009-01 — Passer une struct par valeur

**Une seule bonne réponse**

Une structure passée comme paramètre ordinaire est-elle copiée ? (Une seule réponse correcte.)

- **A ❌** Oui, seulement si elle contient un pointeur
- **B ❌** Non, les structures sont incompatibles avec les paramètres
- **C ❌** Non, passage par référence automatique
- **D ✅** Oui, passage par valeur

**Corrigé candidat :** D. Le paramètre reçoit une copie de la structure.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/10-passer-une-struct-par-valeur

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-010-01 — Modifier une struct via son adresse

**Une seule bonne réponse**

Quel paramètre permet à une fonction de modifier directement l'objet struct de l'appelant ? (Une seule réponse correcte.)

- **A ❌** struct point p
- **B ❌** int p
- **C ❌** char p
- **D ✅** struct point *p

**Corrigé candidat :** D. Un pointeur permet l'accès à l'objet initial.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/11-modifier-une-struct-via-son-adresse

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-011-01 — typedef : donner un alias à un type

**Une seule bonne réponse**

Que fait typedef en C ? (Une seule réponse correcte.)

- **A ✅** Donne un alias à un type existant
- **B ❌** Crée un objet alloué
- **C ❌** Exécute le code de la struct
- **D ❌** Ajoute obligatoirement un membre

**Corrigé candidat :** A. typedef est un alias de nom de type.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/12-typedef-donner-un-alias-a-un-type

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-012-01 — typedef struct : nommer une structure

**Une seule bonne réponse**

Quel avantage apporte `typedef struct point point_t;` une fois le type complété ? (Une seule réponse correcte.)

- **A ✅** Déclarer des variables point_t sans répéter struct point.
- **B ❌** Modifier automatiquement les membres de struct point.
- **C ❌** Rendre point_t incompatible avec le type struct point.
- **D ❌** Permettre d'instancier un point_t avant définition complète.

**Corrigé candidat :** A. L'alias point_t désigne le même type, sans changer sa disposition ou rendre un type incomplet instanciable.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/13-typedef-struct-nommer-une-structure

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-013-01 — typedef avec structure anonyme

**Une seule bonne réponse**

Une struct anonyme définie avec typedef peut-elle être utilisée via son alias ? (Une seule réponse correcte.)

- **A ❌** Non, typedef n'accepte aucune structure
- **B ✅** Oui
- **C ❌** Non, il faut toujours un tag struct nommé
- **D ❌** Oui seulement dans C++

**Corrigé candidat :** B. L'alias nomme le type même sans tag.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/14-typedef-avec-structure-anonyme

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-014-01 — sizeof(struct) et padding (avancé)

**Une seule bonne réponse**

Pourquoi sizeof(struct) peut-elle dépasser la somme des sizeof des membres ? (Une seule réponse correcte.)

- **A ❌** Parce que tous les champs ont une taille nulle
- **B ❌** Parce qu'une struct est toujours de taille 1024
- **C ✅** À cause du padding d'alignement
- **D ❌** Parce que sizeof mesure les valeurs numériques

**Corrigé candidat :** C. Le compilateur peut insérer des octets de padding.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/15-sizeof-struct-et-padding-avance

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-015-01 — malloc pour une struct

**Une seule bonne réponse**

Quel idiome alloue l'espace d'une structure visée par p, sous réserve de vérifier le résultat ? (Une seule réponse correcte.)

- **A ❌** p = sizeof *p;
- **B ❌** p = malloc(sizeof p); en toute circonstance
- **C ✅** p = malloc(sizeof *p);
- **D ❌** p = free(sizeof *p);

**Corrigé candidat :** C. sizeof *p mesure la structure pointée.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/16-malloc-pour-une-struct

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-016-01 — Structure autoréférentielle (avancé)

**Une seule bonne réponse**

Quel champ permet une liste chaînée autoréférentielle de struct noeud ? (Une seule réponse correcte.)

- **A ✅** struct noeud *suivant;
- **B ❌** char suivant; contenant une adresse
- **C ❌** struct noeud suivant; comme membre complet
- **D ❌** int *suivant exigeant une conversion implicite

**Corrigé candidat :** A. Une structure peut contenir un pointeur vers son propre type.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/17-structure-autoreferentielle-avance

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-017-01 — Documenter une struct pour Betty

**Une seule bonne réponse**

Pourquoi documenter une structure et ses membres dans un en-tête selon Betty ? (Une seule réponse correcte.)

- **A ❌** Pour supprimer les membres non utilisés lors de la compilation.
- **B ❌** Pour garantir l'absence de padding dans la structure.
- **C ✅** Pour expliciter le contrat et la signification des champs.
- **D ❌** Pour permettre de modifier les membres en contournant leurs types.

**Corrigé candidat :** C. La documentation décrit le rôle du type et des membres. Elle ne change ni la mémoire ni la sémantique du langage.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/18-documenter-une-struct-pour-betty

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-018-01 — typedef avant la définition d'une struct

**Une seule bonne réponse**

Peut-on déclarer `typedef struct cellule cellule_t;` avant de définir les membres de struct cellule ? (Une seule réponse correcte.)

- **A ❌** Oui, on peut immédiatement faire sizeof(cellule_t) avant définition
- **B ✅** Oui, il s'agit alors d'un type incomplet utilisable par pointeur
- **C ❌** Non, typedef est réservé aux entiers
- **D ❌** Non, C exige toujours des membres immédiats

**Corrigé candidat :** B. Le type incomplet peut être désigné par pointeur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/19-typedef-avant-la-definition-d-une-struct

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-019-01 — Point ou flèche ? Comparer . et ->

**Une seule bonne réponse**

Quelle équivalence est correcte pour p pointeur vers struct ? (Une seule réponse correcte.)

- **A ❌** p->x appelle toujours malloc
- **B ❌** p->x == *p.x pour tous les types
- **C ✅** p->x == (*p).x
- **D ❌** p.x == &p.x

**Corrigé candidat :** C. -> signifie déréférencement suivi d'accès au membre.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/20-point-ou-fleche-comparer-et

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-16-020-01 — Include guards — protéger les fichiers .h

**Une seule bonne réponse**

Quel est l'objectif d'un include guard #ifndef/#define/#endif dans un fichier .h ? (Une seule réponse correcte.)

- **A ❌** Faire un appel réseau
- **B ❌** Remplacer un compilateur C
- **C ❌** Empêcher toute compilation de la source
- **D ✅** Éviter plusieurs traitements du même contenu dans une unité de traduction

**Corrigé candidat :** D. La garde limite les inclusions répétées dans une même unité de traduction.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/21-include-guards-proteger-les-fichiers-h

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-066-01 — Pointeur de fonction — déclarer une signature

**Une seule bonne réponse**

Quelle déclaration représente un pointeur vers une fonction int prenant un int ? (Une seule réponse correcte.)

- **A ✅** int (*f)(int);
- **B ❌** int *f(int);
- **C ❌** int f(int *);
- **D ❌** int f*(int);

**Corrigé candidat :** A. La parenthèse (*f) indique le pointeur de fonction.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/67-pointeur-de-fonction-declarer-une-signature

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-067-01 — Appeler un pointeur de fonction — f(x) ou (*f)(x)

**Plusieurs bonnes réponses**

Pour un pointeur de fonction valide f, quelles formes d'appel sont équivalentes ? (Plusieurs réponses correctes.)

- **A ❌** `(f + 1)(5)` pour appeler la fonction suivante en mémoire
- **B ✅** f(5)
- **C ❌** &f(5) comme appel toujours équivalent
- **D ✅** (*f)(5)

**Corrigé candidat :** B, D. Les formes f(5) et (*f)(5) appellent la même fonction. L'arithmétique sur un pointeur de fonction n'est pas une méthode d'appel définie.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/68-appeler-un-pointeur-de-fonction-f-x-ou-f-x

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-068-01 — Callback — transmettre une fonction en paramètre

**Une seule bonne réponse**

Qu'appelle-t-on callback en C ? (Une seule réponse correcte.)

- **A ❌** Une fonction qui doit être exécutée uniquement après la fin de main.
- **B ✅** Une fonction passée à une autre fonction afin que celle-ci puisse l'appeler.
- **C ❌** Une fonction implicitement compatible avec toutes les signatures.
- **D ❌** Une fonction recevant automatiquement toutes les variables locales de l'appelant.

**Corrigé candidat :** B. Un callback est appelé via une référence de fonction, et sa signature doit être compatible avec celle attendue.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/69-callback-transmettre-une-fonction-en-parametre

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-069-01 — Tableau de pointeurs de fonctions — choisir une opération

**Plusieurs bonnes réponses**

Quelles précautions respecter pour un tableau de pointeurs de fonctions ? (Plusieurs réponses correctes.)

- **A ✅** Contrôler qu'un élément n'est pas NULL avant de l'appeler.
- **B ❌** Considérer deux signatures de fonctions différentes comme interchangeables.
- **C ❌** Supposer que tout indice est sûr si le tableau a une durée de vie statique.
- **D ✅** Vérifier les bornes de l'indice avant l'accès.

**Corrigé candidat :** A, D. L'indice et le pointeur de fonction doivent être valides ; les signatures appelées doivent être compatibles.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/70-tableau-de-pointeurs-de-fonctions-choisir-une-operation

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-070-01 — typedef d'un pointeur de fonction — simplifier les signatures

**Une seule bonne réponse**

Que déclare `typedef int (*operation_fn)(int,int);` ? (Une seule réponse correcte.)

- **A ❌** Une fonction operation_fn appelée immédiatement au chargement.
- **B ❌** Un alias de type int pour le résultat de toutes les opérations.
- **C ✅** Un alias pour un pointeur vers fonction prenant deux int et renvoyant int.
- **D ❌** Un tableau de deux fonctions ayant des résultats entiers.

**Corrigé candidat :** C. typedef nomme un type de pointeur vers fonction, sans créer ni exécuter de fonction.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/71-typedef-d-un-pointeur-de-fonction-simplifier-les-signatures

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## CDEEP-09-071-01 — qsort() — comparateur passé par pointeur de fonction

**Une seule bonne réponse**

Pourquoi utiliser `(a>b)-(a<b)` comme comparateur d'int pour qsort ? (Une seule réponse correcte.)

- **A ✅** Éviter le débordement possible de `a-b`
- **B ❌** Garantir que qsort est stable
- **C ❌** Éviter de recevoir des void *
- **D ❌** Trier nécessairement en ordre décroissant

**Corrigé candidat :** A. Cette expression donne -1/0/1 sans soustraction potentiellement débordante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/72-qsort-comparateur-passe-par-pointeur-de-fonction

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

