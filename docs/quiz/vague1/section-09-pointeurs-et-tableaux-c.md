# Banque de revue — Pointeurs et tableaux C

288 questions candidates couvrant 72 notions. **Toutes les réponses sont des propositions à vérifier indépendamment** ; elles sont dérivées des fiches existantes et peuvent contenir des distracteurs ambigus. **Ne rien publier sur le site.**

## N09_000 — Pointeur (pointer)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/1-pointeur-pointer)

### V1-N09_000-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int. » ?

- **A ✅** Pointeur (pointer)
- **B ❌** Raw pointer — pointeur brut en C
- **C ❌** typedef d'un pointeur de fonction — simplifier les signatures
- **D ❌** Tampon fixe, statique et dynamique — emplacement et durée de vie

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/1-pointeur-pointer

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_000-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Pointeur (pointer) » ?

- **A ❌** Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.
- **B ❌** Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.
- **C ❌** typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction.
- **D ✅** Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/1-pointeur-pointer

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_000-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Pointeur (pointer) » ?

- **A ✅** Toujours initialiser un pointeur avant de le déréférencer.
- **B ❌** Taille et durée de vie ne sont pas synonymes : char local[8] est fixe et automatique ; static char stable[8] est fixe et de durée de vie statique ; malloc(8) crée un bloc dynamique de huit octets. Ne jamais appeler free sur local ou stable.
- **C ❌** Un pointeur de type int * est une adresse typée, pas une preuve que le bloc est accessible, ni une indication de propriété. Le terme raw pointer ne désigne pas une autre syntaxe du C.
- **D ❌** typedef définit un alias de type, pas une fonction ni une allocation. La signature doit rester compatible et les pointeurs peuvent valoir NULL si le contrat l'autorise.

**Réponse candidate :** A · **Explication :** La fiche indique : Toujours initialiser un pointeur avant de le déréférencer.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/1-pointeur-pointer

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_000-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Pointeur (pointer) » ?

- **A ✅** Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int.
- **B ❌** typedef struct animal { int age; } animal_t; rend le type utilisable sous le nom animal_t.
- **C ❌** Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.
- **D ✅** Toujours initialiser un pointeur avant de le déréférencer.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/1-pointeur-pointer

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_001 — Adresse mémoire

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/2-adresse-memoire)

### V1-N09_001-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse. » ?

- **A ❌** strlen sans terminateur nul — lecture hors limites
- **B ✅** Adresse mémoire
- **C ❌** & (opérateur d’adresse)
- **D ❌** Pointeur de fonction — déclarer une signature

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/2-adresse-memoire

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_001-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Adresse mémoire » ?

- **A ✅** Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse.
- **B ❌** int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *.
- **C ❌** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.
- **D ❌** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/2-adresse-memoire

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_001-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Adresse mémoire » ?

- **A ❌** strlen n'est pas un contrôle de taille pour une mémoire arbitraire. Vérifier l'existence de '\0' dans les limites connues avant de traiter un tampon comme une chaîne. Ne pas confondre strlen et sizeof.
- **B ❌** Ne confonds pas &n (adresse de n) avec n (valeur de n).
- **C ❌** Bien lire les parenthèses : int (*f)(int) est un pointeur de fonction ; int *f(int) est une fonction renvoyant int *. Ne pas confondre avec int *.
- **D ✅** L’adresse affichée peut changer d’une exécution à l’autre.

**Réponse candidate :** D · **Explication :** La fiche indique : L’adresse affichée peut changer d’une exécution à l’autre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/2-adresse-memoire

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_001-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Adresse mémoire » ?

- **A ✅** L’adresse affichée peut changer d’une exécution à l’autre.
- **B ✅** Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse.
- **C ❌** malloc(sizeof *p) réserve assez d’octets pour un objet du type struct pointé par p.
- **D ❌** Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/2-adresse-memoire

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_002 — & (opérateur d’adresse)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/3-operateur-d-adresse)

### V1-N09_002-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « &n produit l’adresse de la variable n ; p = &n fait pointer p vers n. » ?

- **A ✅** & (opérateur d’adresse)
- **B ❌** Dangling pointer — pointeur vers un objet qui n'existe plus
- **C ❌** Tableau de pointeurs de fonctions — choisir une opération
- **D ❌** Modifier une valeur par un pointeur

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/3-operateur-d-adresse

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_002-02 · description

**Une seule bonne réponse**

Quelle description caractérise « & (opérateur d’adresse) » ?

- **A ❌** Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.
- **B ✅** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.
- **C ❌** Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.
- **D ❌** Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/3-operateur-d-adresse

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_002-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « & (opérateur d’adresse) » ?

- **A ❌** operations[index] est un pointeur de fonction, pas le résultat d'une fonction. Toujours valider l'indice et la non-nullité avant l'appel.
- **B ❌** p = &autreVariable changerait, à l’inverse, l’objet pointé.
- **C ✅** Ne confonds pas &n (adresse de n) avec n (valeur de n).
- **D ❌** VRAI : un pointeur vers un bloc libéré ne permet plus d'accéder à ce bloc, immédiatement après free. FAUX : p = NULL protège automatiquement les autres pointeurs qui désignent l'ancien bloc. Un pointeur n'est pas forcément valide jusqu'à la fin du programme.

**Réponse candidate :** C · **Explication :** La fiche indique : Ne confonds pas &n (adresse de n) avec n (valeur de n).

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/3-operateur-d-adresse

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_002-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « & (opérateur d’adresse) » ?

- **A ❌** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.
- **B ✅** Ne confonds pas &n (adresse de n) avec n (valeur de n).
- **C ✅** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.
- **D ❌** typedef struct point point; annonce un alias pour un type encore incomplet ; sa définition complète permet ensuite de créer point p.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/3-operateur-d-adresse

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_003 — * dans une déclaration

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration)

### V1-N09_003-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré. » ?

- **A ❌** Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites
- **B ❌** Pointeur (pointer)
- **C ❌** %p avec printf
- **D ✅** * dans une déclaration

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_003-02 · description

**Une seule bonne réponse**

Quelle description caractérise « * dans une déclaration » ?

- **A ✅** int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré.
- **B ❌** INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.
- **C ❌** Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int.
- **D ❌** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_003-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « * dans une déclaration » ?

- **A ❌** Une fuite indirecte n'est pas la même chose qu'une fuite certaine directe ; un use-after-free peut apparaître comme un Invalid read/write. Les labels INVALID_WRITE, UNINITIALIZED_VALUE, etc. ne sont pas tous des messages émis mot pour mot par Valgrind.
- **B ❌** Le format exact de l’adresse affichée dépend de l’implémentation.
- **C ✅** Avec plusieurs variables déclarées sur une même ligne, chaque déclarateur doit être lu séparément.
- **D ❌** Toujours initialiser un pointeur avant de le déréférencer.

**Réponse candidate :** C · **Explication :** La fiche indique : Avec plusieurs variables déclarées sur une même ligne, chaque déclarateur doit être lu séparément.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_003-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « * dans une déclaration » ?

- **A ❌** sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.
- **B ❌** Matériel physique / programmes exécutés par la machine.
- **C ✅** Avec plusieurs variables déclarées sur une même ligne, chaque déclarateur doit être lu séparément.
- **D ✅** int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_004 — * dans une expression

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/5-dans-une-expression)

### V1-N09_004-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement. » ?

- **A ❌** * dans une déclaration
- **B ❌** Passage d’arguments par valeur
- **C ✅** * dans une expression
- **D ❌** Callback — transmettre une fonction en paramètre

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/5-dans-une-expression

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_004-02 · description

**Une seule bonne réponse**

Quelle description caractérise « * dans une expression » ?

- **A ❌** Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.
- **B ❌** En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale.
- **C ❌** int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré.
- **D ✅** *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/5-dans-une-expression

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_004-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « * dans une expression » ?

- **A ✅** Déréférencer un pointeur non initialisé ou invalide entraîne un comportement indéfini.
- **B ❌** Avec plusieurs variables déclarées sur une même ligne, chaque déclarateur doit être lu séparément.
- **C ❌** Un callback n'est pas forcément asynchrone : appliquer appelle ici directement afficher_double. La signature du paramètre doit correspondre à celle de la fonction.
- **D ❌** Pour modifier une variable de l’appelant, on peut transmettre son adresse.

**Réponse candidate :** A · **Explication :** La fiche indique : Déréférencer un pointeur non initialisé ou invalide entraîne un comportement indéfini.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/5-dans-une-expression

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_004-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « * dans une expression » ?

- **A ✅** *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement.
- **B ❌** La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.
- **C ❌** Linux est un noyau et une famille de systèmes ; Ubuntu est une distribution utilisant Linux.
- **D ✅** Déréférencer un pointeur non initialisé ou invalide entraîne un comportement indéfini.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/5-dans-une-expression

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_005 — Modifier une valeur par un pointeur

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/6-modifier-une-valeur-par-un-pointeur)

### V1-N09_005-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402. » ?

- **A ❌** Indices de tableau
- **B ✅** Modifier une valeur par un pointeur
- **C ❌** qsort() — comparateur passé par pointeur de fonction
- **D ❌** Type pointé

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/6-modifier-une-valeur-par-un-pointeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_005-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Modifier une valeur par un pointeur » ?

- **A ❌** int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.
- **B ❌** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **C ✅** Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.
- **D ❌** qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/6-modifier-une-valeur-par-un-pointeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_005-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Modifier une valeur par un pointeur » ?

- **A ❌** Le comparateur de qsort reçoit des pointeurs vers des éléments, pas les éléments eux-mêmes. Éviter return a-b si a et b sont des int susceptibles de déborder.
- **B ❌** a[5] ne désigne pas un élément de ce tableau.
- **C ❌** L’arithmétique des pointeurs doit rester dans les limites du même tableau, ou juste après.
- **D ✅** p = &autreVariable changerait, à l’inverse, l’objet pointé.

**Réponse candidate :** D · **Explication :** La fiche indique : p = &autreVariable changerait, à l’inverse, l’objet pointé.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/6-modifier-une-valeur-par-un-pointeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_005-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Modifier une valeur par un pointeur » ?

- **A ✅** p = &autreVariable changerait, à l’inverse, l’objet pointé.
- **B ✅** Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.
- **C ❌** Application permettant de saisir des commandes et d’afficher leurs résultats.
- **D ❌** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/6-modifier-une-valeur-par-un-pointeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_006 — Valeur de p, *p et &p

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/7-valeur-de-p-p-et-p)

### V1-N09_006-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « p contient une adresse ; *p est la valeur pointée ; &p est l’adresse mémoire du pointeur lui-même. » ?

- **A ✅** Valeur de p, *p et &p
- **B ❌** & (opérateur d’adresse)
- **C ❌** Tailles des pointeurs
- **D ❌** sizeof(tableau)

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/7-valeur-de-p-p-et-p

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_006-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Valeur de p, *p et &p » ?

- **A ❌** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.
- **B ❌** sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur.
- **C ✅** p contient une adresse ; *p est la valeur pointée ; &p est l’adresse mémoire du pointeur lui-même.
- **D ❌** Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : p contient une adresse ; *p est la valeur pointée ; &p est l’adresse mémoire du pointeur lui-même.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/7-valeur-de-p-p-et-p

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_006-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Valeur de p, *p et &p » ?

- **A ✅** Ne confonds pas la case qui contient une adresse avec la case située à cette adresse.
- **B ❌** Dans un paramètre de fonction déclaré int a[], a est traité comme un pointeur : sizeof(a) n’y mesure pas le tableau d’origine.
- **C ❌** Ne jamais coder en dur une taille de pointeur à partir de suppositions.
- **D ❌** Ne confonds pas &n (adresse de n) avec n (valeur de n).

**Réponse candidate :** A · **Explication :** La fiche indique : Ne confonds pas la case qui contient une adresse avec la case située à cette adresse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/7-valeur-de-p-p-et-p

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_006-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Valeur de p, *p et &p » ?

- **A ✅** p contient une adresse ; *p est la valeur pointée ; &p est l’adresse mémoire du pointeur lui-même.
- **B ✅** Ne confonds pas la case qui contient une adresse avec la case située à cette adresse.
- **C ❌** Noyau du système d’exploitation ; interface entre logiciels et ressources matérielles.
- **D ❌** Fichier texte qui contient une suite de commandes exécutables par un Shell.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/7-valeur-de-p-p-et-p

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_007 — Type pointé

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/8-type-pointe)

### V1-N09_007-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau. » ?

- **A ❌** Modifier une valeur par un pointeur
- **B ❌** Notation équivalente
- **C ❌** Tableau
- **D ✅** Type pointé

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/8-type-pointe

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_007-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Type pointé » ?

- **A ✅** int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.
- **B ❌** Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.
- **C ❌** Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.
- **D ❌** Pour un tableau a, a[2] désigne le même élément que *(a + 2).

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/8-type-pointe

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_007-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Type pointé » ?

- **A ❌** p = &autreVariable changerait, à l’inverse, l’objet pointé.
- **B ❌** Cette équivalence ne rend pas valides les indices hors limites.
- **C ✅** L’arithmétique des pointeurs doit rester dans les limites du même tableau, ou juste après.
- **D ❌** Les accès à l’extérieur du tableau sont invalides.

**Réponse candidate :** C · **Explication :** La fiche indique : L’arithmétique des pointeurs doit rester dans les limites du même tableau, ou juste après.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/8-type-pointe

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_007-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Type pointé » ?

- **A ✅** L’arithmétique des pointeurs doit rester dans les limites du même tableau, ou juste après.
- **B ❌** Interface graphique / interface en ligne de commande.
- **C ❌** Dossier courant / dossier parent.
- **D ✅** int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/8-type-pointe

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_008 — %p avec printf

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/9-p-avec-printf)

### V1-N09_008-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée). » ?

- **A ❌** Conversion tableau → pointeur
- **B ❌** %s avec printf
- **C ✅** %p avec printf
- **D ❌** sizeof

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/9-p-avec-printf

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_008-02 · description

**Une seule bonne réponse**

Quelle description caractérise « %p avec printf » ?

- **A ❌** Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.
- **B ❌** Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.
- **C ❌** sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier.
- **D ✅** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/9-p-avec-printf

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_008-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « %p avec printf » ?

- **A ❌** Cette conversion ne se produit pas dans certains contextes, notamment sizeof(a) et &a.
- **B ❌** Utiliser %zu pour afficher une valeur de type size_t.
- **C ✅** Le format exact de l’adresse affichée dépend de l’implémentation.
- **D ❌** Une chaîne non terminée correctement peut provoquer un accès mémoire invalide.

**Réponse candidate :** C · **Explication :** La fiche indique : Le format exact de l’adresse affichée dépend de l’implémentation.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/9-p-avec-printf

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_008-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « %p avec printf » ?

- **A ❌** Shell courant sur Linux.
- **B ❌** Afficher le dossier actuel / changer de dossier / lister les fichiers.
- **C ✅** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).
- **D ✅** Le format exact de l’adresse affichée dépend de l’implémentation.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/9-p-avec-printf

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_009 — sizeof

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/10-sizeof)

### V1-N09_009-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier. » ?

- **A ❌** Passer une adresse à une fonction
- **B ❌** Parcourir un tableau
- **C ✅** sizeof
- **D ❌** Arithmétique des pointeurs

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/10-sizeof

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_009-02 · description

**Une seule bonne réponse**

Quelle description caractérise « sizeof » ?

- **A ✅** sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier.
- **B ❌** Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1.
- **C ❌** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.
- **D ❌** Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/10-sizeof

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_009-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « sizeof » ?

- **A ❌** Le déplacement n’est défini que dans le même tableau, ou une position juste après.
- **B ❌** Évite les indices négatifs et les accès au-delà de la dernière case.
- **C ❌** La fonction doit recevoir une adresse valide avant de déréférencer p.
- **D ✅** Utiliser %zu pour afficher une valeur de type size_t.

**Réponse candidate :** D · **Explication :** La fiche indique : Utiliser %zu pour afficher une valeur de type size_t.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/10-sizeof

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_009-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « sizeof » ?

- **A ❌** Afficher le contenu / type du fichier / rechercher / consulter le manuel.
- **B ✅** sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier.
- **C ✅** Utiliser %zu pour afficher une valeur de type size_t.
- **D ❌** Dossier personnel de l’utilisateur.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/10-sizeof

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_010 — Tailles des pointeurs

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/11-tailles-des-pointeurs)

### V1-N09_010-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme. » ?

- **A ✅** Tailles des pointeurs
- **B ❌** Caractère nul
- **C ❌** Tableau ≠ pointeur
- **D ❌** Principe d'inversion d'une chaîne

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/11-tailles-des-pointeurs

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_010-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Tailles des pointeurs » ?

- **A ❌** Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation.
- **B ❌** Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.
- **C ✅** Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme.
- **D ❌** \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/11-tailles-des-pointeurs

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_010-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Tailles des pointeurs » ?

- **A ✅** Ne jamais coder en dur une taille de pointeur à partir de suppositions.
- **B ❌** Les fonctions sur les chaînes doivent pouvoir trouver le terminateur nul.
- **C ❌** Cette fiche décrit une méthode de raisonnement, sans résoudre intégralement un exercice.
- **D ❌** sizeof(a) et sizeof(p) ne mesurent pas la même chose.

**Réponse candidate :** A · **Explication :** La fiche indique : Ne jamais coder en dur une taille de pointeur à partir de suppositions.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/11-tailles-des-pointeurs

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_010-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tailles des pointeurs » ?

- **A ✅** Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme.
- **B ✅** Ne jamais coder en dur une taille de pointeur à partir de suppositions.
- **C ❌** Dépend du répertoire actuel.
- **D ❌** Entrée standard (0) / sortie standard (1) / erreurs (2).

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/11-tailles-des-pointeurs

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_011 — Passage d’arguments par valeur

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/12-passage-d-arguments-par-valeur)

### V1-N09_011-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale. » ?

- **A ❌** Initialisation d'un tableau
- **B ❌** Allocation automatique — variables locales
- **C ❌** &tableau
- **D ✅** Passage d’arguments par valeur

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/12-passage-d-arguments-par-valeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_011-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Passage d’arguments par valeur » ?

- **A ❌** Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30};
- **B ❌** &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent.
- **C ✅** En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale.
- **D ❌** Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/12-passage-d-arguments-par-valeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_011-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Passage d’arguments par valeur » ?

- **A ❌** Le type de &a est un pointeur vers tableau de 5 int.
- **B ✅** Pour modifier une variable de l’appelant, on peut transmettre son adresse.
- **C ❌** Ne pas retourner l’adresse d’un tableau local pour l’utiliser après le retour de la fonction. Ne jamais appeler free sur une variable ou un tableau automatique.
- **D ❌** Un tableau existant ne se réaffecte pas avec l'opérateur = comme une variable scalaire.

**Réponse candidate :** B · **Explication :** La fiche indique : Pour modifier une variable de l’appelant, on peut transmettre son adresse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/12-passage-d-arguments-par-valeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_011-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Passage d’arguments par valeur » ?

- **A ✅** Pour modifier une variable de l’appelant, on peut transmettre son adresse.
- **B ❌** Relier la sortie d’une commande à l’entrée d’une autre.
- **C ❌** Copier / déplacer-renommer / supprimer.
- **D ✅** En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/12-passage-d-arguments-par-valeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_012 — Passer une adresse à une fonction

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/13-passer-une-adresse-a-une-fonction)

