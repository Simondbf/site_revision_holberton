# Banque de revue — Conditions et boucles C

40 questions candidates couvrant 10 notions. **Toutes les réponses sont des propositions à vérifier indépendamment** ; elles sont dérivées des fiches existantes et peuvent contenir des distracteurs ambigus. **Ne rien publier sur le site.**

## N05_000 — if / else if / else

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/1-if-else-if-else)

### V1-N05_000-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Choisir une branche selon des conditions. » ?

- **A ✅** if / else if / else
- **B ❌** == / !=
- **C ❌** 0 et booléens C
- **D ❌** && / || / !

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/1-if-else-if-else

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_000-02 · description

**Une seule bonne réponse**

Quelle description caractérise « if / else if / else » ?

- **A ❌** ET logique / OU logique / négation.
- **B ❌** Égalité / différence. Attention à ne pas confondre = et ==.
- **C ❌** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.
- **D ✅** Choisir une branche selon des conditions.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Choisir une branche selon des conditions.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/1-if-else-if-else

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_000-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « if / else if / else » ?

- **A ✅** Dans une chaîne if / else if / else, seule la première branche dont la condition réussit est exécutée.
- **B ❌** && et || sont à évaluation courte : la deuxième expression n'est pas toujours évaluée.
- **C ❌** « = » affecte une valeur ; « == » teste l'égalité. Les confondre peut créer une erreur difficile à voir.
- **D ❌** Une valeur négative est vraie dans une condition C : seule la valeur 0 est fausse.

**Réponse candidate :** A · **Explication :** La fiche indique : Dans une chaîne if / else if / else, seule la première branche dont la condition réussit est exécutée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/1-if-else-if-else

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_000-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « if / else if / else » ?

- **A ✅** Choisir une branche selon des conditions.
- **B ❌** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.
- **C ❌** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.
- **D ✅** Dans une chaîne if / else if / else, seule la première branche dont la condition réussit est exécutée.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/1-if-else-if-else

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N05_001 — == / !=

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/2-)

### V1-N05_001-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Égalité / différence. Attention à ne pas confondre = et ==. » ?

- **A ❌** if / else if / else
- **B ✅** == / !=
- **C ❌** do…while
- **D ❌** 0 et booléens C

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/2-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_001-02 · description

**Une seule bonne réponse**

Quelle description caractérise « == / != » ?

- **A ✅** Égalité / différence. Attention à ne pas confondre = et ==.
- **B ❌** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.
- **C ❌** Teste après exécution : le corps tourne au moins une fois.
- **D ❌** Choisir une branche selon des conditions.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Égalité / différence. Attention à ne pas confondre = et ==.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/2-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_001-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « == / != » ?

- **A ❌** Dans une chaîne if / else if / else, seule la première branche dont la condition réussit est exécutée.
- **B ❌** Une valeur négative est vraie dans une condition C : seule la valeur 0 est fausse.
- **C ❌** do...while exécute toujours son corps au moins une fois avant le test.
- **D ✅** « = » affecte une valeur ; « == » teste l'égalité. Les confondre peut créer une erreur difficile à voir.

**Réponse candidate :** D · **Explication :** La fiche indique : « = » affecte une valeur ; « == » teste l'égalité. Les confondre peut créer une erreur difficile à voir.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/2-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_001-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « == / != » ?

- **A ✅** « = » affecte une valeur ; « == » teste l'égalité. Les confondre peut créer une erreur difficile à voir.
- **B ❌** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.
- **C ✅** Égalité / différence. Attention à ne pas confondre = et ==.
- **D ❌** Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/2-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N05_002 — < > <= >=

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/3-)

### V1-N05_002-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Comparaisons. » ?

- **A ❌** do…while
- **B ❌** 0 et booléens C
- **C ✅** < > <= >=
- **D ❌** for

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/3-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_002-02 · description

**Une seule bonne réponse**

