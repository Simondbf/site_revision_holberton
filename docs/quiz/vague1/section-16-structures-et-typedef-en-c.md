# Banque de revue — Structures et typedef en C

**42 questions candidates, toutes à vérifier sur le fond.**

## V1-N16_000-01 — struct : regrouper plusieurs données

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une struct définit un type composé de membres nommés, éventuellement de types différents. » ? (Une seule réponse correcte.)

- **A ✅** struct : regrouper plusieurs données
- **B ❌** Accès aux membres avec .
- **C ❌** Accès par pointeur avec ->
- **D ❌** Initialiser une struct avec { }

**Corrigé candidat :** A. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/1-struct-regrouper-plusieurs-donnees

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_000-04 — struct : regrouper plusieurs données

**Plusieurs bonnes réponses**

Concernant « struct : regrouper plusieurs données », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ✅** Une struct définit un type composé de membres nommés, éventuellement de types différents.
- **B ✅** Les membres d'une structure sont nommés dans sa définition et peuvent avoir des types différents.
- **C ❌** Les membres d'une struct doivent tous avoir le même type.
- **D ❌** Définir une struct lance automatiquement malloc.
- **E ✅** Le nom point est l’étiquette (tag) du type ; les membres sont déclarés dans les accolades. Ne pas oublier le ; final.

**Corrigé candidat :** A, B, E. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/1-struct-regrouper-plusieurs-donnees

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_001-01 — struct : type et variable

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type. » ? (Une seule réponse correcte.)

- **A ❌** Accès par pointeur avec ->
- **B ❌** Initialiser une struct avec { }
- **C ❌** Initialiseurs désignés .membre (C99)
- **D ✅** struct : type et variable

**Corrigé candidat :** D. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/2-struct-type-et-variable

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_001-04 — struct : type et variable

**Plusieurs bonnes réponses**

Concernant « struct : type et variable », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ❌** Dans struct chat felix;, felix n'est pas une variable.
- **B ✅** « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type.
- **C ✅** Le type struct chat n’est pas l’objet felix ; plusieurs objets peuvent partager la même définition.
- **D ❌** struct chat déclare directement une variable nommée chat.

**Corrigé candidat :** B, C. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/2-struct-type-et-variable

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_002-01 — Accès aux membres avec .

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Si p est une variable de type struct point (l’objet lui-même), p.x lit ou modifie son membre x. Le point s’emploie sur l’objet, pas directement sur son adresse. » ? (Une seule réponse correcte.)

- **A ❌** struct : regrouper plusieurs données
- **B ❌** Initialiser une struct avec { }
- **C ✅** Accès aux membres avec .
- **D ❌** Initialiseurs désignés .membre (C99)

**Corrigé candidat :** C. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/3-acces-aux-membres-avec

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_002-04 — Accès aux membres avec .

**Plusieurs bonnes réponses**

Concernant « Accès aux membres avec . », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ❌** L'opérateur . s'applique directement à un pointeur de struct.
- **B ❌** objet.x désigne nécessairement une adresse NULL.
- **C ✅** À retenir : OBJET struct => objet.membre. Ici position est la structure elle-même ; position.x = 7 ne modifie pas position.y. Le point choisit le membre, tandis que = réalise l'affectation.
- **D ✅** Si p est une variable de type struct point (l’objet lui-même), p.x lit ou modifie son membre x. Le point s’emploie sur l’objet, pas directement sur son adresse.

**Corrigé candidat :** C, D. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/3-acces-aux-membres-avec

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_003-01 — Accès par pointeur avec ->

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Si ptr est un pointeur valide vers une struct, ptr->x accède au membre x de l’objet pointé. La flèche -> équivaut à (*ptr).x, mais n’est pas un signe d’affectation. » ? (Une seule réponse correcte.)

- **A ❌** struct : type et variable
- **B ✅** Accès par pointeur avec ->
- **C ❌** Initialiseurs désignés .membre (C99)
- **D ❌** struct : regrouper plusieurs données

**Corrigé candidat :** B. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/4-acces-par-pointeur-avec

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_003-04 — Accès par pointeur avec ->

**Plusieurs bonnes réponses**

Concernant « Accès par pointeur avec -> », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ✅** Trois expressions pour le MÊME membre : position.x (objet), ptr->x (pointeur) et (*ptr).x (pointeur déréférencé). ptr.x et position->x sont incorrects. -> choisit un membre ; = donne une valeur.
- **B ❌** ptr->x est correct lorsque ptr est une struct et non un pointeur.
- **C ❌** ptr->x et ptr.x sont toujours équivalents sans tenir compte du type.
- **D ✅** Si ptr est un pointeur valide vers une struct, ptr->x accède au membre x de l’objet pointé. La flèche -> équivaut à (*ptr).x, mais n’est pas un signe d’affectation.