### V1-N09_012-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur. » ?

- **A ✅** Passer une adresse à une fonction
- **B ❌** Fuite mémoire — allocation perdue
- **C ❌** Échanger deux caractères
- **D ❌** Chaîne de caractères en C

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/13-passer-une-adresse-a-une-fonction

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_012-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Passer une adresse à une fonction » ?

- **A ❌** Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.
- **B ❌** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.
- **C ❌** Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.
- **D ✅** Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/13-passer-une-adresse-a-une-fonction

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_012-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Passer une adresse à une fonction » ?

- **A ✅** La fonction doit recevoir une adresse valide avant de déréférencer p.
- **B ❌** Toutes les suites de char ne sont pas nécessairement des chaînes valides.
- **C ❌** Un échange simple est une brique utile pour manipuler ou inverser des chaînes.
- **D ❌** Memory leak = fuite mémoire. Avec Valgrind, « definitely lost » indique un bloc inaccessible, « still reachable » un bloc encore pointé à la sortie. Le système récupère généralement la mémoire à la fin du processus, mais cela ne corrige pas une fuite pendant son fonctionnement.

**Réponse candidate :** A · **Explication :** La fiche indique : La fonction doit recevoir une adresse valide avant de déréférencer p.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/13-passer-une-adresse-a-une-fonction

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_012-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Passer une adresse à une fonction » ?

- **A ❌** Changer les permissions / propriétaire / utiliser des privilèges élevés.
- **B ❌** Trier / dédupliquer les lignes voisines / extraire / début / fin / inverser les caractères.
- **C ✅** Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.
- **D ✅** La fonction doit recevoir une adresse valide avant de déréférencer p.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/13-passer-une-adresse-a-une-fonction

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_013 — Tableau

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/14-tableau)

### V1-N09_013-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers. » ?

- **A ❌** Exercices d’observation
- **B ❌** malloc et sizeof : allouer le bon nombre d’octets
- **C ✅** Tableau
- **D ❌** free — libérer la mémoire

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/14-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_013-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Tableau » ?

- **A ✅** Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.
- **B ❌** free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.
- **C ❌** Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits.
- **D ❌** Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/14-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_013-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Tableau » ?

- **A ❌** Réponse : n vaut 8. Essaie ensuite d’expliquer pourquoi, plutôt que de retenir le chiffre.
- **B ❌** Ne jamais appeler free sur une variable locale ou une adresse non allouée dynamiquement ; éviter les doubles free et toute utilisation après free. La mise à NULL d’un pointeur ne corrige pas d’éventuels alias.
- **C ❌** sizeof(int) indique la taille d’un int ; sizeof *p celle du type pointé. Le nombre 64 du matériel ne donne pas la taille d’un int. Si n est variable, vérifier également le risque de débordement de n * sizeof *p.
- **D ✅** Les accès à l’extérieur du tableau sont invalides.

**Réponse candidate :** D · **Explication :** La fiche indique : Les accès à l’extérieur du tableau sont invalides.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/14-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_013-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tableau » ?

- **A ✅** Les accès à l’extérieur du tableau sont invalides.
- **B ❌** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **C ✅** Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.
- **D ❌** Rediriger les erreurs / prendre un fichier comme entrée.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/14-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_014 — Indices de tableau

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau)

### V1-N09_014-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5]. » ?

- **A ❌** malloc : vérifier NULL
- **B ❌** Tableau à deux dimensions
- **C ✅** Indices de tableau
- **D ❌** strdup : copie allouée dynamiquement

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_014-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Indices de tableau » ?

- **A ❌** int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.
- **B ✅** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **C ❌** strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat.
- **D ❌** Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_014-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Indices de tableau » ?

- **A ✅** a[5] ne désigne pas un élément de ce tableau.
- **B ❌** Toujours contrôler p == NULL avant de déréférencer p. N’utilise pas de boucle d’allocations géantes pour tester artificiellement un échec.
- **C ❌** strcpy copie vers une zone existante ; strdup crée une nouvelle zone allouée. Sous GNU89, strdup est une fonction POSIX, pas une fonction du C89 standard.
- **D ❌** Le nombre de colonnes fait partie du type utilisé pour manipuler ce tableau.

**Réponse candidate :** A · **Explication :** La fiche indique : a[5] ne désigne pas un élément de ce tableau.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_014-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Indices de tableau » ?

- **A ✅** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **B ❌** Rechercher / compter les lignes / transformer des caractères.
- **C ✅** a[5] ne désigne pas un élément de ce tableau.
- **D ❌** Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_015 — Tableau ≠ pointeur

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/16-tableau-pointeur)

### V1-N09_015-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation. » ?

- **A ❌** Chaînes littérales et .rodata (avancé)
- **B ❌** Pointeur non initialisé : comportement indéfini
- **C ❌** malloc — allocation dynamique
- **D ✅** Tableau ≠ pointeur

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/16-tableau-pointeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_015-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Tableau ≠ pointeur » ?

- **A ✅** Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation.
- **B ❌** malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue).
- **C ❌** Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation.
- **D ❌** Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/16-tableau-pointeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_015-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Tableau ≠ pointeur » ?

- **A ❌** Un segfault est une conséquence fréquente, jamais une garantie du langage. Un programme qui compile peut contenir un comportement indéfini à l’exécution.
- **B ✅** sizeof(a) et sizeof(p) ne mesurent pas la même chose.
- **C ❌** Vérifier p != NULL avant de le déréférencer. malloc ne met pas les octets à zéro ; chaque allocation réussie doit être libérée une fois quand elle n’est plus utile.
- **D ❌** Notion avancée : .rodata est un détail courant de l’implémentation, pas une garantie universelle du langage C. Les optimisations peuvent modifier l’apparence des données dans l’exécutable.

**Réponse candidate :** B · **Explication :** La fiche indique : sizeof(a) et sizeof(p) ne mesurent pas la même chose.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/16-tableau-pointeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_015-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tableau ≠ pointeur » ?

- **A ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.
- **B ❌** Paramètres et variables du Shell / environnement.
- **C ✅** sizeof(a) et sizeof(p) ne mesurent pas la même chose.
- **D ✅** Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/16-tableau-pointeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_016 — Conversion tableau → pointeur

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/17-conversion-tableau-pointeur)

### V1-N09_016-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse. » ?

- **A ✅** Conversion tableau → pointeur
- **B ❌** strcpy : copier dans un espace existant
- **C ❌** strncpy() — copie limitée et terminaison
- **D ❌** Chaîne littérale et tableau de char

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/17-conversion-tableau-pointeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_016-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Conversion tableau → pointeur » ?

- **A ❌** Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable.
- **B ❌** strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place.
- **C ❌** strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide.
- **D ✅** Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/17-conversion-tableau-pointeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_016-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Conversion tableau → pointeur » ?

- **A ✅** Cette conversion ne se produit pas dans certains contextes, notamment sizeof(a) et &a.
- **B ❌** Ne pas écrire dans une chaîne littérale. const char *p protège contre cette modification ; char s[] crée un tableau modifiable distinct.
- **C ❌** strcpy ne réalise jamais malloc à ta place. Il faut prévoir strlen(src) + 1 cases char, y compris '\0', et éviter les zones qui se chevauchent.
- **D ❌** Le troisième argument limite la copie, mais ne réserve pas automatiquement une place pour '\0'. Ici « Bonjour » devient « Bonjo » : pas de débordement, mais une troncature. Pour une copie complète, vérifier la capacité avant de copier.

**Réponse candidate :** A · **Explication :** La fiche indique : Cette conversion ne se produit pas dans certains contextes, notamment sizeof(a) et &a.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/17-conversion-tableau-pointeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_016-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Conversion tableau → pointeur » ?

- **A ✅** Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.
- **B ❌** Liste des dossiers recherchés pour trouver une commande, séparés par :.
- **C ❌** Variable définie dans le Shell en cours, non nécessairement exportée.
- **D ✅** Cette conversion ne se produit pas dans certains contextes, notamment sizeof(a) et &a.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/17-conversion-tableau-pointeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_017 — sizeof(tableau)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau)

### V1-N09_017-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur. » ?

- **A ❌** Valgrind — détecter les fuites
- **B ✅** sizeof(tableau)
- **C ❌** Use-after-free — réutiliser un bloc libéré
- **D ❌** free : quelles adresses peut-on libérer ?

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_017-02 · description

**Une seule bonne réponse**

Quelle description caractérise « sizeof(tableau) » ?

- **A ✅** sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur.
- **B ❌** free accepte NULL ou un pointeur valide obtenu par une allocation dynamique compatible ; ni un littéral ni un tableau local ne se libèrent avec free.
- **C ❌** Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini.
- **D ❌** Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_017-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « sizeof(tableau) » ?

- **A ❌** Valgrind s’utilise dans le terminal sur un programme compilé, pas comme un #include C. « ERROR SUMMARY: 0 errors » seul ne suffit pas : consulter aussi les catégories de fuites. L’outil ne vérifie que les chemins réellement exécutés.
- **B ❌** Après free, aucun alias vers le bloc ne doit servir à accéder aux anciennes données. Un test sans crash ne prouve pas que l'accès serait autorisé.
- **C ❌** Ne libère jamais un littéral, l’adresse d’un objet automatique ou le même bloc deux fois. free(NULL) est autorisé, mais ne rend pas valide un ancien pointeur libéré.
- **D ✅** Dans un paramètre de fonction déclaré int a[], a est traité comme un pointeur : sizeof(a) n’y mesure pas le tableau d’origine.

**Réponse candidate :** D · **Explication :** La fiche indique : Dans un paramètre de fonction déclaré int a[], a est traité comme un pointeur : sizeof(a) n’y mesure pas le tableau d’origine.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_017-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « sizeof(tableau) » ?

- **A ✅** Dans un paramètre de fonction déclaré int a[], a est traité comme un pointeur : sizeof(a) n’y mesure pas le tableau d’origine.
- **B ❌** Évaluation arithmétique.
- **C ✅** sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur.
- **D ❌** Exporter une variable / supprimer une variable ou fonction.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_018 — &tableau

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/19-tableau)

### V1-N09_018-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent. » ?

- **A ✅** &tableau
- **B ❌** strlen, sizeof et terminateur nul
- **C ❌** Segfault — faute de segmentation
- **D ❌** Valgrind Memcheck — comprendre les alertes

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/19-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_018-02 · description

**Une seule bonne réponse**

Quelle description caractérise « &tableau » ?

- **A ❌** Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.
- **B ✅** &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent.
- **C ❌** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.
- **D ❌** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/19-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_018-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « &tableau » ?

- **A ❌** Un segfault est un symptôme d’accès invalide détecté pendant l’exécution, pas une garantie systématique du C. Les outils de diagnostic aident, mais un test qui réussit ne prouve pas l’absence de comportement indéfini.
- **B ❌** La première erreur affichée peut provoquer les suivantes. Consulter la pile des appels, les lignes indiquées par -g et le contexte des allocations/libérations. Un « 0 errors » sur un test n'est pas une preuve générale d'absence de bugs. Exemple : « definitely lost: 32 bytes in 1 blocks » = 1 bloc de 32 octets définitivement perdu. Ces labels en majuscules sont des cat
- **C ✅** Le type de &a est un pointeur vers tableau de 5 int.
- **D ❌** Pour le littéral : sizeof("Best School") = 12, strlen("Best School") = 11. Pour un pointeur char *p, sizeof(p) ne mesure jamais la longueur de la chaîne. malloc(sizeof("Best School") + 1) réserve 13 octets : c’est suffisant, sans être nécessaire. strlen n'est sûr que pour une chaîne correctement terminée : il n'empêche pas un débordement lors de la saisie.

**Réponse candidate :** C · **Explication :** La fiche indique : Le type de &a est un pointeur vers tableau de 5 int.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/19-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_018-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « &tableau » ?

- **A ❌** Exécuter un script dans le Shell courant.
- **B ✅** Le type de &a est un pointeur vers tableau de 5 int.
- **C ✅** &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent.
- **D ❌** Choisir une branche selon des conditions.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/19-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_019 — Arithmétique des pointeurs

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/20-arithmetique-des-pointeurs)

### V1-N09_019-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int. » ?

- **A ❌** Pile et tas : durée de vie des allocations
- **B ❌** Buffer overflow — dépassement de tampon
- **C ❌** Tampon fixe, statique et dynamique — emplacement et durée de vie
- **D ✅** Arithmétique des pointeurs

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/20-arithmetique-des-pointeurs

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_019-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Arithmétique des pointeurs » ?

- **A ✅** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.
- **B ❌** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.
- **C ❌** Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier.
- **D ❌** Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/20-arithmetique-des-pointeurs

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_019-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Arithmétique des pointeurs » ?

- **A ❌** Pile/stack : objets automatiques et appels, dans les implémentations usuelles. Tas/heap : blocs obtenus via malloc/calloc/realloc, libérés explicitement. Durée de vie statique : objets static. Ne jamais faire free(&local) ou free sur un tableau static.
- **B ❌** Taille et durée de vie ne sont pas synonymes : char local[8] est fixe et automatique ; static char stable[8] est fixe et de durée de vie statique ; malloc(8) crée un bloc dynamique de huit octets. Ne jamais appeler free sur local ou stable.
- **C ✅** Le déplacement n’est défini que dans le même tableau, ou une position juste après.
- **D ❌** Pour une chaîne, le tableau doit accueillir strlen(source) + 1 octets. Un programme qui ne plante pas n'est pas forcément correct : une écriture hors limites est déjà un bug.

**Réponse candidate :** C · **Explication :** La fiche indique : Le déplacement n’est défini que dans le même tableau, ou une position juste après.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/20-arithmetique-des-pointeurs

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_019-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Arithmétique des pointeurs » ?

- **A ❌** Substitution de commande : récupérer sa sortie.
- **B ❌** ET logique / OU logique / négation.
- **C ✅** Le déplacement n’est défini que dans le même tableau, ou une position juste après.
- **D ✅** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/20-arithmetique-des-pointeurs

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_020 — Notation équivalente

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente)

### V1-N09_020-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Pour un tableau a, a[2] désigne le même élément que *(a + 2). » ?

- **A ✅** Notation équivalente
- **B ❌** Débordement du calcul de taille avant malloc
- **C ❌** strlen sans terminateur nul — lecture hors limites
- **D ❌** realloc — redimensionner une allocation

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_020-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Notation équivalente » ?

- **A ❌** realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec.
- **B ❌** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.
- **C ❌** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.
- **D ✅** Pour un tableau a, a[2] désigne le même élément que *(a + 2).

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Pour un tableau a, a[2] désigne le même élément que *(a + 2).

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_020-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Notation équivalente » ?

- **A ✅** Cette équivalence ne rend pas valides les indices hors limites.
- **B ❌** Ne pas multiplier deux tailles non fiables avant d'avoir vérifié le risque de dépassement. malloc vérifie la demande reçue, mais ne peut pas corriger un calcul de taille qui a déjà débordé.
- **C ❌** Le piège classique : p = realloc(p, taille); peut faire perdre le bloc initial sur échec. Avec tmp, l’ancien pointeur reste disponible. Ne pas utiliser l’ancienne adresse après une réussite, même si la valeur numérique semble identique.
- **D ❌** strlen n'est pas un contrôle de taille pour une mémoire arbitraire. Vérifier l'existence de '\0' dans les limites connues avant de traiter un tampon comme une chaîne. Ne pas confondre strlen et sizeof.

**Réponse candidate :** A · **Explication :** La fiche indique : Cette équivalence ne rend pas valides les indices hors limites.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_020-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Notation équivalente » ?

- **A ✅** Pour un tableau a, a[2] désigne le même élément que *(a + 2).
- **B ❌** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.
- **C ❌** Teste après exécution : le corps tourne au moins une fois.
- **D ✅** Cette équivalence ne rend pas valides les indices hors limites.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_021 — Chaîne de caractères en C

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/22-chaine-de-caracteres-en-c)

### V1-N09_021-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0. » ?

- **A ❌** Dangling pointer — pointeur vers un objet qui n'existe plus
- **B ✅** Chaîne de caractères en C
- **C ❌** calloc() — allouer et initialiser à zéro
- **D ❌** Dépassement de tampon sur la pile — erreur avant malloc

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/22-chaine-de-caracteres-en-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_021-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Chaîne de caractères en C » ?

- **A ❌** Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.
- **B ❌** Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.
- **C ✅** Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.
- **D ❌** calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/22-chaine-de-caracteres-en-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_021-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Chaîne de caractères en C » ?

- **A ❌** calloc remet les octets du bloc à zéro, mais n'empêche ni un accès hors limites ni l'utilisation du bloc après free. Le résultat peut être NULL si l'allocation échoue.
- **B ❌** VRAI : un pointeur vers un bloc libéré ne permet plus d'accéder à ce bloc, immédiatement après free. FAUX : p = NULL protège automatiquement les autres pointeurs qui désignent l'ancien bloc. Un pointeur n'est pas forcément valide jusqu'à la fin du programme.
- **C ❌** Dans la question du lab, la bonne raison est que « corruption may have already occurred during input reading ». Corriger la copie après coup n'annule pas un débordement déjà produit. Vérifie la longueur lors de la LECTURE, et refuse les lignes incomplètes si nécessaire.
- **D ✅** Toutes les suites de char ne sont pas nécessairement des chaînes valides.

**Réponse candidate :** D · **Explication :** La fiche indique : Toutes les suites de char ne sont pas nécessairement des chaînes valides.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/22-chaine-de-caracteres-en-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_021-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Chaîne de caractères en C » ?

- **A ✅** Toutes les suites de char ne sont pas nécessairement des chaînes valides.
- **B ✅** Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.
- **C ❌** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.
- **D ❌** Comparaisons.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/22-chaine-de-caracteres-en-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_022 — Caractère nul

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/23-caractere-nul)

### V1-N09_022-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";. » ?

- **A ✅** Caractère nul
- **B ❌** Double free — ne pas libérer deux fois
- **C ❌** Valgrind : « definitely lost » et les octets perdus
- **D ❌** Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/23-caractere-nul

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_022-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Caractère nul » ?

- **A ❌** Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.
- **B ❌** INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.
- **C ✅** \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.
- **D ❌** « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/23-caractere-nul

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_022-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Caractère nul » ?

- **A ✅** Les fonctions sur les chaînes doivent pouvoir trouver le terminateur nul.
- **B ❌** Une fuite indirecte n'est pas la même chose qu'une fuite certaine directe ; un use-after-free peut apparaître comme un Invalid read/write. Les labels INVALID_WRITE, UNINITIALIZED_VALUE, etc. ne sont pas tous des messages émis mot pour mot par Valgrind.
- **C ❌** 32 bytes = le volume perdu, 1 blocks = le nombre de blocs perdus. « Definitely lost » signifie fuite certaine : il faut corriger la gestion du pointeur ou l'absence de free. L'exemple fourni est volontairement sans fuite.
- **D ❌** Ne pas utiliser free deux fois sur une même allocation. L'exemple appelle free sur p puis sur NULL : ce n'est pas une double libération du bloc. Mettre p à NULL ne sécurise pas les alias éventuels. Un double free peut venir d'une ownership ambiguë ou de deux chemins de nettoyage ; chercher les chemins réels avant de conclure.

**Réponse candidate :** A · **Explication :** La fiche indique : Les fonctions sur les chaînes doivent pouvoir trouver le terminateur nul.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/23-caractere-nul

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_022-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Caractère nul » ?

