# Revue de quiz — Pointeurs et tableaux C

**171 questions candidates à vérifier.** Les réponses indiquées sont destinées aux relecteurs, pas à l'interface des élèves.

## V1-N09_000-01 — Pointeur (pointer)

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int. » ? (Une seule réponse correcte.)

- **A ❌** typedef d'un pointeur de fonction — simplifier les signatures
- **B ❌** Raw pointer — pointeur brut en C
- **C ✅** Pointeur (pointer)
- **D ❌** Tampon fixe, statique et dynamique — emplacement et durée de vie

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/1-pointeur-pointer

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_000-04 — Pointeur (pointer)

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Pointeur (pointer) » ? (Plusieurs réponses correctes.)

- **A ❌** typedef struct animal { int age; } animal_t; rend le type utilisable sous le nom animal_t.
- **B ❌** Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.
- **C ✅** Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int.
- **D ✅** Toujours initialiser un pointeur avant de le déréférencer.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/1-pointeur-pointer

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_001-01 — Adresse mémoire

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse. » ? (Une seule réponse correcte.)

- **A ✅** Adresse mémoire
- **B ❌** Pointeur de fonction — déclarer une signature
- **C ❌** strlen sans terminateur nul — lecture hors limites
- **D ❌** & (opérateur d’adresse)

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/2-adresse-memoire

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_001-04 — Adresse mémoire

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Adresse mémoire » ? (Plusieurs réponses correctes.)

- **A ✅** L’adresse affichée peut changer d’une exécution à l’autre.
- **B ❌** Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres.
- **C ✅** Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse.
- **D ❌** malloc(sizeof *p) réserve assez d’octets pour un objet du type struct pointé par p.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/2-adresse-memoire

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_002-01 — & (opérateur d’adresse)

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « &n produit l’adresse de la variable n ; p = &n fait pointer p vers n. » ? (Une seule réponse correcte.)

- **A ❌** Modifier une valeur par un pointeur
- **B ❌** Dangling pointer — pointeur vers un objet qui n'existe plus
- **C ✅** & (opérateur d’adresse)
- **D ❌** Tableau de pointeurs de fonctions — choisir une opération

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/3-operateur-d-adresse

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_002-04 — & (opérateur d’adresse)

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « & (opérateur d’adresse) » ? (Plusieurs réponses correctes.)

- **A ✅** Ne confonds pas &n (adresse de n) avec n (valeur de n).
- **B ✅** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.
- **C ❌** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.
- **D ❌** typedef struct point point; annonce un alias pour un type encore incomplet ; sa définition complète permet ensuite de créer point p.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/3-operateur-d-adresse

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_003-01 — * dans une déclaration

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré. » ? (Une seule réponse correcte.)

- **A ❌** Pointeur (pointer)
- **B ❌** Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites
- **C ✅** * dans une déclaration
- **D ❌** %p avec printf

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_003-04 — * dans une déclaration

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « * dans une déclaration » ? (Plusieurs réponses correctes.)

- **A ✅** Avec plusieurs variables déclarées sur une même ligne, chaque déclarateur doit être lu séparément.
- **B ✅** int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré.
- **C ❌** sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.
- **D ❌** Matériel physique / programmes exécutés par la machine.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_004-01 — * dans une expression

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement. » ? (Une seule réponse correcte.)

- **A ❌** Passage d’arguments par valeur
- **B ❌** Callback — transmettre une fonction en paramètre
- **C ❌** * dans une déclaration
- **D ✅** * dans une expression

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/5-dans-une-expression

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_004-04 — * dans une expression

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « * dans une expression » ? (Plusieurs réponses correctes.)

- **A ❌** Linux est un noyau et une famille de systèmes ; Ubuntu est une distribution utilisant Linux.
- **B ❌** La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.
- **C ✅** Déréférencer un pointeur non initialisé ou invalide entraîne un comportement indéfini.
- **D ✅** *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/5-dans-une-expression

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_005-01 — Modifier une valeur par un pointeur

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402. » ? (Une seule réponse correcte.)

- **A ❌** Indices de tableau
- **B ✅** Modifier une valeur par un pointeur
- **C ❌** Type pointé
- **D ❌** qsort() — comparateur passé par pointeur de fonction

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/6-modifier-une-valeur-par-un-pointeur

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_005-04 — Modifier une valeur par un pointeur

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Modifier une valeur par un pointeur » ? (Plusieurs réponses correctes.)

- **A ✅** p = &autreVariable changerait, à l’inverse, l’objet pointé.
- **B ✅** Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.
- **C ❌** Application permettant de saisir des commandes et d’afficher leurs résultats.
- **D ❌** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/6-modifier-une-valeur-par-un-pointeur

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_006-01 — Valeur de p, *p et &p

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « p contient une adresse ; *p est la valeur pointée ; &p est l’adresse mémoire du pointeur lui-même. » ? (Une seule réponse correcte.)

- **A ✅** Valeur de p, *p et &p
- **B ❌** Tailles des pointeurs
- **C ❌** sizeof(tableau)
- **D ❌** & (opérateur d’adresse)

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/7-valeur-de-p-p-et-p

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_006-04 — Valeur de p, *p et &p

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Valeur de p, *p et &p » ? (Plusieurs réponses correctes.)

- **A ❌** Noyau du système d’exploitation ; interface entre logiciels et ressources matérielles.
- **B ✅** Ne confonds pas la case qui contient une adresse avec la case située à cette adresse.
- **C ❌** Fichier texte qui contient une suite de commandes exécutables par un Shell.
- **D ✅** p contient une adresse ; *p est la valeur pointée ; &p est l’adresse mémoire du pointeur lui-même.

**Corrigé candidat :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/7-valeur-de-p-p-et-p

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_007-01 — Type pointé

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau. » ? (Une seule réponse correcte.)

- **A ✅** Type pointé
- **B ❌** Tableau
- **C ❌** Modifier une valeur par un pointeur
- **D ❌** Notation équivalente

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/8-type-pointe

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_007-04 — Type pointé

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Type pointé » ? (Plusieurs réponses correctes.)

- **A ✅** int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.
- **B ❌** Interface graphique / interface en ligne de commande.
- **C ❌** Dossier courant / dossier parent.
- **D ✅** L’arithmétique des pointeurs doit rester dans les limites du même tableau, ou juste après.

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/8-type-pointe

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_008-01 — %p avec printf

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée). » ? (Une seule réponse correcte.)

- **A ❌** sizeof
- **B ❌** %s avec printf
- **C ✅** %p avec printf
- **D ❌** Conversion tableau → pointeur

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/9-p-avec-printf

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_008-04 — %p avec printf

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « %p avec printf » ? (Plusieurs réponses correctes.)

- **A ❌** Afficher le dossier actuel / changer de dossier / lister les fichiers.
- **B ✅** Le format exact de l’adresse affichée dépend de l’implémentation.
- **C ✅** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).
- **D ❌** Shell courant sur Linux.

**Corrigé candidat :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/9-p-avec-printf

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_009-01 — sizeof

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier. » ? (Une seule réponse correcte.)

- **A ❌** Passer une adresse à une fonction
- **B ❌** Arithmétique des pointeurs
- **C ✅** sizeof
- **D ❌** Parcourir un tableau

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/10-sizeof

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_009-04 — sizeof

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « sizeof » ? (Plusieurs réponses correctes.)

- **A ✅** sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier.
- **B ✅** Utiliser %zu pour afficher une valeur de type size_t.
- **C ❌** Dossier personnel de l’utilisateur.
- **D ❌** Afficher le contenu / type du fichier / rechercher / consulter le manuel.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/10-sizeof

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_010-01 — Tailles des pointeurs

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme. » ? (Une seule réponse correcte.)

- **A ❌** Tableau ≠ pointeur
- **B ✅** Tailles des pointeurs
- **C ❌** Principe d'inversion d'une chaîne
- **D ❌** Caractère nul

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/11-tailles-des-pointeurs

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_010-04 — Tailles des pointeurs

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tailles des pointeurs » ? (Plusieurs réponses correctes.)

- **A ❌** Entrée standard (0) / sortie standard (1) / erreurs (2).
- **B ✅** Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme.
- **C ✅** Ne jamais coder en dur une taille de pointeur à partir de suppositions.
- **D ❌** Dépend du répertoire actuel.

**Corrigé candidat :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/11-tailles-des-pointeurs

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_011-01 — Passage d’arguments par valeur

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale. » ? (Une seule réponse correcte.)

- **A ❌** Initialisation d'un tableau
- **B ❌** &tableau
- **C ✅** Passage d’arguments par valeur
- **D ❌** Allocation automatique — variables locales

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/12-passage-d-arguments-par-valeur

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_011-04 — Passage d’arguments par valeur

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Passage d’arguments par valeur » ? (Plusieurs réponses correctes.)

- **A ❌** Relier la sortie d’une commande à l’entrée d’une autre.
- **B ❌** Copier / déplacer-renommer / supprimer.
- **C ✅** Pour modifier une variable de l’appelant, on peut transmettre son adresse.
- **D ✅** En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/12-passage-d-arguments-par-valeur

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_012-01 — Passer une adresse à une fonction

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur. » ? (Une seule réponse correcte.)

- **A ❌** Chaîne de caractères en C
- **B ✅** Passer une adresse à une fonction
- **C ❌** Échanger deux caractères
- **D ❌** Fuite mémoire — allocation perdue

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/13-passer-une-adresse-a-une-fonction

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_012-04 — Passer une adresse à une fonction

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Passer une adresse à une fonction » ? (Plusieurs réponses correctes.)

- **A ✅** Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.
- **B ❌** Changer les permissions / propriétaire / utiliser des privilèges élevés.
- **C ✅** La fonction doit recevoir une adresse valide avant de déréférencer p.
- **D ❌** Trier / dédupliquer les lignes voisines / extraire / début / fin / inverser les caractères.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/13-passer-une-adresse-a-une-fonction

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_013-01 — Tableau

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers. » ? (Une seule réponse correcte.)

- **A ❌** Exercices d’observation
- **B ✅** Tableau
- **C ❌** malloc et sizeof : allouer le bon nombre d’octets
- **D ❌** free — libérer la mémoire

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/14-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_013-04 — Tableau

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tableau » ? (Plusieurs réponses correctes.)

- **A ❌** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **B ✅** Les accès à l’extérieur du tableau sont invalides.
- **C ✅** Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.
- **D ❌** Rediriger les erreurs / prendre un fichier comme entrée.

**Corrigé candidat :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/14-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_014-01 — Indices de tableau

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5]. » ? (Une seule réponse correcte.)

