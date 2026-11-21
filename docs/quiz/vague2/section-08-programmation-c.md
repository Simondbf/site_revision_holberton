# Première vague — Programmation C

**124 questions candidates concernant ce chapitre.** La répartition des réponses a été rééquilibrée pour éviter les biais de position. Ces réponses restent des propositions **non validées sur le fond** ; vérifier chaque distracteur et les sources avant publication.

## N08_000 — main()

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/1-main)

### V1-N08_000-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Point d’entrée d’un programme C classique. » ?

- **A ✅** main()
- **B ❌** undefined reference
- **C ❌** Dennis Ritchie — créateur du langage C
- **D ❌** Prototype vs définition

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/1-main

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_000-02 — description

**Une seule bonne réponse**

Quelle description caractérise « main() » ?

- **A ❌** Définition nécessaire introuvable lors de l’édition de liens.
- **B ❌** Un prototype annonce une signature ; la définition contient le corps de la fonction.
- **C ❌** Dennis Ritchie a conçu le langage C aux Bell Labs au début des années 1970 ; il a aussi joué un rôle majeur dans le développement d’Unix.
- **D ✅** Point d’entrée d’un programme C classique.

**Réponse proposée :** D. Le résumé de la fiche indique : Point d’entrée d’un programme C classique.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/1-main

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_000-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « main() » ?

- **A ❌** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.
- **B ✅** Dans main, return 0 (ou EXIT_SUCCESS) signifie succès. EXIT_FAILURE permet d’indiquer un échec de manière portable ; la signification de return 1 n’est pas universelle pour toutes les implémentations.
- **C ❌** Le prototype annonce une fonction ; seule la définition fournit le code exécuté.
- **D ❌** Culture générale : Dennis Ritchie = créateur du C. Unix = travail collectif, notamment avec Ken Thompson. Brian Kernighan est coauteur du célèbre livre K&R, pas le créateur du langage.

**Réponse proposée :** B. La fiche indique : Dans main, return 0 (ou EXIT_SUCCESS) signifie succès. EXIT_FAILURE permet d’indiquer un échec de manière portable ; la signification de return 1 n’est pas universelle pour toutes les implémentations.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/1-main

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_000-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « main() » ?

- **A ✅** Point d’entrée d’un programme C classique.
- **B ✅** Dans main, return 0 (ou EXIT_SUCCESS) signifie succès. EXIT_FAILURE permet d’indiquer un échec de manière portable ; la signification de return 1 n’est pas universelle pour toutes les implémentations.
- **C ❌** Reste de la division entière.
- **D ❌** INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/1-main

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_001 — Prototype vs définition

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/2-prototype-vs-definition)

### V1-N08_001-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un prototype annonce une signature ; la définition contient le corps de la fonction. » ?

- **A ❌** undefined reference
- **B ✅** Prototype vs définition
- **C ❌** puts / printf
- **D ❌** main()

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/2-prototype-vs-definition

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_001-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Prototype vs définition » ?

- **A ✅** Un prototype annonce une signature ; la définition contient le corps de la fonction.
- **B ❌** puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.
- **C ❌** Définition nécessaire introuvable lors de l’édition de liens.
- **D ❌** Point d’entrée d’un programme C classique.

**Réponse proposée :** A. Le résumé de la fiche indique : Un prototype annonce une signature ; la définition contient le corps de la fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/2-prototype-vs-definition

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_001-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Prototype vs définition » ?

- **A ❌** Dans main, return 0 (ou EXIT_SUCCESS) signifie succès. EXIT_FAILURE permet d’indiquer un échec de manière portable ; la signification de return 1 n’est pas universelle pour toutes les implémentations.
- **B ❌** puts ajoute un saut de ligne ; printf n'en ajoute que si le format le demande.
- **C ✅** Le prototype annonce une fonction ; seule la définition fournit le code exécuté.
- **D ❌** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.

**Réponse proposée :** C. La fiche indique : Le prototype annonce une fonction ; seule la définition fournit le code exécuté.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/2-prototype-vs-definition

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_001-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Prototype vs définition » ?

- **A ❌** Créer / retirer un raccourci de commande.
- **B ✅** Un prototype annonce une signature ; la définition contient le corps de la fonction.
- **C ❌** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **D ✅** Le prototype annonce une fonction ; seule la définition fournit le code exécuté.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/2-prototype-vs-definition

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_002 — void

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/3-void)

### V1-N08_002-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Indique une absence de valeur de retour ou de paramètres selon le contexte. » ?

- **A ❌** return d’un pointeur (int *)
- **B ✅** void
- **C ❌** undefined reference
- **D ❌** puts / printf

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/3-void

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_002-02 — description

**Une seule bonne réponse**

Quelle description caractérise « void » ?

- **A ❌** puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.
- **B ❌** Définition nécessaire introuvable lors de l’édition de liens.
- **C ❌** Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation.
- **D ✅** Indique une absence de valeur de retour ou de paramètres selon le contexte.

**Réponse proposée :** D. Le résumé de la fiche indique : Indique une absence de valeur de retour ou de paramètres selon le contexte.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/3-void

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_002-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « void » ?

- **A ❌** puts ajoute un saut de ligne ; printf n'en ajoute que si le format le demande.
- **B ✅** void en retour : aucun résultat ; (void) dans les paramètres : aucun paramètre.
- **C ❌** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.
- **D ❌** Ne retourne jamais l’adresse d’une variable locale automatique. Un pointeur renvoyé doit rester valide lors de son utilisation, ou valoir NULL ; teste NULL avant tout déréférencement.

**Réponse proposée :** B. La fiche indique : void en retour : aucun résultat ; (void) dans les paramètres : aucun paramètre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/3-void

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_002-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « void » ?

- **A ✅** void en retour : aucun résultat ; (void) dans les paramètres : aucun paramètre.
- **B ❌** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.
- **C ❌** Memcheck distingue les accès Invalid read/write, les valeurs non initialisées, les libérations invalides et plusieurs catégories de fuites.
- **D ✅** Indique une absence de valeur de retour ou de paramètres selon le contexte.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/3-void

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_003 — return

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/4-return)

### V1-N08_003-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit. » ?

- **A ❌** EOF — détecter la fin d'une entrée
- **B ✅** return
- **C ❌** return d’un pointeur (int *)
- **D ❌** puts / printf

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/4-return

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_003-02 — description

**Une seule bonne réponse**

Quelle description caractérise « return » ?

- **A ❌** puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.
- **B ❌** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.
- **C ❌** Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation.
- **D ✅** Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.

**Réponse proposée :** D. Le résumé de la fiche indique : Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/4-return

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_003-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « return » ?

- **A ❌** puts ajoute un saut de ligne ; printf n'en ajoute que si le format le demande.
- **B ❌** Un retour EOF n'est pas le caractère '\0'. Conserver le résultat de getchar dans un int. Pour distinguer fin de fichier et erreur de lecture, consulter feof et ferror.
- **C ❌** Ne retourne jamais l’adresse d’une variable locale automatique. Un pointeur renvoyé doit rester valide lors de son utilisation, ou valoir NULL ; teste NULL avant tout déréférencement.
- **D ✅** La valeur après return doit être compatible avec le type de retour déclaré. return; est possible dans une fonction void ; le code placé après un return exécuté n’est pas atteint.

**Réponse proposée :** D. La fiche indique : La valeur après return doit être compatible avec le type de retour déclaré. return; est possible dans une fonction void ; le code placé après un return exécuté n’est pas atteint.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/4-return

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_003-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « return » ?

- **A ❌** Afficher le contenu / type du fichier / rechercher / consulter le manuel.
- **B ❌** Dossier personnel de l’utilisateur.
- **C ✅** Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.
- **D ✅** La valeur après return doit être compatible avec le type de retour déclaré. return; est possible dans une fonction void ; le code placé après un return exécuté n’est pas atteint.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/4-return

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_004 — printf / _putchar

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/5-printf-putchar)

### V1-N08_004-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Affichage formaté / écriture d’un caractère. » ?

- **A ❌** return d’un pointeur (int *)
- **B ❌** EOF — détecter la fin d'une entrée
- **C ❌** ASCII
- **D ✅** printf / _putchar

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/5-printf-putchar

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_004-02 — description

