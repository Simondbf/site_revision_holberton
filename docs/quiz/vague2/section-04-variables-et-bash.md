# Première vague — Variables et Bash

**56 questions candidates concernant ce chapitre.** La répartition des réponses a été rééquilibrée pour éviter les biais de position. Ces réponses restent des propositions **non validées sur le fond** ; vérifier chaque distracteur et les sources avant publication.

## N04_000 — Affectation

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/1-affectation)

### V1-N04_000-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « BEST=School : pas d’espaces autour du =. » ?

- **A ✅** Affectation
- **B ❌** export / unset
- **C ❌** $(commande)
- **D ❌** Variable d’environnement

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/1-affectation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_000-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Affectation » ?

- **A ✅** BEST=School : pas d’espaces autour du =.
- **B ❌** Variable exportée et transmise aux processus enfants.
- **C ❌** Exporter une variable / supprimer une variable ou fonction.
- **D ❌** Substitution de commande : récupérer sa sortie.

**Réponse proposée :** A. Le résumé de la fiche indique : BEST=School : pas d’espaces autour du =.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/1-affectation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_000-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Affectation » ?

- **A ❌** export rend visible ; unset supprime. Supprimer une variable ne retire pas rétroactivement la valeur des processus déjà lancés.
- **B ❌** $(commande) récupère stdout en supprimant les sauts de ligne finaux, mais pas forcément ceux du milieu.
- **C ✅** Une affectation Bash n'admet pas d'espaces autour de = dans cette forme.
- **D ❌** export influence l'environnement des futurs processus enfants, jamais celui d'un processus parent déjà lancé.

**Réponse proposée :** C. La fiche indique : Une affectation Bash n'admet pas d'espaces autour de = dans cette forme.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/1-affectation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_000-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Affectation » ?

- **A ❌** strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat.
- **B ✅** BEST=School : pas d’espaces autour du =.
- **C ✅** Une affectation Bash n'admet pas d'espaces autour de = dans cette forme.
- **D ❌** Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/1-affectation

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N04_001 — Variable Shell

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/2-variable-shell)

### V1-N04_001-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Variable définie dans le Shell en cours, non nécessairement exportée. » ?

- **A ✅** Variable Shell
- **B ❌** $? / $1 / $#
- **C ❌** alias / unalias
- **D ❌** Découper PATH

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/2-variable-shell

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_001-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Variable Shell » ?

- **A ❌** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.
- **B ❌** Créer / retirer un raccourci de commande.
- **C ✅** Variable définie dans le Shell en cours, non nécessairement exportée.
- **D ❌** Code retour / premier argument / nombre d’arguments positionnels.

**Réponse proposée :** C. Le résumé de la fiche indique : Variable définie dans le Shell en cours, non nécessairement exportée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/2-variable-shell

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_001-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Variable Shell » ?

- **A ❌** Un alias est surtout pratique en shell interactif ; ce n'est pas un remplacement universel pour une fonction.
- **B ❌** Lis $? immédiatement après la commande concernée : la commande suivante peut le remplacer.
- **C ✅** Une variable du shell non exportée n'est pas transmise automatiquement aux programmes enfants.
- **D ❌** Une entrée vide de PATH peut désigner le répertoire courant : ce comportement peut présenter un risque de sécurité.

**Réponse proposée :** C. La fiche indique : Une variable du shell non exportée n'est pas transmise automatiquement aux programmes enfants.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/2-variable-shell

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_001-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Variable Shell » ?

- **A ❌** free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.
- **B ✅** Variable définie dans le Shell en cours, non nécessairement exportée.
- **C ✅** Une variable du shell non exportée n'est pas transmise automatiquement aux programmes enfants.
- **D ❌** Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/2-variable-shell

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N04_002 — Variable locale

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/3-variable-locale)

### V1-N04_002-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion. » ?

- **A ❌** $VAR / ${VAR}
- **B ❌** PATH
- **C ✅** Variable locale
- **D ❌** Variable Shell

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/3-variable-locale

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_002-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Variable locale » ?

