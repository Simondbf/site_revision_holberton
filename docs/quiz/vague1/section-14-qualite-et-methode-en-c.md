# Banque de revue — Qualité et méthode en C

36 questions candidates couvrant 9 notions. **Toutes les réponses sont des propositions à vérifier indépendamment** ; elles sont dérivées des fiches existantes et peuvent contenir des distracteurs ambigus. **Ne rien publier sur le site.**

## N14_000 — Prototype de fonction

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/1-prototype-de-fonction)

### V1-N14_000-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Déclare le type de retour et les paramètres d’une fonction avant son utilisation ; la définition fournit son corps. » ?

- **A ❌** Base bundle — analyser le code de départ d'un lab
- **B ✅** Prototype de fonction
- **C ❌** Vulnérabilité ou attaque ? (OWASP)
- **D ❌** Invariant — condition qui doit rester vraie

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/1-prototype-de-fonction

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_000-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Prototype de fonction » ?

- **A ❌** Un invariant est une condition que le programme doit préserver à des moments définis ; en sécurité mémoire, il exprime notamment les bornes et la validité des pointeurs.
- **B ❌** Une vulnérabilité est une faiblesse du programme ; une attaque est une action visant à exploiter cette faiblesse.
- **C ✅** Déclare le type de retour et les paramètres d’une fonction avant son utilisation ; la définition fournit son corps.
- **D ❌** Le base bundle est l'ensemble de fichiers de départ fourni pour un exercice ; son audit consiste à vérifier les hypothèses, les entrées et les responsabilités mémoire avant d'émettre un diagnostic.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Déclare le type de retour et les paramètres d’une fonction avant son utilisation ; la définition fournit son corps.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/1-prototype-de-fonction

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_000-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Prototype de fonction » ?

- **A ❌** Dans une question portant sur le « base bundle », les scénarios de double free doivent être confirmés dans les fichiers fournis. Les causes typiques à rechercher sont des chemins de libération multiples et une ownership ambiguë, pas une supposée vulnérabilité universelle du bundle.
- **B ❌** Un segfault ne prouve pas à lui seul qu'une attaque a eu lieu ; l'absence de crash n'exclut pas une vulnérabilité. On corrige d'abord la faiblesse du code.
- **C ❌** Invariant de copie : n < capacité_dest garantit ici que n + 1 octets tiennent dans le tableau. Cela suppose que source est déjà une chaîne valide ; vérifier une longueur ne répare pas des octets écrits hors limites auparavant.
- **D ✅** Un prototype permet de vérifier un appel, mais ne remplace pas la définition de la fonction.

**Réponse candidate :** D · **Explication :** La fiche indique : Un prototype permet de vérifier un appel, mais ne remplace pas la définition de la fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/1-prototype-de-fonction

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_000-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Prototype de fonction » ?

- **A ✅** Un prototype permet de vérifier un appel, mais ne remplace pas la définition de la fonction.
- **B ✅** Déclare le type de retour et les paramètres d’une fonction avant son utilisation ; la définition fournit son corps.
- **C ❌** Une struct définit un type composé de membres nommés, éventuellement de types différents.
- **D ❌** Reste : 5.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/1-prototype-de-fonction

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N14_001 — Entête de fonction

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/2-entete-de-fonction)

### V1-N14_001-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une fonction C doit posséder une signature adaptée : type de retour, nom, liste de paramètres. » ?

- **A ✅** Entête de fonction
- **B ❌** Commentaires et lisibilité
- **C ❌** Compilation et liaison
- **D ❌** Taille des types

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/2-entete-de-fonction

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_001-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Entête de fonction » ?

- **A ❌** sizeof donne la taille en octets d’un type ou d’un objet sur la machine utilisée ; ne pas supposer une taille universelle pour int ou un pointeur.
- **B ✅** Une fonction C doit posséder une signature adaptée : type de retour, nom, liste de paramètres.
- **C ❌** Utiliser des noms compréhensibles, une indentation cohérente et des commentaires utiles plutôt que paraphraser chaque instruction.
- **D ❌** Le préprocesseur prépare le texte, le compilateur produit du code, l’assembleur génère des objets, et l’éditeur de liens crée l’exécutable.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Une fonction C doit posséder une signature adaptée : type de retour, nom, liste de paramètres.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/2-entete-de-fonction

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_001-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Entête de fonction » ?

