# Première vague — Conditions et boucles C

**40 questions candidates concernant ce chapitre.** La répartition des réponses a été rééquilibrée pour éviter les biais de position. Ces réponses restent des propositions **non validées sur le fond** ; vérifier chaque distracteur et les sources avant publication.

## N05_000 — if / else if / else

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/1-if-else-if-else)

### V1-N05_000-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Choisir une branche selon des conditions. » ?

- **A ❌** && / || / !
- **B ✅** if / else if / else
- **C ❌** 0 et booléens C
- **D ❌** == / !=

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/1-if-else-if-else

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_000-02 — description

**Une seule bonne réponse**

Quelle description caractérise « if / else if / else » ?

- **A ❌** ET logique / OU logique / négation.
- **B ❌** Égalité / différence. Attention à ne pas confondre = et ==.
- **C ❌** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.
- **D ✅** Choisir une branche selon des conditions.

**Réponse proposée :** D. Le résumé de la fiche indique : Choisir une branche selon des conditions.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/1-if-else-if-else

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_000-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « if / else if / else » ?

- **A ❌** && et || sont à évaluation courte : la deuxième expression n'est pas toujours évaluée.
- **B ❌** Une valeur négative est vraie dans une condition C : seule la valeur 0 est fausse.
- **C ✅** Dans une chaîne if / else if / else, seule la première branche dont la condition réussit est exécutée.
- **D ❌** « = » affecte une valeur ; « == » teste l'égalité. Les confondre peut créer une erreur difficile à voir.

**Réponse proposée :** C. La fiche indique : Dans une chaîne if / else if / else, seule la première branche dont la condition réussit est exécutée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/1-if-else-if-else

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_000-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « if / else if / else » ?

- **A ✅** Choisir une branche selon des conditions.
- **B ❌** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.
- **C ✅** Dans une chaîne if / else if / else, seule la première branche dont la condition réussit est exécutée.
- **D ❌** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/1-if-else-if-else

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N05_001 — == / !=

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/2-)

### V1-N05_001-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Égalité / différence. Attention à ne pas confondre = et ==. » ?

- **A ✅** == / !=
- **B ❌** if / else if / else
- **C ❌** 0 et booléens C
- **D ❌** do…while

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/2-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_001-02 — description

**Une seule bonne réponse**

Quelle description caractérise « == / != » ?

- **A ❌** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.
- **B ✅** Égalité / différence. Attention à ne pas confondre = et ==.
- **C ❌** Choisir une branche selon des conditions.
- **D ❌** Teste après exécution : le corps tourne au moins une fois.

**Réponse proposée :** B. Le résumé de la fiche indique : Égalité / différence. Attention à ne pas confondre = et ==.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/2-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_001-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « == / != » ?

- **A ❌** Une valeur négative est vraie dans une condition C : seule la valeur 0 est fausse.
- **B ❌** do...while exécute toujours son corps au moins une fois avant le test.
- **C ✅** « = » affecte une valeur ; « == » teste l'égalité. Les confondre peut créer une erreur difficile à voir.
- **D ❌** Dans une chaîne if / else if / else, seule la première branche dont la condition réussit est exécutée.

**Réponse proposée :** C. La fiche indique : « = » affecte une valeur ; « == » teste l'égalité. Les confondre peut créer une erreur difficile à voir.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/2-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_001-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « == / != » ?

- **A ✅** Égalité / différence. Attention à ne pas confondre = et ==.
- **B ✅** « = » affecte une valeur ; « == » teste l'égalité. Les confondre peut créer une erreur difficile à voir.
- **C ❌** Une fonction recevant int *p peut modifier la variable de l’appelant grâce à *p ; le pointeur lui-même reste passé par valeur.
- **D ❌** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/2-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N05_002 — < > <= >=

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/3-)

### V1-N05_002-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Comparaisons. » ?

- **A ❌** for
- **B ✅** < > <= >=
- **C ❌** 0 et booléens C
- **D ❌** do…while

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/3-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_002-02 — description

**Une seule bonne réponse**

Quelle description caractérise « < > <= >= » ?

- **A ❌** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.
- **B ❌** Initialisation, test, mise à jour ; forme compacte de boucle.
- **C ✅** Comparaisons.
- **D ❌** Teste après exécution : le corps tourne au moins une fois.

