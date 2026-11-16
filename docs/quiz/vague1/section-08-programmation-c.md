# Banque de revue — Programmation C

124 questions candidates couvrant 31 notions. **Toutes les réponses sont des propositions à vérifier indépendamment** ; elles sont dérivées des fiches existantes et peuvent contenir des distracteurs ambigus. **Ne rien publier sur le site.**

## N08_000 — main()

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/1-main)

### V1-N08_000-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Point d’entrée d’un programme C classique. » ?

- **A ❌** Prototype vs définition
- **B ❌** undefined reference
- **C ❌** Dennis Ritchie — créateur du langage C
- **D ✅** main()

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/1-main

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_000-02 · description

**Une seule bonne réponse**

Quelle description caractérise « main() » ?

- **A ✅** Point d’entrée d’un programme C classique.
- **B ❌** Dennis Ritchie a conçu le langage C aux Bell Labs au début des années 1970 ; il a aussi joué un rôle majeur dans le développement d’Unix.
- **C ❌** Un prototype annonce une signature ; la définition contient le corps de la fonction.
- **D ❌** Définition nécessaire introuvable lors de l’édition de liens.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Point d’entrée d’un programme C classique.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/1-main

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_000-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « main() » ?

- **A ❌** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.
- **B ✅** Dans main, return 0 (ou EXIT_SUCCESS) signifie succès. EXIT_FAILURE permet d’indiquer un échec de manière portable ; la signification de return 1 n’est pas universelle pour toutes les implémentations.
- **C ❌** Culture générale : Dennis Ritchie = créateur du C. Unix = travail collectif, notamment avec Ken Thompson. Brian Kernighan est coauteur du célèbre livre K&R, pas le créateur du langage.
- **D ❌** Le prototype annonce une fonction ; seule la définition fournit le code exécuté.

**Réponse candidate :** B · **Explication :** La fiche indique : Dans main, return 0 (ou EXIT_SUCCESS) signifie succès. EXIT_FAILURE permet d’indiquer un échec de manière portable ; la signification de return 1 n’est pas universelle pour toutes les implémentations.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/1-main

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_000-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « main() » ?

- **A ❌** INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.
- **B ❌** Reste de la division entière.
- **C ✅** Dans main, return 0 (ou EXIT_SUCCESS) signifie succès. EXIT_FAILURE permet d’indiquer un échec de manière portable ; la signification de return 1 n’est pas universelle pour toutes les implémentations.
- **D ✅** Point d’entrée d’un programme C classique.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/1-main

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_001 — Prototype vs définition

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/2-prototype-vs-definition)

### V1-N08_001-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un prototype annonce une signature ; la définition contient le corps de la fonction. » ?

- **A ✅** Prototype vs définition
- **B ❌** undefined reference
- **C ❌** puts / printf
- **D ❌** main()

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/2-prototype-vs-definition

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_001-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Prototype vs définition » ?

- **A ❌** Point d’entrée d’un programme C classique.
- **B ❌** Définition nécessaire introuvable lors de l’édition de liens.
- **C ❌** puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.
- **D ✅** Un prototype annonce une signature ; la définition contient le corps de la fonction.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Un prototype annonce une signature ; la définition contient le corps de la fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/2-prototype-vs-definition

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_001-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Prototype vs définition » ?

- **A ✅** Le prototype annonce une fonction ; seule la définition fournit le code exécuté.
- **B ❌** Dans main, return 0 (ou EXIT_SUCCESS) signifie succès. EXIT_FAILURE permet d’indiquer un échec de manière portable ; la signification de return 1 n’est pas universelle pour toutes les implémentations.
- **C ❌** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.
- **D ❌** puts ajoute un saut de ligne ; printf n'en ajoute que si le format le demande.

**Réponse candidate :** A · **Explication :** La fiche indique : Le prototype annonce une fonction ; seule la définition fournit le code exécuté.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/2-prototype-vs-definition

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_001-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Prototype vs définition » ?

- **A ✅** Un prototype annonce une signature ; la définition contient le corps de la fonction.
- **B ❌** Créer / retirer un raccourci de commande.
- **C ❌** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **D ✅** Le prototype annonce une fonction ; seule la définition fournit le code exécuté.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/2-prototype-vs-definition

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_002 — void

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/3-void)

### V1-N08_002-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Indique une absence de valeur de retour ou de paramètres selon le contexte. » ?

- **A ❌** undefined reference
- **B ✅** void
- **C ❌** return d’un pointeur (int *)
- **D ❌** puts / printf

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/3-void

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_002-02 · description

**Une seule bonne réponse**

Quelle description caractérise « void » ?

- **A ❌** puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.
- **B ❌** Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation.
- **C ✅** Indique une absence de valeur de retour ou de paramètres selon le contexte.
- **D ❌** Définition nécessaire introuvable lors de l’édition de liens.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Indique une absence de valeur de retour ou de paramètres selon le contexte.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/3-void

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_002-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « void » ?

- **A ❌** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.
- **B ❌** Ne retourne jamais l’adresse d’une variable locale automatique. Un pointeur renvoyé doit rester valide lors de son utilisation, ou valoir NULL ; teste NULL avant tout déréférencement.
- **C ❌** puts ajoute un saut de ligne ; printf n'en ajoute que si le format le demande.
- **D ✅** void en retour : aucun résultat ; (void) dans les paramètres : aucun paramètre.

**Réponse candidate :** D · **Explication :** La fiche indique : void en retour : aucun résultat ; (void) dans les paramètres : aucun paramètre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/3-void

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_002-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « void » ?

- **A ✅** void en retour : aucun résultat ; (void) dans les paramètres : aucun paramètre.
- **B ✅** Indique une absence de valeur de retour ou de paramètres selon le contexte.
- **C ❌** Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.
- **D ❌** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/3-void

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_003 — return

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/4-return)

### V1-N08_003-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit. » ?

- **A ✅** return
- **B ❌** puts / printf
- **C ❌** return d’un pointeur (int *)
- **D ❌** EOF — détecter la fin d'une entrée

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/4-return

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_003-02 · description

**Une seule bonne réponse**

Quelle description caractérise « return » ?

- **A ❌** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.
- **B ✅** Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.
- **C ❌** puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.
- **D ❌** Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/4-return

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_003-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « return » ?

- **A ❌** Ne retourne jamais l’adresse d’une variable locale automatique. Un pointeur renvoyé doit rester valide lors de son utilisation, ou valoir NULL ; teste NULL avant tout déréférencement.
- **B ❌** Un retour EOF n'est pas le caractère '\0'. Conserver le résultat de getchar dans un int. Pour distinguer fin de fichier et erreur de lecture, consulter feof et ferror.
- **C ✅** La valeur après return doit être compatible avec le type de retour déclaré. return; est possible dans une fonction void ; le code placé après un return exécuté n’est pas atteint.
- **D ❌** puts ajoute un saut de ligne ; printf n'en ajoute que si le format le demande.

**Réponse candidate :** C · **Explication :** La fiche indique : La valeur après return doit être compatible avec le type de retour déclaré. return; est possible dans une fonction void ; le code placé après un return exécuté n’est pas atteint.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/4-return

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_003-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « return » ?

- **A ❌** Dossier personnel de l’utilisateur.
- **B ✅** La valeur après return doit être compatible avec le type de retour déclaré. return; est possible dans une fonction void ; le code placé après un return exécuté n’est pas atteint.
- **C ✅** Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.
- **D ❌** Afficher le contenu / type du fichier / rechercher / consulter le manuel.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/4-return

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_004 — printf / _putchar

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/5-printf-putchar)