- **A ❌** Tableau à deux dimensions
- **B ❌** strdup : copie allouée dynamiquement
- **C ❌** malloc : vérifier NULL
- **D ✅** Indices de tableau

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_014-04 — Indices de tableau

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Indices de tableau » ? (Plusieurs réponses correctes.)

- **A ✅** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **B ✅** Pour `int a[5]`, seuls les indices 0 à 4 désignent des éléments : lire ou modifier `a[5]` serait hors limites.
- **C ❌** Rechercher / compter les lignes / transformer des caractères.
- **D ❌** Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_015-01 — Tableau ≠ pointeur

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation. » ? (Une seule réponse correcte.)

- **A ❌** Pointeur non initialisé : comportement indéfini
- **B ❌** malloc — allocation dynamique
- **C ❌** Chaînes littérales et .rodata (avancé)
- **D ✅** Tableau ≠ pointeur

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/16-tableau-pointeur

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_015-04 — Tableau ≠ pointeur

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tableau ≠ pointeur » ? (Plusieurs réponses correctes.)

- **A ❌** Paramètres et variables du Shell / environnement.
- **B ✅** sizeof(a) et sizeof(p) ne mesurent pas la même chose.
- **C ✅** Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation.
- **D ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.

**Corrigé candidat :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/16-tableau-pointeur

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_016-01 — Conversion tableau → pointeur

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse. » ? (Une seule réponse correcte.)

- **A ❌** strcpy : copier dans un espace existant
- **B ❌** strncpy() — copie limitée et terminaison
- **C ✅** Conversion tableau → pointeur
- **D ❌** Chaîne littérale et tableau de char

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/17-conversion-tableau-pointeur

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_016-04 — Conversion tableau → pointeur

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Conversion tableau → pointeur » ? (Plusieurs réponses correctes.)

- **A ✅** Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.
- **B ❌** Variable définie dans le Shell en cours, non nécessairement exportée.
- **C ✅** Cette conversion ne se produit pas dans certains contextes, notamment sizeof(a) et &a.
- **D ❌** Liste des dossiers recherchés pour trouver une commande, séparés par :.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/17-conversion-tableau-pointeur

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_017-01 — sizeof(tableau)

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur. » ? (Une seule réponse correcte.)

- **A ❌** Use-after-free — réutiliser un bloc libéré
- **B ✅** sizeof(tableau)
- **C ❌** free : quelles adresses peut-on libérer ?
- **D ❌** Valgrind — détecter les fuites

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_017-04 — sizeof(tableau)

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « sizeof(tableau) » ? (Plusieurs réponses correctes.)

- **A ✅** sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur.
- **B ✅** Dans un paramètre de fonction déclaré int a[], a est traité comme un pointeur : sizeof(a) n’y mesure pas le tableau d’origine.
- **C ❌** Exporter une variable / supprimer une variable ou fonction.
- **D ❌** Évaluation arithmétique.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_018-01 — &tableau

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent. » ? (Une seule réponse correcte.)

- **A ❌** strlen, sizeof et terminateur nul
- **B ✅** &tableau
- **C ❌** Segfault — faute de segmentation
- **D ❌** Valgrind Memcheck — comprendre les alertes

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/19-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_018-04 — &tableau

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « &tableau » ? (Plusieurs réponses correctes.)

- **A ✅** Pour `int a[5]`, le type de `&a` est `int (*)[5]`, un pointeur vers le tableau entier de cinq int.
- **B ❌** Choisir une branche selon des conditions.
- **C ❌** Exécuter un script dans le Shell courant.
- **D ✅** &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent.

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/19-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_019-01 — Arithmétique des pointeurs

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int. » ? (Une seule réponse correcte.)

- **A ✅** Arithmétique des pointeurs
- **B ❌** Pile et tas : durée de vie des allocations
- **C ❌** Buffer overflow — dépassement de tampon
- **D ❌** Tampon fixe, statique et dynamique — emplacement et durée de vie

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/20-arithmetique-des-pointeurs

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_019-04 — Arithmétique des pointeurs

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Arithmétique des pointeurs » ? (Plusieurs réponses correctes.)

- **A ❌** Substitution de commande : récupérer sa sortie.
- **B ❌** ET logique / OU logique / négation.
- **C ✅** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.
- **D ✅** Le déplacement n’est défini que dans le même tableau, ou une position juste après.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/20-arithmetique-des-pointeurs

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_020-01 — Notation équivalente

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Pour un tableau a, a[2] désigne le même élément que *(a + 2). » ? (Une seule réponse correcte.)

- **A ❌** realloc — redimensionner une allocation
- **B ❌** strlen sans terminateur nul — lecture hors limites
- **C ❌** Débordement du calcul de taille avant malloc
- **D ✅** Notation équivalente

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_020-04 — Notation équivalente

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Notation équivalente » ? (Plusieurs réponses correctes.)

- **A ❌** Teste après exécution : le corps tourne au moins une fois.
- **B ✅** Cette équivalence ne rend pas valides les indices hors limites.
- **C ❌** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.
- **D ✅** Pour un tableau a, a[2] désigne le même élément que *(a + 2).

**Corrigé candidat :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_021-01 — Chaîne de caractères en C

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0. » ? (Une seule réponse correcte.)

- **A ❌** Dépassement de tampon sur la pile — erreur avant malloc
- **B ❌** Dangling pointer — pointeur vers un objet qui n'existe plus
- **C ❌** calloc() — allouer et initialiser à zéro
- **D ✅** Chaîne de caractères en C

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/22-chaine-de-caracteres-en-c

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_021-04 — Chaîne de caractères en C

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Chaîne de caractères en C » ? (Plusieurs réponses correctes.)

- **A ❌** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.
- **B ❌** Comparaisons.
- **C ✅** Toutes les suites de char ne sont pas nécessairement des chaînes valides.
- **D ✅** Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/22-chaine-de-caracteres-en-c

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_022-01 — Caractère nul

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";. » ? (Une seule réponse correcte.)

- **A ❌** Valgrind : « definitely lost » et les octets perdus
- **B ❌** Double free — ne pas libérer deux fois
- **C ✅** Caractère nul
- **D ❌** Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/23-caractere-nul

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_022-04 — Caractère nul

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Caractère nul » ? (Plusieurs réponses correctes.)

- **A ✅** \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.
- **B ❌** Dépôt du code et de son historique.
- **C ✅** Les fonctions sur les chaînes doivent pouvoir trouver le terminateur nul.
- **D ❌** Teste sa condition avant chaque itération.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/23-caractere-nul

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_023-01 — %s avec printf

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin. » ? (Une seule réponse correcte.)

- **A ❌** Callback — transmettre une fonction en paramètre
- **B ❌** memcpy() ou memmove() — zones qui se recouvrent
- **C ❌** Ownership — qui est responsable de free() ?
- **D ✅** %s avec printf

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/24-s-avec-printf

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_023-04 — %s avec printf

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « %s avec printf » ? (Plusieurs réponses correctes.)

- **A ✅** Une chaîne non terminée correctement peut provoquer un accès mémoire invalide.
- **B ❌** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.
- **C ✅** Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.
- **D ❌** Branche de développement / fusion.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/24-s-avec-printf

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_024-01 — Exercices d’observation

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse. » ? (Une seule réponse correcte.)

- **A ✅** Exercices d’observation
- **B ❌** qsort() — comparateur passé par pointeur de fonction
- **C ❌** char * — pointeur vers un caractère ou une chaîne
- **D ❌** Stack overflow — épuisement de la pile d'appels

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/25-exercices-d-observation

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_024-04 — Exercices d’observation

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Exercices d’observation » ? (Plusieurs réponses correctes.)

- **A ✅** Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse.
- **B ❌** État / préparation / enregistrement.
- **C ❌** Service d’hébergement et de collaboration pour des dépôts Git.
- **D ✅** Réponse : n vaut 8. Essaie ensuite d’expliquer pourquoi, plutôt que de retenir le chiffre.

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/25-exercices-d-observation

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_025-01 — Initialisation d'un tableau

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30}; » ? (Une seule réponse correcte.)

- **A ❌** Appeler un pointeur de fonction — f(x) ou (*f)(x)
- **B ✅** Initialisation d'un tableau
- **C ❌** memcpy() — copier des octets sans chevauchement
- **D ❌** & (opérateur d’adresse)

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/26-initialisation-d-un-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_025-04 — Initialisation d'un tableau

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Initialisation d'un tableau » ? (Plusieurs réponses correctes.)

- **A ✅** Un tableau existant ne se réaffecte pas avec l'opérateur = comme une variable scalaire.
- **B ❌** Point d’entrée d’un programme C classique.
- **C ❌** Instantané enregistré dans l’historique local.
- **D ✅** Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30};

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/26-initialisation-d-un-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_026-01 — Parcourir un tableau

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1. » ? (Une seule réponse correcte.)

- **A ❌** Raw pointer — pointeur brut en C
- **B ❌** typedef d'un pointeur de fonction — simplifier les signatures
- **C ✅** Parcourir un tableau
- **D ❌** Modifier une valeur par un pointeur

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_026-04 — Parcourir un tableau

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Parcourir un tableau » ? (Plusieurs réponses correctes.)

- **A ✅** Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1.
- **B ✅** Évite les indices négatifs et les accès au-delà de la dernière case.
- **C ❌** Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.
- **D ❌** Git ne peut pas résoudre automatiquement des changements concurrents.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_027-01 — Tableau à deux dimensions

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne. » ? (Une seule réponse correcte.)

- **A ✅** Tableau à deux dimensions
- **B ❌** Adresse mémoire
- **C ❌** Pointeur de fonction — déclarer une signature
- **D ❌** %p avec printf

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/28-tableau-a-deux-dimensions

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_027-04 — Tableau à deux dimensions

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tableau à deux dimensions » ? (Plusieurs réponses correctes.)

- **A ✅** int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.
- **B ❌** Copier un dépôt / historique / changer de branche.
- **C ✅** Le nombre de colonnes fait partie du type utilisé pour manipuler ce tableau.
- **D ❌** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/28-tableau-a-deux-dimensions

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_028-01 — Échanger deux caractères

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire. » ? (Une seule réponse correcte.)

- **A ❌** * dans une expression
- **B ❌** Passage d’arguments par valeur
- **C ❌** Tableau de pointeurs de fonctions — choisir une opération
- **D ✅** Échanger deux caractères

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/29-echanger-deux-caracteres

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_028-04 — Échanger deux caractères

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Échanger deux caractères » ? (Plusieurs réponses correctes.)

- **A ✅** Un échange simple est une brique utile pour manipuler ou inverser des chaînes.
- **B ❌** Compiler un fichier source et nommer l’exécutable.
- **C ✅** Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.
- **D ❌** Indique une absence de valeur de retour ou de paramètres selon le contexte.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/29-echanger-deux-caracteres

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_029-01 — Principe d'inversion d'une chaîne

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre. » ? (Une seule réponse correcte.)