- **A ❌** Lire la valeur / délimiter explicitement le nom.
- **B ❌** Liste des dossiers recherchés pour trouver une commande, séparés par :.
- **C ❌** Variable définie dans le Shell en cours, non nécessairement exportée.
- **D ✅** Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion.

**Réponse proposée :** D. Le résumé de la fiche indique : Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/3-variable-locale

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_002-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Variable locale » ?

- **A ❌** Une variable du shell non exportée n'est pas transmise automatiquement aux programmes enfants.
- **B ✅** Pour l’exercice Holberton BEST=School, une variable du shell non exportée suffit. La commande local est différente et s’utilise uniquement dans une fonction Bash.
- **C ❌** Les dossiers de PATH sont parcourus dans l'ordre. Ajouter un dossier ne crée aucun exécutable.
- **D ❌** ${VAR} évite d'inclure par erreur le suffixe dans le nom ; les guillemets protègent le résultat.

**Réponse proposée :** B. La fiche indique : Pour l’exercice Holberton BEST=School, une variable du shell non exportée suffit. La commande local est différente et s’utilise uniquement dans une fonction Bash.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/3-variable-locale

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_002-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Variable locale » ?

- **A ✅** Pour l’exercice Holberton BEST=School, une variable du shell non exportée suffit. La commande local est différente et s’utilise uniquement dans une fonction Bash.
- **B ✅** Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion.
- **C ❌** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.
- **D ❌** Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/3-variable-locale

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N04_003 — Variable d’environnement

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/4-variable-d-environnement)

### V1-N04_003-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Variable exportée et transmise aux processus enfants. » ?

- **A ❌** export / unset
- **B ❌** set / printenv
- **C ✅** Variable d’environnement
- **D ❌** $((...))

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/4-variable-d-environnement

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_003-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Variable d’environnement » ?

- **A ❌** Exporter une variable / supprimer une variable ou fonction.
- **B ✅** Variable exportée et transmise aux processus enfants.
- **C ❌** Évaluation arithmétique.
- **D ❌** Paramètres et variables du Shell / environnement.

**Réponse proposée :** B. Le résumé de la fiche indique : Variable exportée et transmise aux processus enfants.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/4-variable-d-environnement

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_003-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Variable d’environnement » ?

- **A ❌** printenv examine l'environnement ; set affiche aussi la configuration du shell et d'autres éléments.
- **B ✅** export influence l'environnement des futurs processus enfants, jamais celui d'un processus parent déjà lancé.
- **C ❌** $((...)) calcule avec des entiers ; elle ne fournit pas directement une arithmétique décimale.
- **D ❌** export rend visible ; unset supprime. Supprimer une variable ne retire pas rétroactivement la valeur des processus déjà lancés.

**Réponse proposée :** B. La fiche indique : export influence l'environnement des futurs processus enfants, jamais celui d'un processus parent déjà lancé.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/4-variable-d-environnement

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_003-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Variable d’environnement » ?

- **A ✅** export influence l'environnement des futurs processus enfants, jamais celui d'un processus parent déjà lancé.
- **B ❌** Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30};
- **C ❌** Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.
- **D ✅** Variable exportée et transmise aux processus enfants.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/4-variable-d-environnement

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N04_004 — export / unset

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/5-export-unset)

### V1-N04_004-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Exporter une variable / supprimer une variable ou fonction. » ?

- **A ❌** source / .
- **B ❌** Découper PATH
- **C ✅** export / unset
- **D ❌** Affectation

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/5-export-unset

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_004-02 — description

**Une seule bonne réponse**

Quelle description caractérise « export / unset » ?

- **A ❌** BEST=School : pas d’espaces autour du =.
- **B ✅** Exporter une variable / supprimer une variable ou fonction.
- **C ❌** Exécuter un script dans le Shell courant.
- **D ❌** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.

**Réponse proposée :** B. Le résumé de la fiche indique : Exporter une variable / supprimer une variable ou fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/5-export-unset

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_004-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « export / unset » ?

- **A ❌** source exécute dans le shell courant : ne charge que des fichiers dont tu comprends et acceptes le contenu.
- **B ❌** Une entrée vide de PATH peut désigner le répertoire courant : ce comportement peut présenter un risque de sécurité.
- **C ✅** export rend visible ; unset supprime. Supprimer une variable ne retire pas rétroactivement la valeur des processus déjà lancés.
- **D ❌** Une affectation Bash n'admet pas d'espaces autour de = dans cette forme.

