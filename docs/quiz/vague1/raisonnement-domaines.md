# Revue de questions — raisonnement domaines

**41 nouvelles questions candidates, non validées.** Les réponses visibles ci-dessous servent exclusivement à la revue des IA ; elles ne sont pas destinées à l'interface du quiz. Les propositions ont été réordonnées de manière déterministe pour éviter qu'une position signale systématiquement la bonne réponse.

## EXPL-00-002-01 — Kernel

**Une seule bonne réponse**

Le noyau Linux gère-t-il directement toutes les interfaces graphiques et applications utilisateur ?

- **A ❌** Oui : tout logiciel graphique fait partie du noyau
- **B ❌** Oui : Git est un module obligatoire du noyau
- **C ❌** Oui : Firefox s'exécute dans le noyau
- **D ✅** Non : il gère notamment ressources matérielles et processus

**Corrigé candidat :** D. Le noyau gère les ressources, mais applications et interfaces utilisateur s'exécutent généralement en espace utilisateur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/bases-informatiques/3-kernel

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-00-003-01 — Linux / Ubuntu

**Plusieurs bonnes réponses**

Quelles affirmations distinguent Linux et Ubuntu ?

- **A ✅** Linux désigne aussi le noyau utilisé par Ubuntu
- **B ✅** Ubuntu est une distribution GNU/Linux
- **C ❌** Ubuntu est un composant matériel
- **D ❌** Toutes les distributions Linux ont forcément la même interface graphique

**Corrigé candidat :** A, B. Linux est le noyau ; Ubuntu fournit un système de distribution et d'autres composants.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/bases-informatiques/4-linux-ubuntu

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-00-004-01 — WSL

**Une seule bonne réponse**

À quoi sert principalement WSL sous Windows ?

- **A ❌** Supprimer les systèmes de fichiers
- **B ✅** Exécuter un environnement Linux sous Windows
- **C ❌** Remplacer physiquement le processeur
- **D ❌** Transformer Git en compilateur C

**Corrigé candidat :** B. WSL permet d'utiliser un environnement Linux sous Windows.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/bases-informatiques/5-wsl

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-01-000-01 — Terminal

**Une seule bonne réponse**

Que distingue le terminal du Shell ?

- **A ❌** Le terminal compile automatiquement les commandes
- **B ❌** Ils désignent toujours le même programme
- **C ✅** Le terminal fournit l'interface d'entrée/sortie ; le Shell interprète les commandes
- **D ❌** Le Shell est nécessairement un périphérique matériel

**Corrigé candidat :** C. Le terminal présente l'interface et le Shell exécute l'interprétation des commandes.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/terminal-et-shell/1-terminal

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-01-003-01 — Script Shell

**Plusieurs bonnes réponses**

Quelles sont des propriétés d'un script Shell ?

- **A ❌** Il modifie toujours le noyau
- **B ❌** Il doit obligatoirement être écrit en C
- **C ✅** Il contient des commandes interprétables par un Shell
- **D ✅** Il peut utiliser variables et conditions

**Corrigé candidat :** C, D. Un script Bash peut combiner commandes et structures de contrôle.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/terminal-et-shell/4-script-shell

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-02-005-01 — pwd / cd / ls

**Une seule bonne réponse**

Si `pwd` affiche `/home/lea` puis `cd /tmp` réussit, que doit afficher `pwd` ?

- **A ✅** /tmp
- **B ❌** ..
- **C ❌** /
- **D ❌** /home/lea

**Corrigé candidat :** A. Le répertoire courant devient /tmp après cd réussi.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/6-pwd-cd-ls

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-02-005-02 — pwd / cd / ls

**Une seule bonne réponse**

Quelle commande remonte exactement au répertoire parent courant ?

- **A ✅** cd ..
- **B ❌** cd /
- **C ❌** cd .
- **D ❌** pwd ..

**Corrigé candidat :** A. .. représente le parent, alors que . est le répertoire courant.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/6-pwd-cd-ls

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-02-007-01 — cp / mv / rm

**Une seule bonne réponse**