- **A ❌** Pointeur (pointer)
- **B ❌** Type pointé
- **C ✅** Principe d'inversion d'une chaîne
- **D ❌** Indices de tableau

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/30-principe-d-inversion-d-une-chaine

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_029-04 — Principe d'inversion d'une chaîne

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Principe d'inversion d'une chaîne » ? (Plusieurs réponses correctes.)

- **A ❌** Entier décimal / caractère / réel avec six décimales.
- **B ✅** Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.
- **C ❌** Compile vers un fichier assembleur .s, sans assembler ni effectuer l’édition de liens.
- **D ✅** Cette fiche décrit une méthode de raisonnement, sans résoudre intégralement un exercice.

**Corrigé candidat :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/30-principe-d-inversion-d-une-chaine

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_030-01 — malloc — allocation dynamique

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue). » ? (Une seule réponse correcte.)

- **A ✅** malloc — allocation dynamique
- **B ❌** Tailles des pointeurs
- **C ❌** sizeof(tableau)
- **D ❌** * dans une déclaration

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_030-04 — malloc — allocation dynamique

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « malloc — allocation dynamique » ? (Plusieurs réponses correctes.)

- **A ❌** Définition nécessaire introuvable lors de l’édition de liens.
- **B ✅** malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue).
- **C ❌** puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.
- **D ✅** Vérifier p != NULL avant de le déréférencer. malloc ne met pas les octets à zéro ; chaque allocation réussie doit être libérée une fois quand elle n’est plus utile.

**Corrigé candidat :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_031-01 — free — libérer la mémoire

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL. » ? (Une seule réponse correcte.)

- **A ❌** Valeur de p, *p et &p
- **B ✅** free — libérer la mémoire
- **C ❌** Notation équivalente
- **D ❌** Tableau

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_031-04 — free — libérer la mémoire

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « free — libérer la mémoire » ? (Plusieurs réponses correctes.)

- **A ❌** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **B ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **C ✅** Ne jamais appeler free sur une variable locale ou une adresse non allouée dynamiquement ; éviter les doubles free et toute utilisation après free. La mise à NULL d’un pointeur ne corrige pas d’éventuels alias.
- **D ✅** free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_032-01 — Allocation automatique — variables locales

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free. » ? (Une seule réponse correcte.)

- **A ❌** %s avec printf
- **B ✅** Allocation automatique — variables locales
- **C ❌** sizeof
- **D ❌** Conversion tableau → pointeur

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/33-allocation-automatique-variables-locales

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_032-04 — Allocation automatique — variables locales

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Allocation automatique — variables locales » ? (Plusieurs réponses correctes.)

- **A ❌** Permet de choisir le nom du fichier de sortie, par exemple gcc main.c -o cisfun.
- **B ✅** Ne pas retourner l’adresse d’un tableau local pour l’utiliser après le retour de la fonction. Ne jamais appeler free sur une variable ou un tableau automatique.
- **C ✅** Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.
- **D ❌** Une fonction de type char peut renvoyer un caractère, par exemple return 'H';.

**Corrigé candidat :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/33-allocation-automatique-variables-locales

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_033-01 — Chaîne littérale et tableau de char

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable. » ? (Une seule réponse correcte.)

- **A ❌** Parcourir un tableau
- **B ❌** Arithmétique des pointeurs
- **C ❌** Passer une adresse à une fonction
- **D ✅** Chaîne littérale et tableau de char

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/34-chaine-litterale-et-tableau-de-char

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_033-04 — Chaîne littérale et tableau de char

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Chaîne littérale et tableau de char » ? (Plusieurs réponses correctes.)

- **A ❌** Dennis Ritchie a conçu le langage C aux Bell Labs au début des années 1970 ; il a aussi joué un rôle majeur dans le développement d’Unix.
- **B ❌** signed permet des valeurs négatives et positives ; unsigned ne représente que des valeurs non négatives.
- **C ✅** Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable.
- **D ✅** Ne pas écrire dans une chaîne littérale. const char *p protège contre cette modification ; char s[] crée un tableau modifiable distinct.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/34-chaine-litterale-et-tableau-de-char

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_034-01 — malloc : vérifier NULL

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé. » ? (Une seule réponse correcte.)

- **A ❌** Tableau ≠ pointeur
- **B ✅** malloc : vérifier NULL
- **C ❌** Caractère nul
- **D ❌** Principe d'inversion d'une chaîne

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/35-malloc-verifier-null

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_034-04 — malloc : vérifier NULL

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « malloc : vérifier NULL » ? (Plusieurs réponses correctes.)

- **A ❌** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.
- **B ✅** Toujours contrôler p == NULL avant de déréférencer p. N’utilise pas de boucle d’allocations géantes pour tester artificiellement un échec.
- **C ✅** Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.
- **D ❌** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.

**Corrigé candidat :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/35-malloc-verifier-null

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_035-01 — Fuite mémoire — allocation perdue

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire. » ? (Une seule réponse correcte.)

- **A ❌** Initialisation d'un tableau
- **B ✅** Fuite mémoire — allocation perdue
- **C ❌** Allocation automatique — variables locales
- **D ❌** &tableau

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/36-fuite-memoire-allocation-perdue

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_035-04 — Fuite mémoire — allocation perdue

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Fuite mémoire — allocation perdue » ? (Plusieurs réponses correctes.)

- **A ✅** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.
- **B ✅** Memory leak = fuite mémoire. Avec Valgrind, « definitely lost » indique un bloc inaccessible, « still reachable » un bloc encore pointé à la sortie. Le système récupère généralement la mémoire à la fin du processus, mais cela ne corrige pas une fuite pendant son fonctionnement.
- **C ❌** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.
- **D ❌** Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/36-fuite-memoire-allocation-perdue

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_036-01 — Valgrind — détecter les fuites

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code. » ? (Une seule réponse correcte.)

- **A ❌** Fuite mémoire — allocation perdue
- **B ❌** Chaîne de caractères en C
- **C ❌** Échanger deux caractères
- **D ✅** Valgrind — détecter les fuites

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/37-valgrind-detecter-les-fuites

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_036-04 — Valgrind — détecter les fuites

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Valgrind — détecter les fuites » ? (Plusieurs réponses correctes.)

- **A ❌** fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.
- **B ✅** Valgrind s’utilise dans le terminal sur un programme compilé, pas comme un #include C. « ERROR SUMMARY: 0 errors » seul ne suffit pas : consulter aussi les catégories de fuites. L’outil ne vérifie que les chemins réellement exécutés.
- **C ✅** Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code.
- **D ❌** Reste par 2 ; permet de tester la parité.

**Corrigé candidat :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/37-valgrind-detecter-les-fuites

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_037-01 — Chaînes littérales et .rodata (avancé)

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation. » ? (Une seule réponse correcte.)

- **A ✅** Chaînes littérales et .rodata (avancé)
- **B ❌** strlen, sizeof et terminateur nul
- **C ❌** Exercices d’observation
- **D ❌** free — libérer la mémoire

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/38-chaines-litterales-et-rodata-avance

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_037-04 — Chaînes littérales et .rodata (avancé)

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Chaînes littérales et .rodata (avancé) » ? (Plusieurs réponses correctes.)

- **A ❌** Conserve les deux derniers chiffres d’un entier positif.
- **B ✅** Notion avancée : .rodata est un détail courant de l’implémentation, pas une garantie universelle du langage C. Les optimisations peuvent modifier l’apparence des données dans l’exécutable.
- **C ❌** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.
- **D ✅** Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation.

**Corrigé candidat :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/38-chaines-litterales-et-rodata-avance

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_038-01 — malloc et sizeof : allouer le bon nombre d’octets

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits. » ? (Une seule réponse correcte.)

- **A ❌** malloc : vérifier NULL
- **B ❌** Pile et tas : durée de vie des allocations
- **C ❌** Tableau à deux dimensions
- **D ✅** malloc et sizeof : allouer le bon nombre d’octets

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/39-malloc-et-sizeof-allouer-le-bon-nombre-d-octets

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_038-04 — malloc et sizeof : allouer le bon nombre d’octets

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « malloc et sizeof : allouer le bon nombre d’octets » ? (Plusieurs réponses correctes.)

- **A ❌** Reste : 5.
- **B ✅** Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits.
- **C ✅** sizeof(int) indique la taille d’un int ; sizeof *p celle du type pointé. Le nombre 64 du matériel ne donne pas la taille d’un int. Si n est variable, vérifier également le risque de débordement de n * sizeof *p.
- **D ❌** Quotient entier tronqué vers zéro.

**Corrigé candidat :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/39-malloc-et-sizeof-allouer-le-bon-nombre-d-octets

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_039-01 — strlen, sizeof et terminateur nul

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'. » ? (Une seule réponse correcte.)

- **A ❌** realloc — redimensionner une allocation
- **B ❌** malloc — allocation dynamique
- **C ❌** Chaînes littérales et .rodata (avancé)
- **D ✅** strlen, sizeof et terminateur nul

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_039-04 — strlen, sizeof et terminateur nul

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strlen, sizeof et terminateur nul » ? (Plusieurs réponses correctes.)

- **A ❌** Utiliser l’ancienne valeur, puis retirer 1.
- **B ✅** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.
- **C ❌** Supprime le dernier chiffre d’un entier positif.
- **D ✅** Pour le littéral : sizeof("Best School") = 12, strlen("Best School") = 11. Pour un pointeur char *p, sizeof(p) ne mesure jamais la longueur de la chaîne. malloc(sizeof("Best School") + 1) réserve 13 octets : c’est suffisant, sans être nécessaire. strlen n'est sûr que pour une chaîne correctement terminée : il n'empêche pas un débordement lors de la saisie.

**Corrigé candidat :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_040-01 — strcpy : copier dans un espace existant

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place. » ? (Une seule réponse correcte.)

- **A ❌** strdup : copie allouée dynamiquement
- **B ✅** strcpy : copier dans un espace existant
- **C ❌** Chaîne littérale et tableau de char
- **D ❌** calloc() — allouer et initialiser à zéro

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/41-strcpy-copier-dans-un-espace-existant

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_040-04 — strcpy : copier dans un espace existant

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strcpy : copier dans un espace existant » ? (Plusieurs réponses correctes.)

- **A ✅** strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place.
- **B ❌** Reste : 2.
- **C ✅** strcpy ne réalise jamais malloc à ta place. Il faut prévoir strlen(src) + 1 cases char, y compris '\0', et éviter les zones qui se chevauchent.
- **D ❌** Affiche 87654321 si on affiche i dans le corps.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/41-strcpy-copier-dans-un-espace-existant

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_041-01 — strdup : copie allouée dynamiquement

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat. » ? (Une seule réponse correcte.)