**Corrigé candidat :** A, D. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/4-acces-par-pointeur-avec

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_004-01 — Initialiser une struct avec { }

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};. » ? (Une seule réponse correcte.)

- **A ✅** Initialiser une struct avec { }
- **B ❌** Accès aux membres avec .
- **C ❌** Tableau de structures
- **D ❌** struct : type et variable

**Corrigé candidat :** A. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/5-initialiser-une-struct-avec

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_004-04 — Initialiser une struct avec { }

**Plusieurs bonnes réponses**

Concernant « Initialiser une struct avec { } », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ✅** Dans cet exemple, largeur = 4, hauteur = 5, profondeur = 0. Un objet automatique non initialisé ne bénéficie pas automatiquement de cette remise à zéro.
- **B ✅** Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};.
- **C ❌** struct point p={2,3} initialise les membres dans l'ordre inverse.
- **D ❌** Une struct ne peut pas être initialisée à la déclaration.

**Corrigé candidat :** A, B. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/5-initialiser-une-struct-avec

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_005-01 — Initialiseurs désignés .membre (C99)

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom. » ? (Une seule réponse correcte.)

- **A ❌** Accès par pointeur avec ->
- **B ❌** Structure imbriquée
- **C ❌** Accès aux membres avec .
- **D ✅** Initialiseurs désignés .membre (C99)

**Corrigé candidat :** D. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/6-initialiseurs-designes-membre-c99

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_005-04 — Initialiseurs désignés .membre (C99)

**Plusieurs bonnes réponses**

Concernant « Initialiseurs désignés .membre (C99) », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ❌** Les initialiseurs désignés changent l'ordre des membres en mémoire.
- **B ✅** Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.
- **C ✅** Cette syntaxe est C99 et ultérieure ; sous GNU89 strict avec -pedantic-errors, privilégie {3, 7}.
- **D ❌** Les initialiseurs .membre sont portables en C89 strict.

**Corrigé candidat :** B, C. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/6-initialiseurs-designes-membre-c99

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_006-01 — Tableau de structures

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un tableau comme struct point a[2] regroupe plusieurs objets struct, accessibles par a[i].x. » ? (Une seule réponse correcte.)

- **A ❌** Initialiser une struct avec { }
- **B ❌** Copier une struct par affectation
- **C ✅** Tableau de structures
- **D ❌** Accès par pointeur avec ->

**Corrigé candidat :** C. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/7-tableau-de-structures

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_006-04 — Tableau de structures

**Plusieurs bonnes réponses**

Concernant « Tableau de structures », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ❌** Un tableau de struct contient nécessairement des pointeurs alloués séparément.
- **B ❌** a[1].x ne peut pas accéder à un membre de struct.
- **C ✅** Un tableau comme struct point a[2] regroupe plusieurs objets struct, accessibles par a[i].x.
- **D ✅** a[1] est la deuxième structure du tableau, pas le deuxième membre de la première.

**Corrigé candidat :** C, D. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/7-tableau-de-structures

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_007-01 — Structure imbriquée

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un membre peut être lui-même une struct : p.position.x traverse deux niveaux. » ? (Une seule réponse correcte.)

- **A ❌** Initialiseurs désignés .membre (C99)
- **B ✅** Structure imbriquée
- **C ❌** Passer une struct par valeur
- **D ❌** Initialiser une struct avec { }

**Corrigé candidat :** B. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/8-structure-imbriquee

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_007-04 — Structure imbriquée

**Plusieurs bonnes réponses**

Concernant « Structure imbriquée », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ✅** p.position est une structure entière ; p.position.x en extrait un membre.
- **B ❌** On ne peut pas accéder à un membre imbriqué avec plusieurs points.
- **C ❌** p.position.x désigne nécessairement un pointeur.
- **D ✅** Un membre peut être lui-même une struct : p.position.x traverse deux niveaux.

**Corrigé candidat :** A, D. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/8-structure-imbriquee

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_008-01 — Copier une struct par affectation

**Une seule bonne réponse**

Quelle notion décrit l'affectation `b = a;` entre deux objets compatibles d'un même type struct ? (Une seule réponse correcte.)

- **A ✅** Copier une struct par affectation
- **B ❌** Tableau de structures
- **C ❌** Modifier une struct via son adresse
- **D ❌** Initialiseurs désignés .membre (C99)

