# Exercices de raisonnement — Linux, Shell, Bash, C et Git

41 questions candidates rédigées à partir de scénarios et de points techniques. Réponses fournies pour les relecteurs indépendants uniquement ; **ne pas publier avant validation**.

## EXPL-00-002-01 — Kernel

**Une seule bonne réponse**

Le noyau Linux gère-t-il directement toutes les interfaces graphiques et applications utilisateur ?

- **A ✅** Non : il gère notamment ressources matérielles et processus
- **B ❌** Oui : tout logiciel graphique fait partie du noyau
- **C ❌** Oui : Firefox s'exécute dans le noyau
- **D ❌** Oui : Git est un module obligatoire du noyau

**Réponse candidate :** A. Le noyau gère les ressources, mais applications et interfaces utilisateur s'exécutent généralement en espace utilisateur.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/bases-informatiques/3-kernel

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-00-003-01 — Linux / Ubuntu

**Plusieurs bonnes réponses**

Quelles affirmations distinguent Linux et Ubuntu ?

- **A ✅** Linux désigne aussi le noyau utilisé par Ubuntu
- **B ✅** Ubuntu est une distribution GNU/Linux
- **C ❌** Ubuntu est un composant matériel
- **D ❌** Toutes les distributions Linux ont forcément la même interface graphique

**Réponse candidate :** A, B. Linux est le noyau ; Ubuntu fournit un système de distribution et d'autres composants.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/bases-informatiques/4-linux-ubuntu

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-00-004-01 — WSL

**Une seule bonne réponse**

À quoi sert principalement WSL sous Windows ?

- **A ✅** Exécuter un environnement Linux sous Windows
- **B ❌** Remplacer physiquement le processeur
- **C ❌** Transformer Git en compilateur C
- **D ❌** Supprimer les systèmes de fichiers

**Réponse candidate :** A. WSL permet d'utiliser un environnement Linux sous Windows.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/bases-informatiques/5-wsl

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-01-000-01 — Terminal

**Une seule bonne réponse**

Que distingue le terminal du Shell ?

- **A ✅** Le terminal fournit l'interface d'entrée/sortie ; le Shell interprète les commandes
- **B ❌** Le terminal compile automatiquement les commandes
- **C ❌** Le Shell est nécessairement un périphérique matériel
- **D ❌** Ils désignent toujours le même programme

**Réponse candidate :** A. Le terminal présente l'interface et le Shell exécute l'interprétation des commandes.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/terminal-et-shell/1-terminal

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-01-003-01 — Script Shell

**Plusieurs bonnes réponses**

Quelles sont des propriétés d'un script Shell ?

- **A ✅** Il contient des commandes interprétables par un Shell
- **B ✅** Il peut utiliser variables et conditions
- **C ❌** Il doit obligatoirement être écrit en C
- **D ❌** Il modifie toujours le noyau

**Réponse candidate :** A, B. Un script Bash peut combiner commandes et structures de contrôle.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/terminal-et-shell/4-script-shell

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-02-005-01 — pwd / cd / ls

**Une seule bonne réponse**

Si `pwd` affiche `/home/lea` puis `cd /tmp` réussit, que doit afficher `pwd` ?

- **A ✅** /tmp
- **B ❌** /home/lea
- **C ❌** /
- **D ❌** ..

**Réponse candidate :** A. Le répertoire courant devient /tmp après cd réussi.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/6-pwd-cd-ls

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-02-005-02 — pwd / cd / ls

**Une seule bonne réponse**

Quelle commande remonte exactement au répertoire parent courant ?

- **A ✅** cd ..
- **B ❌** cd .
- **C ❌** cd /
- **D ❌** pwd ..

**Réponse candidate :** A. .. représente le parent, alors que . est le répertoire courant.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/6-pwd-cd-ls

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-02-007-01 — cp / mv / rm

**Une seule bonne réponse**

Quelle commande réalise une copie de `a.txt` vers `b.txt` sans supprimer `a.txt` ?

