# Banque de revue — Variables et Bash

56 questions candidates couvrant 14 notions. **Toutes les réponses sont des propositions à vérifier indépendamment** ; elles sont dérivées des fiches existantes et peuvent contenir des distracteurs ambigus. **Ne rien publier sur le site.**

## N04_000 — Affectation

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/1-affectation)

### V1-N04_000-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « BEST=School : pas d’espaces autour du =. » ?

- **A ❌** $(commande)
- **B ❌** export / unset
- **C ❌** Variable d’environnement
- **D ✅** Affectation

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/1-affectation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_000-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Affectation » ?

- **A ❌** Substitution de commande : récupérer sa sortie.
- **B ❌** Variable exportée et transmise aux processus enfants.
- **C ✅** BEST=School : pas d’espaces autour du =.
- **D ❌** Exporter une variable / supprimer une variable ou fonction.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : BEST=School : pas d’espaces autour du =.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/1-affectation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_000-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Affectation » ?

- **A ❌** export rend visible ; unset supprime. Supprimer une variable ne retire pas rétroactivement la valeur des processus déjà lancés.
- **B ✅** Une affectation Bash n'admet pas d'espaces autour de = dans cette forme.
- **C ❌** export influence l'environnement des futurs processus enfants, jamais celui d'un processus parent déjà lancé.
- **D ❌** $(commande) récupère stdout en supprimant les sauts de ligne finaux, mais pas forcément ceux du milieu.

**Réponse candidate :** B · **Explication :** La fiche indique : Une affectation Bash n'admet pas d'espaces autour de = dans cette forme.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/1-affectation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_000-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Affectation » ?

- **A ❌** Une allocation peut échouer : contrôler le pointeur avant toute lecture ou écriture dans le bloc demandé.
- **B ❌** strdup(src) alloue une nouvelle chaîne et la copie ; il faut vérifier NULL puis appeler free sur le résultat.
- **C ✅** Une affectation Bash n'admet pas d'espaces autour de = dans cette forme.
- **D ✅** BEST=School : pas d’espaces autour du =.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/1-affectation

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N04_001 — Variable Shell

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/2-variable-shell)

### V1-N04_001-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Variable définie dans le Shell en cours, non nécessairement exportée. » ?

- **A ✅** Variable Shell
- **B ❌** alias / unalias
- **C ❌** Découper PATH
- **D ❌** $? / $1 / $#

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/2-variable-shell

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_001-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Variable Shell » ?

- **A ❌** Code retour / premier argument / nombre d’arguments positionnels.
- **B ❌** Créer / retirer un raccourci de commande.
- **C ❌** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.
- **D ✅** Variable définie dans le Shell en cours, non nécessairement exportée.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Variable définie dans le Shell en cours, non nécessairement exportée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/2-variable-shell

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_001-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Variable Shell » ?

- **A ✅** Une variable du shell non exportée n'est pas transmise automatiquement aux programmes enfants.
- **B ❌** Lis $? immédiatement après la commande concernée : la commande suivante peut le remplacer.
- **C ❌** Un alias est surtout pratique en shell interactif ; ce n'est pas un remplacement universel pour une fonction.
- **D ❌** Une entrée vide de PATH peut désigner le répertoire courant : ce comportement peut présenter un risque de sécurité.

**Réponse candidate :** A · **Explication :** La fiche indique : Une variable du shell non exportée n'est pas transmise automatiquement aux programmes enfants.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/2-variable-shell

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_001-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Variable Shell » ?

- **A ✅** Variable définie dans le Shell en cours, non nécessairement exportée.
- **B ❌** Pour réserver 10 int, utilise malloc(10 * sizeof(int)) ou malloc(10 * sizeof *p) : le calcul dépend du type, pas de l’architecture 64 bits.
- **C ❌** free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.
- **D ✅** Une variable du shell non exportée n'est pas transmise automatiquement aux programmes enfants.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/2-variable-shell

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N04_002 — Variable locale

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/3-variable-locale)

### V1-N04_002-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion. » ?

- **A ❌** PATH
- **B ✅** Variable locale
- **C ❌** $VAR / ${VAR}
- **D ❌** Variable Shell

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/3-variable-locale

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_002-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Variable locale » ?