- **A ✅** \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.
- **B ✅** Les fonctions sur les chaînes doivent pouvoir trouver le terminateur nul.
- **C ❌** Teste sa condition avant chaque itération.
- **D ❌** Dépôt du code et de son historique.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/23-caractere-nul

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_023 — %s avec printf

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/24-s-avec-printf)

### V1-N09_023-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin. » ?

- **A ❌** memcpy() ou memmove() — zones qui se recouvrent
- **B ❌** Callback — transmettre une fonction en paramètre
- **C ❌** Ownership — qui est responsable de free() ?
- **D ✅** %s avec printf

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/24-s-avec-printf

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_023-02 · description

**Une seule bonne réponse**

Quelle description caractérise « %s avec printf » ?

- **A ✅** Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.
- **B ❌** L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité.
- **C ❌** memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher.
- **D ❌** Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/24-s-avec-printf

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_023-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « %s avec printf » ?

- **A ❌** memcpy sur des plages qui se chevauchent a un comportement indéfini ; memmove est prévue pour ce cas. Vérifier la capacité de destination et compter les octets copiés, y compris '\0' pour une chaîne.
- **B ❌** Un callback n'est pas forcément asynchrone : appliquer appelle ici directement afficher_double. La signature du paramètre doit correspondre à celle de la fonction.
- **C ✅** Une chaîne non terminée correctement peut provoquer un accès mémoire invalide.
- **D ❌** VRAI : copier un pointeur dans plusieurs variables crée un risque de confusion de propriété. FAUX : cela transfère automatiquement la propriété ou duplique l'allocation. Seul le responsable désigné libère le bloc, une fois.

**Réponse candidate :** C · **Explication :** La fiche indique : Une chaîne non terminée correctement peut provoquer un accès mémoire invalide.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/24-s-avec-printf

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_023-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « %s avec printf » ?

- **A ✅** Une chaîne non terminée correctement peut provoquer un accès mémoire invalide.
- **B ❌** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.
- **C ❌** Branche de développement / fusion.
- **D ✅** Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/24-s-avec-printf

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_024 — Exercices d’observation

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/25-exercices-d-observation)

### V1-N09_024-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse. » ?

- **A ❌** char * — pointeur vers un caractère ou une chaîne
- **B ❌** qsort() — comparateur passé par pointeur de fonction
- **C ✅** Exercices d’observation
- **D ❌** Stack overflow — épuisement de la pile d'appels

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/25-exercices-d-observation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_024-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Exercices d’observation » ?

- **A ❌** Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux.
- **B ❌** qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.
- **C ❌** char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur.
- **D ✅** Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/25-exercices-d-observation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_024-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Exercices d’observation » ?

- **A ❌** char * désigne un pointeur, char tableau[8] un tableau. sizeof(p) mesure le pointeur, et sizeof(tableau) mesure le tableau lorsqu'il est encore dans sa portée comme tableau. Un texte littéral est à traiter comme non modifiable.
- **B ❌** Une récursion sans cas d'arrêt peut épuiser la pile ; une grande variable locale peut également poser problème. Stack overflow et stack buffer overflow ne désignent pas la même erreur.
- **C ✅** Réponse : n vaut 8. Essaie ensuite d’expliquer pourquoi, plutôt que de retenir le chiffre.
- **D ❌** Le comparateur de qsort reçoit des pointeurs vers des éléments, pas les éléments eux-mêmes. Éviter return a-b si a et b sont des int susceptibles de déborder.

**Réponse candidate :** C · **Explication :** La fiche indique : Réponse : n vaut 8. Essaie ensuite d’expliquer pourquoi, plutôt que de retenir le chiffre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/25-exercices-d-observation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_024-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Exercices d’observation » ?

- **A ✅** Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse.
- **B ❌** Service d’hébergement et de collaboration pour des dépôts Git.
- **C ❌** État / préparation / enregistrement.
- **D ✅** Réponse : n vaut 8. Essaie ensuite d’expliquer pourquoi, plutôt que de retenir le chiffre.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/25-exercices-d-observation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_025 — Initialisation d'un tableau

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/26-initialisation-d-un-tableau)

### V1-N09_025-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30}; » ?

- **A ❌** memcpy() — copier des octets sans chevauchement
- **B ❌** & (opérateur d’adresse)
- **C ✅** Initialisation d'un tableau
- **D ❌** Appeler un pointeur de fonction — f(x) ou (*f)(x)

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/26-initialisation-d-un-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_025-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Initialisation d'un tableau » ?

- **A ✅** Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30};
- **B ❌** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.
- **C ❌** Pour un pointeur de fonction valide f, f(5) et (*f)(5) appellent la même fonction ; vérifier NULL avant l'appel.
- **D ❌** memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30};

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/26-initialisation-d-un-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_025-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Initialisation d'un tableau » ?

- **A ❌** Ne jamais appeler un pointeur NULL ou de signature incompatible. L'indirection explicite (*f)(x) et la forme directe f(x) sont équivalentes.
- **B ❌** Ne confonds pas &n (adresse de n) avec n (valeur de n).
- **C ❌** memcpy ne garantit ni le terminateur '\0', ni la capacité, ni l'absence de chevauchement : le développeur doit vérifier ces conditions avant l'appel. Pour déplacer des octets avec recouvrement, utiliser memmove.
- **D ✅** Un tableau existant ne se réaffecte pas avec l'opérateur = comme une variable scalaire.

**Réponse candidate :** D · **Explication :** La fiche indique : Un tableau existant ne se réaffecte pas avec l'opérateur = comme une variable scalaire.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/26-initialisation-d-un-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_025-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Initialisation d'un tableau » ?

- **A ❌** Point d’entrée d’un programme C classique.
- **B ✅** Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30};
- **C ✅** Un tableau existant ne se réaffecte pas avec l'opérateur = comme une variable scalaire.
- **D ❌** Instantané enregistré dans l’historique local.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/26-initialisation-d-un-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_026 — Parcourir un tableau

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau)

### V1-N09_026-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1. » ?

- **A ✅** Parcourir un tableau
- **B ❌** typedef d'un pointeur de fonction — simplifier les signatures
- **C ❌** Raw pointer — pointeur brut en C
- **D ❌** Modifier une valeur par un pointeur

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_026-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Parcourir un tableau » ?

- **A ❌** Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.
- **B ❌** Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.
- **C ✅** Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1.
- **D ❌** typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_026-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Parcourir un tableau » ?

- **A ✅** Évite les indices négatifs et les accès au-delà de la dernière case.
- **B ❌** typedef définit un alias de type, pas une fonction ni une allocation. La signature doit rester compatible et les pointeurs peuvent valoir NULL si le contrat l'autorise.
- **C ❌** p = &autreVariable changerait, à l’inverse, l’objet pointé.
- **D ❌** Un pointeur de type int * est une adresse typée, pas une preuve que le bloc est accessible, ni une indication de propriété. Le terme raw pointer ne désigne pas une autre syntaxe du C.

**Réponse candidate :** A · **Explication :** La fiche indique : Évite les indices négatifs et les accès au-delà de la dernière case.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_026-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Parcourir un tableau » ?

- **A ✅** Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1.
- **B ✅** Évite les indices négatifs et les accès au-delà de la dernière case.
- **C ❌** Git ne peut pas résoudre automatiquement des changements concurrents.
- **D ❌** Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_027 — Tableau à deux dimensions

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/28-tableau-a-deux-dimensions)

### V1-N09_027-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne. » ?

- **A ❌** Pointeur de fonction — déclarer une signature
- **B ❌** %p avec printf
- **C ❌** Adresse mémoire
- **D ✅** Tableau à deux dimensions

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/28-tableau-a-deux-dimensions

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_027-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Tableau à deux dimensions » ?

- **A ❌** Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse.
- **B ❌** int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *.
- **C ✅** int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.
- **D ❌** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/28-tableau-a-deux-dimensions

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_027-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Tableau à deux dimensions » ?

- **A ❌** Bien lire les parenthèses : int (*f)(int) est un pointeur de fonction ; int *f(int) est une fonction renvoyant int *. Ne pas confondre avec int *.
- **B ✅** Le nombre de colonnes fait partie du type utilisé pour manipuler ce tableau.
- **C ❌** Le format exact de l’adresse affichée dépend de l’implémentation.
- **D ❌** L’adresse affichée peut changer d’une exécution à l’autre.

**Réponse candidate :** B · **Explication :** La fiche indique : Le nombre de colonnes fait partie du type utilisé pour manipuler ce tableau.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/28-tableau-a-deux-dimensions

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_027-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tableau à deux dimensions » ?

- **A ✅** Le nombre de colonnes fait partie du type utilisé pour manipuler ce tableau.
- **B ❌** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.
- **C ❌** Copier un dépôt / historique / changer de branche.
- **D ✅** int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/28-tableau-a-deux-dimensions

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_028 — Échanger deux caractères

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/29-echanger-deux-caracteres)

### V1-N09_028-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire. » ?

- **A ✅** Échanger deux caractères
- **B ❌** Passage d’arguments par valeur
- **C ❌** * dans une expression
- **D ❌** Tableau de pointeurs de fonctions — choisir une opération

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/29-echanger-deux-caracteres

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_028-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Échanger deux caractères » ?

- **A ❌** *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement.
- **B ❌** En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale.
- **C ❌** Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if.
- **D ✅** Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/29-echanger-deux-caracteres

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_028-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Échanger deux caractères » ?

- **A ❌** Déréférencer un pointeur non initialisé ou invalide entraîne un comportement indéfini.
- **B ❌** operations[index] est un pointeur de fonction, pas le résultat d'une fonction. Toujours valider l'indice et la non-nullité avant l'appel.
- **C ✅** Un échange simple est une brique utile pour manipuler ou inverser des chaînes.
- **D ❌** Pour modifier une variable de l’appelant, on peut transmettre son adresse.

**Réponse candidate :** C · **Explication :** La fiche indique : Un échange simple est une brique utile pour manipuler ou inverser des chaînes.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/29-echanger-deux-caracteres

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_028-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Échanger deux caractères » ?

- **A ❌** Indique une absence de valeur de retour ou de paramètres selon le contexte.
- **B ❌** Compiler un fichier source et nommer l’exécutable.
- **C ✅** Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.
- **D ✅** Un échange simple est une brique utile pour manipuler ou inverser des chaînes.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/29-echanger-deux-caracteres

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_029 — Principe d'inversion d'une chaîne

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/30-principe-d-inversion-d-une-chaine)

### V1-N09_029-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre. » ?

- **A ❌** Pointeur (pointer)
- **B ❌** Indices de tableau
- **C ✅** Principe d'inversion d'une chaîne
- **D ❌** Type pointé

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/30-principe-d-inversion-d-une-chaine

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_029-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Principe d'inversion d'une chaîne » ?

- **A ✅** Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.
- **B ❌** int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.
- **C ❌** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **D ❌** Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/30-principe-d-inversion-d-une-chaine

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_029-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Principe d'inversion d'une chaîne » ?

- **A ❌** Toujours initialiser un pointeur avant de le déréférencer.
- **B ❌** L’arithmétique des pointeurs doit rester dans les limites du même tableau, ou juste après.
- **C ❌** a[5] ne désigne pas un élément de ce tableau.
- **D ✅** Cette fiche décrit une méthode de raisonnement, sans résoudre intégralement un exercice.

**Réponse candidate :** D · **Explication :** La fiche indique : Cette fiche décrit une méthode de raisonnement, sans résoudre intégralement un exercice.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/30-principe-d-inversion-d-une-chaine

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_029-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Principe d'inversion d'une chaîne » ?

- **A ✅** Cette fiche décrit une méthode de raisonnement, sans résoudre intégralement un exercice.
- **B ❌** Compile vers un fichier assembleur .s, sans assembler ni effectuer l’édition de liens.
- **C ✅** Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.
- **D ❌** Entier décimal / caractère / réel avec six décimales.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/30-principe-d-inversion-d-une-chaine

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_030 — malloc — allocation dynamique

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique)

### V1-N09_030-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue). » ?

- **A ❌** Tailles des pointeurs
- **B ❌** * dans une déclaration
- **C ✅** malloc — allocation dynamique
- **D ❌** sizeof(tableau)

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_030-02 · description

**Une seule bonne réponse**

Quelle description caractérise « malloc — allocation dynamique » ?

- **A ❌** int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré.
- **B ✅** malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue).
- **C ❌** sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur.
- **D ❌** Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue).

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_030-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « malloc — allocation dynamique » ?

- **A ✅** Vérifier p != NULL avant de le déréférencer. malloc ne met pas les octets à zéro ; chaque allocation réussie doit être libérée une fois quand elle n’est plus utile.
- **B ❌** Ne jamais coder en dur une taille de pointeur à partir de suppositions.
- **C ❌** Dans un paramètre de fonction déclaré int a[], a est traité comme un pointeur : sizeof(a) n’y mesure pas le tableau d’origine.
- **D ❌** Avec plusieurs variables déclarées sur une même ligne, chaque déclarateur doit être lu séparément.

**Réponse candidate :** A · **Explication :** La fiche indique : Vérifier p != NULL avant de le déréférencer. malloc ne met pas les octets à zéro ; chaque allocation réussie doit être libérée une fois quand elle n’est plus utile.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_030-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « malloc — allocation dynamique » ?

- **A ✅** malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue).
- **B ❌** Définition nécessaire introuvable lors de l’édition de liens.
- **C ✅** Vérifier p != NULL avant de le déréférencer. malloc ne met pas les octets à zéro ; chaque allocation réussie doit être libérée une fois quand elle n’est plus utile.
- **D ❌** puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_031 — free — libérer la mémoire

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire)

### V1-N09_031-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL. » ?

- **A ❌** Tableau
- **B ❌** Notation équivalente
- **C ❌** Valeur de p, *p et &p
- **D ✅** free — libérer la mémoire

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_031-02 · description

**Une seule bonne réponse**

Quelle description caractérise « free — libérer la mémoire » ?

- **A ❌** Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.
- **B ❌** p contient une adresse ; *p est la valeur pointée ; &p est l’adresse mémoire du pointeur lui-même.
- **C ✅** free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.
- **D ❌** Pour un tableau a, a[2] désigne le même élément que *(a + 2).

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_031-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « free — libérer la mémoire » ?

- **A ❌** Cette équivalence ne rend pas valides les indices hors limites.
- **B ✅** Ne jamais appeler free sur une variable locale ou une adresse non allouée dynamiquement ; éviter les doubles free et toute utilisation après free. La mise à NULL d’un pointeur ne corrige pas d’éventuels alias.
- **C ❌** Ne confonds pas la case qui contient une adresse avec la case située à cette adresse.
- **D ❌** Les accès à l’extérieur du tableau sont invalides.

**Réponse candidate :** B · **Explication :** La fiche indique : Ne jamais appeler free sur une variable locale ou une adresse non allouée dynamiquement ; éviter les doubles free et toute utilisation après free. La mise à NULL d’un pointeur ne corrige pas d’éventuels alias.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_031-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « free — libérer la mémoire » ?

- **A ✅** Ne jamais appeler free sur une variable locale ou une adresse non allouée dynamiquement ; éviter les doubles free et toute utilisation après free. La mise à NULL d’un pointeur ne corrige pas d’éventuels alias.
- **B ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **C ❌** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **D ✅** free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_032 — Allocation automatique — variables locales

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/33-allocation-automatique-variables-locales)

### V1-N09_032-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free. » ?

- **A ✅** Allocation automatique — variables locales
- **B ❌** Conversion tableau → pointeur
- **C ❌** %s avec printf
- **D ❌** sizeof

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/33-allocation-automatique-variables-locales

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_032-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Allocation automatique — variables locales » ?

- **A ❌** sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier.
- **B ❌** Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.
- **C ❌** Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.
- **D ✅** Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/33-allocation-automatique-variables-locales

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_032-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Allocation automatique — variables locales » ?

- **A ✅** Ne pas retourner l’adresse d’un tableau local pour l’utiliser après le retour de la fonction. Ne jamais appeler free sur une variable ou un tableau automatique.
- **B ❌** Utiliser %zu pour afficher une valeur de type size_t.
- **C ❌** Cette conversion ne se produit pas dans certains contextes, notamment sizeof(a) et &a.
- **D ❌** Une chaîne non terminée correctement peut provoquer un accès mémoire invalide.

**Réponse candidate :** A · **Explication :** La fiche indique : Ne pas retourner l’adresse d’un tableau local pour l’utiliser après le retour de la fonction. Ne jamais appeler free sur une variable ou un tableau automatique.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/33-allocation-automatique-variables-locales

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_032-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Allocation automatique — variables locales » ?

- **A ✅** Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.
- **B ❌** Une fonction de type char peut renvoyer un caractère, par exemple return 'H';.
- **C ❌** Permet de choisir le nom du fichier de sortie, par exemple gcc main.c -o cisfun.
- **D ✅** Ne pas retourner l’adresse d’un tableau local pour l’utiliser après le retour de la fonction. Ne jamais appeler free sur une variable ou un tableau automatique.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/33-allocation-automatique-variables-locales

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_033 — Chaîne littérale et tableau de char

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/34-chaine-litterale-et-tableau-de-char)

### V1-N09_033-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable. » ?

- **A ❌** Passer une adresse à une fonction
- **B ✅** Chaîne littérale et tableau de char
- **C ❌** Parcourir un tableau
- **D ❌** Arithmétique des pointeurs

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/34-chaine-litterale-et-tableau-de-char

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_033-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Chaîne littérale et tableau de char » ?

- **A ✅** Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable.
- **B ❌** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.
- **C ❌** Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1.
- **D ❌** Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/34-chaine-litterale-et-tableau-de-char

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_033-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Chaîne littérale et tableau de char » ?

- **A ❌** La fonction doit recevoir une adresse valide avant de déréférencer p.
- **B ❌** Évite les indices négatifs et les accès au-delà de la dernière case.
- **C ❌** Le déplacement n’est défini que dans le même tableau, ou une position juste après.
- **D ✅** Ne pas écrire dans une chaîne littérale. const char *p protège contre cette modification ; char s[] crée un tableau modifiable distinct.

**Réponse candidate :** D · **Explication :** La fiche indique : Ne pas écrire dans une chaîne littérale. const char *p protège contre cette modification ; char s[] crée un tableau modifiable distinct.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/34-chaine-litterale-et-tableau-de-char

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_033-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Chaîne littérale et tableau de char » ?

- **A ✅** Ne pas écrire dans une chaîne littérale. const char *p protège contre cette modification ; char s[] crée un tableau modifiable distinct.
- **B ❌** Dennis Ritchie a conçu le langage C aux Bell Labs au début des années 1970 ; il a aussi joué un rôle majeur dans le développement d’Unix.
- **C ✅** Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable.
- **D ❌** signed permet des valeurs négatives et positives ; unsigned ne représente que des valeurs non négatives.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/34-chaine-litterale-et-tableau-de-char

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_034 — malloc : vérifier NULL

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/35-malloc-verifier-null)

### V1-N09_034-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé. » ?

- **A ❌** Caractère nul
- **B ❌** Tableau ≠ pointeur
- **C ✅** malloc : vérifier NULL
- **D ❌** Principe d'inversion d'une chaîne

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/35-malloc-verifier-null

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_034-02 · description

**Une seule bonne réponse**

Quelle description caractérise « malloc : vérifier NULL » ?

