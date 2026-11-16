# Banque de revue — Permissions et flux

48 questions candidates couvrant 12 notions. **Toutes les réponses sont des propositions à vérifier indépendamment** ; elles sont dérivées des fiches existantes et peuvent contenir des distracteurs ambigus. **Ne rien publier sur le site.**

## N03_000 — r w x

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/1-r-w-x)

### V1-N03_000-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1). » ?

- **A ❌** sort / uniq
- **B ❌** 2> et <
- **C ✅** r w x
- **D ❌** grep / wc -l / tr

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/1-r-w-x

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_000-02 · description

**Une seule bonne réponse**

Quelle description caractérise « r w x » ?

- **A ❌** Rediriger les erreurs / prendre un fichier comme entrée.
- **B ✅** r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).
- **C ❌** Rechercher / compter les lignes / transformer des caractères.
- **D ❌** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/1-r-w-x

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_000-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « r w x » ?

- **A ✅** Le nombre 754 est en notation octale (base 8) : 7 pour le propriétaire, 5 pour le groupe, 4 pour les autres. Chaque chiffre représente trois bits de permissions ; ce n’est pas un nombre d’octets. Sur un répertoire, l’effet de r, w et x diffère de celui d’un fichier.
- **B ❌** Pour supprimer les doublons non adjacents, on utilise souvent sort | uniq ; l'ordre initial est alors perdu.
- **C ❌** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.
- **D ❌** « 2> » concerne les erreurs ; « < » fournit une entrée. On peut combiner ces redirections.

**Réponse candidate :** A · **Explication :** La fiche indique : Le nombre 754 est en notation octale (base 8) : 7 pour le propriétaire, 5 pour le groupe, 4 pour les autres. Chaque chiffre représente trois bits de permissions ; ce n’est pas un nombre d’octets. Sur un répertoire, l’effet de r, w et x diffère de celui d’un fichier.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/1-r-w-x

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_000-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « r w x » ?

- **A ✅** r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).
- **B ❌** Branche de développement / fusion.
- **C ✅** Le nombre 754 est en notation octale (base 8) : 7 pour le propriétaire, 5 pour le groupe, 4 pour les autres. Chaque chiffre représente trois bits de permissions ; ce n’est pas un nombre d’octets. Sur un répertoire, l’effet de r, w et x diffère de celui d’un fichier.
- **D ❌** Un prototype annonce une signature ; la définition contient le corps de la fonction.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/1-r-w-x

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N03_001 — chmod / chown / sudo

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/2-chmod-chown-sudo)

### V1-N03_001-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Changer les permissions / propriétaire / utiliser des privilèges élevés. » ?

- **A ❌** grep / wc -l / tr
- **B ❌** > et >>
- **C ❌** sort / uniq
- **D ✅** chmod / chown / sudo

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/2-chmod-chown-sudo

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_001-02 · description

**Une seule bonne réponse**

Quelle description caractérise « chmod / chown / sudo » ?

- **A ✅** Changer les permissions / propriétaire / utiliser des privilèges élevés.
- **B ❌** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **C ❌** Rechercher / compter les lignes / transformer des caractères.
- **D ❌** Écraser un fichier avec la sortie / ajouter à la fin.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Changer les permissions / propriétaire / utiliser des privilèges élevés.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/2-chmod-chown-sudo

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_001-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « chmod / chown / sudo » ?

- **A ❌** « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.
- **B ✅** Évite de donner des droits plus larges que nécessaire. « 777 » signifie rwx pour tout le monde : rarement adapté. Les chiffres 4, 2 et 1 forment un code octal, pas une mesure en octets.
- **C ❌** Pour supprimer les doublons non adjacents, on utilise souvent sort | uniq ; l'ordre initial est alors perdu.
- **D ❌** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.

**Réponse candidate :** B · **Explication :** La fiche indique : Évite de donner des droits plus larges que nécessaire. « 777 » signifie rwx pour tout le monde : rarement adapté. Les chiffres 4, 2 et 1 forment un code octal, pas une mesure en octets.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/2-chmod-chown-sudo

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_001-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « chmod / chown / sudo » ?