### V1-N08_004-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Affichage formaté / écriture d’un caractère. » ?

- **A ❌** return d’un pointeur (int *)
- **B ❌** EOF — détecter la fin d'une entrée
- **C ❌** ASCII
- **D ✅** printf / _putchar

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/5-printf-putchar

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_004-02 · description

**Une seule bonne réponse**

Quelle description caractérise « printf / _putchar » ?

- **A ✅** Affichage formaté / écriture d’un caractère.
- **B ❌** Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation.
- **C ❌** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.
- **D ❌** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Affichage formaté / écriture d’un caractère.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/5-printf-putchar

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_004-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « printf / _putchar » ?

- **A ❌** Ne retourne jamais l’adresse d’une variable locale automatique. Un pointeur renvoyé doit rester valide lors de son utilisation, ou valoir NULL ; teste NULL avant tout déréférencement.
- **B ❌** Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.
- **C ✅** _putchar n'est pas une fonction standard C : elle doit être fournie par le projet ou une bibliothèque.
- **D ❌** Un retour EOF n'est pas le caractère '\0'. Conserver le résultat de getchar dans un int. Pour distinguer fin de fichier et erreur de lecture, consulter feof et ferror.

**Réponse candidate :** C · **Explication :** La fiche indique : _putchar n'est pas une fonction standard C : elle doit être fournie par le projet ou une bibliothèque.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/5-printf-putchar

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_004-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « printf / _putchar » ?

- **A ✅** _putchar n'est pas une fonction standard C : elle doit être fournie par le projet ou une bibliothèque.
- **B ❌** int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.
- **C ❌** Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.
- **D ✅** Affichage formaté / écriture d’un caractère.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/5-printf-putchar

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_005 — %d / %c / %.6f

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/6-d-c-6f)

### V1-N08_005-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Entier décimal / caractère / réel avec six décimales. » ?

- **A ❌** ASCII
- **B ❌** gcc -c
- **C ✅** %d / %c / %.6f
- **D ❌** EOF — détecter la fin d'une entrée

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/6-d-c-6f

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_005-02 · description

**Une seule bonne réponse**

Quelle description caractérise « %d / %c / %.6f » ?

- **A ❌** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.
- **B ❌** Compile en un fichier objet .o, sans édition de liens.
- **C ❌** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.
- **D ✅** Entier décimal / caractère / réel avec six décimales.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Entier décimal / caractère / réel avec six décimales.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/6-d-c-6f

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_005-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « %d / %c / %.6f » ?

- **A ✅** En printf, le spécificateur doit correspondre au type fourni ; %.6f affiche six décimales.
- **B ❌** Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.
- **C ❌** Un retour EOF n'est pas le caractère '\0'. Conserver le résultat de getchar dans un int. Pour distinguer fin de fichier et erreur de lecture, consulter feof et ferror.
- **D ❌** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.

**Réponse candidate :** A · **Explication :** La fiche indique : En printf, le spécificateur doit correspondre au type fourni ; %.6f affiche six décimales.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/6-d-c-6f

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_005-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « %d / %c / %.6f » ?

- **A ✅** Entier décimal / caractère / réel avec six décimales.
- **B ❌** typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.
- **C ❌** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.
- **D ✅** En printf, le spécificateur doit correspondre au type fourni ; %.6f affiche six décimales.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/6-d-c-6f

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_006 — ASCII

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/7-ascii)

### V1-N08_006-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII. » ?

- **A ❌** return 0 / return 1
- **B ✅** ASCII
- **C ❌** %d / %c / %.6f
- **D ❌** gcc -c

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/7-ascii

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_006-02 · description

**Une seule bonne réponse**

Quelle description caractérise « ASCII » ?

- **A ❌** Compile en un fichier objet .o, sans édition de liens.
- **B ❌** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.
- **C ✅** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.
- **D ❌** Entier décimal / caractère / réel avec six décimales.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/7-ascii

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_006-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « ASCII » ?

- **A ❌** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.
- **B ❌** Ne confonds pas le code de fin de main et les valeurs renvoyées par les autres fonctions : leur signification dépend du contexte. EXIT_SUCCESS et EXIT_FAILURE sont les constantes portables de <stdlib.h>.
- **C ❌** En printf, le spécificateur doit correspondre au type fourni ; %.6f affiche six décimales.
- **D ✅** Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.

**Réponse candidate :** D · **Explication :** La fiche indique : Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/7-ascii

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_006-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « ASCII » ?

- **A ✅** Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.
- **B ✅** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.
- **C ❌** Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation.
- **D ❌** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/7-ascii

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_007 — Compilation vs édition de liens

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/8-compilation-vs-edition-de-liens)

### V1-N08_007-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Prétraitement et compilation vers le code objet, puis liaison des objets et bibliothèques pour produire l’exécutable. » ?

- **A ✅** Compilation vs édition de liens
- **B ❌** return 0 / return 1
- **C ❌** gcc -c
- **D ❌** strtol() — convertir une entrée en entier

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/8-compilation-vs-edition-de-liens

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_007-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Compilation vs édition de liens » ?

- **A ❌** Compile en un fichier objet .o, sans édition de liens.
- **B ❌** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.
- **C ✅** Prétraitement et compilation vers le code objet, puis liaison des objets et bibliothèques pour produire l’exécutable.
- **D ❌** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Prétraitement et compilation vers le code objet, puis liaison des objets et bibliothèques pour produire l’exécutable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/8-compilation-vs-edition-de-liens

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_007-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Compilation vs édition de liens » ?

- **A ✅** La chaîne complète passe par prétraitement, compilation, assemblage puis édition de liens.
- **B ❌** Contrôler simultanément fin == ligne, errno == ERANGE et les caractères restants : une entrée comme 42abc ne doit pas être acceptée silencieusement. strtol renvoie un long, pas automatiquement un int.
- **C ❌** Ne confonds pas le code de fin de main et les valeurs renvoyées par les autres fonctions : leur signification dépend du contexte. EXIT_SUCCESS et EXIT_FAILURE sont les constantes portables de <stdlib.h>.
- **D ❌** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.

**Réponse candidate :** A · **Explication :** La fiche indique : La chaîne complète passe par prétraitement, compilation, assemblage puis édition de liens.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/8-compilation-vs-edition-de-liens

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_007-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Compilation vs édition de liens » ?

- **A ✅** Prétraitement et compilation vers le code objet, puis liaison des objets et bibliothèques pour produire l’exécutable.
- **B ✅** La chaîne complète passe par prétraitement, compilation, assemblage puis édition de liens.
- **C ❌** sizeof donne la taille en octets d’un type ou d’un objet sur la machine utilisée ; ne pas supposer une taille universelle pour int ou un pointeur.
- **D ❌** « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/8-compilation-vs-edition-de-liens

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_008 — undefined reference

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/9-undefined-reference)

### V1-N08_008-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Définition nécessaire introuvable lors de l’édition de liens. » ?

- **A ❌** return 0 / return 1
- **B ❌** return
- **C ❌** strtol() — convertir une entrée en entier
- **D ✅** undefined reference

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/9-undefined-reference

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_008-02 · description

**Une seule bonne réponse**

Quelle description caractérise « undefined reference » ?

- **A ✅** Définition nécessaire introuvable lors de l’édition de liens.
- **B ❌** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.
- **C ❌** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.
- **D ❌** Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Définition nécessaire introuvable lors de l’édition de liens.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/9-undefined-reference

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_008-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « undefined reference » ?

