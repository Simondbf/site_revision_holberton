# Banque de revue — Modulo et arithmétique

36 questions candidates couvrant 9 notions. **Toutes les réponses sont des propositions à vérifier indépendamment** ; elles sont dérivées des fiches existantes et peuvent contenir des distracteurs ambigus. **Ne rien publier sur le site.**

## N10_000 — %

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/1-)

### V1-N10_000-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Reste de la division entière. » ?

- **A ❌** n / 10
- **B ✅** %
- **C ❌** n % 2
- **D ❌** n % 10

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/1-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_000-02 · description

**Une seule bonne réponse**

Quelle description caractérise « % » ?

- **A ✅** Reste de la division entière.
- **B ❌** Reste par 10 : dernier chiffre pour un entier positif.
- **C ❌** Reste par 2 ; permet de tester la parité.
- **D ❌** Supprime le dernier chiffre d’un entier positif.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Reste de la division entière.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/1-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_000-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « % » ?

- **A ❌** Avec un entier positif, n / 10 retire le chiffre des unités sans arrondir.
- **B ❌** Un entier est pair si n % 2 vaut 0, y compris lorsqu'il est négatif.
- **C ❌** Pour n négatif, n % 10 peut être négatif : ce n'est pas toujours un chiffre positif.
- **D ✅** % calcule un reste entier. La division ou le modulo par zéro est invalide en C.

**Réponse candidate :** D · **Explication :** La fiche indique : % calcule un reste entier. La division ou le modulo par zéro est invalide en C.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/1-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_000-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « % » ?

- **A ✅** % calcule un reste entier. La division ou le modulo par zéro est invalide en C.
- **B ❌** signed permet des valeurs négatives et positives ; unsigned ne représente que des valeurs non négatives.
- **C ✅** Reste de la division entière.
- **D ❌** Dialecte C89 avec extensions GNU. Pour rester compatible C89 strict, déclarer les variables avant les instructions.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/1-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N10_001 — / avec des entiers

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/2-avec-des-entiers)

### V1-N10_001-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Quotient entier tronqué vers zéro. » ?

- **A ✅** / avec des entiers
- **B ❌** %
- **C ❌** 89 % 7
- **D ❌** 12 % 10

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/2-avec-des-entiers

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_001-02 · description

**Une seule bonne réponse**

Quelle description caractérise « / avec des entiers » ?

- **A ❌** Reste : 2.
- **B ✅** Quotient entier tronqué vers zéro.
- **C ❌** Reste de la division entière.
- **D ❌** Reste : 5.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Quotient entier tronqué vers zéro.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/2-avec-des-entiers

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_001-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « / avec des entiers » ?

- **A ❌** 89 = 7 × 12 + 5 ; 5 est donc le reste de 89 / 7.
- **B ❌** 12 % 10 vaut 2 : ce sont les unités du nombre 12.
- **C ✅** En C99 et après, le quotient entier est tronqué vers zéro ; en C90, le cas négatif dépendait de l'implémentation.
- **D ❌** % calcule un reste entier. La division ou le modulo par zéro est invalide en C.

**Réponse candidate :** C · **Explication :** La fiche indique : En C99 et après, le quotient entier est tronqué vers zéro ; en C90, le cas négatif dépendait de l'implémentation.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/2-avec-des-entiers

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_001-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « / avec des entiers » ?

- **A ❌** ET logique / OU logique / négation.
- **B ✅** En C99 et après, le quotient entier est tronqué vers zéro ; en C90, le cas négatif dépendait de l'implémentation.
- **C ✅** Quotient entier tronqué vers zéro.
- **D ❌** Logiciel de gestion de versions distribué.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/2-avec-des-entiers

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N10_002 — n % 2

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/3-n-2)

### V1-N10_002-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Reste par 2 ; permet de tester la parité. » ?