**Réponse proposée :** C. Le résumé de la fiche indique : Comparaisons.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/3-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_002-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « < > <= >= » ?

- **A ❌** do...while exécute toujours son corps au moins une fois avant le test.
- **B ✅** Les conversions entre types signés et non signés peuvent rendre certaines comparaisons surprenantes.
- **C ❌** En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.
- **D ❌** Une valeur négative est vraie dans une condition C : seule la valeur 0 est fausse.

**Réponse proposée :** B. La fiche indique : Les conversions entre types signés et non signés peuvent rendre certaines comparaisons surprenantes.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/3-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_002-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « < > <= >= » ?

- **A ✅** Comparaisons.
- **B ❌** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.
- **C ✅** Les conversions entre types signés et non signés peuvent rendre certaines comparaisons surprenantes.
- **D ❌** Dans main, 0 indique une réussite ; dans une autre fonction, 0 et 1 ont le sens défini par cette fonction.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/3-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N05_003 — && / || / !

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/4-)

### V1-N05_003-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « ET logique / OU logique / négation. » ?

- **A ❌** == / !=
- **B ❌** do…while
- **C ❌** for
- **D ✅** && / || / !

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/4-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_003-02 — description

**Une seule bonne réponse**

Quelle description caractérise « && / || / ! » ?

- **A ❌** Teste après exécution : le corps tourne au moins une fois.
- **B ❌** Initialisation, test, mise à jour ; forme compacte de boucle.
- **C ❌** Égalité / différence. Attention à ne pas confondre = et ==.
- **D ✅** ET logique / OU logique / négation.

**Réponse proposée :** D. Le résumé de la fiche indique : ET logique / OU logique / négation.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/4-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_003-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « && / || / ! » ?

- **A ❌** En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.
- **B ❌** do...while exécute toujours son corps au moins une fois avant le test.
- **C ❌** « = » affecte une valeur ; « == » teste l'égalité. Les confondre peut créer une erreur difficile à voir.
- **D ✅** && et || sont à évaluation courte : la deuxième expression n'est pas toujours évaluée.

**Réponse proposée :** D. La fiche indique : && et || sont à évaluation courte : la deuxième expression n'est pas toujours évaluée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/4-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_003-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « && / || / ! » ?

- **A ✅** && et || sont à évaluation courte : la deuxième expression n'est pas toujours évaluée.
- **B ❌** Affichage formaté / écriture d’un caractère.
- **C ❌** État / préparation / enregistrement.
- **D ✅** ET logique / OU logique / négation.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/4-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N05_004 — for

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/5-for)

### V1-N05_004-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Initialisation, test, mise à jour ; forme compacte de boucle. » ?

- **A ❌** Boucles imbriquées
- **B ❌** == / !=
- **C ❌** && / || / !
- **D ✅** for

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/5-for

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_004-02 — description

**Une seule bonne réponse**

Quelle description caractérise « for » ?

- **A ❌** Égalité / différence. Attention à ne pas confondre = et ==.
- **B ❌** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.
- **C ❌** ET logique / OU logique / négation.
- **D ✅** Initialisation, test, mise à jour ; forme compacte de boucle.

**Réponse proposée :** D. Le résumé de la fiche indique : Initialisation, test, mise à jour ; forme compacte de boucle.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/5-for

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_004-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « for » ?

- **A ❌** Deux boucles imbriquées de n itérations chacune peuvent effectuer n × n passages, selon leurs bornes.
- **B ❌** && et || sont à évaluation courte : la deuxième expression n'est pas toujours évaluée.
- **C ✅** En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.
- **D ❌** « = » affecte une valeur ; « == » teste l'égalité. Les confondre peut créer une erreur difficile à voir.

**Réponse proposée :** C. La fiche indique : En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/5-for

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_004-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « for » ?

- **A ❌** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **B ✅** En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.
- **C ❌** Créer / retirer un raccourci de commande.
- **D ✅** Initialisation, test, mise à jour ; forme compacte de boucle.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/5-for

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N05_005 — while

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/6-while)

### V1-N05_005-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Teste sa condition avant chaque itération. » ?