- **A ❌** Comparaisons.
- **B ❌** Une boucle placée dans une autre ; le coût dépend des bornes et du travail effectué.
- **C ✅** Évite de donner des droits plus larges que nécessaire. « 777 » signifie rwx pour tout le monde : rarement adapté. Les chiffres 4, 2 et 1 forment un code octal, pas une mesure en octets.
- **D ✅** Changer les permissions / propriétaire / utiliser des privilèges élevés.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/2-chmod-chown-sudo

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N03_002 — stdin / stdout / stderr

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/3-stdin-stdout-stderr)

### V1-N03_002-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Entrée standard (0) / sortie standard (1) / erreurs (2). » ?

- **A ✅** stdin / stdout / stderr
- **B ❌** > et >>
- **C ❌** grep -i / -v / -c
- **D ❌** grep / wc -l / tr

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/3-stdin-stdout-stderr

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_002-02 · description

**Une seule bonne réponse**

Quelle description caractérise « stdin / stdout / stderr » ?

- **A ❌** Rechercher / compter les lignes / transformer des caractères.
- **B ❌** Écraser un fichier avec la sortie / ajouter à la fin.
- **C ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.
- **D ✅** Entrée standard (0) / sortie standard (1) / erreurs (2).

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Entrée standard (0) / sortie standard (1) / erreurs (2).

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/3-stdin-stdout-stderr

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_002-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « stdin / stdout / stderr » ?

- **A ✅** Les numéros 0, 1 et 2 désignent respectivement stdin, stdout et stderr.
- **B ❌** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.
- **C ❌** « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.
- **D ❌** « grep -c » compte les lignes sélectionnées, pas toutes les occurrences sur ces lignes.

**Réponse candidate :** A · **Explication :** La fiche indique : Les numéros 0, 1 et 2 désignent respectivement stdin, stdout et stderr.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/3-stdin-stdout-stderr

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_002-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « stdin / stdout / stderr » ?

- **A ✅** Entrée standard (0) / sortie standard (1) / erreurs (2).
- **B ❌** Substitution de commande : récupérer sa sortie.
- **C ❌** Variable exportée et transmise aux processus enfants.
- **D ✅** Les numéros 0, 1 et 2 désignent respectivement stdin, stdout et stderr.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/3-stdin-stdout-stderr

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N03_003 — > et >>

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/4-et)

### V1-N03_003-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Écraser un fichier avec la sortie / ajouter à la fin. » ?

- **A ❌** stdin / stdout / stderr
- **B ✅** > et >>
- **C ❌** && / || en Shell
- **D ❌** grep -i / -v / -c

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/4-et

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_003-02 · description

**Une seule bonne réponse**

Quelle description caractérise « > et >> » ?

- **A ✅** Écraser un fichier avec la sortie / ajouter à la fin.
- **B ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.
- **C ❌** Exécuter la commande suivante en cas de succès / en cas d’échec.
- **D ❌** Entrée standard (0) / sortie standard (1) / erreurs (2).

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Écraser un fichier avec la sortie / ajouter à la fin.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/4-et

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_003-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « > et >> » ?

- **A ❌** Les numéros 0, 1 et 2 désignent respectivement stdin, stdout et stderr.
- **B ❌** Le code de retour zéro signifie succès. && et || décident selon ce code, pas selon le texte affiché.
- **C ❌** « grep -c » compte les lignes sélectionnées, pas toutes les occurrences sur ces lignes.
- **D ✅** « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.

**Réponse candidate :** D · **Explication :** La fiche indique : « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/4-et

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_003-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « > et >> » ?

- **A ✅** « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.
- **B ✅** Écraser un fichier avec la sortie / ajouter à la fin.
- **C ❌** Créer un dossier / créer un fichier vide ou actualiser sa date.
- **D ❌** Fichier texte qui contient une suite de commandes exécutables par un Shell.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/4-et

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N03_004 — 2> et <

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/5-2-et)

