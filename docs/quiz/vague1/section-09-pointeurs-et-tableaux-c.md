# Première vague — Pointeurs et tableaux C

**288 questions candidates concernant ce chapitre.** La répartition des réponses a été rééquilibrée pour éviter les biais de position. Ces réponses restent des propositions **non validées sur le fond** ; vérifier chaque distracteur et les sources avant publication.

## N09_000 — Pointeur (pointer)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/1-pointeur-pointer)

### V1-N09_000-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int. » ?

- **A ❌** typedef d'un pointeur de fonction — simplifier les signatures
- **B ❌** Raw pointer — pointeur brut en C
- **C ✅** Pointeur (pointer)
- **D ❌** Tampon fixe, statique et dynamique — emplacement et durée de vie

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/1-pointeur-pointer

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_000-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Pointeur (pointer) » ?

- **A ✅** Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int.
- **B ❌** Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.
- **C ❌** Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.
- **D ❌** typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction.

**Réponse proposée :** A. Le résumé de la fiche indique : Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/1-pointeur-pointer

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_000-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Pointeur (pointer) » ?

- **A ❌** Taille et durée de vie ne sont pas synonymes : char local[8] est fixe et automatique ; static char stable[8] est fixe et de durée de vie statique ; malloc(8) crée un bloc dynamique de huit octets. Ne jamais appeler free sur local ou stable.
- **B ❌** typedef définit un alias de type, pas une fonction ni une allocation. La signature doit rester compatible et les pointeurs peuvent valoir NULL si le contrat l'autorise.
- **C ❌** Un pointeur de type int * est une adresse typée, pas une preuve que le bloc est accessible, ni une indication de propriété. Le terme raw pointer ne désigne pas une autre syntaxe du C.
- **D ✅** Toujours initialiser un pointeur avant de le déréférencer.

**Réponse proposée :** D. La fiche indique : Toujours initialiser un pointeur avant de le déréférencer.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/1-pointeur-pointer

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_000-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Pointeur (pointer) » ?

- **A ❌** typedef struct animal { int age; } animal_t; rend le type utilisable sous le nom animal_t.
- **B ❌** Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.
- **C ✅** Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int.
- **D ✅** Toujours initialiser un pointeur avant de le déréférencer.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/1-pointeur-pointer

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_001 — Adresse mémoire

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/2-adresse-memoire)

### V1-N09_001-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse. » ?

- **A ✅** Adresse mémoire
- **B ❌** Pointeur de fonction — déclarer une signature
- **C ❌** strlen sans terminateur nul — lecture hors limites
- **D ❌** & (opérateur d’adresse)

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/2-adresse-memoire

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_001-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Adresse mémoire » ?

- **A ❌** int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *.
- **B ❌** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.
- **C ✅** Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse.
- **D ❌** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.

**Réponse proposée :** C. Le résumé de la fiche indique : Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/2-adresse-memoire

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_001-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Adresse mémoire » ?

- **A ❌** Bien lire les parenthèses : int (*f)(int) est un pointeur de fonction ; int *f(int) est une fonction renvoyant int *. Ne pas confondre avec int *.
- **B ❌** strlen n'est pas un contrôle de taille pour une mémoire arbitraire. Vérifier l'existence de '\0' dans les limites connues avant de traiter un tampon comme une chaîne. Ne pas confondre strlen et sizeof.
- **C ✅** L’adresse affichée peut changer d’une exécution à l’autre.
- **D ❌** Ne confonds pas &n (adresse de n) avec n (valeur de n).

**Réponse proposée :** C. La fiche indique : L’adresse affichée peut changer d’une exécution à l’autre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/2-adresse-memoire

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_001-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Adresse mémoire » ?

- **A ✅** L’adresse affichée peut changer d’une exécution à l’autre.
- **B ❌** Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres.
- **C ✅** Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse.
- **D ❌** malloc(sizeof *p) réserve assez d’octets pour un objet du type struct pointé par p.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/2-adresse-memoire

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_002 — & (opérateur d’adresse)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/3-operateur-d-adresse)

### V1-N09_002-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « &n produit l’adresse de la variable n ; p = &n fait pointer p vers n. » ?

- **A ❌** Modifier une valeur par un pointeur
- **B ❌** Dangling pointer — pointeur vers un objet qui n'existe plus
- **C ✅** & (opérateur d’adresse)
- **D ❌** Tableau de pointeurs de fonctions — choisir une opération

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/3-operateur-d-adresse

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_002-02 — description

**Une seule bonne réponse**

Quelle description caractérise « & (opérateur d’adresse) » ?

- **A ❌** Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.
- **B ✅** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.
- **C ❌** Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if.
- **D ❌** Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.

**Réponse proposée :** B. Le résumé de la fiche indique : &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/3-operateur-d-adresse

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_002-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « & (opérateur d’adresse) » ?

- **A ❌** p = &autreVariable changerait, à l’inverse, l’objet pointé.
- **B ✅** Ne confonds pas &n (adresse de n) avec n (valeur de n).
- **C ❌** VRAI : un pointeur vers un bloc libéré ne permet plus d'accéder à ce bloc, immédiatement après free. FAUX : p = NULL protège automatiquement les autres pointeurs qui désignent l'ancien bloc. Un pointeur n'est pas forcément valide jusqu'à la fin du programme.
- **D ❌** operations[index] est un pointeur de fonction, pas le résultat d'une fonction. Toujours valider l'indice et la non-nullité avant l'appel.

**Réponse proposée :** B. La fiche indique : Ne confonds pas &n (adresse de n) avec n (valeur de n).

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/3-operateur-d-adresse

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_002-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « & (opérateur d’adresse) » ?

- **A ✅** Ne confonds pas &n (adresse de n) avec n (valeur de n).
- **B ✅** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.
- **C ❌** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.
- **D ❌** typedef struct point point; annonce un alias pour un type encore incomplet ; sa définition complète permet ensuite de créer point p.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/3-operateur-d-adresse

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_003 — * dans une déclaration

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration)

### V1-N09_003-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré. » ?

- **A ❌** Pointeur (pointer)
- **B ❌** Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites
- **C ✅** * dans une déclaration
- **D ❌** %p avec printf

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_003-02 — description

**Une seule bonne réponse**

Quelle description caractérise « * dans une déclaration » ?

- **A ✅** int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré.
- **B ❌** INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.
- **C ❌** Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int.
- **D ❌** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).

**Réponse proposée :** A. Le résumé de la fiche indique : int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_003-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « * dans une déclaration » ?

- **A ❌** Une fuite indirecte n'est pas la même chose qu'une fuite certaine directe ; un use-after-free peut apparaître comme un Invalid read/write. Les labels INVALID_WRITE, UNINITIALIZED_VALUE, etc. ne sont pas tous des messages émis mot pour mot par Valgrind.
- **B ❌** Le format exact de l’adresse affichée dépend de l’implémentation.
- **C ✅** Avec plusieurs variables déclarées sur une même ligne, chaque déclarateur doit être lu séparément.
- **D ❌** Toujours initialiser un pointeur avant de le déréférencer.

**Réponse proposée :** C. La fiche indique : Avec plusieurs variables déclarées sur une même ligne, chaque déclarateur doit être lu séparément.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_003-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « * dans une déclaration » ?

- **A ✅** Avec plusieurs variables déclarées sur une même ligne, chaque déclarateur doit être lu séparément.
- **B ✅** int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré.
- **C ❌** sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.
- **D ❌** Matériel physique / programmes exécutés par la machine.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_004 — * dans une expression

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/5-dans-une-expression)

### V1-N09_004-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement. » ?

- **A ❌** Passage d’arguments par valeur
- **B ❌** Callback — transmettre une fonction en paramètre
- **C ❌** * dans une déclaration
- **D ✅** * dans une expression

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/5-dans-une-expression

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_004-02 — description

**Une seule bonne réponse**

Quelle description caractérise « * dans une expression » ?

- **A ❌** En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale.
- **B ❌** Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.
- **C ✅** *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement.
- **D ❌** int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré.

**Réponse proposée :** C. Le résumé de la fiche indique : *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/5-dans-une-expression

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_004-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « * dans une expression » ?

- **A ❌** Pour modifier une variable de l’appelant, on peut transmettre son adresse.
- **B ✅** Déréférencer un pointeur non initialisé ou invalide entraîne un comportement indéfini.
- **C ❌** Avec plusieurs variables déclarées sur une même ligne, chaque déclarateur doit être lu séparément.
- **D ❌** Un callback n'est pas forcément asynchrone : appliquer appelle ici directement afficher_double. La signature du paramètre doit correspondre à celle de la fonction.

**Réponse proposée :** B. La fiche indique : Déréférencer un pointeur non initialisé ou invalide entraîne un comportement indéfini.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/5-dans-une-expression

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_004-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « * dans une expression » ?

- **A ❌** Linux est un noyau et une famille de systèmes ; Ubuntu est une distribution utilisant Linux.
- **B ❌** La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.
- **C ✅** Déréférencer un pointeur non initialisé ou invalide entraîne un comportement indéfini.
- **D ✅** *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/5-dans-une-expression

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_005 — Modifier une valeur par un pointeur

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/6-modifier-une-valeur-par-un-pointeur)

### V1-N09_005-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402. » ?

- **A ❌** Indices de tableau
- **B ✅** Modifier une valeur par un pointeur
- **C ❌** Type pointé
- **D ❌** qsort() — comparateur passé par pointeur de fonction

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/6-modifier-une-valeur-par-un-pointeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_005-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Modifier une valeur par un pointeur » ?

- **A ❌** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **B ❌** int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.
- **C ❌** qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.
- **D ✅** Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.

**Réponse proposée :** D. Le résumé de la fiche indique : Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/6-modifier-une-valeur-par-un-pointeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_005-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Modifier une valeur par un pointeur » ?

- **A ❌** Le comparateur de qsort reçoit des pointeurs vers des éléments, pas les éléments eux-mêmes. Éviter return a-b si a et b sont des int susceptibles de déborder.
- **B ✅** p = &autreVariable changerait, à l’inverse, l’objet pointé.
- **C ❌** a[5] ne désigne pas un élément de ce tableau.
- **D ❌** L’arithmétique des pointeurs doit rester dans les limites du même tableau, ou juste après.

**Réponse proposée :** B. La fiche indique : p = &autreVariable changerait, à l’inverse, l’objet pointé.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/6-modifier-une-valeur-par-un-pointeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_005-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Modifier une valeur par un pointeur » ?

- **A ✅** p = &autreVariable changerait, à l’inverse, l’objet pointé.
- **B ✅** Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.
- **C ❌** Application permettant de saisir des commandes et d’afficher leurs résultats.
- **D ❌** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/6-modifier-une-valeur-par-un-pointeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_006 — Valeur de p, *p et &p

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/7-valeur-de-p-p-et-p)

### V1-N09_006-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « p contient une adresse ; *p est la valeur pointée ; &p est l’adresse mémoire du pointeur lui-même. » ?

- **A ✅** Valeur de p, *p et &p
- **B ❌** Tailles des pointeurs
- **C ❌** sizeof(tableau)
- **D ❌** & (opérateur d’adresse)

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/7-valeur-de-p-p-et-p

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_006-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Valeur de p, *p et &p » ?

- **A ❌** sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur.
- **B ✅** p contient une adresse ; *p est la valeur pointée ; &p est l’adresse mémoire du pointeur lui-même.
- **C ❌** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.
- **D ❌** Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme.

**Réponse proposée :** B. Le résumé de la fiche indique : p contient une adresse ; *p est la valeur pointée ; &p est l’adresse mémoire du pointeur lui-même.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/7-valeur-de-p-p-et-p

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_006-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Valeur de p, *p et &p » ?

- **A ❌** Ne jamais coder en dur une taille de pointeur à partir de suppositions.
- **B ❌** Dans un paramètre de fonction déclaré int a[], a est traité comme un pointeur : sizeof(a) n’y mesure pas le tableau d’origine.
- **C ❌** Ne confonds pas &n (adresse de n) avec n (valeur de n).
- **D ✅** Ne confonds pas la case qui contient une adresse avec la case située à cette adresse.

**Réponse proposée :** D. La fiche indique : Ne confonds pas la case qui contient une adresse avec la case située à cette adresse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/7-valeur-de-p-p-et-p

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_006-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Valeur de p, *p et &p » ?

- **A ❌** Noyau du système d’exploitation ; interface entre logiciels et ressources matérielles.
- **B ✅** Ne confonds pas la case qui contient une adresse avec la case située à cette adresse.
- **C ❌** Fichier texte qui contient une suite de commandes exécutables par un Shell.
- **D ✅** p contient une adresse ; *p est la valeur pointée ; &p est l’adresse mémoire du pointeur lui-même.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/7-valeur-de-p-p-et-p

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_007 — Type pointé

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/8-type-pointe)

### V1-N09_007-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau. » ?

- **A ✅** Type pointé
- **B ❌** Tableau
- **C ❌** Modifier une valeur par un pointeur
- **D ❌** Notation équivalente

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/8-type-pointe

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_007-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Type pointé » ?

- **A ✅** int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.
- **B ❌** Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.
- **C ❌** Pour un tableau a, a[2] désigne le même élément que *(a + 2).
- **D ❌** Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.

**Réponse proposée :** A. Le résumé de la fiche indique : int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/8-type-pointe

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_007-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Type pointé » ?

- **A ❌** Cette équivalence ne rend pas valides les indices hors limites.
- **B ❌** p = &autreVariable changerait, à l’inverse, l’objet pointé.
- **C ❌** Les accès à l’extérieur du tableau sont invalides.
- **D ✅** L’arithmétique des pointeurs doit rester dans les limites du même tableau, ou juste après.

**Réponse proposée :** D. La fiche indique : L’arithmétique des pointeurs doit rester dans les limites du même tableau, ou juste après.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/8-type-pointe

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_007-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Type pointé » ?

- **A ✅** int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.
- **B ❌** Interface graphique / interface en ligne de commande.
- **C ❌** Dossier courant / dossier parent.
- **D ✅** L’arithmétique des pointeurs doit rester dans les limites du même tableau, ou juste après.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/8-type-pointe

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_008 — %p avec printf

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/9-p-avec-printf)

### V1-N09_008-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée). » ?

- **A ❌** sizeof
- **B ❌** %s avec printf
- **C ✅** %p avec printf
- **D ❌** Conversion tableau → pointeur

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/9-p-avec-printf

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_008-02 — description

**Une seule bonne réponse**

Quelle description caractérise « %p avec printf » ?

- **A ✅** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).
- **B ❌** Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.
- **C ❌** sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier.
- **D ❌** Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.

**Réponse proposée :** A. Le résumé de la fiche indique : Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/9-p-avec-printf

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_008-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « %p avec printf » ?

- **A ❌** Cette conversion ne se produit pas dans certains contextes, notamment sizeof(a) et &a.
- **B ❌** Une chaîne non terminée correctement peut provoquer un accès mémoire invalide.
- **C ✅** Le format exact de l’adresse affichée dépend de l’implémentation.
- **D ❌** Utiliser %zu pour afficher une valeur de type size_t.

**Réponse proposée :** C. La fiche indique : Le format exact de l’adresse affichée dépend de l’implémentation.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/9-p-avec-printf

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_008-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « %p avec printf » ?

- **A ❌** Afficher le dossier actuel / changer de dossier / lister les fichiers.
- **B ✅** Le format exact de l’adresse affichée dépend de l’implémentation.
- **C ✅** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).
- **D ❌** Shell courant sur Linux.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/9-p-avec-printf

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_009 — sizeof

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/10-sizeof)

### V1-N09_009-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier. » ?

- **A ❌** Passer une adresse à une fonction
- **B ❌** Arithmétique des pointeurs
- **C ✅** sizeof
- **D ❌** Parcourir un tableau

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/10-sizeof

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_009-02 — description

**Une seule bonne réponse**

Quelle description caractérise « sizeof » ?

- **A ❌** Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.
- **B ✅** sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier.
- **C ❌** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.
- **D ❌** Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1.

**Réponse proposée :** B. Le résumé de la fiche indique : sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/10-sizeof

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_009-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « sizeof » ?

- **A ❌** La fonction doit recevoir une adresse valide avant de déréférencer p.
- **B ✅** Utiliser %zu pour afficher une valeur de type size_t.
- **C ❌** Évite les indices négatifs et les accès au-delà de la dernière case.
- **D ❌** Le déplacement n’est défini que dans le même tableau, ou une position juste après.

**Réponse proposée :** B. La fiche indique : Utiliser %zu pour afficher une valeur de type size_t.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/10-sizeof

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_009-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « sizeof » ?

- **A ✅** sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier.
- **B ✅** Utiliser %zu pour afficher une valeur de type size_t.
- **C ❌** Dossier personnel de l’utilisateur.
- **D ❌** Afficher le contenu / type du fichier / rechercher / consulter le manuel.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/10-sizeof

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_010 — Tailles des pointeurs

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/11-tailles-des-pointeurs)

### V1-N09_010-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme. » ?

- **A ❌** Tableau ≠ pointeur
- **B ✅** Tailles des pointeurs
- **C ❌** Principe d'inversion d'une chaîne
- **D ❌** Caractère nul

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/11-tailles-des-pointeurs

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_010-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Tailles des pointeurs » ?

- **A ❌** \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.
- **B ❌** Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation.
- **C ❌** Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.
- **D ✅** Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme.

**Réponse proposée :** D. Le résumé de la fiche indique : Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/11-tailles-des-pointeurs

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_010-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Tailles des pointeurs » ?

- **A ❌** Les fonctions sur les chaînes doivent pouvoir trouver le terminateur nul.
- **B ❌** sizeof(a) et sizeof(p) ne mesurent pas la même chose.
- **C ❌** Cette fiche décrit une méthode de raisonnement, sans résoudre intégralement un exercice.
- **D ✅** Ne jamais coder en dur une taille de pointeur à partir de suppositions.

**Réponse proposée :** D. La fiche indique : Ne jamais coder en dur une taille de pointeur à partir de suppositions.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/11-tailles-des-pointeurs

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_010-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tailles des pointeurs » ?

- **A ❌** Entrée standard (0) / sortie standard (1) / erreurs (2).
- **B ✅** Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme.
- **C ✅** Ne jamais coder en dur une taille de pointeur à partir de suppositions.
- **D ❌** Dépend du répertoire actuel.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/11-tailles-des-pointeurs

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_011 — Passage d’arguments par valeur

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/12-passage-d-arguments-par-valeur)

### V1-N09_011-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale. » ?

- **A ❌** Initialisation d'un tableau
- **B ❌** &tableau
- **C ✅** Passage d’arguments par valeur
- **D ❌** Allocation automatique — variables locales

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/12-passage-d-arguments-par-valeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_011-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Passage d’arguments par valeur » ?

- **A ❌** &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent.
- **B ❌** Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30};
- **C ✅** En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale.
- **D ❌** Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.

**Réponse proposée :** C. Le résumé de la fiche indique : En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/12-passage-d-arguments-par-valeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_011-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Passage d’arguments par valeur » ?

- **A ❌** Ne pas retourner l’adresse d’un tableau local pour l’utiliser après le retour de la fonction. Ne jamais appeler free sur une variable ou un tableau automatique.
- **B ✅** Pour modifier une variable de l’appelant, on peut transmettre son adresse.
- **C ❌** Un tableau existant ne se réaffecte pas avec l'opérateur = comme une variable scalaire.
- **D ❌** Le type de &a est un pointeur vers tableau de 5 int.

**Réponse proposée :** B. La fiche indique : Pour modifier une variable de l’appelant, on peut transmettre son adresse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/12-passage-d-arguments-par-valeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_011-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Passage d’arguments par valeur » ?