- **A ❌** Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.
- **B ✅** Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.
- **C ❌** Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation.
- **D ❌** \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/35-malloc-verifier-null

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_034-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « malloc : vérifier NULL » ?

- **A ❌** Les fonctions sur les chaînes doivent pouvoir trouver le terminateur nul.
- **B ❌** Cette fiche décrit une méthode de raisonnement, sans résoudre intégralement un exercice.
- **C ✅** Toujours contrôler p == NULL avant de déréférencer p. N’utilise pas de boucle d’allocations géantes pour tester artificiellement un échec.
- **D ❌** sizeof(a) et sizeof(p) ne mesurent pas la même chose.

**Réponse candidate :** C · **Explication :** La fiche indique : Toujours contrôler p == NULL avant de déréférencer p. N’utilise pas de boucle d’allocations géantes pour tester artificiellement un échec.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/35-malloc-verifier-null

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_034-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « malloc : vérifier NULL » ?

- **A ❌** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.
- **B ✅** Toujours contrôler p == NULL avant de déréférencer p. N’utilise pas de boucle d’allocations géantes pour tester artificiellement un échec.
- **C ✅** Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.
- **D ❌** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/35-malloc-verifier-null

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_035 — Fuite mémoire — allocation perdue

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/36-fuite-memoire-allocation-perdue)

### V1-N09_035-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire. » ?

- **A ❌** &tableau
- **B ❌** Initialisation d'un tableau
- **C ❌** Allocation automatique — variables locales
- **D ✅** Fuite mémoire — allocation perdue

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/36-fuite-memoire-allocation-perdue

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_035-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Fuite mémoire — allocation perdue » ?

- **A ✅** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.
- **B ❌** &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent.
- **C ❌** Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30};
- **D ❌** Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/36-fuite-memoire-allocation-perdue

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_035-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Fuite mémoire — allocation perdue » ?

- **A ❌** Ne pas retourner l’adresse d’un tableau local pour l’utiliser après le retour de la fonction. Ne jamais appeler free sur une variable ou un tableau automatique.
- **B ✅** Memory leak = fuite mémoire. Avec Valgrind, « definitely lost » indique un bloc inaccessible, « still reachable » un bloc encore pointé à la sortie. Le système récupère généralement la mémoire à la fin du processus, mais cela ne corrige pas une fuite pendant son fonctionnement.
- **C ❌** Le type de &a est un pointeur vers tableau de 5 int.
- **D ❌** Un tableau existant ne se réaffecte pas avec l'opérateur = comme une variable scalaire.

**Réponse candidate :** B · **Explication :** La fiche indique : Memory leak = fuite mémoire. Avec Valgrind, « definitely lost » indique un bloc inaccessible, « still reachable » un bloc encore pointé à la sortie. Le système récupère généralement la mémoire à la fin du processus, mais cela ne corrige pas une fuite pendant son fonctionnement.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/36-fuite-memoire-allocation-perdue

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_035-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Fuite mémoire — allocation perdue » ?

- **A ❌** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.
- **B ❌** Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage.
- **C ✅** Memory leak = fuite mémoire. Avec Valgrind, « definitely lost » indique un bloc inaccessible, « still reachable » un bloc encore pointé à la sortie. Le système récupère généralement la mémoire à la fin du processus, mais cela ne corrige pas une fuite pendant son fonctionnement.
- **D ✅** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/36-fuite-memoire-allocation-perdue

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_036 — Valgrind — détecter les fuites

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/37-valgrind-detecter-les-fuites)

### V1-N09_036-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code. » ?

- **A ✅** Valgrind — détecter les fuites
- **B ❌** Échanger deux caractères
- **C ❌** Fuite mémoire — allocation perdue
- **D ❌** Chaîne de caractères en C

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/37-valgrind-detecter-les-fuites

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_036-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Valgrind — détecter les fuites » ?

- **A ❌** Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.
- **B ❌** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.
- **C ❌** Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.
- **D ✅** Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/37-valgrind-detecter-les-fuites

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_036-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Valgrind — détecter les fuites » ?

- **A ✅** Valgrind s’utilise dans le terminal sur un programme compilé, pas comme un #include C. « ERROR SUMMARY: 0 errors » seul ne suffit pas : consulter aussi les catégories de fuites. L’outil ne vérifie que les chemins réellement exécutés.
- **B ❌** Un échange simple est une brique utile pour manipuler ou inverser des chaînes.
- **C ❌** Toutes les suites de char ne sont pas nécessairement des chaînes valides.
- **D ❌** Memory leak = fuite mémoire. Avec Valgrind, « definitely lost » indique un bloc inaccessible, « still reachable » un bloc encore pointé à la sortie. Le système récupère généralement la mémoire à la fin du processus, mais cela ne corrige pas une fuite pendant son fonctionnement.

**Réponse candidate :** A · **Explication :** La fiche indique : Valgrind s’utilise dans le terminal sur un programme compilé, pas comme un #include C. « ERROR SUMMARY: 0 errors » seul ne suffit pas : consulter aussi les catégories de fuites. L’outil ne vérifie que les chemins réellement exécutés.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/37-valgrind-detecter-les-fuites

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_036-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Valgrind — détecter les fuites » ?

- **A ✅** Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code.
- **B ❌** fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.
- **C ❌** Reste par 2 ; permet de tester la parité.
- **D ✅** Valgrind s’utilise dans le terminal sur un programme compilé, pas comme un #include C. « ERROR SUMMARY: 0 errors » seul ne suffit pas : consulter aussi les catégories de fuites. L’outil ne vérifie que les chemins réellement exécutés.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/37-valgrind-detecter-les-fuites

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_037 — Chaînes littérales et .rodata (avancé)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/38-chaines-litterales-et-rodata-avance)

### V1-N09_037-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation. » ?

- **A ❌** strlen, sizeof et terminateur nul
- **B ✅** Chaînes littérales et .rodata (avancé)
- **C ❌** Exercices d’observation
- **D ❌** free — libérer la mémoire

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/38-chaines-litterales-et-rodata-avance

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_037-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Chaînes littérales et .rodata (avancé) » ?

- **A ❌** free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.
- **B ❌** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.
- **C ✅** Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation.
- **D ❌** Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/38-chaines-litterales-et-rodata-avance

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_037-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Chaînes littérales et .rodata (avancé) » ?

- **A ❌** Réponse : n vaut 8. Essaie ensuite d’expliquer pourquoi, plutôt que de retenir le chiffre.
- **B ❌** Pour le littéral : sizeof("Best School") = 12, strlen("Best School") = 11. Pour un pointeur char *p, sizeof(p) ne mesure jamais la longueur de la chaîne. malloc(sizeof("Best School") + 1) réserve 13 octets : c’est suffisant, sans être nécessaire. strlen n'est sûr que pour une chaîne correctement terminée : il n'empêche pas un débordement lors de la saisie.
- **C ❌** Ne jamais appeler free sur une variable locale ou une adresse non allouée dynamiquement ; éviter les doubles free et toute utilisation après free. La mise à NULL d’un pointeur ne corrige pas d’éventuels alias.
- **D ✅** Notion avancée : .rodata est un détail courant de l’implémentation, pas une garantie universelle du langage C. Les optimisations peuvent modifier l’apparence des données dans l’exécutable.

**Réponse candidate :** D · **Explication :** La fiche indique : Notion avancée : .rodata est un détail courant de l’implémentation, pas une garantie universelle du langage C. Les optimisations peuvent modifier l’apparence des données dans l’exécutable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/38-chaines-litterales-et-rodata-avance

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_037-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Chaînes littérales et .rodata (avancé) » ?

- **A ✅** Notion avancée : .rodata est un détail courant de l’implémentation, pas une garantie universelle du langage C. Les optimisations peuvent modifier l’apparence des données dans l’exécutable.
- **B ✅** Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation.
- **C ❌** Conserve les deux derniers chiffres d’un entier positif.
- **D ❌** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/38-chaines-litterales-et-rodata-avance

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_038 — malloc et sizeof : allouer le bon nombre d’octets

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/39-malloc-et-sizeof-allouer-le-bon-nombre-d-octets)

### V1-N09_038-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits. » ?

- **A ✅** malloc et sizeof : allouer le bon nombre d’octets
- **B ❌** Tableau à deux dimensions
- **C ❌** malloc : vérifier NULL
- **D ❌** Pile et tas : durée de vie des allocations

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/39-malloc-et-sizeof-allouer-le-bon-nombre-d-octets

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_038-02 · description

**Une seule bonne réponse**

Quelle description caractérise « malloc et sizeof : allouer le bon nombre d’octets » ?

- **A ❌** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.
- **B ✅** Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits.
- **C ❌** int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.
- **D ❌** Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/39-malloc-et-sizeof-allouer-le-bon-nombre-d-octets

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_038-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « malloc et sizeof : allouer le bon nombre d’octets » ?

- **A ✅** sizeof(int) indique la taille d’un int ; sizeof *p celle du type pointé. Le nombre 64 du matériel ne donne pas la taille d’un int. Si n est variable, vérifier également le risque de débordement de n * sizeof *p.
- **B ❌** Pile/stack : objets automatiques et appels, dans les implémentations usuelles. Tas/heap : blocs obtenus via malloc/calloc/realloc, libérés explicitement. Durée de vie statique : objets static. Ne jamais faire free(&local) ou free sur un tableau static.
- **C ❌** Toujours contrôler p == NULL avant de déréférencer p. N’utilise pas de boucle d’allocations géantes pour tester artificiellement un échec.
- **D ❌** Le nombre de colonnes fait partie du type utilisé pour manipuler ce tableau.

**Réponse candidate :** A · **Explication :** La fiche indique : sizeof(int) indique la taille d’un int ; sizeof *p celle du type pointé. Le nombre 64 du matériel ne donne pas la taille d’un int. Si n est variable, vérifier également le risque de débordement de n * sizeof *p.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/39-malloc-et-sizeof-allouer-le-bon-nombre-d-octets

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_038-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « malloc et sizeof : allouer le bon nombre d’octets » ?

- **A ❌** Quotient entier tronqué vers zéro.
- **B ✅** sizeof(int) indique la taille d’un int ; sizeof *p celle du type pointé. Le nombre 64 du matériel ne donne pas la taille d’un int. Si n est variable, vérifier également le risque de débordement de n * sizeof *p.
- **C ✅** Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits.
- **D ❌** Reste : 5.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/39-malloc-et-sizeof-allouer-le-bon-nombre-d-octets

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_039 — strlen, sizeof et terminateur nul

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul)

### V1-N09_039-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'. » ?

- **A ❌** malloc — allocation dynamique
- **B ❌** realloc — redimensionner une allocation
- **C ❌** Chaînes littérales et .rodata (avancé)
- **D ✅** strlen, sizeof et terminateur nul

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_039-02 · description

**Une seule bonne réponse**

Quelle description caractérise « strlen, sizeof et terminateur nul » ?

- **A ✅** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.
- **B ❌** Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation.
- **C ❌** malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue).
- **D ❌** realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_039-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « strlen, sizeof et terminateur nul » ?

- **A ❌** Vérifier p != NULL avant de le déréférencer. malloc ne met pas les octets à zéro ; chaque allocation réussie doit être libérée une fois quand elle n’est plus utile.
- **B ❌** Le piège classique : p = realloc(p, taille); peut faire perdre le bloc initial sur échec. Avec tmp, l’ancien pointeur reste disponible. Ne pas utiliser l’ancienne adresse après une réussite, même si la valeur numérique semble identique.
- **C ✅** Pour le littéral : sizeof("Best School") = 12, strlen("Best School") = 11. Pour un pointeur char *p, sizeof(p) ne mesure jamais la longueur de la chaîne. malloc(sizeof("Best School") + 1) réserve 13 octets : c’est suffisant, sans être nécessaire. strlen n'est sûr que pour une chaîne correctement terminée : il n'empêche pas un débordement lors de la saisie.
- **D ❌** Notion avancée : .rodata est un détail courant de l’implémentation, pas une garantie universelle du langage C. Les optimisations peuvent modifier l’apparence des données dans l’exécutable.

**Réponse candidate :** C · **Explication :** La fiche indique : Pour le littéral : sizeof("Best School") = 12, strlen("Best School") = 11. Pour un pointeur char *p, sizeof(p) ne mesure jamais la longueur de la chaîne. malloc(sizeof("Best School") + 1) réserve 13 octets : c’est suffisant, sans être nécessaire. strlen n'est sûr que pour une chaîne correctement terminée : il n'empêche pas un débordement lors de la saisie.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_039-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strlen, sizeof et terminateur nul » ?

- **A ✅** Pour le littéral : sizeof("Best School") = 12, strlen("Best School") = 11. Pour un pointeur char *p, sizeof(p) ne mesure jamais la longueur de la chaîne. malloc(sizeof("Best School") + 1) réserve 13 octets : c’est suffisant, sans être nécessaire. strlen n'est sûr que pour une chaîne correctement terminée : il n'empêche pas un débordement lors de la saisie.
- **B ❌** Supprime le dernier chiffre d’un entier positif.
- **C ❌** Utiliser l’ancienne valeur, puis retirer 1.
- **D ✅** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_040 — strcpy : copier dans un espace existant

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/41-strcpy-copier-dans-un-espace-existant)

### V1-N09_040-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place. » ?

- **A ❌** strdup : copie allouée dynamiquement
- **B ❌** calloc() — allouer et initialiser à zéro
- **C ✅** strcpy : copier dans un espace existant
- **D ❌** Chaîne littérale et tableau de char

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/41-strcpy-copier-dans-un-espace-existant

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_040-02 · description

**Une seule bonne réponse**

Quelle description caractérise « strcpy : copier dans un espace existant » ?

- **A ❌** Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable.
- **B ❌** calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free.
- **C ❌** strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat.
- **D ✅** strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/41-strcpy-copier-dans-un-espace-existant

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_040-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « strcpy : copier dans un espace existant » ?

- **A ❌** strcpy copie vers une zone existante ; strdup crée une nouvelle zone allouée. Sous GNU89, strdup est une fonction POSIX, pas une fonction du C89 standard.
- **B ❌** Ne pas écrire dans une chaîne littérale. const char *p protège contre cette modification ; char s[] crée un tableau modifiable distinct.
- **C ✅** strcpy ne réalise jamais malloc à ta place. Il faut prévoir strlen(src) + 1 cases char, y compris '\0', et éviter les zones qui se chevauchent.
- **D ❌** calloc remet les octets du bloc à zéro, mais n'empêche ni un accès hors limites ni l'utilisation du bloc après free. Le résultat peut être NULL si l'allocation échoue.

**Réponse candidate :** C · **Explication :** La fiche indique : strcpy ne réalise jamais malloc à ta place. Il faut prévoir strlen(src) + 1 cases char, y compris '\0', et éviter les zones qui se chevauchent.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/41-strcpy-copier-dans-un-espace-existant

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_040-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strcpy : copier dans un espace existant » ?

- **A ✅** strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place.
- **B ❌** Reste : 2.
- **C ❌** Affiche 87654321 si on affiche i dans le corps.
- **D ✅** strcpy ne réalise jamais malloc à ta place. Il faut prévoir strlen(src) + 1 cases char, y compris '\0', et éviter les zones qui se chevauchent.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/41-strcpy-copier-dans-un-espace-existant

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_041 — strdup : copie allouée dynamiquement

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/42-strdup-copie-allouee-dynamiquement)

### V1-N09_041-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat. » ?

- **A ❌** Valgrind — détecter les fuites
- **B ❌** Double free — ne pas libérer deux fois
- **C ✅** strdup : copie allouée dynamiquement
- **D ❌** Pointeur non initialisé : comportement indéfini

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/42-strdup-copie-allouee-dynamiquement

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_041-02 · description

**Une seule bonne réponse**

Quelle description caractérise « strdup : copie allouée dynamiquement » ?

- **A ✅** strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat.
- **B ❌** Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.
- **C ❌** Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.
- **D ❌** Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/42-strdup-copie-allouee-dynamiquement

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_041-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « strdup : copie allouée dynamiquement » ?

- **A ❌** Un segfault est une conséquence fréquente, jamais une garantie du langage. Un programme qui compile peut contenir un comportement indéfini à l’exécution.
- **B ❌** Ne pas utiliser free deux fois sur une même allocation. L'exemple appelle free sur p puis sur NULL : ce n'est pas une double libération du bloc. Mettre p à NULL ne sécurise pas les alias éventuels. Un double free peut venir d'une ownership ambiguë ou de deux chemins de nettoyage ; chercher les chemins réels avant de conclure.
- **C ❌** Valgrind s’utilise dans le terminal sur un programme compilé, pas comme un #include C. « ERROR SUMMARY: 0 errors » seul ne suffit pas : consulter aussi les catégories de fuites. L’outil ne vérifie que les chemins réellement exécutés.
- **D ✅** strcpy copie vers une zone existante ; strdup crée une nouvelle zone allouée. Sous GNU89, strdup est une fonction POSIX, pas une fonction du C89 standard.

**Réponse candidate :** D · **Explication :** La fiche indique : strcpy copie vers une zone existante ; strdup crée une nouvelle zone allouée. Sous GNU89, strdup est une fonction POSIX, pas une fonction du C89 standard.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/42-strdup-copie-allouee-dynamiquement

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_041-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strdup : copie allouée dynamiquement » ?

- **A ❌** Tester de petits cas et lire les avertissements du compilateur aide à comprendre une erreur sans recopier une solution.
- **B ✅** strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat.
- **C ✅** strcpy copie vers une zone existante ; strdup crée une nouvelle zone allouée. Sous GNU89, strdup est une fonction POSIX, pas une fonction du C89 standard.
- **D ❌** Ajouter 1, puis utiliser la nouvelle valeur.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/42-strdup-copie-allouee-dynamiquement

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_042 — Pile et tas : durée de vie des allocations

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/43-pile-et-tas-duree-de-vie-des-allocations)

### V1-N09_042-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique. » ?

- **A ✅** Pile et tas : durée de vie des allocations
- **B ❌** strncpy() — copie limitée et terminaison
- **C ❌** strlen, sizeof et terminateur nul
- **D ❌** memcpy() ou memmove() — zones qui se recouvrent

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/43-pile-et-tas-duree-de-vie-des-allocations · https://man7.org/linux/man-pages/man3/malloc.3.html · https://man7.org/linux/man-pages/man2/getrlimit.2.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_042-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Pile et tas : durée de vie des allocations » ?

- **A ❌** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.
- **B ❌** memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher.
- **C ✅** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.
- **D ❌** strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/43-pile-et-tas-duree-de-vie-des-allocations · https://man7.org/linux/man-pages/man3/malloc.3.html · https://man7.org/linux/man-pages/man2/getrlimit.2.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_042-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Pile et tas : durée de vie des allocations » ?

- **A ✅** Pile/stack : objets automatiques et appels, dans les implémentations usuelles. Tas/heap : blocs obtenus via malloc/calloc/realloc, libérés explicitement. Durée de vie statique : objets static. Ne jamais faire free(&local) ou free sur un tableau static.
- **B ❌** memcpy sur des plages qui se chevauchent a un comportement indéfini ; memmove est prévue pour ce cas. Vérifier la capacité de destination et compter les octets copiés, y compris '\0' pour une chaîne.
- **C ❌** Le troisième argument limite la copie, mais ne réserve pas automatiquement une place pour '\0'. Ici « Bonjour » devient « Bonjo » : pas de débordement, mais une troncature. Pour une copie complète, vérifier la capacité avant de copier.
- **D ❌** Pour le littéral : sizeof("Best School") = 12, strlen("Best School") = 11. Pour un pointeur char *p, sizeof(p) ne mesure jamais la longueur de la chaîne. malloc(sizeof("Best School") + 1) réserve 13 octets : c’est suffisant, sans être nécessaire. strlen n'est sûr que pour une chaîne correctement terminée : il n'empêche pas un débordement lors de la saisie.

