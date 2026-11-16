# Revue contradictoire — 25 questions du prototype de quiz #14

> **DOCUMENT DE REVUE — NON PUBLIÉ SUR LE SITE.** Copie fidèle des questions, options, réponses de référence et explications du prototype #14 au 16 novembre 2026. Ces réponses sont celles **proposées par le prototype**, **pas encore validées par les IA indépendantes**. Aucune question ci-dessous n'est intégrée à la production par cette PR.

## Objet

Faire vérifier **toutes les propositions vraies et fausses**, sans perdre les erreurs ou ambiguïtés des distracteurs. Les évaluateurs doivent contester les choix proposés, relever les cas de comportement indéfini, les dépendances d'environnement, la compatibilité du langage C et toute formulation trompeuse.

- **Origine :** [PR #14 — pilote de quiz](https://github.com/Simondbf/site_revision_holberton/pull/14), banque intégrée à son ancien `index.html`.
- **Volume audité :** 25 questions / 5 notions / quatre propositions par question.
- **État :** toutes les questions du prototype sont de type **« une seule bonne réponse »**. La prise en charge des **réponses multiples** est une exigence nouvelle, non présente dans ce fichier d'origine.
- **Document source en JSON :** [pilote-14-source.json](pilote-14-source.json) (export de la banque brute, pour une vérification automatisée par d'autres IA).

## Questions et réponses à auditer

**Légende :** ✅ = réponse déclarée correcte par la banque du prototype ; ❌ = réponse déclarée incorrecte. **Ces marques ne préjugent pas de la validation finale**.

### Programmation C — scanf() — lire une saisie au clavier

**Notion :** `8:25` · **Fiche de révision :** [ouvrir le cours](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Questions :** 5

#### sc1 — Question 1/5 (niveau interne 1)

**Énoncé :** Pour enregistrer un entier dans la variable `int age`, quel argument transmettre à `scanf("%d", ...)` ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** `age`
- **B. ✅** `&age`
- **C. ❌** `*age`
- **D. ❌** `sizeof age`

**Réponse déclarée correcte :** B.

**Justification fournie :** scanf attend l'adresse de la variable où écrire l'entier ; &age fournit cette adresse.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### sc2 — Question 2/5 (niveau interne 1)

**Énoncé :** Que signifie le retour `1` de `scanf("%d", &age)` ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** Un caractère a été lu
- **B. ✅** Une conversion a été affectée
- **C. ❌** L'entier lu vaut 1
- **D. ❌** Une erreur de lecture s'est produite

**Réponse déclarée correcte :** B.

**Justification fournie :** La valeur de retour indique le nombre de conversions effectivement affectées, ici une.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### sc3 — Question 3/5 (niveau interne 2)

**Énoncé :** Pour `char mot[20]`, quelle lecture évite d'écrire au-delà du tableau ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** `scanf("%20s", mot)`
- **B. ❌** `scanf("%s", &mot)`
- **C. ✅** `scanf("%19s", mot)`
- **D. ❌** `scanf("%19s", &mot)`

**Réponse déclarée correcte :** C.

**Justification fournie :** La largeur 19 réserve une case pour '\0' et le nom du tableau se convertit en adresse du premier caractère.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### sc4 — Question 4/5 (niveau interne 2)

**Énoncé :** Pour lire un caractère en ignorant les retours à la ligne laissés avant la saisie, quel format utiliser ?

**Mode du prototype :** une seule bonne réponse.

- **A. ✅** `" %c"`
- **B. ❌** `"%c"`
- **C. ❌** `"%s"`
- **D. ❌** `"%d"`

**Réponse déclarée correcte :** A.

**Justification fournie :** L'espace initial dans le format demande d'ignorer les caractères blancs avant la conversion %c.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### sc5 — Question 5/5 (niveau interne 3)

**Énoncé :** On déclare `float f; double d;`. Quel appel à scanf attend les bons types ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** `scanf("%lf %f", &f, &d)`
- **B. ❌** `scanf("%f %f", &f, &d)`
- **C. ❌** `scanf("%lf %lf", &f, &d)`
- **D. ✅** `scanf("%f %lf", &f, &d)`

**Réponse déclarée correcte :** D.

**Justification fournie :** Dans scanf, %f attend un float * et %lf un double * ; ces conventions diffèrent de celles de printf.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

### Programmation C — fgets() — lire une ligne avec une limite

**Notion :** `8:26` · **Fiche de révision :** [ouvrir le cours](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/27-fgets-lire-une-ligne-avec-une-limite) · **Questions :** 5

#### fg1 — Question 1/5 (niveau interne 1)

**Énoncé :** Avec `char ligne[12]`, quel nombre maximal de caractères utiles `fgets(ligne, sizeof ligne, stdin)` peut-elle enregistrer ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** 12
- **B. ✅** 11
- **C. ❌** 10
- **D. ❌** 13

**Réponse déclarée correcte :** B.

**Justification fournie :** fgets réserve toujours une place pour le caractère nul ; la capacité utile maximale est 12 − 1 = 11.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/fgets.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### fg2 — Question 2/5 (niveau interne 1)

**Énoncé :** Quel retour de fgets faut-il tester pour détecter une erreur de lecture ou une fin de fichier avant toute donnée ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** `0`
- **B. ❌** `EOF`
- **C. ✅** `NULL`
- **D. ❌** `-1`

**Réponse déclarée correcte :** C.

**Justification fournie :** fgets renvoie un pointeur vers le tableau en cas de succès, sinon NULL.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/fgets.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### fg3 — Question 3/5 (niveau interne 2)

**Énoncé :** Après `fgets`, quelle affirmation sur le retour à la ligne est exacte ?

**Mode du prototype :** une seule bonne réponse.

- **A. ✅** Il peut être conservé si la ligne complète est lue
- **B. ❌** Il est toujours supprimé automatiquement
- **C. ❌** Il est systématiquement remplacé par un espace
- **D. ❌** Il est obligatoire même si le tampon était plein

**Réponse déclarée correcte :** A.

**Justification fournie :** Quand fgets rencontre '\n' avant la limite de longueur, elle le conserve dans le tableau.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/fgets.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### fg4 — Question 4/5 (niveau interne 2)

**Énoncé :** Pour supprimer un éventuel `\n` d'une chaîne lue avec fgets, quelle instruction convient ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** `ligne[strlen(ligne) + 1] = 0;`
- **B. ❌** `ligne[0] = '\0';`
- **C. ❌** `ligne[sizeof ligne] = '\0';`
- **D. ✅** `ligne[strcspn(ligne, "\n")] = '\0';`

**Réponse déclarée correcte :** D.

**Justification fournie :** strcspn repère le premier '\n' ou, s'il manque, le '\0' final ; l'écriture reste dans le tableau valide.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/fgets.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### fg5 — Question 5/5 (niveau interne 3)

**Énoncé :** Une ligne d'entrée est plus longue que le tableau donné à fgets. Que faut-il prévoir ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** La fonction agrandit le tableau
- **B. ❌** La fonction lit l'entrée entière puis la découpe automatiquement
- **C. ✅** Une partie de l'entrée peut rester dans stdin
- **D. ❌** La lecture devient une écriture hors limites

**Réponse déclarée correcte :** C.

**Justification fournie :** fgets limite ce qu'elle écrit, mais ne consomme pas nécessairement la totalité de la ligne trop longue.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/fgets.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

### Pointeurs et tableaux C — malloc — allocation dynamique

**Notion :** `9:30` · **Fiche de révision :** [ouvrir le cours](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique) · **Questions :** 5

#### ma1 — Question 1/5 (niveau interne 1)

**Énoncé :** Quel est le résultat de `malloc` si elle ne peut pas allouer le bloc demandé ?

**Mode du prototype :** une seule bonne réponse.

- **A. ✅** Un pointeur NULL
- **B. ❌** Un entier négatif
- **C. ❌** Un tableau de taille nulle toujours valide
- **D. ❌** Une adresse arbitraire

**Réponse déclarée correcte :** A.

**Justification fournie :** malloc renvoie NULL si l'allocation échoue ; il faut le vérifier avant d'utiliser le bloc.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/malloc.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### ma2 — Question 2/5 (niveau interne 1)

**Énoncé :** Quelle vérification faire avant de déréférencer un pointeur renvoyé par malloc ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** Vérifier qu'il vaut zéro
- **B. ✅** Vérifier qu'il n'est pas NULL
- **C. ❌** Vérifier que sa valeur est paire
- **D. ❌** Vérifier qu'il pointe vers la pile

**Réponse déclarée correcte :** B.

**Justification fournie :** Le pointeur renvoyé peut être NULL ; on vérifie sa validité avant d'accéder à *p.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/malloc.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### ma3 — Question 3/5 (niveau interne 2)

**Énoncé :** Avec `int *p; size_t n = 5;`, quelle demande réserve de l'espace pour cinq int ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** `malloc(n)`
- **B. ❌** `malloc(sizeof p)`
- **C. ✅** `malloc(n * sizeof *p)`
- **D. ❌** `malloc(sizeof n)`

**Réponse déclarée correcte :** C.

**Justification fournie :** sizeof *p donne la taille d'un int ; multipliée par n, elle couvre les cinq éléments.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/malloc.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### ma4 — Question 4/5 (niveau interne 2)

**Énoncé :** Quelles valeurs contient un tableau d'int obtenu par malloc avant initialisation explicite ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** Uniquement des zéros
- **B. ❌** Uniquement des -1
- **C. ❌** Une suite de 1
- **D. ✅** Des valeurs indéterminées qu'on ne doit pas lire

**Réponse déclarée correcte :** D.

**Justification fournie :** malloc ne met pas le bloc à zéro ; lire un int non initialisé n'est pas une utilisation valide de ses données.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/malloc.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### ma5 — Question 5/5 (niveau interne 3)

**Énoncé :** Avant `malloc(n * sizeof *p)` pour un `size_t n`, quelle condition permet de refuser une multiplication qui dépasse size_t ?

**Mode du prototype :** une seule bonne réponse.

- **A. ✅** `n > ((size_t)-1) / sizeof *p`
- **B. ❌** `n > sizeof *p`
- **C. ❌** `n == 0`
- **D. ❌** `n < sizeof *p`

**Réponse déclarée correcte :** A.

**Justification fournie :** La division par la taille d'un élément donne le plus grand nombre d'éléments représentable sans débordement.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/malloc.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

### Pointeurs et tableaux C — free — libérer la mémoire

**Notion :** `9:31` · **Fiche de révision :** [ouvrir le cours](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire) · **Questions :** 5

#### fr1 — Question 1/5 (niveau interne 1)

**Énoncé :** Quel est l'effet défini de `free(NULL)` ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** Il provoque toujours une erreur
- **B. ❌** Il libère toutes les allocations
- **C. ✅** Il ne fait rien
- **D. ❌** Il libère une case de la pile

**Réponse déclarée correcte :** C.

**Justification fournie :** Passer NULL à free est autorisé et n'a aucun effet.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/malloc.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### fr2 — Question 2/5 (niveau interne 1)

**Énoncé :** Quand libérer un bloc obtenu par malloc ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** Avant sa première utilisation
- **B. ✅** Quand le programme n'en a plus besoin, une seule fois
- **C. ❌** Après chaque lecture
- **D. ❌** Immédiatement avant l'écriture dans ce bloc

**Réponse déclarée correcte :** B.

**Justification fournie :** On libère une allocation une fois que ses données ne servent plus, puis on ne l'utilise plus.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/malloc.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### fr3 — Question 3/5 (niveau interne 2)

**Énoncé :** Lequel de ces objets peut être transmis à free ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** `char local[10];`
- **B. ❌** Un pointeur vers une chaîne littérale
- **C. ❌** L'adresse d'un int local
- **D. ✅** Le pointeur non NULL renvoyé par malloc, encore alloué

**Réponse déclarée correcte :** D.

**Justification fournie :** free attend une allocation dynamique encore active (ou NULL), pas une variable automatique ni un littéral.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/malloc.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### fr4 — Question 4/5 (niveau interne 2)

**Énoncé :** Après `free(p)`, quelle proposition est juste ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** p est automatiquement égal à NULL
- **B. ❌** p conserve nécessairement un accès valide au bloc
- **C. ✅** p n'est pas automatiquement mis à NULL
- **D. ❌** le bloc doit être relu pour vérifier sa libération

**Réponse déclarée correcte :** C.

**Justification fournie :** free ne remet pas la variable p à NULL ; l'ancien pointeur ne doit plus servir à accéder au bloc libéré.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/malloc.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### fr5 — Question 5/5 (niveau interne 3)

**Énoncé :** Que se passe-t-il dans `int *p = malloc(sizeof *p); int *q = p; free(p); free(q);` si malloc a réussi ?

**Mode du prototype :** une seule bonne réponse.

- **A. ✅** La seconde libération est un double free, comportement indéfini
- **B. ❌** La seconde libération est sans effet car p a été libéré
- **C. ❌** q devient NULL automatiquement
- **D. ❌** Le bloc est libéré une moitié à chaque appel

**Réponse déclarée correcte :** A.

**Justification fournie :** q est un alias de la même adresse ; free(p) a déjà libéré ce bloc, donc free(q) est invalide.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/malloc.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

### Pointeurs et tableaux C — realloc — redimensionner une allocation

**Notion :** `9:45` · **Fiche de révision :** [ouvrir le cours](https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation) · **Questions :** 5

#### re1 — Question 1/5 (niveau interne 1)

**Énoncé :** À quoi sert principalement `realloc` ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** Fermer un flux
- **B. ✅** Redimensionner une allocation dynamique
- **C. ❌** Afficher l'adresse d'un pointeur
- **D. ❌** Initialiser une variable locale

**Réponse déclarée correcte :** B.

**Justification fournie :** realloc sert à changer la taille d'un bloc alloué dynamiquement.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/malloc.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### re2 — Question 2/5 (niveau interne 1)

**Énoncé :** Pourquoi utiliser un pointeur temporaire avec `realloc(p, nouvelle_taille)` ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** Pour rendre l'allocation plus rapide
- **B. ❌** Pour mettre tous les octets à zéro
- **C. ✅** Pour conserver p si la réallocation échoue
- **D. ❌** Pour éviter tout besoin de free

**Réponse déclarée correcte :** C.

**Justification fournie :** En cas d'échec, realloc renvoie NULL et l'ancien bloc reste alloué ; un pointeur temporaire évite de perdre sa référence.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/malloc.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### re3 — Question 3/5 (niveau interne 2)

**Énoncé :** Quand `realloc(p, taille)` réussit avec une taille positive, que devient l'ancien pointeur p ?

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** Il reste toujours valide pour accéder au bloc
- **B. ❌** Il devient forcément NULL
- **C. ❌** Il désigne un second bloc indépendant
- **D. ✅** Il ne doit plus être utilisé pour accéder à l'allocation

**Réponse déclarée correcte :** D.

**Justification fournie :** Après une réallocation réussie, utiliser l'ancien pointeur pour accéder à l'objet est invalide, même si l'adresse n'a pas changé.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/malloc.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### re4 — Question 4/5 (niveau interne 2)

**Énoncé :** Si realloc agrandit un bloc, quel est l'état des octets ajoutés ?

**Mode du prototype :** une seule bonne réponse.

- **A. ✅** Ils ne sont pas automatiquement initialisés
- **B. ❌** Ils contiennent forcément zéro
- **C. ❌** Ils contiennent une copie des premiers octets
- **D. ❌** Ils sont toujours remplis d'espaces

**Réponse déclarée correcte :** A.

**Justification fournie :** Les octets supplémentaires sont non initialisés ; il faut leur donner une valeur avant de les lire.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/malloc.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

#### re5 — Question 5/5 (niveau interne 3)

**Énoncé :** Dans le cas d'une taille strictement positive, `realloc(NULL, taille)` se comporte comme…

**Mode du prototype :** une seule bonne réponse.

- **A. ❌** `free(NULL)`
- **B. ✅** `malloc(taille)`
- **C. ❌** `calloc(taille, 1)`
- **D. ❌** `memcpy`

**Réponse déclarée correcte :** B.

**Justification fournie :** Avec un pointeur NULL et une taille positive, realloc réalise une allocation comparable à malloc, sans initialisation à zéro.

**Référence à vérifier :** https://man7.org/linux/man-pages/man3/malloc.3.html

**Décision de revue :** ☐ Valider telle quelle · ☐ Corriger la réponse · ☐ Reformuler · ☐ Rejeter

**Remarques / preuve :** _à compléter par les évaluateurs_

---

## Nouvelles règles imposées pour le quiz final (NE PAS appliquer rétroactivement au prototype)

1. **Une ou plusieurs bonnes réponses** par question. En interface, annoncer uniquement **« Une seule bonne réponse »** ou **« Plusieurs bonnes réponses »**, jamais le nombre exact si plusieurs. Boutons radio pour une seule réponse, cases à cocher pour plusieurs. La possibilité de cocher plusieurs mauvaises réponses est autorisée avant validation ; on corrige à la soumission.
2. **Modèle de données v2 recommandé :** `id` stable, `notion_id` stable, `prompt`, `options: [{id, text}]`, `answer_mode: "single" | "multiple"`, `correct_option_ids: string[]`, `level` (interne), `explanation`, `option_feedback` si utile, `sources`, `review_status` et version. En mode multiple, au moins deux options correctes ; une réponse unique en mode single. **Ne jamais déduire la bonne réponse de la position des options.**
3. **Notation :** annoncer clairement la règle choisie ; par défaut, score plein si et seulement si l'ensemble des options cochées correspond exactement à la combinaison correcte, sans possibilité d'obtenir des points en cochant tout. Pour l'analyse pédagogique, enregistrer aussi les erreurs d'omission et les mauvaises sélections, sans exposer les réponses avant validation.
4. **Après chaque réponse :** afficher une explication fiable et un lien direct vers la **fiche correspondante** (`notion_id`), particulièrement en cas d'erreur. Ne jamais utiliser un lien approximatif vers un autre thème.
5. **Bilan automatique de fin de session :** total des réponses correctes, taux de réussite, questions répondues/non répondues, diagnostic par notion (réussites, erreurs, types d'erreurs), propositions de notions à retravailler, liens directs vers les fiches, et suggestion de nouveaux quiz adaptés. Un mauvais résultat avec seulement une question sur une notion doit être présenté comme **signal faible**, pas comme diagnostic fiable.
6. **Suivi facultatif :** en mode invité, historique local et export possible ; si l'élève crée volontairement un compte, espace personnel **« Ma progression »** avec historique daté, reprises de quiz, évolution par notion, difficultés répétées et synchronisation multi-appareils. Un compte ne peut jamais être requis pour les quiz ni les cours.
7. **Taille de la banque :** viser environ **50–100 questions variées par notion en moyenne**, plus ou moins selon la complexité ; les notions de culture générale et les petits sujets peuvent en comporter nettement moins. Le chiffre n'est pas une obligation rigide. Un quiz individuel ne doit pas nécessairement poser toutes les questions de la banque.
8. **Contre-relecture :** revue indépendante par plusieurs IA, confrontation aux manuels/standards et, lorsque pertinent, tests de compilation/exécution des exemples C avec plusieurs cas. Détecter doublons, mauvais distracteurs, erreurs factuelles, sous-spécification et niveaux de difficulté incohérents. La dernière validation éditoriale demeure explicite.

## Grille de revue à remplir par Claude, Gemini ou une autre IA

Pour chaque identifiant `sc1`…`re5`, rendre idéalement :
```text
ID :
Verdict : VALIDE / À CORRIGER / AMBIGU / À REJETER
Bonnes réponses retenues (lettres) :
Chaque autre proposition est-elle fausse ? Pourquoi ?
Ambiguïtés ou cas limites :
Correction minimale proposée :
Preuve : manuel / standard / test reproductible :
Confiance : forte / moyenne / faible
```

**Consigne importante :** les évaluateurs doivent travailler **sans considérer ✅ comme une preuve** et signaler une réponse du prototype qui serait seulement « souvent vraie ». Ne jamais publier les questions avant revue contradictoire et approbation finale.