- **A ✅** Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion.
- **B ❌** Variable définie dans le Shell en cours, non nécessairement exportée.
- **C ❌** Lire la valeur / délimiter explicitement le nom.
- **D ❌** Liste des dossiers recherchés pour trouver une commande, séparés par :.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/3-variable-locale

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_002-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Variable locale » ?

- **A ❌** Les dossiers de PATH sont parcourus dans l'ordre. Ajouter un dossier ne crée aucun exécutable.
- **B ❌** ${VAR} évite d'inclure par erreur le suffixe dans le nom ; les guillemets protègent le résultat.
- **C ❌** Une variable du shell non exportée n'est pas transmise automatiquement aux programmes enfants.
- **D ✅** Pour l’exercice Holberton BEST=School, une variable du shell non exportée suffit. La commande local est différente et s’utilise uniquement dans une fonction Bash.

**Réponse candidate :** D · **Explication :** La fiche indique : Pour l’exercice Holberton BEST=School, une variable du shell non exportée suffit. La commande local est différente et s’utilise uniquement dans une fonction Bash.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/3-variable-locale

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_002-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Variable locale » ?

- **A ✅** Pour l’exercice Holberton BEST=School, une variable du shell non exportée suffit. La commande local est différente et s’utilise uniquement dans une fonction Bash.
- **B ❌** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.
- **C ✅** Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion.
- **D ❌** Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/3-variable-locale

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N04_003 — Variable d’environnement

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/4-variable-d-environnement)

### V1-N04_003-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Variable exportée et transmise aux processus enfants. » ?

- **A ✅** Variable d’environnement
- **B ❌** export / unset
- **C ❌** $((...))
- **D ❌** set / printenv

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/4-variable-d-environnement

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_003-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Variable d’environnement » ?

- **A ❌** Paramètres et variables du Shell / environnement.
- **B ✅** Variable exportée et transmise aux processus enfants.
- **C ❌** Exporter une variable / supprimer une variable ou fonction.
- **D ❌** Évaluation arithmétique.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Variable exportée et transmise aux processus enfants.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/4-variable-d-environnement

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_003-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Variable d’environnement » ?

- **A ❌** $((...)) calcule avec des entiers ; elle ne fournit pas directement une arithmétique décimale.
- **B ❌** printenv examine l'environnement ; set affiche aussi la configuration du shell et d'autres éléments.
- **C ✅** export influence l'environnement des futurs processus enfants, jamais celui d'un processus parent déjà lancé.
- **D ❌** export rend visible ; unset supprime. Supprimer une variable ne retire pas rétroactivement la valeur des processus déjà lancés.

**Réponse candidate :** C · **Explication :** La fiche indique : export influence l'environnement des futurs processus enfants, jamais celui d'un processus parent déjà lancé.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/4-variable-d-environnement

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_003-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Variable d’environnement » ?

- **A ❌** Un tableau peut recevoir des valeurs dès sa création : int nombres[3] = {10, 20, 30};
- **B ✅** export influence l'environnement des futurs processus enfants, jamais celui d'un processus parent déjà lancé.
- **C ✅** Variable exportée et transmise aux processus enfants.
- **D ❌** Les variables locales et les tableaux locaux ordinaires ont une durée de vie liée à l’exécution de leur bloc ; on ne les libère pas avec free.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/4-variable-d-environnement

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N04_004 — export / unset

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/5-export-unset)

### V1-N04_004-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Exporter une variable / supprimer une variable ou fonction. » ?

- **A ❌** Découper PATH
- **B ❌** source / .
- **C ❌** Affectation
- **D ✅** export / unset

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/5-export-unset

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_004-02 · description

**Une seule bonne réponse**

Quelle description caractérise « export / unset » ?

- **A ✅** Exporter une variable / supprimer une variable ou fonction.
- **B ❌** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.
- **C ❌** Exécuter un script dans le Shell courant.
- **D ❌** BEST=School : pas d’espaces autour du =.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Exporter une variable / supprimer une variable ou fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/5-export-unset

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_004-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « export / unset » ?

- **A ❌** Une affectation Bash n'admet pas d'espaces autour de = dans cette forme.
- **B ✅** export rend visible ; unset supprime. Supprimer une variable ne retire pas rétroactivement la valeur des processus déjà lancés.
- **C ❌** Une entrée vide de PATH peut désigner le répertoire courant : ce comportement peut présenter un risque de sécurité.
- **D ❌** source exécute dans le shell courant : ne charge que des fichiers dont tu comprends et acceptes le contenu.

