# Première vague — Permissions et flux

**48 questions candidates concernant ce chapitre.** La répartition des réponses a été rééquilibrée pour éviter les biais de position. Ces réponses restent des propositions **non validées sur le fond** ; vérifier chaque distracteur et les sources avant publication.

## N03_000 — r w x

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/1-r-w-x)

### V1-N03_000-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1). » ?

- **A ✅** r w x
- **B ❌** sort / uniq
- **C ❌** grep / wc -l / tr
- **D ❌** 2> et <

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/1-r-w-x

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_000-02 — description

**Une seule bonne réponse**

Quelle description caractérise « r w x » ?

- **A ❌** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **B ❌** Rechercher / compter les lignes / transformer des caractères.
- **C ✅** r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).
- **D ❌** Rediriger les erreurs / prendre un fichier comme entrée.

**Réponse proposée :** C. Le résumé de la fiche indique : r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/1-r-w-x

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_000-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « r w x » ?

- **A ❌** « 2> » concerne les erreurs ; « < » fournit une entrée. On peut combiner ces redirections.
- **B ❌** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.
- **C ❌** Pour supprimer les doublons non adjacents, on utilise souvent sort | uniq ; l'ordre initial est alors perdu.
- **D ✅** Le nombre 754 est en notation octale (base 8) : 7 pour le propriétaire, 5 pour le groupe, 4 pour les autres. Chaque chiffre représente trois bits de permissions ; ce n’est pas un nombre d’octets. Sur un répertoire, l’effet de r, w et x diffère de celui d’un fichier.

**Réponse proposée :** D. La fiche indique : Le nombre 754 est en notation octale (base 8) : 7 pour le propriétaire, 5 pour le groupe, 4 pour les autres. Chaque chiffre représente trois bits de permissions ; ce n’est pas un nombre d’octets. Sur un répertoire, l’effet de r, w et x diffère de celui d’un fichier.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/1-r-w-x

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_000-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « r w x » ?

- **A ❌** Un prototype annonce une signature ; la définition contient le corps de la fonction.
- **B ✅** Le nombre 754 est en notation octale (base 8) : 7 pour le propriétaire, 5 pour le groupe, 4 pour les autres. Chaque chiffre représente trois bits de permissions ; ce n’est pas un nombre d’octets. Sur un répertoire, l’effet de r, w et x diffère de celui d’un fichier.
- **C ✅** r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).
- **D ❌** Branche de développement / fusion.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/1-r-w-x

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N03_001 — chmod / chown / sudo

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/2-chmod-chown-sudo)

### V1-N03_001-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Changer les permissions / propriétaire / utiliser des privilèges élevés. » ?

- **A ❌** grep / wc -l / tr
- **B ✅** chmod / chown / sudo
- **C ❌** > et >>
- **D ❌** sort / uniq

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/2-chmod-chown-sudo

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_001-02 — description

**Une seule bonne réponse**

Quelle description caractérise « chmod / chown / sudo » ?

- **A ❌** Écraser un fichier avec la sortie / ajouter à la fin.
- **B ✅** Changer les permissions / propriétaire / utiliser des privilèges élevés.
- **C ❌** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **D ❌** Rechercher / compter les lignes / transformer des caractères.

**Réponse proposée :** B. Le résumé de la fiche indique : Changer les permissions / propriétaire / utiliser des privilèges élevés.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/2-chmod-chown-sudo

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_001-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « chmod / chown / sudo » ?

- **A ❌** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.
- **B ❌** Pour supprimer les doublons non adjacents, on utilise souvent sort | uniq ; l'ordre initial est alors perdu.
- **C ❌** « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.
- **D ✅** Évite de donner des droits plus larges que nécessaire. « 777 » signifie rwx pour tout le monde : rarement adapté. Les chiffres 4, 2 et 1 forment un code octal, pas une mesure en octets.

**Réponse proposée :** D. La fiche indique : Évite de donner des droits plus larges que nécessaire. « 777 » signifie rwx pour tout le monde : rarement adapté. Les chiffres 4, 2 et 1 forment un code octal, pas une mesure en octets.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/2-chmod-chown-sudo

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_001-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « chmod / chown / sudo » ?

- **A ❌** Comparaisons.
- **B ❌** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.
- **C ✅** Évite de donner des droits plus larges que nécessaire. « 777 » signifie rwx pour tout le monde : rarement adapté. Les chiffres 4, 2 et 1 forment un code octal, pas une mesure en octets.
- **D ✅** Changer les permissions / propriétaire / utiliser des privilèges élevés.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/2-chmod-chown-sudo

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N03_002 — stdin / stdout / stderr

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/3-stdin-stdout-stderr)