- **A ❌** Relier la sortie d’une commande à l’entrée d’une autre.
- **B ❌** Copier / déplacer-renommer / supprimer.
- **C ✅** Pour modifier une variable de l’appelant, on peut transmettre son adresse.
- **D ✅** En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/12-passage-d-arguments-par-valeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_012 — Passer une adresse à une fonction

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/13-passer-une-adresse-a-une-fonction)

### V1-N09_012-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur. » ?

- **A ❌** Chaîne de caractères en C
- **B ✅** Passer une adresse à une fonction
- **C ❌** Échanger deux caractères
- **D ❌** Fuite mémoire — allocation perdue

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/13-passer-une-adresse-a-une-fonction

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_012-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Passer une adresse à une fonction » ?

- **A ❌** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.
- **B ❌** Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.
- **C ❌** Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.
- **D ✅** Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.

**Réponse proposée :** D. Le résumé de la fiche indique : Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/13-passer-une-adresse-a-une-fonction

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_012-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Passer une adresse à une fonction » ?

- **A ❌** Memory leak = fuite mémoire. Avec Valgrind, « definitely lost » indique un bloc inaccessible, « still reachable » un bloc encore pointé à la sortie. Le système récupère généralement la mémoire à la fin du processus, mais cela ne corrige pas une fuite pendant son fonctionnement.
- **B ❌** Un échange simple est une brique utile pour manipuler ou inverser des chaînes.
- **C ❌** Toutes les suites de char ne sont pas nécessairement des chaînes valides.
- **D ✅** La fonction doit recevoir une adresse valide avant de déréférencer p.

**Réponse proposée :** D. La fiche indique : La fonction doit recevoir une adresse valide avant de déréférencer p.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/13-passer-une-adresse-a-une-fonction

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_012-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Passer une adresse à une fonction » ?

- **A ✅** Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.
- **B ❌** Changer les permissions / propriétaire / utiliser des privilèges élevés.
- **C ✅** La fonction doit recevoir une adresse valide avant de déréférencer p.
- **D ❌** Trier / dédupliquer les lignes voisines / extraire / début / fin / inverser les caractères.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/13-passer-une-adresse-a-une-fonction

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_013 — Tableau

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/14-tableau)

### V1-N09_013-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers. » ?

- **A ❌** Exercices d’observation
- **B ✅** Tableau
- **C ❌** malloc et sizeof : allouer le bon nombre d’octets
- **D ❌** free — libérer la mémoire

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/14-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_013-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Tableau » ?

- **A ❌** Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits.
- **B ❌** Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse.
- **C ❌** free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.
- **D ✅** Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.

**Réponse proposée :** D. Le résumé de la fiche indique : Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/14-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_013-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Tableau » ?

- **A ❌** Ne jamais appeler free sur une variable locale ou une adresse non allouée dynamiquement ; éviter les doubles free et toute utilisation après free. La mise à NULL d’un pointeur ne corrige pas d’éventuels alias.
- **B ✅** Les accès à l’extérieur du tableau sont invalides.
- **C ❌** Réponse : n vaut 8. Essaie ensuite d’expliquer pourquoi, plutôt que de retenir le chiffre.
- **D ❌** sizeof(int) indique la taille d’un int ; sizeof *p celle du type pointé. Le nombre 64 du matériel ne donne pas la taille d’un int. Si n est variable, vérifier également le risque de débordement de n * sizeof *p.

**Réponse proposée :** B. La fiche indique : Les accès à l’extérieur du tableau sont invalides.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/14-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_013-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tableau » ?

- **A ❌** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **B ✅** Les accès à l’extérieur du tableau sont invalides.
- **C ✅** Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.
- **D ❌** Rediriger les erreurs / prendre un fichier comme entrée.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/14-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_014 — Indices de tableau

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau)

### V1-N09_014-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5]. » ?

- **A ❌** Tableau à deux dimensions
- **B ❌** strdup : copie allouée dynamiquement
- **C ❌** malloc : vérifier NULL
- **D ✅** Indices de tableau

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_014-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Indices de tableau » ?

- **A ✅** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **B ❌** strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat.
- **C ❌** int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.
- **D ❌** Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.

**Réponse proposée :** A. Le résumé de la fiche indique : Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_014-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Indices de tableau » ?

- **A ❌** strcpy copie vers une zone existante ; strdup crée une nouvelle zone allouée. Sous GNU89, strdup est une fonction POSIX, pas une fonction du C89 standard.
- **B ✅** a[5] ne désigne pas un élément de ce tableau.
- **C ❌** Le nombre de colonnes fait partie du type utilisé pour manipuler ce tableau.
- **D ❌** Toujours contrôler p == NULL avant de déréférencer p. N’utilise pas de boucle d’allocations géantes pour tester artificiellement un échec.

**Réponse proposée :** B. La fiche indique : a[5] ne désigne pas un élément de ce tableau.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_014-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Indices de tableau » ?

- **A ✅** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **B ✅** a[5] ne désigne pas un élément de ce tableau.
- **C ❌** Rechercher / compter les lignes / transformer des caractères.
- **D ❌** Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_015 — Tableau ≠ pointeur

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/16-tableau-pointeur)

### V1-N09_015-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation. » ?

- **A ❌** Pointeur non initialisé : comportement indéfini
- **B ❌** malloc — allocation dynamique
- **C ❌** Chaînes littérales et .rodata (avancé)
- **D ✅** Tableau ≠ pointeur

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/16-tableau-pointeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_015-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Tableau ≠ pointeur » ?

- **A ✅** Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation.
- **B ❌** malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue).
- **C ❌** Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.
- **D ❌** Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation.

**Réponse proposée :** A. Le résumé de la fiche indique : Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/16-tableau-pointeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_015-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Tableau ≠ pointeur » ?

- **A ✅** sizeof(a) et sizeof(p) ne mesurent pas la même chose.
- **B ❌** Un segfault est une conséquence fréquente, jamais une garantie du langage. Un programme qui compile peut contenir un comportement indéfini à l’exécution.
- **C ❌** Notion avancée : .rodata est un détail courant de l’implémentation, pas une garantie universelle du langage C. Les optimisations peuvent modifier l’apparence des données dans l’exécutable.
- **D ❌** Vérifier p != NULL avant de le déréférencer. malloc ne met pas les octets à zéro ; chaque allocation réussie doit être libérée une fois quand elle n’est plus utile.

**Réponse proposée :** A. La fiche indique : sizeof(a) et sizeof(p) ne mesurent pas la même chose.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/16-tableau-pointeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_015-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tableau ≠ pointeur » ?

- **A ❌** Paramètres et variables du Shell / environnement.
- **B ✅** sizeof(a) et sizeof(p) ne mesurent pas la même chose.
- **C ✅** Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation.
- **D ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/16-tableau-pointeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_016 — Conversion tableau → pointeur

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/17-conversion-tableau-pointeur)

### V1-N09_016-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse. » ?

- **A ❌** strcpy : copier dans un espace existant
- **B ❌** strncpy() — copie limitée et terminaison
- **C ✅** Conversion tableau → pointeur
- **D ❌** Chaîne littérale et tableau de char

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/17-conversion-tableau-pointeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_016-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Conversion tableau → pointeur » ?

- **A ❌** Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable.
- **B ❌** strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place.
- **C ✅** Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.
- **D ❌** strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide.

**Réponse proposée :** C. Le résumé de la fiche indique : Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/17-conversion-tableau-pointeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_016-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Conversion tableau → pointeur » ?

- **A ❌** Le troisième argument limite la copie, mais ne réserve pas automatiquement une place pour '\0'. Ici « Bonjour » devient « Bonjo » : pas de débordement, mais une troncature. Pour une copie complète, vérifier la capacité avant de copier.
- **B ❌** strcpy ne réalise jamais malloc à ta place. Il faut prévoir strlen(src) + 1 cases char, y compris '\0', et éviter les zones qui se chevauchent.
- **C ✅** Cette conversion ne se produit pas dans certains contextes, notamment sizeof(a) et &a.
- **D ❌** Ne pas écrire dans une chaîne littérale. const char *p protège contre cette modification ; char s[] crée un tableau modifiable distinct.

**Réponse proposée :** C. La fiche indique : Cette conversion ne se produit pas dans certains contextes, notamment sizeof(a) et &a.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/17-conversion-tableau-pointeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_016-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Conversion tableau → pointeur » ?

- **A ✅** Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.
- **B ❌** Variable définie dans le Shell en cours, non nécessairement exportée.
- **C ✅** Cette conversion ne se produit pas dans certains contextes, notamment sizeof(a) et &a.
- **D ❌** Liste des dossiers recherchés pour trouver une commande, séparés par :.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/17-conversion-tableau-pointeur

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_017 — sizeof(tableau)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau)

### V1-N09_017-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur. » ?

- **A ❌** Use-after-free — réutiliser un bloc libéré
- **B ✅** sizeof(tableau)
- **C ❌** free : quelles adresses peut-on libérer ?
- **D ❌** Valgrind — détecter les fuites

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_017-02 — description

**Une seule bonne réponse**

Quelle description caractérise « sizeof(tableau) » ?

- **A ❌** Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code.
- **B ❌** free accepte NULL ou un pointeur valide obtenu par une allocation dynamique compatible ; ni un littéral ni un tableau local ne se libèrent avec free.
- **C ✅** sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur.
- **D ❌** Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini.

**Réponse proposée :** C. Le résumé de la fiche indique : sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_017-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « sizeof(tableau) » ?

- **A ❌** Après free, aucun alias vers le bloc ne doit servir à accéder aux anciennes données. Un test sans crash ne prouve pas que l'accès serait autorisé.
- **B ❌** Ne libère jamais un littéral, l’adresse d’un objet automatique ou le même bloc deux fois. free(NULL) est autorisé, mais ne rend pas valide un ancien pointeur libéré.
- **C ✅** Dans un paramètre de fonction déclaré int a[], a est traité comme un pointeur : sizeof(a) n’y mesure pas le tableau d’origine.
- **D ❌** Valgrind s’utilise dans le terminal sur un programme compilé, pas comme un #include C. « ERROR SUMMARY: 0 errors » seul ne suffit pas : consulter aussi les catégories de fuites. L’outil ne vérifie que les chemins réellement exécutés.

**Réponse proposée :** C. La fiche indique : Dans un paramètre de fonction déclaré int a[], a est traité comme un pointeur : sizeof(a) n’y mesure pas le tableau d’origine.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_017-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « sizeof(tableau) » ?

- **A ✅** sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur.
- **B ✅** Dans un paramètre de fonction déclaré int a[], a est traité comme un pointeur : sizeof(a) n’y mesure pas le tableau d’origine.
- **C ❌** Exporter une variable / supprimer une variable ou fonction.
- **D ❌** Évaluation arithmétique.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_018 — &tableau

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/19-tableau)

### V1-N09_018-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent. » ?

- **A ❌** strlen, sizeof et terminateur nul
- **B ✅** &tableau
- **C ❌** Segfault — faute de segmentation
- **D ❌** Valgrind Memcheck — comprendre les alertes

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/19-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_018-02 — description

**Une seule bonne réponse**

Quelle description caractérise « &tableau » ?

- **A ✅** &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent.
- **B ❌** Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.
- **C ❌** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.
- **D ❌** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.

**Réponse proposée :** A. Le résumé de la fiche indique : &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/19-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_018-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « &tableau » ?

- **A ❌** Un segfault est un symptôme d’accès invalide détecté pendant l’exécution, pas une garantie systématique du C. Les outils de diagnostic aident, mais un test qui réussit ne prouve pas l’absence de comportement indéfini.
- **B ✅** Le type de &a est un pointeur vers tableau de 5 int.
- **C ❌** La première erreur affichée peut provoquer les suivantes. Consulter la pile des appels, les lignes indiquées par -g et le contexte des allocations/libérations. Un « 0 errors » sur un test n'est pas une preuve générale d'absence de bugs. Exemple : « definitely lost: 32 bytes in 1 blocks » = 1 bloc de 32 octets définitivement perdu. Ces labels en majuscules sont des cat
- **D ❌** Pour le littéral : sizeof("Best School") = 12, strlen("Best School") = 11. Pour un pointeur char *p, sizeof(p) ne mesure jamais la longueur de la chaîne. malloc(sizeof("Best School") + 1) réserve 13 octets : c’est suffisant, sans être nécessaire. strlen n'est sûr que pour une chaîne correctement terminée : il n'empêche pas un débordement lors de la saisie.

**Réponse proposée :** B. La fiche indique : Le type de &a est un pointeur vers tableau de 5 int.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/19-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_018-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « &tableau » ?

- **A ✅** Le type de &a est un pointeur vers tableau de 5 int.
- **B ❌** Choisir une branche selon des conditions.
- **C ❌** Exécuter un script dans le Shell courant.
- **D ✅** &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/19-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_019 — Arithmétique des pointeurs

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/20-arithmetique-des-pointeurs)

### V1-N09_019-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int. » ?

- **A ✅** Arithmétique des pointeurs
- **B ❌** Pile et tas : durée de vie des allocations
- **C ❌** Buffer overflow — dépassement de tampon
- **D ❌** Tampon fixe, statique et dynamique — emplacement et durée de vie

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/20-arithmetique-des-pointeurs

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_019-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Arithmétique des pointeurs » ?

- **A ❌** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.
- **B ❌** Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier.
- **C ✅** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.
- **D ❌** Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.

**Réponse proposée :** C. Le résumé de la fiche indique : Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/20-arithmetique-des-pointeurs

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_019-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Arithmétique des pointeurs » ?

- **A ❌** Pour une chaîne, le tableau doit accueillir strlen(source) + 1 octets. Un programme qui ne plante pas n'est pas forcément correct : une écriture hors limites est déjà un bug.
- **B ❌** Pile/stack : objets automatiques et appels, dans les implémentations usuelles. Tas/heap : blocs obtenus via malloc/calloc/realloc, libérés explicitement. Durée de vie statique : objets static. Ne jamais faire free(&local) ou free sur un tableau static.
- **C ✅** Le déplacement n’est défini que dans le même tableau, ou une position juste après.
- **D ❌** Taille et durée de vie ne sont pas synonymes : char local[8] est fixe et automatique ; static char stable[8] est fixe et de durée de vie statique ; malloc(8) crée un bloc dynamique de huit octets. Ne jamais appeler free sur local ou stable.

**Réponse proposée :** C. La fiche indique : Le déplacement n’est défini que dans le même tableau, ou une position juste après.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/20-arithmetique-des-pointeurs

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_019-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Arithmétique des pointeurs » ?

- **A ❌** Substitution de commande : récupérer sa sortie.
- **B ❌** ET logique / OU logique / négation.
- **C ✅** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.
- **D ✅** Le déplacement n’est défini que dans le même tableau, ou une position juste après.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/20-arithmetique-des-pointeurs

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_020 — Notation équivalente

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente)

### V1-N09_020-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Pour un tableau a, a[2] désigne le même élément que *(a + 2). » ?

- **A ❌** realloc — redimensionner une allocation
- **B ❌** strlen sans terminateur nul — lecture hors limites
- **C ❌** Débordement du calcul de taille avant malloc
- **D ✅** Notation équivalente

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_020-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Notation équivalente » ?

- **A ✅** Pour un tableau a, a[2] désigne le même élément que *(a + 2).
- **B ❌** realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec.
- **C ❌** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.
- **D ❌** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.

**Réponse proposée :** A. Le résumé de la fiche indique : Pour un tableau a, a[2] désigne le même élément que *(a + 2).

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_020-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Notation équivalente » ?

- **A ❌** Ne pas multiplier deux tailles non fiables avant d'avoir vérifié le risque de dépassement. malloc vérifie la demande reçue, mais ne peut pas corriger un calcul de taille qui a déjà débordé.
- **B ❌** Le piège classique : p = realloc(p, taille); peut faire perdre le bloc initial sur échec. Avec tmp, l’ancien pointeur reste disponible. Ne pas utiliser l’ancienne adresse après une réussite, même si la valeur numérique semble identique.
- **C ✅** Cette équivalence ne rend pas valides les indices hors limites.
- **D ❌** strlen n'est pas un contrôle de taille pour une mémoire arbitraire. Vérifier l'existence de '\0' dans les limites connues avant de traiter un tampon comme une chaîne. Ne pas confondre strlen et sizeof.

**Réponse proposée :** C. La fiche indique : Cette équivalence ne rend pas valides les indices hors limites.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_020-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Notation équivalente » ?

- **A ❌** Teste après exécution : le corps tourne au moins une fois.
- **B ✅** Cette équivalence ne rend pas valides les indices hors limites.
- **C ❌** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.
- **D ✅** Pour un tableau a, a[2] désigne le même élément que *(a + 2).

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_021 — Chaîne de caractères en C

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/22-chaine-de-caracteres-en-c)

### V1-N09_021-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0. » ?

- **A ❌** Dépassement de tampon sur la pile — erreur avant malloc
- **B ❌** Dangling pointer — pointeur vers un objet qui n'existe plus
- **C ❌** calloc() — allouer et initialiser à zéro
- **D ✅** Chaîne de caractères en C

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/22-chaine-de-caracteres-en-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_021-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Chaîne de caractères en C » ?

- **A ✅** Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.
- **B ❌** Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.
- **C ❌** Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.
- **D ❌** calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free.

**Réponse proposée :** A. Le résumé de la fiche indique : Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/22-chaine-de-caracteres-en-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_021-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Chaîne de caractères en C » ?

- **A ❌** VRAI : un pointeur vers un bloc libéré ne permet plus d'accéder à ce bloc, immédiatement après free. FAUX : p = NULL protège automatiquement les autres pointeurs qui désignent l'ancien bloc. Un pointeur n'est pas forcément valide jusqu'à la fin du programme.
- **B ❌** calloc remet les octets du bloc à zéro, mais n'empêche ni un accès hors limites ni l'utilisation du bloc après free. Le résultat peut être NULL si l'allocation échoue.
- **C ❌** Dans la question du lab, la bonne raison est que « corruption may have already occurred during input reading ». Corriger la copie après coup n'annule pas un débordement déjà produit. Vérifie la longueur lors de la LECTURE, et refuse les lignes incomplètes si nécessaire.
- **D ✅** Toutes les suites de char ne sont pas nécessairement des chaînes valides.

**Réponse proposée :** D. La fiche indique : Toutes les suites de char ne sont pas nécessairement des chaînes valides.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/22-chaine-de-caracteres-en-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_021-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Chaîne de caractères en C » ?

- **A ❌** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.
- **B ❌** Comparaisons.
- **C ✅** Toutes les suites de char ne sont pas nécessairement des chaînes valides.
- **D ✅** Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/22-chaine-de-caracteres-en-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_022 — Caractère nul

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/23-caractere-nul)

### V1-N09_022-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";. » ?

- **A ❌** Valgrind : « definitely lost » et les octets perdus
- **B ❌** Double free — ne pas libérer deux fois
- **C ✅** Caractère nul
- **D ❌** Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/23-caractere-nul

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_022-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Caractère nul » ?

- **A ✅** \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.
- **B ❌** « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine.
- **C ❌** Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.
- **D ❌** INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.

**Réponse proposée :** A. Le résumé de la fiche indique : \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/23-caractere-nul

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_022-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Caractère nul » ?