- **A ❌** Un fichier objet peut être correct alors que la liaison échoue faute de définition.
- **B ❌** sizeof(char) vaut toujours 1 en C ; la taille d'un octet en bits et celle des autres types varient selon la plateforme.
- **C ✅** Pour une fonction non void, une valeur de retour compatible doit être fournie lorsque le contrat l'exige.
- **D ❌** Commente l'intention ou les contraintes ; évite les commentaires qui répètent le code.

**Réponse candidate :** C · **Explication :** La fiche indique : Pour une fonction non void, une valeur de retour compatible doit être fournie lorsque le contrat l'exige.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/2-entete-de-fonction

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_001-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Entête de fonction » ?

- **A ❌** Avant malloc(n * sizeof *p), vérifier que n ne dépasse pas la capacité de size_t divisée par sizeof *p afin d'éviter une allocation trop petite.
- **B ✅** Pour une fonction non void, une valeur de retour compatible doit être fournie lorsque le contrat l'exige.
- **C ✅** Une fonction C doit posséder une signature adaptée : type de retour, nom, liste de paramètres.
- **D ❌** strlen attend une chaîne se terminant par '\0' ; si un tableau de caractères n'en contient pas, la fonction peut lire hors de sa zone.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/2-entete-de-fonction

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N14_002 — Tester séparément

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/3-tester-separement)

### V1-N14_002-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Tester de petits cas et lire les avertissements du compilateur aide à comprendre une erreur sans recopier une solution. » ?

- **A ❌** Entête de fonction
- **B ❌** Prototype de fonction
- **C ❌** Base bundle — analyser le code de départ d'un lab
- **D ✅** Tester séparément

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/3-tester-separement

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_002-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Tester séparément » ?

- **A ✅** Tester de petits cas et lire les avertissements du compilateur aide à comprendre une erreur sans recopier une solution.
- **B ❌** Déclare le type de retour et les paramètres d’une fonction avant son utilisation ; la définition fournit son corps.
- **C ❌** Une fonction C doit posséder une signature adaptée : type de retour, nom, liste de paramètres.
- **D ❌** Le base bundle est l'ensemble de fichiers de départ fourni pour un exercice ; son audit consiste à vérifier les hypothèses, les entrées et les responsabilités mémoire avant d'émettre un diagnostic.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Tester de petits cas et lire les avertissements du compilateur aide à comprendre une erreur sans recopier une solution.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/3-tester-separement

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_002-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Tester séparément » ?

- **A ❌** Pour une fonction non void, une valeur de retour compatible doit être fournie lorsque le contrat l'exige.
- **B ❌** Dans une question portant sur le « base bundle », les scénarios de double free doivent être confirmés dans les fichiers fournis. Les causes typiques à rechercher sont des chemins de libération multiples et une ownership ambiguë, pas une supposée vulnérabilité universelle du bundle.
- **C ✅** Tester zéro, les bornes et les entrées inhabituelles permet de détecter des erreurs cachées.
- **D ❌** Un prototype permet de vérifier un appel, mais ne remplace pas la définition de la fonction.

**Réponse candidate :** C · **Explication :** La fiche indique : Tester zéro, les bornes et les entrées inhabituelles permet de détecter des erreurs cachées.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/3-tester-separement

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_002-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Tester séparément » ?

- **A ✅** Tester zéro, les bornes et les entrées inhabituelles permet de détecter des erreurs cachées.
- **B ❌** Pour comprendre un pointeur, distinguer à chaque ligne : variable, adresse contenue dans le pointeur et valeur à cette adresse.
- **C ❌** free libère un bloc obtenu par allocation dynamique ; le pointeur ne devient pas automatiquement NULL.
- **D ✅** Tester de petits cas et lire les avertissements du compilateur aide à comprendre une erreur sans recopier une solution.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/3-tester-separement

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N14_003 — Taille des types

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/4-taille-des-types)

### V1-N14_003-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « sizeof donne la taille en octets d’un type ou d’un objet sur la machine utilisée ; ne pas supposer une taille universelle pour int ou un pointeur. » ?

- **A ❌** Vulnérabilité ou attaque ? (OWASP)
- **B ❌** Commentaires et lisibilité
- **C ✅** Taille des types
- **D ❌** Invariant — condition qui doit rester vraie

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/4-taille-des-types

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_003-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Taille des types » ?