Quelle commande réalise une copie de `a.txt` vers `b.txt` sans supprimer `a.txt` ?

- **A ✅** cp a.txt b.txt
- **B ❌** rm a.txt b.txt
- **C ❌** mv a.txt b.txt
- **D ❌** find a.txt b.txt

**Corrigé candidat :** A. cp copie ; mv déplace.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/8-cp-mv-rm

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-03-000-01 — r w x

**Plusieurs bonnes réponses**

Quelles capacités exprime `rwx` pour un répertoire sur un Linux usuel ?

- **A ✅** x autorise la traversée du dossier si les autres permissions le permettent
- **B ✅** r permet d'énumérer les noms d'entrées
- **C ❌** w seule garantit toujours la suppression de fichiers
- **D ❌** x signifie exécuter le répertoire comme un programme binaire

**Corrigé candidat :** A, B. Sur un répertoire, lecture, écriture et traversée ont une sémantique spécifique.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/1-r-w-x

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-03-001-01 — chmod / chown / sudo

**Une seule bonne réponse**

Pourquoi faut-il éviter `sudo` quand il n'est pas nécessaire ?

- **A ✅** Il donne des privilèges élevés et accroît l'impact d'une erreur
- **B ❌** Il remplace toujours chmod
- **C ❌** Il limite le programme à la lecture seule
- **D ❌** Il désactive automatiquement les permissions

**Corrigé candidat :** A. sudo exécute avec des privilèges potentiellement élevés.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/2-chmod-chown-sudo

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-03-002-01 — stdin / stdout / stderr

**Plusieurs bonnes réponses**

Quelles correspondances sont exactes ?

- **A ✅** stderr = 2
- **B ❌** stderr = 1 et stdout = 2
- **C ✅** stdin = 0
- **D ✅** stdout = 1

**Corrigé candidat :** A, C, D. Les descripteurs standard sont 0, 1 et 2.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/3-stdin-stdout-stderr

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-03-003-01 — > et >>

**Une seule bonne réponse**

Quelle différence entre `>` et `>>` avec une redirection stdout vers un fichier existant ?

- **A ❌** `>` ne fonctionne que pour stderr
- **B ❌** `>>` supprime le fichier
- **C ❌** Ils ont toujours le même effet sur un fichier
- **D ✅** `>` tronque habituellement le fichier, `>>` ajoute à la fin

**Corrigé candidat :** D. La distinction est écrasement/troncation contre ajout.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/4-et

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-03-004-01 — 2> et <

**Une seule bonne réponse**

Que signifie `commande < entree.txt` ?

- **A ❌** Les sorties stdout sont ajoutées au fichier
- **B ❌** Les erreurs vont vers le fichier
- **C ✅** Le flux stdin de la commande provient du fichier
- **D ❌** Le programme compile le fichier

**Corrigé candidat :** C. Le symbole < redirige l'entrée standard.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/5-2-et

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-03-005-01 — |

**Une seule bonne réponse**

Pour `printf 'a\nb\n' | grep b`, quelle ligne est sélectionnée ?

- **A ❌** a
- **B ❌** a et b
- **C ✅** b
- **D ❌** aucune

**Corrigé candidat :** C. Le tube transmet la sortie de printf à grep ; grep conserve la ligne contenant b.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/6-

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-03-006-01 — && / || en Shell

**Plusieurs bonnes réponses**

Quelles affirmations sont vraies en Bash ?

- **A ❌** `&&` teste obligatoirement si la sortie texte est non vide
- **B ✅** `commande1 || commande2` peut lancer la seconde si la première échoue
- **C ❌** `&&` et `||` sont des concaténations de chaînes
- **D ✅** `commande1 && commande2` ne lance la seconde que si la première réussit

**Corrigé candidat :** B, D. Les opérateurs utilisent le code de retour.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/7-en-shell

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-03-007-01 — grep / wc -l / tr

**Plusieurs bonnes réponses**

À propos de `wc -l`, quelles affirmations sont correctes ?