- **A ❌** Boucles imbriquées
- **B ❌** == / !=
- **C ❌** Itération
- **D ✅** while

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/6-while

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_005-02 — description

**Une seule bonne réponse**

Quelle description caractérise « while » ?

- **A ❌** Égalité / différence. Attention à ne pas confondre = et ==.
- **B ❌** Un passage dans une boucle.
- **C ✅** Teste sa condition avant chaque itération.
- **D ❌** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.

**Réponse proposée :** C. Le résumé de la fiche indique : Teste sa condition avant chaque itération.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/6-while

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_005-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « while » ?

- **A ❌** Deux boucles imbriquées de n itérations chacune peuvent effectuer n × n passages, selon leurs bornes.
- **B ❌** Une itération est un passage dans le corps ; la valeur de l'indice ne donne pas toujours le nombre de passages.
- **C ❌** « = » affecte une valeur ; « == » teste l'égalité. Les confondre peut créer une erreur difficile à voir.
- **D ✅** Si la condition est fausse d'emblée, while n'exécute aucune itération.

**Réponse proposée :** D. La fiche indique : Si la condition est fausse d'emblée, while n'exécute aucune itération.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/6-while

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_005-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « while » ?

- **A ✅** Si la condition est fausse d'emblée, while n'exécute aucune itération.
- **B ✅** Teste sa condition avant chaque itération.
- **C ❌** Programme qui interprète les commandes et lance les autres programmes.
- **D ❌** Dépend du répertoire actuel.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/6-while

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N05_006 — do…while

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/7-do-while)

### V1-N05_006-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Teste après exécution : le corps tourne au moins une fois. » ?

- **A ✅** do…while
- **B ❌** Itération
- **C ❌** Boucles imbriquées
- **D ❌** for

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/7-do-while

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_006-02 — description

**Une seule bonne réponse**

Quelle description caractérise « do…while » ?

- **A ✅** Teste après exécution : le corps tourne au moins une fois.
- **B ❌** Initialisation, test, mise à jour ; forme compacte de boucle.
- **C ❌** Un passage dans une boucle.
- **D ❌** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.

**Réponse proposée :** A. Le résumé de la fiche indique : Teste après exécution : le corps tourne au moins une fois.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/7-do-while

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_006-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « do…while » ?

- **A ❌** Deux boucles imbriquées de n itérations chacune peuvent effectuer n × n passages, selon leurs bornes.
- **B ❌** En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.
- **C ✅** do...while exécute toujours son corps au moins une fois avant le test.
- **D ❌** Une itération est un passage dans le corps ; la valeur de l'indice ne donne pas toujours le nombre de passages.

**Réponse proposée :** C. La fiche indique : do...while exécute toujours son corps au moins une fois avant le test.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/7-do-while

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_006-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « do…while » ?

- **A ❌** Depuis C99, { .age = 7, .id = 3 } permet de choisir les membres par leur nom.
- **B ✅** Teste après exécution : le corps tourne au moins une fois.
- **C ✅** do...while exécute toujours son corps au moins une fois avant le test.
- **D ❌** typedef struct animal { int age; } animal_t; rend le type utilisable sous le nom animal_t.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/7-do-while

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N05_007 — Itération

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/8-iteration)

### V1-N05_007-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un passage dans une boucle. » ?

- **A ❌** < > <= >=
- **B ✅** Itération
- **C ❌** for
- **D ❌** do…while

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/8-iteration

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_007-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Itération » ?

- **A ❌** Teste après exécution : le corps tourne au moins une fois.
- **B ❌** Comparaisons.
- **C ❌** Initialisation, test, mise à jour ; forme compacte de boucle.
- **D ✅** Un passage dans une boucle.

**Réponse proposée :** D. Le résumé de la fiche indique : Un passage dans une boucle.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/8-iteration

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_007-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Itération » ?

- **A ❌** Les conversions entre types signés et non signés peuvent rendre certaines comparaisons surprenantes.
- **B ✅** Une itération est un passage dans le corps ; la valeur de l'indice ne donne pas toujours le nombre de passages.
- **C ❌** En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.
- **D ❌** do...while exécute toujours son corps au moins une fois avant le test.