**Une seule bonne réponse**

Quelle description caractérise « printf / _putchar » ?

- **A ❌** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.
- **B ❌** Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation.
- **C ✅** Affichage formaté / écriture d’un caractère.
- **D ❌** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.

**Réponse proposée :** C. Le résumé de la fiche indique : Affichage formaté / écriture d’un caractère.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/5-printf-putchar

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_004-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « printf / _putchar » ?

- **A ✅** _putchar n'est pas une fonction standard C : elle doit être fournie par le projet ou une bibliothèque.
- **B ❌** Un retour EOF n'est pas le caractère '\0'. Conserver le résultat de getchar dans un int. Pour distinguer fin de fichier et erreur de lecture, consulter feof et ferror.
- **C ❌** Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.
- **D ❌** Ne retourne jamais l’adresse d’une variable locale automatique. Un pointeur renvoyé doit rester valide lors de son utilisation, ou valoir NULL ; teste NULL avant tout déréférencement.

**Réponse proposée :** A. La fiche indique : _putchar n'est pas une fonction standard C : elle doit être fournie par le projet ou une bibliothèque.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/5-printf-putchar

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_004-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « printf / _putchar » ?

- **A ❌** Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.
- **B ✅** _putchar n'est pas une fonction standard C : elle doit être fournie par le projet ou une bibliothèque.
- **C ✅** Affichage formaté / écriture d’un caractère.
- **D ❌** int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/5-printf-putchar

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_005 — %d / %c / %.6f

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/6-d-c-6f)

### V1-N08_005-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Entier décimal / caractère / réel avec six décimales. » ?

- **A ✅** %d / %c / %.6f
- **B ❌** gcc -c
- **C ❌** ASCII
- **D ❌** EOF — détecter la fin d'une entrée

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/6-d-c-6f

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_005-02 — description

**Une seule bonne réponse**

Quelle description caractérise « %d / %c / %.6f » ?

- **A ❌** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.
- **B ✅** Entier décimal / caractère / réel avec six décimales.
- **C ❌** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.
- **D ❌** Compile en un fichier objet .o, sans édition de liens.

**Réponse proposée :** B. Le résumé de la fiche indique : Entier décimal / caractère / réel avec six décimales.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/6-d-c-6f

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_005-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « %d / %c / %.6f » ?

- **A ❌** Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.
- **B ❌** Un retour EOF n'est pas le caractère '\0'. Conserver le résultat de getchar dans un int. Pour distinguer fin de fichier et erreur de lecture, consulter feof et ferror.
- **C ❌** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.
- **D ✅** En printf, le spécificateur doit correspondre au type fourni ; %.6f affiche six décimales.

**Réponse proposée :** D. La fiche indique : En printf, le spécificateur doit correspondre au type fourni ; %.6f affiche six décimales.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/6-d-c-6f

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_005-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « %d / %c / %.6f » ?

- **A ❌** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.
- **B ❌** typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.
- **C ✅** Entier décimal / caractère / réel avec six décimales.
- **D ✅** En printf, le spécificateur doit correspondre au type fourni ; %.6f affiche six décimales.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/6-d-c-6f

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_006 — ASCII

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/7-ascii)

### V1-N08_006-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII. » ?

- **A ❌** return 0 / return 1
- **B ❌** %d / %c / %.6f
- **C ❌** gcc -c
- **D ✅** ASCII

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/7-ascii

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_006-02 — description

**Une seule bonne réponse**

Quelle description caractérise « ASCII » ?

- **A ✅** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.
- **B ❌** Compile en un fichier objet .o, sans édition de liens.
- **C ❌** Entier décimal / caractère / réel avec six décimales.
- **D ❌** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.

**Réponse proposée :** A. Le résumé de la fiche indique : Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/7-ascii

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_006-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « ASCII » ?

- **A ✅** Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.
- **B ❌** En printf, le spécificateur doit correspondre au type fourni ; %.6f affiche six décimales.
- **C ❌** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.
- **D ❌** Ne confonds pas le code de fin de main et les valeurs renvoyées par les autres fonctions : leur signification dépend du contexte. EXIT_SUCCESS et EXIT_FAILURE sont les constantes portables de <stdlib.h>.

**Réponse proposée :** A. La fiche indique : Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/7-ascii

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_006-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « ASCII » ?

- **A ❌** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).
- **B ✅** Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.
- **C ❌** Un tableau n’est pas une variable pointeur. Son nom identifie le tableau et ne peut pas recevoir une nouvelle adresse par affectation.
- **D ✅** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/7-ascii

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_007 — Compilation vs édition de liens

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/8-compilation-vs-edition-de-liens)

### V1-N08_007-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Prétraitement et compilation vers le code objet, puis liaison des objets et bibliothèques pour produire l’exécutable. » ?

- **A ❌** strtol() — convertir une entrée en entier
- **B ❌** return 0 / return 1
- **C ✅** Compilation vs édition de liens
- **D ❌** gcc -c

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/8-compilation-vs-edition-de-liens

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_007-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Compilation vs édition de liens » ?

- **A ✅** Prétraitement et compilation vers le code objet, puis liaison des objets et bibliothèques pour produire l’exécutable.
- **B ❌** Compile en un fichier objet .o, sans édition de liens.
- **C ❌** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.
- **D ❌** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.

**Réponse proposée :** A. Le résumé de la fiche indique : Prétraitement et compilation vers le code objet, puis liaison des objets et bibliothèques pour produire l’exécutable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/8-compilation-vs-edition-de-liens

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_007-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Compilation vs édition de liens » ?

- **A ❌** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.
- **B ❌** Ne confonds pas le code de fin de main et les valeurs renvoyées par les autres fonctions : leur signification dépend du contexte. EXIT_SUCCESS et EXIT_FAILURE sont les constantes portables de <stdlib.h>.
- **C ❌** Contrôler simultanément fin == ligne, errno == ERANGE et les caractères restants : une entrée comme 42abc ne doit pas être acceptée silencieusement. strtol renvoie un long, pas automatiquement un int.
- **D ✅** La chaîne complète passe par prétraitement, compilation, assemblage puis édition de liens.

**Réponse proposée :** D. La fiche indique : La chaîne complète passe par prétraitement, compilation, assemblage puis édition de liens.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/8-compilation-vs-edition-de-liens

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_007-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Compilation vs édition de liens » ?

- **A ✅** Prétraitement et compilation vers le code objet, puis liaison des objets et bibliothèques pour produire l’exécutable.
- **B ❌** sizeof donne la taille en octets d’un type ou d’un objet sur la machine utilisée ; ne pas supposer une taille universelle pour int ou un pointeur.
- **C ❌** « struct chat » nomme un type ; « struct chat felix; » déclare une variable de ce type.
- **D ✅** La chaîne complète passe par prétraitement, compilation, assemblage puis édition de liens.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/8-compilation-vs-edition-de-liens

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_008 — undefined reference

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/9-undefined-reference)

### V1-N08_008-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Définition nécessaire introuvable lors de l’édition de liens. » ?

- **A ❌** return 0 / return 1
- **B ❌** return
- **C ✅** undefined reference
- **D ❌** strtol() — convertir une entrée en entier

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/9-undefined-reference

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_008-02 — description

**Une seule bonne réponse**

Quelle description caractérise « undefined reference » ?

- **A ❌** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.
- **B ❌** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.
- **C ✅** Définition nécessaire introuvable lors de l’édition de liens.
- **D ❌** Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.

**Réponse proposée :** C. Le résumé de la fiche indique : Définition nécessaire introuvable lors de l’édition de liens.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/9-undefined-reference

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_008-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « undefined reference » ?

- **A ❌** La valeur après return doit être compatible avec le type de retour déclaré. return; est possible dans une fonction void ; le code placé après un return exécuté n’est pas atteint.
- **B ❌** Ne confonds pas le code de fin de main et les valeurs renvoyées par les autres fonctions : leur signification dépend du contexte. EXIT_SUCCESS et EXIT_FAILURE sont les constantes portables de <stdlib.h>.
- **C ✅** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.
- **D ❌** Contrôler simultanément fin == ligne, errno == ERANGE et les caractères restants : une entrée comme 42abc ne doit pas être acceptée silencieusement. strtol renvoie un long, pas automatiquement un int.