### V1-N03_002-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Entrée standard (0) / sortie standard (1) / erreurs (2). » ?

- **A ✅** stdin / stdout / stderr
- **B ❌** > et >>
- **C ❌** grep / wc -l / tr
- **D ❌** grep -i / -v / -c

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/3-stdin-stdout-stderr

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_002-02 — description

**Une seule bonne réponse**

Quelle description caractérise « stdin / stdout / stderr » ?

- **A ❌** Rechercher / compter les lignes / transformer des caractères.
- **B ✅** Entrée standard (0) / sortie standard (1) / erreurs (2).
- **C ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.
- **D ❌** Écraser un fichier avec la sortie / ajouter à la fin.

**Réponse proposée :** B. Le résumé de la fiche indique : Entrée standard (0) / sortie standard (1) / erreurs (2).

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/3-stdin-stdout-stderr

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_002-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « stdin / stdout / stderr » ?

- **A ❌** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.
- **B ❌** « grep -c » compte les lignes sélectionnées, pas toutes les occurrences sur ces lignes.
- **C ❌** « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.
- **D ✅** Les numéros 0, 1 et 2 désignent respectivement stdin, stdout et stderr.

**Réponse proposée :** D. La fiche indique : Les numéros 0, 1 et 2 désignent respectivement stdin, stdout et stderr.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/3-stdin-stdout-stderr

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_002-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « stdin / stdout / stderr » ?

- **A ✅** Les numéros 0, 1 et 2 désignent respectivement stdin, stdout et stderr.
- **B ❌** Variable exportée et transmise aux processus enfants.
- **C ❌** Substitution de commande : récupérer sa sortie.
- **D ✅** Entrée standard (0) / sortie standard (1) / erreurs (2).

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/3-stdin-stdout-stderr

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N03_003 — > et >>

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/4-et)

### V1-N03_003-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Écraser un fichier avec la sortie / ajouter à la fin. » ?

- **A ❌** && / || en Shell
- **B ❌** stdin / stdout / stderr
- **C ✅** > et >>
- **D ❌** grep -i / -v / -c

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/4-et

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_003-02 — description

**Une seule bonne réponse**

Quelle description caractérise « > et >> » ?

- **A ❌** Exécuter la commande suivante en cas de succès / en cas d’échec.
- **B ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.
- **C ✅** Écraser un fichier avec la sortie / ajouter à la fin.
- **D ❌** Entrée standard (0) / sortie standard (1) / erreurs (2).

**Réponse proposée :** C. Le résumé de la fiche indique : Écraser un fichier avec la sortie / ajouter à la fin.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/4-et

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_003-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « > et >> » ?

- **A ✅** « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.
- **B ❌** Les numéros 0, 1 et 2 désignent respectivement stdin, stdout et stderr.
- **C ❌** Le code de retour zéro signifie succès. && et || décident selon ce code, pas selon le texte affiché.
- **D ❌** « grep -c » compte les lignes sélectionnées, pas toutes les occurrences sur ces lignes.

**Réponse proposée :** A. La fiche indique : « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/4-et

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_003-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « > et >> » ?

- **A ❌** Fichier texte qui contient une suite de commandes exécutables par un Shell.
- **B ❌** Créer un dossier / créer un fichier vide ou actualiser sa date.
- **C ✅** Écraser un fichier avec la sortie / ajouter à la fin.
- **D ✅** « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/4-et

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N03_004 — 2> et <

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/5-2-et)

### V1-N03_004-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Rediriger les erreurs / prendre un fichier comme entrée. » ?

- **A ❌** chmod / chown / sudo
- **B ✅** 2> et <
- **C ❌** && / || en Shell
- **D ❌** grep -i / -v / -c

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/5-2-et

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_004-02 — description

**Une seule bonne réponse**

Quelle description caractérise « 2> et < » ?

- **A ❌** Exécuter la commande suivante en cas de succès / en cas d’échec.
- **B ✅** Rediriger les erreurs / prendre un fichier comme entrée.
- **C ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.
- **D ❌** Changer les permissions / propriétaire / utiliser des privilèges élevés.

**Réponse proposée :** B. Le résumé de la fiche indique : Rediriger les erreurs / prendre un fichier comme entrée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/5-2-et

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_004-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « 2> et < » ?

- **A ❌** Évite de donner des droits plus larges que nécessaire. « 777 » signifie rwx pour tout le monde : rarement adapté. Les chiffres 4, 2 et 1 forment un code octal, pas une mesure en octets.
- **B ❌** « grep -c » compte les lignes sélectionnées, pas toutes les occurrences sur ces lignes.
- **C ✅** « 2> » concerne les erreurs ; « < » fournit une entrée. On peut combiner ces redirections.
- **D ❌** Le code de retour zéro signifie succès. && et || décident selon ce code, pas selon le texte affiché.