Quelle description caractérise « < > <= >= » ?

- **A ❌** Initialisation, test, mise à jour ; forme compacte de boucle.
- **B ✅** Comparaisons.
- **C ❌** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.
- **D ❌** Teste après exécution : le corps tourne au moins une fois.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Comparaisons.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/3-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_002-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « < > <= >= » ?

- **A ❌** do...while exécute toujours son corps au moins une fois avant le test.
- **B ❌** En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.
- **C ✅** Les conversions entre types signés et non signés peuvent rendre certaines comparaisons surprenantes.
- **D ❌** Une valeur négative est vraie dans une condition C : seule la valeur 0 est fausse.

**Réponse candidate :** C · **Explication :** La fiche indique : Les conversions entre types signés et non signés peuvent rendre certaines comparaisons surprenantes.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/3-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_002-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « < > <= >= » ?

- **A ❌** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.
- **B ✅** Les conversions entre types signés et non signés peuvent rendre certaines comparaisons surprenantes.
- **C ✅** Comparaisons.
- **D ❌** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/3-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N05_003 — && / || / !

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/4-)

### V1-N05_003-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « ET logique / OU logique / négation. » ?

- **A ❌** do…while
- **B ❌** for
- **C ❌** == / !=
- **D ✅** && / || / !

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/4-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_003-02 · description

**Une seule bonne réponse**

Quelle description caractérise « && / || / ! » ?

- **A ✅** ET logique / OU logique / négation.
- **B ❌** Teste après exécution : le corps tourne au moins une fois.
- **C ❌** Initialisation, test, mise à jour ; forme compacte de boucle.
- **D ❌** Égalité / différence. Attention à ne pas confondre = et ==.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : ET logique / OU logique / négation.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/4-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_003-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « && / || / ! » ?

- **A ❌** « = » affecte une valeur ; « == » teste l'égalité. Les confondre peut créer une erreur difficile à voir.
- **B ✅** && et || sont à évaluation courte : la deuxième expression n'est pas toujours évaluée.
- **C ❌** do...while exécute toujours son corps au moins une fois avant le test.
- **D ❌** En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.

**Réponse candidate :** B · **Explication :** La fiche indique : && et || sont à évaluation courte : la deuxième expression n'est pas toujours évaluée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/4-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_003-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « && / || / ! » ?

- **A ❌** État / préparation / enregistrement.
- **B ❌** Affichage formaté / écriture d’un caractère.
- **C ✅** && et || sont à évaluation courte : la deuxième expression n'est pas toujours évaluée.
- **D ✅** ET logique / OU logique / négation.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/4-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N05_004 — for

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/5-for)

### V1-N05_004-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Initialisation, test, mise à jour ; forme compacte de boucle. » ?

- **A ✅** for
- **B ❌** == / !=
- **C ❌** Boucles imbriquées
- **D ❌** && / || / !

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/5-for

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_004-02 · description

**Une seule bonne réponse**

Quelle description caractérise « for » ?

- **A ❌** ET logique / OU logique / négation.
- **B ❌** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.
- **C ❌** Égalité / différence. Attention à ne pas confondre = et ==.
- **D ✅** Initialisation, test, mise à jour ; forme compacte de boucle.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Initialisation, test, mise à jour ; forme compacte de boucle.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/5-for

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_004-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « for » ?

- **A ✅** En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.
- **B ❌** « = » affecte une valeur ; « == » teste l'égalité. Les confondre peut créer une erreur difficile à voir.
- **C ❌** && et || sont à évaluation courte : la deuxième expression n'est pas toujours évaluée.
- **D ❌** Deux boucles imbriquées de n itérations chacune peuvent effectuer n × n passages, selon leurs bornes.

**Réponse candidate :** A · **Explication :** La fiche indique : En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/5-for

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_004-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « for » ?