- **A ❌** Pointeur non initialisé : comportement indéfini
- **B ❌** Valgrind — détecter les fuites
- **C ❌** Double free — ne pas libérer deux fois
- **D ✅** strdup : copie allouée dynamiquement

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/42-strdup-copie-allouee-dynamiquement

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_041-04 — strdup : copie allouée dynamiquement

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strdup : copie allouée dynamiquement » ? (Plusieurs réponses correctes.)

- **A ✅** strcpy copie vers une zone existante ; strdup crée une nouvelle zone allouée. Sous GNU89, strdup est une fonction POSIX, pas une fonction du C89 standard.
- **B ❌** Ajouter 1, puis utiliser la nouvelle valeur.
- **C ✅** strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat.
- **D ❌** Tester de petits cas et lire les avertissements du compilateur aide à comprendre une erreur sans recopier une solution.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/42-strdup-copie-allouee-dynamiquement

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_042-01 — Pile et tas : durée de vie des allocations

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique. » ? (Une seule réponse correcte.)

- **A ❌** strlen, sizeof et terminateur nul
- **B ❌** strncpy() — copie limitée et terminaison
- **C ❌** memcpy() ou memmove() — zones qui se recouvrent
- **D ✅** Pile et tas : durée de vie des allocations

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/43-pile-et-tas-duree-de-vie-des-allocations · https://man7.org/linux/man-pages/man3/malloc.3.html · https://man7.org/linux/man-pages/man2/getrlimit.2.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_042-04 — Pile et tas : durée de vie des allocations

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Pile et tas : durée de vie des allocations » ? (Plusieurs réponses correctes.)

- **A ❌** Utiliser des noms compréhensibles, une indentation cohérente et des commentaires utiles plutôt que paraphraser chaque instruction.
- **B ❌** Affiche 876543210 si on affiche i dans le corps.
- **C ✅** Pile/stack : objets automatiques et appels, dans les implémentations usuelles. Tas/heap : blocs obtenus via malloc/calloc/realloc, libérés explicitement. Durée de vie statique : objets static. Ne jamais faire free(&local) ou free sur un tableau static.
- **D ✅** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/43-pile-et-tas-duree-de-vie-des-allocations · https://man7.org/linux/man-pages/man3/malloc.3.html · https://man7.org/linux/man-pages/man2/getrlimit.2.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_043-01 — free : quelles adresses peut-on libérer ?

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « free accepte NULL ou un pointeur valide obtenu par une allocation dynamique compatible ; ni un littéral ni un tableau local ne se libèrent avec free. » ? (Une seule réponse correcte.)

- **A ❌** Pile et tas : durée de vie des allocations
- **B ❌** Use-after-free — réutiliser un bloc libéré
- **C ❌** Stack overflow — épuisement de la pile d'appels
- **D ✅** free : quelles adresses peut-on libérer ?

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/44-free-quelles-adresses-peut-on-liberer

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_043-04 — free : quelles adresses peut-on libérer ?

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « free : quelles adresses peut-on libérer ? » ? (Plusieurs réponses correctes.)

- **A ✅** free accepte NULL ou un pointeur valide obtenu par une allocation dynamique compatible ; ni un littéral ni un tableau local ne se libèrent avec free.
- **B ❌** Une fonction C doit posséder une signature adaptée : type de retour, nom, liste de paramètres.
- **C ❌** Le code de départ regroupe les fichiers fournis pour un exercice ; son audit consiste à vérifier les hypothèses, les entrées et les responsabilités mémoire avant d'émettre un diagnostic.
- **D ✅** Ne libère jamais un littéral, l’adresse d’un objet automatique ou le même bloc deux fois. free(NULL) est autorisé, mais ne rend pas valide un ancien pointeur libéré.

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/44-free-quelles-adresses-peut-on-liberer

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_044-01 — Pointeur non initialisé : comportement indéfini

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault. » ? (Une seule réponse correcte.)

- **A ❌** Segfault — faute de segmentation
- **B ✅** Pointeur non initialisé : comportement indéfini
- **C ❌** Valgrind Memcheck — comprendre les alertes
- **D ❌** memcpy() — copier des octets sans chevauchement

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/45-pointeur-non-initialise-comportement-indefini

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_044-04 — Pointeur non initialisé : comportement indéfini

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Pointeur non initialisé : comportement indéfini » ? (Plusieurs réponses correctes.)

- **A ✅** Un segfault est une conséquence fréquente, jamais une garantie du langage. Un programme qui compile peut contenir un comportement indéfini à l’exécution.
- **B ✅** Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.
- **C ❌** Si p est une variable de type struct point (l’objet lui-même), p.x lit ou modifie son membre x. Le point s’emploie sur l’objet, pas directement sur son adresse.
- **D ❌** Le préprocesseur prépare le texte, le compilateur produit du code, l’assembleur génère des objets, et l’éditeur de liens crée l’exécutable.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/45-pointeur-non-initialise-comportement-indefini

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_045-01 — realloc — redimensionner une allocation

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec. » ? (Une seule réponse correcte.)

- **A ❌** Buffer overflow — dépassement de tampon
- **B ✅** realloc — redimensionner une allocation
- **C ❌** Tampon fixe, statique et dynamique — emplacement et durée de vie
- **D ❌** Raw pointer — pointeur brut en C

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_045-04 — realloc — redimensionner une allocation

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « realloc — redimensionner une allocation » ? (Plusieurs réponses correctes.)

- **A ❌** Un invariant est une condition que le programme doit préserver à des moments définis ; en sécurité mémoire, il exprime notamment les bornes et la validité des pointeurs.
- **B ❌** Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.
- **C ✅** Le piège classique : p = realloc(p, taille); peut faire perdre le bloc initial sur échec. Avec tmp, l’ancien pointeur reste disponible. Ne pas utiliser l’ancienne adresse après une réussite, même si la valeur numérique semble identique.
- **D ✅** realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_046-01 — Segfault — faute de segmentation

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal. » ? (Une seule réponse correcte.)

- **A ❌** Débordement du calcul de taille avant malloc
- **B ✅** Segfault — faute de segmentation
- **C ❌** strlen sans terminateur nul — lecture hors limites
- **D ❌** Pointeur de fonction — déclarer une signature

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/47-segfault-faute-de-segmentation

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_046-04 — Segfault — faute de segmentation

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Segfault — faute de segmentation » ? (Plusieurs réponses correctes.)

- **A ✅** Un segfault est un symptôme d’accès invalide détecté pendant l’exécution, pas une garantie systématique du C. Les outils de diagnostic aident, mais un test qui réussit ne prouve pas l’absence de comportement indéfini.
- **B ❌** Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres.
- **C ❌** « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type.
- **D ✅** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/47-segfault-faute-de-segmentation

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_047-01 — strncpy() — copie limitée et terminaison

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide. » ? (Une seule réponse correcte.)

- **A ❌** Tableau de pointeurs de fonctions — choisir une opération
- **B ❌** Dangling pointer — pointeur vers un objet qui n'existe plus
- **C ❌** Dépassement de tampon sur la pile — erreur avant malloc
- **D ✅** strncpy() — copie limitée et terminaison

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/48-strncpy-copie-limitee-et-terminaison · https://man7.org/linux/man-pages/man3/strncpy.3.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_047-04 — strncpy() — copie limitée et terminaison

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strncpy() — copie limitée et terminaison » ? (Plusieurs réponses correctes.)

- **A ✅** strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide.
- **B ❌** Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};.
- **C ✅** `strncpy(dest, src, n)` copie au plus `n` octets, sans garantir un terminateur `\0` si la source occupe au moins `n` octets. Vérifier la capacité de la destination et assurer la terminaison si une chaîne C est attendue.
- **D ❌** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/48-strncpy-copie-limitee-et-terminaison · https://man7.org/linux/man-pages/man3/strncpy.3.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_048-01 — calloc() — allouer et initialiser à zéro

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free. » ? (Une seule réponse correcte.)

- **A ❌** Pointeur (pointer)
- **B ❌** Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites
- **C ❌** Valgrind : « definitely lost » et les octets perdus
- **D ✅** calloc() — allouer et initialiser à zéro

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/49-calloc-allouer-et-initialiser-a-zero · https://man7.org/linux/man-pages/man3/malloc.3.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_048-04 — calloc() — allouer et initialiser à zéro

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « calloc() — allouer et initialiser à zéro » ? (Plusieurs réponses correctes.)

- **A ❌** Un membre peut être lui-même une struct : p.position.x traverse deux niveaux.
- **B ❌** sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.
- **C ✅** calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free.
- **D ✅** calloc remet les octets du bloc à zéro, mais n'empêche ni un accès hors limites ni l'utilisation du bloc après free. Le résultat peut être NULL si l'allocation échoue.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/49-calloc-allouer-et-initialiser-a-zero · https://man7.org/linux/man-pages/man3/malloc.3.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_049-01 — Buffer overflow — dépassement de tampon

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier. » ? (Une seule réponse correcte.)

- **A ✅** Buffer overflow — dépassement de tampon
- **B ❌** Ownership — qui est responsable de free() ?
- **C ❌** * dans une déclaration
- **D ❌** Callback — transmettre une fonction en paramètre

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/50-buffer-overflow-depassement-de-tampon · https://owasp.org/www-community/attacks/Buffer_overflow_attack · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87151983

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_049-04 — Buffer overflow — dépassement de tampon

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Buffer overflow — dépassement de tampon » ? (Plusieurs réponses correctes.)

- **A ❌** La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.
- **B ✅** Pour une chaîne, le tableau doit accueillir strlen(source) + 1 octets. Un programme qui ne plante pas n'est pas forcément correct : une écriture hors limites est déjà un bug.
- **C ❌** En passant struct point *p à une fonction, celle-ci peut modifier l’objet de l’appelant via p->x.
- **D ✅** Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier.

**Corrigé candidat :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/50-buffer-overflow-depassement-de-tampon · https://owasp.org/www-community/attacks/Buffer_overflow_attack · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87151983

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_050-01 — Use-after-free — réutiliser un bloc libéré

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini. » ? (Une seule réponse correcte.)

- **A ✅** Use-after-free — réutiliser un bloc libéré
- **B ❌** char * — pointeur vers un caractère ou une chaîne
- **C ❌** Valeur de p, *p et &p
- **D ❌** qsort() — comparateur passé par pointeur de fonction

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/51-use-after-free-reutiliser-un-bloc-libere · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152153

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_050-04 — Use-after-free — réutiliser un bloc libéré

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Use-after-free — réutiliser un bloc libéré » ? (Plusieurs réponses correctes.)