**Réponse proposée :** C. La fiche indique : « 2> » concerne les erreurs ; « < » fournit une entrée. On peut combiner ces redirections.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/5-2-et

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_004-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « 2> et < » ?

- **A ✅** Rediriger les erreurs / prendre un fichier comme entrée.
- **B ❌** Linux est un noyau et une famille de systèmes ; Ubuntu est une distribution utilisant Linux.
- **C ❌** La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.
- **D ✅** « 2> » concerne les erreurs ; « < » fournit une entrée. On peut combiner ces redirections.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/5-2-et

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N03_005 — |

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/6-)

### V1-N03_005-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Relier la sortie d’une commande à l’entrée d’une autre. » ?

- **A ❌** chmod / chown / sudo
- **B ✅** |
- **C ❌** grep -A 3
- **D ❌** && / || en Shell

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/6-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_005-02 — description

**Une seule bonne réponse**

Quelle description caractérise « | » ?

- **A ❌** Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour.
- **B ❌** Changer les permissions / propriétaire / utiliser des privilèges élevés.
- **C ❌** Exécuter la commande suivante en cas de succès / en cas d’échec.
- **D ✅** Relier la sortie d’une commande à l’entrée d’une autre.

**Réponse proposée :** D. Le résumé de la fiche indique : Relier la sortie d’une commande à l’entrée d’une autre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/6-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_005-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « | » ?

- **A ❌** Évite de donner des droits plus larges que nécessaire. « 777 » signifie rwx pour tout le monde : rarement adapté. Les chiffres 4, 2 et 1 forment un code octal, pas une mesure en octets.
- **B ✅** Le tube « | » relie stdout de gauche à stdin de droite ; stderr n'y circule pas par défaut.
- **C ❌** Le code de retour zéro signifie succès. && et || décident selon ce code, pas selon le texte affiché.
- **D ❌** « grep -A 3 » ajoute jusqu'à trois lignes APRÈS chaque correspondance.

**Réponse proposée :** B. La fiche indique : Le tube « | » relie stdout de gauche à stdin de droite ; stderr n'y circule pas par défaut.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/6-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_005-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « | » ?

- **A ✅** Le tube « | » relie stdout de gauche à stdin de droite ; stderr n'y circule pas par défaut.
- **B ❌** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.
- **C ✅** Relier la sortie d’une commande à l’entrée d’une autre.
- **D ❌** Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/6-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N03_006 — && / || en Shell

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/7-en-shell)

### V1-N03_006-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Exécuter la commande suivante en cas de succès / en cas d’échec. » ?

- **A ✅** && / || en Shell
- **B ❌** chmod / chown / sudo
- **C ❌** grep -A 3
- **D ❌** 2> et <

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/7-en-shell

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_006-02 — description

**Une seule bonne réponse**

Quelle description caractérise « && / || en Shell » ?

- **A ❌** Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour.
- **B ❌** Rediriger les erreurs / prendre un fichier comme entrée.
- **C ✅** Exécuter la commande suivante en cas de succès / en cas d’échec.
- **D ❌** Changer les permissions / propriétaire / utiliser des privilèges élevés.

**Réponse proposée :** C. Le résumé de la fiche indique : Exécuter la commande suivante en cas de succès / en cas d’échec.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/7-en-shell

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_006-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « && / || en Shell » ?

- **A ❌** « grep -A 3 » ajoute jusqu'à trois lignes APRÈS chaque correspondance.
- **B ❌** « 2> » concerne les erreurs ; « < » fournit une entrée. On peut combiner ces redirections.
- **C ✅** Le code de retour zéro signifie succès. && et || décident selon ce code, pas selon le texte affiché.
- **D ❌** Évite de donner des droits plus larges que nécessaire. « 777 » signifie rwx pour tout le monde : rarement adapté. Les chiffres 4, 2 et 1 forment un code octal, pas une mesure en octets.

**Réponse proposée :** C. La fiche indique : Le code de retour zéro signifie succès. && et || décident selon ce code, pas selon le texte affiché.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/7-en-shell

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_006-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « && / || en Shell » ?