- **A ✅** cp a.txt b.txt
- **B ❌** mv a.txt b.txt
- **C ❌** rm a.txt b.txt
- **D ❌** find a.txt b.txt

**Réponse candidate :** A. cp copie ; mv déplace.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/8-cp-mv-rm

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-03-000-01 — r w x

**Plusieurs bonnes réponses**

Quelles capacités exprime `rwx` pour un répertoire sur un Linux usuel ?

- **A ✅** r permet d'énumérer les noms d'entrées
- **B ✅** x autorise la traversée du dossier si les autres permissions le permettent
- **C ❌** w seule garantit toujours la suppression de fichiers
- **D ❌** x signifie exécuter le répertoire comme un programme binaire

**Réponse candidate :** A, B. Sur un répertoire, lecture, écriture et traversée ont une sémantique spécifique.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/1-r-w-x

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-03-001-01 — chmod / chown / sudo

**Une seule bonne réponse**

Pourquoi faut-il éviter `sudo` quand il n'est pas nécessaire ?

- **A ✅** Il donne des privilèges élevés et accroît l'impact d'une erreur
- **B ❌** Il limite le programme à la lecture seule
- **C ❌** Il désactive automatiquement les permissions
- **D ❌** Il remplace toujours chmod

**Réponse candidate :** A. sudo exécute avec des privilèges potentiellement élevés.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/2-chmod-chown-sudo

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-03-002-01 — stdin / stdout / stderr

**Plusieurs bonnes réponses**

Quelles correspondances sont exactes ?

- **A ✅** stdin = 0
- **B ✅** stdout = 1
- **C ✅** stderr = 2
- **D ❌** stderr = 1 et stdout = 2

**Réponse candidate :** A, B, C. Les descripteurs standard sont 0, 1 et 2.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/3-stdin-stdout-stderr

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-03-003-01 — > et >>

**Une seule bonne réponse**

Quelle différence entre `>` et `>>` avec une redirection stdout vers un fichier existant ?

- **A ✅** `>` tronque habituellement le fichier, `>>` ajoute à la fin
- **B ❌** `>>` supprime le fichier
- **C ❌** `>` ne fonctionne que pour stderr
- **D ❌** Ils ont toujours le même effet sur un fichier

**Réponse candidate :** A. La distinction est écrasement/troncation contre ajout.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/4-et

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-03-004-01 — 2> et <

**Une seule bonne réponse**

Que signifie `commande < entree.txt` ?

- **A ✅** Le flux stdin de la commande provient du fichier
- **B ❌** Les erreurs vont vers le fichier
- **C ❌** Les sorties stdout sont ajoutées au fichier
- **D ❌** Le programme compile le fichier

**Réponse candidate :** A. Le symbole < redirige l'entrée standard.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/5-2-et

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-03-005-01 — |

**Une seule bonne réponse**

Pour `printf 'a\nb\n' | grep b`, quelle ligne est sélectionnée ?

- **A ✅** b
- **B ❌** a
- **C ❌** a et b
- **D ❌** aucune

**Réponse candidate :** A. Le tube transmet la sortie de printf à grep ; grep conserve la ligne contenant b.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/6-

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-03-006-01 — && / || en Shell

**Plusieurs bonnes réponses**

Quelles affirmations sont vraies en Bash ?

- **A ✅** `commande1 && commande2` ne lance la seconde que si la première réussit
- **B ✅** `commande1 || commande2` peut lancer la seconde si la première échoue
- **C ❌** `&&` et `||` sont des concaténations de chaînes
- **D ❌** `&&` teste obligatoirement si la sortie texte est non vide

**Réponse candidate :** A, B. Les opérateurs utilisent le code de retour.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/7-en-shell

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-03-007-01 — grep / wc -l / tr

**Plusieurs bonnes réponses**

À propos de `wc -l`, quelles affirmations sont correctes ?

- **A ✅** Il compte les caractères de fin de ligne
- **B ✅** Un fichier sans caractère `\n` peut contenir du texte et pourtant donner 0
- **C ❌** Il donne toujours le nombre de mots
- **D ❌** Il compte les fichiers d'un dossier