- **A ❌** Une fuite indirecte n'est pas la même chose qu'une fuite certaine directe ; un use-after-free peut apparaître comme un Invalid read/write. Les labels INVALID_WRITE, UNINITIALIZED_VALUE, etc. ne sont pas tous des messages émis mot pour mot par Valgrind.
- **B ❌** Ne pas utiliser free deux fois sur une même allocation. L'exemple appelle free sur p puis sur NULL : ce n'est pas une double libération du bloc. Mettre p à NULL ne sécurise pas les alias éventuels. Un double free peut venir d'une ownership ambiguë ou de deux chemins de nettoyage ; chercher les chemins réels avant de conclure.
- **C ❌** 32 bytes = le volume perdu, 1 blocks = le nombre de blocs perdus. « Definitely lost » signifie fuite certaine : il faut corriger la gestion du pointeur ou l'absence de free. L'exemple fourni est volontairement sans fuite.
- **D ✅** Les fonctions sur les chaînes doivent pouvoir trouver le terminateur nul.

**Réponse proposée :** D. La fiche indique : Les fonctions sur les chaînes doivent pouvoir trouver le terminateur nul.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/23-caractere-nul

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_022-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Caractère nul » ?

- **A ✅** \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.
- **B ❌** Dépôt du code et de son historique.
- **C ✅** Les fonctions sur les chaînes doivent pouvoir trouver le terminateur nul.
- **D ❌** Teste sa condition avant chaque itération.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/23-caractere-nul

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_023 — %s avec printf

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/24-s-avec-printf)

### V1-N09_023-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin. » ?

- **A ❌** Callback — transmettre une fonction en paramètre
- **B ❌** memcpy() ou memmove() — zones qui se recouvrent
- **C ❌** Ownership — qui est responsable de free() ?
- **D ✅** %s avec printf

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/24-s-avec-printf

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_023-02 — description

**Une seule bonne réponse**

Quelle description caractérise « %s avec printf » ?

- **A ❌** Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.
- **B ✅** Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.
- **C ❌** L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité.
- **D ❌** memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher.

**Réponse proposée :** B. Le résumé de la fiche indique : Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/24-s-avec-printf

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_023-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « %s avec printf » ?

- **A ❌** VRAI : copier un pointeur dans plusieurs variables crée un risque de confusion de propriété. FAUX : cela transfère automatiquement la propriété ou duplique l'allocation. Seul le responsable désigné libère le bloc, une fois.
- **B ❌** memcpy sur des plages qui se chevauchent a un comportement indéfini ; memmove est prévue pour ce cas. Vérifier la capacité de destination et compter les octets copiés, y compris '\0' pour une chaîne.
- **C ❌** Un callback n'est pas forcément asynchrone : appliquer appelle ici directement afficher_double. La signature du paramètre doit correspondre à celle de la fonction.
- **D ✅** Une chaîne non terminée correctement peut provoquer un accès mémoire invalide.

**Réponse proposée :** D. La fiche indique : Une chaîne non terminée correctement peut provoquer un accès mémoire invalide.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/24-s-avec-printf

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_023-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « %s avec printf » ?

- **A ✅** Une chaîne non terminée correctement peut provoquer un accès mémoire invalide.
- **B ❌** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.
- **C ✅** Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.
- **D ❌** Branche de développement / fusion.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/24-s-avec-printf

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_024 — Exercices d’observation

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/25-exercices-d-observation)

### V1-N09_024-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse. » ?

- **A ✅** Exercices d’observation
- **B ❌** qsort() — comparateur passé par pointeur de fonction
- **C ❌** char * — pointeur vers un caractère ou une chaîne
- **D ❌** Stack overflow — épuisement de la pile d'appels

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/25-exercices-d-observation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_024-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Exercices d’observation » ?

- **A ✅** Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse.
- **B ❌** char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur.
- **C ❌** Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux.
- **D ❌** qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.

**Réponse proposée :** A. Le résumé de la fiche indique : Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/25-exercices-d-observation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_024-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Exercices d’observation » ?

- **A ❌** Le comparateur de qsort reçoit des pointeurs vers des éléments, pas les éléments eux-mêmes. Éviter return a-b si a et b sont des int susceptibles de déborder.
- **B ✅** Réponse : n vaut 8. Essaie ensuite d’expliquer pourquoi, plutôt que de retenir le chiffre.
- **C ❌** char * désigne un pointeur, char tableau[8] un tableau. sizeof(p) mesure le pointeur, et sizeof(tableau) mesure le tableau lorsqu'il est encore dans sa portée comme tableau. Un texte littéral est à traiter comme non modifiable.
- **D ❌** Une récursion sans cas d'arrêt peut épuiser la pile ; une grande variable locale peut également poser problème. Stack overflow et stack buffer overflow ne désignent pas la même erreur.

**Réponse proposée :** B. La fiche indique : Réponse : n vaut 8. Essaie ensuite d’expliquer pourquoi, plutôt que de retenir le chiffre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/25-exercices-d-observation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_024-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Exercices d’observation » ?

- **A ✅** Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse.
- **B ❌** État / préparation / enregistrement.
- **C ❌** Service d’hébergement et de collaboration pour des dépôts Git.
- **D ✅** Réponse : n vaut 8. Essaie ensuite d’expliquer pourquoi, plutôt que de retenir le chiffre.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/25-exercices-d-observation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_025 — Initialisation d'un tableau

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/26-initialisation-d-un-tableau)

### V1-N09_025-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30}; » ?

- **A ❌** Appeler un pointeur de fonction — f(x) ou (*f)(x)
- **B ✅** Initialisation d'un tableau
- **C ❌** memcpy() — copier des octets sans chevauchement
- **D ❌** & (opérateur d’adresse)

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/26-initialisation-d-un-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_025-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Initialisation d'un tableau » ?

- **A ❌** Pour un pointeur de fonction valide f, f(5) et (*f)(5) appellent la même fonction ; vérifier NULL avant l'appel.
- **B ❌** memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement.
- **C ✅** Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30};
- **D ❌** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.

**Réponse proposée :** C. Le résumé de la fiche indique : Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30};

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/26-initialisation-d-un-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_025-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Initialisation d'un tableau » ?

- **A ❌** Ne jamais appeler un pointeur NULL ou de signature incompatible. L'indirection explicite (*f)(x) et la forme directe f(x) sont équivalentes.
- **B ✅** Un tableau existant ne se réaffecte pas avec l'opérateur = comme une variable scalaire.
- **C ❌** Ne confonds pas &n (adresse de n) avec n (valeur de n).
- **D ❌** memcpy ne garantit ni le terminateur '\0', ni la capacité, ni l'absence de chevauchement : le développeur doit vérifier ces conditions avant l'appel. Pour déplacer des octets avec recouvrement, utiliser memmove.

**Réponse proposée :** B. La fiche indique : Un tableau existant ne se réaffecte pas avec l'opérateur = comme une variable scalaire.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/26-initialisation-d-un-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_025-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Initialisation d'un tableau » ?

- **A ✅** Un tableau existant ne se réaffecte pas avec l'opérateur = comme une variable scalaire.
- **B ❌** Point d’entrée d’un programme C classique.
- **C ❌** Instantané enregistré dans l’historique local.
- **D ✅** Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30};

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/26-initialisation-d-un-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_026 — Parcourir un tableau

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau)

### V1-N09_026-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1. » ?

- **A ❌** Raw pointer — pointeur brut en C
- **B ❌** typedef d'un pointeur de fonction — simplifier les signatures
- **C ✅** Parcourir un tableau
- **D ❌** Modifier une valeur par un pointeur

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_026-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Parcourir un tableau » ?

- **A ❌** typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction.
- **B ❌** Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.
- **C ✅** Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1.
- **D ❌** Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.

**Réponse proposée :** C. Le résumé de la fiche indique : Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_026-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Parcourir un tableau » ?

- **A ✅** Évite les indices négatifs et les accès au-delà de la dernière case.
- **B ❌** Un pointeur de type int * est une adresse typée, pas une preuve que le bloc est accessible, ni une indication de propriété. Le terme raw pointer ne désigne pas une autre syntaxe du C.
- **C ❌** p = &autreVariable changerait, à l’inverse, l’objet pointé.
- **D ❌** typedef définit un alias de type, pas une fonction ni une allocation. La signature doit rester compatible et les pointeurs peuvent valoir NULL si le contrat l'autorise.

**Réponse proposée :** A. La fiche indique : Évite les indices négatifs et les accès au-delà de la dernière case.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_026-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Parcourir un tableau » ?

- **A ✅** Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1.
- **B ✅** Évite les indices négatifs et les accès au-delà de la dernière case.
- **C ❌** Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.
- **D ❌** Git ne peut pas résoudre automatiquement des changements concurrents.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_027 — Tableau à deux dimensions

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/28-tableau-a-deux-dimensions)

### V1-N09_027-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne. » ?

- **A ✅** Tableau à deux dimensions
- **B ❌** Adresse mémoire
- **C ❌** Pointeur de fonction — déclarer une signature
- **D ❌** %p avec printf

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/28-tableau-a-deux-dimensions

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_027-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Tableau à deux dimensions » ?

- **A ❌** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).
- **B ❌** int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *.
- **C ✅** int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.
- **D ❌** Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse.

**Réponse proposée :** C. Le résumé de la fiche indique : int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/28-tableau-a-deux-dimensions

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_027-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Tableau à deux dimensions » ?

- **A ❌** L’adresse affichée peut changer d’une exécution à l’autre.
- **B ❌** Le format exact de l’adresse affichée dépend de l’implémentation.
- **C ✅** Le nombre de colonnes fait partie du type utilisé pour manipuler ce tableau.
- **D ❌** Bien lire les parenthèses : int (*f)(int) est un pointeur de fonction ; int *f(int) est une fonction renvoyant int *. Ne pas confondre avec int *.

**Réponse proposée :** C. La fiche indique : Le nombre de colonnes fait partie du type utilisé pour manipuler ce tableau.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/28-tableau-a-deux-dimensions

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_027-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tableau à deux dimensions » ?

- **A ✅** int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.
- **B ❌** Copier un dépôt / historique / changer de branche.
- **C ✅** Le nombre de colonnes fait partie du type utilisé pour manipuler ce tableau.
- **D ❌** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/28-tableau-a-deux-dimensions

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_028 — Échanger deux caractères

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/29-echanger-deux-caracteres)

### V1-N09_028-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire. » ?

- **A ❌** * dans une expression
- **B ❌** Passage d’arguments par valeur
- **C ❌** Tableau de pointeurs de fonctions — choisir une opération
- **D ✅** Échanger deux caractères

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/29-echanger-deux-caracteres

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_028-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Échanger deux caractères » ?

- **A ❌** En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale.
- **B ❌** Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if.
- **C ✅** Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.
- **D ❌** *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement.

**Réponse proposée :** C. Le résumé de la fiche indique : Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/29-echanger-deux-caracteres

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_028-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Échanger deux caractères » ?

- **A ❌** Déréférencer un pointeur non initialisé ou invalide entraîne un comportement indéfini.
- **B ✅** Un échange simple est une brique utile pour manipuler ou inverser des chaînes.
- **C ❌** Pour modifier une variable de l’appelant, on peut transmettre son adresse.
- **D ❌** operations[index] est un pointeur de fonction, pas le résultat d'une fonction. Toujours valider l'indice et la non-nullité avant l'appel.

**Réponse proposée :** B. La fiche indique : Un échange simple est une brique utile pour manipuler ou inverser des chaînes.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/29-echanger-deux-caracteres

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_028-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Échanger deux caractères » ?

- **A ✅** Un échange simple est une brique utile pour manipuler ou inverser des chaînes.
- **B ❌** Compiler un fichier source et nommer l’exécutable.
- **C ✅** Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.
- **D ❌** Indique une absence de valeur de retour ou de paramètres selon le contexte.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/29-echanger-deux-caracteres

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_029 — Principe d'inversion d'une chaîne

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/30-principe-d-inversion-d-une-chaine)

### V1-N09_029-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre. » ?

- **A ❌** Pointeur (pointer)
- **B ❌** Type pointé
- **C ✅** Principe d'inversion d'une chaîne
- **D ❌** Indices de tableau

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/30-principe-d-inversion-d-une-chaine

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_029-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Principe d'inversion d'une chaîne » ?

- **A ✅** Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.
- **B ❌** int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.
- **C ❌** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **D ❌** Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int.

**Réponse proposée :** A. Le résumé de la fiche indique : Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/30-principe-d-inversion-d-une-chaine

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_029-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Principe d'inversion d'une chaîne » ?

- **A ❌** a[5] ne désigne pas un élément de ce tableau.
- **B ❌** L’arithmétique des pointeurs doit rester dans les limites du même tableau, ou juste après.
- **C ✅** Cette fiche décrit une méthode de raisonnement, sans résoudre intégralement un exercice.
- **D ❌** Toujours initialiser un pointeur avant de le déréférencer.

**Réponse proposée :** C. La fiche indique : Cette fiche décrit une méthode de raisonnement, sans résoudre intégralement un exercice.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/30-principe-d-inversion-d-une-chaine

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_029-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Principe d'inversion d'une chaîne » ?

- **A ❌** Entier décimal / caractère / réel avec six décimales.
- **B ✅** Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.
- **C ❌** Compile vers un fichier assembleur .s, sans assembler ni effectuer l’édition de liens.
- **D ✅** Cette fiche décrit une méthode de raisonnement, sans résoudre intégralement un exercice.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/30-principe-d-inversion-d-une-chaine

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_030 — malloc — allocation dynamique

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique)

### V1-N09_030-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue). » ?

- **A ✅** malloc — allocation dynamique
- **B ❌** Tailles des pointeurs
- **C ❌** sizeof(tableau)
- **D ❌** * dans une déclaration

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_030-02 — description

**Une seule bonne réponse**

Quelle description caractérise « malloc — allocation dynamique » ?

- **A ❌** sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur.
- **B ❌** int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré.
- **C ❌** Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme.
- **D ✅** malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue).

**Réponse proposée :** D. Le résumé de la fiche indique : malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue).

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_030-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « malloc — allocation dynamique » ?

- **A ❌** Ne jamais coder en dur une taille de pointeur à partir de suppositions.
- **B ❌** Avec plusieurs variables déclarées sur une même ligne, chaque déclarateur doit être lu séparément.
- **C ❌** Dans un paramètre de fonction déclaré int a[], a est traité comme un pointeur : sizeof(a) n’y mesure pas le tableau d’origine.
- **D ✅** Vérifier p != NULL avant de le déréférencer. malloc ne met pas les octets à zéro ; chaque allocation réussie doit être libérée une fois quand elle n’est plus utile.

**Réponse proposée :** D. La fiche indique : Vérifier p != NULL avant de le déréférencer. malloc ne met pas les octets à zéro ; chaque allocation réussie doit être libérée une fois quand elle n’est plus utile.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_030-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « malloc — allocation dynamique » ?

- **A ❌** Définition nécessaire introuvable lors de l’édition de liens.
- **B ✅** malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue).
- **C ❌** puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.
- **D ✅** Vérifier p != NULL avant de le déréférencer. malloc ne met pas les octets à zéro ; chaque allocation réussie doit être libérée une fois quand elle n’est plus utile.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_031 — free — libérer la mémoire

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire)

### V1-N09_031-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL. » ?

- **A ❌** Valeur de p, *p et &p
- **B ✅** free — libérer la mémoire
- **C ❌** Notation équivalente
- **D ❌** Tableau

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_031-02 — description

**Une seule bonne réponse**

Quelle description caractérise « free — libérer la mémoire » ?

- **A ✅** free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.
- **B ❌** p contient une adresse ; *p est la valeur pointée ; &p est l’adresse mémoire du pointeur lui-même.
- **C ❌** Pour un tableau a, a[2] désigne le même élément que *(a + 2).
- **D ❌** Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.

**Réponse proposée :** A. Le résumé de la fiche indique : free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_031-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « free — libérer la mémoire » ?

- **A ❌** Cette équivalence ne rend pas valides les indices hors limites.
- **B ❌** Ne confonds pas la case qui contient une adresse avec la case située à cette adresse.
- **C ❌** Les accès à l’extérieur du tableau sont invalides.
- **D ✅** Ne jamais appeler free sur une variable locale ou une adresse non allouée dynamiquement ; éviter les doubles free et toute utilisation après free. La mise à NULL d’un pointeur ne corrige pas d’éventuels alias.

**Réponse proposée :** D. La fiche indique : Ne jamais appeler free sur une variable locale ou une adresse non allouée dynamiquement ; éviter les doubles free et toute utilisation après free. La mise à NULL d’un pointeur ne corrige pas d’éventuels alias.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_031-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « free — libérer la mémoire » ?

- **A ❌** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **B ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **C ✅** Ne jamais appeler free sur une variable locale ou une adresse non allouée dynamiquement ; éviter les doubles free et toute utilisation après free. La mise à NULL d’un pointeur ne corrige pas d’éventuels alias.
- **D ✅** free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_032 — Allocation automatique — variables locales

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/33-allocation-automatique-variables-locales)

### V1-N09_032-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free. » ?

- **A ❌** %s avec printf
- **B ✅** Allocation automatique — variables locales
- **C ❌** sizeof
- **D ❌** Conversion tableau → pointeur

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/33-allocation-automatique-variables-locales

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_032-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Allocation automatique — variables locales » ?

- **A ✅** Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.
- **B ❌** Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.
- **C ❌** sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier.
- **D ❌** Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.

**Réponse proposée :** A. Le résumé de la fiche indique : Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/33-allocation-automatique-variables-locales

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_032-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Allocation automatique — variables locales » ?

- **A ❌** Utiliser %zu pour afficher une valeur de type size_t.
- **B ❌** Une chaîne non terminée correctement peut provoquer un accès mémoire invalide.
- **C ❌** Cette conversion ne se produit pas dans certains contextes, notamment sizeof(a) et &a.
- **D ✅** Ne pas retourner l’adresse d’un tableau local pour l’utiliser après le retour de la fonction. Ne jamais appeler free sur une variable ou un tableau automatique.

**Réponse proposée :** D. La fiche indique : Ne pas retourner l’adresse d’un tableau local pour l’utiliser après le retour de la fonction. Ne jamais appeler free sur une variable ou un tableau automatique.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/33-allocation-automatique-variables-locales

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_032-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Allocation automatique — variables locales » ?

- **A ❌** Permet de choisir le nom du fichier de sortie, par exemple gcc main.c -o cisfun.
- **B ✅** Ne pas retourner l’adresse d’un tableau local pour l’utiliser après le retour de la fonction. Ne jamais appeler free sur une variable ou un tableau automatique.
- **C ✅** Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.
- **D ❌** Une fonction de type char peut renvoyer un caractère, par exemple return 'H';.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/33-allocation-automatique-variables-locales

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_033 — Chaîne littérale et tableau de char

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/34-chaine-litterale-et-tableau-de-char)

### V1-N09_033-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable. » ?

- **A ❌** Parcourir un tableau
- **B ❌** Arithmétique des pointeurs
- **C ❌** Passer une adresse à une fonction
- **D ✅** Chaîne littérale et tableau de char

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/34-chaine-litterale-et-tableau-de-char

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_033-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Chaîne littérale et tableau de char » ?

- **A ❌** Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.
- **B ❌** Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1.
- **C ✅** Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable.
- **D ❌** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.

**Réponse proposée :** C. Le résumé de la fiche indique : Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/34-chaine-litterale-et-tableau-de-char

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_033-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Chaîne littérale et tableau de char » ?

- **A ❌** La fonction doit recevoir une adresse valide avant de déréférencer p.
- **B ❌** Le déplacement n’est défini que dans le même tableau, ou une position juste après.
- **C ❌** Évite les indices négatifs et les accès au-delà de la dernière case.
- **D ✅** Ne pas écrire dans une chaîne littérale. const char *p protège contre cette modification ; char s[] crée un tableau modifiable distinct.

**Réponse proposée :** D. La fiche indique : Ne pas écrire dans une chaîne littérale. const char *p protège contre cette modification ; char s[] crée un tableau modifiable distinct.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/34-chaine-litterale-et-tableau-de-char

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_033-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Chaîne littérale et tableau de char » ?