**Réponse proposée :** C. La fiche indique : « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/9-undefined-reference

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_008-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « undefined reference » ?

- **A ✅** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.
- **B ❌** Git ne peut pas résoudre automatiquement des changements concurrents.
- **C ✅** Définition nécessaire introuvable lors de l’édition de liens.
- **D ❌** Logiciel de gestion de versions distribué.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/9-undefined-reference

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_009 — gcc -o nom source.c

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/10-gcc-o-nom-source-c)

### V1-N08_009-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Compiler un fichier source et nommer l’exécutable. » ?

- **A ❌** strtol() — convertir une entrée en entier
- **B ❌** return
- **C ✅** gcc -o nom source.c
- **D ❌** gcc -E

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/10-gcc-o-nom-source-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_009-02 — description

**Une seule bonne réponse**

Quelle description caractérise « gcc -o nom source.c » ?

- **A ✅** Compiler un fichier source et nommer l’exécutable.
- **B ❌** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **C ❌** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.
- **D ❌** Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.

**Réponse proposée :** A. Le résumé de la fiche indique : Compiler un fichier source et nommer l’exécutable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/10-gcc-o-nom-source-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_009-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « gcc -o nom source.c » ?

- **A ❌** La valeur après return doit être compatible avec le type de retour déclaré. return; est possible dans une fonction void ; le code placé après un return exécuté n’est pas atteint.
- **B ❌** gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.
- **C ❌** Contrôler simultanément fin == ligne, errno == ERANGE et les caractères restants : une entrée comme 42abc ne doit pas être acceptée silencieusement. strtol renvoie un long, pas automatiquement un int.
- **D ✅** L'option -o choisit le nom de sortie ; elle n'impose pas le type de cette sortie.

**Réponse proposée :** D. La fiche indique : L'option -o choisit le nom de sortie ; elle n'impose pas le type de cette sortie.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/10-gcc-o-nom-source-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_009-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « gcc -o nom source.c » ?

- **A ✅** Compiler un fichier source et nommer l’exécutable.
- **B ❌** Résultat entier : 1.
- **C ❌** qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.
- **D ✅** L'option -o choisit le nom de sortie ; elle n'impose pas le type de cette sortie.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/10-gcc-o-nom-source-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_010 — GNU89

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/11-gnu89)

### V1-N08_010-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dialecte C89 avec extensions GNU. Pour rester compatible C89 strict, déclarer les variables avant les instructions. » ?

- **A ❌** float et double
- **B ❌** return
- **C ✅** GNU89
- **D ❌** gcc -E

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/11-gnu89

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_010-02 — description

**Une seule bonne réponse**

Quelle description caractérise « GNU89 » ?

- **A ✅** Dialecte C89 avec extensions GNU. Pour rester compatible C89 strict, déclarer les variables avant les instructions.
- **B ❌** Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.
- **C ❌** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **D ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.

**Réponse proposée :** A. Le résumé de la fiche indique : Dialecte C89 avec extensions GNU. Pour rester compatible C89 strict, déclarer les variables avant les instructions.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/11-gnu89

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_010-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « GNU89 » ?

- **A ❌** gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.
- **B ✅** Avec -std=gnu89, for (int i = ...) est refusé. GCC accepte parfois d’autres extensions, mais -pedantic-errors peut en faire des erreurs : privilégie les déclarations en début de bloc.
- **C ❌** Les comparaisons exactes de flottants doivent être envisagées avec prudence.
- **D ❌** La valeur après return doit être compatible avec le type de retour déclaré. return; est possible dans une fonction void ; le code placé après un return exécuté n’est pas atteint.

**Réponse proposée :** B. La fiche indique : Avec -std=gnu89, for (int i = ...) est refusé. GCC accepte parfois d’autres extensions, mais -pedantic-errors peut en faire des erreurs : privilégie les déclarations en début de bloc.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/11-gnu89

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_010-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « GNU89 » ?

- **A ❌** Paramètres et variables du Shell / environnement.
- **B ✅** Dialecte C89 avec extensions GNU. Pour rester compatible C89 strict, déclarer les variables avant les instructions.
- **C ❌** Code retour / premier argument / nombre d’arguments positionnels.
- **D ✅** Avec -std=gnu89, for (int i = ...) est refusé. GCC accepte parfois d’autres extensions, mais -pedantic-errors peut en faire des erreurs : privilégie les déclarations en début de bloc.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/11-gnu89

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_011 — gcc -E

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/12-gcc-e)

### V1-N08_011-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité. » ?

- **A ❌** float et double
- **B ✅** gcc -E
- **C ❌** scanf() — lire une saisie au clavier
- **D ❌** GNU89

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/12-gcc-e

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_011-02 — description

**Une seule bonne réponse**

Quelle description caractérise « gcc -E » ?

- **A ❌** Dialecte C89 avec extensions GNU. Pour rester compatible C89 strict, déclarer les variables avant les instructions.
- **B ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **C ✅** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **D ❌** scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies.

**Réponse proposée :** C. Le résumé de la fiche indique : Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/12-gcc-e

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_011-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « gcc -E » ?

- **A ✅** gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.
- **B ❌** Les comparaisons exactes de flottants doivent être envisagées avec prudence.
- **C ❌** Avec -std=gnu89, for (int i = ...) est refusé. GCC accepte parfois d’autres extensions, mais -pedantic-errors peut en faire des erreurs : privilégie les déclarations en début de bloc.
- **D ❌** scanf("%d", &age) attend l’adresse de age et renvoie 1 seulement si un entier est lu correctement. Vérifier le retour avant d’utiliser la variable. Avec %s, toujours fixer une largeur adaptée à la taille du tableau ; fgets est mieux adapté aux phrases avec espaces. Les conversions de scanf et printf n’exigent pas toujours les mêmes types : scanf("%f", &f) attend un float * et scanf("%lf", &d) un double *.

**Réponse proposée :** A. La fiche indique : gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/12-gcc-e

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_011-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « gcc -E » ?

- **A ✅** gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.
- **B ❌** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.
- **C ❌** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.
- **D ✅** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/12-gcc-e

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_012 — gcc -S

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/13-gcc-s)

### V1-N08_012-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Compile vers un fichier assembleur .s, sans assembler ni effectuer l’édition de liens. » ?

- **A ❌** scanf() — lire une saisie au clavier
- **B ✅** gcc -S
- **C ❌** float et double
- **D ❌** Prototype vs définition

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/13-gcc-s

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_012-02 — description

**Une seule bonne réponse**

Quelle description caractérise « gcc -S » ?

- **A ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **B ✅** Compile vers un fichier assembleur .s, sans assembler ni effectuer l’édition de liens.
- **C ❌** Un prototype annonce une signature ; la définition contient le corps de la fonction.
- **D ❌** scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies.

**Réponse proposée :** B. Le résumé de la fiche indique : Compile vers un fichier assembleur .s, sans assembler ni effectuer l’édition de liens.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/13-gcc-s

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_012-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « gcc -S » ?

- **A ✅** gcc -S produit de l'assembleur (.s), sans fichier objet ni exécutable.
- **B ❌** scanf("%d", &age) attend l’adresse de age et renvoie 1 seulement si un entier est lu correctement. Vérifier le retour avant d’utiliser la variable. Avec %s, toujours fixer une largeur adaptée à la taille du tableau ; fgets est mieux adapté aux phrases avec espaces. Les conversions de scanf et printf n’exigent pas toujours les mêmes types : scanf("%f", &f) attend un float * et scanf("%lf", &d) un double *.
- **C ❌** Le prototype annonce une fonction ; seule la définition fournit le code exécuté.
- **D ❌** Les comparaisons exactes de flottants doivent être envisagées avec prudence.

**Réponse proposée :** A. La fiche indique : gcc -S produit de l'assembleur (.s), sans fichier objet ni exécutable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/13-gcc-s

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_012-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « gcc -S » ?

- **A ❌** Relier la sortie d’une commande à l’entrée d’une autre.
- **B ✅** Compile vers un fichier assembleur .s, sans assembler ni effectuer l’édition de liens.
- **C ❌** Copier / déplacer-renommer / supprimer.
- **D ✅** gcc -S produit de l'assembleur (.s), sans fichier objet ni exécutable.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/13-gcc-s

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_013 — gcc -c

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/14-gcc-c)