**Réponse candidate :** A, B. Une dernière ligne sans saut de ligne n'ajoute pas un caractère `\n`.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/8-grep-wc-l-tr

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-03-008-01 — sort / uniq / cut / head / tail / rev

**Une seule bonne réponse**

Quel effet a `cut -d: -f1` sur des lignes séparées par `:` ?

- **A ✅** Sélectionne le premier champ
- **B ❌** Remplace tous les deux-points par des espaces
- **C ❌** Inverse les caractères
- **D ❌** Classe les lignes par nombre

**Réponse candidate :** A. cut sélectionne un champ avec un délimiteur.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/9-sort-uniq-cut-head-tail-rev

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-03-009-01 — grep -A 3

**Une seule bonne réponse**

Que signifie `grep -A 3 motif fichier` ?

- **A ✅** Afficher les lignes correspondantes et jusqu'à trois lignes suivantes
- **B ❌** Afficher uniquement les trois lignes précédentes
- **C ❌** Limiter le nombre de résultats à trois
- **D ❌** Inverser toutes les lignes

**Réponse candidate :** A. -A sélectionne le contexte après une correspondance.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/10-grep-a-3

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-03-010-01 — grep -i / -v / -c

**Plusieurs bonnes réponses**

Quelles options de grep sont correctement décrites ?

- **A ✅** -i ignore la casse
- **B ✅** -v inverse la sélection des lignes
- **C ✅** -c compte les lignes sélectionnées
- **D ❌** -i convertit le fichier en majuscules sur disque

**Réponse candidate :** A, B, C. Ces options modifient recherche, sélection et comptage.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/11-grep-i-v-c

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-03-011-01 — sort / uniq

**Une seule bonne réponse**

Pourquoi écrit-on souvent `sort fichier | uniq` plutôt que `uniq fichier` ?

- **A ✅** uniq regroupe les doublons adjacents, sort peut les rapprocher
- **B ❌** uniq trie automatiquement toutes les lignes
- **C ❌** sort supprime les doublons à lui seul
- **D ❌** uniq ne lit pas stdin

**Réponse candidate :** A. uniq n'élimine pas les doublons éloignés sans tri préalable.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/12-sort-uniq

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-04-001-01 — Variable Shell

**Une seule bonne réponse**

Dans Bash, `nom=valeur` est-il forcément visible depuis un processus enfant ?

- **A ✅** Non, la variable doit généralement être exportée pour figurer dans l'environnement transmis
- **B ❌** Oui, toutes les variables Shell sont automatiquement exportées
- **C ❌** Oui, mais seulement si son nom commence par _
- **D ❌** Non, les processus enfants n'ont jamais d'environnement

**Réponse candidate :** A. Une variable Shell non exportée reste dans le Shell courant.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/2-variable-shell

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-04-003-01 — Variable d’environnement

**Plusieurs bonnes réponses**

À propos de `export VAR`, quelles propositions sont correctes ?

- **A ✅** Marque VAR pour transmission aux processus enfants
- **B ✅** Ne garantit pas la transmission à tous les processus déjà lancés
- **C ❌** Convertit automatiquement VAR en constante C
- **D ❌** Remplace la valeur par 0

**Réponse candidate :** A, B. export agit sur l'environnement des processus lancés ultérieurement.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/4-variable-d-environnement

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-04-005-01 — set / printenv

**Une seule bonne réponse**

Quelle commande permet d'afficher les variables d'environnement d'un processus Shell ?

- **A ✅** printenv
- **B ❌** touch
- **C ❌** chmod
- **D ❌** uname -r

**Réponse candidate :** A. printenv affiche l'environnement.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/6-set-printenv

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-04-006-01 — alias / unalias

**Une seule bonne réponse**

Qu'est-ce qu'un alias Bash ?

- **A ✅** Un raccourci de substitution de commande défini dans le Shell
- **B ❌** Un nouveau programme compilé en C
- **C ❌** Une branche Git distante
- **D ❌** Une permission Linux