**Réponse candidate :** A · **Explication :** La fiche indique : Pile/stack : objets automatiques et appels, dans les implémentations usuelles. Tas/heap : blocs obtenus via malloc/calloc/realloc, libérés explicitement. Durée de vie statique : objets static. Ne jamais faire free(&local) ou free sur un tableau static.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/43-pile-et-tas-duree-de-vie-des-allocations · https://man7.org/linux/man-pages/man3/malloc.3.html · https://man7.org/linux/man-pages/man2/getrlimit.2.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_042-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Pile et tas : durée de vie des allocations » ?

- **A ✅** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.
- **B ✅** Pile/stack : objets automatiques et appels, dans les implémentations usuelles. Tas/heap : blocs obtenus via malloc/calloc/realloc, libérés explicitement. Durée de vie statique : objets static. Ne jamais faire free(&local) ou free sur un tableau static.
- **C ❌** Affiche 876543210 si on affiche i dans le corps.
- **D ❌** Utiliser des noms compréhensibles, une indentation cohérente et des commentaires utiles plutôt que paraphraser chaque instruction.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/43-pile-et-tas-duree-de-vie-des-allocations · https://man7.org/linux/man-pages/man3/malloc.3.html · https://man7.org/linux/man-pages/man2/getrlimit.2.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_043 — free : quelles adresses peut-on libérer ?

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/44-free-quelles-adresses-peut-on-liberer)

### V1-N09_043-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « free accepte NULL ou un pointeur valide obtenu par une allocation dynamique compatible ; ni un littéral ni un tableau local ne se libèrent avec free. » ?

- **A ❌** Pile et tas : durée de vie des allocations
- **B ❌** Stack overflow — épuisement de la pile d'appels
- **C ❌** Use-after-free — réutiliser un bloc libéré
- **D ✅** free : quelles adresses peut-on libérer ?

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/44-free-quelles-adresses-peut-on-liberer

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_043-02 · description

**Une seule bonne réponse**

Quelle description caractérise « free : quelles adresses peut-on libérer ? » ?

- **A ❌** Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini.
- **B ❌** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.
- **C ✅** free accepte NULL ou un pointeur valide obtenu par une allocation dynamique compatible ; ni un littéral ni un tableau local ne se libèrent avec free.
- **D ❌** Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : free accepte NULL ou un pointeur valide obtenu par une allocation dynamique compatible ; ni un littéral ni un tableau local ne se libèrent avec free.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/44-free-quelles-adresses-peut-on-liberer

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_043-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « free : quelles adresses peut-on libérer ? » ?

- **A ❌** Pile/stack : objets automatiques et appels, dans les implémentations usuelles. Tas/heap : blocs obtenus via malloc/calloc/realloc, libérés explicitement. Durée de vie statique : objets static. Ne jamais faire free(&local) ou free sur un tableau static.
- **B ✅** Ne libère jamais un littéral, l’adresse d’un objet automatique ou le même bloc deux fois. free(NULL) est autorisé, mais ne rend pas valide un ancien pointeur libéré.
- **C ❌** Une récursion sans cas d'arrêt peut épuiser la pile ; une grande variable locale peut également poser problème. Stack overflow et stack buffer overflow ne désignent pas la même erreur.
- **D ❌** Après free, aucun alias vers le bloc ne doit servir à accéder aux anciennes données. Un test sans crash ne prouve pas que l'accès serait autorisé.

**Réponse candidate :** B · **Explication :** La fiche indique : Ne libère jamais un littéral, l’adresse d’un objet automatique ou le même bloc deux fois. free(NULL) est autorisé, mais ne rend pas valide un ancien pointeur libéré.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/44-free-quelles-adresses-peut-on-liberer

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_043-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « free : quelles adresses peut-on libérer ? » ?

- **A ✅** Ne libère jamais un littéral, l’adresse d’un objet automatique ou le même bloc deux fois. free(NULL) est autorisé, mais ne rend pas valide un ancien pointeur libéré.
- **B ❌** Le base bundle est l'ensemble de fichiers de départ fourni pour un exercice ; son audit consiste à vérifier les hypothèses, les entrées et les responsabilités mémoire avant d'émettre un diagnostic.
- **C ❌** Une fonction C doit posséder une signature adaptée : type de retour, nom, liste de paramètres.
- **D ✅** free accepte NULL ou un pointeur valide obtenu par une allocation dynamique compatible ; ni un littéral ni un tableau local ne se libèrent avec free.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/44-free-quelles-adresses-peut-on-liberer

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_044 — Pointeur non initialisé : comportement indéfini

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/45-pointeur-non-initialise-comportement-indefini)

### V1-N09_044-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault. » ?

- **A ✅** Pointeur non initialisé : comportement indéfini
- **B ❌** memcpy() — copier des octets sans chevauchement
- **C ❌** Valgrind Memcheck — comprendre les alertes
- **D ❌** Segfault — faute de segmentation

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/45-pointeur-non-initialise-comportement-indefini

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_044-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Pointeur non initialisé : comportement indéfini » ?

- **A ❌** Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.
- **B ❌** memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement.
- **C ❌** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.
- **D ✅** Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/45-pointeur-non-initialise-comportement-indefini

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_044-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Pointeur non initialisé : comportement indéfini » ?

- **A ❌** La première erreur affichée peut provoquer les suivantes. Consulter la pile des appels, les lignes indiquées par -g et le contexte des allocations/libérations. Un « 0 errors » sur un test n'est pas une preuve générale d'absence de bugs. Exemple : « definitely lost: 32 bytes in 1 blocks » = 1 bloc de 32 octets définitivement perdu. Ces labels en majuscules sont des cat
- **B ❌** Un segfault est un symptôme d’accès invalide détecté pendant l’exécution, pas une garantie systématique du C. Les outils de diagnostic aident, mais un test qui réussit ne prouve pas l’absence de comportement indéfini.
- **C ✅** Un segfault est une conséquence fréquente, jamais une garantie du langage. Un programme qui compile peut contenir un comportement indéfini à l’exécution.
- **D ❌** memcpy ne garantit ni le terminateur '\0', ni la capacité, ni l'absence de chevauchement : le développeur doit vérifier ces conditions avant l'appel. Pour déplacer des octets avec recouvrement, utiliser memmove.

**Réponse candidate :** C · **Explication :** La fiche indique : Un segfault est une conséquence fréquente, jamais une garantie du langage. Un programme qui compile peut contenir un comportement indéfini à l’exécution.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/45-pointeur-non-initialise-comportement-indefini

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_044-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Pointeur non initialisé : comportement indéfini » ?

- **A ❌** Le préprocesseur prépare le texte, le compilateur produit du code, l’assembleur génère des objets, et l’éditeur de liens crée l’exécutable.
- **B ❌** Si p est une variable de type struct point (l’objet lui-même), p.x lit ou modifie son membre x. Le point s’emploie sur l’objet, pas directement sur son adresse.
- **C ✅** Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.
- **D ✅** Un segfault est une conséquence fréquente, jamais une garantie du langage. Un programme qui compile peut contenir un comportement indéfini à l’exécution.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/45-pointeur-non-initialise-comportement-indefini

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_045 — realloc — redimensionner une allocation

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation)

### V1-N09_045-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec. » ?

- **A ❌** Buffer overflow — dépassement de tampon
- **B ❌** Raw pointer — pointeur brut en C
- **C ✅** realloc — redimensionner une allocation
- **D ❌** Tampon fixe, statique et dynamique — emplacement et durée de vie

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_045-02 · description

**Une seule bonne réponse**

Quelle description caractérise « realloc — redimensionner une allocation » ?

- **A ✅** realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec.
- **B ❌** Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.
- **C ❌** Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.
- **D ❌** Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_045-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « realloc — redimensionner une allocation » ?

- **A ❌** Pour une chaîne, le tableau doit accueillir strlen(source) + 1 octets. Un programme qui ne plante pas n'est pas forcément correct : une écriture hors limites est déjà un bug.
- **B ❌** Taille et durée de vie ne sont pas synonymes : char local[8] est fixe et automatique ; static char stable[8] est fixe et de durée de vie statique ; malloc(8) crée un bloc dynamique de huit octets. Ne jamais appeler free sur local ou stable.
- **C ❌** Un pointeur de type int * est une adresse typée, pas une preuve que le bloc est accessible, ni une indication de propriété. Le terme raw pointer ne désigne pas une autre syntaxe du C.
- **D ✅** Le piège classique : p = realloc(p, taille); peut faire perdre le bloc initial sur échec. Avec tmp, l’ancien pointeur reste disponible. Ne pas utiliser l’ancienne adresse après une réussite, même si la valeur numérique semble identique.

**Réponse candidate :** D · **Explication :** La fiche indique : Le piège classique : p = realloc(p, taille); peut faire perdre le bloc initial sur échec. Avec tmp, l’ancien pointeur reste disponible. Ne pas utiliser l’ancienne adresse après une réussite, même si la valeur numérique semble identique.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_045-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « realloc — redimensionner une allocation » ?

- **A ✅** Le piège classique : p = realloc(p, taille); peut faire perdre le bloc initial sur échec. Avec tmp, l’ancien pointeur reste disponible. Ne pas utiliser l’ancienne adresse après une réussite, même si la valeur numérique semble identique.
- **B ❌** Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.
- **C ✅** realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec.
- **D ❌** Un invariant est une condition que le programme doit préserver à des moments définis ; en sécurité mémoire, il exprime notamment les bornes et la validité des pointeurs.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_046 — Segfault — faute de segmentation

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/47-segfault-faute-de-segmentation)

### V1-N09_046-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal. » ?

- **A ❌** strlen sans terminateur nul — lecture hors limites
- **B ❌** Débordement du calcul de taille avant malloc
- **C ✅** Segfault — faute de segmentation
- **D ❌** Pointeur de fonction — déclarer une signature

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/47-segfault-faute-de-segmentation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_046-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Segfault — faute de segmentation » ?

- **A ❌** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.
- **B ✅** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.
- **C ❌** int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *.
- **D ❌** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/47-segfault-faute-de-segmentation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_046-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Segfault — faute de segmentation » ?

- **A ✅** Un segfault est un symptôme d’accès invalide détecté pendant l’exécution, pas une garantie systématique du C. Les outils de diagnostic aident, mais un test qui réussit ne prouve pas l’absence de comportement indéfini.
- **B ❌** strlen n'est pas un contrôle de taille pour une mémoire arbitraire. Vérifier l'existence de '\0' dans les limites connues avant de traiter un tampon comme une chaîne. Ne pas confondre strlen et sizeof.
- **C ❌** Bien lire les parenthèses : int (*f)(int) est un pointeur de fonction ; int *f(int) est une fonction renvoyant int *. Ne pas confondre avec int *.
- **D ❌** Ne pas multiplier deux tailles non fiables avant d'avoir vérifié le risque de dépassement. malloc vérifie la demande reçue, mais ne peut pas corriger un calcul de taille qui a déjà débordé.

**Réponse candidate :** A · **Explication :** La fiche indique : Un segfault est un symptôme d’accès invalide détecté pendant l’exécution, pas une garantie systématique du C. Les outils de diagnostic aident, mais un test qui réussit ne prouve pas l’absence de comportement indéfini.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/47-segfault-faute-de-segmentation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_046-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Segfault — faute de segmentation » ?

- **A ✅** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.
- **B ❌** « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type.
- **C ✅** Un segfault est un symptôme d’accès invalide détecté pendant l’exécution, pas une garantie systématique du C. Les outils de diagnostic aident, mais un test qui réussit ne prouve pas l’absence de comportement indéfini.
- **D ❌** Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/47-segfault-faute-de-segmentation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_047 — strncpy() — copie limitée et terminaison

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/48-strncpy-copie-limitee-et-terminaison)

### V1-N09_047-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide. » ?

- **A ❌** Dangling pointer — pointeur vers un objet qui n'existe plus
- **B ❌** Tableau de pointeurs de fonctions — choisir une opération
- **C ❌** Dépassement de tampon sur la pile — erreur avant malloc
- **D ✅** strncpy() — copie limitée et terminaison

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/48-strncpy-copie-limitee-et-terminaison · https://man7.org/linux/man-pages/man3/strncpy.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_047-02 · description

**Une seule bonne réponse**

Quelle description caractérise « strncpy() — copie limitée et terminaison » ?

- **A ❌** Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.
- **B ❌** Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.
- **C ✅** strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide.
- **D ❌** Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/48-strncpy-copie-limitee-et-terminaison · https://man7.org/linux/man-pages/man3/strncpy.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_047-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « strncpy() — copie limitée et terminaison » ?

- **A ❌** operations[index] est un pointeur de fonction, pas le résultat d'une fonction. Toujours valider l'indice et la non-nullité avant l'appel.
- **B ✅** Le troisième argument limite la copie, mais ne réserve pas automatiquement une place pour '\0'. Ici « Bonjour » devient « Bonjo » : pas de débordement, mais une troncature. Pour une copie complète, vérifier la capacité avant de copier.
- **C ❌** Dans la question du lab, la bonne raison est que « corruption may have already occurred during input reading ». Corriger la copie après coup n'annule pas un débordement déjà produit. Vérifie la longueur lors de la LECTURE, et refuse les lignes incomplètes si nécessaire.
- **D ❌** VRAI : un pointeur vers un bloc libéré ne permet plus d'accéder à ce bloc, immédiatement après free. FAUX : p = NULL protège automatiquement les autres pointeurs qui désignent l'ancien bloc. Un pointeur n'est pas forcément valide jusqu'à la fin du programme.

**Réponse candidate :** B · **Explication :** La fiche indique : Le troisième argument limite la copie, mais ne réserve pas automatiquement une place pour '\0'. Ici « Bonjour » devient « Bonjo » : pas de débordement, mais une troncature. Pour une copie complète, vérifier la capacité avant de copier.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/48-strncpy-copie-limitee-et-terminaison · https://man7.org/linux/man-pages/man3/strncpy.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_047-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strncpy() — copie limitée et terminaison » ?

- **A ✅** Le troisième argument limite la copie, mais ne réserve pas automatiquement une place pour '\0'. Ici « Bonjour » devient « Bonjo » : pas de débordement, mais une troncature. Pour une copie complète, vérifier la capacité avant de copier.
- **B ❌** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.
- **C ❌** Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};.
- **D ✅** strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/48-strncpy-copie-limitee-et-terminaison · https://man7.org/linux/man-pages/man3/strncpy.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_048 — calloc() — allouer et initialiser à zéro

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/49-calloc-allouer-et-initialiser-a-zero)

### V1-N09_048-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free. » ?

- **A ✅** calloc() — allouer et initialiser à zéro
- **B ❌** Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites
- **C ❌** Pointeur (pointer)
- **D ❌** Valgrind : « definitely lost » et les octets perdus

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/49-calloc-allouer-et-initialiser-a-zero · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_048-02 · description

**Une seule bonne réponse**

Quelle description caractérise « calloc() — allouer et initialiser à zéro » ?

- **A ❌** « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine.
- **B ❌** INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.
- **C ❌** Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int.
- **D ✅** calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/49-calloc-allouer-et-initialiser-a-zero · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_048-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « calloc() — allouer et initialiser à zéro » ?

- **A ✅** calloc remet les octets du bloc à zéro, mais n'empêche ni un accès hors limites ni l'utilisation du bloc après free. Le résultat peut être NULL si l'allocation échoue.
- **B ❌** 32 bytes = le volume perdu, 1 blocks = le nombre de blocs perdus. « Definitely lost » signifie fuite certaine : il faut corriger la gestion du pointeur ou l'absence de free. L'exemple fourni est volontairement sans fuite.
- **C ❌** Une fuite indirecte n'est pas la même chose qu'une fuite certaine directe ; un use-after-free peut apparaître comme un Invalid read/write. Les labels INVALID_WRITE, UNINITIALIZED_VALUE, etc. ne sont pas tous des messages émis mot pour mot par Valgrind.
- **D ❌** Toujours initialiser un pointeur avant de le déréférencer.

**Réponse candidate :** A · **Explication :** La fiche indique : calloc remet les octets du bloc à zéro, mais n'empêche ni un accès hors limites ni l'utilisation du bloc après free. Le résultat peut être NULL si l'allocation échoue.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/49-calloc-allouer-et-initialiser-a-zero · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_048-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « calloc() — allouer et initialiser à zéro » ?

- **A ✅** calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free.
- **B ❌** sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.
- **C ❌** Un membre peut être lui-même une struct : p.position.x traverse deux niveaux.
- **D ✅** calloc remet les octets du bloc à zéro, mais n'empêche ni un accès hors limites ni l'utilisation du bloc après free. Le résultat peut être NULL si l'allocation échoue.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/49-calloc-allouer-et-initialiser-a-zero · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_049 — Buffer overflow — dépassement de tampon

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/50-buffer-overflow-depassement-de-tampon)

### V1-N09_049-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier. » ?

- **A ❌** Ownership — qui est responsable de free() ?
- **B ✅** Buffer overflow — dépassement de tampon
- **C ❌** * dans une déclaration
- **D ❌** Callback — transmettre une fonction en paramètre

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/50-buffer-overflow-depassement-de-tampon · https://owasp.org/www-community/attacks/Buffer_overflow_attack · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87151983

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_049-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Buffer overflow — dépassement de tampon » ?

- **A ✅** Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier.
- **B ❌** Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.
- **C ❌** int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré.
- **D ❌** L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/50-buffer-overflow-depassement-de-tampon · https://owasp.org/www-community/attacks/Buffer_overflow_attack · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87151983

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_049-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Buffer overflow — dépassement de tampon » ?

- **A ❌** VRAI : copier un pointeur dans plusieurs variables crée un risque de confusion de propriété. FAUX : cela transfère automatiquement la propriété ou duplique l'allocation. Seul le responsable désigné libère le bloc, une fois.
- **B ❌** Un callback n'est pas forcément asynchrone : appliquer appelle ici directement afficher_double. La signature du paramètre doit correspondre à celle de la fonction.
- **C ❌** Avec plusieurs variables déclarées sur une même ligne, chaque déclarateur doit être lu séparément.
- **D ✅** Pour une chaîne, le tableau doit accueillir strlen(source) + 1 octets. Un programme qui ne plante pas n'est pas forcément correct : une écriture hors limites est déjà un bug.

**Réponse candidate :** D · **Explication :** La fiche indique : Pour une chaîne, le tableau doit accueillir strlen(source) + 1 octets. Un programme qui ne plante pas n'est pas forcément correct : une écriture hors limites est déjà un bug.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/50-buffer-overflow-depassement-de-tampon · https://owasp.org/www-community/attacks/Buffer_overflow_attack · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87151983

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_049-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Buffer overflow — dépassement de tampon » ?

