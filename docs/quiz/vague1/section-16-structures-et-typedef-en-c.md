# Revue de quiz — Structures et typedef en C

**42 questions candidates à vérifier.** Les réponses indiquées sont destinées aux relecteurs, pas à l'interface des élèves.

## V1-N16_000-01 — struct : regrouper plusieurs données

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une struct définit un type composé de membres nommés, éventuellement de types différents. » ? (Une seule réponse correcte.)

- **A ❌** Tableau de structures
- **B ❌** typedef avec structure anonyme
- **C ❌** Include guards — protéger les fichiers .h
- **D ✅** struct : regrouper plusieurs données

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/1-struct-regrouper-plusieurs-donnees

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_000-04 — struct : regrouper plusieurs données

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « struct : regrouper plusieurs données » ? (Plusieurs réponses correctes.)

- **A ❌** strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide.
- **B ❌** memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher.
- **C ✅** Le nom point est l’étiquette (tag) du type ; les membres sont déclarés dans les accolades. Ne pas oublier le ; final.
- **D ✅** Une struct définit un type composé de membres nommés, éventuellement de types différents.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/1-struct-regrouper-plusieurs-donnees

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_001-01 — struct : type et variable

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type. » ? (Une seule réponse correcte.)

- **A ✅** struct : type et variable
- **B ❌** Modifier une struct via son adresse
- **C ❌** Documenter une struct pour Betty
- **D ❌** Accès par pointeur avec ->

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/2-struct-type-et-variable

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_001-04 — struct : type et variable

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « struct : type et variable » ? (Plusieurs réponses correctes.)

- **A ✅** « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type.
- **B ❌** Reste : 2.
- **C ❌** Affiche 87654321 si on affiche i dans le corps.
- **D ✅** Le type struct chat n’est pas l’objet felix ; plusieurs objets peuvent partager la même définition.

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/2-struct-type-et-variable

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_002-01 — Accès aux membres avec .

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Si p est une variable de type struct point (l’objet lui-même), p.x lit ou modifie son membre x. Le point s’emploie sur l’objet, pas directement sur son adresse. » ? (Une seule réponse correcte.)

- **A ❌** sizeof(struct) et padding (avancé)
- **B ✅** Accès aux membres avec .
- **C ❌** Include guards — protéger les fichiers .h
- **D ❌** Structure imbriquée

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/3-acces-aux-membres-avec

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_002-04 — Accès aux membres avec .

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Accès aux membres avec . » ? (Plusieurs réponses correctes.)

- **A ✅** À retenir : OBJET struct => objet.membre. Ici position est la structure elle-même ; position.x = 7 ne modifie pas position.y. Le point choisit le membre, tandis que = réalise l'affectation.
- **B ✅** Si p est une variable de type struct point (l’objet lui-même), p.x lit ou modifie son membre x. Le point s’emploie sur l’objet, pas directement sur son adresse.
- **C ❌** Écraser un fichier avec la sortie / ajouter à la fin.
- **D ❌** Afficher le dossier actuel / changer de dossier / lister les fichiers.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/3-acces-aux-membres-avec

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_003-01 — Accès par pointeur avec ->

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Si ptr est un pointeur valide vers une struct, ptr->x accède au membre x de l’objet pointé. La flèche -> équivaut à (*ptr).x, mais n’est pas un signe d’affectation. » ? (Une seule réponse correcte.)

- **A ✅** Accès par pointeur avec ->
- **B ❌** Documenter une struct pour Betty
- **C ❌** Initialiser une struct avec { }
- **D ❌** typedef : donner un alias à un type

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/4-acces-par-pointeur-avec

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_003-04 — Accès par pointeur avec ->

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Accès par pointeur avec -> » ? (Plusieurs réponses correctes.)