**Corrigé candidat :** A. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/9-copier-une-struct-par-affectation

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_008-04 — Copier une struct par affectation

**Plusieurs bonnes réponses**

Concernant « Copier une struct par affectation », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ✅** La copie est indépendante pour les membres entiers ; les membres pointeurs peuvent continuer à désigner la même mémoire.
- **B ✅** Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres.
- **C ❌** b=a entre deux struct compatibles alloue une copie sur le tas.
- **D ❌** La copie de struct duplique en profondeur la mémoire désignée par ses pointeurs membres.

**Corrigé candidat :** A, B. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/9-copier-une-struct-par-affectation

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_009-01 — Passer une struct par valeur

**Une seule bonne réponse**

Quelle notion correspond au passage d'une copie de struct à un paramètre `struct point p` ? (Une seule réponse correcte.)

- **A ❌** Structure imbriquée
- **B ❌** Tableau de structures
- **C ❌** Initialiseurs désignés .membre (C99)
- **D ✅** Passer une struct par valeur

**Corrigé candidat :** D. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/10-passer-une-struct-par-valeur

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_009-04 — Passer une struct par valeur

**Plusieurs bonnes réponses**

Concernant « Passer une struct par valeur », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ❌** Toute struct est passée implicitement par pointeur.
- **B ✅** Une fonction qui reçoit struct point p obtient une copie : modifier p.x ne change pas l’objet initial.
- **C ✅** Passer une struct par valeur ne permet pas de modifier directement ses membres dans l’objet de l’appelant.
- **D ❌** Modifier un paramètre struct passé par valeur modifie directement l'objet de l'appelant.

**Corrigé candidat :** B, C. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/10-passer-une-struct-par-valeur

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_010-01 — Modifier une struct via son adresse

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « En passant struct point *p à une fonction, celle-ci peut modifier l’objet de l’appelant via p->x. » ? (Une seule réponse correcte.)

- **A ❌** Copier une struct par affectation
- **B ❌** Structure imbriquée
- **C ✅** Modifier une struct via son adresse
- **D ❌** Tableau de structures

**Corrigé candidat :** C. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/11-modifier-une-struct-via-son-adresse

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_010-04 — Modifier une struct via son adresse

**Plusieurs bonnes réponses**

Concernant « Modifier une struct via son adresse », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ❌** Passer &objet à une fonction empêche la modification de ses membres.
- **B ❌** L'opérateur -> est réservé aux membres globaux.
- **C ✅** Le paramètre p reçoit une copie de l'adresse de la struct, et p->x permet d'accéder à son membre x.
- **D ✅** En passant struct point *p à une fonction, celle-ci peut modifier l’objet de l’appelant via p->x.

**Corrigé candidat :** C, D. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/11-modifier-une-struct-via-son-adresse

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_011-01 — typedef : donner un alias à un type

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int. » ? (Une seule réponse correcte.)

- **A ❌** typedef avec structure anonyme
- **B ✅** typedef : donner un alias à un type
- **C ❌** sizeof(struct) et padding (avancé)
- **D ❌** malloc pour une struct

**Corrigé candidat :** B. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/12-typedef-donner-un-alias-a-un-type

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_011-04 — typedef : donner un alias à un type

**Plusieurs bonnes réponses**

Concernant « typedef : donner un alias à un type », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ✅** Un typedef crée un nom de type, pas une variable : identifiant id; déclare l’objet id.
- **B ❌** typedef unsigned int identifiant crée un type incompatible avec unsigned int.
- **C ❌** typedef modifie la représentation mémoire du type.
- **D ✅** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.

**Corrigé candidat :** A, D. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/12-typedef-donner-un-alias-a-un-type

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_012-01 — typedef struct : nommer une structure

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « typedef struct animal { int age; } animal_t; rend le type utilisable sous le nom animal_t. » ? (Une seule réponse correcte.)

- **A ✅** typedef struct : nommer une structure
- **B ❌** sizeof(struct) et padding (avancé)
- **C ❌** malloc pour une struct
- **D ❌** Structure autoréférentielle (avancé)

**Corrigé candidat :** A. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/13-typedef-struct-nommer-une-structure

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_012-04 — typedef struct : nommer une structure

**Plusieurs bonnes réponses**

Concernant « typedef struct : nommer une structure », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ❌** typedef struct animal {...} animal_t déclare automatiquement un objet animal_t.
- **B ❌** Les membres de struct cessent d'exister après typedef.
- **C ✅** Le ; après le } est obligatoire. struct animal et animal_t désignent le même type ; animal_t a; crée une variable.
- **D ✅** typedef struct animal { int age; } animal_t; rend le type utilisable sous le nom animal_t.
- **E ✅** Après cet alias de type, animal_t a; déclare un objet sans écrire struct animal.