### V1-N03_004-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Rediriger les erreurs / prendre un fichier comme entrée. » ?

- **A ✅** 2> et <
- **B ❌** grep -i / -v / -c
- **C ❌** && / || en Shell
- **D ❌** chmod / chown / sudo

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/5-2-et

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_004-02 · description

**Une seule bonne réponse**

Quelle description caractérise « 2> et < » ?

- **A ❌** Changer les permissions / propriétaire / utiliser des privilèges élevés.
- **B ✅** Rediriger les erreurs / prendre un fichier comme entrée.
- **C ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.
- **D ❌** Exécuter la commande suivante en cas de succès / en cas d’échec.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Rediriger les erreurs / prendre un fichier comme entrée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/5-2-et

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_004-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « 2> et < » ?

- **A ❌** Le code de retour zéro signifie succès. && et || décident selon ce code, pas selon le texte affiché.
- **B ❌** Évite de donner des droits plus larges que nécessaire. « 777 » signifie rwx pour tout le monde : rarement adapté. Les chiffres 4, 2 et 1 forment un code octal, pas une mesure en octets.
- **C ✅** « 2> » concerne les erreurs ; « < » fournit une entrée. On peut combiner ces redirections.
- **D ❌** « grep -c » compte les lignes sélectionnées, pas toutes les occurrences sur ces lignes.

**Réponse candidate :** C · **Explication :** La fiche indique : « 2> » concerne les erreurs ; « < » fournit une entrée. On peut combiner ces redirections.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/5-2-et

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_004-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « 2> et < » ?

- **A ❌** La convention Betty demande une documentation de la structure et de ses membres : nom, description et annotations @membre.
- **B ✅** « 2> » concerne les erreurs ; « < » fournit une entrée. On peut combiner ces redirections.
- **C ✅** Rediriger les erreurs / prendre un fichier comme entrée.
- **D ❌** Linux est un noyau et une famille de systèmes ; Ubuntu est une distribution utilisant Linux.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/5-2-et

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N03_005 — |

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/6-)

### V1-N03_005-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Relier la sortie d’une commande à l’entrée d’une autre. » ?

- **A ❌** && / || en Shell
- **B ❌** chmod / chown / sudo
- **C ❌** grep -A 3
- **D ✅** |

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/6-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_005-02 · description

**Une seule bonne réponse**

Quelle description caractérise « | » ?

- **A ✅** Relier la sortie d’une commande à l’entrée d’une autre.
- **B ❌** Exécuter la commande suivante en cas de succès / en cas d’échec.
- **C ❌** Changer les permissions / propriétaire / utiliser des privilèges élevés.
- **D ❌** Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Relier la sortie d’une commande à l’entrée d’une autre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/6-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_005-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « | » ?

- **A ❌** Le code de retour zéro signifie succès. && et || décident selon ce code, pas selon le texte affiché.
- **B ❌** « grep -A 3 » ajoute jusqu'à trois lignes APRÈS chaque correspondance.
- **C ✅** Le tube « | » relie stdout de gauche à stdin de droite ; stderr n'y circule pas par défaut.
- **D ❌** Évite de donner des droits plus larges que nécessaire. « 777 » signifie rwx pour tout le monde : rarement adapté. Les chiffres 4, 2 et 1 forment un code octal, pas une mesure en octets.

**Réponse candidate :** C · **Explication :** La fiche indique : Le tube « | » relie stdout de gauche à stdin de droite ; stderr n'y circule pas par défaut.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/6-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_005-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « | » ?

- **A ❌** Une struct peut être initialisée membre par membre dans l’ordre déclaré : struct point p = {2, 3};.
- **B ❌** typedef unsigned int identifiant; permet d’écrire identifiant à la place de unsigned int.
- **C ✅** Le tube « | » relie stdout de gauche à stdin de droite ; stderr n'y circule pas par défaut.
- **D ✅** Relier la sortie d’une commande à l’entrée d’une autre.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/6-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N03_006 — && / || en Shell

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/7-en-shell)