- **A ❌** 12 / 10
- **B ❌** n % 100
- **C ❌** n / 10
- **D ✅** n % 2

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/3-n-2

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_002-02 · description

**Une seule bonne réponse**

Quelle description caractérise « n % 2 » ?

- **A ✅** Reste par 2 ; permet de tester la parité.
- **B ❌** Résultat entier : 1.
- **C ❌** Conserve les deux derniers chiffres d’un entier positif.
- **D ❌** Supprime le dernier chiffre d’un entier positif.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Reste par 2 ; permet de tester la parité.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/3-n-2

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_002-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « n % 2 » ?

- **A ❌** Avec un entier positif, n / 10 retire le chiffre des unités sans arrondir.
- **B ✅** Un entier est pair si n % 2 vaut 0, y compris lorsqu'il est négatif.
- **C ❌** 12 / 10 vaut 1 (quotient entier), pas 1,2.
- **D ❌** Pour afficher 7 comme « 07 », utilise un format comme %02d après n % 100.

**Réponse candidate :** B · **Explication :** La fiche indique : Un entier est pair si n % 2 vaut 0, y compris lorsqu'il est négatif.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/3-n-2

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_002-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « n % 2 » ?

- **A ❌** Changer les permissions / propriétaire / utiliser des privilèges élevés.
- **B ❌** Trier / dédupliquer les lignes voisines / extraire / début / fin / inverser les caractères.
- **C ✅** Un entier est pair si n % 2 vaut 0, y compris lorsqu'il est négatif.
- **D ✅** Reste par 2 ; permet de tester la parité.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/3-n-2

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N10_003 — n % 10

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/4-n-10)

### V1-N10_003-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Reste par 10 : dernier chiffre pour un entier positif. » ?

- **A ✅** n % 10
- **B ❌** / avec des entiers
- **C ❌** %
- **D ❌** n % 2

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/4-n-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_003-02 · description

**Une seule bonne réponse**

Quelle description caractérise « n % 10 » ?

- **A ❌** Reste par 2 ; permet de tester la parité.
- **B ❌** Reste de la division entière.
- **C ❌** Quotient entier tronqué vers zéro.
- **D ✅** Reste par 10 : dernier chiffre pour un entier positif.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Reste par 10 : dernier chiffre pour un entier positif.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/4-n-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_003-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « n % 10 » ?

- **A ✅** Pour n négatif, n % 10 peut être négatif : ce n'est pas toujours un chiffre positif.
- **B ❌** En C99 et après, le quotient entier est tronqué vers zéro ; en C90, le cas négatif dépendait de l'implémentation.
- **C ❌** Un entier est pair si n % 2 vaut 0, y compris lorsqu'il est négatif.
- **D ❌** % calcule un reste entier. La division ou le modulo par zéro est invalide en C.

**Réponse candidate :** A · **Explication :** La fiche indique : Pour n négatif, n % 10 peut être négatif : ce n'est pas toujours un chiffre positif.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/4-n-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_003-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « n % 10 » ?

- **A ✅** Reste par 10 : dernier chiffre pour un entier positif.
- **B ❌** typedef struct { int x; int y; } point_t; crée un alias pour une struct sans étiquette.
- **C ❌** Un include guard (#ifndef, #define, #endif) évite qu’un même en-tête soit traité plusieurs fois dans une même unité de traduction.
- **D ✅** Pour n négatif, n % 10 peut être négatif : ce n'est pas toujours un chiffre positif.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/4-n-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N10_004 — n / 10

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/5-n-10)

### V1-N10_004-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Supprime le dernier chiffre d’un entier positif. » ?

- **A ❌** 12 / 10
- **B ✅** n / 10
- **C ❌** 89 % 7
- **D ❌** 12 % 10

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/5-n-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_004-02 · description

**Une seule bonne réponse**

Quelle description caractérise « n / 10 » ?