- **A ❌** Dennis Ritchie a conçu le langage C aux Bell Labs au début des années 1970 ; il a aussi joué un rôle majeur dans le développement d’Unix.
- **B ❌** signed permet des valeurs négatives et positives ; unsigned ne représente que des valeurs non négatives.
- **C ✅** Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable.
- **D ✅** Ne pas écrire dans une chaîne littérale. const char *p protège contre cette modification ; char s[] crée un tableau modifiable distinct.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/34-chaine-litterale-et-tableau-de-char

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_034 — malloc : vérifier NULL

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/35-malloc-verifier-null)

### V1-N09_034-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé. » ?

- **A ❌** Tableau ≠ pointeur
- **B ✅** malloc : vérifier NULL
- **C ❌** Caractère nul
- **D ❌** Principe d'inversion d'une chaîne

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/35-malloc-verifier-null

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_034-02 — description

**Une seule bonne réponse**

Quelle description caractérise « malloc : vérifier NULL » ?

- **A ✅** Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.
- **B ❌** Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.
- **C ❌** \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.
- **D ❌** Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation.

**Réponse proposée :** A. Le résumé de la fiche indique : Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/35-malloc-verifier-null

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_034-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « malloc : vérifier NULL » ?

- **A ❌** Cette fiche décrit une méthode de raisonnement, sans résoudre intégralement un exercice.
- **B ✅** Toujours contrôler p == NULL avant de déréférencer p. N’utilise pas de boucle d’allocations géantes pour tester artificiellement un échec.
- **C ❌** Les fonctions sur les chaînes doivent pouvoir trouver le terminateur nul.
- **D ❌** sizeof(a) et sizeof(p) ne mesurent pas la même chose.

**Réponse proposée :** B. La fiche indique : Toujours contrôler p == NULL avant de déréférencer p. N’utilise pas de boucle d’allocations géantes pour tester artificiellement un échec.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/35-malloc-verifier-null

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_034-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « malloc : vérifier NULL » ?

- **A ❌** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.
- **B ✅** Toujours contrôler p == NULL avant de déréférencer p. N’utilise pas de boucle d’allocations géantes pour tester artificiellement un échec.
- **C ✅** Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.
- **D ❌** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/35-malloc-verifier-null

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_035 — Fuite mémoire — allocation perdue

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/36-fuite-memoire-allocation-perdue)

### V1-N09_035-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire. » ?

- **A ❌** Initialisation d'un tableau
- **B ✅** Fuite mémoire — allocation perdue
- **C ❌** Allocation automatique — variables locales
- **D ❌** &tableau

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/36-fuite-memoire-allocation-perdue

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_035-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Fuite mémoire — allocation perdue » ?

- **A ❌** &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent.
- **B ❌** Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30};
- **C ❌** Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.
- **D ✅** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.

**Réponse proposée :** D. Le résumé de la fiche indique : Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/36-fuite-memoire-allocation-perdue

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_035-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Fuite mémoire — allocation perdue » ?

- **A ❌** Le type de &a est un pointeur vers tableau de 5 int.
- **B ✅** Memory leak = fuite mémoire. Avec Valgrind, « definitely lost » indique un bloc inaccessible, « still reachable » un bloc encore pointé à la sortie. Le système récupère généralement la mémoire à la fin du processus, mais cela ne corrige pas une fuite pendant son fonctionnement.
- **C ❌** Ne pas retourner l’adresse d’un tableau local pour l’utiliser après le retour de la fonction. Ne jamais appeler free sur une variable ou un tableau automatique.
- **D ❌** Un tableau existant ne se réaffecte pas avec l'opérateur = comme une variable scalaire.

**Réponse proposée :** B. La fiche indique : Memory leak = fuite mémoire. Avec Valgrind, « definitely lost » indique un bloc inaccessible, « still reachable » un bloc encore pointé à la sortie. Le système récupère généralement la mémoire à la fin du processus, mais cela ne corrige pas une fuite pendant son fonctionnement.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/36-fuite-memoire-allocation-perdue

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_035-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Fuite mémoire — allocation perdue » ?

- **A ✅** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.
- **B ✅** Memory leak = fuite mémoire. Avec Valgrind, « definitely lost » indique un bloc inaccessible, « still reachable » un bloc encore pointé à la sortie. Le système récupère généralement la mémoire à la fin du processus, mais cela ne corrige pas une fuite pendant son fonctionnement.
- **C ❌** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.
- **D ❌** Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/36-fuite-memoire-allocation-perdue

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_036 — Valgrind — détecter les fuites

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/37-valgrind-detecter-les-fuites)

### V1-N09_036-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code. » ?

- **A ❌** Fuite mémoire — allocation perdue
- **B ❌** Chaîne de caractères en C
- **C ❌** Échanger deux caractères
- **D ✅** Valgrind — détecter les fuites

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/37-valgrind-detecter-les-fuites

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_036-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Valgrind — détecter les fuites » ?

- **A ✅** Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code.
- **B ❌** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.
- **C ❌** Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.
- **D ❌** Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.

**Réponse proposée :** A. Le résumé de la fiche indique : Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/37-valgrind-detecter-les-fuites

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_036-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Valgrind — détecter les fuites » ?

- **A ❌** Memory leak = fuite mémoire. Avec Valgrind, « definitely lost » indique un bloc inaccessible, « still reachable » un bloc encore pointé à la sortie. Le système récupère généralement la mémoire à la fin du processus, mais cela ne corrige pas une fuite pendant son fonctionnement.
- **B ✅** Valgrind s’utilise dans le terminal sur un programme compilé, pas comme un #include C. « ERROR SUMMARY: 0 errors » seul ne suffit pas : consulter aussi les catégories de fuites. L’outil ne vérifie que les chemins réellement exécutés.
- **C ❌** Un échange simple est une brique utile pour manipuler ou inverser des chaînes.
- **D ❌** Toutes les suites de char ne sont pas nécessairement des chaînes valides.

**Réponse proposée :** B. La fiche indique : Valgrind s’utilise dans le terminal sur un programme compilé, pas comme un #include C. « ERROR SUMMARY: 0 errors » seul ne suffit pas : consulter aussi les catégories de fuites. L’outil ne vérifie que les chemins réellement exécutés.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/37-valgrind-detecter-les-fuites

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_036-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Valgrind — détecter les fuites » ?

- **A ❌** fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.
- **B ✅** Valgrind s’utilise dans le terminal sur un programme compilé, pas comme un #include C. « ERROR SUMMARY: 0 errors » seul ne suffit pas : consulter aussi les catégories de fuites. L’outil ne vérifie que les chemins réellement exécutés.
- **C ✅** Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code.
- **D ❌** Reste par 2 ; permet de tester la parité.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/37-valgrind-detecter-les-fuites

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_037 — Chaînes littérales et .rodata (avancé)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/38-chaines-litterales-et-rodata-avance)

### V1-N09_037-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation. » ?

- **A ✅** Chaînes littérales et .rodata (avancé)
- **B ❌** strlen, sizeof et terminateur nul
- **C ❌** Exercices d’observation
- **D ❌** free — libérer la mémoire

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/38-chaines-litterales-et-rodata-avance

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_037-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Chaînes littérales et .rodata (avancé) » ?

- **A ❌** Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse.
- **B ❌** free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.
- **C ✅** Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation.
- **D ❌** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.

**Réponse proposée :** C. Le résumé de la fiche indique : Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/38-chaines-litterales-et-rodata-avance

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_037-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Chaînes littérales et .rodata (avancé) » ?

- **A ❌** Ne jamais appeler free sur une variable locale ou une adresse non allouée dynamiquement ; éviter les doubles free et toute utilisation après free. La mise à NULL d’un pointeur ne corrige pas d’éventuels alias.
- **B ❌** Réponse : n vaut 8. Essaie ensuite d’expliquer pourquoi, plutôt que de retenir le chiffre.
- **C ❌** Pour le littéral : sizeof("Best School") = 12, strlen("Best School") = 11. Pour un pointeur char *p, sizeof(p) ne mesure jamais la longueur de la chaîne. malloc(sizeof("Best School") + 1) réserve 13 octets : c’est suffisant, sans être nécessaire. strlen n'est sûr que pour une chaîne correctement terminée : il n'empêche pas un débordement lors de la saisie.
- **D ✅** Notion avancée : .rodata est un détail courant de l’implémentation, pas une garantie universelle du langage C. Les optimisations peuvent modifier l’apparence des données dans l’exécutable.

**Réponse proposée :** D. La fiche indique : Notion avancée : .rodata est un détail courant de l’implémentation, pas une garantie universelle du langage C. Les optimisations peuvent modifier l’apparence des données dans l’exécutable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/38-chaines-litterales-et-rodata-avance

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_037-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Chaînes littérales et .rodata (avancé) » ?

- **A ❌** Conserve les deux derniers chiffres d’un entier positif.
- **B ✅** Notion avancée : .rodata est un détail courant de l’implémentation, pas une garantie universelle du langage C. Les optimisations peuvent modifier l’apparence des données dans l’exécutable.
- **C ❌** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.
- **D ✅** Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/38-chaines-litterales-et-rodata-avance

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_038 — malloc et sizeof : allouer le bon nombre d’octets

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/39-malloc-et-sizeof-allouer-le-bon-nombre-d-octets)

### V1-N09_038-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits. » ?

- **A ❌** malloc : vérifier NULL
- **B ❌** Pile et tas : durée de vie des allocations
- **C ❌** Tableau à deux dimensions
- **D ✅** malloc et sizeof : allouer le bon nombre d’octets

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/39-malloc-et-sizeof-allouer-le-bon-nombre-d-octets

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_038-02 — description

**Une seule bonne réponse**

Quelle description caractérise « malloc et sizeof : allouer le bon nombre d’octets » ?

- **A ✅** Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits.
- **B ❌** int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.
- **C ❌** Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.
- **D ❌** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.

**Réponse proposée :** A. Le résumé de la fiche indique : Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/39-malloc-et-sizeof-allouer-le-bon-nombre-d-octets

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_038-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « malloc et sizeof : allouer le bon nombre d’octets » ?

- **A ✅** sizeof(int) indique la taille d’un int ; sizeof *p celle du type pointé. Le nombre 64 du matériel ne donne pas la taille d’un int. Si n est variable, vérifier également le risque de débordement de n * sizeof *p.
- **B ❌** Toujours contrôler p == NULL avant de déréférencer p. N’utilise pas de boucle d’allocations géantes pour tester artificiellement un échec.
- **C ❌** Pile/stack : objets automatiques et appels, dans les implémentations usuelles. Tas/heap : blocs obtenus via malloc/calloc/realloc, libérés explicitement. Durée de vie statique : objets static. Ne jamais faire free(&local) ou free sur un tableau static.
- **D ❌** Le nombre de colonnes fait partie du type utilisé pour manipuler ce tableau.

**Réponse proposée :** A. La fiche indique : sizeof(int) indique la taille d’un int ; sizeof *p celle du type pointé. Le nombre 64 du matériel ne donne pas la taille d’un int. Si n est variable, vérifier également le risque de débordement de n * sizeof *p.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/39-malloc-et-sizeof-allouer-le-bon-nombre-d-octets

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_038-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « malloc et sizeof : allouer le bon nombre d’octets » ?

- **A ❌** Reste : 5.
- **B ✅** Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits.
- **C ✅** sizeof(int) indique la taille d’un int ; sizeof *p celle du type pointé. Le nombre 64 du matériel ne donne pas la taille d’un int. Si n est variable, vérifier également le risque de débordement de n * sizeof *p.
- **D ❌** Quotient entier tronqué vers zéro.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/39-malloc-et-sizeof-allouer-le-bon-nombre-d-octets

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_039 — strlen, sizeof et terminateur nul

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul)

### V1-N09_039-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'. » ?

- **A ❌** realloc — redimensionner une allocation
- **B ❌** malloc — allocation dynamique
- **C ❌** Chaînes littérales et .rodata (avancé)
- **D ✅** strlen, sizeof et terminateur nul

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_039-02 — description

**Une seule bonne réponse**

Quelle description caractérise « strlen, sizeof et terminateur nul » ?

- **A ❌** Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation.
- **B ❌** realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec.
- **C ✅** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.
- **D ❌** malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue).

**Réponse proposée :** C. Le résumé de la fiche indique : strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_039-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « strlen, sizeof et terminateur nul » ?

- **A ✅** Pour le littéral : sizeof("Best School") = 12, strlen("Best School") = 11. Pour un pointeur char *p, sizeof(p) ne mesure jamais la longueur de la chaîne. malloc(sizeof("Best School") + 1) réserve 13 octets : c’est suffisant, sans être nécessaire. strlen n'est sûr que pour une chaîne correctement terminée : il n'empêche pas un débordement lors de la saisie.
- **B ❌** Vérifier p != NULL avant de le déréférencer. malloc ne met pas les octets à zéro ; chaque allocation réussie doit être libérée une fois quand elle n’est plus utile.
- **C ❌** Notion avancée : .rodata est un détail courant de l’implémentation, pas une garantie universelle du langage C. Les optimisations peuvent modifier l’apparence des données dans l’exécutable.
- **D ❌** Le piège classique : p = realloc(p, taille); peut faire perdre le bloc initial sur échec. Avec tmp, l’ancien pointeur reste disponible. Ne pas utiliser l’ancienne adresse après une réussite, même si la valeur numérique semble identique.

**Réponse proposée :** A. La fiche indique : Pour le littéral : sizeof("Best School") = 12, strlen("Best School") = 11. Pour un pointeur char *p, sizeof(p) ne mesure jamais la longueur de la chaîne. malloc(sizeof("Best School") + 1) réserve 13 octets : c’est suffisant, sans être nécessaire. strlen n'est sûr que pour une chaîne correctement terminée : il n'empêche pas un débordement lors de la saisie.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_039-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strlen, sizeof et terminateur nul » ?

- **A ❌** Utiliser l’ancienne valeur, puis retirer 1.
- **B ✅** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.
- **C ❌** Supprime le dernier chiffre d’un entier positif.
- **D ✅** Pour le littéral : sizeof("Best School") = 12, strlen("Best School") = 11. Pour un pointeur char *p, sizeof(p) ne mesure jamais la longueur de la chaîne. malloc(sizeof("Best School") + 1) réserve 13 octets : c’est suffisant, sans être nécessaire. strlen n'est sûr que pour une chaîne correctement terminée : il n'empêche pas un débordement lors de la saisie.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_040 — strcpy : copier dans un espace existant

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/41-strcpy-copier-dans-un-espace-existant)

### V1-N09_040-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place. » ?

- **A ❌** strdup : copie allouée dynamiquement
- **B ✅** strcpy : copier dans un espace existant
- **C ❌** Chaîne littérale et tableau de char
- **D ❌** calloc() — allouer et initialiser à zéro

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/41-strcpy-copier-dans-un-espace-existant

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_040-02 — description

**Une seule bonne réponse**

Quelle description caractérise « strcpy : copier dans un espace existant » ?

- **A ❌** strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat.
- **B ❌** Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable.
- **C ❌** calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free.
- **D ✅** strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place.

**Réponse proposée :** D. Le résumé de la fiche indique : strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/41-strcpy-copier-dans-un-espace-existant

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_040-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « strcpy : copier dans un espace existant » ?

- **A ❌** Ne pas écrire dans une chaîne littérale. const char *p protège contre cette modification ; char s[] crée un tableau modifiable distinct.
- **B ❌** strcpy copie vers une zone existante ; strdup crée une nouvelle zone allouée. Sous GNU89, strdup est une fonction POSIX, pas une fonction du C89 standard.
- **C ❌** calloc remet les octets du bloc à zéro, mais n'empêche ni un accès hors limites ni l'utilisation du bloc après free. Le résultat peut être NULL si l'allocation échoue.
- **D ✅** strcpy ne réalise jamais malloc à ta place. Il faut prévoir strlen(src) + 1 cases char, y compris '\0', et éviter les zones qui se chevauchent.

**Réponse proposée :** D. La fiche indique : strcpy ne réalise jamais malloc à ta place. Il faut prévoir strlen(src) + 1 cases char, y compris '\0', et éviter les zones qui se chevauchent.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/41-strcpy-copier-dans-un-espace-existant

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_040-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strcpy : copier dans un espace existant » ?

- **A ✅** strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place.
- **B ❌** Reste : 2.
- **C ✅** strcpy ne réalise jamais malloc à ta place. Il faut prévoir strlen(src) + 1 cases char, y compris '\0', et éviter les zones qui se chevauchent.
- **D ❌** Affiche 87654321 si on affiche i dans le corps.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/41-strcpy-copier-dans-un-espace-existant

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_041 — strdup : copie allouée dynamiquement

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/42-strdup-copie-allouee-dynamiquement)

### V1-N09_041-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat. » ?

- **A ❌** Pointeur non initialisé : comportement indéfini
- **B ❌** Valgrind — détecter les fuites
- **C ❌** Double free — ne pas libérer deux fois
- **D ✅** strdup : copie allouée dynamiquement

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/42-strdup-copie-allouee-dynamiquement

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_041-02 — description

**Une seule bonne réponse**

Quelle description caractérise « strdup : copie allouée dynamiquement » ?

- **A ❌** Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code.
- **B ✅** strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat.
- **C ❌** Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.
- **D ❌** Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.

**Réponse proposée :** B. Le résumé de la fiche indique : strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/42-strdup-copie-allouee-dynamiquement

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_041-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « strdup : copie allouée dynamiquement » ?

- **A ✅** strcpy copie vers une zone existante ; strdup crée une nouvelle zone allouée. Sous GNU89, strdup est une fonction POSIX, pas une fonction du C89 standard.
- **B ❌** Valgrind s’utilise dans le terminal sur un programme compilé, pas comme un #include C. « ERROR SUMMARY: 0 errors » seul ne suffit pas : consulter aussi les catégories de fuites. L’outil ne vérifie que les chemins réellement exécutés.
- **C ❌** Ne pas utiliser free deux fois sur une même allocation. L'exemple appelle free sur p puis sur NULL : ce n'est pas une double libération du bloc. Mettre p à NULL ne sécurise pas les alias éventuels. Un double free peut venir d'une ownership ambiguë ou de deux chemins de nettoyage ; chercher les chemins réels avant de conclure.
- **D ❌** Un segfault est une conséquence fréquente, jamais une garantie du langage. Un programme qui compile peut contenir un comportement indéfini à l’exécution.

**Réponse proposée :** A. La fiche indique : strcpy copie vers une zone existante ; strdup crée une nouvelle zone allouée. Sous GNU89, strdup est une fonction POSIX, pas une fonction du C89 standard.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/42-strdup-copie-allouee-dynamiquement

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_041-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strdup : copie allouée dynamiquement » ?

- **A ✅** strcpy copie vers une zone existante ; strdup crée une nouvelle zone allouée. Sous GNU89, strdup est une fonction POSIX, pas une fonction du C89 standard.
- **B ❌** Ajouter 1, puis utiliser la nouvelle valeur.
- **C ✅** strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat.
- **D ❌** Tester de petits cas et lire les avertissements du compilateur aide à comprendre une erreur sans recopier une solution.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/42-strdup-copie-allouee-dynamiquement

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_042 — Pile et tas : durée de vie des allocations

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/43-pile-et-tas-duree-de-vie-des-allocations)

### V1-N09_042-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique. » ?

- **A ❌** strlen, sizeof et terminateur nul
- **B ❌** strncpy() — copie limitée et terminaison
- **C ❌** memcpy() ou memmove() — zones qui se recouvrent
- **D ✅** Pile et tas : durée de vie des allocations

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/43-pile-et-tas-duree-de-vie-des-allocations · https://man7.org/linux/man-pages/man3/malloc.3.html · https://man7.org/linux/man-pages/man2/getrlimit.2.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_042-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Pile et tas : durée de vie des allocations » ?