**Réponse candidate :** B · **Explication :** La fiche indique : export rend visible ; unset supprime. Supprimer une variable ne retire pas rétroactivement la valeur des processus déjà lancés.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/5-export-unset

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_004-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « export / unset » ?

- **A ❌** \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.
- **B ❌** Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.
- **C ✅** export rend visible ; unset supprime. Supprimer une variable ne retire pas rétroactivement la valeur des processus déjà lancés.
- **D ✅** Exporter une variable / supprimer une variable ou fonction.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/5-export-unset

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N04_005 — set / printenv

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/6-set-printenv)

### V1-N04_005-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Paramètres et variables du Shell / environnement. » ?

- **A ✅** set / printenv
- **B ❌** Variable locale
- **C ❌** $(commande)
- **D ❌** $VAR / ${VAR}

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/6-set-printenv

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_005-02 · description

**Une seule bonne réponse**

Quelle description caractérise « set / printenv » ?

- **A ❌** Lire la valeur / délimiter explicitement le nom.
- **B ❌** Substitution de commande : récupérer sa sortie.
- **C ❌** Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion.
- **D ✅** Paramètres et variables du Shell / environnement.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Paramètres et variables du Shell / environnement.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/6-set-printenv

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_005-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « set / printenv » ?

- **A ✅** printenv examine l'environnement ; set affiche aussi la configuration du shell et d'autres éléments.
- **B ❌** Pour l’exercice Holberton BEST=School, une variable du shell non exportée suffit. La commande local est différente et s’utilise uniquement dans une fonction Bash.
- **C ❌** ${VAR} évite d'inclure par erreur le suffixe dans le nom ; les guillemets protègent le résultat.
- **D ❌** $(commande) récupère stdout en supprimant les sauts de ligne finaux, mais pas forcément ceux du milieu.

**Réponse candidate :** A · **Explication :** La fiche indique : printenv examine l'environnement ; set affiche aussi la configuration du shell et d'autres éléments.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/6-set-printenv

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_005-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « set / printenv » ?

- **A ✅** Paramètres et variables du Shell / environnement.
- **B ❌** Ajouter 1 à un pointeur vers int avance de sizeof(int) octets, donc d’un élément int.
- **C ❌** Une boucle peut visiter chaque élément d'un tableau en utilisant un indice qui va de 0 à la taille moins 1.
- **D ✅** printenv examine l'environnement ; set affiche aussi la configuration du shell et d'autres éléments.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/6-set-printenv

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N04_006 — alias / unalias

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/7-alias-unalias)

### V1-N04_006-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Créer / retirer un raccourci de commande. » ?

- **A ❌** set / printenv
- **B ✅** alias / unalias
- **C ❌** export / unset
- **D ❌** $? / $1 / $#

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/7-alias-unalias

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_006-02 · description

**Une seule bonne réponse**

Quelle description caractérise « alias / unalias » ?

- **A ❌** Code retour / premier argument / nombre d’arguments positionnels.
- **B ❌** Paramètres et variables du Shell / environnement.
- **C ✅** Créer / retirer un raccourci de commande.
- **D ❌** Exporter une variable / supprimer une variable ou fonction.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Créer / retirer un raccourci de commande.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/7-alias-unalias

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_006-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « alias / unalias » ?

- **A ❌** export rend visible ; unset supprime. Supprimer une variable ne retire pas rétroactivement la valeur des processus déjà lancés.
- **B ❌** printenv examine l'environnement ; set affiche aussi la configuration du shell et d'autres éléments.
- **C ❌** Lis $? immédiatement après la commande concernée : la commande suivante peut le remplacer.
- **D ✅** Un alias est surtout pratique en shell interactif ; ce n'est pas un remplacement universel pour une fonction.

**Réponse candidate :** D · **Explication :** La fiche indique : Un alias est surtout pratique en shell interactif ; ce n'est pas un remplacement universel pour une fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/7-alias-unalias

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_006-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « alias / unalias » ?

- **A ✅** Un alias est surtout pratique en shell interactif ; ce n'est pas un remplacement universel pour une fonction.
- **B ✅** Créer / retirer un raccourci de commande.
- **C ❌** Le format %s affiche les caractères d’une chaîne jusqu’au caractère nul de fin.
- **D ❌** Dans la plupart des expressions, le nom du tableau est converti en pointeur vers son premier élément. Ainsi a et &a[0] désignent la même adresse.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/7-alias-unalias

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N04_007 — source / .

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/8-source)