- **A ❌** Ne confonds pas le code de fin de main et les valeurs renvoyées par les autres fonctions : leur signification dépend du contexte. EXIT_SUCCESS et EXIT_FAILURE sont les constantes portables de <stdlib.h>.
- **B ❌** La valeur après return doit être compatible avec le type de retour déclaré. return; est possible dans une fonction void ; le code placé après un return exécuté n’est pas atteint.
- **C ✅** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.
- **D ❌** Contrôler simultanément fin == ligne, errno == ERANGE et les caractères restants : une entrée comme 42abc ne doit pas être acceptée silencieusement. strtol renvoie un long, pas automatiquement un int.

**Réponse candidate :** C · **Explication :** La fiche indique : « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/9-undefined-reference

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_008-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « undefined reference » ?

- **A ✅** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.
- **B ❌** Logiciel de gestion de versions distribué.
- **C ❌** Git ne peut pas résoudre automatiquement des changements concurrents.
- **D ✅** Définition nécessaire introuvable lors de l’édition de liens.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/9-undefined-reference

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_009 — gcc -o nom source.c

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/10-gcc-o-nom-source-c)

### V1-N08_009-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Compiler un fichier source et nommer l’exécutable. » ?

- **A ❌** return
- **B ❌** gcc -E
- **C ✅** gcc -o nom source.c
- **D ❌** strtol() — convertir une entrée en entier

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/10-gcc-o-nom-source-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_009-02 · description

**Une seule bonne réponse**

Quelle description caractérise « gcc -o nom source.c » ?

- **A ❌** Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.
- **B ❌** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **C ❌** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.
- **D ✅** Compiler un fichier source et nommer l’exécutable.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Compiler un fichier source et nommer l’exécutable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/10-gcc-o-nom-source-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_009-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « gcc -o nom source.c » ?

- **A ❌** La valeur après return doit être compatible avec le type de retour déclaré. return; est possible dans une fonction void ; le code placé après un return exécuté n’est pas atteint.
- **B ❌** Contrôler simultanément fin == ligne, errno == ERANGE et les caractères restants : une entrée comme 42abc ne doit pas être acceptée silencieusement. strtol renvoie un long, pas automatiquement un int.
- **C ✅** L'option -o choisit le nom de sortie ; elle n'impose pas le type de cette sortie.
- **D ❌** gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.

**Réponse candidate :** C · **Explication :** La fiche indique : L'option -o choisit le nom de sortie ; elle n'impose pas le type de cette sortie.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/10-gcc-o-nom-source-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_009-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « gcc -o nom source.c » ?

- **A ❌** qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.
- **B ❌** Résultat entier : 1.
- **C ✅** Compiler un fichier source et nommer l’exécutable.
- **D ✅** L'option -o choisit le nom de sortie ; elle n'impose pas le type de cette sortie.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/10-gcc-o-nom-source-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_010 — GNU89

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/11-gnu89)

### V1-N08_010-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dialecte C89 avec extensions GNU. Pour rester compatible C89 strict, déclarer les variables avant les instructions. » ?

- **A ❌** return
- **B ❌** float et double
- **C ✅** GNU89
- **D ❌** gcc -E

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/11-gnu89

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_010-02 · description

**Une seule bonne réponse**

Quelle description caractérise « GNU89 » ?

- **A ✅** Dialecte C89 avec extensions GNU. Pour rester compatible C89 strict, déclarer les variables avant les instructions.
- **B ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **C ❌** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **D ❌** Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Dialecte C89 avec extensions GNU. Pour rester compatible C89 strict, déclarer les variables avant les instructions.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/11-gnu89

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_010-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « GNU89 » ?

- **A ❌** gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.
- **B ❌** Les comparaisons exactes de flottants doivent être envisagées avec prudence.
- **C ❌** La valeur après return doit être compatible avec le type de retour déclaré. return; est possible dans une fonction void ; le code placé après un return exécuté n’est pas atteint.
- **D ✅** Avec -std=gnu89, for (int i = ...) est refusé. GCC accepte parfois d’autres extensions, mais -pedantic-errors peut en faire des erreurs : privilégie les déclarations en début de bloc.

**Réponse candidate :** D · **Explication :** La fiche indique : Avec -std=gnu89, for (int i = ...) est refusé. GCC accepte parfois d’autres extensions, mais -pedantic-errors peut en faire des erreurs : privilégie les déclarations en début de bloc.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/11-gnu89

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_010-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « GNU89 » ?

- **A ❌** Code retour / premier argument / nombre d’arguments positionnels.
- **B ✅** Dialecte C89 avec extensions GNU. Pour rester compatible C89 strict, déclarer les variables avant les instructions.
- **C ✅** Avec -std=gnu89, for (int i = ...) est refusé. GCC accepte parfois d’autres extensions, mais -pedantic-errors peut en faire des erreurs : privilégie les déclarations en début de bloc.
- **D ❌** Paramètres et variables du Shell / environnement.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/11-gnu89

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_011 — gcc -E

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/12-gcc-e)

### V1-N08_011-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité. » ?

- **A ✅** gcc -E
- **B ❌** float et double
- **C ❌** GNU89
- **D ❌** scanf() — lire une saisie au clavier

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/12-gcc-e

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_011-02 · description

**Une seule bonne réponse**

Quelle description caractérise « gcc -E » ?

- **A ❌** Dialecte C89 avec extensions GNU. Pour rester compatible C89 strict, déclarer les variables avant les instructions.
- **B ❌** scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies.
- **C ✅** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **D ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/12-gcc-e

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_011-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « gcc -E » ?

- **A ✅** gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.
- **B ❌** Les comparaisons exactes de flottants doivent être envisagées avec prudence.
- **C ❌** scanf("%d", &age) attend l’adresse de age et renvoie 1 seulement si un entier est lu correctement. Vérifier le retour avant d’utiliser la variable. Avec %s, toujours fixer une largeur adaptée à la taille du tableau ; fgets est mieux adapté aux phrases avec espaces. Le format de printf n’a pas exactement les mêmes types attendus : scanf("%f", &f) pour float et scanf("%
- **D ❌** Avec -std=gnu89, for (int i = ...) est refusé. GCC accepte parfois d’autres extensions, mais -pedantic-errors peut en faire des erreurs : privilégie les déclarations en début de bloc.

**Réponse candidate :** A · **Explication :** La fiche indique : gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/12-gcc-e

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_011-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « gcc -E » ?

- **A ✅** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **B ❌** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.
- **C ✅** gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.
- **D ❌** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/12-gcc-e

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_012 — gcc -S

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/13-gcc-s)

### V1-N08_012-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Compile vers un fichier assembleur .s, sans assembler ni effectuer l’édition de liens. » ?

- **A ❌** scanf() — lire une saisie au clavier
- **B ❌** Prototype vs définition
- **C ❌** float et double
- **D ✅** gcc -S

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/13-gcc-s

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_012-02 · description

**Une seule bonne réponse**

Quelle description caractérise « gcc -S » ?

- **A ❌** scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies.
- **B ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **C ✅** Compile vers un fichier assembleur .s, sans assembler ni effectuer l’édition de liens.
- **D ❌** Un prototype annonce une signature ; la définition contient le corps de la fonction.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Compile vers un fichier assembleur .s, sans assembler ni effectuer l’édition de liens.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/13-gcc-s

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_012-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « gcc -S » ?