### V1-N08_013-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Compile en un fichier objet .o, sans édition de liens. » ?

- **A ❌** undefined reference
- **B ❌** Prototype vs définition
- **C ❌** scanf() — lire une saisie au clavier
- **D ✅** gcc -c

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/14-gcc-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_013-02 — description

**Une seule bonne réponse**

Quelle description caractérise « gcc -c » ?

- **A ❌** Un prototype annonce une signature ; la définition contient le corps de la fonction.
- **B ✅** Compile en un fichier objet .o, sans édition de liens.
- **C ❌** Définition nécessaire introuvable lors de l’édition de liens.
- **D ❌** scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies.

**Réponse proposée :** B. Le résumé de la fiche indique : Compile en un fichier objet .o, sans édition de liens.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/14-gcc-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_013-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « gcc -c » ?

- **A ✅** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.
- **B ❌** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.
- **C ❌** scanf("%d", &age) attend l’adresse de age et renvoie 1 seulement si un entier est lu correctement. Vérifier le retour avant d’utiliser la variable. Avec %s, toujours fixer une largeur adaptée à la taille du tableau ; fgets est mieux adapté aux phrases avec espaces. Les conversions de scanf et printf n’exigent pas toujours les mêmes types : scanf("%f", &f) attend un float * et scanf("%lf", &d) un double *.
- **D ❌** Le prototype annonce une fonction ; seule la définition fournit le code exécuté.

**Réponse proposée :** A. La fiche indique : gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/14-gcc-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_013-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « gcc -c » ?

- **A ✅** Compile en un fichier objet .o, sans édition de liens.
- **B ❌** Un pointeur vers "School" ne rend pas la chaîne modifiable ; char s[] = "School" crée un tableau contenant une copie modifiable.
- **C ❌** strcpy(dest, src) copie les caractères et '\0' vers dest, mais n’alloue aucune mémoire : dest doit déjà disposer de suffisamment de place.
- **D ✅** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/14-gcc-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_014 — gcc -o

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/15-gcc-o)

### V1-N08_014-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Permet de choisir le nom du fichier de sortie, par exemple gcc main.c -o cisfun. » ?

- **A ❌** undefined reference
- **B ✅** gcc -o
- **C ❌** Prototype vs définition
- **D ❌** Types entiers en C

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/15-gcc-o

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_014-02 — description

**Une seule bonne réponse**

Quelle description caractérise « gcc -o » ?

- **A ❌** Définition nécessaire introuvable lors de l’édition de liens.
- **B ❌** Un prototype annonce une signature ; la définition contient le corps de la fonction.
- **C ❌** char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.
- **D ✅** Permet de choisir le nom du fichier de sortie, par exemple gcc main.c -o cisfun.

**Réponse proposée :** D. Le résumé de la fiche indique : Permet de choisir le nom du fichier de sortie, par exemple gcc main.c -o cisfun.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/15-gcc-o

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_014-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « gcc -o » ?

- **A ✅** Les options -E, -S et -c modifient la nature de la sortie ; -o ne fait que la nommer.
- **B ❌** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.
- **C ❌** Un type ne garantit pas partout le même nombre d’octets.
- **D ❌** Le prototype annonce une fonction ; seule la définition fournit le code exécuté.

**Réponse proposée :** A. La fiche indique : Les options -E, -S et -c modifient la nature de la sortie ; -o ne fait que la nommer.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/15-gcc-o

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_014-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « gcc -o » ?

- **A ❌** Interface graphique / interface en ligne de commande.
- **B ✅** Les options -E, -S et -c modifient la nature de la sortie ; -o ne fait que la nommer.
- **C ✅** Permet de choisir le nom du fichier de sortie, par exemple gcc main.c -o cisfun.
- **D ❌** Sur une variable struct, on écrit objet.membre ; sur un pointeur vers cette struct, on écrit ptr->membre. Ces deux expressions peuvent désigner exactement le même membre.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/15-gcc-o

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_015 — puts / printf

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/16-puts-printf)

### V1-N08_015-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs. » ?

- **A ❌** undefined reference
- **B ❌** exit() — terminer le programme
- **C ✅** puts / printf
- **D ❌** Types entiers en C

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/16-puts-printf

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_015-02 — description

**Une seule bonne réponse**

Quelle description caractérise « puts / printf » ?

- **A ❌** char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.
- **B ❌** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.
- **C ❌** Définition nécessaire introuvable lors de l’édition de liens.
- **D ✅** puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.

**Réponse proposée :** D. Le résumé de la fiche indique : puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/16-puts-printf

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_015-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « puts / printf » ?

- **A ✅** puts ajoute un saut de ligne ; printf n'en ajoute que si le format le demande.
- **B ❌** « undefined reference » est généralement une erreur de liaison : vérifie les définitions et fichiers liés.
- **C ❌** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().
- **D ❌** Un type ne garantit pas partout le même nombre d’octets.

**Réponse proposée :** A. La fiche indique : puts ajoute un saut de ligne ; printf n'en ajoute que si le format le demande.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/16-puts-printf

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_015-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « puts / printf » ?

- **A ❌** Suite de caractères stockée notamment dans un tableau de char et terminée par le caractère nul \0.
- **B ❌** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **C ✅** puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.
- **D ✅** puts ajoute un saut de ligne ; printf n'en ajoute que si le format le demande.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/16-puts-printf

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_016 — Types entiers en C

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/17-types-entiers-en-c)

### V1-N08_016-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme. » ?

- **A ❌** Integer overflow — dépassement de capacité d'un entier
- **B ✅** Types entiers en C
- **C ❌** exit() — terminer le programme
- **D ❌** puts / printf

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/17-types-entiers-en-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_016-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Types entiers en C » ?

- **A ❌** puts affiche une chaîne en ajoutant un saut de ligne ; printf utilise une chaîne de format pour afficher des valeurs.
- **B ✅** char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.
- **C ❌** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.
- **D ❌** Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage.

**Réponse proposée :** B. Le résumé de la fiche indique : char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/17-types-entiers-en-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_016-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Types entiers en C » ?

- **A ❌** Un integer overflow n'est pas un buffer overflow. Le premier dépasse une plage NUMÉRIQUE ; il peut conduire au second si une taille d'allocation calculée devient incorrecte. Vérifier les limites avant toute opération risquée.
- **B ❌** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().
- **C ✅** Un type ne garantit pas partout le même nombre d’octets.
- **D ❌** puts ajoute un saut de ligne ; printf n'en ajoute que si le format le demande.

**Réponse proposée :** C. La fiche indique : Un type ne garantit pas partout le même nombre d’octets.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/17-types-entiers-en-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_016-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Types entiers en C » ?

- **A ❌** Un membre peut être lui-même une struct : p.position.x traverse deux niveaux.
- **B ❌** Une struct définit un type composé de membres nommés, éventuellement de types différents.
- **C ✅** char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.
- **D ✅** Un type ne garantit pas partout le même nombre d’octets.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/17-types-entiers-en-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_017 — signed et unsigned

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/18-signed-et-unsigned)

### V1-N08_017-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « signed permet des valeurs négatives et positives ; unsigned ne représente que des valeurs non négatives. » ?

- **A ❌** Integer overflow — dépassement de capacité d'un entier
- **B ❌** exit() — terminer le programme
- **C ✅** signed et unsigned
- **D ❌** ASCII

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/18-signed-et-unsigned

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_017-02 — description

**Une seule bonne réponse**

Quelle description caractérise « signed et unsigned » ?

- **A ✅** signed permet des valeurs négatives et positives ; unsigned ne représente que des valeurs non négatives.
- **B ❌** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.
- **C ❌** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.
- **D ❌** Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage.

**Réponse proposée :** A. Le résumé de la fiche indique : signed permet des valeurs négatives et positives ; unsigned ne représente que des valeurs non négatives.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/18-signed-et-unsigned

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_017-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « signed et unsigned » ?