- **A ✅** Après free, aucun alias vers le bloc ne doit servir à accéder aux anciennes données. Un test sans crash ne prouve pas que l'accès serait autorisé.
- **B ❌** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.
- **C ✅** Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini.
- **D ❌** typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/51-use-after-free-reutiliser-un-bloc-libere · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152153

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_051-01 — Double free — ne pas libérer deux fois

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet. » ? (Une seule réponse correcte.)

- **A ❌** & (opérateur d’adresse)
- **B ❌** Appeler un pointeur de fonction — f(x) ou (*f)(x)
- **C ❌** sizeof
- **D ✅** Double free — ne pas libérer deux fois

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/52-double-free-ne-pas-liberer-deux-fois · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_051-04 — Double free — ne pas libérer deux fois

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Double free — ne pas libérer deux fois » ? (Plusieurs réponses correctes.)

- **A ❌** Noyau du système d’exploitation ; interface entre logiciels et ressources matérielles.
- **B ✅** Ne pas utiliser free deux fois sur une même allocation. L'exemple appelle free sur p puis sur NULL : ce n'est pas une double libération du bloc. Mettre p à NULL ne sécurise pas les alias éventuels. Un double free peut venir d'une ownership ambiguë ou de deux chemins de nettoyage ; chercher les chemins réels avant de conclure.
- **C ✅** Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.
- **D ❌** Une struct peut contenir un pointeur vers son propre type, par exemple struct noeud *suivant.

**Corrigé candidat :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/52-double-free-ne-pas-liberer-deux-fois · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_052-01 — Débordement du calcul de taille avant malloc

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite. » ? (Une seule réponse correcte.)

- **A ❌** Modifier une valeur par un pointeur
- **B ❌** typedef d'un pointeur de fonction — simplifier les signatures
- **C ✅** Débordement du calcul de taille avant malloc
- **D ❌** Passer une adresse à une fonction

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/53-debordement-du-calcul-de-taille-avant-malloc · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152128

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_052-04 — Débordement du calcul de taille avant malloc

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Débordement du calcul de taille avant malloc » ? (Plusieurs réponses correctes.)

- **A ✅** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.
- **B ✅** Ne pas multiplier deux tailles non fiables avant d'avoir vérifié le risque de dépassement. malloc vérifie la demande reçue, mais ne peut pas corriger un calcul de taille qui a déjà débordé.
- **C ❌** Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre.
- **D ❌** Interface graphique / interface en ligne de commande.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/53-debordement-du-calcul-de-taille-avant-malloc · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152128

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_053-01 — Valgrind Memcheck — comprendre les alertes

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites. » ? (Une seule réponse correcte.)

- **A ❌** Adresse mémoire
- **B ❌** Tableau ≠ pointeur
- **C ❌** %p avec printf
- **D ✅** Valgrind Memcheck — comprendre les alertes

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/54-valgrind-memcheck-comprendre-les-alertes · https://valgrind.org/docs/manual/mc-manual.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_053-04 — Valgrind Memcheck — comprendre les alertes

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Valgrind Memcheck — comprendre les alertes » ? (Plusieurs réponses correctes.)

- **A ❌** Gère les ressources, les processus, la mémoire, les fichiers et les périphériques.
- **B ❌** Shell courant sur Linux.
- **C ✅** Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.
- **D ✅** La première erreur affichée peut provoquer les suivantes. Consulter la pile des appels, les lignes indiquées par -g et le contexte des allocations/libérations. Un « 0 errors » sur un test n'est pas une preuve générale d'absence de bugs. Exemple : « definitely lost: 32 bytes in 1 blocks » = 1 bloc de 32 octets définitivement perdu. Ces libellés en majuscules sont des catégories descriptives, pas nécessairement des messages littéraux de Memcheck.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/54-valgrind-memcheck-comprendre-les-alertes · https://valgrind.org/docs/manual/mc-manual.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_054-01 — memcpy() ou memmove() — zones qui se recouvrent

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher. » ? (Une seule réponse correcte.)

- **A ✅** memcpy() ou memmove() — zones qui se recouvrent
- **B ❌** Passage d’arguments par valeur
- **C ❌** * dans une expression
- **D ❌** &tableau

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/55-memcpy-ou-memmove-zones-qui-se-recouvrent · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_054-04 — memcpy() ou memmove() — zones qui se recouvrent

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « memcpy() ou memmove() — zones qui se recouvrent » ? (Plusieurs réponses correctes.)

- **A ❌** Sous-système Windows pour Linux : environnement Linux utilisable sur Windows.
- **B ✅** memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher.
- **C ❌** Dossier personnel de l’utilisateur.
- **D ✅** memcpy sur des plages qui se chevauchent a un comportement indéfini ; memmove est prévue pour ce cas. Vérifier la capacité de destination et compter les octets copiés, y compris '\0' pour une chaîne.

**Corrigé candidat :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/55-memcpy-ou-memmove-zones-qui-se-recouvrent · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_055-01 — Dépassement de tampon sur la pile — erreur avant malloc

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur. » ? (Une seule réponse correcte.)

- **A ✅** Dépassement de tampon sur la pile — erreur avant malloc
- **B ❌** Type pointé
- **C ❌** Indices de tableau
- **D ❌** Chaîne de caractères en C

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/56-depassement-de-tampon-sur-la-pile-erreur-avant-malloc · https://community.owasp.org/vulnerabilities/Buffer_Overflow · https://man7.org/linux/man-pages/man3/fgets.3.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_055-04 — Dépassement de tampon sur la pile — erreur avant malloc

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Dépassement de tampon sur la pile — erreur avant malloc » ? (Plusieurs réponses correctes.)

- **A ❌** Dépend du répertoire actuel.
- **B ✅** Si une saisie déborde un tampon pendant sa lecture, la mémoire peut être corrompue avant toute copie ultérieure. Vérifier la capacité du tampon pendant la lecture et rejeter une ligne tronquée si l'entrée complète est nécessaire.
- **C ❌** Programme qui interprète les commandes et lance les autres programmes.
- **D ✅** Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.

**Corrigé candidat :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/56-depassement-de-tampon-sur-la-pile-erreur-avant-malloc · https://community.owasp.org/vulnerabilities/Buffer_Overflow · https://man7.org/linux/man-pages/man3/fgets.3.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_056-01 — Tampon fixe, statique et dynamique — emplacement et durée de vie

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes. » ? (Une seule réponse correcte.)

- **A ❌** Tailles des pointeurs
- **B ❌** sizeof(tableau)
- **C ❌** Exercices d’observation
- **D ✅** Tampon fixe, statique et dynamique — emplacement et durée de vie

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/57-tampon-fixe-statique-et-dynamique-emplacement-et-duree-de-vie · https://man7.org/linux/man-pages/man3/malloc.3.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_056-04 — Tampon fixe, statique et dynamique — emplacement et durée de vie

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tampon fixe, statique et dynamique — emplacement et durée de vie » ? (Plusieurs réponses correctes.)

- **A ✅** Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.
- **B ✅** Taille et durée de vie ne sont pas synonymes : char local[8] est fixe et automatique ; static char stable[8] est fixe et de durée de vie statique ; malloc(8) crée un bloc dynamique de huit octets. Ne jamais appeler free sur local ou stable.
- **C ❌** Début de l’arborescence Linux.
- **D ❌** Copier / déplacer-renommer / supprimer.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/57-tampon-fixe-statique-et-dynamique-emplacement-et-duree-de-vie · https://man7.org/linux/man-pages/man3/malloc.3.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_057-01 — Stack overflow — épuisement de la pile d'appels

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux. » ? (Une seule réponse correcte.)

- **A ✅** Stack overflow — épuisement de la pile d'appels
- **B ❌** Tableau
- **C ❌** Notation équivalente
- **D ❌** Tableau à deux dimensions

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/58-stack-overflow-epuisement-de-la-pile-d-appels · https://man7.org/linux/man-pages/man2/getrlimit.2.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_057-04 — Stack overflow — épuisement de la pile d'appels

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Stack overflow — épuisement de la pile d'appels » ? (Plusieurs réponses correctes.)

- **A ✅** Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux.
- **B ❌** Changer les permissions / propriétaire / utiliser des privilèges élevés.
- **C ✅** Une récursion sans cas d'arrêt peut épuiser la pile ; une grande variable locale peut également poser problème. Stack overflow et stack buffer overflow ne désignent pas la même erreur.
- **D ❌** Part de /, indépendamment du répertoire actuel.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/58-stack-overflow-epuisement-de-la-pile-d-appels · https://man7.org/linux/man-pages/man2/getrlimit.2.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_058-01 — Valgrind : « definitely lost » et les octets perdus

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine. » ? (Une seule réponse correcte.)

- **A ✅** Valgrind : « definitely lost » et les octets perdus
- **B ❌** %s avec printf
- **C ❌** malloc — allocation dynamique
- **D ❌** Conversion tableau → pointeur

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/59-valgrind-definitely-lost-et-les-octets-perdus · https://valgrind.org/docs/manual/mc-manual.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_058-04 — Valgrind : « definitely lost » et les octets perdus

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Valgrind : « definitely lost » et les octets perdus » ? (Plusieurs réponses correctes.)

- **A ❌** Rediriger les erreurs / prendre un fichier comme entrée.
- **B ✅** 32 bytes = le volume perdu, 1 blocks = le nombre de blocs perdus. « Definitely lost » signifie fuite certaine : il faut corriger la gestion du pointeur ou l'absence de free. L'exemple fourni est volontairement sans fuite.
- **C ❌** Créer un dossier / créer un fichier vide ou actualiser sa date.
- **D ✅** « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine.

**Corrigé candidat :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/59-valgrind-definitely-lost-et-les-octets-perdus · https://valgrind.org/docs/manual/mc-manual.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_059-01 — strlen sans terminateur nul — lecture hors limites

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone. » ? (Une seule réponse correcte.)

- **A ✅** strlen sans terminateur nul — lecture hors limites
- **B ❌** Arithmétique des pointeurs
- **C ❌** Parcourir un tableau
- **D ❌** Chaîne littérale et tableau de char

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/60-strlen-sans-terminateur-nul-lecture-hors-limites · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_059-04 — strlen sans terminateur nul — lecture hors limites

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strlen sans terminateur nul — lecture hors limites » ? (Plusieurs réponses correctes.)