- **A ✅** Pour une chaîne, le tableau doit accueillir strlen(source) + 1 octets. Un programme qui ne plante pas n'est pas forcément correct : une écriture hors limites est déjà un bug.
- **B ❌** La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.
- **C ✅** Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier.
- **D ❌** En passant struct point *p à une fonction, celle-ci peut modifier l’objet de l’appelant via p->x.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/50-buffer-overflow-depassement-de-tampon · https://owasp.org/www-community/attacks/Buffer_overflow_attack · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87151983

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_050 — Use-after-free — réutiliser un bloc libéré

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/51-use-after-free-reutiliser-un-bloc-libere)

### V1-N09_050-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini. » ?

- **A ❌** qsort() — comparateur passé par pointeur de fonction
- **B ❌** char * — pointeur vers un caractère ou une chaîne
- **C ✅** Use-after-free — réutiliser un bloc libéré
- **D ❌** Valeur de p, *p et &p

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/51-use-after-free-reutiliser-un-bloc-libere · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152153

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_050-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Use-after-free — réutiliser un bloc libéré » ?

- **A ❌** p contient une adresse ; *p est la valeur pointée ; &p est l’adresse mémoire du pointeur lui-même.
- **B ✅** Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini.
- **C ❌** char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur.
- **D ❌** qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/51-use-after-free-reutiliser-un-bloc-libere · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152153

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_050-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Use-after-free — réutiliser un bloc libéré » ?

- **A ❌** Le comparateur de qsort reçoit des pointeurs vers des éléments, pas les éléments eux-mêmes. Éviter return a-b si a et b sont des int susceptibles de déborder.
- **B ❌** Ne confonds pas la case qui contient une adresse avec la case située à cette adresse.
- **C ✅** Après free, aucun alias vers le bloc ne doit servir à accéder aux anciennes données. Un test sans crash ne prouve pas que l'accès serait autorisé.
- **D ❌** char * désigne un pointeur, char tableau[8] un tableau. sizeof(p) mesure le pointeur, et sizeof(tableau) mesure le tableau lorsqu'il est encore dans sa portée comme tableau. Un texte littéral est à traiter comme non modifiable.

**Réponse candidate :** C · **Explication :** La fiche indique : Après free, aucun alias vers le bloc ne doit servir à accéder aux anciennes données. Un test sans crash ne prouve pas que l'accès serait autorisé.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/51-use-after-free-reutiliser-un-bloc-libere · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152153

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_050-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Use-after-free — réutiliser un bloc libéré » ?

- **A ❌** typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.
- **B ✅** Après free, aucun alias vers le bloc ne doit servir à accéder aux anciennes données. Un test sans crash ne prouve pas que l'accès serait autorisé.
- **C ✅** Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini.
- **D ❌** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/51-use-after-free-reutiliser-un-bloc-libere · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152153

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_051 — Double free — ne pas libérer deux fois

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/52-double-free-ne-pas-liberer-deux-fois)

### V1-N09_051-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet. » ?

- **A ❌** Appeler un pointeur de fonction — f(x) ou (*f)(x)
- **B ❌** & (opérateur d’adresse)
- **C ❌** sizeof
- **D ✅** Double free — ne pas libérer deux fois

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/52-double-free-ne-pas-liberer-deux-fois · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_051-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Double free — ne pas libérer deux fois » ?

- **A ✅** Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.
- **B ❌** Pour un pointeur de fonction valide f, f(5) et (*f)(5) appellent la même fonction ; vérifier NULL avant l'appel.
- **C ❌** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.
- **D ❌** sizeof donne la taille en octets d’un type ou d’un objet. Exemple : sizeof(int) pour un entier.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/52-double-free-ne-pas-liberer-deux-fois · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_051-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Double free — ne pas libérer deux fois » ?

- **A ❌** Utiliser %zu pour afficher une valeur de type size_t.
- **B ✅** Ne pas utiliser free deux fois sur une même allocation. L'exemple appelle free sur p puis sur NULL : ce n'est pas une double libération du bloc. Mettre p à NULL ne sécurise pas les alias éventuels. Un double free peut venir d'une ownership ambiguë ou de deux chemins de nettoyage ; chercher les chemins réels avant de conclure.
- **C ❌** Ne jamais appeler un pointeur NULL ou de signature incompatible. L'indirection explicite (*f)(x) et la forme directe f(x) sont équivalentes.
- **D ❌** Ne confonds pas &n (adresse de n) avec n (valeur de n).

**Réponse candidate :** B · **Explication :** La fiche indique : Ne pas utiliser free deux fois sur une même allocation. L'exemple appelle free sur p puis sur NULL : ce n'est pas une double libération du bloc. Mettre p à NULL ne sécurise pas les alias éventuels. Un double free peut venir d'une ownership ambiguë ou de deux chemins de nettoyage ; chercher les chemins réels avant de conclure.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/52-double-free-ne-pas-liberer-deux-fois · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_051-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Double free — ne pas libérer deux fois » ?

- **A ❌** Une struct peut contenir un pointeur vers son propre type, par exemple struct noeud *suivant.
- **B ❌** Noyau du système d’exploitation ; interface entre logiciels et ressources matérielles.
- **C ✅** Ne pas utiliser free deux fois sur une même allocation. L'exemple appelle free sur p puis sur NULL : ce n'est pas une double libération du bloc. Mettre p à NULL ne sécurise pas les alias éventuels. Un double free peut venir d'une ownership ambiguë ou de deux chemins de nettoyage ; chercher les chemins réels avant de conclure.
- **D ✅** Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/52-double-free-ne-pas-liberer-deux-fois · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_052 — Débordement du calcul de taille avant malloc

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/53-debordement-du-calcul-de-taille-avant-malloc)

### V1-N09_052-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite. » ?

- **A ✅** Débordement du calcul de taille avant malloc
- **B ❌** Modifier une valeur par un pointeur
- **C ❌** Passer une adresse à une fonction
- **D ❌** typedef d'un pointeur de fonction — simplifier les signatures

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/53-debordement-du-calcul-de-taille-avant-malloc · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152128

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_052-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Débordement du calcul de taille avant malloc » ?

- **A ❌** typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction.
- **B ❌** Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.
- **C ❌** Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.
- **D ✅** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/53-debordement-du-calcul-de-taille-avant-malloc · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152128

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_052-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Débordement du calcul de taille avant malloc » ?

- **A ✅** Ne pas multiplier deux tailles non fiables avant d'avoir vérifié le risque de dépassement. malloc vérifie la demande reçue, mais ne peut pas corriger un calcul de taille qui a déjà débordé.
- **B ❌** p = &autreVariable changerait, à l’inverse, l’objet pointé.
- **C ❌** typedef définit un alias de type, pas une fonction ni une allocation. La signature doit rester compatible et les pointeurs peuvent valoir NULL si le contrat l'autorise.
- **D ❌** La fonction doit recevoir une adresse valide avant de déréférencer p.

**Réponse candidate :** A · **Explication :** La fiche indique : Ne pas multiplier deux tailles non fiables avant d'avoir vérifié le risque de dépassement. malloc vérifie la demande reçue, mais ne peut pas corriger un calcul de taille qui a déjà débordé.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/53-debordement-du-calcul-de-taille-avant-malloc · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152128

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_052-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Débordement du calcul de taille avant malloc » ?

- **A ✅** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.
- **B ❌** Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre.
- **C ❌** Interface graphique / interface en ligne de commande.
- **D ✅** Ne pas multiplier deux tailles non fiables avant d'avoir vérifié le risque de dépassement. malloc vérifie la demande reçue, mais ne peut pas corriger un calcul de taille qui a déjà débordé.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/53-debordement-du-calcul-de-taille-avant-malloc · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152128

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_053 — Valgrind Memcheck — comprendre les alertes

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/54-valgrind-memcheck-comprendre-les-alertes)

### V1-N09_053-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites. » ?

- **A ❌** Tableau ≠ pointeur
- **B ✅** Valgrind Memcheck — comprendre les alertes
- **C ❌** Adresse mémoire
- **D ❌** %p avec printf

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/54-valgrind-memcheck-comprendre-les-alertes · https://valgrind.org/docs/manual/mc-manual.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_053-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Valgrind Memcheck — comprendre les alertes » ?

- **A ❌** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).
- **B ❌** Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation.
- **C ✅** Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.
- **D ❌** Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/54-valgrind-memcheck-comprendre-les-alertes · https://valgrind.org/docs/manual/mc-manual.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_053-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Valgrind Memcheck — comprendre les alertes » ?

- **A ❌** L’adresse affichée peut changer d’une exécution à l’autre.
- **B ❌** sizeof(a) et sizeof(p) ne mesurent pas la même chose.
- **C ❌** Le format exact de l’adresse affichée dépend de l’implémentation.
- **D ✅** La première erreur affichée peut provoquer les suivantes. Consulter la pile des appels, les lignes indiquées par -g et le contexte des allocations/libérations. Un « 0 errors » sur un test n'est pas une preuve générale d'absence de bugs. Exemple : « definitely lost: 32 bytes in 1 blocks » = 1 bloc de 32 octets définitivement perdu. Ces labels en majuscules sont des cat

**Réponse candidate :** D · **Explication :** La fiche indique : La première erreur affichée peut provoquer les suivantes. Consulter la pile des appels, les lignes indiquées par -g et le contexte des allocations/libérations. Un « 0 errors » sur un test n'est pas une preuve générale d'absence de bugs. Exemple : « definitely lost: 32 bytes in 1 blocks » = 1 bloc de 32 octets définitivement perdu. Ces labels en majuscules sont des cat

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/54-valgrind-memcheck-comprendre-les-alertes · https://valgrind.org/docs/manual/mc-manual.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_053-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Valgrind Memcheck — comprendre les alertes » ?

- **A ✅** La première erreur affichée peut provoquer les suivantes. Consulter la pile des appels, les lignes indiquées par -g et le contexte des allocations/libérations. Un « 0 errors » sur un test n'est pas une preuve générale d'absence de bugs. Exemple : « definitely lost: 32 bytes in 1 blocks » = 1 bloc de 32 octets définitivement perdu. Ces labels en majuscules sont des cat
- **B ✅** Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.
- **C ❌** Shell courant sur Linux.
- **D ❌** Gère les ressources, les processus, la mémoire, les fichiers et les périphériques.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/54-valgrind-memcheck-comprendre-les-alertes · https://valgrind.org/docs/manual/mc-manual.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_054 — memcpy() ou memmove() — zones qui se recouvrent

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/55-memcpy-ou-memmove-zones-qui-se-recouvrent)

### V1-N09_054-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher. » ?

- **A ✅** memcpy() ou memmove() — zones qui se recouvrent
- **B ❌** * dans une expression
- **C ❌** Passage d’arguments par valeur
- **D ❌** &tableau

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/55-memcpy-ou-memmove-zones-qui-se-recouvrent · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_054-02 · description

**Une seule bonne réponse**

Quelle description caractérise « memcpy() ou memmove() — zones qui se recouvrent » ?

- **A ❌** &a désigne l’adresse du tableau entier. Elle a la même position mémoire que &a[0], mais un type différent.
- **B ✅** memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher.
- **C ❌** *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement.
- **D ❌** En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/55-memcpy-ou-memmove-zones-qui-se-recouvrent · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_054-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « memcpy() ou memmove() — zones qui se recouvrent » ?

- **A ✅** memcpy sur des plages qui se chevauchent a un comportement indéfini ; memmove est prévue pour ce cas. Vérifier la capacité de destination et compter les octets copiés, y compris '\0' pour une chaîne.
- **B ❌** Le type de &a est un pointeur vers tableau de 5 int.
- **C ❌** Pour modifier une variable de l’appelant, on peut transmettre son adresse.
- **D ❌** Déréférencer un pointeur non initialisé ou invalide entraîne un comportement indéfini.

**Réponse candidate :** A · **Explication :** La fiche indique : memcpy sur des plages qui se chevauchent a un comportement indéfini ; memmove est prévue pour ce cas. Vérifier la capacité de destination et compter les octets copiés, y compris '\0' pour une chaîne.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/55-memcpy-ou-memmove-zones-qui-se-recouvrent · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_054-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « memcpy() ou memmove() — zones qui se recouvrent » ?

- **A ❌** Sous-système Windows pour Linux : environnement Linux utilisable sur Windows.
- **B ✅** memcpy sur des plages qui se chevauchent a un comportement indéfini ; memmove est prévue pour ce cas. Vérifier la capacité de destination et compter les octets copiés, y compris '\0' pour une chaîne.
- **C ✅** memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher.
- **D ❌** Dossier personnel de l’utilisateur.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/55-memcpy-ou-memmove-zones-qui-se-recouvrent · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_055 — Dépassement de tampon sur la pile — erreur avant malloc

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/56-depassement-de-tampon-sur-la-pile-erreur-avant-malloc)

### V1-N09_055-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur. » ?

- **A ❌** Type pointé
- **B ❌** Chaîne de caractères en C
- **C ❌** Indices de tableau
- **D ✅** Dépassement de tampon sur la pile — erreur avant malloc

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/56-depassement-de-tampon-sur-la-pile-erreur-avant-malloc · https://community.owasp.org/vulnerabilities/Buffer_Overflow · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_055-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Dépassement de tampon sur la pile — erreur avant malloc » ?

- **A ✅** Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.
- **B ❌** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **C ❌** int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.
- **D ❌** Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/56-depassement-de-tampon-sur-la-pile-erreur-avant-malloc · https://community.owasp.org/vulnerabilities/Buffer_Overflow · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_055-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Dépassement de tampon sur la pile — erreur avant malloc » ?

- **A ❌** L’arithmétique des pointeurs doit rester dans les limites du même tableau, ou juste après.
- **B ❌** Toutes les suites de char ne sont pas nécessairement des chaînes valides.
- **C ✅** Dans la question du lab, la bonne raison est que « corruption may have already occurred during input reading ». Corriger la copie après coup n'annule pas un débordement déjà produit. Vérifie la longueur lors de la LECTURE, et refuse les lignes incomplètes si nécessaire.
- **D ❌** a[5] ne désigne pas un élément de ce tableau.

**Réponse candidate :** C · **Explication :** La fiche indique : Dans la question du lab, la bonne raison est que « corruption may have already occurred during input reading ». Corriger la copie après coup n'annule pas un débordement déjà produit. Vérifie la longueur lors de la LECTURE, et refuse les lignes incomplètes si nécessaire.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/56-depassement-de-tampon-sur-la-pile-erreur-avant-malloc · https://community.owasp.org/vulnerabilities/Buffer_Overflow · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_055-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Dépassement de tampon sur la pile — erreur avant malloc » ?

- **A ✅** Dans la question du lab, la bonne raison est que « corruption may have already occurred during input reading ». Corriger la copie après coup n'annule pas un débordement déjà produit. Vérifie la longueur lors de la LECTURE, et refuse les lignes incomplètes si nécessaire.
- **B ❌** Programme qui interprète les commandes et lance les autres programmes.
- **C ❌** Dépend du répertoire actuel.
- **D ✅** Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/56-depassement-de-tampon-sur-la-pile-erreur-avant-malloc · https://community.owasp.org/vulnerabilities/Buffer_Overflow · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_056 — Tampon fixe, statique et dynamique — emplacement et durée de vie

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/57-tampon-fixe-statique-et-dynamique-emplacement-et-duree-de-vie)

### V1-N09_056-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes. » ?

- **A ❌** sizeof(tableau)
- **B ❌** Exercices d’observation
- **C ✅** Tampon fixe, statique et dynamique — emplacement et durée de vie
- **D ❌** Tailles des pointeurs

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/57-tampon-fixe-statique-et-dynamique-emplacement-et-duree-de-vie · https://man7.org/linux/man-pages/man3/malloc.3.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_056-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Tampon fixe, statique et dynamique — emplacement et durée de vie » ?

- **A ❌** Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme.
- **B ❌** Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse.
- **C ❌** sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur.
- **D ✅** Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/57-tampon-fixe-statique-et-dynamique-emplacement-et-duree-de-vie · https://man7.org/linux/man-pages/man3/malloc.3.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_056-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Tampon fixe, statique et dynamique — emplacement et durée de vie » ?

- **A ✅** Taille et durée de vie ne sont pas synonymes : char local[8] est fixe et automatique ; static char stable[8] est fixe et de durée de vie statique ; malloc(8) crée un bloc dynamique de huit octets. Ne jamais appeler free sur local ou stable.
- **B ❌** Dans un paramètre de fonction déclaré int a[], a est traité comme un pointeur : sizeof(a) n’y mesure pas le tableau d’origine.
- **C ❌** Ne jamais coder en dur une taille de pointeur à partir de suppositions.
- **D ❌** Réponse : n vaut 8. Essaie ensuite d’expliquer pourquoi, plutôt que de retenir le chiffre.

**Réponse candidate :** A · **Explication :** La fiche indique : Taille et durée de vie ne sont pas synonymes : char local[8] est fixe et automatique ; static char stable[8] est fixe et de durée de vie statique ; malloc(8) crée un bloc dynamique de huit octets. Ne jamais appeler free sur local ou stable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/57-tampon-fixe-statique-et-dynamique-emplacement-et-duree-de-vie · https://man7.org/linux/man-pages/man3/malloc.3.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_056-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tampon fixe, statique et dynamique — emplacement et durée de vie » ?

- **A ✅** Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.
- **B ❌** Début de l’arborescence Linux.
- **C ❌** Copier / déplacer-renommer / supprimer.
- **D ✅** Taille et durée de vie ne sont pas synonymes : char local[8] est fixe et automatique ; static char stable[8] est fixe et de durée de vie statique ; malloc(8) crée un bloc dynamique de huit octets. Ne jamais appeler free sur local ou stable.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/57-tampon-fixe-statique-et-dynamique-emplacement-et-duree-de-vie · https://man7.org/linux/man-pages/man3/malloc.3.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_057 — Stack overflow — épuisement de la pile d'appels

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/58-stack-overflow-epuisement-de-la-pile-d-appels)

### V1-N09_057-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux. » ?

- **A ❌** Tableau à deux dimensions
- **B ✅** Stack overflow — épuisement de la pile d'appels
- **C ❌** Tableau
- **D ❌** Notation équivalente

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/58-stack-overflow-epuisement-de-la-pile-d-appels · https://man7.org/linux/man-pages/man2/getrlimit.2.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_057-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Stack overflow — épuisement de la pile d'appels » ?

- **A ✅** Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux.
- **B ❌** int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.
- **C ❌** Pour un tableau a, a[2] désigne le même élément que *(a + 2).
- **D ❌** Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/58-stack-overflow-epuisement-de-la-pile-d-appels · https://man7.org/linux/man-pages/man2/getrlimit.2.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_057-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Stack overflow — épuisement de la pile d'appels » ?

- **A ❌** Cette équivalence ne rend pas valides les indices hors limites.
- **B ❌** Le nombre de colonnes fait partie du type utilisé pour manipuler ce tableau.
- **C ❌** Les accès à l’extérieur du tableau sont invalides.
- **D ✅** Une récursion sans cas d'arrêt peut épuiser la pile ; une grande variable locale peut également poser problème. Stack overflow et stack buffer overflow ne désignent pas la même erreur.

**Réponse candidate :** D · **Explication :** La fiche indique : Une récursion sans cas d'arrêt peut épuiser la pile ; une grande variable locale peut également poser problème. Stack overflow et stack buffer overflow ne désignent pas la même erreur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/58-stack-overflow-epuisement-de-la-pile-d-appels · https://man7.org/linux/man-pages/man2/getrlimit.2.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_057-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Stack overflow — épuisement de la pile d'appels » ?