**Réponse candidate :** A. alias définit une substitution textuelle de nom de commande dans le Shell.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/7-alias-unalias

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-04-009-01 — $VAR / ${VAR}

**Une seule bonne réponse**

Quelle forme évite une ambiguïté quand on veut ajouter `-fin` à la valeur de `$nom` ?

- **A ✅** `${nom}-fin`
- **B ❌** `$nom-fin` garantit toujours un nom sans ambiguïté
- **C ❌** `$nom fin` supprime tous les espaces
- **D ❌** `(nom)-fin`

**Réponse candidate :** A. Les accolades délimitent explicitement le nom de la variable.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/10-var-var

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-04-010-01 — $(commande)

**Une seule bonne réponse**

Quel type de résultat fournit `$(commande)` en Bash ?

- **A ✅** La sortie standard produite par la commande, avec traitement de fin de ligne
- **B ❌** Le PID du processus parent
- **C ❌** Toujours le code retour
- **D ❌** L'adresse mémoire d'une fonction

**Réponse candidate :** A. La substitution de commande insère du texte provenant de stdout.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/11-commande

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-04-011-01 — $((...))

**Plusieurs bonnes réponses**

Quelles expressions relèvent de l'arithmétique Bash ?

- **A ✅** `$((2+3))`
- **B ✅** `$((8%3))`
- **C ❌** `$(echo 2+3)` évalue automatiquement 2+3 comme entier
- **D ❌** `$PATH` force un calcul numérique

**Réponse candidate :** A, B. $((...)) est l'expansion arithmétique.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/12-

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-04-012-01 — $? / $1 / $#

**Une seule bonne réponse**

À quoi correspond `$#` dans un script Bash ?

- **A ✅** Au nombre de paramètres positionnels
- **B ❌** Au code retour précédent
- **C ❌** Au chemin du Shell
- **D ❌** À la taille de PATH

**Réponse candidate :** A. $# donne le nombre d'arguments positionnels.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/13-1

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-04-013-01 — Découper PATH

**Une seule bonne réponse**

Pour découper PATH en segments, quel caractère sépare habituellement les répertoires sous Linux ?

- **A ✅** :
- **B ❌** ;
- **C ❌** \
- **D ❌** |

**Réponse candidate :** A. PATH utilise généralement les deux-points comme séparateur.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/variables-et-bash/14-decouper-path

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-05-000-01 — if / else if / else

**Une seule bonne réponse**

Avec `int x=5; if(x>3) ... else ...`, quelle branche est prise ?

- **A ✅** if
- **B ❌** else
- **C ❌** Les deux branches
- **D ❌** Aucune

**Réponse candidate :** A. 5>3 est vrai.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/1-if-else-if-else

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-05-001-01 — == / !=

**Une seule bonne réponse**

En C, quelle différence entre `=` et `==` ?

- **A ✅** = affecte, == compare l'égalité
- **B ❌** = compare et == affecte
- **C ❌** Ils sont toujours équivalents
- **D ❌** == ne fonctionne que pour les chaînes

**Réponse candidate :** A. Ne pas confondre affectation et comparaison.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/2-

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-05-003-01 — && / || / !

**Une seule bonne réponse**

Avec `int a=0,b=1;`, que vaut l'expression logique `a || b` ?

- **A ✅** 1
- **B ❌** 0
- **C ❌** 2
- **D ❌** Comportement indéfini

**Réponse candidate :** A. L'opérateur logique || donne 1 si au moins un opérande est non nul.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/4-

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-05-008-01 — 0 et booléens C

**Une seule bonne réponse**

Quel est le sens d'une valeur non nulle dans la condition d'un if en C ?

- **A ✅** Vraie
- **B ❌** Toujours fausse
- **C ❌** Erreur de compilation
- **D ❌** Une valeur NULL

**Réponse candidate :** A. En C, zéro est faux et non-zéro est vrai.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/9-0-et-booleens-c

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-05-008-02 — 0 et booléens C

**Une seule bonne réponse**

Pour `int x=-7;`, comment `if(x)` évalue-t-il la condition ?