- **A ✅** strlen n'est pas un contrôle de taille pour une mémoire arbitraire. Vérifier l'existence de '\0' dans les limites connues avant de traiter un tampon comme une chaîne. Ne pas confondre strlen et sizeof.
- **B ❌** r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).
- **C ✅** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.
- **D ❌** Rechercher / compter les lignes / transformer des caractères.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/60-strlen-sans-terminateur-nul-lecture-hors-limites · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_060-01 — memcpy() — copier des octets sans chevauchement

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement. » ? (Une seule réponse correcte.)

- **A ❌** Caractère nul
- **B ❌** Principe d'inversion d'une chaîne
- **C ❌** Valgrind — détecter les fuites
- **D ✅** memcpy() — copier des octets sans chevauchement

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/61-memcpy-copier-des-octets-sans-chevauchement · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_060-04 — memcpy() — copier des octets sans chevauchement

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « memcpy() — copier des octets sans chevauchement » ? (Plusieurs réponses correctes.)

- **A ✅** memcpy ne garantit ni le terminateur '\0', ni la capacité, ni l'absence de chevauchement : le développeur doit vérifier ces conditions avant l'appel. Pour déplacer des octets avec recouvrement, utiliser memmove.
- **B ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.
- **C ❌** Écraser un fichier avec la sortie / ajouter à la fin.
- **D ✅** memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement.

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/61-memcpy-copier-des-octets-sans-chevauchement · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_061-01 — Ownership — qui est responsable de free() ?

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité. » ? (Une seule réponse correcte.)

- **A ❌** strlen, sizeof et terminateur nul
- **B ❌** Initialisation d'un tableau
- **C ❌** Allocation automatique — variables locales
- **D ✅** Ownership — qui est responsable de free() ?

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/62-ownership-qui-est-responsable-de-free · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_061-04 — Ownership — qui est responsable de free() ?

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Ownership — qui est responsable de free() ? » ? (Plusieurs réponses correctes.)

- **A ❌** Variable définie dans le Shell en cours, non nécessairement exportée.
- **B ✅** L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité.
- **C ✅** VRAI : copier un pointeur dans plusieurs variables crée un risque de confusion de propriété. FAUX : cela transfère automatiquement la propriété ou duplique l'allocation. Seul le responsable désigné libère le bloc, une fois.
- **D ❌** Exécuter la commande suivante en cas de succès / en cas d’échec.

**Corrigé candidat :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/62-ownership-qui-est-responsable-de-free · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_062-01 — Dangling pointer — pointeur vers un objet qui n'existe plus

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale. » ? (Une seule réponse correcte.)

- **A ❌** Échanger deux caractères
- **B ❌** Pile et tas : durée de vie des allocations
- **C ❌** Fuite mémoire — allocation perdue
- **D ✅** Dangling pointer — pointeur vers un objet qui n'existe plus

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/63-dangling-pointer-pointeur-vers-un-objet-qui-n-existe-plus · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_062-04 — Dangling pointer — pointeur vers un objet qui n'existe plus

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Dangling pointer — pointeur vers un objet qui n'existe plus » ? (Plusieurs réponses correctes.)

- **A ❌** Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour.
- **B ❌** Exporter une variable / supprimer une variable ou fonction.
- **C ✅** Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.
- **D ✅** VRAI : un pointeur vers un bloc libéré ne permet plus d'accéder à ce bloc, immédiatement après free. FAUX : p = NULL protège automatiquement les autres pointeurs qui désignent l'ancien bloc. Un pointeur n'est pas forcément valide jusqu'à la fin du programme.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/63-dangling-pointer-pointeur-vers-un-objet-qui-n-existe-plus · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_063-01 — Raw pointer — pointeur brut en C

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété. » ? (Une seule réponse correcte.)

- **A ❌** malloc et sizeof : allouer le bon nombre d’octets
- **B ✅** Raw pointer — pointeur brut en C
- **C ❌** realloc — redimensionner une allocation
- **D ❌** free — libérer la mémoire

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/64-raw-pointer-pointeur-brut-en-c · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_063-04 — Raw pointer — pointeur brut en C

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Raw pointer — pointeur brut en C » ? (Plusieurs réponses correctes.)

- **A ❌** Exécuter un script dans le Shell courant.
- **B ✅** Un pointeur de type int * est une adresse typée, pas une preuve que le bloc est accessible, ni une indication de propriété. Le terme raw pointer ne désigne pas une autre syntaxe du C.
- **C ✅** Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.
- **D ❌** BEST=School : pas d’espaces autour du =.

**Corrigé candidat :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/64-raw-pointer-pointeur-brut-en-c · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_064-01 — char * — pointeur vers un caractère ou une chaîne

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur. » ? (Une seule réponse correcte.)

- **A ❌** calloc() — allouer et initialiser à zéro
- **B ❌** strdup : copie allouée dynamiquement
- **C ❌** malloc : vérifier NULL
- **D ✅** char * — pointeur vers un caractère ou une chaîne

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/65-char-pointeur-vers-un-caractere-ou-une-chaine · https://man7.org/linux/man-pages/man3/strlen.3.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_064-04 — char * — pointeur vers un caractère ou une chaîne

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « char * — pointeur vers un caractère ou une chaîne » ? (Plusieurs réponses correctes.)

- **A ❌** Variable exportée et transmise aux processus enfants.
- **B ✅** char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur.
- **C ❌** Substitution de commande : récupérer sa sortie.
- **D ✅** char * désigne un pointeur, char tableau[8] un tableau. sizeof(p) mesure le pointeur, et sizeof(tableau) mesure le tableau lorsqu'il est encore dans sa portée comme tableau. Un texte littéral est à traiter comme non modifiable.

**Corrigé candidat :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/65-char-pointeur-vers-un-caractere-ou-une-chaine · https://man7.org/linux/man-pages/man3/strlen.3.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_065-01 — Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind. » ? (Une seule réponse correcte.)

- **A ❌** Double free — ne pas libérer deux fois
- **B ❌** Pointeur non initialisé : comportement indéfini
- **C ❌** Chaînes littérales et .rodata (avancé)
- **D ✅** Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/66-diagnostics-memoire-invalid-write-uninitialized-value-et-fuites · https://valgrind.org/docs/manual/mc-manual.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_065-04 — Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites » ? (Plusieurs réponses correctes.)

- **A ✅** INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.
- **B ❌** Créer / retirer un raccourci de commande.
- **C ✅** Une fuite indirecte n'est pas la même chose qu'une fuite certaine directe ; un use-after-free peut apparaître comme un Invalid read/write. Les labels INVALID_WRITE, UNINITIALIZED_VALUE, etc. ne sont pas tous des messages émis mot pour mot par Valgrind.
- **D ❌** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/66-diagnostics-memoire-invalid-write-uninitialized-value-et-fuites · https://valgrind.org/docs/manual/mc-manual.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_066-01 — Pointeur de fonction — déclarer une signature

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *. » ? (Une seule réponse correcte.)

- **A ❌** strcpy : copier dans un espace existant
- **B ❌** memcpy() ou memmove() — zones qui se recouvrent
- **C ✅** Pointeur de fonction — déclarer une signature
- **D ❌** strncpy() — copie limitée et terminaison

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/67-pointeur-de-fonction-declarer-une-signature · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_066-04 — Pointeur de fonction — déclarer une signature

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Pointeur de fonction — déclarer une signature » ? (Plusieurs réponses correctes.)

- **A ❌** Comparaisons.
- **B ❌** Lire la valeur / délimiter explicitement le nom.
- **C ✅** Bien lire les parenthèses : int (*f)(int) est un pointeur de fonction ; int *f(int) est une fonction renvoyant int *. Ne pas confondre avec int *.
- **D ✅** int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/67-pointeur-de-fonction-declarer-une-signature · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_067-01 — Appeler un pointeur de fonction — f(x) ou (*f)(x)

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Pour un pointeur de fonction valide f, f(5) et (*f)(5) appellent la même fonction ; vérifier NULL avant l'appel. » ? (Une seule réponse correcte.)

- **A ❌** free : quelles adresses peut-on libérer ?
- **B ✅** Appeler un pointeur de fonction — f(x) ou (*f)(x)
- **C ❌** Stack overflow — épuisement de la pile d'appels
- **D ❌** Use-after-free — réutiliser un bloc libéré

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/68-appeler-un-pointeur-de-fonction-f-x-ou-f-x · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_067-04 — Appeler un pointeur de fonction — f(x) ou (*f)(x)

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Appeler un pointeur de fonction — f(x) ou (*f)(x) » ? (Plusieurs réponses correctes.)

- **A ✅** Pour un pointeur de fonction valide f, f(5) et (*f)(5) appellent la même fonction ; vérifier NULL avant l'appel.
- **B ❌** Code retour / premier argument / nombre d’arguments positionnels.
- **C ✅** Ne jamais appeler un pointeur NULL ou de signature incompatible. L'indirection explicite (*f)(x) et la forme directe f(x) sont équivalentes.
- **D ❌** Teste sa condition avant chaque itération.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/68-appeler-un-pointeur-de-fonction-f-x-ou-f-x · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_068-01 — Callback — transmettre une fonction en paramètre

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu. » ? (Une seule réponse correcte.)

- **A ❌** Segfault — faute de segmentation
- **B ✅** Callback — transmettre une fonction en paramètre
- **C ❌** memcpy() — copier des octets sans chevauchement
- **D ❌** Valgrind Memcheck — comprendre les alertes

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/69-callback-transmettre-une-fonction-en-parametre · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://web.stanford.edu/class/archive/cs/cs107/cs107.1214/lab4/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/ · https://boredzo.org/pointers/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_068-04 — Callback — transmettre une fonction en paramètre

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Callback — transmettre une fonction en paramètre » ? (Plusieurs réponses correctes.)

- **A ✅** Un callback n'est pas forcément asynchrone : appliquer appelle ici directement afficher_double. La signature du paramètre doit correspondre à celle de la fonction.
- **B ✅** Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.
- **C ❌** Égalité / différence. Attention à ne pas confondre = et ==.
- **D ❌** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/69-callback-transmettre-une-fonction-en-parametre · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://web.stanford.edu/class/archive/cs/cs107/cs107.1214/lab4/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/ · https://boredzo.org/pointers/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_069-01 — Tableau de pointeurs de fonctions — choisir une opération

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if. » ? (Une seule réponse correcte.)

- **A ❌** Tampon fixe, statique et dynamique — emplacement et durée de vie
- **B ✅** Tableau de pointeurs de fonctions — choisir une opération
- **C ❌** Raw pointer — pointeur brut en C
- **D ❌** Buffer overflow — dépassement de tampon

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/70-tableau-de-pointeurs-de-fonctions-choisir-une-operation · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_069-04 — Tableau de pointeurs de fonctions — choisir une opération

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tableau de pointeurs de fonctions — choisir une opération » ? (Plusieurs réponses correctes.)

