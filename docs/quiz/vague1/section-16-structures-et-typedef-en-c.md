# Banque de revue — Structures et typedef en C

84 questions candidates couvrant 21 notions. **Toutes les réponses sont des propositions à vérifier indépendamment** ; elles sont dérivées des fiches existantes et peuvent contenir des distracteurs ambigus. **Ne rien publier sur le site.**

## N16_000 — struct : regrouper plusieurs données

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/1-struct-regrouper-plusieurs-donnees)

### V1-N16_000-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une struct définit un type composé de membres nommés, éventuellement de types différents. » ?

- **A ❌** Tableau de structures
- **B ❌** typedef avec structure anonyme
- **C ❌** Include guards — protéger les fichiers .h
- **D ✅** struct : regrouper plusieurs données

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/1-struct-regrouper-plusieurs-donnees

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_000-02 · description

**Une seule bonne réponse**

Quelle description caractérise « struct : regrouper plusieurs données » ?

- **A ✅** Une struct définit un type composé de membres nommés, éventuellement de types différents.
- **B ❌** Un tableau comme struct point a[2] regroupe plusieurs objets struct, accessibles par a[i].x.
- **C ❌** typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.
- **D ❌** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Une struct définit un type composé de membres nommés, éventuellement de types différents.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/1-struct-regrouper-plusieurs-donnees

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_000-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « struct : regrouper plusieurs données » ?

- **A ❌** a[1] est la deuxième structure du tableau, pas le deuxième membre de la première.
- **B ❌** Placer l’include guard autour de l’ensemble du .h. Un bon en-tête contient principalement déclarations, types et prototypes ; les définitions de fonctions ordinaires se placent généralement dans un .c. #ifndef / #define / #endif sont des directives du préprocesseur, sans point-virgule.
- **C ✅** Le nom point est l’étiquette (tag) du type ; les membres sont déclarés dans les accolades. Ne pas oublier le ; final.
- **D ❌** point_t est l’alias ; struct point_t n’est pas un nom de type valide dans cet exemple.

**Réponse candidate :** C · **Explication :** La fiche indique : Le nom point est l’étiquette (tag) du type ; les membres sont déclarés dans les accolades. Ne pas oublier le ; final.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/1-struct-regrouper-plusieurs-donnees

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_000-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « struct : regrouper plusieurs données » ?

- **A ❌** strncpy copie au plus n caractères et peut ne pas ajouter '\0' si la source est trop longue ; la limite ne garantit pas une chaîne C valide.
- **B ❌** memcpy copie des octets seulement si source et destination ne se recouvrent pas ; memmove convient lorsque les zones peuvent se chevaucher.
- **C ✅** Le nom point est l’étiquette (tag) du type ; les membres sont déclarés dans les accolades. Ne pas oublier le ; final.
- **D ✅** Une struct définit un type composé de membres nommés, éventuellement de types différents.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/1-struct-regrouper-plusieurs-donnees

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_001 — struct : type et variable

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/2-struct-type-et-variable)

### V1-N16_001-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type. » ?

- **A ✅** struct : type et variable
- **B ❌** Modifier une struct via son adresse
- **C ❌** Documenter une struct pour Betty
- **D ❌** Accès par pointeur avec ->

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/2-struct-type-et-variable

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_001-02 · description

**Une seule bonne réponse**

Quelle description caractérise « struct : type et variable » ?

- **A ❌** Si ptr est un pointeur valide vers une struct, ptr->x accède au membre x de l’objet pointé. La flèche -> équivaut à (*ptr).x, mais n’est pas un signe d’affectation.
- **B ❌** La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.
- **C ❌** En passant struct point *p à une fonction, celle-ci peut modifier l’objet de l’appelant via p->x.
- **D ✅** « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/2-struct-type-et-variable

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_001-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « struct : type et variable » ?

- **A ✅** Le type struct chat n’est pas l’objet felix ; plusieurs objets peuvent partager la même définition.
- **B ❌** Distinguer « p » (l’adresse de la structure), « p->x » (le membre de la structure) et « nouvelle_valeur » (le paramètre reçu). La fonction n’a pas besoin de connaître le nom « point » utilisé dans main.
- **C ❌** Trois expressions pour le MÊME membre : position.x (objet), ptr->x (pointeur) et (*ptr).x (pointeur déréférencé). ptr.x et position->x sont incorrects. -> choisit un membre ; = donne une valeur.
- **D ❌** Betty est une convention de documentation externe au C : commenter struct point ainsi que chaque membre avec @x: et @y:. La documentation doit accompagner la définition, pas être reportée à la fin.

**Réponse candidate :** A · **Explication :** La fiche indique : Le type struct chat n’est pas l’objet felix ; plusieurs objets peuvent partager la même définition.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/2-struct-type-et-variable

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_001-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « struct : type et variable » ?

- **A ✅** « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type.
- **B ❌** Reste : 2.
- **C ❌** Affiche 87654321 si on affiche i dans le corps.
- **D ✅** Le type struct chat n’est pas l’objet felix ; plusieurs objets peuvent partager la même définition.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/2-struct-type-et-variable

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_002 — Accès aux membres avec .

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/3-acces-aux-membres-avec)

### V1-N16_002-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Si p est une variable de type struct point (l’objet lui-même), p.x lit ou modifie son membre x. Le point s’emploie sur l’objet, pas directement sur son adresse. » ?

- **A ❌** sizeof(struct) et padding (avancé)
- **B ✅** Accès aux membres avec .
- **C ❌** Include guards — protéger les fichiers .h
- **D ❌** Structure imbriquée

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/3-acces-aux-membres-avec

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_002-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Accès aux membres avec . » ?

- **A ❌** Un membre peut être lui-même une struct : p.position.x traverse deux niveaux.
- **B ❌** sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.
- **C ✅** Si p est une variable de type struct point (l’objet lui-même), p.x lit ou modifie son membre x. Le point s’emploie sur l’objet, pas directement sur son adresse.
- **D ❌** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Si p est une variable de type struct point (l’objet lui-même), p.x lit ou modifie son membre x. Le point s’emploie sur l’objet, pas directement sur son adresse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/3-acces-aux-membres-avec

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_002-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Accès aux membres avec . » ?