- **A ✅** Exécuter la commande suivante en cas de succès / en cas d’échec.
- **B ❌** Déclare le type de retour et les paramètres d’une fonction avant son utilisation ; la définition fournit son corps.
- **C ❌** Un invariant est une condition que le programme doit préserver à des moments définis ; en sécurité mémoire, il exprime notamment les bornes et la validité des pointeurs.
- **D ✅** Le code de retour zéro signifie succès. && et || décident selon ce code, pas selon le texte affiché.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/7-en-shell

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N03_007 — grep / wc -l / tr

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/8-grep-wc-l-tr)

### V1-N03_007-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Rechercher / compter les lignes / transformer des caractères. » ?

- **A ✅** grep / wc -l / tr
- **B ❌** r w x
- **C ❌** 2> et <
- **D ❌** grep -A 3

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/8-grep-wc-l-tr

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_007-02 — description

**Une seule bonne réponse**

Quelle description caractérise « grep / wc -l / tr » ?

- **A ✅** Rechercher / compter les lignes / transformer des caractères.
- **B ❌** Rediriger les erreurs / prendre un fichier comme entrée.
- **C ❌** r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).
- **D ❌** Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour.

**Réponse proposée :** A. Le résumé de la fiche indique : Rechercher / compter les lignes / transformer des caractères.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/8-grep-wc-l-tr

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_007-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « grep / wc -l / tr » ?

- **A ❌** « grep -A 3 » ajoute jusqu'à trois lignes APRÈS chaque correspondance.
- **B ❌** Le nombre 754 est en notation octale (base 8) : 7 pour le propriétaire, 5 pour le groupe, 4 pour les autres. Chaque chiffre représente trois bits de permissions ; ce n’est pas un nombre d’octets. Sur un répertoire, l’effet de r, w et x diffère de celui d’un fichier.
- **C ❌** « 2> » concerne les erreurs ; « < » fournit une entrée. On peut combiner ces redirections.
- **D ✅** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.

**Réponse proposée :** D. La fiche indique : wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/8-grep-wc-l-tr

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_007-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « grep / wc -l / tr » ?

- **A ❌** Utiliser l’ancienne valeur de i, puis ajouter 1.
- **B ✅** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.
- **C ❌** Reste par 2 ; permet de tester la parité.
- **D ✅** Rechercher / compter les lignes / transformer des caractères.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/8-grep-wc-l-tr

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N03_008 — sort / uniq / cut / head / tail / rev

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/9-sort-uniq-cut-head-tail-rev)

### V1-N03_008-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Trier / dédupliquer les lignes voisines / extraire / début / fin / inverser les caractères. » ?

- **A ❌** grep / wc -l / tr
- **B ✅** sort / uniq / cut / head / tail / rev
- **C ❌** 2> et <
- **D ❌** r w x

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/9-sort-uniq-cut-head-tail-rev

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_008-02 — description

**Une seule bonne réponse**

Quelle description caractérise « sort / uniq / cut / head / tail / rev » ?

- **A ❌** Rediriger les erreurs / prendre un fichier comme entrée.
- **B ❌** Rechercher / compter les lignes / transformer des caractères.
- **C ✅** Trier / dédupliquer les lignes voisines / extraire / début / fin / inverser les caractères.
- **D ❌** r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).

**Réponse proposée :** C. Le résumé de la fiche indique : Trier / dédupliquer les lignes voisines / extraire / début / fin / inverser les caractères.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/9-sort-uniq-cut-head-tail-rev

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_008-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « sort / uniq / cut / head / tail / rev » ?

- **A ❌** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.
- **B ❌** « 2> » concerne les erreurs ; « < » fournit une entrée. On peut combiner ces redirections.
- **C ❌** Le nombre 754 est en notation octale (base 8) : 7 pour le propriétaire, 5 pour le groupe, 4 pour les autres. Chaque chiffre représente trois bits de permissions ; ce n’est pas un nombre d’octets. Sur un répertoire, l’effet de r, w et x diffère de celui d’un fichier.
- **D ✅** uniq traite les doublons consécutifs ; sort peut les regrouper mais modifie l'ordre.

**Réponse proposée :** D. La fiche indique : uniq traite les doublons consécutifs ; sort peut les regrouper mais modifie l'ordre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/9-sort-uniq-cut-head-tail-rev

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_008-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « sort / uniq / cut / head / tail / rev » ?

- **A ❌** L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité.
- **B ❌** Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.
- **C ✅** Trier / dédupliquer les lignes voisines / extraire / début / fin / inverser les caractères.
- **D ✅** uniq traite les doublons consécutifs ; sort peut les regrouper mais modifie l'ordre.

**Réponse proposée :** C, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/9-sort-uniq-cut-head-tail-rev

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N03_009 — grep -A 3

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/10-grep-a-3)

### V1-N03_009-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour. » ?