- **A ✅** Si ptr est un pointeur valide vers une struct, ptr->x accède au membre x de l’objet pointé. La flèche -> équivaut à (*ptr).x, mais n’est pas un signe d’affectation.
- **B ✅** Trois expressions pour le MÊME membre : position.x (objet), ptr->x (pointeur) et (*ptr).x (pointeur déréférencé). ptr.x et position->x sont incorrects. -> choisit un membre ; = donne une valeur.
- **C ❌** Comparaisons.
- **D ❌** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/4-acces-par-pointeur-avec

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_004-01 — Initialiser une struct avec { }

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};. » ? (Une seule réponse correcte.)

- **A ❌** sizeof(struct) et padding (avancé)
- **B ❌** Copier une struct par affectation
- **C ❌** struct : regrouper plusieurs données
- **D ✅** Initialiser une struct avec { }

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/5-initialiser-une-struct-avec

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_004-04 — Initialiser une struct avec { }

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Initialiser une struct avec { } » ? (Plusieurs réponses correctes.)

- **A ✅** Dans cet exemple, largeur = 4, hauteur = 5, profondeur = 0. Un objet automatique non initialisé ne bénéficie pas automatiquement de cette remise à zéro.
- **B ❌** Compile en un fichier objet .o, sans édition de liens.
- **C ❌** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.
- **D ✅** Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};.

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/5-initialiser-une-struct-avec

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_005-01 — Initialiseurs désignés .membre (C99)

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom. » ? (Une seule réponse correcte.)

- **A ❌** typedef avant la définition d'une struct
- **B ❌** Initialiser une struct avec { }
- **C ✅** Initialiseurs désignés .membre (C99)
- **D ❌** typedef : donner un alias à un type

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/6-initialiseurs-designes-membre-c99

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_005-04 — Initialiseurs désignés .membre (C99)

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Initialiseurs désignés .membre (C99) » ? (Plusieurs réponses correctes.)

- **A ✅** Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.
- **B ❌** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **C ❌** Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.
- **D ✅** Cette syntaxe est C99 et ultérieure ; sous GNU89 strict avec -pedantic-errors, privilégie {3, 7}.

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/6-initialiseurs-designes-membre-c99

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_006-01 — Tableau de structures

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un tableau comme struct point a[2] regroupe plusieurs objets struct, accessibles par a[i].x. » ? (Une seule réponse correcte.)

- **A ❌** Copier une struct par affectation
- **B ❌** struct : type et variable
- **C ✅** Tableau de structures
- **D ❌** malloc pour une struct

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/7-tableau-de-structures

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_006-04 — Tableau de structures

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tableau de structures » ? (Plusieurs réponses correctes.)

- **A ❌** Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.
- **B ✅** Un tableau comme struct point a[2] regroupe plusieurs objets struct, accessibles par a[i].x.
- **C ✅** a[1] est la deuxième structure du tableau, pas le deuxième membre de la première.
- **D ❌** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.

**Corrigé candidat :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/7-tableau-de-structures

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_007-01 — Structure imbriquée

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un membre peut être lui-même une struct : p.position.x traverse deux niveaux. » ? (Une seule réponse correcte.)

- **A ✅** Structure imbriquée
- **B ❌** typedef struct : nommer une structure
- **C ❌** Initialiser une struct avec { }
- **D ❌** Point ou flèche ? Comparer . et ->

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/8-structure-imbriquee

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_007-04 — Structure imbriquée

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Structure imbriquée » ? (Plusieurs réponses correctes.)

- **A ✅** Un membre peut être lui-même une struct : p.position.x traverse deux niveaux.
- **B ✅** p.position est une structure entière ; p.position.x en extrait un membre.
- **C ❌** Résultat entier : 1.
- **D ❌** Affiche 876543210 si on affiche i dans le corps.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/8-structure-imbriquee

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_008-01 — Copier une struct par affectation

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres. » ? (Une seule réponse correcte.)

- **A ❌** struct : type et variable
- **B ❌** Structure autoréférentielle (avancé)
- **C ❌** Passer une struct par valeur
- **D ✅** Copier une struct par affectation

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/9-copier-une-struct-par-affectation

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_008-04 — Copier une struct par affectation

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Copier une struct par affectation » ? (Plusieurs réponses correctes.)