- **A ❌** Les comparaisons exactes de flottants doivent être envisagées avec prudence.
- **B ✅** gcc -S produit de l'assembleur (.s), sans fichier objet ni exécutable.
- **C ❌** Le prototype annonce une fonction ; seule la définition fournit le code exécuté.
- **D ❌** scanf("%d", &age) attend l’adresse de age et renvoie 1 seulement si un entier est lu correctement. Vérifier le retour avant d’utiliser la variable. Avec %s, toujours fixer une largeur adaptée à la taille du tableau ; fgets est mieux adapté aux phrases avec espaces. Le format de printf n’a pas exactement les mêmes types attendus : scanf("%f", &f) pour float et scanf("%

**Réponse candidate :** B · **Explication :** La fiche indique : gcc -S produit de l'assembleur (.s), sans fichier objet ni exécutable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/13-gcc-s

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_012-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « gcc -S » ?

- **A ✅** gcc -S produit de l'assembleur (.s), sans fichier objet ni exécutable.
- **B ❌** Relier la sortie d’une commande à l’entrée d’une autre.
- **C ❌** Copier / déplacer-renommer / supprimer.
- **D ✅** Compile vers un fichier assembleur .s, sans assembler ni effectuer l’édition de liens.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/13-gcc-s

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_013 — gcc -c

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/14-gcc-c)

### V1-N08_013-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Compile en un fichier objet .o, sans édition de liens. » ?

- **A ✅** gcc -c
- **B ❌** undefined reference
- **C ❌** Prototype vs définition
- **D ❌** scanf() — lire une saisie au clavier

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/14-gcc-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_013-02 · description

**Une seule bonne réponse**

Quelle description caractérise « gcc -c » ?

- **A ❌** Un prototype annonce une signature ; la définition contient le corps de la fonction.
- **B ❌** Définition nécessaire introuvable lors de l’édition de liens.
- **C ❌** scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies.
- **D ✅** Compile en un fichier objet .o, sans édition de liens.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Compile en un fichier objet .o, sans édition de liens.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/14-gcc-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_013-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « gcc -c » ?

- **A ✅** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.
- **B ❌** scanf("%d", &age) attend l’adresse de age et renvoie 1 seulement si un entier est lu correctement. Vérifier le retour avant d’utiliser la variable. Avec %s, toujours fixer une largeur adaptée à la taille du tableau ; fgets est mieux adapté aux phrases avec espaces. Le format de printf n’a pas exactement les mêmes types attendus : scanf("%f", &f) pour float et scanf("%
- **C ❌** Le prototype annonce une fonction ; seule la définition fournit le code exécuté.
- **D ❌** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.

**Réponse candidate :** A · **Explication :** La fiche indique : gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/14-gcc-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_013-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « gcc -c » ?

- **A ❌** Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable.
- **B ❌** strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place.
- **C ✅** Compile en un fichier objet .o, sans édition de liens.
- **D ✅** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/14-gcc-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_014 — gcc -o

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/15-gcc-o)

### V1-N08_014-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Permet de choisir le nom du fichier de sortie, par exemple gcc main.c -o cisfun. » ?

- **A ❌** Prototype vs définition
- **B ✅** gcc -o
- **C ❌** Types entiers en C
- **D ❌** undefined reference

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/15-gcc-o

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_014-02 · description

**Une seule bonne réponse**

Quelle description caractérise « gcc -o » ?

- **A ✅** Permet de choisir le nom du fichier de sortie, par exemple gcc main.c -o cisfun.
- **B ❌** Définition nécessaire introuvable lors de l’édition de liens.
- **C ❌** char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.
- **D ❌** Un prototype annonce une signature ; la définition contient le corps de la fonction.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Permet de choisir le nom du fichier de sortie, par exemple gcc main.c -o cisfun.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/15-gcc-o

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_014-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « gcc -o » ?

- **A ❌** Le prototype annonce une fonction ; seule la définition fournit le code exécuté.
- **B ❌** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.
- **C ❌** Un type ne garantit pas partout le même nombre d’octets.
- **D ✅** Les options -E, -S et -c modifient la nature de la sortie ; -o ne fait que la nommer.

**Réponse candidate :** D · **Explication :** La fiche indique : Les options -E, -S et -c modifient la nature de la sortie ; -o ne fait que la nommer.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/15-gcc-o

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_014-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « gcc -o » ?

- **A ✅** Les options -E, -S et -c modifient la nature de la sortie ; -o ne fait que la nommer.
- **B ❌** Interface graphique / interface en ligne de commande.
- **C ✅** Permet de choisir le nom du fichier de sortie, par exemple gcc main.c -o cisfun.
- **D ❌** Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/15-gcc-o

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_015 — puts / printf

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/16-puts-printf)

### V1-N08_015-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs. » ?

- **A ❌** Types entiers en C
- **B ❌** undefined reference
- **C ✅** puts / printf
- **D ❌** exit() — terminer le programme

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/16-puts-printf

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_015-02 · description

**Une seule bonne réponse**

Quelle description caractérise « puts / printf » ?

- **A ❌** Définition nécessaire introuvable lors de l’édition de liens.
- **B ✅** puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.
- **C ❌** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.
- **D ❌** char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/16-puts-printf

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_015-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « puts / printf » ?

- **A ✅** puts ajoute un saut de ligne ; printf n'en ajoute que si le format le demande.
- **B ❌** Un type ne garantit pas partout le même nombre d’octets.
- **C ❌** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().
- **D ❌** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.

**Réponse candidate :** A · **Explication :** La fiche indique : puts ajoute un saut de ligne ; printf n'en ajoute que si le format le demande.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/16-puts-printf

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_015-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « puts / printf » ?

- **A ✅** puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.
- **B ❌** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **C ✅** puts ajoute un saut de ligne ; printf n'en ajoute que si le format le demande.
- **D ❌** Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/16-puts-printf

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_016 — Types entiers en C

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/17-types-entiers-en-c)

### V1-N08_016-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme. » ?

- **A ❌** exit() — terminer le programme
- **B ❌** Integer overflow — dépassement de capacité d'un entier
- **C ❌** puts / printf
- **D ✅** Types entiers en C

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/17-types-entiers-en-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_016-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Types entiers en C » ?

- **A ✅** char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.
- **B ❌** puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.
- **C ❌** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.
- **D ❌** Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/17-types-entiers-en-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_016-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Types entiers en C » ?

- **A ❌** Un integer overflow n'est pas un buffer overflow. Le premier dépasse une plage NUMÉRIQUE ; il peut conduire au second si une taille d'allocation calculée devient incorrecte. Vérifier les limites avant toute opération risquée.
- **B ✅** Un type ne garantit pas partout le même nombre d’octets.
- **C ❌** puts ajoute un saut de ligne ; printf n'en ajoute que si le format le demande.
- **D ❌** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().

**Réponse candidate :** B · **Explication :** La fiche indique : Un type ne garantit pas partout le même nombre d’octets.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/17-types-entiers-en-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_016-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Types entiers en C » ?

- **A ❌** Une struct définit un type composé de membres nommés, éventuellement de types différents.
- **B ❌** Un membre peut être lui-même une struct : p.position.x traverse deux niveaux.
- **C ✅** Un type ne garantit pas partout le même nombre d’octets.
- **D ✅** char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/17-types-entiers-en-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_017 — signed et unsigned

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/18-signed-et-unsigned)

### V1-N08_017-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « signed permet des valeurs négatives et positives ; unsigned ne représente que des valeurs non négatives. » ?

- **A ✅** signed et unsigned
- **B ❌** Integer overflow — dépassement de capacité d'un entier
- **C ❌** ASCII
- **D ❌** exit() — terminer le programme

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/18-signed-et-unsigned

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_017-02 · description

**Une seule bonne réponse**

Quelle description caractérise « signed et unsigned » ?