**Réponse proposée :** C. La fiche indique : export rend visible ; unset supprime. Supprimer une variable ne retire pas rétroactivement la valeur des processus déjà lancés.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/5-export-unset

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_004-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « export / unset » ?

- **A ✅** export rend visible ; unset supprime. Supprimer une variable ne retire pas rétroactivement la valeur des processus déjà lancés.
- **B ✅** Exporter une variable / supprimer une variable ou fonction.
- **C ❌** Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.
- **D ❌** \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/5-export-unset

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N04_005 — set / printenv

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/6-set-printenv)

### V1-N04_005-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Paramètres et variables du Shell / environnement. » ?

- **A ✅** set / printenv
- **B ❌** $VAR / ${VAR}
- **C ❌** $(commande)
- **D ❌** Variable locale

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/6-set-printenv

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_005-02 — description

**Une seule bonne réponse**

Quelle description caractérise « set / printenv » ?

- **A ❌** Substitution de commande : récupérer sa sortie.
- **B ❌** Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion.
- **C ✅** Paramètres et variables du Shell / environnement.
- **D ❌** Lire la valeur / délimiter explicitement le nom.

**Réponse proposée :** C. Le résumé de la fiche indique : Paramètres et variables du Shell / environnement.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/6-set-printenv

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_005-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « set / printenv » ?

- **A ❌** $(commande) récupère stdout en supprimant les sauts de ligne finaux, mais pas forcément ceux du milieu.
- **B ❌** Pour l’exercice Holberton BEST=School, une variable du shell non exportée suffit. La commande local est différente et s’utilise uniquement dans une fonction Bash.
- **C ❌** ${VAR} évite d'inclure par erreur le suffixe dans le nom ; les guillemets protègent le résultat.
- **D ✅** printenv examine l'environnement ; set affiche aussi la configuration du shell et d'autres éléments.

**Réponse proposée :** D. La fiche indique : printenv examine l'environnement ; set affiche aussi la configuration du shell et d'autres éléments.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/6-set-printenv

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_005-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « set / printenv » ?

- **A ✅** Paramètres et variables du Shell / environnement.
- **B ❌** Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1.
- **C ❌** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.
- **D ✅** printenv examine l'environnement ; set affiche aussi la configuration du shell et d'autres éléments.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/6-set-printenv

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N04_006 — alias / unalias

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/7-alias-unalias)

### V1-N04_006-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Créer / retirer un raccourci de commande. » ?

- **A ❌** export / unset
- **B ✅** alias / unalias
- **C ❌** $? / $1 / $#
- **D ❌** set / printenv

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/7-alias-unalias

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_006-02 — description

**Une seule bonne réponse**

Quelle description caractérise « alias / unalias » ?

- **A ❌** Code retour / premier argument / nombre d’arguments positionnels.
- **B ❌** Exporter une variable / supprimer une variable ou fonction.
- **C ❌** Paramètres et variables du Shell / environnement.
- **D ✅** Créer / retirer un raccourci de commande.

**Réponse proposée :** D. Le résumé de la fiche indique : Créer / retirer un raccourci de commande.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/7-alias-unalias

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_006-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « alias / unalias » ?

- **A ❌** Lis $? immédiatement après la commande concernée : la commande suivante peut le remplacer.
- **B ❌** printenv examine l'environnement ; set affiche aussi la configuration du shell et d'autres éléments.
- **C ✅** Un alias est surtout pratique en shell interactif ; ce n'est pas un remplacement universel pour une fonction.
- **D ❌** export rend visible ; unset supprime. Supprimer une variable ne retire pas rétroactivement la valeur des processus déjà lancés.

**Réponse proposée :** C. La fiche indique : Un alias est surtout pratique en shell interactif ; ce n'est pas un remplacement universel pour une fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/7-alias-unalias

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_006-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « alias / unalias » ?