- **A ❌** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().
- **B ❌** Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.
- **C ❌** Un integer overflow n'est pas un buffer overflow. Le premier dépasse une plage NUMÉRIQUE ; il peut conduire au second si une taille d'allocation calculée devient incorrecte. Vérifier les limites avant toute opération risquée.
- **D ✅** Ne pas utiliser unsigned uniquement pour « interdire » les valeurs négatives sans réfléchir aux conversions.

**Réponse proposée :** D. La fiche indique : Ne pas utiliser unsigned uniquement pour « interdire » les valeurs négatives sans réfléchir aux conversions.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/18-signed-et-unsigned

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_017-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « signed et unsigned » ?

- **A ✅** signed permet des valeurs négatives et positives ; unsigned ne représente que des valeurs non négatives.
- **B ❌** Proposition de modifications à examiner avant une fusion éventuelle.
- **C ❌** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.
- **D ✅** Ne pas utiliser unsigned uniquement pour « interdire » les valeurs négatives sans réfléchir aux conversions.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/18-signed-et-unsigned

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_018 — float et double

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/19-float-et-double)

### V1-N08_018-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « float et double représentent des nombres à virgule flottante, souvent avec une précision limitée. » ?

- **A ❌** Integer overflow — dépassement de capacité d'un entier
- **B ❌** gcc -c
- **C ✅** float et double
- **D ❌** ASCII

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/19-float-et-double

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_018-02 — description

**Une seule bonne réponse**

Quelle description caractérise « float et double » ?

- **A ❌** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.
- **B ❌** Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage.
- **C ❌** Compile en un fichier objet .o, sans édition de liens.
- **D ✅** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.

**Réponse proposée :** D. Le résumé de la fiche indique : float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/19-float-et-double

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_018-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « float et double » ?

- **A ❌** Un integer overflow n'est pas un buffer overflow. Le premier dépasse une plage NUMÉRIQUE ; il peut conduire au second si une taille d'allocation calculée devient incorrecte. Vérifier les limites avant toute opération risquée.
- **B ❌** Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.
- **C ❌** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.
- **D ✅** Les comparaisons exactes de flottants doivent être envisagées avec prudence.

**Réponse proposée :** D. La fiche indique : Les comparaisons exactes de flottants doivent être envisagées avec prudence.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/19-float-et-double

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_018-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « float et double » ?

- **A ❌** Conserve les deux derniers chiffres d’un entier positif.
- **B ❌** Retirer 1, puis utiliser la nouvelle valeur.
- **C ✅** Les comparaisons exactes de flottants doivent être envisagées avec prudence.
- **D ✅** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/19-float-et-double

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_019 — char et caractère

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/20-char-et-caractere)

### V1-N08_019-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « char représente un petit entier utilisé notamment pour les caractères ; 'A' est une constante de caractère. » ?

- **A ❌** return d’un caractère (char)
- **B ✅** char et caractère
- **C ❌** gcc -c
- **D ❌** ASCII

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/20-char-et-caractere

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_019-02 — description

**Une seule bonne réponse**

Quelle description caractérise « char et caractère » ?

- **A ❌** Une fonction de type char peut renvoyer un caractère, par exemple return 'H';.
- **B ❌** Compile en un fichier objet .o, sans édition de liens.
- **C ❌** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.
- **D ✅** char représente un petit entier utilisé notamment pour les caractères ; 'A' est une constante de caractère.

**Réponse proposée :** D. Le résumé de la fiche indique : char représente un petit entier utilisé notamment pour les caractères ; 'A' est une constante de caractère.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/20-char-et-caractere

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_019-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « char et caractère » ?

- **A ❌** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.
- **B ✅** Ne confonds pas le caractère '3' avec l'entier 3.
- **C ❌** Le caractère '0' possède un code numérique ; ce n'est pas l'entier 0.
- **D ❌** char correspond à un caractère (valeur entière), char * à un pointeur. Ne confonds pas return 'H'; avec return "H"; : ce ne sont pas les mêmes types.

**Réponse proposée :** B. La fiche indique : Ne confonds pas le caractère '3' avec l'entier 3.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/20-char-et-caractere

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_019-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « char et caractère » ?

- **A ❌** Initialisation, test, mise à jour ; forme compacte de boucle.
- **B ✅** Ne confonds pas le caractère '3' avec l'entier 3.
- **C ❌** Évaluation arithmétique.
- **D ✅** char représente un petit entier utilisé notamment pour les caractères ; 'A' est une constante de caractère.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/20-char-et-caractere

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_020 — return 0 / return 1

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/21-return-0-return-1)

### V1-N08_020-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction. » ?

- **A ❌** return d’un caractère (char)
- **B ❌** gcc -c
- **C ❌** Chaîne de format — ne pas utiliser une saisie comme format
- **D ✅** return 0 / return 1

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/21-return-0-return-1

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_020-02 — description

**Une seule bonne réponse**

Quelle description caractérise « return 0 / return 1 » ?

- **A ❌** Passer une chaîne contrôlée par l'utilisateur directement comme format à printf expose à une vulnérabilité ; utiliser un format fixe tel que "%s".
- **B ❌** Compile en un fichier objet .o, sans édition de liens.
- **C ✅** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.
- **D ❌** Une fonction de type char peut renvoyer un caractère, par exemple return 'H';.

**Réponse proposée :** C. Le résumé de la fiche indique : Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/21-return-0-return-1

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_020-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « return 0 / return 1 » ?

- **A ✅** Ne confonds pas le code de fin de main et les valeurs renvoyées par les autres fonctions : leur signification dépend du contexte. EXIT_SUCCESS et EXIT_FAILURE sont les constantes portables de <stdlib.h>.
- **B ❌** gcc -c produit un fichier objet (.o), sans liaison vers l'exécutable final.
- **C ❌** Ne jamais employer une donnée non fiable comme chaîne de format de printf, fprintf ou snprintf. Le format fixe "%s" affiche le texte sans interpréter ses caractères % comme des instructions.
- **D ❌** char correspond à un caractère (valeur entière), char * à un pointeur. Ne confonds pas return 'H'; avec return "H"; : ce ne sont pas les mêmes types.

**Réponse proposée :** A. La fiche indique : Ne confonds pas le code de fin de main et les valeurs renvoyées par les autres fonctions : leur signification dépend du contexte. EXIT_SUCCESS et EXIT_FAILURE sont les constantes portables de <stdlib.h>.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/21-return-0-return-1

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_020-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « return 0 / return 1 » ?

- **A ✅** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.
- **B ❌** INVALID_WRITE, UNINITIALIZED_VALUE, MEMORY_LEAK_DEFINITE, USE_AFTER_FREE et INDIRECT_LEAK sont des catégories d'erreurs ; elles ne correspondent pas toutes à des messages littéraux de Valgrind.
- **C ❌** « Definitely lost: 32 bytes in 1 blocks » signifie qu'un bloc alloué de 32 octets reste non libéré et sans pointeur retrouvé : fuite certaine.
- **D ✅** Ne confonds pas le code de fin de main et les valeurs renvoyées par les autres fonctions : leur signification dépend du contexte. EXIT_SUCCESS et EXIT_FAILURE sont les constantes portables de <stdlib.h>.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/21-return-0-return-1

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_021 — return d’un caractère (char)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/22-return-d-un-caractere-char)

### V1-N08_021-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une fonction de type char peut renvoyer un caractère, par exemple return 'H';. » ?

- **A ❌** Chaîne de format — ne pas utiliser une saisie comme format
- **B ✅** return d’un caractère (char)
- **C ❌** return 0 / return 1
- **D ❌** printf / _putchar

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/22-return-d-un-caractere-char

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_021-02 — description

**Une seule bonne réponse**

Quelle description caractérise « return d’un caractère (char) » ?

- **A ❌** Passer une chaîne contrôlée par l'utilisateur directement comme format à printf expose à une vulnérabilité ; utiliser un format fixe tel que "%s".
- **B ❌** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.
- **C ❌** Affichage formaté / écriture d’un caractère.
- **D ✅** Une fonction de type char peut renvoyer un caractère, par exemple return 'H';.

**Réponse proposée :** D. Le résumé de la fiche indique : Une fonction de type char peut renvoyer un caractère, par exemple return 'H';.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/22-return-d-un-caractere-char

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_021-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « return d’un caractère (char) » ?