- **A ❌** Un invariant est une condition que le programme doit préserver à des moments définis ; en sécurité mémoire, il exprime notamment les bornes et la validité des pointeurs.
- **B ❌** Utiliser des noms compréhensibles, une indentation cohérente et des commentaires utiles plutôt que paraphraser chaque instruction.
- **C ❌** Une vulnérabilité est une faiblesse du programme ; une attaque est une action visant à exploiter cette faiblesse.
- **D ✅** sizeof donne la taille en octets d’un type ou d’un objet sur la machine utilisée ; ne pas supposer une taille universelle pour int ou un pointeur.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : sizeof donne la taille en octets d’un type ou d’un objet sur la machine utilisée ; ne pas supposer une taille universelle pour int ou un pointeur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/4-taille-des-types

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_003-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Taille des types » ?

- **A ✅** sizeof(char) vaut toujours 1 en C ; la taille d'un octet en bits et celle des autres types varient selon la plateforme.
- **B ❌** Un segfault ne prouve pas à lui seul qu'une attaque a eu lieu ; l'absence de crash n'exclut pas une vulnérabilité. On corrige d'abord la faiblesse du code.
- **C ❌** Invariant de copie : n < capacité_dest garantit ici que n + 1 octets tiennent dans le tableau. Cela suppose que source est déjà une chaîne valide ; vérifier une longueur ne répare pas des octets écrits hors limites auparavant.
- **D ❌** Commente l'intention ou les contraintes ; évite les commentaires qui répètent le code.

**Réponse candidate :** A · **Explication :** La fiche indique : sizeof(char) vaut toujours 1 en C ; la taille d'un octet en bits et celle des autres types varient selon la plateforme.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/4-taille-des-types

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_003-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Taille des types » ?

- **A ✅** sizeof donne la taille en octets d’un type ou d’un objet sur la machine utilisée ; ne pas supposer une taille universelle pour int ou un pointeur.
- **B ❌** strtol convertit une chaîne en long ; vérifier les chiffres lus, les caractères restants et les dépassements avec errno.
- **C ❌** int *p; : p est une variable de type « pointeur vers int ». Le * indique le type de variable déclaré.
- **D ✅** sizeof(char) vaut toujours 1 en C ; la taille d'un octet en bits et celle des autres types varient selon la plateforme.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/4-taille-des-types

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N14_004 — Compilation et liaison

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/5-compilation-et-liaison)

### V1-N14_004-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Le préprocesseur prépare le texte, le compilateur produit du code, l’assembleur génère des objets, et l’éditeur de liens crée l’exécutable. » ?

- **A ❌** Entête de fonction
- **B ✅** Compilation et liaison
- **C ❌** Taille des types
- **D ❌** Tester séparément

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/5-compilation-et-liaison

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_004-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Compilation et liaison » ?

- **A ❌** Tester de petits cas et lire les avertissements du compilateur aide à comprendre une erreur sans recopier une solution.
- **B ❌** Une fonction C doit posséder une signature adaptée : type de retour, nom, liste de paramètres.
- **C ✅** Le préprocesseur prépare le texte, le compilateur produit du code, l’assembleur génère des objets, et l’éditeur de liens crée l’exécutable.
- **D ❌** sizeof donne la taille en octets d’un type ou d’un objet sur la machine utilisée ; ne pas supposer une taille universelle pour int ou un pointeur.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Le préprocesseur prépare le texte, le compilateur produit du code, l’assembleur génère des objets, et l’éditeur de liens crée l’exécutable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/5-compilation-et-liaison

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_004-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Compilation et liaison » ?

- **A ❌** Tester zéro, les bornes et les entrées inhabituelles permet de détecter des erreurs cachées.
- **B ❌** Pour une fonction non void, une valeur de retour compatible doit être fournie lorsque le contrat l'exige.
- **C ❌** sizeof(char) vaut toujours 1 en C ; la taille d'un octet en bits et celle des autres types varient selon la plateforme.
- **D ✅** Un fichier objet peut être correct alors que la liaison échoue faute de définition.

**Réponse candidate :** D · **Explication :** La fiche indique : Un fichier objet peut être correct alors que la liaison échoue faute de définition.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/5-compilation-et-liaison

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_004-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Compilation et liaison » ?

- **A ✅** Un fichier objet peut être correct alors que la liaison échoue faute de définition.
- **B ✅** Le préprocesseur prépare le texte, le compilateur produit du code, l’assembleur génère des objets, et l’éditeur de liens crée l’exécutable.
- **C ❌** Associe des nombres aux caractères de base ; le caractère '0' vaut 48 en ASCII.
- **D ❌** Copier un dépôt / historique / changer de branche.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/5-compilation-et-liaison

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N14_005 — Commentaires et lisibilité

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/6-commentaires-et-lisibilite)