**Corrigé candidat :** C, D, E. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/13-typedef-struct-nommer-une-structure

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_013-01 — typedef avec structure anonyme

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette. » ? (Une seule réponse correcte.)

- **A ❌** typedef : donner un alias à un type
- **B ❌** malloc pour une struct
- **C ❌** Structure autoréférentielle (avancé)
- **D ✅** typedef avec structure anonyme

**Corrigé candidat :** D. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/14-typedef-avec-structure-anonyme

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_013-04 — typedef avec structure anonyme

**Plusieurs bonnes réponses**

Concernant « typedef avec structure anonyme », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ❌** point_t p exige le préfixe struct.
- **B ✅** typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.
- **C ✅** point_t est l’alias ; struct point_t n’est pas un nom de type valide dans cet exemple.
- **D ❌** Un typedef de struct anonyme crée une étiquette struct point_t.

**Corrigé candidat :** B, C. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/14-typedef-avec-structure-anonyme

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_014-01 — sizeof(struct) et padding (avancé)

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement. » ? (Une seule réponse correcte.)

- **A ❌** typedef struct : nommer une structure
- **B ❌** Structure autoréférentielle (avancé)
- **C ✅** sizeof(struct) et padding (avancé)
- **D ❌** typedef : donner un alias à un type

**Corrigé candidat :** C. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/15-sizeof-struct-et-padding-avance

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_014-04 — sizeof(struct) et padding (avancé)

**Plusieurs bonnes réponses**

Concernant « sizeof(struct) et padding (avancé) », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ❌** sizeof(struct T) est toujours la somme exacte des tailles des membres.
- **B ❌** Le padding ne peut apparaître qu'avant le premier membre.
- **C ✅** Cette fiche est avancée et facultative. sizeof(struct) et offsetof permettent de constater la disposition réelle sans présumer de la taille de int.
- **D ✅** sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.

**Corrigé candidat :** C, D. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/15-sizeof-struct-et-padding-avance

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_015-01 — malloc pour une struct

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « malloc(sizeof *p) réserve assez d’octets pour un objet du type struct pointé par p. » ? (Une seule réponse correcte.)

- **A ❌** typedef avec structure anonyme
- **B ✅** malloc pour une struct
- **C ❌** Documenter une struct pour Betty
- **D ❌** typedef struct : nommer une structure

**Corrigé candidat :** B. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/16-malloc-pour-une-struct

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_015-04 — malloc pour une struct

**Plusieurs bonnes réponses**

Concernant « malloc pour une struct », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ✅** malloc(sizeof *p) réserve assez d’octets pour un objet du type struct pointé par p.
- **B ✅** Dans malloc(sizeof *p), sizeof *p mesure le type de struct pointé et non la taille du pointeur.
- **C ❌** malloc(sizeof p) et malloc(sizeof *p) sont toujours égaux pour un struct *p.
- **D ❌** malloc(sizeof *p) initialise automatiquement tous les membres.
- **E ✅** Vérifier malloc et initialiser les membres ; free libère ce bloc, pas automatiquement les allocations éventuellement pointées par ses membres.

**Corrigé candidat :** A, B, E. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/16-malloc-pour-une-struct

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_016-01 — Structure autoréférentielle (avancé)

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une struct peut contenir un pointeur vers son propre type, par exemple struct noeud *suivant. » ? (Une seule réponse correcte.)

- **A ✅** Structure autoréférentielle (avancé)
- **B ❌** sizeof(struct) et padding (avancé)
- **C ❌** typedef avant la définition d'une struct
- **D ❌** typedef avec structure anonyme

**Corrigé candidat :** A. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/17-structure-autoreferentielle-avance

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_016-04 — Structure autoréférentielle (avancé)

**Plusieurs bonnes réponses**

Concernant « Structure autoréférentielle (avancé) », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ✅** La présence d’un pointeur vers le même type ne crée pas automatiquement un autre nœud : NULL indique ici l’absence de suivant.
- **B ✅** Une struct peut contenir un pointeur vers son propre type, par exemple struct noeud *suivant.
- **C ❌** Une struct peut contenir directement un membre de son propre type complet par valeur.
- **D ❌** struct noeud *suivant doit obligatoirement pointer sur lui-même.

**Corrigé candidat :** A, B. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/17-structure-autoreferentielle-avance

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_017-01 — Documenter une struct pour Betty

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre. » ? (Une seule réponse correcte.)