- **A ❌** Placer l’include guard autour de l’ensemble du .h. Un bon en-tête contient principalement déclarations, types et prototypes ; les définitions de fonctions ordinaires se placent généralement dans un .c. #ifndef / #define / #endif sont des directives du préprocesseur, sans point-virgule.
- **B ❌** Cette fiche est avancée et facultative. sizeof(struct) et offsetof permettent de constater la disposition réelle sans présumer de la taille de int.
- **C ❌** p.position est une structure entière ; p.position.x en extrait un membre.
- **D ✅** À retenir : OBJET struct => objet.membre. Ici position est la structure elle-même ; position.x = 7 ne modifie pas position.y. Le point choisit le membre, tandis que = réalise l'affectation.

**Réponse candidate :** D · **Explication :** La fiche indique : À retenir : OBJET struct => objet.membre. Ici position est la structure elle-même ; position.x = 7 ne modifie pas position.y. Le point choisit le membre, tandis que = réalise l'affectation.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/3-acces-aux-membres-avec

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_002-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Accès aux membres avec . » ?

- **A ✅** À retenir : OBJET struct => objet.membre. Ici position est la structure elle-même ; position.x = 7 ne modifie pas position.y. Le point choisit le membre, tandis que = réalise l'affectation.
- **B ✅** Si p est une variable de type struct point (l’objet lui-même), p.x lit ou modifie son membre x. Le point s’emploie sur l’objet, pas directement sur son adresse.
- **C ❌** Écraser un fichier avec la sortie / ajouter à la fin.
- **D ❌** Afficher le dossier actuel / changer de dossier / lister les fichiers.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/3-acces-aux-membres-avec

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_003 — Accès par pointeur avec ->

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/4-acces-par-pointeur-avec)

### V1-N16_003-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Si ptr est un pointeur valide vers une struct, ptr->x accède au membre x de l’objet pointé. La flèche -> équivaut à (*ptr).x, mais n’est pas un signe d’affectation. » ?

- **A ✅** Accès par pointeur avec ->
- **B ❌** Documenter une struct pour Betty
- **C ❌** Initialiser une struct avec { }
- **D ❌** typedef : donner un alias à un type

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/4-acces-par-pointeur-avec

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_003-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Accès par pointeur avec -> » ?

- **A ❌** La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.
- **B ❌** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.
- **C ✅** Si ptr est un pointeur valide vers une struct, ptr->x accède au membre x de l’objet pointé. La flèche -> équivaut à (*ptr).x, mais n’est pas un signe d’affectation.
- **D ❌** Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Si ptr est un pointeur valide vers une struct, ptr->x accède au membre x de l’objet pointé. La flèche -> équivaut à (*ptr).x, mais n’est pas un signe d’affectation.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/4-acces-par-pointeur-avec

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_003-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Accès par pointeur avec -> » ?

- **A ✅** Trois expressions pour le MÊME membre : position.x (objet), ptr->x (pointeur) et (*ptr).x (pointeur déréférencé). ptr.x et position->x sont incorrects. -> choisit un membre ; = donne une valeur.
- **B ❌** Un typedef crée un nom de type, pas une variable : identifiant id; déclare l’objet id.
- **C ❌** Dans cet exemple, largeur = 4, hauteur = 5, profondeur = 0. Un objet automatique non initialisé ne bénéficie pas automatiquement de cette remise à zéro.
- **D ❌** Betty est une convention de documentation externe au C : commenter struct point ainsi que chaque membre avec @x: et @y:. La documentation doit accompagner la définition, pas être reportée à la fin.

**Réponse candidate :** A · **Explication :** La fiche indique : Trois expressions pour le MÊME membre : position.x (objet), ptr->x (pointeur) et (*ptr).x (pointeur déréférencé). ptr.x et position->x sont incorrects. -> choisit un membre ; = donne une valeur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/4-acces-par-pointeur-avec

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_003-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Accès par pointeur avec -> » ?

- **A ✅** Si ptr est un pointeur valide vers une struct, ptr->x accède au membre x de l’objet pointé. La flèche -> équivaut à (*ptr).x, mais n’est pas un signe d’affectation.
- **B ✅** Trois expressions pour le MÊME membre : position.x (objet), ptr->x (pointeur) et (*ptr).x (pointeur déréférencé). ptr.x et position->x sont incorrects. -> choisit un membre ; = donne une valeur.
- **C ❌** Comparaisons.
- **D ❌** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/4-acces-par-pointeur-avec

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_004 — Initialiser une struct avec { }

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/5-initialiser-une-struct-avec)

### V1-N16_004-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};. » ?

- **A ❌** sizeof(struct) et padding (avancé)
- **B ❌** Copier une struct par affectation
- **C ❌** struct : regrouper plusieurs données
- **D ✅** Initialiser une struct avec { }

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/5-initialiser-une-struct-avec

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_004-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Initialiser une struct avec { } » ?

- **A ✅** Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};.
- **B ❌** Une struct définit un type composé de membres nommés, éventuellement de types différents.
- **C ❌** sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.
- **D ❌** Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/5-initialiser-une-struct-avec

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_004-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Initialiser une struct avec { } » ?

- **A ❌** Cette fiche est avancée et facultative. sizeof(struct) et offsetof permettent de constater la disposition réelle sans présumer de la taille de int.
- **B ❌** La copie est indépendante pour les membres entiers ; les membres pointeurs peuvent continuer à désigner la même mémoire.
- **C ✅** Dans cet exemple, largeur = 4, hauteur = 5, profondeur = 0. Un objet automatique non initialisé ne bénéficie pas automatiquement de cette remise à zéro.
- **D ❌** Le nom point est l’étiquette (tag) du type ; les membres sont déclarés dans les accolades. Ne pas oublier le ; final.

**Réponse candidate :** C · **Explication :** La fiche indique : Dans cet exemple, largeur = 4, hauteur = 5, profondeur = 0. Un objet automatique non initialisé ne bénéficie pas automatiquement de cette remise à zéro.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/5-initialiser-une-struct-avec

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_004-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Initialiser une struct avec { } » ?