- **A ❌** Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.
- **B ✅** Un alias est surtout pratique en shell interactif ; ce n'est pas un remplacement universel pour une fonction.
- **C ✅** Créer / retirer un raccourci de commande.
- **D ❌** Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/7-alias-unalias

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N04_007 — source / .

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/8-source)

### V1-N04_007-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Exécuter un script dans le Shell courant. » ?

- **A ❌** PATH
- **B ✅** source / .
- **C ❌** Affectation
- **D ❌** Variable Shell

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/8-source

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_007-02 — description

**Une seule bonne réponse**

Quelle description caractérise « source / . » ?

- **A ✅** Exécuter un script dans le Shell courant.
- **B ❌** BEST=School : pas d’espaces autour du =.
- **C ❌** Variable définie dans le Shell en cours, non nécessairement exportée.
- **D ❌** Liste des dossiers recherchés pour trouver une commande, séparés par :.

**Réponse proposée :** A. Le résumé de la fiche indique : Exécuter un script dans le Shell courant.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/8-source

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_007-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « source / . » ?

- **A ❌** Une affectation Bash n'admet pas d'espaces autour de = dans cette forme.
- **B ❌** Les dossiers de PATH sont parcourus dans l'ordre. Ajouter un dossier ne crée aucun exécutable.
- **C ❌** Une variable du shell non exportée n'est pas transmise automatiquement aux programmes enfants.
- **D ✅** source exécute dans le shell courant : ne charge que des fichiers dont tu comprends et acceptes le contenu.

**Réponse proposée :** D. La fiche indique : source exécute dans le shell courant : ne charge que des fichiers dont tu comprends et acceptes le contenu.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/8-source

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_007-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « source / . » ?

- **A ✅** source exécute dans le shell courant : ne charge que des fichiers dont tu comprends et acceptes le contenu.
- **B ❌** Pour un tableau a, a[2] désigne le même élément que *(a + 2).
- **C ✅** Exécuter un script dans le Shell courant.
- **D ❌** Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/8-source

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N04_008 — PATH

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/9-path)

### V1-N04_008-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Liste des dossiers recherchés pour trouver une commande, séparés par :. » ?

- **A ❌** $(commande)
- **B ❌** Variable d’environnement
- **C ❌** $((...))
- **D ✅** PATH

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/9-path

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_008-02 — description

**Une seule bonne réponse**

Quelle description caractérise « PATH » ?

- **A ❌** Évaluation arithmétique.
- **B ❌** Variable exportée et transmise aux processus enfants.
- **C ❌** Substitution de commande : récupérer sa sortie.
- **D ✅** Liste des dossiers recherchés pour trouver une commande, séparés par :.

**Réponse proposée :** D. Le résumé de la fiche indique : Liste des dossiers recherchés pour trouver une commande, séparés par :.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/9-path

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_008-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « PATH » ?

- **A ❌** $(commande) récupère stdout en supprimant les sauts de ligne finaux, mais pas forcément ceux du milieu.
- **B ✅** Les dossiers de PATH sont parcourus dans l'ordre. Ajouter un dossier ne crée aucun exécutable.
- **C ❌** export influence l'environnement des futurs processus enfants, jamais celui d'un processus parent déjà lancé.
- **D ❌** $((...)) calcule avec des entiers ; elle ne fournit pas directement une arithmétique décimale.

**Réponse proposée :** B. La fiche indique : Les dossiers de PATH sont parcourus dans l'ordre. Ajouter un dossier ne crée aucun exécutable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/9-path

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_008-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « PATH » ?

- **A ❌** sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur.
- **B ❌** Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme.
- **C ✅** Liste des dossiers recherchés pour trouver une commande, séparés par :.
- **D ✅** Les dossiers de PATH sont parcourus dans l'ordre. Ajouter un dossier ne crée aucun exécutable.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/9-path

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N04_009 — $VAR / ${VAR}

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/10-var-var)

### V1-N04_009-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Lire la valeur / délimiter explicitement le nom. » ?

- **A ✅** $VAR / ${VAR}
- **B ❌** Découper PATH
- **C ❌** alias / unalias
- **D ❌** set / printenv

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/10-var-var

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_009-02 — description

**Une seule bonne réponse**