- **A ✅** La copie est indépendante pour les membres entiers ; les membres pointeurs peuvent continuer à désigner la même mémoire.
- **B ❌** Entrée standard (0) / sortie standard (1) / erreurs (2).
- **C ❌** Dépend du répertoire actuel.
- **D ✅** Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres.

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/9-copier-une-struct-par-affectation

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_009-01 — Passer une struct par valeur

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une fonction qui reçoit struct point p obtient une copie : modifier p.x ne change pas l’objet initial. » ? (Une seule réponse correcte.)

- **A ✅** Passer une struct par valeur
- **B ❌** typedef avec structure anonyme
- **C ❌** Initialiseurs désignés .membre (C99)
- **D ❌** Point ou flèche ? Comparer . et ->

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/10-passer-une-struct-par-valeur

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_009-04 — Passer une struct par valeur

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Passer une struct par valeur » ? (Plusieurs réponses correctes.)

- **A ❌** Égalité / différence. Attention à ne pas confondre = et ==.
- **B ❌** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.
- **C ✅** Une fonction qui reçoit struct point p obtient une copie : modifier p.x ne change pas l’objet initial.
- **D ✅** Passer une struct par valeur ne permet pas de modifier directement ses membres dans l’objet de l’appelant.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/10-passer-une-struct-par-valeur

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_010-01 — Modifier une struct via son adresse

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « En passant struct point *p à une fonction, celle-ci peut modifier l’objet de l’appelant via p->x. » ? (Une seule réponse correcte.)

- **A ❌** Structure autoréférentielle (avancé)
- **B ❌** Passer une struct par valeur
- **C ✅** Modifier une struct via son adresse
- **D ❌** Accès aux membres avec .

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/11-modifier-une-struct-via-son-adresse

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_010-04 — Modifier une struct via son adresse

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Modifier une struct via son adresse » ? (Plusieurs réponses correctes.)

- **A ✅** Distinguer « p » (l’adresse de la structure), « p->x » (le membre de la structure) et « nouvelle_valeur » (le paramètre reçu). La fonction n’a pas besoin de connaître le nom « point » utilisé dans main.
- **B ❌** char représente un petit entier utilisé notamment pour les caractères ; 'A' est une constante de caractère.
- **C ✅** En passant struct point *p à une fonction, celle-ci peut modifier l’objet de l’appelant via p->x.
- **D ❌** Compile vers un fichier assembleur .s, sans assembler ni effectuer l’édition de liens.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/11-modifier-une-struct-via-son-adresse

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_011-01 — typedef : donner un alias à un type

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int. » ? (Une seule réponse correcte.)

- **A ❌** Include guards — protéger les fichiers .h
- **B ❌** typedef avec structure anonyme
- **C ✅** typedef : donner un alias à un type
- **D ❌** Tableau de structures

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/12-typedef-donner-un-alias-a-un-type

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_011-04 — typedef : donner un alias à un type

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « typedef : donner un alias à un type » ? (Plusieurs réponses correctes.)

- **A ✅** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.
- **B ❌** Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.
- **C ✅** Un typedef crée un nom de type, pas une variable : identifiant id; déclare l’objet id.
- **D ❌** Pour un tableau a, a[2] désigne le même élément que *(a + 2).

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/12-typedef-donner-un-alias-a-un-type

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_012-01 — typedef struct : nommer une structure

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « typedef struct animal { int age; } animal_t; rend le type utilisable sous le nom animal_t. » ? (Une seule réponse correcte.)

- **A ❌** Documenter une struct pour Betty
- **B ❌** Accès par pointeur avec ->
- **C ❌** Passer une struct par valeur
- **D ✅** typedef struct : nommer une structure

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/13-typedef-struct-nommer-une-structure

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_012-04 — typedef struct : nommer une structure

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « typedef struct : nommer une structure » ? (Plusieurs réponses correctes.)