- **A ✅** Dans cet exemple, largeur = 4, hauteur = 5, profondeur = 0. Un objet automatique non initialisé ne bénéficie pas automatiquement de cette remise à zéro.
- **B ❌** Compile en un fichier objet .o, sans édition de liens.
- **C ❌** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.
- **D ✅** Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/5-initialiser-une-struct-avec

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_005 — Initialiseurs désignés .membre (C99)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/6-initialiseurs-designes-membre-c99)

### V1-N16_005-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom. » ?

- **A ❌** typedef avant la définition d'une struct
- **B ❌** Initialiser une struct avec { }
- **C ✅** Initialiseurs désignés .membre (C99)
- **D ❌** typedef : donner un alias à un type

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/6-initialiseurs-designes-membre-c99

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_005-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Initialiseurs désignés .membre (C99) » ?

- **A ❌** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.
- **B ❌** Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};.
- **C ❌** typedef struct point point; annonce un alias pour un type encore incomplet ; sa définition complète permet ensuite de créer point p.
- **D ✅** Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/6-initialiseurs-designes-membre-c99

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_005-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Initialiseurs désignés .membre (C99) » ?

- **A ❌** Un typedef ne remplace pas la définition complète de la structure. L'alias point et struct point sont le même type ; la déclaration anticipée ne suffit pas pour créer un objet avant les accolades.
- **B ❌** Un typedef crée un nom de type, pas une variable : identifiant id; déclare l’objet id.
- **C ✅** Cette syntaxe est C99 et ultérieure ; sous GNU89 strict avec -pedantic-errors, privilégie {3, 7}.
- **D ❌** Dans cet exemple, largeur = 4, hauteur = 5, profondeur = 0. Un objet automatique non initialisé ne bénéficie pas automatiquement de cette remise à zéro.

**Réponse candidate :** C · **Explication :** La fiche indique : Cette syntaxe est C99 et ultérieure ; sous GNU89 strict avec -pedantic-errors, privilégie {3, 7}.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/6-initialiseurs-designes-membre-c99

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_005-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Initialiseurs désignés .membre (C99) » ?

- **A ✅** Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.
- **B ❌** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **C ❌** Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.
- **D ✅** Cette syntaxe est C99 et ultérieure ; sous GNU89 strict avec -pedantic-errors, privilégie {3, 7}.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/6-initialiseurs-designes-membre-c99

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_006 — Tableau de structures

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/7-tableau-de-structures)

### V1-N16_006-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un tableau comme struct point a[2] regroupe plusieurs objets struct, accessibles par a[i].x. » ?

- **A ❌** Copier une struct par affectation
- **B ❌** struct : type et variable
- **C ✅** Tableau de structures
- **D ❌** malloc pour une struct

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/7-tableau-de-structures

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_006-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Tableau de structures » ?

- **A ✅** Un tableau comme struct point a[2] regroupe plusieurs objets struct, accessibles par a[i].x.
- **B ❌** « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type.
- **C ❌** malloc(sizeof *p) réserve assez d’octets pour un objet du type struct pointé par p.
- **D ❌** Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Un tableau comme struct point a[2] regroupe plusieurs objets struct, accessibles par a[i].x.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/7-tableau-de-structures

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_006-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Tableau de structures » ?

- **A ❌** Vérifier malloc et initialiser les membres ; free libère ce bloc, pas automatiquement les allocations éventuellement pointées par ses membres.
- **B ❌** Le type struct chat n’est pas l’objet felix ; plusieurs objets peuvent partager la même définition.
- **C ❌** La copie est indépendante pour les membres entiers ; les membres pointeurs peuvent continuer à désigner la même mémoire.
- **D ✅** a[1] est la deuxième structure du tableau, pas le deuxième membre de la première.

**Réponse candidate :** D · **Explication :** La fiche indique : a[1] est la deuxième structure du tableau, pas le deuxième membre de la première.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/7-tableau-de-structures

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_006-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tableau de structures » ?

- **A ❌** Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.
- **B ✅** Un tableau comme struct point a[2] regroupe plusieurs objets struct, accessibles par a[i].x.
- **C ✅** a[1] est la deuxième structure du tableau, pas le deuxième membre de la première.
- **D ❌** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/7-tableau-de-structures

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_007 — Structure imbriquée

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/8-structure-imbriquee)

### V1-N16_007-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un membre peut être lui-même une struct : p.position.x traverse deux niveaux. » ?

- **A ✅** Structure imbriquée
- **B ❌** typedef struct : nommer une structure
- **C ❌** Initialiser une struct avec { }
- **D ❌** Point ou flèche ? Comparer . et ->

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/8-structure-imbriquee

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_007-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Structure imbriquée » ?

- **A ❌** Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};.
- **B ❌** Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre.
- **C ✅** Un membre peut être lui-même une struct : p.position.x traverse deux niveaux.
- **D ❌** typedef struct animal { int age; } animal_t; rend le type utilisable sous le nom animal_t.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Un membre peut être lui-même une struct : p.position.x traverse deux niveaux.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/8-structure-imbriquee

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_007-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Structure imbriquée » ?

- **A ✅** p.position est une structure entière ; p.position.x en extrait un membre.
- **B ❌** Le ; après le } est obligatoire. struct animal et animal_t désignent le même type ; animal_t a; crée une variable.
- **C ❌** Question réflexe : « à gauche, ai-je une struct ou un pointeur vers struct ? » Objet => . ; pointeur => -> ; le signe = sert ensuite à affecter la valeur. L’expression (*p).pages est équivalente à p->pages.
- **D ❌** Dans cet exemple, largeur = 4, hauteur = 5, profondeur = 0. Un objet automatique non initialisé ne bénéficie pas automatiquement de cette remise à zéro.

**Réponse candidate :** A · **Explication :** La fiche indique : p.position est une structure entière ; p.position.x en extrait un membre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/8-structure-imbriquee

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_007-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Structure imbriquée » ?