- **A ❌** _putchar n'est pas une fonction standard C : elle doit être fournie par le projet ou une bibliothèque.
- **B ❌** Ne confonds pas le code de fin de main et les valeurs renvoyées par les autres fonctions : leur signification dépend du contexte. EXIT_SUCCESS et EXIT_FAILURE sont les constantes portables de <stdlib.h>.
- **C ✅** char correspond à un caractère (valeur entière), char * à un pointeur. Ne confonds pas return 'H'; avec return "H"; : ce ne sont pas les mêmes types.
- **D ❌** Ne jamais employer une donnée non fiable comme chaîne de format de printf, fprintf ou snprintf. Le format fixe "%s" affiche le texte sans interpréter ses caractères % comme des instructions.

**Réponse proposée :** C. La fiche indique : char correspond à un caractère (valeur entière), char * à un pointeur. Ne confonds pas return 'H'; avec return "H"; : ce ne sont pas les mêmes types.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/22-return-d-un-caractere-char

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_021-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « return d’un caractère (char) » ?

- **A ✅** char correspond à un caractère (valeur entière), char * à un pointeur. Ne confonds pas return 'H'; avec return "H"; : ce ne sont pas les mêmes types.
- **B ✅** Une fonction de type char peut renvoyer un caractère, par exemple return 'H';.
- **C ❌** Rediriger les erreurs / prendre un fichier comme entrée.
- **D ❌** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/22-return-d-un-caractere-char

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_022 — return d’un pointeur (int *)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/23-return-d-un-pointeur-int)

### V1-N08_022-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation. » ?

- **A ✅** return d’un pointeur (int *)
- **B ❌** printf / _putchar
- **C ❌** Chaîne de format — ne pas utiliser une saisie comme format
- **D ❌** gcc -E

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/23-return-d-un-pointeur-int

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_022-02 — description

**Une seule bonne réponse**

Quelle description caractérise « return d’un pointeur (int *) » ?

- **A ✅** Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation.
- **B ❌** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **C ❌** Affichage formaté / écriture d’un caractère.
- **D ❌** Passer une chaîne contrôlée par l'utilisateur directement comme format à printf expose à une vulnérabilité ; utiliser un format fixe tel que "%s".

**Réponse proposée :** A. Le résumé de la fiche indique : Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/23-return-d-un-pointeur-int

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_022-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « return d’un pointeur (int *) » ?

- **A ❌** gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.
- **B ❌** _putchar n'est pas une fonction standard C : elle doit être fournie par le projet ou une bibliothèque.
- **C ❌** Ne jamais employer une donnée non fiable comme chaîne de format de printf, fprintf ou snprintf. Le format fixe "%s" affiche le texte sans interpréter ses caractères % comme des instructions.
- **D ✅** Ne retourne jamais l’adresse d’une variable locale automatique. Un pointeur renvoyé doit rester valide lors de son utilisation, ou valoir NULL ; teste NULL avant tout déréférencement.

**Réponse proposée :** D. La fiche indique : Ne retourne jamais l’adresse d’une variable locale automatique. Un pointeur renvoyé doit rester valide lors de son utilisation, ou valoir NULL ; teste NULL avant tout déréférencement.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/23-return-d-un-pointeur-int

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_022-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « return d’un pointeur (int *) » ?

- **A ❌** Un segfault (souvent signalé par « Segmentation fault ») est un arrêt causé par un accès mémoire interdit ; un comportement indéfini en C ne provoque cependant pas toujours ce signal.
- **B ✅** Ne retourne jamais l’adresse d’une variable locale automatique. Un pointeur renvoyé doit rester valide lors de son utilisation, ou valoir NULL ; teste NULL avant tout déréférencement.
- **C ✅** Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation.
- **D ❌** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/23-return-d-un-pointeur-int

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_023 — exit() — terminer le programme

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/24-exit-terminer-le-programme)

### V1-N08_023-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant. » ?

- **A ❌** float et double
- **B ❌** gcc -E
- **C ❌** printf / _putchar
- **D ✅** exit() — terminer le programme

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/24-exit-terminer-le-programme

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_023-02 — description

**Une seule bonne réponse**

Quelle description caractérise « exit() — terminer le programme » ?

- **A ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **B ❌** Affichage formaté / écriture d’un caractère.
- **C ❌** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **D ✅** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.

**Réponse proposée :** D. Le résumé de la fiche indique : exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/24-exit-terminer-le-programme

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_023-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « exit() — terminer le programme » ?

- **A ✅** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().
- **B ❌** gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.
- **C ❌** _putchar n'est pas une fonction standard C : elle doit être fournie par le projet ou une bibliothèque.
- **D ❌** Les comparaisons exactes de flottants doivent être envisagées avec prudence.

**Réponse proposée :** A. La fiche indique : exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/24-exit-terminer-le-programme

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_023-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « exit() — terminer le programme » ?

- **A ❌** Sous-système Windows pour Linux : environnement Linux utilisable sur Windows.
- **B ✅** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().
- **C ❌** Dossier personnel de l’utilisateur.
- **D ✅** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/24-exit-terminer-le-programme

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_024 — Dennis Ritchie — créateur du langage C

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/25-dennis-ritchie-createur-du-langage-c)

### V1-N08_024-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dennis Ritchie a conçu le langage C aux Bell Labs au début des années 1970 ; il a aussi joué un rôle majeur dans le développement d’Unix. » ?

- **A ❌** fgets() — lire une ligne avec une limite
- **B ❌** gcc -E
- **C ❌** float et double
- **D ✅** Dennis Ritchie — créateur du langage C

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/25-dennis-ritchie-createur-du-langage-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_024-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Dennis Ritchie — créateur du langage C » ?

- **A ✅** Dennis Ritchie a conçu le langage C aux Bell Labs au début des années 1970 ; il a aussi joué un rôle majeur dans le développement d’Unix.
- **B ❌** fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.
- **C ❌** Arrête la chaîne de compilation après le préprocesseur : le résultat est du code source prétraité.
- **D ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.

**Réponse proposée :** A. Le résumé de la fiche indique : Dennis Ritchie a conçu le langage C aux Bell Labs au début des années 1970 ; il a aussi joué un rôle majeur dans le développement d’Unix.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/25-dennis-ritchie-createur-du-langage-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_024-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Dennis Ritchie — créateur du langage C » ?

- **A ❌** gcc -E produit le source prétraité et s'arrête avant la compilation proprement dite.
- **B ✅** Culture générale : Dennis Ritchie = créateur du C. Unix = travail collectif, notamment avec Ken Thompson. Brian Kernighan est coauteur du célèbre livre K&R, pas le créateur du langage.
- **C ❌** Les comparaisons exactes de flottants doivent être envisagées avec prudence.
- **D ❌** La taille fournie à fgets correspond à la capacité du tableau, pas à une quantité illimitée de texte. Vérifier NULL et détecter une ligne tronquée si toute l'entrée doit être conservée. Ne pas supposer que le saut de ligne est toujours présent.

**Réponse proposée :** B. La fiche indique : Culture générale : Dennis Ritchie = créateur du C. Unix = travail collectif, notamment avec Ken Thompson. Brian Kernighan est coauteur du célèbre livre K&R, pas le créateur du langage.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/25-dennis-ritchie-createur-du-langage-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_024-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Dennis Ritchie — créateur du langage C » ?

- **A ❌** int grille[2][3] contient deux lignes de trois éléments ; grille[1][2] désigne la troisième case de la seconde ligne.
- **B ✅** Culture générale : Dennis Ritchie = créateur du C. Unix = travail collectif, notamment avec Ken Thompson. Brian Kernighan est coauteur du célèbre livre K&R, pas le créateur du langage.
- **C ✅** Dennis Ritchie a conçu le langage C aux Bell Labs au début des années 1970 ; il a aussi joué un rôle majeur dans le développement d’Unix.
- **D ❌** Pour un tableau a, a[2] désigne le même élément que *(a + 2).

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/25-dennis-ritchie-createur-du-langage-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_025 — scanf() — lire une saisie au clavier

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier)

### V1-N08_025-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies. » ?

- **A ❌** float et double
- **B ❌** fgets() — lire une ligne avec une limite
- **C ✅** scanf() — lire une saisie au clavier
- **D ❌** void

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_025-02 — description