- **A ❌** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.
- **B ❌** Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage.
- **C ❌** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.
- **D ✅** signed permet des valeurs négatives et positives ; unsigned ne représente que des valeurs non négatives.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : signed permet des valeurs négatives et positives ; unsigned ne représente que des valeurs non négatives.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/18-signed-et-unsigned

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_017-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « signed et unsigned » ?

- **A ✅** Ne pas utiliser unsigned uniquement pour « interdire » les valeurs négatives sans réfléchir aux conversions.
- **B ❌** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().
- **C ❌** Un integer overflow n'est pas un buffer overflow. Le premier dépasse une plage NUMÉRIQUE ; il peut conduire au second si une taille d'allocation calculée devient incorrecte. Vérifier les limites avant toute opération risquée.
- **D ❌** Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.

**Réponse candidate :** A · **Explication :** La fiche indique : Ne pas utiliser unsigned uniquement pour « interdire » les valeurs négatives sans réfléchir aux conversions.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/18-signed-et-unsigned

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_017-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « signed et unsigned » ?

- **A ✅** signed permet des valeurs négatives et positives ; unsigned ne représente que des valeurs non négatives.
- **B ❌** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.
- **C ❌** Proposition de modifications à examiner avant une fusion éventuelle.
- **D ✅** Ne pas utiliser unsigned uniquement pour « interdire » les valeurs négatives sans réfléchir aux conversions.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/18-signed-et-unsigned

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_018 — float et double

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/19-float-et-double)

### V1-N08_018-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « float et double représentent des nombres à virgule flottante, souvent avec une précision limitée. » ?

- **A ❌** Integer overflow — dépassement de capacité d'un entier
- **B ✅** float et double
- **C ❌** gcc -c
- **D ❌** ASCII

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/19-float-et-double

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_018-02 · description

**Une seule bonne réponse**

Quelle description caractérise « float et double » ?

- **A ❌** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.
- **B ❌** Compile en un fichier objet .o, sans édition de liens.
- **C ✅** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **D ❌** Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/19-float-et-double

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_018-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « float et double » ?

- **A ❌** Un integer overflow n'est pas un buffer overflow. Le premier dépasse une plage NUMÉRIQUE ; il peut conduire au second si une taille d'allocation calculée devient incorrecte. Vérifier les limites avant toute opération risquée.
- **B ❌** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.
- **C ❌** Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.
- **D ✅** Les comparaisons exactes de flottants doivent être envisagées avec prudence.

**Réponse candidate :** D · **Explication :** La fiche indique : Les comparaisons exactes de flottants doivent être envisagées avec prudence.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/19-float-et-double

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_018-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « float et double » ?

- **A ✅** Les comparaisons exactes de flottants doivent être envisagées avec prudence.
- **B ✅** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **C ❌** Retirer 1, puis utiliser la nouvelle valeur.
- **D ❌** Conserve les deux derniers chiffres d’un entier positif.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/19-float-et-double

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_019 — char et caractère

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/20-char-et-caractere)

### V1-N08_019-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « char représente un petit entier utilisé notamment pour les caractères ; 'A' est une constante de caractère. » ?

- **A ✅** char et caractère
- **B ❌** ASCII
- **C ❌** gcc -c
- **D ❌** return d’un caractère (char)

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/20-char-et-caractere

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_019-02 · description

**Une seule bonne réponse**

Quelle description caractérise « char et caractère » ?

- **A ❌** Une fonction de type char peut renvoyer un caractère, par exemple return 'H';.
- **B ✅** char représente un petit entier utilisé notamment pour les caractères ; 'A' est une constante de caractère.
- **C ❌** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.
- **D ❌** Compile en un fichier objet .o, sans édition de liens.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : char représente un petit entier utilisé notamment pour les caractères ; 'A' est une constante de caractère.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/20-char-et-caractere

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_019-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « char et caractère » ?

- **A ❌** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.
- **B ❌** char correspond à un caractère (valeur entière), char * à un pointeur. Ne confonds pas return 'H'; avec return "H"; : ce ne sont pas les mêmes types.
- **C ✅** Ne confonds pas le caractère '3' avec l'entier 3.
- **D ❌** Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.

**Réponse candidate :** C · **Explication :** La fiche indique : Ne confonds pas le caractère '3' avec l'entier 3.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/20-char-et-caractere

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_019-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « char et caractère » ?

- **A ❌** Évaluation arithmétique.
- **B ✅** Ne confonds pas le caractère '3' avec l'entier 3.
- **C ✅** char représente un petit entier utilisé notamment pour les caractères ; 'A' est une constante de caractère.
- **D ❌** Initialisation, test, mise à jour ; forme compacte de boucle.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/20-char-et-caractere

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_020 — return 0 / return 1

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/21-return-0-return-1)

### V1-N08_020-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction. » ?

- **A ❌** gcc -c
- **B ❌** return d’un caractère (char)
- **C ❌** Chaîne de format — ne pas utiliser une saisie comme format
- **D ✅** return 0 / return 1

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/21-return-0-return-1

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_020-02 · description

**Une seule bonne réponse**

Quelle description caractérise « return 0 / return 1 » ?

- **A ✅** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.
- **B ❌** Compile en un fichier objet .o, sans édition de liens.
- **C ❌** Une fonction de type char peut renvoyer un caractère, par exemple return 'H';.
- **D ❌** Passer une chaîne contrôlée par l'utilisateur directement comme format à printf expose à une vulnérabilité ; utiliser un format fixe tel que "%s".

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/21-return-0-return-1

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_020-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « return 0 / return 1 » ?

- **A ❌** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.
- **B ❌** Ne jamais employer une donnée non fiable comme chaîne de format de printf, fprintf ou snprintf. Le format fixe "%s" affiche le texte sans interpréter ses caractères % comme des instructions.
- **C ✅** Ne confonds pas le code de fin de main et les valeurs renvoyées par les autres fonctions : leur signification dépend du contexte. EXIT_SUCCESS et EXIT_FAILURE sont les constantes portables de <stdlib.h>.
- **D ❌** char correspond à un caractère (valeur entière), char * à un pointeur. Ne confonds pas return 'H'; avec return "H"; : ce ne sont pas les mêmes types.

**Réponse candidate :** C · **Explication :** La fiche indique : Ne confonds pas le code de fin de main et les valeurs renvoyées par les autres fonctions : leur signification dépend du contexte. EXIT_SUCCESS et EXIT_FAILURE sont les constantes portables de <stdlib.h>.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/21-return-0-return-1

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_020-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « return 0 / return 1 » ?

- **A ❌** « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine.
- **B ❌** INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.
- **C ✅** Ne confonds pas le code de fin de main et les valeurs renvoyées par les autres fonctions : leur signification dépend du contexte. EXIT_SUCCESS et EXIT_FAILURE sont les constantes portables de <stdlib.h>.
- **D ✅** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/21-return-0-return-1

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_021 — return d’un caractère (char)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/22-return-d-un-caractere-char)

### V1-N08_021-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une fonction de type char peut renvoyer un caractère, par exemple return 'H';. » ?

- **A ❌** Chaîne de format — ne pas utiliser une saisie comme format
- **B ❌** printf / _putchar
- **C ✅** return d’un caractère (char)
- **D ❌** return 0 / return 1

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/22-return-d-un-caractere-char

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_021-02 · description

**Une seule bonne réponse**

Quelle description caractérise « return d’un caractère (char) » ?