### V1-N03_006-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Exécuter la commande suivante en cas de succès / en cas d’échec. » ?

- **A ❌** grep -A 3
- **B ❌** 2> et <
- **C ✅** && / || en Shell
- **D ❌** chmod / chown / sudo

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/7-en-shell

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_006-02 · description

**Une seule bonne réponse**

Quelle description caractérise « && / || en Shell » ?

- **A ❌** Changer les permissions / propriétaire / utiliser des privilèges élevés.
- **B ❌** Rediriger les erreurs / prendre un fichier comme entrée.
- **C ❌** Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour.
- **D ✅** Exécuter la commande suivante en cas de succès / en cas d’échec.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Exécuter la commande suivante en cas de succès / en cas d’échec.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/7-en-shell

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_006-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « && / || en Shell » ?

- **A ✅** Le code de retour zéro signifie succès. && et || décident selon ce code, pas selon le texte affiché.
- **B ❌** « grep -A 3 » ajoute jusqu'à trois lignes APRÈS chaque correspondance.
- **C ❌** Évite de donner des droits plus larges que nécessaire. « 777 » signifie rwx pour tout le monde : rarement adapté. Les chiffres 4, 2 et 1 forment un code octal, pas une mesure en octets.
- **D ❌** « 2> » concerne les erreurs ; « < » fournit une entrée. On peut combiner ces redirections.

**Réponse candidate :** A · **Explication :** La fiche indique : Le code de retour zéro signifie succès. && et || décident selon ce code, pas selon le texte affiché.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/7-en-shell

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_006-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « && / || en Shell » ?

- **A ✅** Exécuter la commande suivante en cas de succès / en cas d’échec.
- **B ❌** Déclare le type de retour et les paramètres d’une fonction avant son utilisation ; la définition fournit son corps.
- **C ❌** Un invariant est une condition que le programme doit préserver à des moments définis ; en sécurité mémoire, il exprime notamment les bornes et la validité des pointeurs.
- **D ✅** Le code de retour zéro signifie succès. && et || décident selon ce code, pas selon le texte affiché.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/7-en-shell

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N03_007 — grep / wc -l / tr

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/8-grep-wc-l-tr)

### V1-N03_007-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Rechercher / compter les lignes / transformer des caractères. » ?

- **A ❌** r w x
- **B ✅** grep / wc -l / tr
- **C ❌** grep -A 3
- **D ❌** 2> et <

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/8-grep-wc-l-tr

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_007-02 · description

**Une seule bonne réponse**

Quelle description caractérise « grep / wc -l / tr » ?

- **A ❌** Rediriger les erreurs / prendre un fichier comme entrée.
- **B ❌** r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).
- **C ✅** Rechercher / compter les lignes / transformer des caractères.
- **D ❌** Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Rechercher / compter les lignes / transformer des caractères.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/8-grep-wc-l-tr

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_007-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « grep / wc -l / tr » ?

- **A ❌** « grep -A 3 » ajoute jusqu'à trois lignes APRÈS chaque correspondance.
- **B ❌** Le nombre 754 est en notation octale (base 8) : 7 pour le propriétaire, 5 pour le groupe, 4 pour les autres. Chaque chiffre représente trois bits de permissions ; ce n’est pas un nombre d’octets. Sur un répertoire, l’effet de r, w et x diffère de celui d’un fichier.
- **C ❌** « 2> » concerne les erreurs ; « < » fournit une entrée. On peut combiner ces redirections.
- **D ✅** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.

**Réponse candidate :** D · **Explication :** La fiche indique : wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/8-grep-wc-l-tr

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_007-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « grep / wc -l / tr » ?

- **A ✅** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.
- **B ✅** Rechercher / compter les lignes / transformer des caractères.
- **C ❌** Utiliser l’ancienne valeur de i, puis ajouter 1.
- **D ❌** Reste par 2 ; permet de tester la parité.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/8-grep-wc-l-tr

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N03_008 — sort / uniq / cut / head / tail / rev

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/9-sort-uniq-cut-head-tail-rev)