- **A ❌** Il donne toujours le nombre de mots
- **B ✅** Il compte les caractères de fin de ligne
- **C ❌** Il compte les fichiers d'un dossier
- **D ✅** Un fichier sans caractère `\n` peut contenir du texte et pourtant donner 0

**Corrigé candidat :** B, D. Une dernière ligne sans saut de ligne n'ajoute pas un caractère `\n`.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/8-grep-wc-l-tr

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-03-008-01 — sort / uniq / cut / head / tail / rev

**Une seule bonne réponse**

Quel effet a `cut -d: -f1` sur des lignes séparées par `:` ?

- **A ❌** Classe les lignes par nombre
- **B ❌** Inverse les caractères
- **C ❌** Remplace tous les deux-points par des espaces
- **D ✅** Sélectionne le premier champ

**Corrigé candidat :** D. cut sélectionne un champ avec un délimiteur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/9-sort-uniq-cut-head-tail-rev

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-03-009-01 — grep -A 3

**Une seule bonne réponse**

Que signifie `grep -A 3 motif fichier` ?

- **A ❌** Afficher uniquement les trois lignes précédentes
- **B ❌** Inverser toutes les lignes
- **C ✅** Afficher les lignes correspondantes et jusqu'à trois lignes suivantes
- **D ❌** Limiter le nombre de résultats à trois

**Corrigé candidat :** C. -A sélectionne le contexte après une correspondance.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/10-grep-a-3

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-03-010-01 — grep -i / -v / -c

**Plusieurs bonnes réponses**

Quelles options de grep sont correctement décrites ?

- **A ✅** -v inverse la sélection des lignes
- **B ❌** -i convertit le fichier en majuscules sur disque
- **C ✅** -i ignore la casse
- **D ✅** -c compte les lignes sélectionnées

**Corrigé candidat :** A, C, D. Ces options modifient recherche, sélection et comptage.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/11-grep-i-v-c

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-03-011-01 — sort / uniq

**Une seule bonne réponse**

Pourquoi écrit-on souvent `sort fichier | uniq` plutôt que `uniq fichier` ?

- **A ❌** uniq trie automatiquement toutes les lignes
- **B ❌** sort supprime les doublons à lui seul
- **C ❌** uniq ne lit pas stdin
- **D ✅** uniq regroupe les doublons adjacents, sort peut les rapprocher

**Corrigé candidat :** D. uniq n'élimine pas les doublons éloignés sans tri préalable.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/12-sort-uniq

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-04-001-01 — Variable Shell

**Une seule bonne réponse**

Dans Bash, `nom=valeur` est-il forcément visible depuis un processus enfant ?

- **A ❌** Oui, toutes les variables Shell sont automatiquement exportées
- **B ❌** Non, les processus enfants n'ont jamais d'environnement
- **C ✅** Non, la variable doit généralement être exportée pour figurer dans l'environnement transmis
- **D ❌** Oui, mais seulement si son nom commence par _

**Corrigé candidat :** C. Une variable Shell non exportée reste dans le Shell courant.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/2-variable-shell

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-04-003-01 — Variable d’environnement

**Plusieurs bonnes réponses**

À propos de `export VAR`, quelles propositions sont correctes ?

- **A ✅** Ne garantit pas la transmission à tous les processus déjà lancés
- **B ❌** Convertit automatiquement VAR en constante C
- **C ❌** Remplace la valeur par 0
- **D ✅** Marque VAR pour transmission aux processus enfants

**Corrigé candidat :** A, D. export agit sur l'environnement des processus lancés ultérieurement.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/4-variable-d-environnement

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-04-005-01 — set / printenv

**Une seule bonne réponse**

Quelle commande permet d'afficher les variables d'environnement d'un processus Shell ?

- **A ❌** chmod
- **B ✅** printenv
- **C ❌** uname -r
- **D ❌** touch

**Corrigé candidat :** B. printenv affiche l'environnement.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/6-set-printenv

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-04-006-01 — alias / unalias

**Une seule bonne réponse**

Qu'est-ce qu'un alias Bash ?

- **A ❌** Un nouveau programme compilé en C
- **B ✅** Un raccourci de substitution de commande défini dans le Shell
- **C ❌** Une branche Git distante
- **D ❌** Une permission Linux