- **A ❌** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.
- **B ❌** Affichage formaté / écriture d’un caractère.
- **C ❌** Passer une chaîne contrôlée par l'utilisateur directement comme format à printf expose à une vulnérabilité ; utiliser un format fixe tel que "%s".
- **D ✅** Une fonction de type char peut renvoyer un caractère, par exemple return 'H';.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Une fonction de type char peut renvoyer un caractère, par exemple return 'H';.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/22-return-d-un-caractere-char

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_021-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « return d’un caractère (char) » ?

- **A ✅** char correspond à un caractère (valeur entière), char * à un pointeur. Ne confonds pas return 'H'; avec return "H"; : ce ne sont pas les mêmes types.
- **B ❌** Ne jamais employer une donnée non fiable comme chaîne de format de printf, fprintf ou snprintf. Le format fixe "%s" affiche le texte sans interpréter ses caractères % comme des instructions.
- **C ❌** Ne confonds pas le code de fin de main et les valeurs renvoyées par les autres fonctions : leur signification dépend du contexte. EXIT_SUCCESS et EXIT_FAILURE sont les constantes portables de <stdlib.h>.
- **D ❌** _putchar n'est pas une fonction standard C : elle doit être fournie par le projet ou une bibliothèque.

**Réponse candidate :** A · **Explication :** La fiche indique : char correspond à un caractère (valeur entière), char * à un pointeur. Ne confonds pas return 'H'; avec return "H"; : ce ne sont pas les mêmes types.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/22-return-d-un-caractere-char

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_021-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « return d’un caractère (char) » ?

- **A ✅** Une fonction de type char peut renvoyer un caractère, par exemple return 'H';.
- **B ❌** Rediriger les erreurs / prendre un fichier comme entrée.
- **C ❌** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **D ✅** char correspond à un caractère (valeur entière), char * à un pointeur. Ne confonds pas return 'H'; avec return "H"; : ce ne sont pas les mêmes types.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/22-return-d-un-caractere-char

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_022 — return d’un pointeur (int *)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/23-return-d-un-pointeur-int)

### V1-N08_022-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation. » ?

- **A ❌** gcc -E
- **B ✅** return d’un pointeur (int *)
- **C ❌** Chaîne de format — ne pas utiliser une saisie comme format
- **D ❌** printf / _putchar

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/23-return-d-un-pointeur-int

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_022-02 · description

**Une seule bonne réponse**

Quelle description caractérise « return d’un pointeur (int *) » ?

- **A ❌** Affichage formaté / écriture d’un caractère.
- **B ❌** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **C ✅** Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation.
- **D ❌** Passer une chaîne contrôlée par l'utilisateur directement comme format à printf expose à une vulnérabilité ; utiliser un format fixe tel que "%s".

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/23-return-d-un-pointeur-int

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_022-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « return d’un pointeur (int *) » ?

- **A ❌** _putchar n'est pas une fonction standard C : elle doit être fournie par le projet ou une bibliothèque.
- **B ❌** gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.
- **C ❌** Ne jamais employer une donnée non fiable comme chaîne de format de printf, fprintf ou snprintf. Le format fixe "%s" affiche le texte sans interpréter ses caractères % comme des instructions.
- **D ✅** Ne retourne jamais l’adresse d’une variable locale automatique. Un pointeur renvoyé doit rester valide lors de son utilisation, ou valoir NULL ; teste NULL avant tout déréférencement.

**Réponse candidate :** D · **Explication :** La fiche indique : Ne retourne jamais l’adresse d’une variable locale automatique. Un pointeur renvoyé doit rester valide lors de son utilisation, ou valoir NULL ; teste NULL avant tout déréférencement.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/23-return-d-un-pointeur-int

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_022-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « return d’un pointeur (int *) » ?

- **A ✅** Ne retourne jamais l’adresse d’une variable locale automatique. Un pointeur renvoyé doit rester valide lors de son utilisation, ou valoir NULL ; teste NULL avant tout déréférencement.
- **B ✅** Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation.
- **C ❌** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.
- **D ❌** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/23-return-d-un-pointeur-int

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_023 — exit() — terminer le programme

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/24-exit-terminer-le-programme)

### V1-N08_023-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant. » ?

- **A ✅** exit() — terminer le programme
- **B ❌** printf / _putchar
- **C ❌** gcc -E
- **D ❌** float et double

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/24-exit-terminer-le-programme

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_023-02 · description

**Une seule bonne réponse**

Quelle description caractérise « exit() — terminer le programme » ?

- **A ❌** Affichage formaté / écriture d’un caractère.
- **B ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **C ✅** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.
- **D ❌** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/24-exit-terminer-le-programme

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_023-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « exit() — terminer le programme » ?

- **A ✅** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().
- **B ❌** Les comparaisons exactes de flottants doivent être envisagées avec prudence.
- **C ❌** gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.
- **D ❌** _putchar n'est pas une fonction standard C : elle doit être fournie par le projet ou une bibliothèque.

**Réponse candidate :** A · **Explication :** La fiche indique : exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/24-exit-terminer-le-programme

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_023-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « exit() — terminer le programme » ?

- **A ✅** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.
- **B ✅** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().
- **C ❌** Sous-système Windows pour Linux : environnement Linux utilisable sur Windows.
- **D ❌** Dossier personnel de l’utilisateur.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/24-exit-terminer-le-programme

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_024 — Dennis Ritchie — créateur du langage C

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/25-dennis-ritchie-createur-du-langage-c)

### V1-N08_024-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dennis Ritchie a conçu le langage C aux Bell Labs au début des années 1970 ; il a aussi joué un rôle majeur dans le développement d’Unix. » ?

- **A ❌** gcc -E
- **B ❌** fgets() — lire une ligne avec une limite
- **C ❌** float et double
- **D ✅** Dennis Ritchie — créateur du langage C

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/25-dennis-ritchie-createur-du-langage-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_024-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Dennis Ritchie — créateur du langage C » ?

- **A ✅** Dennis Ritchie a conçu le langage C aux Bell Labs au début des années 1970 ; il a aussi joué un rôle majeur dans le développement d’Unix.
- **B ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **C ❌** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **D ❌** fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Dennis Ritchie a conçu le langage C aux Bell Labs au début des années 1970 ; il a aussi joué un rôle majeur dans le développement d’Unix.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/25-dennis-ritchie-createur-du-langage-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_024-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Dennis Ritchie — créateur du langage C » ?

- **A ❌** gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.
- **B ❌** La taille fournie à fgets correspond à la capacité du tableau, pas à une quantité illimitée de texte. Vérifier NULL et détecter une ligne tronquée si toute l'entrée doit être conservée. Ne pas supposer que le saut de ligne est toujours présent.
- **C ✅** Culture générale : Dennis Ritchie = créateur du C. Unix = travail collectif, notamment avec Ken Thompson. Brian Kernighan est coauteur du célèbre livre K&R, pas le créateur du langage.
- **D ❌** Les comparaisons exactes de flottants doivent être envisagées avec prudence.

**Réponse candidate :** C · **Explication :** La fiche indique : Culture générale : Dennis Ritchie = créateur du C. Unix = travail collectif, notamment avec Ken Thompson. Brian Kernighan est coauteur du célèbre livre K&R, pas le créateur du langage.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/25-dennis-ritchie-createur-du-langage-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_024-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Dennis Ritchie — créateur du langage C » ?

- **A ✅** Culture générale : Dennis Ritchie = créateur du C. Unix = travail collectif, notamment avec Ken Thompson. Brian Kernighan est coauteur du célèbre livre K&R, pas le créateur du langage.
- **B ❌** Pour un tableau a, a[2] désigne le même élément que *(a + 2).
- **C ❌** int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.
- **D ✅** Dennis Ritchie a conçu le langage C aux Bell Labs au début des années 1970 ; il a aussi joué un rôle majeur dans le développement d’Unix.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/25-dennis-ritchie-createur-du-langage-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_025 — scanf() — lire une saisie au clavier

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier)