- **A ✅** Vraie car -7 est non nul
- **B ❌** Fausse car x est négatif
- **C ❌** Toujours indéfinie
- **D ❌** Vraie seulement si x vaut 1

**Réponse candidate :** A. Toutes les valeurs scalaires non nulles sont vraies dans un test logique.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/conditions-et-boucles-c/9-0-et-booleens-c

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-06-002-01 — Repository

**Une seule bonne réponse**

Quel élément distingue un dépôt Git de la simple copie d'un dossier source ?

- **A ✅** Les métadonnées Git avec historique et références
- **B ❌** Une obligation de posséder un compte GitHub
- **C ❌** L'absence de fichiers texte
- **D ❌** Un compilateur C embarqué

**Réponse candidate :** A. Les données .git enregistrent l'historique et les références.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/git-et-github/3-repository

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-06-004-01 — Commit

**Plusieurs bonnes réponses**

Quelles opérations sont réellement séparées dans Git ?

- **A ✅** git add prépare l'index
- **B ✅** git commit crée un commit local
- **C ✅** git push publie sur un distant
- **D ❌** git add publie obligatoirement sur GitHub

**Réponse candidate :** A, B, C. Index, historique local et distant sont distincts.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/git-et-github/5-commit

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-06-005-01 — Branch / merge

**Une seule bonne réponse**

Supprimer une branche locale après sa fusion efface-t-il nécessairement les commits fusionnés ?

- **A ✅** Non, ils restent accessibles via l'historique de la branche cible
- **B ❌** Oui, tous les changements disparaissent
- **C ❌** Oui, GitHub efface automatiquement la PR
- **D ❌** Oui, le dépôt entier devient vide

**Réponse candidate :** A. Les commits intégrés au graphe restent référencés par la branche cible.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/git-et-github/6-branch-merge

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-06-006-01 — Pull request

**Une seule bonne réponse**

Que signifie une PR fusionnée dont un ancien check était rouge puis le dernier vert ?

- **A ✅** Les anciennes exécutions restent rouges, mais le dernier état peut avoir corrigé le défaut
- **B ❌** La fusion annule tout test négatif
- **C ❌** Le code final est forcément vulnérable
- **D ❌** Il faut supprimer l'historique Git

**Réponse candidate :** A. On évalue les checks du commit final, pas seulement une ancienne révision.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/git-et-github/7-pull-request

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-06-007-01 — Conflit de fusion

**Une seule bonne réponse**

Une fusion Git rencontre des modifications concurrentes aux mêmes lignes. Que faut-il vérifier ?

- **A ✅** Les choix retenus dans le fichier final
- **B ❌** Uniquement le nom de la branche
- **C ❌** Le nombre de caractères dans le README
- **D ❌** Aucune vérification, Git choisit toujours seul

**Réponse candidate :** A. La résolution de conflit nécessite une revue du résultat.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/git-et-github/8-conflit-de-fusion

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-06-009-01 — git push / pull / fetch

**Une seule bonne réponse**

Quelle différence entre `git fetch` et `git pull` dans une configuration habituelle ?

- **A ✅** fetch récupère, pull récupère puis intègre selon la configuration
- **B ❌** fetch fusionne toujours, pull jamais
- **C ❌** les deux suppriment les commits locaux
- **D ❌** aucune : ce sont deux alias complets

**Réponse candidate :** A. pull combine fetch et une opération d'intégration.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/git-et-github/10-git-push-pull-fetch

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

## EXPL-06-010-01 — git clone / log / switch

**Une seule bonne réponse**

Que fait `git clone URL` ?

- **A ✅** Crée une copie locale d'un dépôt distant
- **B ❌** Efface le dépôt distant
- **C ❌** Envoie automatiquement une PR
- **D ❌** Change uniquement le nom de la branche courante

**Réponse candidate :** A. clone crée un dépôt local à partir du distant.

**Fiche :** https://revision-hbtn.soleiljaune.be/#cours/git-et-github/11-git-clone-log-switch

**Revue :** ☐ confirmer ☐ rectifier ☐ rejeter

---