- **A ✅** Initialisation, test, mise à jour ; forme compacte de boucle.
- **B ❌** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **C ❌** Créer / retirer un raccourci de commande.
- **D ✅** En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/5-for

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N05_005 — while

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/6-while)

### V1-N05_005-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Teste sa condition avant chaque itération. » ?

- **A ❌** Itération
- **B ✅** while
- **C ❌** == / !=
- **D ❌** Boucles imbriquées

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/6-while

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_005-02 · description

**Une seule bonne réponse**

Quelle description caractérise « while » ?

- **A ❌** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.
- **B ❌** Un passage dans une boucle.
- **C ✅** Teste sa condition avant chaque itération.
- **D ❌** Égalité / différence. Attention à ne pas confondre = et ==.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Teste sa condition avant chaque itération.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/6-while

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_005-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « while » ?

- **A ❌** « = » affecte une valeur ; « == » teste l'égalité. Les confondre peut créer une erreur difficile à voir.
- **B ❌** Une itération est un passage dans le corps ; la valeur de l'indice ne donne pas toujours le nombre de passages.
- **C ❌** Deux boucles imbriquées de n itérations chacune peuvent effectuer n × n passages, selon leurs bornes.
- **D ✅** Si la condition est fausse d'emblée, while n'exécute aucune itération.

**Réponse candidate :** D · **Explication :** La fiche indique : Si la condition est fausse d'emblée, while n'exécute aucune itération.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/6-while

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_005-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « while » ?

- **A ✅** Si la condition est fausse d'emblée, while n'exécute aucune itération.
- **B ✅** Teste sa condition avant chaque itération.
- **C ❌** Dépend du répertoire actuel.
- **D ❌** Programme qui interprète les commandes et lance les autres programmes.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/6-while

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N05_006 — do…while

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/7-do-while)

### V1-N05_006-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Teste après exécution : le corps tourne au moins une fois. » ?

- **A ✅** do…while
- **B ❌** Boucles imbriquées
- **C ❌** Itération
- **D ❌** for

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/7-do-while

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_006-02 · description

**Une seule bonne réponse**

Quelle description caractérise « do…while » ?

- **A ❌** Initialisation, test, mise à jour ; forme compacte de boucle.
- **B ✅** Teste après exécution : le corps tourne au moins une fois.
- **C ❌** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.
- **D ❌** Un passage dans une boucle.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Teste après exécution : le corps tourne au moins une fois.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/7-do-while

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_006-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « do…while » ?

- **A ✅** do...while exécute toujours son corps au moins une fois avant le test.
- **B ❌** En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.
- **C ❌** Une itération est un passage dans le corps ; la valeur de l'indice ne donne pas toujours le nombre de passages.
- **D ❌** Deux boucles imbriquées de n itérations chacune peuvent effectuer n × n passages, selon leurs bornes.

**Réponse candidate :** A · **Explication :** La fiche indique : do...while exécute toujours son corps au moins une fois avant le test.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/7-do-while

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_006-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « do…while » ?

- **A ❌** Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.
- **B ✅** do...while exécute toujours son corps au moins une fois avant le test.
- **C ✅** Teste après exécution : le corps tourne au moins une fois.
- **D ❌** typedef struct animal { int age; } animal_t; rend le type utilisable sous le nom animal_t.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/7-do-while

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N05_007 — Itération

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/8-iteration)

### V1-N05_007-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un passage dans une boucle. » ?

- **A ❌** do…while
- **B ❌** < > <= >=
- **C ❌** for
- **D ✅** Itération

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/8-iteration

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_007-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Itération » ?

- **A ✅** Un passage dans une boucle.
- **B ❌** Initialisation, test, mise à jour ; forme compacte de boucle.
- **C ❌** Teste après exécution : le corps tourne au moins une fois.
- **D ❌** Comparaisons.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Un passage dans une boucle.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/8-iteration

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_007-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Itération » ?