**Une seule bonne réponse**

Quelle description caractérise « scanf() — lire une saisie au clavier » ?

- **A ❌** float et double représentent des nombres à virgule flottante, souvent avec une précision limitée.
- **B ✅** scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies.
- **C ❌** fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.
- **D ❌** Indique une absence de valeur de retour ou de paramètres selon le contexte.

**Réponse proposée :** B. Le résumé de la fiche indique : scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_025-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « scanf() — lire une saisie au clavier » ?

- **A ✅** scanf("%d", &age) attend l’adresse de age et renvoie 1 seulement si un entier est lu correctement. Vérifier le retour avant d’utiliser la variable. Avec %s, toujours fixer une largeur adaptée à la taille du tableau ; fgets est mieux adapté aux phrases avec espaces. Les conversions de scanf et printf n’exigent pas toujours les mêmes types : scanf("%f", &f) attend un float * et scanf("%lf", &d) un double *.
- **B ❌** Les comparaisons exactes de flottants doivent être envisagées avec prudence.
- **C ❌** La taille fournie à fgets correspond à la capacité du tableau, pas à une quantité illimitée de texte. Vérifier NULL et détecter une ligne tronquée si toute l'entrée doit être conservée. Ne pas supposer que le saut de ligne est toujours présent.
- **D ❌** void en retour : aucun résultat ; (void) dans les paramètres : aucun paramètre.

**Réponse proposée :** A. La fiche indique : scanf("%d", &age) attend l’adresse de age et renvoie 1 seulement si un entier est lu correctement. Vérifier le retour avant d’utiliser la variable. Avec %s, toujours fixer une largeur adaptée à la taille du tableau ; fgets est mieux adapté aux phrases avec espaces. Les conversions de scanf et printf n’exigent pas toujours les mêmes types : scanf("%f", &f) attend un float * et scanf("%lf", &d) un double *.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_025-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « scanf() — lire une saisie au clavier » ?

- **A ✅** scanf("%d", &age) attend l’adresse de age et renvoie 1 seulement si un entier est lu correctement. Vérifier le retour avant d’utiliser la variable. Avec %s, toujours fixer une largeur adaptée à la taille du tableau ; fgets est mieux adapté aux phrases avec espaces. Les conversions de scanf et printf n’exigent pas toujours les mêmes types : scanf("%f", &f) attend un float * et scanf("%lf", &d) un double *.
- **B ❌** Un tableau comme struct point a[2] regroupe plusieurs objets struct, accessibles par a[i].x.
- **C ❌** typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.
- **D ✅** scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_026 — fgets() — lire une ligne avec une limite

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/27-fgets-lire-une-ligne-avec-une-limite)

### V1-N08_026-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour. » ?

- **A ❌** void
- **B ❌** scanf() — lire une saisie au clavier
- **C ✅** fgets() — lire une ligne avec une limite
- **D ❌** gcc -o nom source.c

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/27-fgets-lire-une-ligne-avec-une-limite · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_026-02 — description

**Une seule bonne réponse**

Quelle description caractérise « fgets() — lire une ligne avec une limite » ?

- **A ❌** scanf lit une entrée formatée (souvent depuis le clavier) et écrit les valeurs lues dans des variables : utiliser & pour une variable numérique et vérifier le nombre de conversions réussies.
- **B ❌** Indique une absence de valeur de retour ou de paramètres selon le contexte.
- **C ❌** Compiler un fichier source et nommer l’exécutable.
- **D ✅** fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.

**Réponse proposée :** D. Le résumé de la fiche indique : fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/27-fgets-lire-une-ligne-avec-une-limite · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_026-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « fgets() — lire une ligne avec une limite » ?

- **A ❌** scanf("%d", &age) attend l’adresse de age et renvoie 1 seulement si un entier est lu correctement. Vérifier le retour avant d’utiliser la variable. Avec %s, toujours fixer une largeur adaptée à la taille du tableau ; fgets est mieux adapté aux phrases avec espaces. Les conversions de scanf et printf n’exigent pas toujours les mêmes types : scanf("%f", &f) attend un float * et scanf("%lf", &d) un double *.
- **B ✅** La taille fournie à fgets correspond à la capacité du tableau, pas à une quantité illimitée de texte. Vérifier NULL et détecter une ligne tronquée si toute l'entrée doit être conservée. Ne pas supposer que le saut de ligne est toujours présent.
- **C ❌** L'option -o choisit le nom de sortie ; elle n'impose pas le type de cette sortie.
- **D ❌** void en retour : aucun résultat ; (void) dans les paramètres : aucun paramètre.

**Réponse proposée :** B. La fiche indique : La taille fournie à fgets correspond à la capacité du tableau, pas à une quantité illimitée de texte. Vérifier NULL et détecter une ligne tronquée si toute l'entrée doit être conservée. Ne pas supposer que le saut de ligne est toujours présent.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/27-fgets-lire-une-ligne-avec-une-limite · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_026-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « fgets() — lire une ligne avec une limite » ?

- **A ✅** fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.
- **B ✅** La taille fournie à fgets correspond à la capacité du tableau, pas à une quantité illimitée de texte. Vérifier NULL et détecter une ligne tronquée si toute l'entrée doit être conservée. Ne pas supposer que le saut de ligne est toujours présent.
- **C ❌** Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse.
- **D ❌** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/27-fgets-lire-une-ligne-avec-une-limite · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_027 — strtol() — convertir une entrée en entier

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/28-strtol-convertir-une-entree-en-entier)

### V1-N08_027-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno. » ?

- **A ❌** gcc -o nom source.c
- **B ✅** strtol() — convertir une entrée en entier
- **C ❌** void
- **D ❌** Types entiers en C

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/28-strtol-convertir-une-entree-en-entier · https://man7.org/linux/man-pages/man3/strtol.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_027-02 — description

**Une seule bonne réponse**

Quelle description caractérise « strtol() — convertir une entrée en entier » ?

- **A ❌** Indique une absence de valeur de retour ou de paramètres selon le contexte.
- **B ✅** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.
- **C ❌** char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.
- **D ❌** Compiler un fichier source et nommer l’exécutable.

**Réponse proposée :** B. Le résumé de la fiche indique : strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/28-strtol-convertir-une-entree-en-entier · https://man7.org/linux/man-pages/man3/strtol.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_027-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « strtol() — convertir une entrée en entier » ?

- **A ✅** Contrôler simultanément fin == ligne, errno == ERANGE et les caractères restants : une entrée comme 42abc ne doit pas être acceptée silencieusement. strtol renvoie un long, pas automatiquement un int.
- **B ❌** L'option -o choisit le nom de sortie ; elle n'impose pas le type de cette sortie.
- **C ❌** void en retour : aucun résultat ; (void) dans les paramètres : aucun paramètre.
- **D ❌** Un type ne garantit pas partout le même nombre d’octets.

**Réponse proposée :** A. La fiche indique : Contrôler simultanément fin == ligne, errno == ERANGE et les caractères restants : une entrée comme 42abc ne doit pas être acceptée silencieusement. strtol renvoie un long, pas automatiquement un int.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/28-strtol-convertir-une-entree-en-entier · https://man7.org/linux/man-pages/man3/strtol.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_027-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « strtol() — convertir une entrée en entier » ?

- **A ❌** Utiliser l’ancienne valeur, puis retirer 1.
- **B ✅** Contrôler simultanément fin == ligne, errno == ERANGE et les caractères restants : une entrée comme 42abc ne doit pas être acceptée silencieusement. strtol renvoie un long, pas automatiquement un int.
- **C ✅** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.
- **D ❌** sizeof donne la taille en octets d’un type ou d’un objet sur la machine utilisée ; ne pas supposer une taille universelle pour int ou un pointeur.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/28-strtol-convertir-une-entree-en-entier · https://man7.org/linux/man-pages/man3/strtol.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_028 — Chaîne de format — ne pas utiliser une saisie comme format

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/29-chaine-de-format-ne-pas-utiliser-une-saisie-comme-format)

### V1-N08_028-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Passer une chaîne contrôlée par l'utilisateur directement comme format à printf expose à une vulnérabilité ; utiliser un format fixe tel que "%s". » ?