- **A ✅** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.
- **B ❌** memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher.
- **C ❌** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.
- **D ❌** strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide.

**Réponse proposée :** A. Le résumé de la fiche indique : Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/43-pile-et-tas-duree-de-vie-des-allocations · https://man7.org/linux/man-pages/man3/malloc.3.html · https://man7.org/linux/man-pages/man2/getrlimit.2.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_042-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Pile et tas : durée de vie des allocations » ?

- **A ❌** memcpy sur des plages qui se chevauchent a un comportement indéfini ; memmove est prévue pour ce cas. Vérifier la capacité de destination et compter les octets copiés, y compris '\0' pour une chaîne.
- **B ✅** Pile/stack : objets automatiques et appels, dans les implémentations usuelles. Tas/heap : blocs obtenus via malloc/calloc/realloc, libérés explicitement. Durée de vie statique : objets static. Ne jamais faire free(&local) ou free sur un tableau static.
- **C ❌** Le troisième argument limite la copie, mais ne réserve pas automatiquement une place pour '\0'. Ici « Bonjour » devient « Bonjo » : pas de débordement, mais une troncature. Pour une copie complète, vérifier la capacité avant de copier.
- **D ❌** Pour le littéral : sizeof("Best School") = 12, strlen("Best School") = 11. Pour un pointeur char *p, sizeof(p) ne mesure jamais la longueur de la chaîne. malloc(sizeof("Best School") + 1) réserve 13 octets : c’est suffisant, sans être nécessaire. strlen n'est sûr que pour une chaîne correctement terminée : il n'empêche pas un débordement lors de la saisie.

**Réponse proposée :** B. La fiche indique : Pile/stack : objets automatiques et appels, dans les implémentations usuelles. Tas/heap : blocs obtenus via malloc/calloc/realloc, libérés explicitement. Durée de vie statique : objets static. Ne jamais faire free(&local) ou free sur un tableau static.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/43-pile-et-tas-duree-de-vie-des-allocations · https://man7.org/linux/man-pages/man3/malloc.3.html · https://man7.org/linux/man-pages/man2/getrlimit.2.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_042-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Pile et tas : durée de vie des allocations » ?

- **A ❌** Utiliser des noms compréhensibles, une indentation cohérente et des commentaires utiles plutôt que paraphraser chaque instruction.
- **B ❌** Affiche 876543210 si on affiche i dans le corps.
- **C ✅** Pile/stack : objets automatiques et appels, dans les implémentations usuelles. Tas/heap : blocs obtenus via malloc/calloc/realloc, libérés explicitement. Durée de vie statique : objets static. Ne jamais faire free(&local) ou free sur un tableau static.
- **D ✅** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/43-pile-et-tas-duree-de-vie-des-allocations · https://man7.org/linux/man-pages/man3/malloc.3.html · https://man7.org/linux/man-pages/man2/getrlimit.2.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_043 — free : quelles adresses peut-on libérer ?

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/44-free-quelles-adresses-peut-on-liberer)

### V1-N09_043-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « free accepte NULL ou un pointeur valide obtenu par une allocation dynamique compatible ; ni un littéral ni un tableau local ne se libèrent avec free. » ?

- **A ❌** Pile et tas : durée de vie des allocations
- **B ❌** Use-after-free — réutiliser un bloc libéré
- **C ❌** Stack overflow — épuisement de la pile d'appels
- **D ✅** free : quelles adresses peut-on libérer ?

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/44-free-quelles-adresses-peut-on-liberer

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_043-02 — description

**Une seule bonne réponse**

Quelle description caractérise « free : quelles adresses peut-on libérer ? » ?

- **A ✅** free accepte NULL ou un pointeur valide obtenu par une allocation dynamique compatible ; ni un littéral ni un tableau local ne se libèrent avec free.
- **B ❌** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.
- **C ❌** Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux.
- **D ❌** Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini.

**Réponse proposée :** A. Le résumé de la fiche indique : free accepte NULL ou un pointeur valide obtenu par une allocation dynamique compatible ; ni un littéral ni un tableau local ne se libèrent avec free.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/44-free-quelles-adresses-peut-on-liberer

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_043-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « free : quelles adresses peut-on libérer ? » ?

- **A ❌** Pile/stack : objets automatiques et appels, dans les implémentations usuelles. Tas/heap : blocs obtenus via malloc/calloc/realloc, libérés explicitement. Durée de vie statique : objets static. Ne jamais faire free(&local) ou free sur un tableau static.
- **B ❌** Une récursion sans cas d'arrêt peut épuiser la pile ; une grande variable locale peut également poser problème. Stack overflow et stack buffer overflow ne désignent pas la même erreur.
- **C ❌** Après free, aucun alias vers le bloc ne doit servir à accéder aux anciennes données. Un test sans crash ne prouve pas que l'accès serait autorisé.
- **D ✅** Ne libère jamais un littéral, l’adresse d’un objet automatique ou le même bloc deux fois. free(NULL) est autorisé, mais ne rend pas valide un ancien pointeur libéré.

**Réponse proposée :** D. La fiche indique : Ne libère jamais un littéral, l’adresse d’un objet automatique ou le même bloc deux fois. free(NULL) est autorisé, mais ne rend pas valide un ancien pointeur libéré.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/44-free-quelles-adresses-peut-on-liberer

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_043-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « free : quelles adresses peut-on libérer ? » ?

- **A ✅** free accepte NULL ou un pointeur valide obtenu par une allocation dynamique compatible ; ni un littéral ni un tableau local ne se libèrent avec free.
- **B ❌** Une fonction C doit posséder une signature adaptée : type de retour, nom, liste de paramètres.
- **C ❌** Le base bundle est l'ensemble de fichiers de départ fourni pour un exercice ; son audit consiste à vérifier les hypothèses, les entrées et les responsabilités mémoire avant d'émettre un diagnostic.
- **D ✅** Ne libère jamais un littéral, l’adresse d’un objet automatique ou le même bloc deux fois. free(NULL) est autorisé, mais ne rend pas valide un ancien pointeur libéré.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/44-free-quelles-adresses-peut-on-liberer

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_044 — Pointeur non initialisé : comportement indéfini

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/45-pointeur-non-initialise-comportement-indefini)

### V1-N09_044-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault. » ?

- **A ❌** Segfault — faute de segmentation
- **B ✅** Pointeur non initialisé : comportement indéfini
- **C ❌** Valgrind Memcheck — comprendre les alertes
- **D ❌** memcpy() — copier des octets sans chevauchement

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/45-pointeur-non-initialise-comportement-indefini

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_044-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Pointeur non initialisé : comportement indéfini » ?

- **A ✅** Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.
- **B ❌** Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.
- **C ❌** memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement.
- **D ❌** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.

**Réponse proposée :** A. Le résumé de la fiche indique : Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/45-pointeur-non-initialise-comportement-indefini

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_044-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Pointeur non initialisé : comportement indéfini » ?

- **A ✅** Un segfault est une conséquence fréquente, jamais une garantie du langage. Un programme qui compile peut contenir un comportement indéfini à l’exécution.
- **B ❌** memcpy ne garantit ni le terminateur '\0', ni la capacité, ni l'absence de chevauchement : le développeur doit vérifier ces conditions avant l'appel. Pour déplacer des octets avec recouvrement, utiliser memmove.
- **C ❌** La première erreur affichée peut provoquer les suivantes. Consulter la pile des appels, les lignes indiquées par -g et le contexte des allocations/libérations. Un « 0 errors » sur un test n'est pas une preuve générale d'absence de bugs. Exemple : « definitely lost: 32 bytes in 1 blocks » = 1 bloc de 32 octets définitivement perdu. Ces labels en majuscules sont des cat
- **D ❌** Un segfault est un symptôme d’accès invalide détecté pendant l’exécution, pas une garantie systématique du C. Les outils de diagnostic aident, mais un test qui réussit ne prouve pas l’absence de comportement indéfini.

**Réponse proposée :** A. La fiche indique : Un segfault est une conséquence fréquente, jamais une garantie du langage. Un programme qui compile peut contenir un comportement indéfini à l’exécution.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/45-pointeur-non-initialise-comportement-indefini

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_044-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Pointeur non initialisé : comportement indéfini » ?

- **A ✅** Un segfault est une conséquence fréquente, jamais une garantie du langage. Un programme qui compile peut contenir un comportement indéfini à l’exécution.
- **B ✅** Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.
- **C ❌** Si p est une variable de type struct point (l’objet lui-même), p.x lit ou modifie son membre x. Le point s’emploie sur l’objet, pas directement sur son adresse.
- **D ❌** Le préprocesseur prépare le texte, le compilateur produit du code, l’assembleur génère des objets, et l’éditeur de liens crée l’exécutable.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/45-pointeur-non-initialise-comportement-indefini

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_045 — realloc — redimensionner une allocation

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation)

### V1-N09_045-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec. » ?

- **A ❌** Buffer overflow — dépassement de tampon
- **B ✅** realloc — redimensionner une allocation
- **C ❌** Tampon fixe, statique et dynamique — emplacement et durée de vie
- **D ❌** Raw pointer — pointeur brut en C

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_045-02 — description

**Une seule bonne réponse**

Quelle description caractérise « realloc — redimensionner une allocation » ?

- **A ✅** realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec.
- **B ❌** Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier.
- **C ❌** Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.
- **D ❌** Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.

**Réponse proposée :** A. Le résumé de la fiche indique : realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_045-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « realloc — redimensionner une allocation » ?

- **A ❌** Pour une chaîne, le tableau doit accueillir strlen(source) + 1 octets. Un programme qui ne plante pas n'est pas forcément correct : une écriture hors limites est déjà un bug.
- **B ❌** Taille et durée de vie ne sont pas synonymes : char local[8] est fixe et automatique ; static char stable[8] est fixe et de durée de vie statique ; malloc(8) crée un bloc dynamique de huit octets. Ne jamais appeler free sur local ou stable.
- **C ❌** Un pointeur de type int * est une adresse typée, pas une preuve que le bloc est accessible, ni une indication de propriété. Le terme raw pointer ne désigne pas une autre syntaxe du C.
- **D ✅** Le piège classique : p = realloc(p, taille); peut faire perdre le bloc initial sur échec. Avec tmp, l’ancien pointeur reste disponible. Ne pas utiliser l’ancienne adresse après une réussite, même si la valeur numérique semble identique.

**Réponse proposée :** D. La fiche indique : Le piège classique : p = realloc(p, taille); peut faire perdre le bloc initial sur échec. Avec tmp, l’ancien pointeur reste disponible. Ne pas utiliser l’ancienne adresse après une réussite, même si la valeur numérique semble identique.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_045-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « realloc — redimensionner une allocation » ?

- **A ❌** Un invariant est une condition que le programme doit préserver à des moments définis ; en sécurité mémoire, il exprime notamment les bornes et la validité des pointeurs.
- **B ❌** Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.
- **C ✅** Le piège classique : p = realloc(p, taille); peut faire perdre le bloc initial sur échec. Avec tmp, l’ancien pointeur reste disponible. Ne pas utiliser l’ancienne adresse après une réussite, même si la valeur numérique semble identique.
- **D ✅** realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_046 — Segfault — faute de segmentation

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/47-segfault-faute-de-segmentation)

### V1-N09_046-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal. » ?

- **A ❌** Débordement du calcul de taille avant malloc
- **B ✅** Segfault — faute de segmentation
- **C ❌** strlen sans terminateur nul — lecture hors limites
- **D ❌** Pointeur de fonction — déclarer une signature

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/47-segfault-faute-de-segmentation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_046-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Segfault — faute de segmentation » ?

- **A ❌** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.
- **B ✅** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.
- **C ❌** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.
- **D ❌** int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *.

**Réponse proposée :** B. Le résumé de la fiche indique : Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/47-segfault-faute-de-segmentation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_046-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Segfault — faute de segmentation » ?

- **A ❌** strlen n'est pas un contrôle de taille pour une mémoire arbitraire. Vérifier l'existence de '\0' dans les limites connues avant de traiter un tampon comme une chaîne. Ne pas confondre strlen et sizeof.
- **B ✅** Un segfault est un symptôme d’accès invalide détecté pendant l’exécution, pas une garantie systématique du C. Les outils de diagnostic aident, mais un test qui réussit ne prouve pas l’absence de comportement indéfini.
- **C ❌** Ne pas multiplier deux tailles non fiables avant d'avoir vérifié le risque de dépassement. malloc vérifie la demande reçue, mais ne peut pas corriger un calcul de taille qui a déjà débordé.
- **D ❌** Bien lire les parenthèses : int (*f)(int) est un pointeur de fonction ; int *f(int) est une fonction renvoyant int *. Ne pas confondre avec int *.

**Réponse proposée :** B. La fiche indique : Un segfault est un symptôme d’accès invalide détecté pendant l’exécution, pas une garantie systématique du C. Les outils de diagnostic aident, mais un test qui réussit ne prouve pas l’absence de comportement indéfini.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/47-segfault-faute-de-segmentation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_046-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Segfault — faute de segmentation » ?

- **A ✅** Un segfault est un symptôme d’accès invalide détecté pendant l’exécution, pas une garantie systématique du C. Les outils de diagnostic aident, mais un test qui réussit ne prouve pas l’absence de comportement indéfini.
- **B ❌** Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres.
- **C ❌** « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type.
- **D ✅** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/47-segfault-faute-de-segmentation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_047 — strncpy() — copie limitée et terminaison

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/48-strncpy-copie-limitee-et-terminaison)

### V1-N09_047-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide. » ?

- **A ❌** Tableau de pointeurs de fonctions — choisir une opération
- **B ❌** Dangling pointer — pointeur vers un objet qui n'existe plus
- **C ❌** Dépassement de tampon sur la pile — erreur avant malloc
- **D ✅** strncpy() — copie limitée et terminaison

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/48-strncpy-copie-limitee-et-terminaison · https://man7.org/linux/man-pages/man3/strncpy.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_047-02 — description

**Une seule bonne réponse**

Quelle description caractérise « strncpy() — copie limitée et terminaison » ?

- **A ❌** Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.
- **B ❌** Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if.
- **C ✅** strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide.
- **D ❌** Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.

**Réponse proposée :** C. Le résumé de la fiche indique : strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/48-strncpy-copie-limitee-et-terminaison · https://man7.org/linux/man-pages/man3/strncpy.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_047-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « strncpy() — copie limitée et terminaison » ?

- **A ❌** VRAI : un pointeur vers un bloc libéré ne permet plus d'accéder à ce bloc, immédiatement après free. FAUX : p = NULL protège automatiquement les autres pointeurs qui désignent l'ancien bloc. Un pointeur n'est pas forcément valide jusqu'à la fin du programme.
- **B ✅** Le troisième argument limite la copie, mais ne réserve pas automatiquement une place pour '\0'. Ici « Bonjour » devient « Bonjo » : pas de débordement, mais une troncature. Pour une copie complète, vérifier la capacité avant de copier.
- **C ❌** Dans la question du lab, la bonne raison est que « corruption may have already occurred during input reading ». Corriger la copie après coup n'annule pas un débordement déjà produit. Vérifie la longueur lors de la LECTURE, et refuse les lignes incomplètes si nécessaire.
- **D ❌** operations[index] est un pointeur de fonction, pas le résultat d'une fonction. Toujours valider l'indice et la non-nullité avant l'appel.

**Réponse proposée :** B. La fiche indique : Le troisième argument limite la copie, mais ne réserve pas automatiquement une place pour '\0'. Ici « Bonjour » devient « Bonjo » : pas de débordement, mais une troncature. Pour une copie complète, vérifier la capacité avant de copier.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/48-strncpy-copie-limitee-et-terminaison · https://man7.org/linux/man-pages/man3/strncpy.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_047-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strncpy() — copie limitée et terminaison » ?

- **A ✅** strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide.
- **B ❌** Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};.
- **C ✅** Le troisième argument limite la copie, mais ne réserve pas automatiquement une place pour '\0'. Ici « Bonjour » devient « Bonjo » : pas de débordement, mais une troncature. Pour une copie complète, vérifier la capacité avant de copier.
- **D ❌** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/48-strncpy-copie-limitee-et-terminaison · https://man7.org/linux/man-pages/man3/strncpy.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_048 — calloc() — allouer et initialiser à zéro

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/49-calloc-allouer-et-initialiser-a-zero)

### V1-N09_048-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free. » ?

- **A ❌** Pointeur (pointer)
- **B ❌** Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites
- **C ❌** Valgrind : « definitely lost » et les octets perdus
- **D ✅** calloc() — allouer et initialiser à zéro

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/49-calloc-allouer-et-initialiser-a-zero · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_048-02 — description

**Une seule bonne réponse**

Quelle description caractérise « calloc() — allouer et initialiser à zéro » ?

- **A ✅** calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free.
- **B ❌** « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine.
- **C ❌** Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int.
- **D ❌** INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.

**Réponse proposée :** A. Le résumé de la fiche indique : calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/49-calloc-allouer-et-initialiser-a-zero · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_048-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « calloc() — allouer et initialiser à zéro » ?

- **A ❌** 32 bytes = le volume perdu, 1 blocks = le nombre de blocs perdus. « Definitely lost » signifie fuite certaine : il faut corriger la gestion du pointeur ou l'absence de free. L'exemple fourni est volontairement sans fuite.
- **B ❌** Toujours initialiser un pointeur avant de le déréférencer.
- **C ❌** Une fuite indirecte n'est pas la même chose qu'une fuite certaine directe ; un use-after-free peut apparaître comme un Invalid read/write. Les labels INVALID_WRITE, UNINITIALIZED_VALUE, etc. ne sont pas tous des messages émis mot pour mot par Valgrind.
- **D ✅** calloc remet les octets du bloc à zéro, mais n'empêche ni un accès hors limites ni l'utilisation du bloc après free. Le résultat peut être NULL si l'allocation échoue.

**Réponse proposée :** D. La fiche indique : calloc remet les octets du bloc à zéro, mais n'empêche ni un accès hors limites ni l'utilisation du bloc après free. Le résultat peut être NULL si l'allocation échoue.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/49-calloc-allouer-et-initialiser-a-zero · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_048-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « calloc() — allouer et initialiser à zéro » ?

- **A ❌** Un membre peut être lui-même une struct : p.position.x traverse deux niveaux.
- **B ❌** sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.
- **C ✅** calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free.
- **D ✅** calloc remet les octets du bloc à zéro, mais n'empêche ni un accès hors limites ni l'utilisation du bloc après free. Le résultat peut être NULL si l'allocation échoue.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/49-calloc-allouer-et-initialiser-a-zero · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_049 — Buffer overflow — dépassement de tampon

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/50-buffer-overflow-depassement-de-tampon)

### V1-N09_049-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier. » ?

- **A ✅** Buffer overflow — dépassement de tampon
- **B ❌** Ownership — qui est responsable de free() ?
- **C ❌** * dans une déclaration
- **D ❌** Callback — transmettre une fonction en paramètre

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/50-buffer-overflow-depassement-de-tampon · https://owasp.org/www-community/attacks/Buffer_overflow_attack · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87151983

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_049-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Buffer overflow — dépassement de tampon » ?

- **A ✅** Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier.
- **B ❌** int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré.
- **C ❌** Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.
- **D ❌** L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité.

**Réponse proposée :** A. Le résumé de la fiche indique : Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/50-buffer-overflow-depassement-de-tampon · https://owasp.org/www-community/attacks/Buffer_overflow_attack · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87151983

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_049-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Buffer overflow — dépassement de tampon » ?