- **A ✅** Un membre peut être lui-même une struct : p.position.x traverse deux niveaux.
- **B ✅** p.position est une structure entière ; p.position.x en extrait un membre.
- **C ❌** Résultat entier : 1.
- **D ❌** Affiche 876543210 si on affiche i dans le corps.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/8-structure-imbriquee

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_008 — Copier une struct par affectation

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/9-copier-une-struct-par-affectation)

### V1-N16_008-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres. » ?

- **A ❌** struct : type et variable
- **B ❌** Structure autoréférentielle (avancé)
- **C ❌** Passer une struct par valeur
- **D ✅** Copier une struct par affectation

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/9-copier-une-struct-par-affectation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_008-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Copier une struct par affectation » ?

- **A ❌** Une fonction qui reçoit struct point p obtient une copie : modifier p.x ne change pas l’objet initial.
- **B ❌** « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type.
- **C ✅** Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres.
- **D ❌** Une struct peut contenir un pointeur vers son propre type, par exemple struct noeud *suivant.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/9-copier-une-struct-par-affectation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_008-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Copier une struct par affectation » ?

- **A ❌** Le type struct chat n’est pas l’objet felix ; plusieurs objets peuvent partager la même définition.
- **B ✅** La copie est indépendante pour les membres entiers ; les membres pointeurs peuvent continuer à désigner la même mémoire.
- **C ❌** La présence d’un pointeur vers le même type ne crée pas automatiquement un autre nœud : NULL indique ici l’absence de suivant.
- **D ❌** Passer une struct par valeur ne permet pas de modifier directement ses membres dans l’objet de l’appelant.

**Réponse candidate :** B · **Explication :** La fiche indique : La copie est indépendante pour les membres entiers ; les membres pointeurs peuvent continuer à désigner la même mémoire.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/9-copier-une-struct-par-affectation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_008-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Copier une struct par affectation » ?

- **A ✅** La copie est indépendante pour les membres entiers ; les membres pointeurs peuvent continuer à désigner la même mémoire.
- **B ❌** Entrée standard (0) / sortie standard (1) / erreurs (2).
- **C ❌** Dépend du répertoire actuel.
- **D ✅** Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/9-copier-une-struct-par-affectation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_009 — Passer une struct par valeur

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/10-passer-une-struct-par-valeur)

### V1-N16_009-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une fonction qui reçoit struct point p obtient une copie : modifier p.x ne change pas l’objet initial. » ?

- **A ✅** Passer une struct par valeur
- **B ❌** typedef avec structure anonyme
- **C ❌** Initialiseurs désignés .membre (C99)
- **D ❌** Point ou flèche ? Comparer . et ->

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/10-passer-une-struct-par-valeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_009-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Passer une struct par valeur » ?

- **A ❌** Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.
- **B ❌** typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.
- **C ❌** Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre.
- **D ✅** Une fonction qui reçoit struct point p obtient une copie : modifier p.x ne change pas l’objet initial.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Une fonction qui reçoit struct point p obtient une copie : modifier p.x ne change pas l’objet initial.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/10-passer-une-struct-par-valeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_009-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Passer une struct par valeur » ?

- **A ❌** Cette syntaxe est C99 et ultérieure ; sous GNU89 strict avec -pedantic-errors, privilégie {3, 7}.
- **B ❌** Question réflexe : « à gauche, ai-je une struct ou un pointeur vers struct ? » Objet => . ; pointeur => -> ; le signe = sert ensuite à affecter la valeur. L’expression (*p).pages est équivalente à p->pages.
- **C ✅** Passer une struct par valeur ne permet pas de modifier directement ses membres dans l’objet de l’appelant.
- **D ❌** point_t est l’alias ; struct point_t n’est pas un nom de type valide dans cet exemple.

**Réponse candidate :** C · **Explication :** La fiche indique : Passer une struct par valeur ne permet pas de modifier directement ses membres dans l’objet de l’appelant.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/10-passer-une-struct-par-valeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_009-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Passer une struct par valeur » ?

- **A ❌** Égalité / différence. Attention à ne pas confondre = et ==.
- **B ❌** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.
- **C ✅** Une fonction qui reçoit struct point p obtient une copie : modifier p.x ne change pas l’objet initial.
- **D ✅** Passer une struct par valeur ne permet pas de modifier directement ses membres dans l’objet de l’appelant.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/10-passer-une-struct-par-valeur

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_010 — Modifier une struct via son adresse

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/11-modifier-une-struct-via-son-adresse)

### V1-N16_010-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « En passant struct point *p à une fonction, celle-ci peut modifier l’objet de l’appelant via p->x. » ?

- **A ❌** Structure autoréférentielle (avancé)
- **B ❌** Passer une struct par valeur
- **C ✅** Modifier une struct via son adresse
- **D ❌** Accès aux membres avec .

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/11-modifier-une-struct-via-son-adresse

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_010-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Modifier une struct via son adresse » ?

- **A ✅** En passant struct point *p à une fonction, celle-ci peut modifier l’objet de l’appelant via p->x.
- **B ❌** Si p est une variable de type struct point (l’objet lui-même), p.x lit ou modifie son membre x. Le point s’emploie sur l’objet, pas directement sur son adresse.
- **C ❌** Une fonction qui reçoit struct point p obtient une copie : modifier p.x ne change pas l’objet initial.
- **D ❌** Une struct peut contenir un pointeur vers son propre type, par exemple struct noeud *suivant.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : En passant struct point *p à une fonction, celle-ci peut modifier l’objet de l’appelant via p->x.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/11-modifier-une-struct-via-son-adresse

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_010-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Modifier une struct via son adresse » ?

- **A ❌** La présence d’un pointeur vers le même type ne crée pas automatiquement un autre nœud : NULL indique ici l’absence de suivant.
- **B ❌** À retenir : OBJET struct => objet.membre. Ici position est la structure elle-même ; position.x = 7 ne modifie pas position.y. Le point choisit le membre, tandis que = réalise l'affectation.
- **C ❌** Passer une struct par valeur ne permet pas de modifier directement ses membres dans l’objet de l’appelant.
- **D ✅** Distinguer « p » (l’adresse de la structure), « p->x » (le membre de la structure) et « nouvelle_valeur » (le paramètre reçu). La fonction n’a pas besoin de connaître le nom « point » utilisé dans main.