- **A ✅** Le ; après le } est obligatoire. struct animal et animal_t désignent le même type ; animal_t a; crée une variable.
- **B ❌** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.
- **C ❌** realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec.
- **D ✅** typedef struct animal { int age; } animal_t; rend le type utilisable sous le nom animal_t.

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/13-typedef-struct-nommer-une-structure

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_013-01 — typedef avec structure anonyme

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette. » ? (Une seule réponse correcte.)

- **A ✅** typedef avec structure anonyme
- **B ❌** sizeof(struct) et padding (avancé)
- **C ❌** struct : regrouper plusieurs données
- **D ❌** Tableau de structures

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/14-typedef-avec-structure-anonyme

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_013-04 — typedef avec structure anonyme

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « typedef avec structure anonyme » ? (Plusieurs réponses correctes.)

- **A ✅** typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.
- **B ❌** Retirer 1, puis utiliser la nouvelle valeur.
- **C ❌** Conserve les deux derniers chiffres d’un entier positif.
- **D ✅** point_t est l’alias ; struct point_t n’est pas un nom de type valide dans cet exemple.

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/14-typedef-avec-structure-anonyme

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_014-01 — sizeof(struct) et padding (avancé)

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement. » ? (Une seule réponse correcte.)

- **A ❌** Accès par pointeur avec ->
- **B ✅** sizeof(struct) et padding (avancé)
- **C ❌** typedef avant la définition d'une struct
- **D ❌** Modifier une struct via son adresse

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/15-sizeof-struct-et-padding-avance

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_014-04 — sizeof(struct) et padding (avancé)

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « sizeof(struct) et padding (avancé) » ? (Plusieurs réponses correctes.)

- **A ✅** Cette fiche est avancée et facultative. sizeof(struct) et offsetof permettent de constater la disposition réelle sans présumer de la taille de int.
- **B ❌** Changer les permissions / propriétaire / utiliser des privilèges élevés.
- **C ✅** sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.
- **D ❌** Part de /, indépendamment du répertoire actuel.

**Corrigé candidat :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/15-sizeof-struct-et-padding-avance

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_015-01 — malloc pour une struct

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « malloc(sizeof *p) réserve assez d’octets pour un objet du type struct pointé par p. » ? (Une seule réponse correcte.)

- **A ❌** Structure imbriquée
- **B ❌** struct : regrouper plusieurs données
- **C ✅** malloc pour une struct
- **D ❌** sizeof(struct) et padding (avancé)

**Corrigé candidat :** C. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/16-malloc-pour-une-struct

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_015-04 — malloc pour une struct

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « malloc pour une struct » ? (Plusieurs réponses correctes.)

- **A ❌** Choisir une branche selon des conditions.
- **B ✅** Vérifier malloc et initialiser les membres ; free libère ce bloc, pas automatiquement les allocations éventuellement pointées par ses membres.
- **C ✅** malloc(sizeof *p) réserve assez d’octets pour un objet du type struct pointé par p.
- **D ❌** Un passage dans une boucle.

**Corrigé candidat :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/16-malloc-pour-une-struct

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_016-01 — Structure autoréférentielle (avancé)

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une struct peut contenir un pointeur vers son propre type, par exemple struct noeud *suivant. » ? (Une seule réponse correcte.)

- **A ❌** typedef avant la définition d'une struct
- **B ❌** Initialiser une struct avec { }
- **C ❌** typedef : donner un alias à un type
- **D ✅** Structure autoréférentielle (avancé)

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/17-structure-autoreferentielle-avance

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_016-04 — Structure autoréférentielle (avancé)

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Structure autoréférentielle (avancé) » ? (Plusieurs réponses correctes.)

- **A ❌** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **B ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **C ✅** La présence d’un pointeur vers le même type ne crée pas automatiquement un autre nœud : NULL indique ici l’absence de suivant.
- **D ✅** Une struct peut contenir un pointeur vers son propre type, par exemple struct noeud *suivant.

**Corrigé candidat :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/17-structure-autoreferentielle-avance

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_017-01 — Documenter une struct pour Betty

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre. » ? (Une seule réponse correcte.)