- **A ❌** Avec plusieurs variables déclarées sur une même ligne, chaque déclarateur doit être lu séparément.
- **B ❌** VRAI : copier un pointeur dans plusieurs variables crée un risque de confusion de propriété. FAUX : cela transfère automatiquement la propriété ou duplique l'allocation. Seul le responsable désigné libère le bloc, une fois.
- **C ✅** Pour une chaîne, le tableau doit accueillir strlen(source) + 1 octets. Un programme qui ne plante pas n'est pas forcément correct : une écriture hors limites est déjà un bug.
- **D ❌** Un callback n'est pas forcément asynchrone : appliquer appelle ici directement afficher_double. La signature du paramètre doit correspondre à celle de la fonction.

**Réponse proposée :** C. La fiche indique : Pour une chaîne, le tableau doit accueillir strlen(source) + 1 octets. Un programme qui ne plante pas n'est pas forcément correct : une écriture hors limites est déjà un bug.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/50-buffer-overflow-depassement-de-tampon · https://owasp.org/www-community/attacks/Buffer_overflow_attack · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87151983

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_049-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Buffer overflow — dépassement de tampon » ?

- **A ❌** La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.
- **B ✅** Pour une chaîne, le tableau doit accueillir strlen(source) + 1 octets. Un programme qui ne plante pas n'est pas forcément correct : une écriture hors limites est déjà un bug.
- **C ❌** En passant struct point *p à une fonction, celle-ci peut modifier l’objet de l’appelant via p->x.
- **D ✅** Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/50-buffer-overflow-depassement-de-tampon · https://owasp.org/www-community/attacks/Buffer_overflow_attack · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87151983

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_050 — Use-after-free — réutiliser un bloc libéré

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/51-use-after-free-reutiliser-un-bloc-libere)

### V1-N09_050-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini. » ?

- **A ✅** Use-after-free — réutiliser un bloc libéré
- **B ❌** char * — pointeur vers un caractère ou une chaîne
- **C ❌** Valeur de p, *p et &p
- **D ❌** qsort() — comparateur passé par pointeur de fonction

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/51-use-after-free-reutiliser-un-bloc-libere · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152153

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_050-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Use-after-free — réutiliser un bloc libéré » ?

- **A ❌** qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.
- **B ❌** char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur.
- **C ✅** Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini.
- **D ❌** p contient une adresse ; *p est la valeur pointée ; &p est l’adresse mémoire du pointeur lui-même.

**Réponse proposée :** C. Le résumé de la fiche indique : Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/51-use-after-free-reutiliser-un-bloc-libere · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152153

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_050-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Use-after-free — réutiliser un bloc libéré » ?

- **A ❌** Le comparateur de qsort reçoit des pointeurs vers des éléments, pas les éléments eux-mêmes. Éviter return a-b si a et b sont des int susceptibles de déborder.
- **B ✅** Après free, aucun alias vers le bloc ne doit servir à accéder aux anciennes données. Un test sans crash ne prouve pas que l'accès serait autorisé.
- **C ❌** char * désigne un pointeur, char tableau[8] un tableau. sizeof(p) mesure le pointeur, et sizeof(tableau) mesure le tableau lorsqu'il est encore dans sa portée comme tableau. Un texte littéral est à traiter comme non modifiable.
- **D ❌** Ne confonds pas la case qui contient une adresse avec la case située à cette adresse.

**Réponse proposée :** B. La fiche indique : Après free, aucun alias vers le bloc ne doit servir à accéder aux anciennes données. Un test sans crash ne prouve pas que l'accès serait autorisé.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/51-use-after-free-reutiliser-un-bloc-libere · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152153

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_050-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Use-after-free — réutiliser un bloc libéré » ?

- **A ✅** Après free, aucun alias vers le bloc ne doit servir à accéder aux anciennes données. Un test sans crash ne prouve pas que l'accès serait autorisé.
- **B ❌** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.
- **C ✅** Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini.
- **D ❌** typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/51-use-after-free-reutiliser-un-bloc-libere · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152153

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_051 — Double free — ne pas libérer deux fois

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/52-double-free-ne-pas-liberer-deux-fois)

### V1-N09_051-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet. » ?

- **A ❌** & (opérateur d’adresse)
- **B ❌** Appeler un pointeur de fonction — f(x) ou (*f)(x)
- **C ❌** sizeof
- **D ✅** Double free — ne pas libérer deux fois

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/52-double-free-ne-pas-liberer-deux-fois · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_051-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Double free — ne pas libérer deux fois » ?

- **A ✅** Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.
- **B ❌** Pour un pointeur de fonction valide f, f(5) et (*f)(5) appellent la même fonction ; vérifier NULL avant l'appel.
- **C ❌** sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier.
- **D ❌** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.

**Réponse proposée :** A. Le résumé de la fiche indique : Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/52-double-free-ne-pas-liberer-deux-fois · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_051-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Double free — ne pas libérer deux fois » ?

- **A ❌** Utiliser %zu pour afficher une valeur de type size_t.
- **B ✅** Ne pas utiliser free deux fois sur une même allocation. L'exemple appelle free sur p puis sur NULL : ce n'est pas une double libération du bloc. Mettre p à NULL ne sécurise pas les alias éventuels. Un double free peut venir d'une ownership ambiguë ou de deux chemins de nettoyage ; chercher les chemins réels avant de conclure.
- **C ❌** Ne jamais appeler un pointeur NULL ou de signature incompatible. L'indirection explicite (*f)(x) et la forme directe f(x) sont équivalentes.
- **D ❌** Ne confonds pas &n (adresse de n) avec n (valeur de n).

**Réponse proposée :** B. La fiche indique : Ne pas utiliser free deux fois sur une même allocation. L'exemple appelle free sur p puis sur NULL : ce n'est pas une double libération du bloc. Mettre p à NULL ne sécurise pas les alias éventuels. Un double free peut venir d'une ownership ambiguë ou de deux chemins de nettoyage ; chercher les chemins réels avant de conclure.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/52-double-free-ne-pas-liberer-deux-fois · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_051-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Double free — ne pas libérer deux fois » ?

- **A ❌** Noyau du système d’exploitation ; interface entre logiciels et ressources matérielles.
- **B ✅** Ne pas utiliser free deux fois sur une même allocation. L'exemple appelle free sur p puis sur NULL : ce n'est pas une double libération du bloc. Mettre p à NULL ne sécurise pas les alias éventuels. Un double free peut venir d'une ownership ambiguë ou de deux chemins de nettoyage ; chercher les chemins réels avant de conclure.
- **C ✅** Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.
- **D ❌** Une struct peut contenir un pointeur vers son propre type, par exemple struct noeud *suivant.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/52-double-free-ne-pas-liberer-deux-fois · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_052 — Débordement du calcul de taille avant malloc

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/53-debordement-du-calcul-de-taille-avant-malloc)

### V1-N09_052-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite. » ?

- **A ❌** Modifier une valeur par un pointeur
- **B ❌** typedef d'un pointeur de fonction — simplifier les signatures
- **C ✅** Débordement du calcul de taille avant malloc
- **D ❌** Passer une adresse à une fonction

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/53-debordement-du-calcul-de-taille-avant-malloc · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152128

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_052-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Débordement du calcul de taille avant malloc » ?

- **A ❌** Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.
- **B ❌** Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.
- **C ❌** typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction.
- **D ✅** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.

**Réponse proposée :** D. Le résumé de la fiche indique : Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/53-debordement-du-calcul-de-taille-avant-malloc · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152128

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_052-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Débordement du calcul de taille avant malloc » ?

- **A ✅** Ne pas multiplier deux tailles non fiables avant d'avoir vérifié le risque de dépassement. malloc vérifie la demande reçue, mais ne peut pas corriger un calcul de taille qui a déjà débordé.
- **B ❌** p = &autreVariable changerait, à l’inverse, l’objet pointé.
- **C ❌** typedef définit un alias de type, pas une fonction ni une allocation. La signature doit rester compatible et les pointeurs peuvent valoir NULL si le contrat l'autorise.
- **D ❌** La fonction doit recevoir une adresse valide avant de déréférencer p.

**Réponse proposée :** A. La fiche indique : Ne pas multiplier deux tailles non fiables avant d'avoir vérifié le risque de dépassement. malloc vérifie la demande reçue, mais ne peut pas corriger un calcul de taille qui a déjà débordé.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/53-debordement-du-calcul-de-taille-avant-malloc · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152128

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_052-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Débordement du calcul de taille avant malloc » ?

- **A ✅** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.
- **B ✅** Ne pas multiplier deux tailles non fiables avant d'avoir vérifié le risque de dépassement. malloc vérifie la demande reçue, mais ne peut pas corriger un calcul de taille qui a déjà débordé.
- **C ❌** Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre.
- **D ❌** Interface graphique / interface en ligne de commande.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/53-debordement-du-calcul-de-taille-avant-malloc · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152128

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_053 — Valgrind Memcheck — comprendre les alertes

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/54-valgrind-memcheck-comprendre-les-alertes)

### V1-N09_053-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites. » ?

- **A ❌** Adresse mémoire
- **B ❌** Tableau ≠ pointeur
- **C ❌** %p avec printf
- **D ✅** Valgrind Memcheck — comprendre les alertes

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/54-valgrind-memcheck-comprendre-les-alertes · https://valgrind.org/docs/manual/mc-manual.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_053-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Valgrind Memcheck — comprendre les alertes » ?

- **A ❌** Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse.
- **B ❌** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).
- **C ✅** Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.
- **D ❌** Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation.

**Réponse proposée :** C. Le résumé de la fiche indique : Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/54-valgrind-memcheck-comprendre-les-alertes · https://valgrind.org/docs/manual/mc-manual.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_053-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Valgrind Memcheck — comprendre les alertes » ?

- **A ❌** sizeof(a) et sizeof(p) ne mesurent pas la même chose.
- **B ❌** L’adresse affichée peut changer d’une exécution à l’autre.
- **C ✅** La première erreur affichée peut provoquer les suivantes. Consulter la pile des appels, les lignes indiquées par -g et le contexte des allocations/libérations. Un « 0 errors » sur un test n'est pas une preuve générale d'absence de bugs. Exemple : « definitely lost: 32 bytes in 1 blocks » = 1 bloc de 32 octets définitivement perdu. Ces labels en majuscules sont des cat
- **D ❌** Le format exact de l’adresse affichée dépend de l’implémentation.

**Réponse proposée :** C. La fiche indique : La première erreur affichée peut provoquer les suivantes. Consulter la pile des appels, les lignes indiquées par -g et le contexte des allocations/libérations. Un « 0 errors » sur un test n'est pas une preuve générale d'absence de bugs. Exemple : « definitely lost: 32 bytes in 1 blocks » = 1 bloc de 32 octets définitivement perdu. Ces labels en majuscules sont des cat

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/54-valgrind-memcheck-comprendre-les-alertes · https://valgrind.org/docs/manual/mc-manual.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_053-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Valgrind Memcheck — comprendre les alertes » ?

- **A ❌** Gère les ressources, les processus, la mémoire, les fichiers et les périphériques.
- **B ❌** Shell courant sur Linux.
- **C ✅** Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.
- **D ✅** La première erreur affichée peut provoquer les suivantes. Consulter la pile des appels, les lignes indiquées par -g et le contexte des allocations/libérations. Un « 0 errors » sur un test n'est pas une preuve générale d'absence de bugs. Exemple : « definitely lost: 32 bytes in 1 blocks » = 1 bloc de 32 octets définitivement perdu. Ces labels en majuscules sont des cat

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/54-valgrind-memcheck-comprendre-les-alertes · https://valgrind.org/docs/manual/mc-manual.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_054 — memcpy() ou memmove() — zones qui se recouvrent

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/55-memcpy-ou-memmove-zones-qui-se-recouvrent)

### V1-N09_054-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher. » ?

- **A ✅** memcpy() ou memmove() — zones qui se recouvrent
- **B ❌** Passage d’arguments par valeur
- **C ❌** * dans une expression
- **D ❌** &tableau

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/55-memcpy-ou-memmove-zones-qui-se-recouvrent · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_054-02 — description

**Une seule bonne réponse**

Quelle description caractérise « memcpy() ou memmove() — zones qui se recouvrent » ?

- **A ❌** &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent.
- **B ❌** *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement.
- **C ✅** memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher.
- **D ❌** En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale.

**Réponse proposée :** C. Le résumé de la fiche indique : memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/55-memcpy-ou-memmove-zones-qui-se-recouvrent · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_054-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « memcpy() ou memmove() — zones qui se recouvrent » ?

- **A ❌** Pour modifier une variable de l’appelant, on peut transmettre son adresse.
- **B ✅** memcpy sur des plages qui se chevauchent a un comportement indéfini ; memmove est prévue pour ce cas. Vérifier la capacité de destination et compter les octets copiés, y compris '\0' pour une chaîne.
- **C ❌** Déréférencer un pointeur non initialisé ou invalide entraîne un comportement indéfini.
- **D ❌** Le type de &a est un pointeur vers tableau de 5 int.

**Réponse proposée :** B. La fiche indique : memcpy sur des plages qui se chevauchent a un comportement indéfini ; memmove est prévue pour ce cas. Vérifier la capacité de destination et compter les octets copiés, y compris '\0' pour une chaîne.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/55-memcpy-ou-memmove-zones-qui-se-recouvrent · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_054-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « memcpy() ou memmove() — zones qui se recouvrent » ?

- **A ❌** Sous-système Windows pour Linux : environnement Linux utilisable sur Windows.
- **B ✅** memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher.
- **C ❌** Dossier personnel de l’utilisateur.
- **D ✅** memcpy sur des plages qui se chevauchent a un comportement indéfini ; memmove est prévue pour ce cas. Vérifier la capacité de destination et compter les octets copiés, y compris '\0' pour une chaîne.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/55-memcpy-ou-memmove-zones-qui-se-recouvrent · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_055 — Dépassement de tampon sur la pile — erreur avant malloc

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/56-depassement-de-tampon-sur-la-pile-erreur-avant-malloc)

### V1-N09_055-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur. » ?

- **A ✅** Dépassement de tampon sur la pile — erreur avant malloc
- **B ❌** Type pointé
- **C ❌** Indices de tableau
- **D ❌** Chaîne de caractères en C

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/56-depassement-de-tampon-sur-la-pile-erreur-avant-malloc · https://community.owasp.org/vulnerabilities/Buffer_Overflow · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_055-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Dépassement de tampon sur la pile — erreur avant malloc » ?

- **A ❌** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **B ❌** int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.
- **C ❌** Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.
- **D ✅** Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.

**Réponse proposée :** D. Le résumé de la fiche indique : Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/56-depassement-de-tampon-sur-la-pile-erreur-avant-malloc · https://community.owasp.org/vulnerabilities/Buffer_Overflow · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_055-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Dépassement de tampon sur la pile — erreur avant malloc » ?

- **A ✅** Dans la question du lab, la bonne raison est que « corruption may have already occurred during input reading ». Corriger la copie après coup n'annule pas un débordement déjà produit. Vérifie la longueur lors de la LECTURE, et refuse les lignes incomplètes si nécessaire.
- **B ❌** L’arithmétique des pointeurs doit rester dans les limites du même tableau, ou juste après.
- **C ❌** a[5] ne désigne pas un élément de ce tableau.
- **D ❌** Toutes les suites de char ne sont pas nécessairement des chaînes valides.

**Réponse proposée :** A. La fiche indique : Dans la question du lab, la bonne raison est que « corruption may have already occurred during input reading ». Corriger la copie après coup n'annule pas un débordement déjà produit. Vérifie la longueur lors de la LECTURE, et refuse les lignes incomplètes si nécessaire.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/56-depassement-de-tampon-sur-la-pile-erreur-avant-malloc · https://community.owasp.org/vulnerabilities/Buffer_Overflow · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_055-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Dépassement de tampon sur la pile — erreur avant malloc » ?

- **A ❌** Dépend du répertoire actuel.
- **B ✅** Dans la question du lab, la bonne raison est que « corruption may have already occurred during input reading ». Corriger la copie après coup n'annule pas un débordement déjà produit. Vérifie la longueur lors de la LECTURE, et refuse les lignes incomplètes si nécessaire.
- **C ❌** Programme qui interprète les commandes et lance les autres programmes.
- **D ✅** Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/56-depassement-de-tampon-sur-la-pile-erreur-avant-malloc · https://community.owasp.org/vulnerabilities/Buffer_Overflow · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_056 — Tampon fixe, statique et dynamique — emplacement et durée de vie

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/57-tampon-fixe-statique-et-dynamique-emplacement-et-duree-de-vie)

### V1-N09_056-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes. » ?

- **A ❌** Tailles des pointeurs
- **B ❌** sizeof(tableau)
- **C ❌** Exercices d’observation
- **D ✅** Tampon fixe, statique et dynamique — emplacement et durée de vie

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/57-tampon-fixe-statique-et-dynamique-emplacement-et-duree-de-vie · https://man7.org/linux/man-pages/man3/malloc.3.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_056-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Tampon fixe, statique et dynamique — emplacement et durée de vie » ?

- **A ❌** Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme.
- **B ❌** Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse.
- **C ❌** sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur.
- **D ✅** Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.

**Réponse proposée :** D. Le résumé de la fiche indique : Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/57-tampon-fixe-statique-et-dynamique-emplacement-et-duree-de-vie · https://man7.org/linux/man-pages/man3/malloc.3.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_056-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Tampon fixe, statique et dynamique — emplacement et durée de vie » ?

- **A ✅** Taille et durée de vie ne sont pas synonymes : char local[8] est fixe et automatique ; static char stable[8] est fixe et de durée de vie statique ; malloc(8) crée un bloc dynamique de huit octets. Ne jamais appeler free sur local ou stable.
- **B ❌** Ne jamais coder en dur une taille de pointeur à partir de suppositions.
- **C ❌** Réponse : n vaut 8. Essaie ensuite d’expliquer pourquoi, plutôt que de retenir le chiffre.
- **D ❌** Dans un paramètre de fonction déclaré int a[], a est traité comme un pointeur : sizeof(a) n’y mesure pas le tableau d’origine.

**Réponse proposée :** A. La fiche indique : Taille et durée de vie ne sont pas synonymes : char local[8] est fixe et automatique ; static char stable[8] est fixe et de durée de vie statique ; malloc(8) crée un bloc dynamique de huit octets. Ne jamais appeler free sur local ou stable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/57-tampon-fixe-statique-et-dynamique-emplacement-et-duree-de-vie · https://man7.org/linux/man-pages/man3/malloc.3.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_056-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tampon fixe, statique et dynamique — emplacement et durée de vie » ?

- **A ✅** Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.
- **B ✅** Taille et durée de vie ne sont pas synonymes : char local[8] est fixe et automatique ; static char stable[8] est fixe et de durée de vie statique ; malloc(8) crée un bloc dynamique de huit octets. Ne jamais appeler free sur local ou stable.
- **C ❌** Début de l’arborescence Linux.
- **D ❌** Copier / déplacer-renommer / supprimer.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/57-tampon-fixe-statique-et-dynamique-emplacement-et-duree-de-vie · https://man7.org/linux/man-pages/man3/malloc.3.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_057 — Stack overflow — épuisement de la pile d'appels

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/58-stack-overflow-epuisement-de-la-pile-d-appels)

### V1-N09_057-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux. » ?