**Corrigé candidat :** B. alias définit une substitution textuelle de nom de commande dans le Shell.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/7-alias-unalias

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-04-009-01 — $VAR / ${VAR}

**Une seule bonne réponse**

Quelle forme évite une ambiguïté quand on veut ajouter `-fin` à la valeur de `$nom` ?

- **A ✅** `${nom}-fin`
- **B ❌** `$nom fin` supprime tous les espaces
- **C ❌** `(nom)-fin`
- **D ❌** `$nom-fin` garantit toujours un nom sans ambiguïté

**Corrigé candidat :** A. Les accolades délimitent explicitement le nom de la variable.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/10-var-var

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-04-010-01 — $(commande)

**Une seule bonne réponse**

Quel type de résultat fournit `$(commande)` en Bash ?

- **A ✅** La sortie standard produite par la commande, avec traitement de fin de ligne
- **B ❌** L'adresse mémoire d'une fonction
- **C ❌** Toujours le code retour
- **D ❌** Le PID du processus parent

**Corrigé candidat :** A. La substitution de commande insère du texte provenant de stdout.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/11-commande

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-04-011-01 — $((...))

**Plusieurs bonnes réponses**

Quelles expressions relèvent de l'arithmétique Bash ?

- **A ❌** `$(echo 2+3)` évalue automatiquement 2+3 comme entier
- **B ✅** `$((8%3))`
- **C ✅** `$((2+3))`
- **D ❌** `$PATH` force un calcul numérique

**Corrigé candidat :** B, C. $((...)) est l'expansion arithmétique.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/12-

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-04-012-01 — $? / $1 / $#

**Une seule bonne réponse**

À quoi correspond `$#` dans un script Bash ?

- **A ❌** Au chemin du Shell
- **B ✅** Au nombre de paramètres positionnels
- **C ❌** Au code retour précédent
- **D ❌** À la taille de PATH

**Corrigé candidat :** B. $# donne le nombre d'arguments positionnels.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/13-1

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-04-013-01 — Découper PATH

**Une seule bonne réponse**

Pour découper PATH en segments, quel caractère sépare habituellement les répertoires sous Linux ?

- **A ❌** |
- **B ❌** ;
- **C ❌** \
- **D ✅** :

**Corrigé candidat :** D. PATH utilise généralement les deux-points comme séparateur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/14-decouper-path

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-05-000-01 — if / else if / else

**Une seule bonne réponse**

Avec `int x=5; if(x>3) ... else ...`, quelle branche est prise ?

- **A ✅** if
- **B ❌** else
- **C ❌** Les deux branches
- **D ❌** Aucune

**Corrigé candidat :** A. La condition compare les deux entiers : 5 est supérieur à 3, donc la branche if est sélectionnée.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/1-if-else-if-else

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-05-001-01 — == / !=

**Une seule bonne réponse**

En C, quelle différence entre `=` et `==` ?

- **A ❌** == ne fonctionne que pour les chaînes
- **B ✅** = affecte, == compare l'égalité
- **C ❌** Ils sont toujours équivalents
- **D ❌** = compare et == affecte

**Corrigé candidat :** B. Ne pas confondre affectation et comparaison.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/2-

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-05-003-01 — && / || / !

**Une seule bonne réponse**

Avec `int a=0,b=1;`, que vaut l'expression logique `a || b` ?

- **A ❌** 2
- **B ❌** 0
- **C ❌** Comportement indéfini
- **D ✅** 1

**Corrigé candidat :** D. L'opérateur logique || donne 1 si au moins un opérande est non nul.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/4-

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-05-008-01 — 0 et booléens C

**Une seule bonne réponse**

Quel est le sens d'une valeur non nulle dans la condition d'un if en C ?

- **A ❌** Erreur de compilation
- **B ❌** Une valeur NULL
- **C ❌** Toujours fausse
- **D ✅** Vraie

**Corrigé candidat :** D. En C, zéro est faux et non-zéro est vrai.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/9-0-et-booleens-c

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-05-008-02 — 0 et booléens C