- **A ❌** Reste : 2.
- **B ❌** Résultat entier : 1.
- **C ✅** Supprime le dernier chiffre d’un entier positif.
- **D ❌** Reste : 5.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Supprime le dernier chiffre d’un entier positif.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/5-n-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_004-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « n / 10 » ?

- **A ❌** 89 = 7 × 12 + 5 ; 5 est donc le reste de 89 / 7.
- **B ❌** 12 / 10 vaut 1 (quotient entier), pas 1,2.
- **C ❌** 12 % 10 vaut 2 : ce sont les unités du nombre 12.
- **D ✅** Avec un entier positif, n / 10 retire le chiffre des unités sans arrondir.

**Réponse candidate :** D · **Explication :** La fiche indique : Avec un entier positif, n / 10 retire le chiffre des unités sans arrondir.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/5-n-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_004-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « n / 10 » ?

- **A ✅** Avec un entier positif, n / 10 retire le chiffre des unités sans arrondir.
- **B ✅** Supprime le dernier chiffre d’un entier positif.
- **C ❌** Une fonction C doit posséder une signature adaptée : type de retour, nom, liste de paramètres.
- **D ❌** Utiliser l’ancienne valeur de i, puis ajouter 1.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/5-n-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N10_005 — n % 100

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/6-n-100)

### V1-N10_005-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Conserve les deux derniers chiffres d’un entier positif. » ?

- **A ✅** n % 100
- **B ❌** n / 10
- **C ❌** n % 10
- **D ❌** n % 2

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/6-n-100

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_005-02 · description

**Une seule bonne réponse**

Quelle description caractérise « n % 100 » ?

- **A ❌** Supprime le dernier chiffre d’un entier positif.
- **B ❌** Reste par 2 ; permet de tester la parité.
- **C ✅** Conserve les deux derniers chiffres d’un entier positif.
- **D ❌** Reste par 10 : dernier chiffre pour un entier positif.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Conserve les deux derniers chiffres d’un entier positif.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/6-n-100

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_005-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « n % 100 » ?

- **A ✅** Pour afficher 7 comme « 07 », utilise un format comme %02d après n % 100.
- **B ❌** Un entier est pair si n % 2 vaut 0, y compris lorsqu'il est négatif.
- **C ❌** Pour n négatif, n % 10 peut être négatif : ce n'est pas toujours un chiffre positif.
- **D ❌** Avec un entier positif, n / 10 retire le chiffre des unités sans arrondir.

**Réponse candidate :** A · **Explication :** La fiche indique : Pour afficher 7 comme « 07 », utilise un format comme %02d après n % 100.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/6-n-100

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_005-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « n % 100 » ?

- **A ✅** Conserve les deux derniers chiffres d’un entier positif.
- **B ✅** Pour afficher 7 comme « 07 », utilise un format comme %02d après n % 100.
- **C ❌** Déclarer int *ptr; sans lui donner d’adresse valide, puis écrire *ptr = 98; provoque un comportement indéfini, pas nécessairement un segfault.
- **D ❌** Appeler free deux fois avec la même adresse d'un bloc déjà libéré est un comportement indéfini ; free(NULL) est sans effet.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/6-n-100

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N10_006 — 12 / 10

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/7-12-10)

### V1-N10_006-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Résultat entier : 1. » ?

- **A ❌** / avec des entiers
- **B ❌** 89 % 7
- **C ❌** %
- **D ✅** 12 / 10

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/7-12-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_006-02 · description

**Une seule bonne réponse**

Quelle description caractérise « 12 / 10 » ?

- **A ✅** Résultat entier : 1.
- **B ❌** Reste de la division entière.
- **C ❌** Quotient entier tronqué vers zéro.
- **D ❌** Reste : 5.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Résultat entier : 1.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/7-12-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_006-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « 12 / 10 » ?