- **A ✅** operations[index] est un pointeur de fonction, pas le résultat d'une fonction. Toujours valider l'indice et la non-nullité avant l'appel.
- **B ❌** Initialisation, test, mise à jour ; forme compacte de boucle.
- **C ✅** Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if.
- **D ❌** Service d’hébergement et de collaboration pour des dépôts Git.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/70-tableau-de-pointeurs-de-fonctions-choisir-une-operation · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_070-01 — typedef d'un pointeur de fonction — simplifier les signatures

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction. » ? (Une seule réponse correcte.)

- **A ❌** Pointeur de fonction — déclarer une signature
- **B ✅** typedef d'un pointeur de fonction — simplifier les signatures
- **C ❌** strlen sans terminateur nul — lecture hors limites
- **D ❌** Débordement du calcul de taille avant malloc

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/71-typedef-d-un-pointeur-de-fonction-simplifier-les-signatures · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://boredzo.org/pointers/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_070-04 — typedef d'un pointeur de fonction — simplifier les signatures

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « typedef d'un pointeur de fonction — simplifier les signatures » ? (Plusieurs réponses correctes.)

- **A ✅** typedef définit un alias de type, pas une fonction ni une allocation. La signature doit rester compatible et les pointeurs peuvent valoir NULL si le contrat l'autorise.
- **B ✅** typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction.
- **C ❌** Un passage dans une boucle.
- **D ❌** Instantané enregistré dans l’historique local.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/71-typedef-d-un-pointeur-de-fonction-simplifier-les-signatures · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://boredzo.org/pointers/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_071-01 — qsort() — comparateur passé par pointeur de fonction

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive. » ? (Une seule réponse correcte.)

- **A ✅** qsort() — comparateur passé par pointeur de fonction
- **B ❌** Dépassement de tampon sur la pile — erreur avant malloc
- **C ❌** Tableau de pointeurs de fonctions — choisir une opération
- **D ❌** Dangling pointer — pointeur vers un objet qui n'existe plus

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/72-qsort-comparateur-passe-par-pointeur-de-fonction · https://man7.org/linux/man-pages/man3/qsort.3.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_071-04 — qsort() — comparateur passé par pointeur de fonction

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « qsort() — comparateur passé par pointeur de fonction » ? (Plusieurs réponses correctes.)

- **A ✅** qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.
- **B ❌** Logiciel de gestion de versions distribué.
- **C ❌** Git ne peut pas résoudre automatiquement des changements concurrents.
- **D ✅** Le comparateur de qsort reçoit des pointeurs vers des éléments, pas les éléments eux-mêmes. Éviter return a-b si a et b sont des int susceptibles de déborder.

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/72-qsort-comparateur-passe-par-pointeur-de-fonction · https://man7.org/linux/man-pages/man3/qsort.3.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_072-01 — main(int argc, char *argv[]) — recevoir des arguments

**Une seule bonne réponse**

Quelle définition de `main` permet de recevoir des arguments transmis au lancement d'un programme C hébergé ? (Une seule réponse correcte.)

- **A ✅** `int main(int argc, char *argv[])`
- **B ❌** `int main(char *argv)`
- **C ❌** `void main(int argc)`
- **D ❌** `int main(int *argc, char *argv[])`

**Corrigé candidat :** A. Le programme reçoit un entier argc et une suite de pointeurs vers des chaînes via argv. Les autres propositions ne sont pas les formes standards attendues de main.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/73-main-int-argc-char-argv-recevoir-des-arguments · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_072-02 — main(int argc, char *argv[]) — recevoir des arguments

**Une seule bonne réponse**

Sous Linux, pour la commande `./outil bonjour "deux mots"`, quelle valeur de argc reçoit normalement main ? (Une seule réponse correcte.)

- **A ❌** 1
- **B ❌** 2
- **C ✅** 3
- **D ❌** 4

**Corrigé candidat :** C. L'invocation compte comme argv[0], bonjour comme argv[1] et deux mots comme argv[2] : trois éléments.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/73-main-int-argc-char-argv-recevoir-des-arguments · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_072-03 — main(int argc, char *argv[]) — recevoir des arguments

**Plusieurs bonnes réponses**

Quelles affirmations à propos des arguments de `main` sont correctes ? (Plusieurs réponses correctes.)

- **A ❌** Les arguments sont lus exclusivement par scanf.
- **B ✅** Les arguments sont transmis lors du lancement du programme.
- **C ❌** Le C force chaque argument à être un entier.
- **D ✅** Un shell peut grouper deux mots entre guillemets en un seul argument.

**Corrigé candidat :** B, D. Les arguments sont disponibles avant toute lecture sur l'entrée standard ; le shell peut regrouper les mots. En C, argv fournit des chaînes, pas directement des entiers.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/73-main-int-argc-char-argv-recevoir-des-arguments · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_072-04 — main(int argc, char *argv[]) — recevoir des arguments

**Une seule bonne réponse**

Avec `int main(int argc, char *argv[])`, quelle vérification permet de lire `argv[1]` comme une chaîne sans accéder à une sentinelle ? (Une seule réponse correcte.)

- **A ❌** `argc >= 1`
- **B ❌** `argc == 1`
- **C ✅** `argc > 1`
- **D ❌** `argc < 1`

**Corrigé candidat :** C. argv[1] est le premier argument utilisateur uniquement lorsqu'il existe au moins deux éléments : argc > 1.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/73-main-int-argc-char-argv-recevoir-des-arguments · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_072-05 — main(int argc, char *argv[]) — recevoir des arguments

**Une seule bonne réponse**

Dans `int main(int argc, char *argv[])`, quel type a l'expression `argv[0]` si argc est positif ? (Une seule réponse correcte.)

- **A ✅** `char *`
- **B ❌** `int`
- **C ❌** `char **`
- **D ❌** `char`

**Corrigé candidat :** A. Chaque argv[i] valide est un pointeur vers char, y compris argv[0] lorsque argc est positif.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/73-main-int-argc-char-argv-recevoir-des-arguments · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_073-01 — argc — compter les arguments de la ligne de commande

**Une seule bonne réponse**

Sous Linux, le programme `./outil` reçoit les trois paramètres `un`, `deux`, `trois`. Quelle est normalement la valeur de argc ? (Une seule réponse correcte.)

- **A ❌** 3
- **B ❌** 2
- **C ❌** 0
- **D ✅** 4

**Corrigé candidat :** D. L'élément argv[0] (l'invocation) s'ajoute aux trois arguments utilisateur : argc vaut 4.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/74-argc-compter-les-arguments-de-la-ligne-de-commande · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_073-02 — argc — compter les arguments de la ligne de commande

**Une seule bonne réponse**

Que mesure `argc` dans la signature de `main` prenant des arguments ? (Une seule réponse correcte.)

- **A ❌** Le nombre d'octets réservé à chaque argument.
- **B ✅** Le nombre d'éléments de argv avant argv[argc].
- **C ❌** La longueur de la première chaîne utilisateur.
- **D ❌** Le nombre de caractères de argv[0].

**Corrigé candidat :** B. argc compte les éléments de la suite de pointeurs avant sa sentinelle NULL, pas la longueur des chaînes.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/74-argc-compter-les-arguments-de-la-ligne-de-commande · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_073-03 — argc — compter les arguments de la ligne de commande

**Une seule bonne réponse**

Dans une invocation normale où argc vaut 3, combien d'arguments utilisateur ont été fournis ? (Une seule réponse correcte.)

- **A ✅** 2
- **B ❌** 3
- **C ❌** 4
- **D ❌** 0

**Corrigé candidat :** A. argv[0] correspond à l'invocation. Les deux autres éléments, argv[1] et argv[2], sont les arguments utilisateur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/74-argc-compter-les-arguments-de-la-ligne-de-commande · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_073-04 — argc — compter les arguments de la ligne de commande

**Plusieurs bonnes réponses**

Lesquelles de ces affirmations sur argc sont correctes en C ? (Plusieurs réponses correctes.)

- **A ❌** argc est un pointeur vers le premier argument.
- **B ✅** argc est un entier non négatif.
- **C ❌** argc indique le nombre de caractères de argv[1].
- **D ✅** Dans un lancement classique, argc compte également argv[0].

**Corrigé candidat :** B, D. argc est un int comptant les éléments avant la sentinelle ; il ne mesure pas la longueur d'une chaîne. Le nom d'invocation est normalement compté sous Linux.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/74-argc-compter-les-arguments-de-la-ligne-de-commande · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_073-05 — argc — compter les arguments de la ligne de commande

**Une seule bonne réponse**

Quelle expression mesure la longueur de la chaîne `argv[1]`, une fois l'existence et la validité de cet argument assurées ? (Une seule réponse correcte.)

- **A ❌** `argc - 1`
- **B ❌** `sizeof argv`
- **C ✅** `strlen(argv[1])`
- **D ❌** `argv[argc]`

**Corrigé candidat :** C. strlen calcule le nombre de caractères avant le terminateur nul de cette chaîne ; argc compte les arguments et sizeof argv mesure le pointeur dans main.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/74-argc-compter-les-arguments-de-la-ligne-de-commande · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_074-01 — argv — tableau de chaînes et indices

**Une seule bonne réponse**

Dans une invocation normale `./outil rouge`, que désigne habituellement argv[0] ? (Une seule réponse correcte.)

- **A ❌** La chaîne rouge
- **B ✅** Le nom ou chemin d'invocation du programme
- **C ❌** Un pointeur NULL
- **D ❌** Le nombre total d'arguments

**Corrigé candidat :** B. argv[0] représente habituellement le nom ou chemin utilisé pour lancer le programme ; rouge se trouve à argv[1].

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/75-argv-tableau-de-chaines-et-indices · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_074-02 — argv — tableau de chaînes et indices

**Une seule bonne réponse**

Dans la commande shell `./outil "deux mots"`, combien d'arguments utilisateur sont normalement transmis ? (Une seule réponse correcte.)

- **A ❌** 0
- **B ❌** 2
- **C ❌** 3
- **D ✅** 1

**Corrigé candidat :** D. Les guillemets de la ligne de commande permettent au shell de transmettre deux mots comme une seule chaîne argument.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/75-argv-tableau-de-chaines-et-indices · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_074-03 — argv — tableau de chaînes et indices

**Une seule bonne réponse**

Lorsqu'une invocation normale fournit `argc == 3`, quel élément contient le deuxième argument utilisateur ? (Une seule réponse correcte.)