### V1-N04_007-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Exécuter un script dans le Shell courant. » ?

- **A ✅** source / .
- **B ❌** Affectation
- **C ❌** PATH
- **D ❌** Variable Shell

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/8-source

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_007-02 · description

**Une seule bonne réponse**

Quelle description caractérise « source / . » ?

- **A ❌** BEST=School : pas d’espaces autour du =.
- **B ❌** Variable définie dans le Shell en cours, non nécessairement exportée.
- **C ✅** Exécuter un script dans le Shell courant.
- **D ❌** Liste des dossiers recherchés pour trouver une commande, séparés par :.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Exécuter un script dans le Shell courant.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/8-source

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_007-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « source / . » ?

- **A ✅** source exécute dans le shell courant : ne charge que des fichiers dont tu comprends et acceptes le contenu.
- **B ❌** Une variable du shell non exportée n'est pas transmise automatiquement aux programmes enfants.
- **C ❌** Les dossiers de PATH sont parcourus dans l'ordre. Ajouter un dossier ne crée aucun exécutable.
- **D ❌** Une affectation Bash n'admet pas d'espaces autour de = dans cette forme.

**Réponse candidate :** A · **Explication :** La fiche indique : source exécute dans le shell courant : ne charge que des fichiers dont tu comprends et acceptes le contenu.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/8-source

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_007-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « source / . » ?

- **A ✅** Exécuter un script dans le Shell courant.
- **B ✅** source exécute dans le shell courant : ne charge que des fichiers dont tu comprends et acceptes le contenu.
- **C ❌** Zone contiguë de mémoire contenant plusieurs éléments de même type : int a[5]; réserve 5 entiers.
- **D ❌** Pour un tableau a, a[2] désigne le même élément que *(a + 2).

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/8-source

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N04_008 — PATH

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/9-path)

### V1-N04_008-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Liste des dossiers recherchés pour trouver une commande, séparés par :. » ?

- **A ❌** $(commande)
- **B ❌** $((...))
- **C ❌** Variable d’environnement
- **D ✅** PATH

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/9-path

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_008-02 · description

**Une seule bonne réponse**

Quelle description caractérise « PATH » ?

- **A ✅** Liste des dossiers recherchés pour trouver une commande, séparés par :.
- **B ❌** Variable exportée et transmise aux processus enfants.
- **C ❌** Substitution de commande : récupérer sa sortie.
- **D ❌** Évaluation arithmétique.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Liste des dossiers recherchés pour trouver une commande, séparés par :.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/9-path

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_008-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « PATH » ?

- **A ❌** $(commande) récupère stdout en supprimant les sauts de ligne finaux, mais pas forcément ceux du milieu.
- **B ❌** $((...)) calcule avec des entiers ; elle ne fournit pas directement une arithmétique décimale.
- **C ✅** Les dossiers de PATH sont parcourus dans l'ordre. Ajouter un dossier ne crée aucun exécutable.
- **D ❌** export influence l'environnement des futurs processus enfants, jamais celui d'un processus parent déjà lancé.

**Réponse candidate :** C · **Explication :** La fiche indique : Les dossiers de PATH sont parcourus dans l'ordre. Ajouter un dossier ne crée aucun exécutable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/9-path

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_008-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « PATH » ?

- **A ✅** Les dossiers de PATH sont parcourus dans l'ordre. Ajouter un dossier ne crée aucun exécutable.
- **B ❌** Sur de nombreux Linux 64 bits, un pointeur d’objet occupe 8 octets ; sa taille dépend de la plateforme.
- **C ❌** sizeof(a) donne la taille de tout le tableau (nombre d’éléments × taille d’un élément), pas celle d’un pointeur.
- **D ✅** Liste des dossiers recherchés pour trouver une commande, séparés par :.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/9-path

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N04_009 — $VAR / ${VAR}

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/10-var-var)

### V1-N04_009-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Lire la valeur / délimiter explicitement le nom. » ?

- **A ❌** Découper PATH
- **B ❌** alias / unalias
- **C ✅** $VAR / ${VAR}
- **D ❌** set / printenv

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/10-var-var

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_009-02 · description

**Une seule bonne réponse**

Quelle description caractérise « $VAR / ${VAR} » ?