- **A ✅** Stack overflow — épuisement de la pile d'appels
- **B ❌** Tableau
- **C ❌** Notation équivalente
- **D ❌** Tableau à deux dimensions

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/58-stack-overflow-epuisement-de-la-pile-d-appels · https://man7.org/linux/man-pages/man2/getrlimit.2.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_057-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Stack overflow — épuisement de la pile d'appels » ?

- **A ❌** Pour un tableau a, a[2] désigne le même élément que *(a + 2).
- **B ❌** Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.
- **C ✅** Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux.
- **D ❌** int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.

**Réponse proposée :** C. Le résumé de la fiche indique : Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/58-stack-overflow-epuisement-de-la-pile-d-appels · https://man7.org/linux/man-pages/man2/getrlimit.2.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_057-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Stack overflow — épuisement de la pile d'appels » ?

- **A ✅** Une récursion sans cas d'arrêt peut épuiser la pile ; une grande variable locale peut également poser problème. Stack overflow et stack buffer overflow ne désignent pas la même erreur.
- **B ❌** Cette équivalence ne rend pas valides les indices hors limites.
- **C ❌** Les accès à l’extérieur du tableau sont invalides.
- **D ❌** Le nombre de colonnes fait partie du type utilisé pour manipuler ce tableau.

**Réponse proposée :** A. La fiche indique : Une récursion sans cas d'arrêt peut épuiser la pile ; une grande variable locale peut également poser problème. Stack overflow et stack buffer overflow ne désignent pas la même erreur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/58-stack-overflow-epuisement-de-la-pile-d-appels · https://man7.org/linux/man-pages/man2/getrlimit.2.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_057-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Stack overflow — épuisement de la pile d'appels » ?

- **A ✅** Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux.
- **B ❌** Changer les permissions / propriétaire / utiliser des privilèges élevés.
- **C ✅** Une récursion sans cas d'arrêt peut épuiser la pile ; une grande variable locale peut également poser problème. Stack overflow et stack buffer overflow ne désignent pas la même erreur.
- **D ❌** Part de /, indépendamment du répertoire actuel.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/58-stack-overflow-epuisement-de-la-pile-d-appels · https://man7.org/linux/man-pages/man2/getrlimit.2.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_058 — Valgrind : « definitely lost » et les octets perdus

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/59-valgrind-definitely-lost-et-les-octets-perdus)

### V1-N09_058-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine. » ?

- **A ✅** Valgrind : « definitely lost » et les octets perdus
- **B ❌** %s avec printf
- **C ❌** malloc — allocation dynamique
- **D ❌** Conversion tableau → pointeur

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/59-valgrind-definitely-lost-et-les-octets-perdus · https://valgrind.org/docs/manual/mc-manual.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_058-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Valgrind : « definitely lost » et les octets perdus » ?

- **A ❌** Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.
- **B ✅** « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine.
- **C ❌** malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue).
- **D ❌** Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.

**Réponse proposée :** B. Le résumé de la fiche indique : « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/59-valgrind-definitely-lost-et-les-octets-perdus · https://valgrind.org/docs/manual/mc-manual.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_058-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Valgrind : « definitely lost » et les octets perdus » ?

- **A ❌** Vérifier p != NULL avant de le déréférencer. malloc ne met pas les octets à zéro ; chaque allocation réussie doit être libérée une fois quand elle n’est plus utile.
- **B ✅** 32 bytes = le volume perdu, 1 blocks = le nombre de blocs perdus. « Definitely lost » signifie fuite certaine : il faut corriger la gestion du pointeur ou l'absence de free. L'exemple fourni est volontairement sans fuite.
- **C ❌** Une chaîne non terminée correctement peut provoquer un accès mémoire invalide.
- **D ❌** Cette conversion ne se produit pas dans certains contextes, notamment sizeof(a) et &a.

**Réponse proposée :** B. La fiche indique : 32 bytes = le volume perdu, 1 blocks = le nombre de blocs perdus. « Definitely lost » signifie fuite certaine : il faut corriger la gestion du pointeur ou l'absence de free. L'exemple fourni est volontairement sans fuite.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/59-valgrind-definitely-lost-et-les-octets-perdus · https://valgrind.org/docs/manual/mc-manual.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_058-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Valgrind : « definitely lost » et les octets perdus » ?

- **A ❌** Rediriger les erreurs / prendre un fichier comme entrée.
- **B ✅** 32 bytes = le volume perdu, 1 blocks = le nombre de blocs perdus. « Definitely lost » signifie fuite certaine : il faut corriger la gestion du pointeur ou l'absence de free. L'exemple fourni est volontairement sans fuite.
- **C ❌** Créer un dossier / créer un fichier vide ou actualiser sa date.
- **D ✅** « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/59-valgrind-definitely-lost-et-les-octets-perdus · https://valgrind.org/docs/manual/mc-manual.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_059 — strlen sans terminateur nul — lecture hors limites

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/60-strlen-sans-terminateur-nul-lecture-hors-limites)

### V1-N09_059-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone. » ?

- **A ✅** strlen sans terminateur nul — lecture hors limites
- **B ❌** Arithmétique des pointeurs
- **C ❌** Parcourir un tableau
- **D ❌** Chaîne littérale et tableau de char

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/60-strlen-sans-terminateur-nul-lecture-hors-limites · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_059-02 — description

**Une seule bonne réponse**

Quelle description caractérise « strlen sans terminateur nul — lecture hors limites » ?

- **A ❌** Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1.
- **B ❌** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.
- **C ✅** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.
- **D ❌** Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable.

**Réponse proposée :** C. Le résumé de la fiche indique : strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/60-strlen-sans-terminateur-nul-lecture-hors-limites · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_059-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « strlen sans terminateur nul — lecture hors limites » ?

- **A ❌** Le déplacement n’est défini que dans le même tableau, ou une position juste après.
- **B ✅** strlen n'est pas un contrôle de taille pour une mémoire arbitraire. Vérifier l'existence de '\0' dans les limites connues avant de traiter un tampon comme une chaîne. Ne pas confondre strlen et sizeof.
- **C ❌** Ne pas écrire dans une chaîne littérale. const char *p protège contre cette modification ; char s[] crée un tableau modifiable distinct.
- **D ❌** Évite les indices négatifs et les accès au-delà de la dernière case.

**Réponse proposée :** B. La fiche indique : strlen n'est pas un contrôle de taille pour une mémoire arbitraire. Vérifier l'existence de '\0' dans les limites connues avant de traiter un tampon comme une chaîne. Ne pas confondre strlen et sizeof.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/60-strlen-sans-terminateur-nul-lecture-hors-limites · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_059-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strlen sans terminateur nul — lecture hors limites » ?

- **A ✅** strlen n'est pas un contrôle de taille pour une mémoire arbitraire. Vérifier l'existence de '\0' dans les limites connues avant de traiter un tampon comme une chaîne. Ne pas confondre strlen et sizeof.
- **B ❌** r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).
- **C ✅** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.
- **D ❌** Rechercher / compter les lignes / transformer des caractères.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/60-strlen-sans-terminateur-nul-lecture-hors-limites · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_060 — memcpy() — copier des octets sans chevauchement

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/61-memcpy-copier-des-octets-sans-chevauchement)

### V1-N09_060-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement. » ?

- **A ❌** Caractère nul
- **B ❌** Principe d'inversion d'une chaîne
- **C ❌** Valgrind — détecter les fuites
- **D ✅** memcpy() — copier des octets sans chevauchement

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/61-memcpy-copier-des-octets-sans-chevauchement · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_060-02 — description

**Une seule bonne réponse**

Quelle description caractérise « memcpy() — copier des octets sans chevauchement » ?

- **A ❌** Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.
- **B ❌** \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.
- **C ❌** Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code.
- **D ✅** memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement.

**Réponse proposée :** D. Le résumé de la fiche indique : memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/61-memcpy-copier-des-octets-sans-chevauchement · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_060-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « memcpy() — copier des octets sans chevauchement » ?

- **A ❌** Valgrind s’utilise dans le terminal sur un programme compilé, pas comme un #include C. « ERROR SUMMARY: 0 errors » seul ne suffit pas : consulter aussi les catégories de fuites. L’outil ne vérifie que les chemins réellement exécutés.
- **B ❌** Cette fiche décrit une méthode de raisonnement, sans résoudre intégralement un exercice.
- **C ❌** Les fonctions sur les chaînes doivent pouvoir trouver le terminateur nul.
- **D ✅** memcpy ne garantit ni le terminateur '\0', ni la capacité, ni l'absence de chevauchement : le développeur doit vérifier ces conditions avant l'appel. Pour déplacer des octets avec recouvrement, utiliser memmove.

**Réponse proposée :** D. La fiche indique : memcpy ne garantit ni le terminateur '\0', ni la capacité, ni l'absence de chevauchement : le développeur doit vérifier ces conditions avant l'appel. Pour déplacer des octets avec recouvrement, utiliser memmove.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/61-memcpy-copier-des-octets-sans-chevauchement · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_060-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « memcpy() — copier des octets sans chevauchement » ?

- **A ✅** memcpy ne garantit ni le terminateur '\0', ni la capacité, ni l'absence de chevauchement : le développeur doit vérifier ces conditions avant l'appel. Pour déplacer des octets avec recouvrement, utiliser memmove.
- **B ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.
- **C ❌** Écraser un fichier avec la sortie / ajouter à la fin.
- **D ✅** memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/61-memcpy-copier-des-octets-sans-chevauchement · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_061 — Ownership — qui est responsable de free() ?

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/62-ownership-qui-est-responsable-de-free)

### V1-N09_061-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité. » ?

- **A ❌** strlen, sizeof et terminateur nul
- **B ❌** Initialisation d'un tableau
- **C ❌** Allocation automatique — variables locales
- **D ✅** Ownership — qui est responsable de free() ?

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/62-ownership-qui-est-responsable-de-free · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_061-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Ownership — qui est responsable de free() ? » ?

- **A ❌** Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.
- **B ✅** L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité.
- **C ❌** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.
- **D ❌** Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30};

**Réponse proposée :** B. Le résumé de la fiche indique : L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/62-ownership-qui-est-responsable-de-free · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_061-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Ownership — qui est responsable de free() ? » ?

- **A ❌** Pour le littéral : sizeof("Best School") = 12, strlen("Best School") = 11. Pour un pointeur char *p, sizeof(p) ne mesure jamais la longueur de la chaîne. malloc(sizeof("Best School") + 1) réserve 13 octets : c’est suffisant, sans être nécessaire. strlen n'est sûr que pour une chaîne correctement terminée : il n'empêche pas un débordement lors de la saisie.
- **B ❌** Ne pas retourner l’adresse d’un tableau local pour l’utiliser après le retour de la fonction. Ne jamais appeler free sur une variable ou un tableau automatique.
- **C ✅** VRAI : copier un pointeur dans plusieurs variables crée un risque de confusion de propriété. FAUX : cela transfère automatiquement la propriété ou duplique l'allocation. Seul le responsable désigné libère le bloc, une fois.
- **D ❌** Un tableau existant ne se réaffecte pas avec l'opérateur = comme une variable scalaire.

**Réponse proposée :** C. La fiche indique : VRAI : copier un pointeur dans plusieurs variables crée un risque de confusion de propriété. FAUX : cela transfère automatiquement la propriété ou duplique l'allocation. Seul le responsable désigné libère le bloc, une fois.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/62-ownership-qui-est-responsable-de-free · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_061-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Ownership — qui est responsable de free() ? » ?

- **A ❌** Variable définie dans le Shell en cours, non nécessairement exportée.
- **B ✅** L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité.
- **C ✅** VRAI : copier un pointeur dans plusieurs variables crée un risque de confusion de propriété. FAUX : cela transfère automatiquement la propriété ou duplique l'allocation. Seul le responsable désigné libère le bloc, une fois.
- **D ❌** Exécuter la commande suivante en cas de succès / en cas d’échec.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/62-ownership-qui-est-responsable-de-free · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_062 — Dangling pointer — pointeur vers un objet qui n'existe plus

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/63-dangling-pointer-pointeur-vers-un-objet-qui-n-existe-plus)

### V1-N09_062-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale. » ?

- **A ❌** Échanger deux caractères
- **B ❌** Pile et tas : durée de vie des allocations
- **C ❌** Fuite mémoire — allocation perdue
- **D ✅** Dangling pointer — pointeur vers un objet qui n'existe plus

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/63-dangling-pointer-pointeur-vers-un-objet-qui-n-existe-plus · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_062-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Dangling pointer — pointeur vers un objet qui n'existe plus » ?

- **A ✅** Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.
- **B ❌** Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.
- **C ❌** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.
- **D ❌** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.

**Réponse proposée :** A. Le résumé de la fiche indique : Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/63-dangling-pointer-pointeur-vers-un-objet-qui-n-existe-plus · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_062-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Dangling pointer — pointeur vers un objet qui n'existe plus » ?

- **A ❌** Pile/stack : objets automatiques et appels, dans les implémentations usuelles. Tas/heap : blocs obtenus via malloc/calloc/realloc, libérés explicitement. Durée de vie statique : objets static. Ne jamais faire free(&local) ou free sur un tableau static.
- **B ❌** Memory leak = fuite mémoire. Avec Valgrind, « definitely lost » indique un bloc inaccessible, « still reachable » un bloc encore pointé à la sortie. Le système récupère généralement la mémoire à la fin du processus, mais cela ne corrige pas une fuite pendant son fonctionnement.
- **C ❌** Un échange simple est une brique utile pour manipuler ou inverser des chaînes.
- **D ✅** VRAI : un pointeur vers un bloc libéré ne permet plus d'accéder à ce bloc, immédiatement après free. FAUX : p = NULL protège automatiquement les autres pointeurs qui désignent l'ancien bloc. Un pointeur n'est pas forcément valide jusqu'à la fin du programme.

**Réponse proposée :** D. La fiche indique : VRAI : un pointeur vers un bloc libéré ne permet plus d'accéder à ce bloc, immédiatement après free. FAUX : p = NULL protège automatiquement les autres pointeurs qui désignent l'ancien bloc. Un pointeur n'est pas forcément valide jusqu'à la fin du programme.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/63-dangling-pointer-pointeur-vers-un-objet-qui-n-existe-plus · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_062-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Dangling pointer — pointeur vers un objet qui n'existe plus » ?

- **A ❌** Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour.
- **B ❌** Exporter une variable / supprimer une variable ou fonction.
- **C ✅** Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.
- **D ✅** VRAI : un pointeur vers un bloc libéré ne permet plus d'accéder à ce bloc, immédiatement après free. FAUX : p = NULL protège automatiquement les autres pointeurs qui désignent l'ancien bloc. Un pointeur n'est pas forcément valide jusqu'à la fin du programme.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/63-dangling-pointer-pointeur-vers-un-objet-qui-n-existe-plus · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_063 — Raw pointer — pointeur brut en C

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/64-raw-pointer-pointeur-brut-en-c)

### V1-N09_063-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété. » ?

- **A ❌** malloc et sizeof : allouer le bon nombre d’octets
- **B ✅** Raw pointer — pointeur brut en C
- **C ❌** realloc — redimensionner une allocation
- **D ❌** free — libérer la mémoire

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/64-raw-pointer-pointeur-brut-en-c · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_063-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Raw pointer — pointeur brut en C » ?

- **A ✅** Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.
- **B ❌** Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits.
- **C ❌** realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec.
- **D ❌** free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.

**Réponse proposée :** A. Le résumé de la fiche indique : Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/64-raw-pointer-pointeur-brut-en-c · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_063-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Raw pointer — pointeur brut en C » ?

- **A ❌** Le piège classique : p = realloc(p, taille); peut faire perdre le bloc initial sur échec. Avec tmp, l’ancien pointeur reste disponible. Ne pas utiliser l’ancienne adresse après une réussite, même si la valeur numérique semble identique.
- **B ❌** sizeof(int) indique la taille d’un int ; sizeof *p celle du type pointé. Le nombre 64 du matériel ne donne pas la taille d’un int. Si n est variable, vérifier également le risque de débordement de n * sizeof *p.
- **C ❌** Ne jamais appeler free sur une variable locale ou une adresse non allouée dynamiquement ; éviter les doubles free et toute utilisation après free. La mise à NULL d’un pointeur ne corrige pas d’éventuels alias.
- **D ✅** Un pointeur de type int * est une adresse typée, pas une preuve que le bloc est accessible, ni une indication de propriété. Le terme raw pointer ne désigne pas une autre syntaxe du C.

**Réponse proposée :** D. La fiche indique : Un pointeur de type int * est une adresse typée, pas une preuve que le bloc est accessible, ni une indication de propriété. Le terme raw pointer ne désigne pas une autre syntaxe du C.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/64-raw-pointer-pointeur-brut-en-c · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_063-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Raw pointer — pointeur brut en C » ?

- **A ❌** Exécuter un script dans le Shell courant.
- **B ✅** Un pointeur de type int * est une adresse typée, pas une preuve que le bloc est accessible, ni une indication de propriété. Le terme raw pointer ne désigne pas une autre syntaxe du C.
- **C ✅** Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.
- **D ❌** BEST=School : pas d’espaces autour du =.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/64-raw-pointer-pointeur-brut-en-c · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_064 — char * — pointeur vers un caractère ou une chaîne

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/65-char-pointeur-vers-un-caractere-ou-une-chaine)

### V1-N09_064-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur. » ?

- **A ❌** calloc() — allouer et initialiser à zéro
- **B ❌** strdup : copie allouée dynamiquement
- **C ❌** malloc : vérifier NULL
- **D ✅** char * — pointeur vers un caractère ou une chaîne

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/65-char-pointeur-vers-un-caractere-ou-une-chaine · https://man7.org/linux/man-pages/man3/strlen.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_064-02 — description

**Une seule bonne réponse**

Quelle description caractérise « char * — pointeur vers un caractère ou une chaîne » ?

- **A ❌** calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free.
- **B ❌** Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.
- **C ✅** char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur.
- **D ❌** strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat.

**Réponse proposée :** C. Le résumé de la fiche indique : char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/65-char-pointeur-vers-un-caractere-ou-une-chaine · https://man7.org/linux/man-pages/man3/strlen.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_064-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « char * — pointeur vers un caractère ou une chaîne » ?

- **A ❌** calloc remet les octets du bloc à zéro, mais n'empêche ni un accès hors limites ni l'utilisation du bloc après free. Le résultat peut être NULL si l'allocation échoue.
- **B ❌** Toujours contrôler p == NULL avant de déréférencer p. N’utilise pas de boucle d’allocations géantes pour tester artificiellement un échec.
- **C ❌** strcpy copie vers une zone existante ; strdup crée une nouvelle zone allouée. Sous GNU89, strdup est une fonction POSIX, pas une fonction du C89 standard.
- **D ✅** char * désigne un pointeur, char tableau[8] un tableau. sizeof(p) mesure le pointeur, et sizeof(tableau) mesure le tableau lorsqu'il est encore dans sa portée comme tableau. Un texte littéral est à traiter comme non modifiable.

**Réponse proposée :** D. La fiche indique : char * désigne un pointeur, char tableau[8] un tableau. sizeof(p) mesure le pointeur, et sizeof(tableau) mesure le tableau lorsqu'il est encore dans sa portée comme tableau. Un texte littéral est à traiter comme non modifiable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/65-char-pointeur-vers-un-caractere-ou-une-chaine · https://man7.org/linux/man-pages/man3/strlen.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_064-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « char * — pointeur vers un caractère ou une chaîne » ?