- **A ✅** `argv[2]`
- **B ❌** `argv[1]`
- **C ❌** `argv[3]`
- **D ❌** `argv[0]`

**Corrigé candidat :** A. argv[0] est l'invocation, argv[1] le premier argument utilisateur et argv[2] le deuxième.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/75-argv-tableau-de-chaines-et-indices · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_074-04 — argv — tableau de chaînes et indices

**Plusieurs bonnes réponses**

Quelles affirmations sur les éléments de argv sont exactes ? (Plusieurs réponses correctes.)

- **A ✅** Pour un indice i valide inférieur à argc, argv[i] pointe vers une chaîne terminée par '\0'.
- **B ❌** argv[i] est toujours un int.
- **C ✅** argv[argc] vaut NULL et ne représente aucune chaîne à afficher.
- **D ❌** Chaque argument occupe obligatoirement un tableau de même longueur.

**Corrigé candidat :** A, C. Les éléments 0 à argc-1 sont des pointeurs de chaînes ; le pointeur de fin argv[argc] est NULL. Les textes peuvent avoir des longueurs différentes.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/75-argv-tableau-de-chaines-et-indices · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_074-05 — argv — tableau de chaînes et indices

**Une seule bonne réponse**

Avec l'invocation `./outil ab cd`, que vaut `argv[1][1]` ? (Une seule réponse correcte.)

- **A ❌** `'c'`
- **B ❌** `'\0'`
- **C ❌** `'a'`
- **D ✅** `'b'`

**Corrigé candidat :** D. argv[1] est la chaîne ab et son second caractère, à l'indice 1, est b.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/75-argv-tableau-de-chaines-et-indices · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_075-01 — argv[i][j] — caractère d'un argument et double indirection

**Une seule bonne réponse**

Dans un paramètre de fonction C, à quel type est ajusté `char *argv[]` ? (Une seule réponse correcte.)

- **A ❌** `char *`
- **B ✅** `char **`
- **C ❌** `char`
- **D ❌** `char (*)[2]`

**Corrigé candidat :** B. Un paramètre déclaré comme tableau de pointeurs vers char est ajusté en pointeur vers pointeur de char.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/76-argv-i-j-caractere-d-un-argument-et-double-indirection · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_075-02 — argv[i][j] — caractère d'un argument et double indirection

**Une seule bonne réponse**

Si argv[1] désigne la chaîne `code`, quelle est la valeur de argv[1][0] ? (Une seule réponse correcte.)

- **A ✅** `'c'`
- **B ❌** `'o'`
- **C ❌** `'\0'`
- **D ❌** `'d'`

**Corrigé candidat :** A. L'indice 0 sélectionne le premier caractère de la chaîne code, donc c.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/76-argv-i-j-caractere-d-un-argument-et-double-indirection · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_075-03 — argv[i][j] — caractère d'un argument et double indirection

**Une seule bonne réponse**

Pour `argv[1]` égal à `code`, que désigne `*(*(argv + 1) + 1)` ? (Une seule réponse correcte.)

- **A ❌** Le pointeur argv[0]
- **B ❌** Le caractère c
- **C ❌** Le terminateur nul après code
- **D ✅** Le caractère o

**Corrigé candidat :** D. argv+1 atteint le pointeur de la première chaîne utilisateur, puis +1 atteint son deuxième caractère, o.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/76-argv-i-j-caractere-d-un-argument-et-double-indirection · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_075-04 — argv[i][j] — caractère d'un argument et double indirection

**Une seule bonne réponse**

Quel test empêche de lire argv[1][1] lorsque le premier argument utilisateur est absent ou ne contient qu'un caractère ? (Une seule réponse correcte.)

- **A ❌** `argc > 0`
- **B ❌** `argv[1][0] != '\0'` sans vérifier argc
- **C ✅** `argc > 1 && argv[1][0] != '\0' && argv[1][1] != '\0'`
- **D ❌** `argc == 1 || argv[1][1] != '\0'`

**Corrigé candidat :** C. L'évaluation courte doit d'abord établir que argc>1 et ensuite contrôler que le deuxième caractère existe. Un test isolé sur argv[1] peut accéder à la sentinelle.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/76-argv-i-j-caractere-d-un-argument-et-double-indirection · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_075-05 — argv[i][j] — caractère d'un argument et double indirection

**Plusieurs bonnes réponses**

Quelles affirmations sur `argv[i][j]` sont correctes ? (Plusieurs réponses correctes.)

- **A ✅** i choisit une chaîne argument et j un caractère à l'intérieur.
- **B ❌** i sélectionne un octet de argc.
- **C ✅** L'accès nécessite un indice d'argument valide et un indice de caractère compatible avec la chaîne.
- **D ❌** Toutes les chaînes argv[i] ont forcément la même longueur.

**Corrigé candidat :** A, C. argv est un ensemble de pointeurs vers des chaînes, pas une matrice de lignes de longueur fixe.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/76-argv-i-j-caractere-d-un-argument-et-double-indirection · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_076-01 — argv[argc] == NULL — borne de fin et parcours sûr

**Une seule bonne réponse**

En C hébergé, quelle valeur possède l'élément argv[argc] ? (Une seule réponse correcte.)

- **A ❌** Le caractère '0'
- **B ❌** La chaîne vide
- **C ✅** Le pointeur NULL
- **D ❌** L'adresse de argc

**Corrigé candidat :** C. La norme garantit qu'après les argc arguments se trouve un pointeur NULL, qui sert de sentinelle.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/77-argv-argc-null-borne-de-fin-et-parcours-sur · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_076-02 — argv[argc] == NULL — borne de fin et parcours sûr

**Une seule bonne réponse**

Lorsqu'argc vaut 3, combien de fois s'exécute normalement la boucle `for (i = 1; i < argc; i++)` ? (Une seule réponse correcte.)

- **A ❌** 3
- **B ✅** 2
- **C ❌** 1
- **D ❌** 4

**Corrigé candidat :** B. La boucle parcourt i=1 puis i=2 ; elle n'accède ni à argv[0] ni à la sentinelle argv[3].

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/77-argv-argc-null-borne-de-fin-et-parcours-sur · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_076-03 — argv[argc] == NULL — borne de fin et parcours sûr

**Une seule bonne réponse**

Si argc vaut 4, à quel indice se trouve le dernier élément chaîne valide de argv ? (Une seule réponse correcte.)

- **A ❌** 4
- **B ❌** 0
- **C ❌** 5
- **D ✅** 3

**Corrigé candidat :** D. Les chaînes valides occupent les indices 0 à argc-1, soit ici 0 à 3. argv[4] est NULL.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/77-argv-argc-null-borne-de-fin-et-parcours-sur · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_076-04 — argv[argc] == NULL — borne de fin et parcours sûr

**Une seule bonne réponse**

Quelle opération doit être évitée pour le pointeur de fin argv[argc] ? (Une seule réponse correcte.)

- **A ✅** `puts(argv[argc]);`
- **B ❌** `argv[argc] == NULL`
- **C ❌** `argv[argc] != NULL`
- **D ❌** `argc >= 0`

**Corrigé candidat :** A. argv[argc] est NULL : l'utiliser comme argument chaîne de puts demanderait une chaîne valide et n'est pas permis.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/77-argv-argc-null-borne-de-fin-et-parcours-sur · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_076-05 — argv[argc] == NULL — borne de fin et parcours sûr

**Plusieurs bonnes réponses**

Quelles affirmations distinguent correctement le terminateur de chaîne et la sentinelle de argv ? (Plusieurs réponses correctes.)

- **A ❌** Le dernier caractère de chaque argument est le pointeur NULL.
- **B ✅** Chaque chaîne argv[i] valable est terminée par le caractère nul '\0'.
- **C ❌** argv[argc] contient nécessairement la chaîne littérale "NULL".
- **D ✅** argv[argc] est un pointeur nul qui marque la fin de la liste des arguments.

**Corrigé candidat :** B, D. Le caractère '\0' termine le contenu d'une chaîne C, alors que le pointeur NULL termine la suite de pointeurs de argv.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/77-argv-argc-null-borne-de-fin-et-parcours-sur · https://publications.gbdirect.com/c_book/chapter10/arguments_to_main.html · https://en.cppreference.com/w/c/language/main_function

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_003-05 — * dans une déclaration

**Plusieurs bonnes réponses**

Dans `int main(void) { int valeur = 1; int *p = &valeur; return valeur - 1; }`, compilé avec `gcc -std=gnu89 -Wall -Wextra -Werror -pedantic`, quelles affirmations sont exactes ? (Plusieurs réponses correctes.)

- **A ✅** GCC détecte que la variable locale p est inutilisée avec -Wall.
- **B ✅** Ajouter `(void)p;` peut signaler que le non-emploi de p est intentionnel.
- **C ✅** Si p ne sert réellement à rien, supprimer sa déclaration est une correction pertinente.
- **D ❌** Il faut appeler free(p) puisque p contient une adresse.
- **E ❌** -Werror désactive le diagnostic -Wunused-variable.

**Corrigé candidat :** A, B, C. p est un pointeur local initialisé, mais sa valeur n'est jamais utilisée. -Wall active -Wunused-variable et -Werror transforme l'avertissement en erreur. (void)p peut documenter une utilisation intentionnellement omise, tandis que supprimer p est préférable s'il est inutile ; p ne pointe pas vers un objet alloué dynamiquement et ne doit pas être libéré.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration · https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html · https://dev.to/martinlicht/unused-variables-in-cc-why-and-how-4cm4

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N09_072-06 — main(int argc, char *argv[]) — recevoir des arguments

**Une seule bonne réponse**

Quel est l'effet des instructions `(void)argc; (void)argv;` dans `int main(int argc, char **argv) { (void)argc; (void)argv; return 0; }` sous GNU89 avec `-Wall -Wextra -Werror` ? (Une seule réponse correcte.)

- **A ❌** Elles convertissent les arguments en pointeurs NULL.
- **B ❌** Elles empêchent l'appel standard de main par le système.
- **C ❌** Elles libèrent automatiquement la mémoire contenant les arguments.
- **D ✅** Elles signalent que les paramètres sont intentionnellement inutilisés et évitent leurs avertissements.
- **E ❌** Elles modifient la valeur de argc avant return.

**Corrigé candidat :** D. Le cast explicite vers void évalue la valeur des paramètres sans l'exploiter ; GCC ne les considère alors plus comme paramètres inutilisés. Leur type et leur valeur ne changent pas, et aucune mémoire n'est libérée.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/73-main-int-argc-char-argv-recevoir-des-arguments · https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html · https://dev.to/martinlicht/unused-variables-in-cc-why-and-how-4cm4

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