- **A ❌** Paramètres et variables du Shell / environnement.
- **B ❌** Créer / retirer un raccourci de commande.
- **C ❌** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.
- **D ✅** Lire la valeur / délimiter explicitement le nom.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Lire la valeur / délimiter explicitement le nom.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/10-var-var

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_009-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « $VAR / ${VAR} » ?

- **A ❌** Une entrée vide de PATH peut désigner le répertoire courant : ce comportement peut présenter un risque de sécurité.
- **B ❌** printenv examine l'environnement ; set affiche aussi la configuration du shell et d'autres éléments.
- **C ✅** ${VAR} évite d'inclure par erreur le suffixe dans le nom ; les guillemets protègent le résultat.
- **D ❌** Un alias est surtout pratique en shell interactif ; ce n'est pas un remplacement universel pour une fonction.

**Réponse candidate :** C · **Explication :** La fiche indique : ${VAR} évite d'inclure par erreur le suffixe dans le nom ; les guillemets protègent le résultat.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/10-var-var

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_009-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « $VAR / ${VAR} » ?

- **A ✅** Lire la valeur / délimiter explicitement le nom.
- **B ❌** int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.
- **C ❌** Les indices commencent à 0 : a[0] est le premier élément et a[4] le cinquième dans int a[5].
- **D ✅** ${VAR} évite d'inclure par erreur le suffixe dans le nom ; les guillemets protègent le résultat.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/10-var-var

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N04_010 — $(commande)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/11-commande)

### V1-N04_010-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Substitution de commande : récupérer sa sortie. » ?

- **A ❌** Variable Shell
- **B ❌** Variable locale
- **C ✅** $(commande)
- **D ❌** PATH

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/11-commande

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_010-02 · description

**Une seule bonne réponse**

Quelle description caractérise « $(commande) » ?

- **A ✅** Substitution de commande : récupérer sa sortie.
- **B ❌** Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion.
- **C ❌** Liste des dossiers recherchés pour trouver une commande, séparés par :.
- **D ❌** Variable définie dans le Shell en cours, non nécessairement exportée.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Substitution de commande : récupérer sa sortie.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/11-commande

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_010-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « $(commande) » ?

- **A ❌** Les dossiers de PATH sont parcourus dans l'ordre. Ajouter un dossier ne crée aucun exécutable.
- **B ❌** Pour l’exercice Holberton BEST=School, une variable du shell non exportée suffit. La commande local est différente et s’utilise uniquement dans une fonction Bash.
- **C ❌** Une variable du shell non exportée n'est pas transmise automatiquement aux programmes enfants.
- **D ✅** $(commande) récupère stdout en supprimant les sauts de ligne finaux, mais pas forcément ceux du milieu.

**Réponse candidate :** D · **Explication :** La fiche indique : $(commande) récupère stdout en supprimant les sauts de ligne finaux, mais pas forcément ceux du milieu.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/11-commande

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_010-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « $(commande) » ?

- **A ❌** En C, un paramètre reçoit une copie de l’argument. Modifier un paramètre int local ne modifie pas la variable initiale.
- **B ✅** Substitution de commande : récupérer sa sortie.
- **C ✅** $(commande) récupère stdout en supprimant les sauts de ligne finaux, mais pas forcément ceux du milieu.
- **D ❌** *p accède à l’objet situé à l’adresse contenue dans p : c’est le déréférencement.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/11-commande

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N04_011 — $((...))

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/12-)

### V1-N04_011-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Évaluation arithmétique. » ?

- **A ✅** $((...))
- **B ❌** export / unset
- **C ❌** $(commande)
- **D ❌** $? / $1 / $#

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/12-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_011-02 · description

**Une seule bonne réponse**

Quelle description caractérise « $((...)) » ?

- **A ❌** Substitution de commande : récupérer sa sortie.
- **B ❌** Code retour / premier argument / nombre d’arguments positionnels.
- **C ✅** Évaluation arithmétique.
- **D ❌** Exporter une variable / supprimer une variable ou fonction.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Évaluation arithmétique.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/12-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_011-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « $((...)) » ?

- **A ✅** $((...)) calcule avec des entiers ; elle ne fournit pas directement une arithmétique décimale.
- **B ❌** Lis $? immédiatement après la commande concernée : la commande suivante peut le remplacer.
- **C ❌** export rend visible ; unset supprime. Supprimer une variable ne retire pas rétroactivement la valeur des processus déjà lancés.
- **D ❌** $(commande) récupère stdout en supprimant les sauts de ligne finaux, mais pas forcément ceux du milieu.