- **A ❌** grep / wc -l / tr
- **B ❌** r w x
- **C ✅** grep -A 3
- **D ❌** > et >>

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/10-grep-a-3

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_009-02 — description

**Une seule bonne réponse**

Quelle description caractérise « grep -A 3 » ?

- **A ❌** r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).
- **B ❌** Écraser un fichier avec la sortie / ajouter à la fin.
- **C ✅** Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour.
- **D ❌** Rechercher / compter les lignes / transformer des caractères.

**Réponse proposée :** C. Le résumé de la fiche indique : Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/10-grep-a-3

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_009-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « grep -A 3 » ?

- **A ❌** Le nombre 754 est en notation octale (base 8) : 7 pour le propriétaire, 5 pour le groupe, 4 pour les autres. Chaque chiffre représente trois bits de permissions ; ce n’est pas un nombre d’octets. Sur un répertoire, l’effet de r, w et x diffère de celui d’un fichier.
- **B ❌** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.
- **C ✅** « grep -A 3 » ajoute jusqu'à trois lignes APRÈS chaque correspondance.
- **D ❌** « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.

**Réponse proposée :** C. La fiche indique : « grep -A 3 » ajoute jusqu'à trois lignes APRÈS chaque correspondance.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/10-grep-a-3

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_009-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « grep -A 3 » ?

- **A ❌** Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.
- **B ✅** Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour.
- **C ✅** « grep -A 3 » ajoute jusqu'à trois lignes APRÈS chaque correspondance.
- **D ❌** calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/10-grep-a-3

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N03_010 — grep -i / -v / -c

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/11-grep-i-v-c)

### V1-N03_010-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif. » ?

- **A ✅** grep -i / -v / -c
- **B ❌** sort / uniq
- **C ❌** grep / wc -l / tr
- **D ❌** > et >>

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/11-grep-i-v-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_010-02 — description

**Une seule bonne réponse**

Quelle description caractérise « grep -i / -v / -c » ?

- **A ❌** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **B ❌** Rechercher / compter les lignes / transformer des caractères.
- **C ❌** Écraser un fichier avec la sortie / ajouter à la fin.
- **D ✅** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.

**Réponse proposée :** D. Le résumé de la fiche indique : -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/11-grep-i-v-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_010-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « grep -i / -v / -c » ?

- **A ❌** « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.
- **B ❌** Pour supprimer les doublons non adjacents, on utilise souvent sort | uniq ; l'ordre initial est alors perdu.
- **C ✅** « grep -c » compte les lignes sélectionnées, pas toutes les occurrences sur ces lignes.
- **D ❌** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.

**Réponse proposée :** C. La fiche indique : « grep -c » compte les lignes sélectionnées, pas toutes les occurrences sur ces lignes.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/11-grep-i-v-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_010-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « grep -i / -v / -c » ?

- **A ✅** « grep -c » compte les lignes sélectionnées, pas toutes les occurrences sur ces lignes.
- **B ❌** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.
- **C ✅** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.
- **D ❌** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.

**Réponse proposée :** A, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/11-grep-i-v-c

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N03_011 — sort / uniq

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/12-sort-uniq)

### V1-N03_011-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq. » ?

- **A ❌** && / || en Shell
- **B ❌** grep -i / -v / -c
- **C ❌** > et >>
- **D ✅** sort / uniq

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/12-sort-uniq

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_011-02 — description

**Une seule bonne réponse**

Quelle description caractérise « sort / uniq » ?

- **A ❌** Écraser un fichier avec la sortie / ajouter à la fin.
- **B ✅** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **C ❌** Exécuter la commande suivante en cas de succès / en cas d’échec.
- **D ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.

**Réponse proposée :** B. Le résumé de la fiche indique : sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/12-sort-uniq

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_011-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « sort / uniq » ?

- **A ❌** Le code de retour zéro signifie succès. && et || décident selon ce code, pas selon le texte affiché.
- **B ✅** Pour supprimer les doublons non adjacents, on utilise souvent sort | uniq ; l'ordre initial est alors perdu.
- **C ❌** « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.
- **D ❌** « grep -c » compte les lignes sélectionnées, pas toutes les occurrences sur ces lignes.

**Réponse proposée :** B. La fiche indique : Pour supprimer les doublons non adjacents, on utilise souvent sort | uniq ; l'ordre initial est alors perdu.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/12-sort-uniq

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N03_011-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « sort / uniq » ?

- **A ✅** Pour supprimer les doublons non adjacents, on utilise souvent sort | uniq ; l'ordre initial est alors perdu.
- **B ✅** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **C ❌** Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.
- **D ❌** \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/12-sort-uniq

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