**Réponse candidate :** D · **Explication :** La fiche indique : Distinguer « p » (l’adresse de la structure), « p->x » (le membre de la structure) et « nouvelle_valeur » (le paramètre reçu). La fonction n’a pas besoin de connaître le nom « point » utilisé dans main.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/11-modifier-une-struct-via-son-adresse

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_010-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Modifier une struct via son adresse » ?

- **A ✅** Distinguer « p » (l’adresse de la structure), « p->x » (le membre de la structure) et « nouvelle_valeur » (le paramètre reçu). La fonction n’a pas besoin de connaître le nom « point » utilisé dans main.
- **B ❌** char représente un petit entier utilisé notamment pour les caractères ; 'A' est une constante de caractère.
- **C ✅** En passant struct point *p à une fonction, celle-ci peut modifier l’objet de l’appelant via p->x.
- **D ❌** Compile vers un fichier assembleur .s, sans assembler ni effectuer l’édition de liens.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/11-modifier-une-struct-via-son-adresse

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_011 — typedef : donner un alias à un type

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/12-typedef-donner-un-alias-a-un-type)

### V1-N16_011-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int. » ?

- **A ❌** Include guards — protéger les fichiers .h
- **B ❌** typedef avec structure anonyme
- **C ✅** typedef : donner un alias à un type
- **D ❌** Tableau de structures

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/12-typedef-donner-un-alias-a-un-type

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_011-02 · description

**Une seule bonne réponse**

Quelle description caractérise « typedef : donner un alias à un type » ?

- **A ❌** typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.
- **B ✅** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.
- **C ❌** Un tableau comme struct point a[2] regroupe plusieurs objets struct, accessibles par a[i].x.
- **D ❌** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/12-typedef-donner-un-alias-a-un-type

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_011-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « typedef : donner un alias à un type » ?

- **A ✅** Un typedef crée un nom de type, pas une variable : identifiant id; déclare l’objet id.
- **B ❌** Placer l’include guard autour de l’ensemble du .h. Un bon en-tête contient principalement déclarations, types et prototypes ; les définitions de fonctions ordinaires se placent généralement dans un .c. #ifndef / #define / #endif sont des directives du préprocesseur, sans point-virgule.
- **C ❌** a[1] est la deuxième structure du tableau, pas le deuxième membre de la première.
- **D ❌** point_t est l’alias ; struct point_t n’est pas un nom de type valide dans cet exemple.

**Réponse candidate :** A · **Explication :** La fiche indique : Un typedef crée un nom de type, pas une variable : identifiant id; déclare l’objet id.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/12-typedef-donner-un-alias-a-un-type

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_011-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « typedef : donner un alias à un type » ?

- **A ✅** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.
- **B ❌** Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.
- **C ✅** Un typedef crée un nom de type, pas une variable : identifiant id; déclare l’objet id.
- **D ❌** Pour un tableau a, a[2] désigne le même élément que *(a + 2).

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/12-typedef-donner-un-alias-a-un-type

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_012 — typedef struct : nommer une structure

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/13-typedef-struct-nommer-une-structure)

### V1-N16_012-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « typedef struct animal { int age; } animal_t; rend le type utilisable sous le nom animal_t. » ?

- **A ❌** Documenter une struct pour Betty
- **B ❌** Accès par pointeur avec ->
- **C ❌** Passer une struct par valeur
- **D ✅** typedef struct : nommer une structure

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/13-typedef-struct-nommer-une-structure

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_012-02 · description

**Une seule bonne réponse**

Quelle description caractérise « typedef struct : nommer une structure » ?

- **A ❌** La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.
- **B ❌** Une fonction qui reçoit struct point p obtient une copie : modifier p.x ne change pas l’objet initial.
- **C ✅** typedef struct animal { int age; } animal_t; rend le type utilisable sous le nom animal_t.
- **D ❌** Si ptr est un pointeur valide vers une struct, ptr->x accède au membre x de l’objet pointé. La flèche -> équivaut à (*ptr).x, mais n’est pas un signe d’affectation.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : typedef struct animal { int age; } animal_t; rend le type utilisable sous le nom animal_t.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/13-typedef-struct-nommer-une-structure

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_012-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « typedef struct : nommer une structure » ?

- **A ❌** Trois expressions pour le MÊME membre : position.x (objet), ptr->x (pointeur) et (*ptr).x (pointeur déréférencé). ptr.x et position->x sont incorrects. -> choisit un membre ; = donne une valeur.
- **B ✅** Le ; après le } est obligatoire. struct animal et animal_t désignent le même type ; animal_t a; crée une variable.
- **C ❌** Passer une struct par valeur ne permet pas de modifier directement ses membres dans l’objet de l’appelant.
- **D ❌** Betty est une convention de documentation externe au C : commenter struct point ainsi que chaque membre avec @x: et @y:. La documentation doit accompagner la définition, pas être reportée à la fin.

**Réponse candidate :** B · **Explication :** La fiche indique : Le ; après le } est obligatoire. struct animal et animal_t désignent le même type ; animal_t a; crée une variable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/13-typedef-struct-nommer-une-structure

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_012-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « typedef struct : nommer une structure » ?

- **A ✅** Le ; après le } est obligatoire. struct animal et animal_t désignent le même type ; animal_t a; crée une variable.
- **B ❌** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.
- **C ❌** realloc peut agrandir ou réduire un bloc de mémoire alloué ; employer un pointeur temporaire évite de perdre l’ancien bloc en cas d’échec.
- **D ✅** typedef struct animal { int age; } animal_t; rend le type utilisable sous le nom animal_t.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/13-typedef-struct-nommer-une-structure

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_013 — typedef avec structure anonyme

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/14-typedef-avec-structure-anonyme)

### V1-N16_013-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette. » ?

- **A ✅** typedef avec structure anonyme
- **B ❌** sizeof(struct) et padding (avancé)
- **C ❌** struct : regrouper plusieurs données
- **D ❌** Tableau de structures

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/14-typedef-avec-structure-anonyme

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_013-02 · description