- **A ❌** Changer les permissions / propriétaire / utiliser des privilèges élevés.
- **B ✅** Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux.
- **C ✅** Une récursion sans cas d'arrêt peut épuiser la pile ; une grande variable locale peut également poser problème. Stack overflow et stack buffer overflow ne désignent pas la même erreur.
- **D ❌** Part de /, indépendamment du répertoire actuel.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/58-stack-overflow-epuisement-de-la-pile-d-appels · https://man7.org/linux/man-pages/man2/getrlimit.2.html · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_058 — Valgrind : « definitely lost » et les octets perdus

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/59-valgrind-definitely-lost-et-les-octets-perdus)

### V1-N09_058-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine. » ?

- **A ✅** Valgrind : « definitely lost » et les octets perdus
- **B ❌** %s avec printf
- **C ❌** Conversion tableau → pointeur
- **D ❌** malloc — allocation dynamique

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/59-valgrind-definitely-lost-et-les-octets-perdus · https://valgrind.org/docs/manual/mc-manual.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_058-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Valgrind : « definitely lost » et les octets perdus » ?

- **A ❌** Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.
- **B ❌** malloc réserve un bloc de mémoire pendant l’exécution et renvoie son adresse (ou NULL si l’allocation échoue).
- **C ✅** « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine.
- **D ❌** Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/59-valgrind-definitely-lost-et-les-octets-perdus · https://valgrind.org/docs/manual/mc-manual.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_058-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Valgrind : « definitely lost » et les octets perdus » ?

- **A ✅** 32 bytes = le volume perdu, 1 blocks = le nombre de blocs perdus. « Definitely lost » signifie fuite certaine : il faut corriger la gestion du pointeur ou l'absence de free. L'exemple fourni est volontairement sans fuite.
- **B ❌** Vérifier p != NULL avant de le déréférencer. malloc ne met pas les octets à zéro ; chaque allocation réussie doit être libérée une fois quand elle n’est plus utile.
- **C ❌** Une chaîne non terminée correctement peut provoquer un accès mémoire invalide.
- **D ❌** Cette conversion ne se produit pas dans certains contextes, notamment sizeof(a) et &a.

**Réponse candidate :** A · **Explication :** La fiche indique : 32 bytes = le volume perdu, 1 blocks = le nombre de blocs perdus. « Definitely lost » signifie fuite certaine : il faut corriger la gestion du pointeur ou l'absence de free. L'exemple fourni est volontairement sans fuite.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/59-valgrind-definitely-lost-et-les-octets-perdus · https://valgrind.org/docs/manual/mc-manual.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_058-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Valgrind : « definitely lost » et les octets perdus » ?

- **A ✅** « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine.
- **B ✅** 32 bytes = le volume perdu, 1 blocks = le nombre de blocs perdus. « Definitely lost » signifie fuite certaine : il faut corriger la gestion du pointeur ou l'absence de free. L'exemple fourni est volontairement sans fuite.
- **C ❌** Créer un dossier / créer un fichier vide ou actualiser sa date.
- **D ❌** Rediriger les erreurs / prendre un fichier comme entrée.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/59-valgrind-definitely-lost-et-les-octets-perdus · https://valgrind.org/docs/manual/mc-manual.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_059 — strlen sans terminateur nul — lecture hors limites

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/60-strlen-sans-terminateur-nul-lecture-hors-limites)

### V1-N09_059-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone. » ?

- **A ❌** Arithmétique des pointeurs
- **B ❌** Chaîne littérale et tableau de char
- **C ❌** Parcourir un tableau
- **D ✅** strlen sans terminateur nul — lecture hors limites

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/60-strlen-sans-terminateur-nul-lecture-hors-limites · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_059-02 · description

**Une seule bonne réponse**

Quelle description caractérise « strlen sans terminateur nul — lecture hors limites » ?

- **A ❌** Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1.
- **B ❌** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.
- **C ✅** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.
- **D ❌** Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/60-strlen-sans-terminateur-nul-lecture-hors-limites · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_059-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « strlen sans terminateur nul — lecture hors limites » ?

- **A ❌** Le déplacement n’est défini que dans le même tableau, ou une position juste après.
- **B ✅** strlen n'est pas un contrôle de taille pour une mémoire arbitraire. Vérifier l'existence de '\0' dans les limites connues avant de traiter un tampon comme une chaîne. Ne pas confondre strlen et sizeof.
- **C ❌** Ne pas écrire dans une chaîne littérale. const char *p protège contre cette modification ; char s[] crée un tableau modifiable distinct.
- **D ❌** Évite les indices négatifs et les accès au-delà de la dernière case.

**Réponse candidate :** B · **Explication :** La fiche indique : strlen n'est pas un contrôle de taille pour une mémoire arbitraire. Vérifier l'existence de '\0' dans les limites connues avant de traiter un tampon comme une chaîne. Ne pas confondre strlen et sizeof.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/60-strlen-sans-terminateur-nul-lecture-hors-limites · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_059-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strlen sans terminateur nul — lecture hors limites » ?

- **A ✅** strlen n'est pas un contrôle de taille pour une mémoire arbitraire. Vérifier l'existence de '\0' dans les limites connues avant de traiter un tampon comme une chaîne. Ne pas confondre strlen et sizeof.
- **B ❌** Rechercher / compter les lignes / transformer des caractères.
- **C ❌** r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).
- **D ✅** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/60-strlen-sans-terminateur-nul-lecture-hors-limites · https://man7.org/linux/man-pages/man3/strlen.3.html · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152047

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_060 — memcpy() — copier des octets sans chevauchement

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/61-memcpy-copier-des-octets-sans-chevauchement)

### V1-N09_060-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement. » ?

- **A ✅** memcpy() — copier des octets sans chevauchement
- **B ❌** Valgrind — détecter les fuites
- **C ❌** Principe d'inversion d'une chaîne
- **D ❌** Caractère nul

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/61-memcpy-copier-des-octets-sans-chevauchement · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_060-02 · description

**Une seule bonne réponse**

Quelle description caractérise « memcpy() — copier des octets sans chevauchement » ?

- **A ❌** Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.
- **B ❌** Valgrind Memcheck détecte à l’exécution des fuites mémoire (memory leaks) et de nombreux accès mémoire invalides ; compiler avec -g pour obtenir les lignes du code.
- **C ❌** \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.
- **D ✅** memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/61-memcpy-copier-des-octets-sans-chevauchement · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_060-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « memcpy() — copier des octets sans chevauchement » ?

- **A ❌** Cette fiche décrit une méthode de raisonnement, sans résoudre intégralement un exercice.
- **B ❌** Les fonctions sur les chaînes doivent pouvoir trouver le terminateur nul.
- **C ✅** memcpy ne garantit ni le terminateur '\0', ni la capacité, ni l'absence de chevauchement : le développeur doit vérifier ces conditions avant l'appel. Pour déplacer des octets avec recouvrement, utiliser memmove.
- **D ❌** Valgrind s’utilise dans le terminal sur un programme compilé, pas comme un #include C. « ERROR SUMMARY: 0 errors » seul ne suffit pas : consulter aussi les catégories de fuites. L’outil ne vérifie que les chemins réellement exécutés.

**Réponse candidate :** C · **Explication :** La fiche indique : memcpy ne garantit ni le terminateur '\0', ni la capacité, ni l'absence de chevauchement : le développeur doit vérifier ces conditions avant l'appel. Pour déplacer des octets avec recouvrement, utiliser memmove.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/61-memcpy-copier-des-octets-sans-chevauchement · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_060-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « memcpy() — copier des octets sans chevauchement » ?

- **A ❌** Écraser un fichier avec la sortie / ajouter à la fin.
- **B ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.
- **C ✅** memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement.
- **D ✅** memcpy ne garantit ni le terminateur '\0', ni la capacité, ni l'absence de chevauchement : le développeur doit vérifier ces conditions avant l'appel. Pour déplacer des octets avec recouvrement, utiliser memmove.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/61-memcpy-copier-des-octets-sans-chevauchement · https://man7.org/linux/man-pages/man3/memcpy.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_061 — Ownership — qui est responsable de free() ?

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/62-ownership-qui-est-responsable-de-free)

### V1-N09_061-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité. » ?

- **A ❌** Initialisation d'un tableau
- **B ❌** strlen, sizeof et terminateur nul
- **C ✅** Ownership — qui est responsable de free() ?
- **D ❌** Allocation automatique — variables locales

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/62-ownership-qui-est-responsable-de-free · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_061-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Ownership — qui est responsable de free() ? » ?

- **A ✅** L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité.
- **B ❌** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.
- **C ❌** Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.
- **D ❌** Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30};

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/62-ownership-qui-est-responsable-de-free · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_061-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Ownership — qui est responsable de free() ? » ?

- **A ❌** Un tableau existant ne se réaffecte pas avec l'opérateur = comme une variable scalaire.
- **B ❌** Ne pas retourner l’adresse d’un tableau local pour l’utiliser après le retour de la fonction. Ne jamais appeler free sur une variable ou un tableau automatique.
- **C ❌** Pour le littéral : sizeof("Best School") = 12, strlen("Best School") = 11. Pour un pointeur char *p, sizeof(p) ne mesure jamais la longueur de la chaîne. malloc(sizeof("Best School") + 1) réserve 13 octets : c’est suffisant, sans être nécessaire. strlen n'est sûr que pour une chaîne correctement terminée : il n'empêche pas un débordement lors de la saisie.
- **D ✅** VRAI : copier un pointeur dans plusieurs variables crée un risque de confusion de propriété. FAUX : cela transfère automatiquement la propriété ou duplique l'allocation. Seul le responsable désigné libère le bloc, une fois.

**Réponse candidate :** D · **Explication :** La fiche indique : VRAI : copier un pointeur dans plusieurs variables crée un risque de confusion de propriété. FAUX : cela transfère automatiquement la propriété ou duplique l'allocation. Seul le responsable désigné libère le bloc, une fois.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/62-ownership-qui-est-responsable-de-free · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_061-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Ownership — qui est responsable de free() ? » ?

- **A ❌** Variable définie dans le Shell en cours, non nécessairement exportée.
- **B ✅** L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité.
- **C ✅** VRAI : copier un pointeur dans plusieurs variables crée un risque de confusion de propriété. FAUX : cela transfère automatiquement la propriété ou duplique l'allocation. Seul le responsable désigné libère le bloc, une fois.
- **D ❌** Exécuter la commande suivante en cas de succès / en cas d’échec.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/62-ownership-qui-est-responsable-de-free · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_062 — Dangling pointer — pointeur vers un objet qui n'existe plus

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/63-dangling-pointer-pointeur-vers-un-objet-qui-n-existe-plus)

### V1-N09_062-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale. » ?

- **A ❌** Fuite mémoire — allocation perdue
- **B ❌** Échanger deux caractères
- **C ✅** Dangling pointer — pointeur vers un objet qui n'existe plus
- **D ❌** Pile et tas : durée de vie des allocations

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/63-dangling-pointer-pointeur-vers-un-objet-qui-n-existe-plus · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_062-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Dangling pointer — pointeur vers un objet qui n'existe plus » ?

- **A ❌** Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.
- **B ✅** Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.
- **C ❌** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.
- **D ❌** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/63-dangling-pointer-pointeur-vers-un-objet-qui-n-existe-plus · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_062-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Dangling pointer — pointeur vers un objet qui n'existe plus » ?

- **A ✅** VRAI : un pointeur vers un bloc libéré ne permet plus d'accéder à ce bloc, immédiatement après free. FAUX : p = NULL protège automatiquement les autres pointeurs qui désignent l'ancien bloc. Un pointeur n'est pas forcément valide jusqu'à la fin du programme.
- **B ❌** Memory leak = fuite mémoire. Avec Valgrind, « definitely lost » indique un bloc inaccessible, « still reachable » un bloc encore pointé à la sortie. Le système récupère généralement la mémoire à la fin du processus, mais cela ne corrige pas une fuite pendant son fonctionnement.
- **C ❌** Pile/stack : objets automatiques et appels, dans les implémentations usuelles. Tas/heap : blocs obtenus via malloc/calloc/realloc, libérés explicitement. Durée de vie statique : objets static. Ne jamais faire free(&local) ou free sur un tableau static.
- **D ❌** Un échange simple est une brique utile pour manipuler ou inverser des chaînes.

**Réponse candidate :** A · **Explication :** La fiche indique : VRAI : un pointeur vers un bloc libéré ne permet plus d'accéder à ce bloc, immédiatement après free. FAUX : p = NULL protège automatiquement les autres pointeurs qui désignent l'ancien bloc. Un pointeur n'est pas forcément valide jusqu'à la fin du programme.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/63-dangling-pointer-pointeur-vers-un-objet-qui-n-existe-plus · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_062-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Dangling pointer — pointeur vers un objet qui n'existe plus » ?

- **A ✅** Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.
- **B ❌** Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour.
- **C ✅** VRAI : un pointeur vers un bloc libéré ne permet plus d'accéder à ce bloc, immédiatement après free. FAUX : p = NULL protège automatiquement les autres pointeurs qui désignent l'ancien bloc. Un pointeur n'est pas forcément valide jusqu'à la fin du programme.
- **D ❌** Exporter une variable / supprimer une variable ou fonction.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/63-dangling-pointer-pointeur-vers-un-objet-qui-n-existe-plus · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_063 — Raw pointer — pointeur brut en C

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/64-raw-pointer-pointeur-brut-en-c)

### V1-N09_063-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété. » ?

- **A ❌** malloc et sizeof : allouer le bon nombre d’octets
- **B ❌** realloc — redimensionner une allocation
- **C ❌** free — libérer la mémoire
- **D ✅** Raw pointer — pointeur brut en C

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/64-raw-pointer-pointeur-brut-en-c · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_063-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Raw pointer — pointeur brut en C » ?

- **A ❌** Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits.
- **B ❌** free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.
- **C ✅** Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.
- **D ❌** realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/64-raw-pointer-pointeur-brut-en-c · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_063-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Raw pointer — pointeur brut en C » ?

- **A ❌** Le piège classique : p = realloc(p, taille); peut faire perdre le bloc initial sur échec. Avec tmp, l’ancien pointeur reste disponible. Ne pas utiliser l’ancienne adresse après une réussite, même si la valeur numérique semble identique.
- **B ✅** Un pointeur de type int * est une adresse typée, pas une preuve que le bloc est accessible, ni une indication de propriété. Le terme raw pointer ne désigne pas une autre syntaxe du C.
- **C ❌** Ne jamais appeler free sur une variable locale ou une adresse non allouée dynamiquement ; éviter les doubles free et toute utilisation après free. La mise à NULL d’un pointeur ne corrige pas d’éventuels alias.
- **D ❌** sizeof(int) indique la taille d’un int ; sizeof *p celle du type pointé. Le nombre 64 du matériel ne donne pas la taille d’un int. Si n est variable, vérifier également le risque de débordement de n * sizeof *p.

**Réponse candidate :** B · **Explication :** La fiche indique : Un pointeur de type int * est une adresse typée, pas une preuve que le bloc est accessible, ni une indication de propriété. Le terme raw pointer ne désigne pas une autre syntaxe du C.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/64-raw-pointer-pointeur-brut-en-c · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_063-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Raw pointer — pointeur brut en C » ?

- **A ✅** Un pointeur de type int * est une adresse typée, pas une preuve que le bloc est accessible, ni une indication de propriété. Le terme raw pointer ne désigne pas une autre syntaxe du C.
- **B ❌** Exécuter un script dans le Shell courant.
- **C ❌** BEST=School : pas d’espaces autour du =.
- **D ✅** Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/64-raw-pointer-pointeur-brut-en-c · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_064 — char * — pointeur vers un caractère ou une chaîne

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/65-char-pointeur-vers-un-caractere-ou-une-chaine)

### V1-N09_064-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur. » ?

- **A ✅** char * — pointeur vers un caractère ou une chaîne
- **B ❌** calloc() — allouer et initialiser à zéro
- **C ❌** strdup : copie allouée dynamiquement
- **D ❌** malloc : vérifier NULL

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/65-char-pointeur-vers-un-caractere-ou-une-chaine · https://man7.org/linux/man-pages/man3/strlen.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_064-02 · description

**Une seule bonne réponse**

Quelle description caractérise « char * — pointeur vers un caractère ou une chaîne » ?

- **A ❌** Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.
- **B ❌** strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat.
- **C ❌** calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free.
- **D ✅** char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/65-char-pointeur-vers-un-caractere-ou-une-chaine · https://man7.org/linux/man-pages/man3/strlen.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_064-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « char * — pointeur vers un caractère ou une chaîne » ?

- **A ✅** char * désigne un pointeur, char tableau[8] un tableau. sizeof(p) mesure le pointeur, et sizeof(tableau) mesure le tableau lorsqu'il est encore dans sa portée comme tableau. Un texte littéral est à traiter comme non modifiable.
- **B ❌** Toujours contrôler p == NULL avant de déréférencer p. N’utilise pas de boucle d’allocations géantes pour tester artificiellement un échec.
- **C ❌** strcpy copie vers une zone existante ; strdup crée une nouvelle zone allouée. Sous GNU89, strdup est une fonction POSIX, pas une fonction du C89 standard.
- **D ❌** calloc remet les octets du bloc à zéro, mais n'empêche ni un accès hors limites ni l'utilisation du bloc après free. Le résultat peut être NULL si l'allocation échoue.

**Réponse candidate :** A · **Explication :** La fiche indique : char * désigne un pointeur, char tableau[8] un tableau. sizeof(p) mesure le pointeur, et sizeof(tableau) mesure le tableau lorsqu'il est encore dans sa portée comme tableau. Un texte littéral est à traiter comme non modifiable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/65-char-pointeur-vers-un-caractere-ou-une-chaine · https://man7.org/linux/man-pages/man3/strlen.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_064-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « char * — pointeur vers un caractère ou une chaîne » ?

- **A ✅** char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur.
- **B ❌** Substitution de commande : récupérer sa sortie.
- **C ❌** Variable exportée et transmise aux processus enfants.
- **D ✅** char * désigne un pointeur, char tableau[8] un tableau. sizeof(p) mesure le pointeur, et sizeof(tableau) mesure le tableau lorsqu'il est encore dans sa portée comme tableau. Un texte littéral est à traiter comme non modifiable.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/65-char-pointeur-vers-un-caractere-ou-une-chaine · https://man7.org/linux/man-pages/man3/strlen.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_065 — Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/66-diagnostics-memoire-invalid-write-uninitialized-value-et-fuites)

### V1-N09_065-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind. » ?

- **A ❌** Chaînes littérales et .rodata (avancé)
- **B ✅** Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites
- **C ❌** Double free — ne pas libérer deux fois
- **D ❌** Pointeur non initialisé : comportement indéfini

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/66-diagnostics-memoire-invalid-write-uninitialized-value-et-fuites · https://valgrind.org/docs/manual/mc-manual.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_065-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites » ?

- **A ✅** INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.
- **B ❌** Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.
- **C ❌** Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.
- **D ❌** Sur de nombreux systèmes, les chaînes littérales peuvent être placées en section en lecture seule, souvent .rodata ; cela dépend de la compilation.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/66-diagnostics-memoire-invalid-write-uninitialized-value-et-fuites · https://valgrind.org/docs/manual/mc-manual.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_065-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites » ?