Quelle description caractérise « $VAR / ${VAR} » ?

- **A ❌** Créer / retirer un raccourci de commande.
- **B ❌** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.
- **C ❌** Paramètres et variables du Shell / environnement.
- **D ✅** Lire la valeur / délimiter explicitement le nom.

**Réponse proposée :** D. Le résumé de la fiche indique : Lire la valeur / délimiter explicitement le nom.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/10-var-var

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_009-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « $VAR / ${VAR} » ?

- **A ❌** Un alias est surtout pratique en shell interactif ; ce n'est pas un remplacement universel pour une fonction.
- **B ✅** ${VAR} évite d'inclure par erreur le suffixe dans le nom ; les guillemets protègent le résultat.
- **C ❌** Une entrée vide de PATH peut désigner le répertoire courant : ce comportement peut présenter un risque de sécurité.
- **D ❌** printenv examine l'environnement ; set affiche aussi la configuration du shell et d'autres éléments.

**Réponse proposée :** B. La fiche indique : ${VAR} évite d'inclure par erreur le suffixe dans le nom ; les guillemets protègent le résultat.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/10-var-var

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_009-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « $VAR / ${VAR} » ?

- **A ✅** ${VAR} évite d'inclure par erreur le suffixe dans le nom ; les guillemets protègent le résultat.
- **B ✅** Lire la valeur / délimiter explicitement le nom.
- **C ❌** int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.
- **D ❌** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/10-var-var

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N04_010 — $(commande)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/11-commande)

### V1-N04_010-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Substitution de commande : récupérer sa sortie. » ?

- **A ✅** $(commande)
- **B ❌** PATH
- **C ❌** Variable locale
- **D ❌** Variable Shell

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/11-commande

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_010-02 — description

**Une seule bonne réponse**

Quelle description caractérise « $(commande) » ?

- **A ❌** Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion.
- **B ❌** Liste des dossiers recherchés pour trouver une commande, séparés par :.
- **C ❌** Variable définie dans le Shell en cours, non nécessairement exportée.
- **D ✅** Substitution de commande : récupérer sa sortie.

**Réponse proposée :** D. Le résumé de la fiche indique : Substitution de commande : récupérer sa sortie.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/11-commande

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_010-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « $(commande) » ?

- **A ✅** $(commande) récupère stdout en supprimant les sauts de ligne finaux, mais pas forcément ceux du milieu.
- **B ❌** Pour l’exercice Holberton BEST=School, une variable du shell non exportée suffit. La commande local est différente et s’utilise uniquement dans une fonction Bash.
- **C ❌** Les dossiers de PATH sont parcourus dans l'ordre. Ajouter un dossier ne crée aucun exécutable.
- **D ❌** Une variable du shell non exportée n'est pas transmise automatiquement aux programmes enfants.

**Réponse proposée :** A. La fiche indique : $(commande) récupère stdout en supprimant les sauts de ligne finaux, mais pas forcément ceux du milieu.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/11-commande

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_010-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « $(commande) » ?

- **A ❌** En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale.
- **B ❌** *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement.
- **C ✅** $(commande) récupère stdout en supprimant les sauts de ligne finaux, mais pas forcément ceux du milieu.
- **D ✅** Substitution de commande : récupérer sa sortie.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/11-commande

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N04_011 — $((...))

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/12-)

### V1-N04_011-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Évaluation arithmétique. » ?

- **A ✅** $((...))
- **B ❌** export / unset
- **C ❌** $? / $1 / $#
- **D ❌** $(commande)

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/12-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_011-02 — description

**Une seule bonne réponse**

Quelle description caractérise « $((...)) » ?

- **A ❌** Exporter une variable / supprimer une variable ou fonction.
- **B ✅** Évaluation arithmétique.
- **C ❌** Substitution de commande : récupérer sa sortie.
- **D ❌** Code retour / premier argument / nombre d’arguments positionnels.

**Réponse proposée :** B. Le résumé de la fiche indique : Évaluation arithmétique.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/12-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_011-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « $((...)) » ?