**Une seule bonne réponse**

Quelle description caractérise « typedef avec structure anonyme » ?

- **A ❌** Un tableau comme struct point a[2] regroupe plusieurs objets struct, accessibles par a[i].x.
- **B ❌** sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.
- **C ❌** Une struct définit un type composé de membres nommés, éventuellement de types différents.
- **D ✅** typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/14-typedef-avec-structure-anonyme

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_013-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « typedef avec structure anonyme » ?

- **A ✅** point_t est l’alias ; struct point_t n’est pas un nom de type valide dans cet exemple.
- **B ❌** a[1] est la deuxième structure du tableau, pas le deuxième membre de la première.
- **C ❌** Cette fiche est avancée et facultative. sizeof(struct) et offsetof permettent de constater la disposition réelle sans présumer de la taille de int.
- **D ❌** Le nom point est l’étiquette (tag) du type ; les membres sont déclarés dans les accolades. Ne pas oublier le ; final.

**Réponse candidate :** A · **Explication :** La fiche indique : point_t est l’alias ; struct point_t n’est pas un nom de type valide dans cet exemple.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/14-typedef-avec-structure-anonyme

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_013-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « typedef avec structure anonyme » ?

- **A ✅** typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.
- **B ❌** Retirer 1, puis utiliser la nouvelle valeur.
- **C ❌** Conserve les deux derniers chiffres d’un entier positif.
- **D ✅** point_t est l’alias ; struct point_t n’est pas un nom de type valide dans cet exemple.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/14-typedef-avec-structure-anonyme

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_014 — sizeof(struct) et padding (avancé)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/15-sizeof-struct-et-padding-avance)

### V1-N16_014-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement. » ?

- **A ❌** Accès par pointeur avec ->
- **B ✅** sizeof(struct) et padding (avancé)
- **C ❌** typedef avant la définition d'une struct
- **D ❌** Modifier une struct via son adresse

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/15-sizeof-struct-et-padding-avance

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_014-02 · description

**Une seule bonne réponse**

Quelle description caractérise « sizeof(struct) et padding (avancé) » ?

- **A ✅** sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.
- **B ❌** En passant struct point *p à une fonction, celle-ci peut modifier l’objet de l’appelant via p->x.
- **C ❌** typedef struct point point; annonce un alias pour un type encore incomplet ; sa définition complète permet ensuite de créer point p.
- **D ❌** Si ptr est un pointeur valide vers une struct, ptr->x accède au membre x de l’objet pointé. La flèche -> équivaut à (*ptr).x, mais n’est pas un signe d’affectation.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/15-sizeof-struct-et-padding-avance

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_014-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « sizeof(struct) et padding (avancé) » ?

- **A ❌** Trois expressions pour le MÊME membre : position.x (objet), ptr->x (pointeur) et (*ptr).x (pointeur déréférencé). ptr.x et position->x sont incorrects. -> choisit un membre ; = donne une valeur.
- **B ❌** Un typedef ne remplace pas la définition complète de la structure. L'alias point et struct point sont le même type ; la déclaration anticipée ne suffit pas pour créer un objet avant les accolades.
- **C ❌** Distinguer « p » (l’adresse de la structure), « p->x » (le membre de la structure) et « nouvelle_valeur » (le paramètre reçu). La fonction n’a pas besoin de connaître le nom « point » utilisé dans main.
- **D ✅** Cette fiche est avancée et facultative. sizeof(struct) et offsetof permettent de constater la disposition réelle sans présumer de la taille de int.

**Réponse candidate :** D · **Explication :** La fiche indique : Cette fiche est avancée et facultative. sizeof(struct) et offsetof permettent de constater la disposition réelle sans présumer de la taille de int.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/15-sizeof-struct-et-padding-avance

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_014-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « sizeof(struct) et padding (avancé) » ?

- **A ✅** Cette fiche est avancée et facultative. sizeof(struct) et offsetof permettent de constater la disposition réelle sans présumer de la taille de int.
- **B ❌** Changer les permissions / propriétaire / utiliser des privilèges élevés.
- **C ✅** sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.
- **D ❌** Part de /, indépendamment du répertoire actuel.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/15-sizeof-struct-et-padding-avance

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_015 — malloc pour une struct

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/16-malloc-pour-une-struct)

### V1-N16_015-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « malloc(sizeof *p) réserve assez d’octets pour un objet du type struct pointé par p. » ?

- **A ❌** Structure imbriquée
- **B ❌** struct : regrouper plusieurs données
- **C ✅** malloc pour une struct
- **D ❌** sizeof(struct) et padding (avancé)

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/16-malloc-pour-une-struct

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_015-02 · description

**Une seule bonne réponse**

Quelle description caractérise « malloc pour une struct » ?

- **A ❌** sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.
- **B ✅** malloc(sizeof *p) réserve assez d’octets pour un objet du type struct pointé par p.
- **C ❌** Une struct définit un type composé de membres nommés, éventuellement de types différents.
- **D ❌** Un membre peut être lui-même une struct : p.position.x traverse deux niveaux.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : malloc(sizeof *p) réserve assez d’octets pour un objet du type struct pointé par p.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/16-malloc-pour-une-struct

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_015-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « malloc pour une struct » ?

- **A ❌** p.position est une structure entière ; p.position.x en extrait un membre.
- **B ❌** Cette fiche est avancée et facultative. sizeof(struct) et offsetof permettent de constater la disposition réelle sans présumer de la taille de int.
- **C ✅** Vérifier malloc et initialiser les membres ; free libère ce bloc, pas automatiquement les allocations éventuellement pointées par ses membres.
- **D ❌** Le nom point est l’étiquette (tag) du type ; les membres sont déclarés dans les accolades. Ne pas oublier le ; final.

**Réponse candidate :** C · **Explication :** La fiche indique : Vérifier malloc et initialiser les membres ; free libère ce bloc, pas automatiquement les allocations éventuellement pointées par ses membres.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/16-malloc-pour-une-struct

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_015-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « malloc pour une struct » ?