- **A ✅** Documenter une struct pour Betty
- **B ❌** struct : type et variable
- **C ❌** Copier une struct par affectation
- **D ❌** sizeof(struct) et padding (avancé)

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/18-documenter-une-struct-pour-betty

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_017-04 — Documenter une struct pour Betty

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Documenter une struct pour Betty » ? (Plusieurs réponses correctes.)

- **A ✅** La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.
- **B ❌** Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.
- **C ❌** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.
- **D ✅** Betty est une convention de documentation externe au C : commenter struct point ainsi que chaque membre avec @x: et @y:. La documentation doit accompagner la définition, pas être reportée à la fin.

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/18-documenter-une-struct-pour-betty

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_018-01 — typedef avant la définition d'une struct

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « typedef struct point point; annonce un alias pour un type encore incomplet ; sa définition complète permet ensuite de créer point p. » ? (Une seule réponse correcte.)

- **A ❌** Initialiseurs désignés .membre (C99)
- **B ✅** typedef avant la définition d'une struct
- **C ❌** typedef : donner un alias à un type
- **D ❌** Point ou flèche ? Comparer . et ->

**Corrigé candidat :** B. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/19-typedef-avant-la-definition-d-une-struct

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_018-04 — typedef avant la définition d'une struct

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « typedef avant la définition d'une struct » ? (Plusieurs réponses correctes.)

- **A ✅** Un typedef ne remplace pas la définition complète de la structure. L'alias point et struct point sont le même type ; la déclaration anticipée ne suffit pas pour créer un objet avant les accolades.
- **B ✅** typedef struct point point; annonce un alias pour un type encore incomplet ; sa définition complète permet ensuite de créer point p.
- **C ❌** Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.
- **D ❌** Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.

**Corrigé candidat :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/19-typedef-avant-la-definition-d-une-struct

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_019-01 — Point ou flèche ? Comparer . et ->

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre. » ? (Une seule réponse correcte.)

- **A ✅** Point ou flèche ? Comparer . et ->
- **B ❌** Copier une struct par affectation
- **C ❌** malloc pour une struct
- **D ❌** Accès aux membres avec .

**Corrigé candidat :** A. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/20-point-ou-fleche-comparer-et

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_019-04 — Point ou flèche ? Comparer . et ->

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Point ou flèche ? Comparer . et -> » ? (Plusieurs réponses correctes.)

- **A ❌** Supprime le dernier chiffre d’un entier positif.
- **B ✅** Question réflexe : « à gauche, ai-je une struct ou un pointeur vers struct ? » Objet => . ; pointeur => -> ; le signe = sert ensuite à affecter la valeur. L’expression (*p).pages est équivalente à p->pages.
- **C ✅** Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre.
- **D ❌** Utiliser l’ancienne valeur, puis retirer 1.

**Corrigé candidat :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/20-point-ou-fleche-comparer-et

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_020-01 — Include guards — protéger les fichiers .h

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction. » ? (Une seule réponse correcte.)

- **A ❌** Initialiseurs désignés .membre (C99)
- **B ❌** Point ou flèche ? Comparer . et ->
- **C ❌** typedef struct : nommer une structure
- **D ✅** Include guards — protéger les fichiers .h

**Corrigé candidat :** D. La définition est extraite du résumé de la fiche correspondante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/21-include-guards-proteger-les-fichiers-h

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_020-04 — Include guards — protéger les fichiers .h

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Include guards — protéger les fichiers .h » ? (Plusieurs réponses correctes.)

- **A ✅** Placer l’include guard autour de l’ensemble du .h. Un bon en-tête contient principalement déclarations, types et prototypes ; les définitions de fonctions ordinaires se placent généralement dans un .c. #ifndef / #define / #endif sont des directives du préprocesseur, sans point-virgule.
- **B ❌** Dossier courant / dossier parent.
- **C ❌** r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).
- **D ✅** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.

**Corrigé candidat :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/21-include-guards-proteger-les-fichiers-h

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