- **A ❌** do...while exécute toujours son corps au moins une fois avant le test.
- **B ❌** Les conversions entre types signés et non signés peuvent rendre certaines comparaisons surprenantes.
- **C ✅** Une itération est un passage dans le corps ; la valeur de l'indice ne donne pas toujours le nombre de passages.
- **D ❌** En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.

**Réponse candidate :** C · **Explication :** La fiche indique : Une itération est un passage dans le corps ; la valeur de l'indice ne donne pas toujours le nombre de passages.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/8-iteration

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_007-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Itération » ?

- **A ✅** Une itération est un passage dans le corps ; la valeur de l'indice ne donne pas toujours le nombre de passages.
- **B ❌** Résultat entier : 1.
- **C ❌** Affiche 876543210 si on affiche i dans le corps.
- **D ✅** Un passage dans une boucle.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/8-iteration

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N05_008 — 0 et booléens C

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/9-0-et-booleens-c)

### V1-N05_008-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « 0 est faux ; toute valeur différente de 0 est vraie dans une condition. » ?

- **A ❌** < > <= >=
- **B ❌** if / else if / else
- **C ✅** 0 et booléens C
- **D ❌** for

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/9-0-et-booleens-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_008-02 · description

**Une seule bonne réponse**

Quelle description caractérise « 0 et booléens C » ?

- **A ❌** Initialisation, test, mise à jour ; forme compacte de boucle.
- **B ❌** Choisir une branche selon des conditions.
- **C ❌** Comparaisons.
- **D ✅** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : 0 est faux ; toute valeur différente de 0 est vraie dans une condition.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/9-0-et-booleens-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_008-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « 0 et booléens C » ?

- **A ❌** Les conversions entre types signés et non signés peuvent rendre certaines comparaisons surprenantes.
- **B ❌** En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.
- **C ✅** Une valeur négative est vraie dans une condition C : seule la valeur 0 est fausse.
- **D ❌** Dans une chaîne if / else if / else, seule la première branche dont la condition réussit est exécutée.

**Réponse candidate :** C · **Explication :** La fiche indique : Une valeur négative est vraie dans une condition C : seule la valeur 0 est fausse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/9-0-et-booleens-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_008-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « 0 et booléens C » ?

- **A ✅** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.
- **B ❌** Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.
- **C ❌** Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.
- **D ✅** Une valeur négative est vraie dans une condition C : seule la valeur 0 est fausse.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/9-0-et-booleens-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N05_009 — Boucles imbriquées

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/10-boucles-imbriquees)

### V1-N05_009-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué. » ?

- **A ❌** Itération
- **B ✅** Boucles imbriquées
- **C ❌** < > <= >=
- **D ❌** if / else if / else

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/10-boucles-imbriquees

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_009-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Boucles imbriquées » ?

- **A ✅** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.
- **B ❌** Un passage dans une boucle.
- **C ❌** Choisir une branche selon des conditions.
- **D ❌** Comparaisons.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/10-boucles-imbriquees

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_009-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Boucles imbriquées » ?

- **A ❌** Dans une chaîne if / else if / else, seule la première branche dont la condition réussit est exécutée.
- **B ❌** Une itération est un passage dans le corps ; la valeur de l'indice ne donne pas toujours le nombre de passages.
- **C ❌** Les conversions entre types signés et non signés peuvent rendre certaines comparaisons surprenantes.
- **D ✅** Deux boucles imbriquées de n itérations chacune peuvent effectuer n × n passages, selon leurs bornes.

**Réponse candidate :** D · **Explication :** La fiche indique : Deux boucles imbriquées de n itérations chacune peuvent effectuer n × n passages, selon leurs bornes.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/10-boucles-imbriquees

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N05_009-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Boucles imbriquées » ?

- **A ❌** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.
- **B ✅** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.
- **C ✅** Deux boucles imbriquées de n itérations chacune peuvent effectuer n × n passages, selon leurs bornes.
- **D ❌** Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/10-boucles-imbriquees

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