- **A ❌** Choisir une branche selon des conditions.
- **B ✅** Vérifier malloc et initialiser les membres ; free libère ce bloc, pas automatiquement les allocations éventuellement pointées par ses membres.
- **C ✅** malloc(sizeof *p) réserve assez d’octets pour un objet du type struct pointé par p.
- **D ❌** Un passage dans une boucle.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/16-malloc-pour-une-struct

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_016 — Structure autoréférentielle (avancé)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/17-structure-autoreferentielle-avance)

### V1-N16_016-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une struct peut contenir un pointeur vers son propre type, par exemple struct noeud *suivant. » ?

- **A ❌** typedef avant la définition d'une struct
- **B ❌** Initialiser une struct avec { }
- **C ❌** typedef : donner un alias à un type
- **D ✅** Structure autoréférentielle (avancé)

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/17-structure-autoreferentielle-avance

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_016-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Structure autoréférentielle (avancé) » ?

- **A ✅** Une struct peut contenir un pointeur vers son propre type, par exemple struct noeud *suivant.
- **B ❌** typedef struct point point; annonce un alias pour un type encore incomplet ; sa définition complète permet ensuite de créer point p.
- **C ❌** Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};.
- **D ❌** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Une struct peut contenir un pointeur vers son propre type, par exemple struct noeud *suivant.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/17-structure-autoreferentielle-avance

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_016-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Structure autoréférentielle (avancé) » ?

- **A ❌** Un typedef crée un nom de type, pas une variable : identifiant id; déclare l’objet id.
- **B ✅** La présence d’un pointeur vers le même type ne crée pas automatiquement un autre nœud : NULL indique ici l’absence de suivant.
- **C ❌** Un typedef ne remplace pas la définition complète de la structure. L'alias point et struct point sont le même type ; la déclaration anticipée ne suffit pas pour créer un objet avant les accolades.
- **D ❌** Dans cet exemple, largeur = 4, hauteur = 5, profondeur = 0. Un objet automatique non initialisé ne bénéficie pas automatiquement de cette remise à zéro.

**Réponse candidate :** B · **Explication :** La fiche indique : La présence d’un pointeur vers le même type ne crée pas automatiquement un autre nœud : NULL indique ici l’absence de suivant.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/17-structure-autoreferentielle-avance

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_016-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Structure autoréférentielle (avancé) » ?

- **A ❌** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **B ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **C ✅** La présence d’un pointeur vers le même type ne crée pas automatiquement un autre nœud : NULL indique ici l’absence de suivant.
- **D ✅** Une struct peut contenir un pointeur vers son propre type, par exemple struct noeud *suivant.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/17-structure-autoreferentielle-avance

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_017 — Documenter une struct pour Betty

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/18-documenter-une-struct-pour-betty)

### V1-N16_017-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre. » ?

- **A ✅** Documenter une struct pour Betty
- **B ❌** struct : type et variable
- **C ❌** Copier une struct par affectation
- **D ❌** sizeof(struct) et padding (avancé)

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/18-documenter-une-struct-pour-betty

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_017-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Documenter une struct pour Betty » ?

- **A ❌** sizeof(struct T) inclut les membres et d’éventuels octets de remplissage liés à l’alignement.
- **B ❌** Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres.
- **C ❌** « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type.
- **D ✅** La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/18-documenter-une-struct-pour-betty

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_017-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Documenter une struct pour Betty » ?

- **A ✅** Betty est une convention de documentation externe au C : commenter struct point ainsi que chaque membre avec @x: et @y:. La documentation doit accompagner la définition, pas être reportée à la fin.
- **B ❌** Le type struct chat n’est pas l’objet felix ; plusieurs objets peuvent partager la même définition.
- **C ❌** Cette fiche est avancée et facultative. sizeof(struct) et offsetof permettent de constater la disposition réelle sans présumer de la taille de int.
- **D ❌** La copie est indépendante pour les membres entiers ; les membres pointeurs peuvent continuer à désigner la même mémoire.

**Réponse candidate :** A · **Explication :** La fiche indique : Betty est une convention de documentation externe au C : commenter struct point ainsi que chaque membre avec @x: et @y:. La documentation doit accompagner la définition, pas être reportée à la fin.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/18-documenter-une-struct-pour-betty

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_017-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Documenter une struct pour Betty » ?

- **A ✅** La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.
- **B ❌** Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.
- **C ❌** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.
- **D ✅** Betty est une convention de documentation externe au C : commenter struct point ainsi que chaque membre avec @x: et @y:. La documentation doit accompagner la définition, pas être reportée à la fin.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/18-documenter-une-struct-pour-betty

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_018 — typedef avant la définition d'une struct

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/19-typedef-avant-la-definition-d-une-struct)

### V1-N16_018-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « typedef struct point point; annonce un alias pour un type encore incomplet ; sa définition complète permet ensuite de créer point p. » ?

- **A ❌** Initialiseurs désignés .membre (C99)
- **B ✅** typedef avant la définition d'une struct
- **C ❌** typedef : donner un alias à un type
- **D ❌** Point ou flèche ? Comparer . et ->

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/19-typedef-avant-la-definition-d-une-struct

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_018-02 · description

**Une seule bonne réponse**

Quelle description caractérise « typedef avant la définition d'une struct » ?

- **A ❌** Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre.
- **B ❌** Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.
- **C ✅** typedef struct point point; annonce un alias pour un type encore incomplet ; sa définition complète permet ensuite de créer point p.
- **D ❌** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : typedef struct point point; annonce un alias pour un type encore incomplet ; sa définition complète permet ensuite de créer point p.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/19-typedef-avant-la-definition-d-une-struct

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_018-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « typedef avant la définition d'une struct » ?

- **A ❌** Un typedef crée un nom de type, pas une variable : identifiant id; déclare l’objet id.
- **B ❌** Cette syntaxe est C99 et ultérieure ; sous GNU89 strict avec -pedantic-errors, privilégie {3, 7}.
- **C ❌** Question réflexe : « à gauche, ai-je une struct ou un pointeur vers struct ? » Objet => . ; pointeur => -> ; le signe = sert ensuite à affecter la valeur. L’expression (*p).pages est équivalente à p->pages.
- **D ✅** Un typedef ne remplace pas la définition complète de la structure. L'alias point et struct point sont le même type ; la déclaration anticipée ne suffit pas pour créer un objet avant les accolades.