### V1-N14_005-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Utiliser des noms compréhensibles, une indentation cohérente et des commentaires utiles plutôt que paraphraser chaque instruction. » ?

- **A ✅** Commentaires et lisibilité
- **B ❌** Base bundle — analyser le code de départ d'un lab
- **C ❌** Prototype de fonction
- **D ❌** Invariant — condition qui doit rester vraie

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/6-commentaires-et-lisibilite

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_005-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Commentaires et lisibilité » ?

- **A ❌** Déclare le type de retour et les paramètres d’une fonction avant son utilisation ; la définition fournit son corps.
- **B ❌** Un invariant est une condition que le programme doit préserver à des moments définis ; en sécurité mémoire, il exprime notamment les bornes et la validité des pointeurs.
- **C ✅** Utiliser des noms compréhensibles, une indentation cohérente et des commentaires utiles plutôt que paraphraser chaque instruction.
- **D ❌** Le base bundle est l'ensemble de fichiers de départ fourni pour un exercice ; son audit consiste à vérifier les hypothèses, les entrées et les responsabilités mémoire avant d'émettre un diagnostic.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Utiliser des noms compréhensibles, une indentation cohérente et des commentaires utiles plutôt que paraphraser chaque instruction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/6-commentaires-et-lisibilite

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_005-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Commentaires et lisibilité » ?

- **A ✅** Commente l'intention ou les contraintes ; évite les commentaires qui répètent le code.
- **B ❌** Invariant de copie : n < capacité_dest garantit ici que n + 1 octets tiennent dans le tableau. Cela suppose que source est déjà une chaîne valide ; vérifier une longueur ne répare pas des octets écrits hors limites auparavant.
- **C ❌** Dans une question portant sur le « base bundle », les scénarios de double free doivent être confirmés dans les fichiers fournis. Les causes typiques à rechercher sont des chemins de libération multiples et une ownership ambiguë, pas une supposée vulnérabilité universelle du bundle.
- **D ❌** Un prototype permet de vérifier un appel, mais ne remplace pas la définition de la fonction.

**Réponse candidate :** A · **Explication :** La fiche indique : Commente l'intention ou les contraintes ; évite les commentaires qui répètent le code.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/6-commentaires-et-lisibilite

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_005-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Commentaires et lisibilité » ?

- **A ✅** Utiliser des noms compréhensibles, une indentation cohérente et des commentaires utiles plutôt que paraphraser chaque instruction.
- **B ✅** Commente l'intention ou les contraintes ; évite les commentaires qui répètent le code.
- **C ❌** Créer / retirer un raccourci de commande.
- **D ❌** tr ":" "\n" transforme les séparateurs « : » en retours à la ligne. Le nombre de répertoires peut se déduire des séparateurs, en traitant le dernier élément.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/6-commentaires-et-lisibilite

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N14_006 — Vulnérabilité ou attaque ? (OWASP)

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/7-vulnerabilite-ou-attaque-owasp)

### V1-N14_006-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Une vulnérabilité est une faiblesse du programme ; une attaque est une action visant à exploiter cette faiblesse. » ?

- **A ❌** Commentaires et lisibilité
- **B ❌** Taille des types
- **C ❌** Compilation et liaison
- **D ✅** Vulnérabilité ou attaque ? (OWASP)

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/7-vulnerabilite-ou-attaque-owasp · https://owasp.org/www-community/attacks/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_006-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Vulnérabilité ou attaque ? (OWASP) » ?

- **A ✅** Une vulnérabilité est une faiblesse du programme ; une attaque est une action visant à exploiter cette faiblesse.
- **B ❌** Le préprocesseur prépare le texte, le compilateur produit du code, l’assembleur génère des objets, et l’éditeur de liens crée l’exécutable.
- **C ❌** Utiliser des noms compréhensibles, une indentation cohérente et des commentaires utiles plutôt que paraphraser chaque instruction.
- **D ❌** sizeof donne la taille en octets d’un type ou d’un objet sur la machine utilisée ; ne pas supposer une taille universelle pour int ou un pointeur.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Une vulnérabilité est une faiblesse du programme ; une attaque est une action visant à exploiter cette faiblesse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/7-vulnerabilite-ou-attaque-owasp · https://owasp.org/www-community/attacks/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_006-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Vulnérabilité ou attaque ? (OWASP) » ?