### V1-N03_008-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Trier / dédupliquer les lignes voisines / extraire / début / fin / inverser les caractères. » ?

- **A ✅** sort / uniq / cut / head / tail / rev
- **B ❌** 2> et <
- **C ❌** r w x
- **D ❌** grep / wc -l / tr

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/9-sort-uniq-cut-head-tail-rev

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_008-02 · description

**Une seule bonne réponse**

Quelle description caractérise « sort / uniq / cut / head / tail / rev » ?

- **A ❌** Rediriger les erreurs / prendre un fichier comme entrée.
- **B ❌** Rechercher / compter les lignes / transformer des caractères.
- **C ✅** Trier / dédupliquer les lignes voisines / extraire / début / fin / inverser les caractères.
- **D ❌** r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Trier / dédupliquer les lignes voisines / extraire / début / fin / inverser les caractères.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/9-sort-uniq-cut-head-tail-rev

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_008-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « sort / uniq / cut / head / tail / rev » ?

- **A ✅** uniq traite les doublons consécutifs ; sort peut les regrouper mais modifie l'ordre.
- **B ❌** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.
- **C ❌** Le nombre 754 est en notation octale (base 8) : 7 pour le propriétaire, 5 pour le groupe, 4 pour les autres. Chaque chiffre représente trois bits de permissions ; ce n’est pas un nombre d’octets. Sur un répertoire, l’effet de r, w et x diffère de celui d’un fichier.
- **D ❌** « 2> » concerne les erreurs ; « < » fournit une entrée. On peut combiner ces redirections.

**Réponse candidate :** A · **Explication :** La fiche indique : uniq traite les doublons consécutifs ; sort peut les regrouper mais modifie l'ordre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/9-sort-uniq-cut-head-tail-rev

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_008-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « sort / uniq / cut / head / tail / rev » ?

- **A ✅** Trier / dédupliquer les lignes voisines / extraire / début / fin / inverser les caractères.
- **B ✅** uniq traite les doublons consécutifs ; sort peut les regrouper mais modifie l'ordre.
- **C ❌** L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité.
- **D ❌** Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/9-sort-uniq-cut-head-tail-rev

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N03_009 — grep -A 3

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/10-grep-a-3)

### V1-N03_009-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour. » ?

- **A ❌** r w x
- **B ❌** > et >>
- **C ❌** grep / wc -l / tr
- **D ✅** grep -A 3

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/10-grep-a-3

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_009-02 · description

**Une seule bonne réponse**

Quelle description caractérise « grep -A 3 » ?

- **A ✅** Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour.
- **B ❌** Rechercher / compter les lignes / transformer des caractères.
- **C ❌** r = lecture (4), w = écriture (2), x = exécution (1) ; rwx = 7 (4 + 2 + 1).
- **D ❌** Écraser un fichier avec la sortie / ajouter à la fin.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/10-grep-a-3

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_009-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « grep -A 3 » ?

- **A ❌** Le nombre 754 est en notation octale (base 8) : 7 pour le propriétaire, 5 pour le groupe, 4 pour les autres. Chaque chiffre représente trois bits de permissions ; ce n’est pas un nombre d’octets. Sur un répertoire, l’effet de r, w et x diffère de celui d’un fichier.
- **B ❌** « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.
- **C ✅** « grep -A 3 » ajoute jusqu'à trois lignes APRÈS chaque correspondance.
- **D ❌** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.

**Réponse candidate :** C · **Explication :** La fiche indique : « grep -A 3 » ajoute jusqu'à trois lignes APRÈS chaque correspondance.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/10-grep-a-3

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_009-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « grep -A 3 » ?

- **A ✅** « grep -A 3 » ajoute jusqu'à trois lignes APRÈS chaque correspondance.
- **B ❌** calloc réserve de la mémoire pour plusieurs éléments et met ses octets à zéro ; vérifier NULL et libérer le bloc avec free.
- **C ❌** Si la lecture de la saisie déborde un tableau local, la mémoire peut être corrompue AVANT malloc et strcpy : copier ensuite ne répare pas cette erreur.
- **D ✅** Affiche la ligne contenant le motif recherché et les trois lignes suivantes. -B montre les lignes avant et -C les lignes autour.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/10-grep-a-3

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N03_010 — grep -i / -v / -c

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/11-grep-i-v-c)