- **A ❌** Types entiers en C
- **B ❌** exit() — terminer le programme
- **C ✅** Chaîne de format — ne pas utiliser une saisie comme format
- **D ❌** gcc -o nom source.c

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/29-chaine-de-format-ne-pas-utiliser-une-saisie-comme-format · https://owasp.org/www-community/attacks/Format_string_attack

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_028-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Chaîne de format — ne pas utiliser une saisie comme format » ?

- **A ❌** char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.
- **B ❌** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.
- **C ❌** Compiler un fichier source et nommer l’exécutable.
- **D ✅** Passer une chaîne contrôlée par l'utilisateur directement comme format à printf expose à une vulnérabilité ; utiliser un format fixe tel que "%s".

**Réponse proposée :** D. Le résumé de la fiche indique : Passer une chaîne contrôlée par l'utilisateur directement comme format à printf expose à une vulnérabilité ; utiliser un format fixe tel que "%s".

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/29-chaine-de-format-ne-pas-utiliser-une-saisie-comme-format · https://owasp.org/www-community/attacks/Format_string_attack

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_028-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Chaîne de format — ne pas utiliser une saisie comme format » ?

- **A ✅** Ne jamais employer une donnée non fiable comme chaîne de format de printf, fprintf ou snprintf. Le format fixe "%s" affiche le texte sans interpréter ses caractères % comme des instructions.
- **B ❌** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().
- **C ❌** L'option -o choisit le nom de sortie ; elle n'impose pas le type de cette sortie.
- **D ❌** Un type ne garantit pas partout le même nombre d’octets.

**Réponse proposée :** A. La fiche indique : Ne jamais employer une donnée non fiable comme chaîne de format de printf, fprintf ou snprintf. Le format fixe "%s" affiche le texte sans interpréter ses caractères % comme des instructions.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/29-chaine-de-format-ne-pas-utiliser-une-saisie-comme-format · https://owasp.org/www-community/attacks/Format_string_attack

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_028-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Chaîne de format — ne pas utiliser une saisie comme format » ?

- **A ✅** Passer une chaîne contrôlée par l'utilisateur directement comme format à printf expose à une vulnérabilité ; utiliser un format fixe tel que "%s".
- **B ✅** Ne jamais employer une donnée non fiable comme chaîne de format de printf, fprintf ou snprintf. Le format fixe "%s" affiche le texte sans interpréter ses caractères % comme des instructions.
- **C ❌** ET logique / OU logique / négation.
- **D ❌** Logiciel de gestion de versions distribué.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/29-chaine-de-format-ne-pas-utiliser-une-saisie-comme-format · https://owasp.org/www-community/attacks/Format_string_attack

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_029 — EOF — détecter la fin d'une entrée

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/30-eof-detecter-la-fin-d-une-entree)

### V1-N08_029-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF. » ?

- **A ✅** EOF — détecter la fin d'une entrée
- **B ❌** main()
- **C ❌** Types entiers en C
- **D ❌** exit() — terminer le programme

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/30-eof-detecter-la-fin-d-une-entree · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_029-02 — description

**Une seule bonne réponse**

Quelle description caractérise « EOF — détecter la fin d'une entrée » ?

- **A ❌** char, short, int, long et long long représentent des valeurs entières ; leurs tailles exactes dépendent de la plateforme.
- **B ❌** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.
- **C ❌** Point d’entrée d’un programme C classique.
- **D ✅** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.

**Réponse proposée :** D. Le résumé de la fiche indique : EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/30-eof-detecter-la-fin-d-une-entree · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_029-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « EOF — détecter la fin d'une entrée » ?

- **A ❌** Dans main, return 0 (ou EXIT_SUCCESS) signifie succès. EXIT_FAILURE permet d’indiquer un échec de manière portable ; la signification de return 1 n’est pas universelle pour toutes les implémentations.
- **B ❌** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().
- **C ✅** Un retour EOF n'est pas le caractère '\0'. Conserver le résultat de getchar dans un int. Pour distinguer fin de fichier et erreur de lecture, consulter feof et ferror.
- **D ❌** Un type ne garantit pas partout le même nombre d’octets.

**Réponse proposée :** C. La fiche indique : Un retour EOF n'est pas le caractère '\0'. Conserver le résultat de getchar dans un int. Pour distinguer fin de fichier et erreur de lecture, consulter feof et ferror.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/30-eof-detecter-la-fin-d-une-entree · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_029-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « EOF — détecter la fin d'une entrée » ?

- **A ❌** qsort trie un tableau en appelant le comparateur fourni : int comparer(const void *, const void *) doit renvoyer une valeur négative, nulle ou positive.
- **B ✅** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.
- **C ❌** char * est un pointeur vers char ; il peut désigner le début d'un tableau de caractères, mais ne stocke ni sa capacité ni son terminateur.
- **D ✅** Un retour EOF n'est pas le caractère '\0'. Conserver le résultat de getchar dans un int. Pour distinguer fin de fichier et erreur de lecture, consulter feof et ferror.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/30-eof-detecter-la-fin-d-une-entree · https://man7.org/linux/man-pages/man3/fgets.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N08_030 — Integer overflow — dépassement de capacité d'un entier

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/31-integer-overflow-depassement-de-capacite-d-un-entier)

### V1-N08_030-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage. » ?

- **A ❌** main()
- **B ✅** Integer overflow — dépassement de capacité d'un entier
- **C ❌** exit() — terminer le programme
- **D ❌** Compilation vs édition de liens

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/31-integer-overflow-depassement-de-capacite-d-un-entier · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152210 · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_030-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Integer overflow — dépassement de capacité d'un entier » ?

- **A ❌** Point d’entrée d’un programme C classique.
- **B ❌** Prétraitement et compilation vers le code objet, puis liaison des objets et bibliothèques pour produire l’exécutable.
- **C ✅** Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage.
- **D ❌** exit(code) termine le programme entier, même depuis une fonction appelée ; à la différence de return, il ne revient pas à l’appelant.

**Réponse proposée :** C. Le résumé de la fiche indique : Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/31-integer-overflow-depassement-de-capacite-d-un-entier · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152210 · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_030-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Integer overflow — dépassement de capacité d'un entier » ?

- **A ❌** La chaîne complète passe par prétraitement, compilation, assemblage puis édition de liens.
- **B ❌** exit(98) arrête le programme avec le statut demandé, pas uniquement la fonction verifier. En remplaçant verifier(1) par verifier(0), le puts n’est jamais exécuté. Utilise EXIT_FAILURE pour un échec portable, et ne confonds pas exit() avec free().
- **C ✅** Un integer overflow n'est pas un buffer overflow. Le premier dépasse une plage NUMÉRIQUE ; il peut conduire au second si une taille d'allocation calculée devient incorrecte. Vérifier les limites avant toute opération risquée.
- **D ❌** Dans main, return 0 (ou EXIT_SUCCESS) signifie succès. EXIT_FAILURE permet d’indiquer un échec de manière portable ; la signification de return 1 n’est pas universelle pour toutes les implémentations.

**Réponse proposée :** C. La fiche indique : Un integer overflow n'est pas un buffer overflow. Le premier dépasse une plage NUMÉRIQUE ; il peut conduire au second si une taille d'allocation calculée devient incorrecte. Vérifier les limites avant toute opération risquée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/31-integer-overflow-depassement-de-capacite-d-un-entier · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152210 · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N08_030-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Integer overflow — dépassement de capacité d'un entier » ?

- **A ✅** Un integer overflow survient si un calcul dépasse l'intervalle représentable ; en C, le débordement signé est indéfini, tandis que l'unsigned se replie modulo sa plage.
- **B ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.
- **C ✅** Un integer overflow n'est pas un buffer overflow. Le premier dépasse une plage NUMÉRIQUE ; il peut conduire au second si une taille d'allocation calculée devient incorrecte. Vérifier les limites avant toute opération risquée.
- **D ❌** Paramètres et variables du Shell / environnement.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/31-integer-overflow-depassement-de-capacite-d-un-entier · https://wiki.sei.cmu.edu/confluence/spaces/flyingpdf/pdfpageexport.action?pageId=87152210 · https://man7.org/linux/man-pages/man3/malloc.3.html

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