- **A ❌** Commente l'intention ou les contraintes ; évite les commentaires qui répètent le code.
- **B ❌** sizeof(char) vaut toujours 1 en C ; la taille d'un octet en bits et celle des autres types varient selon la plateforme.
- **C ✅** Un segfault ne prouve pas à lui seul qu'une attaque a eu lieu ; l'absence de crash n'exclut pas une vulnérabilité. On corrige d'abord la faiblesse du code.
- **D ❌** Un fichier objet peut être correct alors que la liaison échoue faute de définition.

**Réponse candidate :** C · **Explication :** La fiche indique : Un segfault ne prouve pas à lui seul qu'une attaque a eu lieu ; l'absence de crash n'exclut pas une vulnérabilité. On corrige d'abord la faiblesse du code.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/7-vulnerabilite-ou-attaque-owasp · https://owasp.org/www-community/attacks/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_006-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Vulnérabilité ou attaque ? (OWASP) » ?

- **A ✅** Un segfault ne prouve pas à lui seul qu'une attaque a eu lieu ; l'absence de crash n'exclut pas une vulnérabilité. On corrige d'abord la faiblesse du code.
- **B ❌** Fichier texte qui contient une suite de commandes exécutables par un Shell.
- **C ❌** Créer un dossier / créer un fichier vide ou actualiser sa date.
- **D ✅** Une vulnérabilité est une faiblesse du programme ; une attaque est une action visant à exploiter cette faiblesse.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/7-vulnerabilite-ou-attaque-owasp · https://owasp.org/www-community/attacks/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N14_007 — Invariant — condition qui doit rester vraie

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/8-invariant-condition-qui-doit-rester-vraie)

### V1-N14_007-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Un invariant est une condition que le programme doit préserver à des moments définis ; en sécurité mémoire, il exprime notamment les bornes et la validité des pointeurs. » ?

- **A ❌** Entête de fonction
- **B ❌** Prototype de fonction
- **C ✅** Invariant — condition qui doit rester vraie
- **D ❌** Tester séparément

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/8-invariant-condition-qui-doit-rester-vraie · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_007-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Invariant — condition qui doit rester vraie » ?

- **A ❌** Une fonction C doit posséder une signature adaptée : type de retour, nom, liste de paramètres.
- **B ❌** Déclare le type de retour et les paramètres d’une fonction avant son utilisation ; la définition fournit son corps.
- **C ❌** Tester de petits cas et lire les avertissements du compilateur aide à comprendre une erreur sans recopier une solution.
- **D ✅** Un invariant est une condition que le programme doit préserver à des moments définis ; en sécurité mémoire, il exprime notamment les bornes et la validité des pointeurs.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Un invariant est une condition que le programme doit préserver à des moments définis ; en sécurité mémoire, il exprime notamment les bornes et la validité des pointeurs.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/8-invariant-condition-qui-doit-rester-vraie · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_007-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Invariant — condition qui doit rester vraie » ?

- **A ❌** Pour une fonction non void, une valeur de retour compatible doit être fournie lorsque le contrat l'exige.
- **B ❌** Tester zéro, les bornes et les entrées inhabituelles permet de détecter des erreurs cachées.
- **C ✅** Invariant de copie : n < capacité_dest garantit ici que n + 1 octets tiennent dans le tableau. Cela suppose que source est déjà une chaîne valide ; vérifier une longueur ne répare pas des octets écrits hors limites auparavant.
- **D ❌** Un prototype permet de vérifier un appel, mais ne remplace pas la définition de la fonction.

**Réponse candidate :** C · **Explication :** La fiche indique : Invariant de copie : n < capacité_dest garantit ici que n + 1 octets tiennent dans le tableau. Cela suppose que source est déjà une chaîne valide ; vérifier une longueur ne répare pas des octets écrits hors limites auparavant.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/8-invariant-condition-qui-doit-rester-vraie · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_007-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Invariant — condition qui doit rester vraie » ?

- **A ❌** Si p est une variable de type struct point (l’objet lui-même), p.x lit ou modifie son membre x. Le point s’emploie sur l’objet, pas directement sur son adresse.
- **B ❌** Une fonction qui reçoit struct point p obtient une copie : modifier p.x ne change pas l’objet initial.
- **C ✅** Un invariant est une condition que le programme doit préserver à des moments définis ; en sécurité mémoire, il exprime notamment les bornes et la validité des pointeurs.
- **D ✅** Invariant de copie : n < capacité_dest garantit ici que n + 1 octets tiennent dans le tableau. Cela suppose que source est déjà une chaîne valide ; vérifier une longueur ne répare pas des octets écrits hors limites auparavant.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/8-invariant-condition-qui-doit-rester-vraie · https://community.owasp.org/vulnerabilities/Buffer_Overflow

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N14_008 — Base bundle — analyser le code de départ d'un lab

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/9-base-bundle-analyser-le-code-de-depart-d-un-lab)