### V1-N08_025-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies. » ?

- **A ❌** fgets() — lire une ligne avec une limite
- **B ❌** void
- **C ✅** scanf() — lire une saisie au clavier
- **D ❌** float et double

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_025-02 · description

**Une seule bonne réponse**

Quelle description caractérise « scanf() — lire une saisie au clavier » ?

- **A ❌** fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.
- **B ❌** Indique une absence de valeur de retour ou de paramètres selon le contexte.
- **C ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **D ✅** scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_025-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « scanf() — lire une saisie au clavier » ?

- **A ❌** La taille fournie à fgets correspond à la capacité du tableau, pas à une quantité illimitée de texte. Vérifier NULL et détecter une ligne tronquée si toute l'entrée doit être conservée. Ne pas supposer que le saut de ligne est toujours présent.
- **B ❌** Les comparaisons exactes de flottants doivent être envisagées avec prudence.
- **C ✅** scanf("%d", &age) attend l’adresse de age et renvoie 1 seulement si un entier est lu correctement. Vérifier le retour avant d’utiliser la variable. Avec %s, toujours fixer une largeur adaptée à la taille du tableau ; fgets est mieux adapté aux phrases avec espaces. Le format de printf n’a pas exactement les mêmes types attendus : scanf("%f", &f) pour float et scanf("%
- **D ❌** void en retour : aucun résultat ; (void) dans les paramètres : aucun paramètre.

**Réponse candidate :** C · **Explication :** La fiche indique : scanf("%d", &age) attend l’adresse de age et renvoie 1 seulement si un entier est lu correctement. Vérifier le retour avant d’utiliser la variable. Avec %s, toujours fixer une largeur adaptée à la taille du tableau ; fgets est mieux adapté aux phrases avec espaces. Le format de printf n’a pas exactement les mêmes types attendus : scanf("%f", &f) pour float et scanf("%

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_025-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « scanf() — lire une saisie au clavier » ?

- **A ❌** Un tableau comme struct point a[2] regroupe plusieurs objets struct, accessibles par a[i].x.
- **B ❌** typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.
- **C ✅** scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies.
- **D ✅** scanf("%d", &age) attend l’adresse de age et renvoie 1 seulement si un entier est lu correctement. Vérifier le retour avant d’utiliser la variable. Avec %s, toujours fixer une largeur adaptée à la taille du tableau ; fgets est mieux adapté aux phrases avec espaces. Le format de printf n’a pas exactement les mêmes types attendus : scanf("%f", &f) pour float et scanf("%

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_026 — fgets() — lire une ligne avec une limite

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/27-fgets-lire-une-ligne-avec-une-limite)

### V1-N08_026-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour. » ?

- **A ❌** scanf() — lire une saisie au clavier
- **B ❌** gcc -o nom source.c
- **C ✅** fgets() — lire une ligne avec une limite
- **D ❌** void

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/27-fgets-lire-une-ligne-avec-une-limite · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_026-02 · description

**Une seule bonne réponse**

Quelle description caractérise « fgets() — lire une ligne avec une limite » ?

- **A ✅** fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.
- **B ❌** Compiler un fichier source et nommer l’exécutable.
- **C ❌** Indique une absence de valeur de retour ou de paramètres selon le contexte.
- **D ❌** scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/27-fgets-lire-une-ligne-avec-une-limite · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_026-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « fgets() — lire une ligne avec une limite » ?

- **A ❌** void en retour : aucun résultat ; (void) dans les paramètres : aucun paramètre.
- **B ❌** L'option -o choisit le nom de sortie ; elle n'impose pas le type de cette sortie.
- **C ❌** scanf("%d", &age) attend l’adresse de age et renvoie 1 seulement si un entier est lu correctement. Vérifier le retour avant d’utiliser la variable. Avec %s, toujours fixer une largeur adaptée à la taille du tableau ; fgets est mieux adapté aux phrases avec espaces. Le format de printf n’a pas exactement les mêmes types attendus : scanf("%f", &f) pour float et scanf("%
- **D ✅** La taille fournie à fgets correspond à la capacité du tableau, pas à une quantité illimitée de texte. Vérifier NULL et détecter une ligne tronquée si toute l'entrée doit être conservée. Ne pas supposer que le saut de ligne est toujours présent.

**Réponse candidate :** D · **Explication :** La fiche indique : La taille fournie à fgets correspond à la capacité du tableau, pas à une quantité illimitée de texte. Vérifier NULL et détecter une ligne tronquée si toute l'entrée doit être conservée. Ne pas supposer que le saut de ligne est toujours présent.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/27-fgets-lire-une-ligne-avec-une-limite · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_026-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « fgets() — lire une ligne avec une limite » ?

- **A ❌** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).
- **B ✅** fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.
- **C ✅** La taille fournie à fgets correspond à la capacité du tableau, pas à une quantité illimitée de texte. Vérifier NULL et détecter une ligne tronquée si toute l'entrée doit être conservée. Ne pas supposer que le saut de ligne est toujours présent.
- **D ❌** Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/27-fgets-lire-une-ligne-avec-une-limite · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_027 — strtol() — convertir une entrée en entier

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/28-strtol-convertir-une-entree-en-entier)

### V1-N08_027-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno. » ?

- **A ✅** strtol() — convertir une entrée en entier
- **B ❌** gcc -o nom source.c
- **C ❌** void
- **D ❌** Types entiers en C

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/28-strtol-convertir-une-entree-en-entier · https://man7.org/linux/man-pages/man3/strtol.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_027-02 · description

**Une seule bonne réponse**

Quelle description caractérise « strtol() — convertir une entrée en entier » ?

- **A ❌** Indique une absence de valeur de retour ou de paramètres selon le contexte.
- **B ❌** char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.
- **C ✅** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.
- **D ❌** Compiler un fichier source et nommer l’exécutable.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/28-strtol-convertir-une-entree-en-entier · https://man7.org/linux/man-pages/man3/strtol.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_027-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « strtol() — convertir une entrée en entier » ?

- **A ✅** Contrôler simultanément fin == ligne, errno == ERANGE et les caractères restants : une entrée comme 42abc ne doit pas être acceptée silencieusement. strtol renvoie un long, pas automatiquement un int.
- **B ❌** L'option -o choisit le nom de sortie ; elle n'impose pas le type de cette sortie.
- **C ❌** Un type ne garantit pas partout le même nombre d’octets.
- **D ❌** void en retour : aucun résultat ; (void) dans les paramètres : aucun paramètre.

**Réponse candidate :** A · **Explication :** La fiche indique : Contrôler simultanément fin == ligne, errno == ERANGE et les caractères restants : une entrée comme 42abc ne doit pas être acceptée silencieusement. strtol renvoie un long, pas automatiquement un int.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/28-strtol-convertir-une-entree-en-entier · https://man7.org/linux/man-pages/man3/strtol.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_027-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strtol() — convertir une entrée en entier » ?

- **A ✅** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.
- **B ✅** Contrôler simultanément fin == ligne, errno == ERANGE et les caractères restants : une entrée comme 42abc ne doit pas être acceptée silencieusement. strtol renvoie un long, pas automatiquement un int.
- **C ❌** Utiliser l’ancienne valeur, puis retirer 1.
- **D ❌** sizeof donne la taille en octets d’un type ou d’un objet sur la machine utilisée ; ne pas supposer une taille universelle pour int ou un pointeur.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/28-strtol-convertir-une-entree-en-entier · https://man7.org/linux/man-pages/man3/strtol.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_028 — Chaîne de format — ne pas utiliser une saisie comme format

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/29-chaine-de-format-ne-pas-utiliser-une-saisie-comme-format)