- **A ❌** Variable exportée et transmise aux processus enfants.
- **B ✅** char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur.
- **C ❌** Substitution de commande : récupérer sa sortie.
- **D ✅** char * désigne un pointeur, char tableau[8] un tableau. sizeof(p) mesure le pointeur, et sizeof(tableau) mesure le tableau lorsqu'il est encore dans sa portée comme tableau. Un texte littéral est à traiter comme non modifiable.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/65-char-pointeur-vers-un-caractere-ou-une-chaine · https://man7.org/linux/man-pages/man3/strlen.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_065 — Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/66-diagnostics-memoire-invalid-write-uninitialized-value-et-fuites)

### V1-N09_065-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind. » ?

- **A ❌** Double free — ne pas libérer deux fois
- **B ❌** Pointeur non initialisé : comportement indéfini
- **C ❌** Chaînes littérales et .rodata (avancé)
- **D ✅** Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/66-diagnostics-memoire-invalid-write-uninitialized-value-et-fuites · https://valgrind.org/docs/manual/mc-manual.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_065-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites » ?

- **A ✅** INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.
- **B ❌** Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.
- **C ❌** Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.
- **D ❌** Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation.

**Réponse proposée :** A. Le résumé de la fiche indique : INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/66-diagnostics-memoire-invalid-write-uninitialized-value-et-fuites · https://valgrind.org/docs/manual/mc-manual.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_065-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites » ?

- **A ❌** Un segfault est une conséquence fréquente, jamais une garantie du langage. Un programme qui compile peut contenir un comportement indéfini à l’exécution.
- **B ✅** Une fuite indirecte n'est pas la même chose qu'une fuite certaine directe ; un use-after-free peut apparaître comme un Invalid read/write. Les labels INVALID_WRITE, UNINITIALIZED_VALUE, etc. ne sont pas tous des messages émis mot pour mot par Valgrind.
- **C ❌** Notion avancée : .rodata est un détail courant de l’implémentation, pas une garantie universelle du langage C. Les optimisations peuvent modifier l’apparence des données dans l’exécutable.
- **D ❌** Ne pas utiliser free deux fois sur une même allocation. L'exemple appelle free sur p puis sur NULL : ce n'est pas une double libération du bloc. Mettre p à NULL ne sécurise pas les alias éventuels. Un double free peut venir d'une ownership ambiguë ou de deux chemins de nettoyage ; chercher les chemins réels avant de conclure.

**Réponse proposée :** B. La fiche indique : Une fuite indirecte n'est pas la même chose qu'une fuite certaine directe ; un use-after-free peut apparaître comme un Invalid read/write. Les labels INVALID_WRITE, UNINITIALIZED_VALUE, etc. ne sont pas tous des messages émis mot pour mot par Valgrind.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/66-diagnostics-memoire-invalid-write-uninitialized-value-et-fuites · https://valgrind.org/docs/manual/mc-manual.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_065-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites » ?

- **A ✅** INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.
- **B ❌** Créer / retirer un raccourci de commande.
- **C ✅** Une fuite indirecte n'est pas la même chose qu'une fuite certaine directe ; un use-after-free peut apparaître comme un Invalid read/write. Les labels INVALID_WRITE, UNINITIALIZED_VALUE, etc. ne sont pas tous des messages émis mot pour mot par Valgrind.
- **D ❌** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/66-diagnostics-memoire-invalid-write-uninitialized-value-et-fuites · https://valgrind.org/docs/manual/mc-manual.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_066 — Pointeur de fonction — déclarer une signature

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/67-pointeur-de-fonction-declarer-une-signature)

### V1-N09_066-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *. » ?

- **A ❌** strcpy : copier dans un espace existant
- **B ❌** memcpy() ou memmove() — zones qui se recouvrent
- **C ✅** Pointeur de fonction — déclarer une signature
- **D ❌** strncpy() — copie limitée et terminaison

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/67-pointeur-de-fonction-declarer-une-signature · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_066-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Pointeur de fonction — déclarer une signature » ?

- **A ❌** memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher.
- **B ✅** int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *.
- **C ❌** strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place.
- **D ❌** strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide.

**Réponse proposée :** B. Le résumé de la fiche indique : int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/67-pointeur-de-fonction-declarer-une-signature · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_066-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Pointeur de fonction — déclarer une signature » ?

- **A ❌** strcpy ne réalise jamais malloc à ta place. Il faut prévoir strlen(src) + 1 cases char, y compris '\0', et éviter les zones qui se chevauchent.
- **B ✅** Bien lire les parenthèses : int (*f)(int) est un pointeur de fonction ; int *f(int) est une fonction renvoyant int *. Ne pas confondre avec int *.
- **C ❌** memcpy sur des plages qui se chevauchent a un comportement indéfini ; memmove est prévue pour ce cas. Vérifier la capacité de destination et compter les octets copiés, y compris '\0' pour une chaîne.
- **D ❌** Le troisième argument limite la copie, mais ne réserve pas automatiquement une place pour '\0'. Ici « Bonjour » devient « Bonjo » : pas de débordement, mais une troncature. Pour une copie complète, vérifier la capacité avant de copier.

**Réponse proposée :** B. La fiche indique : Bien lire les parenthèses : int (*f)(int) est un pointeur de fonction ; int *f(int) est une fonction renvoyant int *. Ne pas confondre avec int *.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/67-pointeur-de-fonction-declarer-une-signature · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_066-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Pointeur de fonction — déclarer une signature » ?

- **A ❌** Comparaisons.
- **B ❌** Lire la valeur / délimiter explicitement le nom.
- **C ✅** Bien lire les parenthèses : int (*f)(int) est un pointeur de fonction ; int *f(int) est une fonction renvoyant int *. Ne pas confondre avec int *.
- **D ✅** int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/67-pointeur-de-fonction-declarer-une-signature · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_067 — Appeler un pointeur de fonction — f(x) ou (*f)(x)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/68-appeler-un-pointeur-de-fonction-f-x-ou-f-x)

### V1-N09_067-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Pour un pointeur de fonction valide f, f(5) et (*f)(5) appellent la même fonction ; vérifier NULL avant l'appel. » ?

- **A ❌** free : quelles adresses peut-on libérer ?
- **B ✅** Appeler un pointeur de fonction — f(x) ou (*f)(x)
- **C ❌** Stack overflow — épuisement de la pile d'appels
- **D ❌** Use-after-free — réutiliser un bloc libéré

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/68-appeler-un-pointeur-de-fonction-f-x-ou-f-x · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_067-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Appeler un pointeur de fonction — f(x) ou (*f)(x) » ?

- **A ✅** Pour un pointeur de fonction valide f, f(5) et (*f)(5) appellent la même fonction ; vérifier NULL avant l'appel.
- **B ❌** free accepte NULL ou un pointeur valide obtenu par une allocation dynamique compatible ; ni un littéral ni un tableau local ne se libèrent avec free.
- **C ❌** Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux.
- **D ❌** Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini.

**Réponse proposée :** A. Le résumé de la fiche indique : Pour un pointeur de fonction valide f, f(5) et (*f)(5) appellent la même fonction ; vérifier NULL avant l'appel.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/68-appeler-un-pointeur-de-fonction-f-x-ou-f-x · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_067-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Appeler un pointeur de fonction — f(x) ou (*f)(x) » ?

- **A ❌** Une récursion sans cas d'arrêt peut épuiser la pile ; une grande variable locale peut également poser problème. Stack overflow et stack buffer overflow ne désignent pas la même erreur.
- **B ❌** Après free, aucun alias vers le bloc ne doit servir à accéder aux anciennes données. Un test sans crash ne prouve pas que l'accès serait autorisé.
- **C ✅** Ne jamais appeler un pointeur NULL ou de signature incompatible. L'indirection explicite (*f)(x) et la forme directe f(x) sont équivalentes.
- **D ❌** Ne libère jamais un littéral, l’adresse d’un objet automatique ou le même bloc deux fois. free(NULL) est autorisé, mais ne rend pas valide un ancien pointeur libéré.

**Réponse proposée :** C. La fiche indique : Ne jamais appeler un pointeur NULL ou de signature incompatible. L'indirection explicite (*f)(x) et la forme directe f(x) sont équivalentes.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/68-appeler-un-pointeur-de-fonction-f-x-ou-f-x · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_067-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Appeler un pointeur de fonction — f(x) ou (*f)(x) » ?

- **A ✅** Pour un pointeur de fonction valide f, f(5) et (*f)(5) appellent la même fonction ; vérifier NULL avant l'appel.
- **B ❌** Code retour / premier argument / nombre d’arguments positionnels.
- **C ✅** Ne jamais appeler un pointeur NULL ou de signature incompatible. L'indirection explicite (*f)(x) et la forme directe f(x) sont équivalentes.
- **D ❌** Teste sa condition avant chaque itération.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/68-appeler-un-pointeur-de-fonction-f-x-ou-f-x · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_068 — Callback — transmettre une fonction en paramètre

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/69-callback-transmettre-une-fonction-en-parametre)

### V1-N09_068-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu. » ?

- **A ❌** Segfault — faute de segmentation
- **B ✅** Callback — transmettre une fonction en paramètre
- **C ❌** memcpy() — copier des octets sans chevauchement
- **D ❌** Valgrind Memcheck — comprendre les alertes

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/69-callback-transmettre-une-fonction-en-parametre · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://web.stanford.edu/class/archive/cs/cs107/cs107.1214/lab4/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/ · https://boredzo.org/pointers/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_068-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Callback — transmettre une fonction en paramètre » ?

- **A ❌** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.
- **B ✅** Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.
- **C ❌** Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.
- **D ❌** memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement.

**Réponse proposée :** B. Le résumé de la fiche indique : Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/69-callback-transmettre-une-fonction-en-parametre · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://web.stanford.edu/class/archive/cs/cs107/cs107.1214/lab4/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/ · https://boredzo.org/pointers/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_068-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Callback — transmettre une fonction en paramètre » ?

- **A ❌** La première erreur affichée peut provoquer les suivantes. Consulter la pile des appels, les lignes indiquées par -g et le contexte des allocations/libérations. Un « 0 errors » sur un test n'est pas une preuve générale d'absence de bugs. Exemple : « definitely lost: 32 bytes in 1 blocks » = 1 bloc de 32 octets définitivement perdu. Ces labels en majuscules sont des cat
- **B ✅** Un callback n'est pas forcément asynchrone : appliquer appelle ici directement afficher_double. La signature du paramètre doit correspondre à celle de la fonction.
- **C ❌** memcpy ne garantit ni le terminateur '\0', ni la capacité, ni l'absence de chevauchement : le développeur doit vérifier ces conditions avant l'appel. Pour déplacer des octets avec recouvrement, utiliser memmove.
- **D ❌** Un segfault est un symptôme d’accès invalide détecté pendant l’exécution, pas une garantie systématique du C. Les outils de diagnostic aident, mais un test qui réussit ne prouve pas l’absence de comportement indéfini.

**Réponse proposée :** B. La fiche indique : Un callback n'est pas forcément asynchrone : appliquer appelle ici directement afficher_double. La signature du paramètre doit correspondre à celle de la fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/69-callback-transmettre-une-fonction-en-parametre · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://web.stanford.edu/class/archive/cs/cs107/cs107.1214/lab4/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/ · https://boredzo.org/pointers/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_068-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Callback — transmettre une fonction en paramètre » ?

- **A ✅** Un callback n'est pas forcément asynchrone : appliquer appelle ici directement afficher_double. La signature du paramètre doit correspondre à celle de la fonction.
- **B ✅** Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.
- **C ❌** Égalité / différence. Attention à ne pas confondre = et ==.
- **D ❌** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/69-callback-transmettre-une-fonction-en-parametre · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://web.stanford.edu/class/archive/cs/cs107/cs107.1214/lab4/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/ · https://boredzo.org/pointers/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_069 — Tableau de pointeurs de fonctions — choisir une opération

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/70-tableau-de-pointeurs-de-fonctions-choisir-une-operation)

### V1-N09_069-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if. » ?

- **A ❌** Tampon fixe, statique et dynamique — emplacement et durée de vie
- **B ✅** Tableau de pointeurs de fonctions — choisir une opération
- **C ❌** Raw pointer — pointeur brut en C
- **D ❌** Buffer overflow — dépassement de tampon

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/70-tableau-de-pointeurs-de-fonctions-choisir-une-operation · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_069-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Tableau de pointeurs de fonctions — choisir une opération » ?

- **A ❌** Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.
- **B ✅** Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if.
- **C ❌** Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.
- **D ❌** Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier.

**Réponse proposée :** B. Le résumé de la fiche indique : Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/70-tableau-de-pointeurs-de-fonctions-choisir-une-operation · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_069-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Tableau de pointeurs de fonctions — choisir une opération » ?

- **A ❌** Un pointeur de type int * est une adresse typée, pas une preuve que le bloc est accessible, ni une indication de propriété. Le terme raw pointer ne désigne pas une autre syntaxe du C.
- **B ✅** operations[index] est un pointeur de fonction, pas le résultat d'une fonction. Toujours valider l'indice et la non-nullité avant l'appel.
- **C ❌** Pour une chaîne, le tableau doit accueillir strlen(source) + 1 octets. Un programme qui ne plante pas n'est pas forcément correct : une écriture hors limites est déjà un bug.
- **D ❌** Taille et durée de vie ne sont pas synonymes : char local[8] est fixe et automatique ; static char stable[8] est fixe et de durée de vie statique ; malloc(8) crée un bloc dynamique de huit octets. Ne jamais appeler free sur local ou stable.

**Réponse proposée :** B. La fiche indique : operations[index] est un pointeur de fonction, pas le résultat d'une fonction. Toujours valider l'indice et la non-nullité avant l'appel.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/70-tableau-de-pointeurs-de-fonctions-choisir-une-operation · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_069-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tableau de pointeurs de fonctions — choisir une opération » ?

- **A ✅** operations[index] est un pointeur de fonction, pas le résultat d'une fonction. Toujours valider l'indice et la non-nullité avant l'appel.
- **B ❌** Initialisation, test, mise à jour ; forme compacte de boucle.
- **C ✅** Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if.
- **D ❌** Service d’hébergement et de collaboration pour des dépôts Git.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/70-tableau-de-pointeurs-de-fonctions-choisir-une-operation · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_070 — typedef d'un pointeur de fonction — simplifier les signatures

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/71-typedef-d-un-pointeur-de-fonction-simplifier-les-signatures)

### V1-N09_070-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction. » ?

- **A ❌** Pointeur de fonction — déclarer une signature
- **B ✅** typedef d'un pointeur de fonction — simplifier les signatures
- **C ❌** strlen sans terminateur nul — lecture hors limites
- **D ❌** Débordement du calcul de taille avant malloc

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/71-typedef-d-un-pointeur-de-fonction-simplifier-les-signatures · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://boredzo.org/pointers/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_070-02 — description

**Une seule bonne réponse**

Quelle description caractérise « typedef d'un pointeur de fonction — simplifier les signatures » ?

- **A ✅** typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction.
- **B ❌** int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *.
- **C ❌** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.
- **D ❌** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.

**Réponse proposée :** A. Le résumé de la fiche indique : typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/71-typedef-d-un-pointeur-de-fonction-simplifier-les-signatures · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://boredzo.org/pointers/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_070-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « typedef d'un pointeur de fonction — simplifier les signatures » ?

- **A ❌** Bien lire les parenthèses : int (*f)(int) est un pointeur de fonction ; int *f(int) est une fonction renvoyant int *. Ne pas confondre avec int *.
- **B ❌** Ne pas multiplier deux tailles non fiables avant d'avoir vérifié le risque de dépassement. malloc vérifie la demande reçue, mais ne peut pas corriger un calcul de taille qui a déjà débordé.
- **C ✅** typedef définit un alias de type, pas une fonction ni une allocation. La signature doit rester compatible et les pointeurs peuvent valoir NULL si le contrat l'autorise.
- **D ❌** strlen n'est pas un contrôle de taille pour une mémoire arbitraire. Vérifier l'existence de '\0' dans les limites connues avant de traiter un tampon comme une chaîne. Ne pas confondre strlen et sizeof.

**Réponse proposée :** C. La fiche indique : typedef définit un alias de type, pas une fonction ni une allocation. La signature doit rester compatible et les pointeurs peuvent valoir NULL si le contrat l'autorise.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/71-typedef-d-un-pointeur-de-fonction-simplifier-les-signatures · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://boredzo.org/pointers/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_070-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « typedef d'un pointeur de fonction — simplifier les signatures » ?

- **A ✅** typedef définit un alias de type, pas une fonction ni une allocation. La signature doit rester compatible et les pointeurs peuvent valoir NULL si le contrat l'autorise.
- **B ✅** typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction.
- **C ❌** Un passage dans une boucle.
- **D ❌** Instantané enregistré dans l’historique local.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/71-typedef-d-un-pointeur-de-fonction-simplifier-les-signatures · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://boredzo.org/pointers/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N09_071 — qsort() — comparateur passé par pointeur de fonction

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/72-qsort-comparateur-passe-par-pointeur-de-fonction)

### V1-N09_071-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive. » ?

- **A ✅** qsort() — comparateur passé par pointeur de fonction
- **B ❌** Dépassement de tampon sur la pile — erreur avant malloc
- **C ❌** Tableau de pointeurs de fonctions — choisir une opération
- **D ❌** Dangling pointer — pointeur vers un objet qui n'existe plus

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/72-qsort-comparateur-passe-par-pointeur-de-fonction · https://man7.org/linux/man-pages/man3/qsort.3.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_071-02 — description

**Une seule bonne réponse**

Quelle description caractérise « qsort() — comparateur passé par pointeur de fonction » ?

- **A ❌** Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.
- **B ❌** Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if.
- **C ✅** qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.
- **D ❌** Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.

**Réponse proposée :** C. Le résumé de la fiche indique : qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/72-qsort-comparateur-passe-par-pointeur-de-fonction · https://man7.org/linux/man-pages/man3/qsort.3.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_071-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « qsort() — comparateur passé par pointeur de fonction » ?

- **A ❌** operations[index] est un pointeur de fonction, pas le résultat d'une fonction. Toujours valider l'indice et la non-nullité avant l'appel.
- **B ❌** Dans la question du lab, la bonne raison est que « corruption may have already occurred during input reading ». Corriger la copie après coup n'annule pas un débordement déjà produit. Vérifie la longueur lors de la LECTURE, et refuse les lignes incomplètes si nécessaire.
- **C ❌** VRAI : un pointeur vers un bloc libéré ne permet plus d'accéder à ce bloc, immédiatement après free. FAUX : p = NULL protège automatiquement les autres pointeurs qui désignent l'ancien bloc. Un pointeur n'est pas forcément valide jusqu'à la fin du programme.
- **D ✅** Le comparateur de qsort reçoit des pointeurs vers des éléments, pas les éléments eux-mêmes. Éviter return a-b si a et b sont des int susceptibles de déborder.

**Réponse proposée :** D. La fiche indique : Le comparateur de qsort reçoit des pointeurs vers des éléments, pas les éléments eux-mêmes. Éviter return a-b si a et b sont des int susceptibles de déborder.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/72-qsort-comparateur-passe-par-pointeur-de-fonction · https://man7.org/linux/man-pages/man3/qsort.3.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N09_071-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « qsort() — comparateur passé par pointeur de fonction » ?

- **A ✅** qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.
- **B ❌** Logiciel de gestion de versions distribué.
- **C ❌** Git ne peut pas résoudre automatiquement des changements concurrents.
- **D ✅** Le comparateur de qsort reçoit des pointeurs vers des éléments, pas les éléments eux-mêmes. Éviter return a-b si a et b sont des int susceptibles de déborder.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/72-qsort-comparateur-passe-par-pointeur-de-fonction · https://man7.org/linux/man-pages/man3/qsort.3.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