### V1-N14_008-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Le base bundle est l'ensemble de fichiers de départ fourni pour un exercice ; son audit consiste à vérifier les hypothèses, les entrées et les responsabilités mémoire avant d'émettre un diagnostic. » ?

- **A ❌** Invariant — condition qui doit rester vraie
- **B ❌** Commentaires et lisibilité
- **C ✅** Base bundle — analyser le code de départ d'un lab
- **D ❌** Vulnérabilité ou attaque ? (OWASP)

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/9-base-bundle-analyser-le-code-de-depart-d-un-lab · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_008-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Base bundle — analyser le code de départ d'un lab » ?

- **A ✅** Le base bundle est l'ensemble de fichiers de départ fourni pour un exercice ; son audit consiste à vérifier les hypothèses, les entrées et les responsabilités mémoire avant d'émettre un diagnostic.
- **B ❌** Utiliser des noms compréhensibles, une indentation cohérente et des commentaires utiles plutôt que paraphraser chaque instruction.
- **C ❌** Une vulnérabilité est une faiblesse du programme ; une attaque est une action visant à exploiter cette faiblesse.
- **D ❌** Un invariant est une condition que le programme doit préserver à des moments définis ; en sécurité mémoire, il exprime notamment les bornes et la validité des pointeurs.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Le base bundle est l'ensemble de fichiers de départ fourni pour un exercice ; son audit consiste à vérifier les hypothèses, les entrées et les responsabilités mémoire avant d'émettre un diagnostic.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/9-base-bundle-analyser-le-code-de-depart-d-un-lab · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_008-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Base bundle — analyser le code de départ d'un lab » ?

- **A ❌** Un segfault ne prouve pas à lui seul qu'une attaque a eu lieu ; l'absence de crash n'exclut pas une vulnérabilité. On corrige d'abord la faiblesse du code.
- **B ❌** Commente l'intention ou les contraintes ; évite les commentaires qui répètent le code.
- **C ❌** Invariant de copie : n < capacité_dest garantit ici que n + 1 octets tiennent dans le tableau. Cela suppose que source est déjà une chaîne valide ; vérifier une longueur ne répare pas des octets écrits hors limites auparavant.
- **D ✅** Dans une question portant sur le « base bundle », les scénarios de double free doivent être confirmés dans les fichiers fournis. Les causes typiques à rechercher sont des chemins de libération multiples et une ownership ambiguë, pas une supposée vulnérabilité universelle du bundle.

**Réponse candidate :** D · **Explication :** La fiche indique : Dans une question portant sur le « base bundle », les scénarios de double free doivent être confirmés dans les fichiers fournis. Les causes typiques à rechercher sont des chemins de libération multiples et une ownership ambiguë, pas une supposée vulnérabilité universelle du bundle.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/9-base-bundle-analyser-le-code-de-depart-d-un-lab · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N14_008-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Base bundle — analyser le code de départ d'un lab » ?

- **A ❌** Un callback est une fonction dont l'adresse est passée à une autre fonction ; celle-ci l'appelle au bon moment via le pointeur reçu.
- **B ✅** Le base bundle est l'ensemble de fichiers de départ fourni pour un exercice ; son audit consiste à vérifier les hypothèses, les entrées et les responsabilités mémoire avant d'émettre un diagnostic.
- **C ✅** Dans une question portant sur le « base bundle », les scénarios de double free doivent être confirmés dans les fichiers fournis. Les causes typiques à rechercher sont des chemins de libération multiples et une ownership ambiguë, pas une supposée vulnérabilité universelle du bundle.
- **D ❌** L'ownership désigne la responsabilité de libérer une allocation ; copier ou transmettre un pointeur ne transfère pas automatiquement cette responsabilité.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/9-base-bundle-analyser-le-code-de-depart-d-un-lab · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/recommendations/memory-management-mem/mem01-c/ · https://cmu-sei.github.io/secure-coding-standards/sei-cert-c-coding-standard/rules/memory-management-mem/

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