- **A ❌** export rend visible ; unset supprime. Supprimer une variable ne retire pas rétroactivement la valeur des processus déjà lancés.
- **B ❌** $(commande) récupère stdout en supprimant les sauts de ligne finaux, mais pas forcément ceux du milieu.
- **C ❌** Lis $? immédiatement après la commande concernée : la commande suivante peut le remplacer.
- **D ✅** $((...)) calcule avec des entiers ; elle ne fournit pas directement une arithmétique décimale.

**Réponse proposée :** D. La fiche indique : $((...)) calcule avec des entiers ; elle ne fournit pas directement une arithmétique décimale.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/12-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_011-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « $((...)) » ?

- **A ❌** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).
- **B ✅** Évaluation arithmétique.
- **C ❌** Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse.
- **D ✅** $((...)) calcule avec des entiers ; elle ne fournit pas directement une arithmétique décimale.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/12-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N04_012 — $? / $1 / $#

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/13-1)

### V1-N04_012-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Code retour / premier argument / nombre d’arguments positionnels. » ?

- **A ❌** alias / unalias
- **B ❌** Affectation
- **C ✅** $? / $1 / $#
- **D ❌** source / .

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/13-1

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_012-02 — description

**Une seule bonne réponse**

Quelle description caractérise « $? / $1 / $# » ?

- **A ❌** BEST=School : pas d’espaces autour du =.
- **B ✅** Code retour / premier argument / nombre d’arguments positionnels.
- **C ❌** Exécuter un script dans le Shell courant.
- **D ❌** Créer / retirer un raccourci de commande.

**Réponse proposée :** B. Le résumé de la fiche indique : Code retour / premier argument / nombre d’arguments positionnels.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/13-1

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_012-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « $? / $1 / $# » ?

- **A ❌** source exécute dans le shell courant : ne charge que des fichiers dont tu comprends et acceptes le contenu.
- **B ❌** Un alias est surtout pratique en shell interactif ; ce n'est pas un remplacement universel pour une fonction.
- **C ❌** Une affectation Bash n'admet pas d'espaces autour de = dans cette forme.
- **D ✅** Lis $? immédiatement après la commande concernée : la commande suivante peut le remplacer.

**Réponse proposée :** D. La fiche indique : Lis $? immédiatement après la commande concernée : la commande suivante peut le remplacer.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/13-1

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_012-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « $? / $1 / $# » ?

- **A ❌** Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.
- **B ❌** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.
- **C ✅** Code retour / premier argument / nombre d’arguments positionnels.
- **D ✅** Lis $? immédiatement après la commande concernée : la commande suivante peut le remplacer.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/13-1

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N04_013 — Découper PATH

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/14-decouper-path)

### V1-N04_013-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément. » ?

- **A ❌** Variable locale
- **B ❌** $VAR / ${VAR}
- **C ❌** Variable d’environnement
- **D ✅** Découper PATH

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/14-decouper-path

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_013-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Découper PATH » ?

- **A ❌** Variable exportée et transmise aux processus enfants.
- **B ❌** Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion.
- **C ✅** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.
- **D ❌** Lire la valeur / délimiter explicitement le nom.

**Réponse proposée :** C. Le résumé de la fiche indique : tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/14-decouper-path

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_013-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Découper PATH » ?

- **A ❌** Pour l’exercice Holberton BEST=School, une variable du shell non exportée suffit. La commande local est différente et s’utilise uniquement dans une fonction Bash.
- **B ❌** export influence l'environnement des futurs processus enfants, jamais celui d'un processus parent déjà lancé.
- **C ✅** Une entrée vide de PATH peut désigner le répertoire courant : ce comportement peut présenter un risque de sécurité.
- **D ❌** ${VAR} évite d'inclure par erreur le suffixe dans le nom ; les guillemets protègent le résultat.

**Réponse proposée :** C. La fiche indique : Une entrée vide de PATH peut désigner le répertoire courant : ce comportement peut présenter un risque de sécurité.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/14-decouper-path

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N04_013-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Découper PATH » ?

- **A ✅** Une entrée vide de PATH peut désigner le répertoire courant : ce comportement peut présenter un risque de sécurité.
- **B ✅** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.
- **C ❌** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.
- **D ❌** fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/14-decouper-path

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