- **A ❌** En C99 et après, le quotient entier est tronqué vers zéro ; en C90, le cas négatif dépendait de l'implémentation.
- **B ❌** 89 = 7 × 12 + 5 ; 5 est donc le reste de 89 / 7.
- **C ✅** 12 / 10 vaut 1 (quotient entier), pas 1,2.
- **D ❌** % calcule un reste entier. La division ou le modulo par zéro est invalide en C.

**Réponse candidate :** C · **Explication :** La fiche indique : 12 / 10 vaut 1 (quotient entier), pas 1,2.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/7-12-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_006-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « 12 / 10 » ?

- **A ✅** 12 / 10 vaut 1 (quotient entier), pas 1,2.
- **B ❌** Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.
- **C ❌** Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.
- **D ✅** Résultat entier : 1.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/7-12-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N10_007 — 12 % 10

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/8-12-10)

### V1-N10_007-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Reste : 2. » ?

- **A ❌** n % 100
- **B ❌** n / 10
- **C ✅** 12 % 10
- **D ❌** 12 / 10

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/8-12-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_007-02 · description

**Une seule bonne réponse**

Quelle description caractérise « 12 % 10 » ?

- **A ❌** Résultat entier : 1.
- **B ❌** Supprime le dernier chiffre d’un entier positif.
- **C ❌** Conserve les deux derniers chiffres d’un entier positif.
- **D ✅** Reste : 2.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Reste : 2.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/8-12-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_007-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « 12 % 10 » ?

- **A ❌** Pour afficher 7 comme « 07 », utilise un format comme %02d après n % 100.
- **B ❌** 12 / 10 vaut 1 (quotient entier), pas 1,2.
- **C ✅** 12 % 10 vaut 2 : ce sont les unités du nombre 12.
- **D ❌** Avec un entier positif, n / 10 retire le chiffre des unités sans arrondir.

**Réponse candidate :** C · **Explication :** La fiche indique : 12 % 10 vaut 2 : ce sont les unités du nombre 12.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/8-12-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_007-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « 12 % 10 » ?

- **A ✅** Reste : 2.
- **B ❌** char représente un petit entier utilisé notamment pour les caractères ; 'A' est une constante de caractère.
- **C ❌** fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.
- **D ✅** 12 % 10 vaut 2 : ce sont les unités du nombre 12.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/8-12-10

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N10_008 — 89 % 7

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/9-89-7)

### V1-N10_008-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Reste : 5. » ?

- **A ❌** n % 10
- **B ❌** / avec des entiers
- **C ✅** 89 % 7
- **D ❌** n % 2

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/9-89-7

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_008-02 · description

**Une seule bonne réponse**

Quelle description caractérise « 89 % 7 » ?

- **A ✅** Reste : 5.
- **B ❌** Quotient entier tronqué vers zéro.
- **C ❌** Reste par 2 ; permet de tester la parité.
- **D ❌** Reste par 10 : dernier chiffre pour un entier positif.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Reste : 5.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/9-89-7

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_008-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « 89 % 7 » ?

- **A ❌** Un entier est pair si n % 2 vaut 0, y compris lorsqu'il est négatif.
- **B ❌** En C99 et après, le quotient entier est tronqué vers zéro ; en C90, le cas négatif dépendait de l'implémentation.
- **C ❌** Pour n négatif, n % 10 peut être négatif : ce n'est pas toujours un chiffre positif.
- **D ✅** 89 = 7 × 12 + 5 ; 5 est donc le reste de 89 / 7.

**Réponse candidate :** D · **Explication :** La fiche indique : 89 = 7 × 12 + 5 ; 5 est donc le reste de 89 / 7.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/9-89-7

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N10_008-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « 89 % 7 » ?

- **A ❌** Envoyer / récupérer et intégrer / seulement récupérer.
- **B ✅** Reste : 5.
- **C ✅** 89 = 7 × 12 + 5 ; 5 est donc le reste de 89 / 7.
- **D ❌** Dépôt du code et de son historique.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/modulo-et-arithmetique/9-89-7

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