- **A ❌** Notion avancée : .rodata est un détail courant de l’implémentation, pas une garantie universelle du langage C. Les optimisations peuvent modifier l’apparence des données dans l’exécutable.
- **B ❌** Un segfault est une conséquence fréquente, jamais une garantie du langage. Un programme qui compile peut contenir un comportement indéfini à l’exécution.
- **C ❌** Ne pas utiliser free deux fois sur une même allocation. L'exemple appelle free sur p puis sur NULL : ce n'est pas une double libération du bloc. Mettre p à NULL ne sécurise pas les alias éventuels. Un double free peut venir d'une ownership ambiguë ou de deux chemins de nettoyage ; chercher les chemins réels avant de conclure.
- **D ✅** Une fuite indirecte n'est pas la même chose qu'une fuite certaine directe ; un use-after-free peut apparaître comme un Invalid read/write. Les labels INVALID_WRITE, UNINITIALIZED_VALUE, etc. ne sont pas tous des messages émis mot pour mot par Valgrind.

**Réponse candidate :** D · **Explication :** La fiche indique : Une fuite indirecte n'est pas la même chose qu'une fuite certaine directe ; un use-after-free peut apparaître comme un Invalid read/write. Les labels INVALID_WRITE, UNINITIALIZED_VALUE, etc. ne sont pas tous des messages émis mot pour mot par Valgrind.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/66-diagnostics-memoire-invalid-write-uninitialized-value-et-fuites · https://valgrind.org/docs/manual/mc-manual.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_065-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites » ?

- **A ✅** Une fuite indirecte n'est pas la même chose qu'une fuite certaine directe ; un use-after-free peut apparaître comme un Invalid read/write. Les labels INVALID_WRITE, UNINITIALIZED_VALUE, etc. ne sont pas tous des messages émis mot pour mot par Valgrind.
- **B ❌** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.
- **C ✅** INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.
- **D ❌** Créer / retirer un raccourci de commande.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/66-diagnostics-memoire-invalid-write-uninitialized-value-et-fuites · https://valgrind.org/docs/manual/mc-manual.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_066 — Pointeur de fonction — déclarer une signature

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/67-pointeur-de-fonction-declarer-une-signature)

### V1-N09_066-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *. » ?

- **A ❌** strncpy() — copie limitée et terminaison
- **B ❌** strcpy : copier dans un espace existant
- **C ✅** Pointeur de fonction — déclarer une signature
- **D ❌** memcpy() ou memmove() — zones qui se recouvrent

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/67-pointeur-de-fonction-declarer-une-signature · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_066-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Pointeur de fonction — déclarer une signature » ?

- **A ❌** memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher.
- **B ✅** int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *.
- **C ❌** strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place.
- **D ❌** strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/67-pointeur-de-fonction-declarer-une-signature · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_066-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Pointeur de fonction — déclarer une signature » ?

- **A ❌** Le troisième argument limite la copie, mais ne réserve pas automatiquement une place pour '\0'. Ici « Bonjour » devient « Bonjo » : pas de débordement, mais une troncature. Pour une copie complète, vérifier la capacité avant de copier.
- **B ❌** memcpy sur des plages qui se chevauchent a un comportement indéfini ; memmove est prévue pour ce cas. Vérifier la capacité de destination et compter les octets copiés, y compris '\0' pour une chaîne.
- **C ✅** Bien lire les parenthèses : int (*f)(int) est un pointeur de fonction ; int *f(int) est une fonction renvoyant int *. Ne pas confondre avec int *.
- **D ❌** strcpy ne réalise jamais malloc à ta place. Il faut prévoir strlen(src) + 1 cases char, y compris '\0', et éviter les zones qui se chevauchent.

**Réponse candidate :** C · **Explication :** La fiche indique : Bien lire les parenthèses : int (*f)(int) est un pointeur de fonction ; int *f(int) est une fonction renvoyant int *. Ne pas confondre avec int *.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/67-pointeur-de-fonction-declarer-une-signature · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_066-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Pointeur de fonction — déclarer une signature » ?

- **A ❌** Lire la valeur / délimiter explicitement le nom.
- **B ✅** Bien lire les parenthèses : int (*f)(int) est un pointeur de fonction ; int *f(int) est une fonction renvoyant int *. Ne pas confondre avec int *.
- **C ✅** int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *.
- **D ❌** Comparaisons.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/67-pointeur-de-fonction-declarer-une-signature · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_067 — Appeler un pointeur de fonction — f(x) ou (*f)(x)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/68-appeler-un-pointeur-de-fonction-f-x-ou-f-x)

### V1-N09_067-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Pour un pointeur de fonction valide f, f(5) et (*f)(5) appellent la même fonction ; vérifier NULL avant l'appel. » ?

- **A ❌** free : quelles adresses peut-on libérer ?
- **B ❌** Use-after-free — réutiliser un bloc libéré
- **C ❌** Stack overflow — épuisement de la pile d'appels
- **D ✅** Appeler un pointeur de fonction — f(x) ou (*f)(x)

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/68-appeler-un-pointeur-de-fonction-f-x-ou-f-x · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_067-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Appeler un pointeur de fonction — f(x) ou (*f)(x) » ?

- **A ✅** Pour un pointeur de fonction valide f, f(5) et (*f)(5) appellent la même fonction ; vérifier NULL avant l'appel.
- **B ❌** free accepte NULL ou un pointeur valide obtenu par une allocation dynamique compatible ; ni un littéral ni un tableau local ne se libèrent avec free.
- **C ❌** Un use-after-free se produit lorsqu'un programme lit ou écrit dans un bloc déjà libéré par free ; il s'agit d'un comportement indéfini.
- **D ❌** Un stack overflow survient lorsque l'espace disponible pour les appels de fonctions est épuisé, souvent par récursion sans arrêt ou objets automatiques trop volumineux.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Pour un pointeur de fonction valide f, f(5) et (*f)(5) appellent la même fonction ; vérifier NULL avant l'appel.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/68-appeler-un-pointeur-de-fonction-f-x-ou-f-x · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_067-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Appeler un pointeur de fonction — f(x) ou (*f)(x) » ?

- **A ❌** Une récursion sans cas d'arrêt peut épuiser la pile ; une grande variable locale peut également poser problème. Stack overflow et stack buffer overflow ne désignent pas la même erreur.
- **B ✅** Ne jamais appeler un pointeur NULL ou de signature incompatible. L'indirection explicite (*f)(x) et la forme directe f(x) sont équivalentes.
- **C ❌** Ne libère jamais un littéral, l’adresse d’un objet automatique ou le même bloc deux fois. free(NULL) est autorisé, mais ne rend pas valide un ancien pointeur libéré.
- **D ❌** Après free, aucun alias vers le bloc ne doit servir à accéder aux anciennes données. Un test sans crash ne prouve pas que l'accès serait autorisé.

**Réponse candidate :** B · **Explication :** La fiche indique : Ne jamais appeler un pointeur NULL ou de signature incompatible. L'indirection explicite (*f)(x) et la forme directe f(x) sont équivalentes.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/68-appeler-un-pointeur-de-fonction-f-x-ou-f-x · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_067-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Appeler un pointeur de fonction — f(x) ou (*f)(x) » ?

- **A ❌** Code retour / premier argument / nombre d’arguments positionnels.
- **B ❌** Teste sa condition avant chaque itération.
- **C ✅** Ne jamais appeler un pointeur NULL ou de signature incompatible. L'indirection explicite (*f)(x) et la forme directe f(x) sont équivalentes.
- **D ✅** Pour un pointeur de fonction valide f, f(5) et (*f)(5) appellent la même fonction ; vérifier NULL avant l'appel.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/68-appeler-un-pointeur-de-fonction-f-x-ou-f-x · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_068 — Callback — transmettre une fonction en paramètre

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/69-callback-transmettre-une-fonction-en-parametre)

### V1-N09_068-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu. » ?

- **A ✅** Callback — transmettre une fonction en paramètre
- **B ❌** Valgrind Memcheck — comprendre les alertes
- **C ❌** memcpy() — copier des octets sans chevauchement
- **D ❌** Segfault — faute de segmentation

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/69-callback-transmettre-une-fonction-en-parametre · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://web.stanford.edu/class/archive/cs/cs107/cs107.1214/lab4/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/ · https://boredzo.org/pointers/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_068-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Callback — transmettre une fonction en paramètre » ?

- **A ❌** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.
- **B ❌** Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.
- **C ❌** memcpy(dest, src, n) copie exactement n octets entre deux zones valides qui ne se recouvrent pas ; aucun '\0' n'est ajouté automatiquement.
- **D ✅** Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/69-callback-transmettre-une-fonction-en-parametre · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://web.stanford.edu/class/archive/cs/cs107/cs107.1214/lab4/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/ · https://boredzo.org/pointers/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_068-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Callback — transmettre une fonction en paramètre » ?

- **A ✅** Un callback n'est pas forcément asynchrone : appliquer appelle ici directement afficher_double. La signature du paramètre doit correspondre à celle de la fonction.
- **B ❌** La première erreur affichée peut provoquer les suivantes. Consulter la pile des appels, les lignes indiquées par -g et le contexte des allocations/libérations. Un « 0 errors » sur un test n'est pas une preuve générale d'absence de bugs. Exemple : « definitely lost: 32 bytes in 1 blocks » = 1 bloc de 32 octets définitivement perdu. Ces labels en majuscules sont des cat
- **C ❌** Un segfault est un symptôme d’accès invalide détecté pendant l’exécution, pas une garantie systématique du C. Les outils de diagnostic aident, mais un test qui réussit ne prouve pas l’absence de comportement indéfini.
- **D ❌** memcpy ne garantit ni le terminateur '\0', ni la capacité, ni l'absence de chevauchement : le développeur doit vérifier ces conditions avant l'appel. Pour déplacer des octets avec recouvrement, utiliser memmove.

**Réponse candidate :** A · **Explication :** La fiche indique : Un callback n'est pas forcément asynchrone : appliquer appelle ici directement afficher_double. La signature du paramètre doit correspondre à celle de la fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/69-callback-transmettre-une-fonction-en-parametre · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://web.stanford.edu/class/archive/cs/cs107/cs107.1214/lab4/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/ · https://boredzo.org/pointers/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_068-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Callback — transmettre une fonction en paramètre » ?

- **A ✅** Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.
- **B ❌** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.
- **C ❌** Égalité / différence. Attention à ne pas confondre = et ==.
- **D ✅** Un callback n'est pas forcément asynchrone : appliquer appelle ici directement afficher_double. La signature du paramètre doit correspondre à celle de la fonction.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/69-callback-transmettre-une-fonction-en-parametre · https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html · https://web.stanford.edu/class/archive/cs/cs107/cs107.1214/lab4/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/ · https://boredzo.org/pointers/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_069 — Tableau de pointeurs de fonctions — choisir une opération

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/70-tableau-de-pointeurs-de-fonctions-choisir-une-operation)

### V1-N09_069-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if. » ?

- **A ❌** Raw pointer — pointeur brut en C
- **B ✅** Tableau de pointeurs de fonctions — choisir une opération
- **C ❌** Buffer overflow — dépassement de tampon
- **D ❌** Tampon fixe, statique et dynamique — emplacement et durée de vie

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/70-tableau-de-pointeurs-de-fonctions-choisir-une-operation · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_069-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Tableau de pointeurs de fonctions — choisir une opération » ?

- **A ❌** Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.
- **B ❌** Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.
- **C ✅** Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if.
- **D ❌** Un buffer overflow se produit lorsque le programme écrit au-delà d'une zone mémoire prévue ; il faut contrôler les capacités avant de copier.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/70-tableau-de-pointeurs-de-fonctions-choisir-une-operation · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_069-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Tableau de pointeurs de fonctions — choisir une opération » ?

- **A ❌** Pour une chaîne, le tableau doit accueillir strlen(source) + 1 octets. Un programme qui ne plante pas n'est pas forcément correct : une écriture hors limites est déjà un bug.
- **B ❌** Un pointeur de type int * est une adresse typée, pas une preuve que le bloc est accessible, ni une indication de propriété. Le terme raw pointer ne désigne pas une autre syntaxe du C.
- **C ❌** Taille et durée de vie ne sont pas synonymes : char local[8] est fixe et automatique ; static char stable[8] est fixe et de durée de vie statique ; malloc(8) crée un bloc dynamique de huit octets. Ne jamais appeler free sur local ou stable.
- **D ✅** operations[index] est un pointeur de fonction, pas le résultat d'une fonction. Toujours valider l'indice et la non-nullité avant l'appel.

**Réponse candidate :** D · **Explication :** La fiche indique : operations[index] est un pointeur de fonction, pas le résultat d'une fonction. Toujours valider l'indice et la non-nullité avant l'appel.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/70-tableau-de-pointeurs-de-fonctions-choisir-une-operation · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_069-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tableau de pointeurs de fonctions — choisir une opération » ?

- **A ✅** operations[index] est un pointeur de fonction, pas le résultat d'une fonction. Toujours valider l'indice et la non-nullité avant l'appel.
- **B ✅** Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if.
- **C ❌** Service d’hébergement et de collaboration pour des dépôts Git.
- **D ❌** Initialisation, test, mise à jour ; forme compacte de boucle.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/70-tableau-de-pointeurs-de-fonctions-choisir-une-operation · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_070 — typedef d'un pointeur de fonction — simplifier les signatures

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/71-typedef-d-un-pointeur-de-fonction-simplifier-les-signatures)

### V1-N09_070-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction. » ?

- **A ✅** typedef d'un pointeur de fonction — simplifier les signatures
- **B ❌** Débordement du calcul de taille avant malloc
- **C ❌** strlen sans terminateur nul — lecture hors limites
- **D ❌** Pointeur de fonction — déclarer une signature

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/71-typedef-d-un-pointeur-de-fonction-simplifier-les-signatures · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://boredzo.org/pointers/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_070-02 · description

**Une seule bonne réponse**

Quelle description caractérise « typedef d'un pointeur de fonction — simplifier les signatures » ?

- **A ❌** int (*f)(int) déclare un pointeur vers une fonction recevant un int et renvoyant un int ; les parenthèses distinguent ce type d'une fonction renvoyant int *.
- **B ✅** typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction.
- **C ❌** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.
- **D ❌** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/71-typedef-d-un-pointeur-de-fonction-simplifier-les-signatures · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://boredzo.org/pointers/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_070-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « typedef d'un pointeur de fonction — simplifier les signatures » ?

- **A ✅** typedef définit un alias de type, pas une fonction ni une allocation. La signature doit rester compatible et les pointeurs peuvent valoir NULL si le contrat l'autorise.
- **B ❌** Bien lire les parenthèses : int (*f)(int) est un pointeur de fonction ; int *f(int) est une fonction renvoyant int *. Ne pas confondre avec int *.
- **C ❌** strlen n'est pas un contrôle de taille pour une mémoire arbitraire. Vérifier l'existence de '\0' dans les limites connues avant de traiter un tampon comme une chaîne. Ne pas confondre strlen et sizeof.
- **D ❌** Ne pas multiplier deux tailles non fiables avant d'avoir vérifié le risque de dépassement. malloc vérifie la demande reçue, mais ne peut pas corriger un calcul de taille qui a déjà débordé.

**Réponse candidate :** A · **Explication :** La fiche indique : typedef définit un alias de type, pas une fonction ni une allocation. La signature doit rester compatible et les pointeurs peuvent valoir NULL si le contrat l'autorise.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/71-typedef-d-un-pointeur-de-fonction-simplifier-les-signatures · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://boredzo.org/pointers/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_070-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « typedef d'un pointeur de fonction — simplifier les signatures » ?

- **A ❌** Un passage dans une boucle.
- **B ✅** typedef définit un alias de type, pas une fonction ni une allocation. La signature doit rester compatible et les pointeurs peuvent valoir NULL si le contrat l'autorise.
- **C ✅** typedef int (*operation_t)(int, int) crée un nom pour un type de pointeur vers une fonction ; il n'appelle pas de fonction.
- **D ❌** Instantané enregistré dans l’historique local.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/71-typedef-d-un-pointeur-de-fonction-simplifier-les-signatures · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://en.cppreference.com/w/c/language/pointer · https://boredzo.org/pointers/ · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N09_071 — qsort() — comparateur passé par pointeur de fonction

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/72-qsort-comparateur-passe-par-pointeur-de-fonction)

### V1-N09_071-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive. » ?

- **A ❌** Dépassement de tampon sur la pile — erreur avant malloc
- **B ❌** Dangling pointer — pointeur vers un objet qui n'existe plus
- **C ❌** Tableau de pointeurs de fonctions — choisir une opération
- **D ✅** qsort() — comparateur passé par pointeur de fonction

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/72-qsort-comparateur-passe-par-pointeur-de-fonction · https://man7.org/linux/man-pages/man3/qsort.3.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_071-02 · description

**Une seule bonne réponse**

Quelle description caractérise « qsort() — comparateur passé par pointeur de fonction » ?

- **A ✅** qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.
- **B ❌** Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.
- **C ❌** Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.
- **D ❌** Un tableau de pointeurs de fonctions regroupe des fonctions de même signature ; un indice contrôlé permet de choisir une opération sans longue chaîne de if.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/72-qsort-comparateur-passe-par-pointeur-de-fonction · https://man7.org/linux/man-pages/man3/qsort.3.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_071-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « qsort() — comparateur passé par pointeur de fonction » ?

- **A ❌** Dans la question du lab, la bonne raison est que « corruption may have already occurred during input reading ». Corriger la copie après coup n'annule pas un débordement déjà produit. Vérifie la longueur lors de la LECTURE, et refuse les lignes incomplètes si nécessaire.
- **B ❌** operations[index] est un pointeur de fonction, pas le résultat d'une fonction. Toujours valider l'indice et la non-nullité avant l'appel.
- **C ✅** Le comparateur de qsort reçoit des pointeurs vers des éléments, pas les éléments eux-mêmes. Éviter return a-b si a et b sont des int susceptibles de déborder.
- **D ❌** VRAI : un pointeur vers un bloc libéré ne permet plus d'accéder à ce bloc, immédiatement après free. FAUX : p = NULL protège automatiquement les autres pointeurs qui désignent l'ancien bloc. Un pointeur n'est pas forcément valide jusqu'à la fin du programme.

**Réponse candidate :** C · **Explication :** La fiche indique : Le comparateur de qsort reçoit des pointeurs vers des éléments, pas les éléments eux-mêmes. Éviter return a-b si a et b sont des int susceptibles de déborder.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/72-qsort-comparateur-passe-par-pointeur-de-fonction · https://man7.org/linux/man-pages/man3/qsort.3.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N09_071-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « qsort() — comparateur passé par pointeur de fonction » ?

- **A ✅** Le comparateur de qsort reçoit des pointeurs vers des éléments, pas les éléments eux-mêmes. Éviter return a-b si a et b sont des int susceptibles de déborder.
- **B ❌** Logiciel de gestion de versions distribué.
- **C ❌** Git ne peut pas résoudre automatiquement des changements concurrents.
- **D ✅** qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/72-qsort-comparateur-passe-par-pointeur-de-fonction · https://man7.org/linux/man-pages/man3/qsort.3.html · https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Function-Pointers.html · https://publications.gbdirect.com/c_book/chapter5/function_pointers.html · https://www.geeksforgeeks.org/c/function-pointer-in-c/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