**Réponse candidate :** D · **Explication :** La fiche indique : Un typedef ne remplace pas la définition complète de la structure. L'alias point et struct point sont le même type ; la déclaration anticipée ne suffit pas pour créer un objet avant les accolades.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/19-typedef-avant-la-definition-d-une-struct

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_018-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « typedef avant la définition d'une struct » ?

- **A ✅** Un typedef ne remplace pas la définition complète de la structure. L'alias point et struct point sont le même type ; la déclaration anticipée ne suffit pas pour créer un objet avant les accolades.
- **B ✅** typedef struct point point; annonce un alias pour un type encore incomplet ; sa définition complète permet ensuite de créer point p.
- **C ❌** Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.
- **D ❌** Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/19-typedef-avant-la-definition-d-une-struct

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_019 — Point ou flèche ? Comparer . et ->

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/20-point-ou-fleche-comparer-et)

### V1-N16_019-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre. » ?

- **A ✅** Point ou flèche ? Comparer . et ->
- **B ❌** Copier une struct par affectation
- **C ❌** malloc pour une struct
- **D ❌** Accès aux membres avec .

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/20-point-ou-fleche-comparer-et

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_019-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Point ou flèche ? Comparer . et -> » ?

- **A ❌** Si p est une variable de type struct point (l’objet lui-même), p.x lit ou modifie son membre x. Le point s’emploie sur l’objet, pas directement sur son adresse.
- **B ✅** Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre.
- **C ❌** Entre deux objets compatibles du même type struct, b = a copie la valeur de tous les membres.
- **D ❌** malloc(sizeof *p) réserve assez d’octets pour un objet du type struct pointé par p.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/20-point-ou-fleche-comparer-et

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_019-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Point ou flèche ? Comparer . et -> » ?

- **A ✅** Question réflexe : « à gauche, ai-je une struct ou un pointeur vers struct ? » Objet => . ; pointeur => -> ; le signe = sert ensuite à affecter la valeur. L’expression (*p).pages est équivalente à p->pages.
- **B ❌** À retenir : OBJET struct => objet.membre. Ici position est la structure elle-même ; position.x = 7 ne modifie pas position.y. Le point choisit le membre, tandis que = réalise l'affectation.
- **C ❌** Vérifier malloc et initialiser les membres ; free libère ce bloc, pas automatiquement les allocations éventuellement pointées par ses membres.
- **D ❌** La copie est indépendante pour les membres entiers ; les membres pointeurs peuvent continuer à désigner la même mémoire.

**Réponse candidate :** A · **Explication :** La fiche indique : Question réflexe : « à gauche, ai-je une struct ou un pointeur vers struct ? » Objet => . ; pointeur => -> ; le signe = sert ensuite à affecter la valeur. L’expression (*p).pages est équivalente à p->pages.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/20-point-ou-fleche-comparer-et

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_019-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Point ou flèche ? Comparer . et -> » ?

- **A ❌** Supprime le dernier chiffre d’un entier positif.
- **B ✅** Question réflexe : « à gauche, ai-je une struct ou un pointeur vers struct ? » Objet => . ; pointeur => -> ; le signe = sert ensuite à affecter la valeur. L’expression (*p).pages est équivalente à p->pages.
- **C ✅** Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre.
- **D ❌** Utiliser l’ancienne valeur, puis retirer 1.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/20-point-ou-fleche-comparer-et

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N16_020 — Include guards — protéger les fichiers .h

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/21-include-guards-proteger-les-fichiers-h)

### V1-N16_020-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction. » ?

- **A ❌** Initialiseurs désignés .membre (C99)
- **B ❌** Point ou flèche ? Comparer . et ->
- **C ❌** typedef struct : nommer une structure
- **D ✅** Include guards — protéger les fichiers .h

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/21-include-guards-proteger-les-fichiers-h

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_020-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Include guards — protéger les fichiers .h » ?

- **A ✅** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.
- **B ❌** typedef struct animal { int age; } animal_t; rend le type utilisable sous le nom animal_t.
- **C ❌** Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.
- **D ❌** Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/21-include-guards-proteger-les-fichiers-h

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_020-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Include guards — protéger les fichiers .h » ?

- **A ❌** Cette syntaxe est C99 et ultérieure ; sous GNU89 strict avec -pedantic-errors, privilégie {3, 7}.
- **B ❌** Question réflexe : « à gauche, ai-je une struct ou un pointeur vers struct ? » Objet => . ; pointeur => -> ; le signe = sert ensuite à affecter la valeur. L’expression (*p).pages est équivalente à p->pages.
- **C ✅** Placer l’include guard autour de l’ensemble du .h. Un bon en-tête contient principalement déclarations, types et prototypes ; les définitions de fonctions ordinaires se placent généralement dans un .c. #ifndef / #define / #endif sont des directives du préprocesseur, sans point-virgule.
- **D ❌** Le ; après le } est obligatoire. struct animal et animal_t désignent le même type ; animal_t a; crée une variable.

**Réponse candidate :** C · **Explication :** La fiche indique : Placer l’include guard autour de l’ensemble du .h. Un bon en-tête contient principalement déclarations, types et prototypes ; les définitions de fonctions ordinaires se placent généralement dans un .c. #ifndef / #define / #endif sont des directives du préprocesseur, sans point-virgule.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/21-include-guards-proteger-les-fichiers-h

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N16_020-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Include guards — protéger les fichiers .h » ?

- **A ✅** Placer l’include guard autour de l’ensemble du .h. Un bon en-tête contient principalement déclarations, types et prototypes ; les définitions de fonctions ordinaires se placent généralement dans un .c. #ifndef / #define / #endif sont des directives du préprocesseur, sans point-virgule.
- **B ❌** Dossier courant / dossier parent.
- **C ❌** r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).
- **D ✅** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/21-include-guards-proteger-les-fichiers-h

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