**Réponse candidate :** A · **Explication :** La fiche indique : $((...)) calcule avec des entiers ; elle ne fournit pas directement une arithmétique décimale.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/12-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_011-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « $((...)) » ?

- **A ✅** Évaluation arithmétique.
- **B ✅** $((...)) calcule avec des entiers ; elle ne fournit pas directement une arithmétique décimale.
- **C ❌** Emplacement où une variable est stockée. On ne choisit généralement pas soi-même son adresse.
- **D ❌** Le spécificateur %p permet d’afficher une adresse ; l’argument correspondant doit être un void * (conversion explicite recommandée).

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/12-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N04_012 — $? / $1 / $#

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/13-1)

### V1-N04_012-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Code retour / premier argument / nombre d’arguments positionnels. » ?

- **A ❌** alias / unalias
- **B ❌** source / .
- **C ❌** Affectation
- **D ✅** $? / $1 / $#

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/13-1

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_012-02 · description

**Une seule bonne réponse**

Quelle description caractérise « $? / $1 / $# » ?

- **A ❌** BEST=School : pas d’espaces autour du =.
- **B ❌** Créer / retirer un raccourci de commande.
- **C ✅** Code retour / premier argument / nombre d’arguments positionnels.
- **D ❌** Exécuter un script dans le Shell courant.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Code retour / premier argument / nombre d’arguments positionnels.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/13-1

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_012-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « $? / $1 / $# » ?

- **A ❌** Un alias est surtout pratique en shell interactif ; ce n'est pas un remplacement universel pour une fonction.
- **B ✅** Lis $? immédiatement après la commande concernée : la commande suivante peut le remplacer.
- **C ❌** source exécute dans le shell courant : ne charge que des fichiers dont tu comprends et acceptes le contenu.
- **D ❌** Une affectation Bash n'admet pas d'espaces autour de = dans cette forme.

**Réponse candidate :** B · **Explication :** La fiche indique : Lis $? immédiatement après la commande concernée : la commande suivante peut le remplacer.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/13-1

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_012-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « $? / $1 / $# » ?

- **A ✅** Lis $? immédiatement après la commande concernée : la commande suivante peut le remplacer.
- **B ❌** Si p = &n, alors *p = 402; modifie n, qui prend la valeur 402.
- **C ❌** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.
- **D ✅** Code retour / premier argument / nombre d’arguments positionnels.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/13-1

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N04_013 — Découper PATH

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/14-decouper-path)

### V1-N04_013-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément. » ?

- **A ✅** Découper PATH
- **B ❌** Variable d’environnement
- **C ❌** $VAR / ${VAR}
- **D ❌** Variable locale

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/14-decouper-path

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_013-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Découper PATH » ?

- **A ❌** Lire la valeur / délimiter explicitement le nom.
- **B ❌** Variable exportée et transmise aux processus enfants.
- **C ❌** Dans une fonction Bash, local limite la portée d’une variable. Une variable du shell non exportée est une autre notion.
- **D ✅** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/14-decouper-path

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_013-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Découper PATH » ?

- **A ❌** ${VAR} évite d'inclure par erreur le suffixe dans le nom ; les guillemets protègent le résultat.
- **B ❌** Pour l’exercice Holberton BEST=School, une variable du shell non exportée suffit. La commande local est différente et s’utilise uniquement dans une fonction Bash.
- **C ✅** Une entrée vide de PATH peut désigner le répertoire courant : ce comportement peut présenter un risque de sécurité.
- **D ❌** export influence l'environnement des futurs processus enfants, jamais celui d'un processus parent déjà lancé.

**Réponse candidate :** C · **Explication :** La fiche indique : Une entrée vide de PATH peut désigner le répertoire courant : ce comportement peut présenter un risque de sécurité.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/14-decouper-path

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N04_013-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Découper PATH » ?

- **A ❌** fgets lit au plus taille - 1 caractères, ajoute '\0' et peut conserver le saut de ligne ; toujours vérifier son retour.
- **B ❌** &n produit l’adresse de la variable n ; p = &n fait pointer p vers n.
- **C ✅** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.
- **D ✅** Une entrée vide de PATH peut désigner le répertoire courant : ce comportement peut présenter un risque de sécurité.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/14-decouper-path

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