### V1-N03_010-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif. » ?

- **A ❌** > et >>
- **B ❌** sort / uniq
- **C ✅** grep -i / -v / -c
- **D ❌** grep / wc -l / tr

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/11-grep-i-v-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_010-02 · description

**Une seule bonne réponse**

Quelle description caractérise « grep -i / -v / -c » ?

- **A ❌** Rechercher / compter les lignes / transformer des caractères.
- **B ❌** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **C ❌** Écraser un fichier avec la sortie / ajouter à la fin.
- **D ✅** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/11-grep-i-v-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_010-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « grep -i / -v / -c » ?

- **A ❌** « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.
- **B ❌** wc -l compte les caractères de fin de ligne « \n », pas les morceaux de texte sans saut final.
- **C ✅** « grep -c » compte les lignes sélectionnées, pas toutes les occurrences sur ces lignes.
- **D ❌** Pour supprimer les doublons non adjacents, on utilise souvent sort | uniq ; l'ordre initial est alors perdu.

**Réponse candidate :** C · **Explication :** La fiche indique : « grep -c » compte les lignes sélectionnées, pas toutes les occurrences sur ces lignes.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/11-grep-i-v-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_010-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « grep -i / -v / -c » ?

- **A ❌** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.
- **B ❌** Les blocs renvoyés par malloc relèvent de l’allocation dynamique (habituellement sur le tas) ; les variables locales ordinaires ont une durée de vie automatique.
- **C ✅** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.
- **D ✅** « grep -c » compte les lignes sélectionnées, pas toutes les occurrences sur ces lignes.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/11-grep-i-v-c

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N03_011 — sort / uniq

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/12-sort-uniq)

### V1-N03_011-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq. » ?

- **A ❌** > et >>
- **B ❌** && / || en Shell
- **C ✅** sort / uniq
- **D ❌** grep -i / -v / -c

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/12-sort-uniq

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_011-02 · description

**Une seule bonne réponse**

Quelle description caractérise « sort / uniq » ?

- **A ✅** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **B ❌** Exécuter la commande suivante en cas de succès / en cas d’échec.
- **C ❌** -i ignore la casse ; -v inverse la sélection ; -c compte les lignes correspondant au motif.
- **D ❌** Écraser un fichier avec la sortie / ajouter à la fin.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/12-sort-uniq

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_011-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « sort / uniq » ?

- **A ❌** « grep -c » compte les lignes sélectionnées, pas toutes les occurrences sur ces lignes.
- **B ❌** Le code de retour zéro signifie succès. && et || décident selon ce code, pas selon le texte affiché.
- **C ❌** « > » écrase la sortie existante ; « >> » ajoute à la fin. Les erreurs restent séparées par défaut.
- **D ✅** Pour supprimer les doublons non adjacents, on utilise souvent sort | uniq ; l'ordre initial est alors perdu.

**Réponse candidate :** D · **Explication :** La fiche indique : Pour supprimer les doublons non adjacents, on utilise souvent sort | uniq ; l'ordre initial est alors perdu.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/12-sort-uniq

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N03_011-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « sort / uniq » ?

- **A ❌** Inverser une chaîne consiste à échanger le premier et le dernier caractère, puis à progresser vers le centre.
- **B ✅** sort ordonne les lignes ; uniq supprime uniquement les lignes répétées consécutives : on utilise souvent sort avant uniq.
- **C ✅** Pour supprimer les doublons non adjacents, on utilise souvent sort | uniq ; l'ordre initial est alors perdu.
- **D ❌** \0 a pour valeur numérique 0 et marque la fin d’une chaîne C, par exemple dans char a[10] = "Holberton";.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/permissions-et-flux/12-sort-uniq

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