**Une seule bonne réponse**

Pour `int x=-7;`, comment `if(x)` évalue-t-il la condition ?

- **A ✅** Vraie car -7 est non nul
- **B ❌** Vraie seulement si x vaut 1
- **C ❌** Fausse car x est négatif
- **D ❌** Toujours indéfinie

**Corrigé candidat :** A. Toutes les valeurs scalaires non nulles sont vraies dans un test logique.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/9-0-et-booleens-c

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-06-002-01 — Repository

**Une seule bonne réponse**

Quel élément distingue un dépôt Git de la simple copie d'un dossier source ?

- **A ❌** Une obligation de posséder un compte GitHub
- **B ❌** L'absence de fichiers texte
- **C ✅** Les métadonnées Git avec historique et références
- **D ❌** Un compilateur C embarqué

**Corrigé candidat :** C. Les données .git enregistrent l'historique et les références.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/git-et-github/3-repository

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-06-004-01 — Commit

**Plusieurs bonnes réponses**

Quelles opérations sont réellement séparées dans Git ?

- **A ✅** git commit crée un commit local
- **B ✅** git push publie sur un distant
- **C ❌** git add publie obligatoirement sur GitHub
- **D ✅** git add prépare l'index

**Corrigé candidat :** A, B, D. Index, historique local et distant sont distincts.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/git-et-github/5-commit

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-06-005-01 — Branch / merge

**Une seule bonne réponse**

Supprimer une branche locale après sa fusion efface-t-il nécessairement les commits fusionnés ?

- **A ❌** Oui, tous les changements disparaissent
- **B ❌** Oui, le dépôt entier devient vide
- **C ✅** Non, ils restent accessibles via l'historique de la branche cible
- **D ❌** Oui, GitHub efface automatiquement la PR

**Corrigé candidat :** C. Les commits intégrés au graphe restent référencés par la branche cible.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/git-et-github/6-branch-merge

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-06-006-01 — Pull request

**Une seule bonne réponse**

Que signifie une PR fusionnée dont un ancien check était rouge puis le dernier vert ?

- **A ❌** Le code final est forcément vulnérable
- **B ❌** La fusion annule tout test négatif
- **C ❌** Il faut supprimer l'historique Git
- **D ✅** Les anciennes exécutions restent rouges, mais le dernier état peut avoir corrigé le défaut

**Corrigé candidat :** D. On évalue les checks du commit final, pas seulement une ancienne révision.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/git-et-github/7-pull-request

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-06-007-01 — Conflit de fusion

**Une seule bonne réponse**

Une fusion Git rencontre des modifications concurrentes aux mêmes lignes. Que faut-il vérifier ?

- **A ❌** Le nombre de caractères dans le README
- **B ❌** Aucune vérification, Git choisit toujours seul
- **C ✅** Les choix retenus dans le fichier final
- **D ❌** Uniquement le nom de la branche

**Corrigé candidat :** C. La résolution de conflit nécessite une revue du résultat.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/git-et-github/8-conflit-de-fusion

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-06-009-01 — git push / pull / fetch

**Une seule bonne réponse**

Quelle différence entre `git fetch` et `git pull` dans une configuration habituelle ?

- **A ✅** fetch récupère, pull récupère puis intègre selon la configuration
- **B ❌** fetch fusionne toujours, pull jamais
- **C ❌** les deux suppriment les commits locaux
- **D ❌** aucune : ce sont deux alias complets

**Corrigé candidat :** A. pull combine fetch et une opération d'intégration.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/git-et-github/10-git-push-pull-fetch

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## EXPL-06-010-01 — git clone / log / switch

**Une seule bonne réponse**

Que fait `git clone URL` ?

- **A ❌** Efface le dépôt distant
- **B ❌** Change uniquement le nom de la branche courante
- **C ❌** Envoie automatiquement une PR
- **D ✅** Crée une copie locale d'un dépôt distant

**Corrigé candidat :** D. clone crée un dépôt local à partir du distant.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/git-et-github/11-git-clone-log-switch

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