**Réponse proposée :** B. La fiche indique : Une itération est un passage dans le corps ; la valeur de l'indice ne donne pas toujours le nombre de passages.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/8-iteration

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_007-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Itération » ?

- **A ❌** Affiche 876543210 si on affiche i dans le corps.
- **B ✅** Un passage dans une boucle.
- **C ✅** Une itération est un passage dans le corps ; la valeur de l'indice ne donne pas toujours le nombre de passages.
- **D ❌** Résultat entier : 1.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/8-iteration

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N05_008 — 0 et booléens C

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/9-0-et-booleens-c)

### V1-N05_008-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « 0 est faux ; toute valeur différente de 0 est vraie dans une condition. » ?

- **A ✅** 0 et booléens C
- **B ❌** if / else if / else
- **C ❌** for
- **D ❌** < > <= >=

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/9-0-et-booleens-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_008-02 — description

**Une seule bonne réponse**

Quelle description caractérise « 0 et booléens C » ?

- **A ❌** Comparaisons.
- **B ✅** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.
- **C ❌** Initialisation, test, mise à jour ; forme compacte de boucle.
- **D ❌** Choisir une branche selon des conditions.

**Réponse proposée :** B. Le résumé de la fiche indique : 0 est faux ; toute valeur différente de 0 est vraie dans une condition.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/9-0-et-booleens-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_008-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « 0 et booléens C » ?

- **A ✅** Une valeur négative est vraie dans une condition C : seule la valeur 0 est fausse.
- **B ❌** Les conversions entre types signés et non signés peuvent rendre certaines comparaisons surprenantes.
- **C ❌** Dans une chaîne if / else if / else, seule la première branche dont la condition réussit est exécutée.
- **D ❌** En GNU89, déclare l'indice avant le for ; la déclaration « for (int i = ...) » est de style C99 ou plus récent.

**Réponse proposée :** A. La fiche indique : Une valeur négative est vraie dans une condition C : seule la valeur 0 est fausse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/9-0-et-booleens-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_008-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « 0 et booléens C » ?

- **A ❌** Un dangling pointer désigne un pointeur dont l'objet pointé n'est plus valide, notamment après free ou à la fin de vie d'une variable locale.
- **B ❌** Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.
- **C ✅** 0 est faux ; toute valeur différente de 0 est vraie dans une condition.
- **D ✅** Une valeur négative est vraie dans une condition C : seule la valeur 0 est fausse.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/9-0-et-booleens-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N05_009 — Boucles imbriquées

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/10-boucles-imbriquees)

### V1-N05_009-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué. » ?

- **A ❌** Itération
- **B ✅** Boucles imbriquées
- **C ❌** < > <= >=
- **D ❌** if / else if / else

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/10-boucles-imbriquees

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_009-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Boucles imbriquées » ?

- **A ❌** Un passage dans une boucle.
- **B ❌** Choisir une branche selon des conditions.
- **C ✅** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.
- **D ❌** Comparaisons.

**Réponse proposée :** C. Le résumé de la fiche indique : Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/10-boucles-imbriquees

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_009-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Boucles imbriquées » ?

- **A ❌** Dans une chaîne if / else if / else, seule la première branche dont la condition réussit est exécutée.
- **B ❌** Les conversions entre types signés et non signés peuvent rendre certaines comparaisons surprenantes.
- **C ✅** Deux boucles imbriquées de n itérations chacune peuvent effectuer n × n passages, selon leurs bornes.
- **D ❌** Une itération est un passage dans le corps ; la valeur de l'indice ne donne pas toujours le nombre de passages.

**Réponse proposée :** C. La fiche indique : Deux boucles imbriquées de n itérations chacune peuvent effectuer n × n passages, selon leurs bornes.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/10-boucles-imbriquees

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N05_009-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Boucles imbriquées » ?

- **A ✅** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.
- **B ❌** Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.
- **C ❌** strlen("Best School") vaut 11 ; sizeof("Best School") vaut 12 : une copie de cette chaîne demande 12 octets, car il faut aussi stocker '\0'.
- **D ✅** Deux boucles imbriquées de n itérations chacune peuvent effectuer n × n passages, selon leurs bornes.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/10-boucles-imbriquees

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