- **A ❌** malloc pour une struct
- **B ❌** Point ou flèche ? Comparer . et ->
- **C ❌** sizeof(struct) et padding (avancé)
- **D ✅** Documenter une struct pour Betty

**Corrigé candidat :** D. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/18-documenter-une-struct-pour-betty

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_017-04 — Documenter une struct pour Betty

**Plusieurs bonnes réponses**

Concernant « Documenter une struct pour Betty », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ❌** Les annotations @membre doivent obligatoirement figurer dans le .c.
- **B ✅** La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.
- **C ✅** Betty est une convention de documentation externe au C : commenter struct point ainsi que chaque membre avec @x: et @y:. La documentation doit accompagner la définition, pas être reportée à la fin.
- **D ❌** Betty ne demande aucune documentation des membres de la struct.

**Corrigé candidat :** B, C. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/18-documenter-une-struct-pour-betty

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_018-01 — typedef avant la définition d'une struct

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « typedef struct point point; annonce un alias pour un type encore incomplet ; sa définition complète permet ensuite de créer point p. » ? (Une seule réponse correcte.)

- **A ❌** Structure autoréférentielle (avancé)
- **B ❌** Include guards — protéger les fichiers .h
- **C ✅** typedef avant la définition d'une struct
- **D ❌** malloc pour une struct

**Corrigé candidat :** C. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/19-typedef-avant-la-definition-d-une-struct

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_018-04 — typedef avant la définition d'une struct

**Plusieurs bonnes réponses**

Concernant « typedef avant la définition d'une struct », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ❌** Un type déclaré par typedef struct point point; peut être instancié sans définition complète.
- **B ❌** La déclaration anticipée définit automatiquement tous les champs.
- **C ✅** Un typedef ne remplace pas la définition complète de la structure. L'alias point et struct point sont le même type ; la déclaration anticipée ne suffit pas pour créer un objet avant les accolades.
- **D ✅** typedef struct point point; annonce un alias pour un type encore incomplet ; sa définition complète permet ensuite de créer point p.

**Corrigé candidat :** C, D. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/19-typedef-avant-la-definition-d-une-struct

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_019-01 — Point ou flèche ? Comparer . et ->

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre. » ? (Une seule réponse correcte.)

- **A ❌** Documenter une struct pour Betty
- **B ✅** Point ou flèche ? Comparer . et ->
- **C ❌** Structure autoréférentielle (avancé)
- **D ❌** malloc pour une struct

**Corrigé candidat :** B. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/20-point-ou-fleche-comparer-et

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_019-04 — Point ou flèche ? Comparer . et ->

**Plusieurs bonnes réponses**

Concernant « Point ou flèche ? Comparer . et -> », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ✅** Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre.
- **B ❌** ptr.x est toujours valide pour un pointeur ptr vers struct.
- **C ❌** objet->x est toujours valide pour une variable objet de type struct.
- **D ✅** Question réflexe : « à gauche, ai-je une struct ou un pointeur vers struct ? » Objet => . ; pointeur => -> ; le signe = sert ensuite à affecter la valeur. L’expression (*p).pages est équivalente à p->pages.

**Corrigé candidat :** A, D. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/20-point-ou-fleche-comparer-et

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_020-01 — Include guards — protéger les fichiers .h

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction. » ? (Une seule réponse correcte.)

- **A ✅** Include guards — protéger les fichiers .h
- **B ❌** typedef avant la définition d'une struct
- **C ❌** Documenter une struct pour Betty
- **D ❌** Structure autoréférentielle (avancé)

**Corrigé candidat :** A. L'énoncé décrit précisément cette notion ; les autres propositions renvoient à des mécanismes voisins du même domaine.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/21-include-guards-proteger-les-fichiers-h

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## V1-N16_020-04 — Include guards — protéger les fichiers .h

**Plusieurs bonnes réponses**

Concernant « Include guards — protéger les fichiers .h », quelles affirmations sont techniquement exactes ? (Plusieurs réponses correctes.)

- **A ✅** Un include guard évite les redéfinitions lors d'inclusions répétées d'un même fichier d'en-tête.
- **B ✅** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.
- **C ❌** Les include guards évitent tous les conflits entre fichiers .c.
- **D ❌** Les include guards empêchent toute inclusion du même .h dans une autre unité de traduction.

**Corrigé candidat :** A, B. Les réponses exactes reprennent des propriétés de la notion ; les distracteurs décrivent des erreurs plausibles concernant ce même sujet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/21-include-guards-proteger-les-fichiers-h

**Relecture :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