### V1-N08_028-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Passer une chaîne contrôlée par l'utilisateur directement comme format à printf expose à une vulnérabilité ; utiliser un format fixe tel que "%s". » ?

- **A ❌** Types entiers en C
- **B ❌** exit() — terminer le programme
- **C ❌** gcc -o nom source.c
- **D ✅** Chaîne de format — ne pas utiliser une saisie comme format

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/29-chaine-de-format-ne-pas-utiliser-une-saisie-comme-format · https://owasp.org/www-community/attacks/Format_string_attack

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_028-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Chaîne de format — ne pas utiliser une saisie comme format » ?

- **A ❌** char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.
- **B ❌** Compiler un fichier source et nommer l’exécutable.
- **C ✅** Passer une chaîne contrôlée par l'utilisateur directement comme format à printf expose à une vulnérabilité ; utiliser un format fixe tel que "%s".
- **D ❌** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Passer une chaîne contrôlée par l'utilisateur directement comme format à printf expose à une vulnérabilité ; utiliser un format fixe tel que "%s".

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/29-chaine-de-format-ne-pas-utiliser-une-saisie-comme-format · https://owasp.org/www-community/attacks/Format_string_attack

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_028-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Chaîne de format — ne pas utiliser une saisie comme format » ?

- **A ❌** L'option -o choisit le nom de sortie ; elle n'impose pas le type de cette sortie.
- **B ✅** Ne jamais employer une donnée non fiable comme chaîne de format de printf, fprintf ou snprintf. Le format fixe "%s" affiche le texte sans interpréter ses caractères % comme des instructions.
- **C ❌** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().
- **D ❌** Un type ne garantit pas partout le même nombre d’octets.

**Réponse candidate :** B · **Explication :** La fiche indique : Ne jamais employer une donnée non fiable comme chaîne de format de printf, fprintf ou snprintf. Le format fixe "%s" affiche le texte sans interpréter ses caractères % comme des instructions.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/29-chaine-de-format-ne-pas-utiliser-une-saisie-comme-format · https://owasp.org/www-community/attacks/Format_string_attack

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_028-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Chaîne de format — ne pas utiliser une saisie comme format » ?

- **A ✅** Ne jamais employer une donnée non fiable comme chaîne de format de printf, fprintf ou snprintf. Le format fixe "%s" affiche le texte sans interpréter ses caractères % comme des instructions.
- **B ❌** Logiciel de gestion de versions distribué.
- **C ❌** ET logique / OU logique / négation.
- **D ✅** Passer une chaîne contrôlée par l'utilisateur directement comme format à printf expose à une vulnérabilité ; utiliser un format fixe tel que "%s".

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/29-chaine-de-format-ne-pas-utiliser-une-saisie-comme-format · https://owasp.org/www-community/attacks/Format_string_attack

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_029 — EOF — détecter la fin d'une entrée

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/30-eof-detecter-la-fin-d-une-entree)

### V1-N08_029-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF. » ?

- **A ✅** EOF — détecter la fin d'une entrée
- **B ❌** main()
- **C ❌** exit() — terminer le programme
- **D ❌** Types entiers en C

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/30-eof-detecter-la-fin-d-une-entree · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_029-02 · description

**Une seule bonne réponse**

Quelle description caractérise « EOF — détecter la fin d'une entrée » ?

- **A ❌** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.
- **B ❌** Point d’entrée d’un programme C classique.
- **C ❌** char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.
- **D ✅** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/30-eof-detecter-la-fin-d-une-entree · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_029-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « EOF — détecter la fin d'une entrée » ?

- **A ✅** Un retour EOF n'est pas le caractère '\0'. Conserver le résultat de getchar dans un int. Pour distinguer fin de fichier et erreur de lecture, consulter feof et ferror.
- **B ❌** Un type ne garantit pas partout le même nombre d’octets.
- **C ❌** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().
- **D ❌** Dans main, return 0 (ou EXIT_SUCCESS) signifie succès. EXIT_FAILURE permet d’indiquer un échec de manière portable ; la signification de return 1 n’est pas universelle pour toutes les implémentations.

**Réponse candidate :** A · **Explication :** La fiche indique : Un retour EOF n'est pas le caractère '\0'. Conserver le résultat de getchar dans un int. Pour distinguer fin de fichier et erreur de lecture, consulter feof et ferror.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/30-eof-detecter-la-fin-d-une-entree · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_029-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « EOF — détecter la fin d'une entrée » ?

- **A ❌** char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur.
- **B ❌** qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.
- **C ✅** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.
- **D ✅** Un retour EOF n'est pas le caractère '\0'. Conserver le résultat de getchar dans un int. Pour distinguer fin de fichier et erreur de lecture, consulter feof et ferror.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/30-eof-detecter-la-fin-d-une-entree · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N08_030 — Integer overflow — dépassement de capacité d'un entier

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/31-integer-overflow-depassement-de-capacite-d-un-entier)

### V1-N08_030-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage. » ?

- **A ❌** exit() — terminer le programme
- **B ❌** Compilation vs édition de liens
- **C ✅** Integer overflow — dépassement de capacité d'un entier
- **D ❌** main()

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/31-integer-overflow-depassement-de-capacite-d-un-entier · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152210 · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_030-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Integer overflow — dépassement de capacité d'un entier » ?

- **A ✅** Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage.
- **B ❌** Point d’entrée d’un programme C classique.
- **C ❌** Prétraitement et compilation vers le code objet, puis liaison des objets et bibliothèques pour produire l’exécutable.
- **D ❌** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/31-integer-overflow-depassement-de-capacite-d-un-entier · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152210 · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_030-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Integer overflow — dépassement de capacité d'un entier » ?

- **A ❌** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().
- **B ❌** Dans main, return 0 (ou EXIT_SUCCESS) signifie succès. EXIT_FAILURE permet d’indiquer un échec de manière portable ; la signification de return 1 n’est pas universelle pour toutes les implémentations.
- **C ❌** La chaîne complète passe par prétraitement, compilation, assemblage puis édition de liens.
- **D ✅** Un integer overflow n'est pas un buffer overflow. Le premier dépasse une plage NUMÉRIQUE ; il peut conduire au second si une taille d'allocation calculée devient incorrecte. Vérifier les limites avant toute opération risquée.

**Réponse candidate :** D · **Explication :** La fiche indique : Un integer overflow n'est pas un buffer overflow. Le premier dépasse une plage NUMÉRIQUE ; il peut conduire au second si une taille d'allocation calculée devient incorrecte. Vérifier les limites avant toute opération risquée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/31-integer-overflow-depassement-de-capacite-d-un-entier · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152210 · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N08_030-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Integer overflow — dépassement de capacité d'un entier » ?

- **A ✅** Un integer overflow n'est pas un buffer overflow. Le premier dépasse une plage NUMÉRIQUE ; il peut conduire au second si une taille d'allocation calculée devient incorrecte. Vérifier les limites avant toute opération risquée.
- **B ❌** Paramètres et variables du Shell / environnement.
- **C ✅** Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage.
- **D ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/31-integer-overflow-depassement-de-capacite-d-un-entier · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152210 · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

