# Revue de questions — questions c techniques

**41 nouvelles questions candidates, non validées.** Les réponses visibles ci-dessous servent exclusivement à la revue des IA ; elles ne sont pas destinées à l'interface du quiz. Les propositions ont été réordonnées de manière déterministe pour éviter qu'une position signale systématiquement la bonne réponse.

## CDEEP-08-000-01 — main()

**Une seule bonne réponse**

En C hébergé, quelle forme d'entrée est conventionnellement utilisée comme point de départ du programme ?

- **A ❌** int scanf(void)
- **B ❌** void start(void)
- **C ❌** char printf(void)
- **D ✅** int main(void)

**Corrigé candidat :** D. main est le point d'entrée du programme C hébergé.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/1-main

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-001-01 — Prototype vs définition

**Plusieurs bonnes réponses**

Quelles propositions distinguent prototype et définition de fonction ?

- **A ❌** Le prototype exécute une fonction lors de la compilation
- **B ✅** La définition apporte le corps de la fonction
- **C ❌** Tout prototype doit obligatoirement contenir un corps
- **D ✅** Le prototype annonce les types de paramètres et le retour

**Corrigé candidat :** B, D. Le prototype indique la signature ; la définition apporte le code exécuté.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/2-prototype-vs-definition

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-002-01 — void

**Une seule bonne réponse**

Que signifie le retour `void` dans une définition de fonction ?

- **A ✅** La fonction ne renvoie pas de valeur
- **B ❌** Elle reçoit forcément un paramètre int
- **C ❌** Elle ne peut effectuer aucun appel
- **D ❌** Elle retourne forcément 0

**Corrigé candidat :** A. void indique l'absence de valeur de retour.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/3-void

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-003-01 — return

**Une seule bonne réponse**

Dans une fonction `int calcul(void)`, quelle instruction renvoie l'entier 7 ?

- **A ❌** exit;
- **B ✅** return 7;
- **C ❌** void 7;
- **D ❌** break 7;

**Corrigé candidat :** B. return fournit une valeur compatible avec le type de retour.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/4-return

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-004-01 — printf / _putchar

**Une seule bonne réponse**

Quel appel affiche `A` avec la conversion de caractère de printf ?

- **A ❌** printf("%p", 'A');
- **B ✅** printf("%c", 'A');
- **C ❌** printf("%d", "A");
- **D ❌** printf("%s", 'A');

**Corrigé candidat :** B. %c affiche un caractère à partir de la valeur entière promue.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/5-printf-putchar

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-005-01 — %d / %c / %.6f

**Une seule bonne réponse**

Pour `double d=1.5;`, quelle conversion de printf affiche six chiffres après la virgule (locale C) ?

- **A ❌** %d
- **B ❌** %c
- **C ✅** %.6f
- **D ❌** %p

**Corrigé candidat :** C. %.6f indique six chiffres après le séparateur décimal pour une conversion flottante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/6-d-c-6f

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-006-01 — ASCII

**Une seule bonne réponse**

Quel code ASCII correspond à la lettre majuscule A ?

- **A ❌** 10
- **B ❌** 48
- **C ✅** 65
- **D ❌** 97

**Corrigé candidat :** C. Dans ASCII, A vaut 65, a vaut 97 et '0' vaut 48.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/7-ascii

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-007-01 — Compilation vs édition de liens

**Une seule bonne réponse**

À quelle étape rattache-t-on la résolution d'une référence externe à une fonction ?

- **A ❌** Lecture au clavier
- **B ✅** Édition de liens
- **C ❌** Montage d'un disque
- **D ❌** Prétraitement seul

**Corrigé candidat :** B. Le linker assemble les objets et résout les références externes.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/8-compilation-vs-edition-de-liens

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-008-01 — undefined reference

**Une seule bonne réponse**

Quelle situation peut produire `undefined reference to fonction` au lien ?

- **A ✅** La fonction a été déclarée mais sa définition n'est pas fournie au linker
- **B ❌** Une boucle for commence à 0
- **C ❌** La variable int vaut 0
- **D ❌** Une chaîne contient un retour à la ligne

**Corrigé candidat :** A. Une déclaration ne fournit pas le code de la fonction à l'éditeur de liens.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/9-undefined-reference

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-009-01 — gcc -o nom source.c

**Une seule bonne réponse**

Que fait `gcc -o programme main.c` lorsque toutes les étapes réussissent ?

- **A ❌** Affiche uniquement le prétraitement
- **B ❌** Produit forcément main.o sans lien
- **C ✅** Produit un exécutable nommé programme
- **D ❌** Démarre un dépôt Git

**Corrigé candidat :** C. -o définit le nom de sortie.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/10-gcc-o-nom-source-c

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-010-01 — GNU89

**Une seule bonne réponse**

Quelle instruction n'est pas une déclaration de boucle for portable en GNU89 strict avec -pedantic ?

- **A ❌** while (1)
- **B ✅** for (int i=0; i<3; i++)
- **C ❌** int i; for (i=0; i<3; i++)
- **D ❌** do {} while (0);

**Corrigé candidat :** B. Déclarer une variable dans l'initialisation d'un for est une fonctionnalité introduite en C99.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/11-gnu89

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-011-01 — gcc -E

**Une seule bonne réponse**

Que fait `gcc -E source.c` ?

- **A ❌** Génère toujours un fichier objet
- **B ✅** Exécute seulement le préprocesseur
- **C ❌** Exécute source.c
- **D ❌** Édite uniquement les liens

**Corrigé candidat :** B. -E arrête après le prétraitement.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/12-gcc-e

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-012-01 — gcc -S

**Une seule bonne réponse**

Que fait `gcc -S source.c` ?

- **A ❌** Lance un binaire nommé S
- **B ❌** Supprime les avertissements
- **C ✅** Produit du code assembleur sans assembler
- **D ❌** Génère uniquement le flux stdin

**Corrigé candidat :** C. -S s'arrête à la génération assembleur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/13-gcc-s

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-013-01 — gcc -c

**Une seule bonne réponse**

Que fait `gcc -c source.c` ?

- **A ❌** Télécharge la bibliothèque libc
- **B ❌** Produits uniquement des logs Git
- **C ✅** Compile/assemble en fichier objet sans étape de liaison
- **D ❌** Exécute le programme

**Corrigé candidat :** C. -c produit un fichier objet sans créer l'exécutable complet.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/14-gcc-c

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-014-01 — gcc -o

**Une seule bonne réponse**

Que signifie `-o sortie` dans une commande gcc ?

- **A ✅** Définit le nom du fichier de sortie
- **B ❌** Indique le langage Objective-C
- **C ❌** Active la lecture seule
- **D ❌** Optimise à un niveau o

**Corrigé candidat :** A. -o choisit le chemin du fichier généré.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/15-gcc-o

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-015-01 — puts / printf

**Plusieurs bonnes réponses**

Quels usages de `puts` sont corrects ?

- **A ✅** Ne prend pas de spécificateurs de format comme printf
- **B ❌** Formate des nombres avec %d comme printf
- **C ❌** Écrit nécessairement sur stderr
- **D ✅** Affiche une chaîne suivie d'un retour à la ligne

**Corrigé candidat :** A, D. puts écrit une chaîne puis une fin de ligne, contrairement aux conversions de printf.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/16-puts-printf

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-016-01 — Types entiers en C

**Une seule bonne réponse**

Peut-on supposer que `sizeof(int)` vaut toujours 4 sur toute implémentation C ?

- **A ❌** Oui, tout int occupe 64 bits
- **B ❌** Non, int ne possède jamais de taille
- **C ✅** Non, sa taille dépend de l'implémentation
- **D ❌** Oui, c'est imposé par tous les standards C

**Corrigé candidat :** C. Le standard impose des contraintes, mais pas 4 octets universels.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/17-types-entiers-en-c

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-017-01 — signed et unsigned

**Une seule bonne réponse**

Quelle propriété de l'arithmétique unsigned est garantie en C ?

- **A ❌** Toute opération unsigned provoque un crash en débordement
- **B ✅** Le résultat est réduit modulo 2^N selon la largeur du type
- **C ❌** Le résultat est indéfini comme pour le signed overflow
- **D ❌** Le résultat est toujours négatif après débordement

**Corrigé candidat :** B. L'arithmétique non signée est définie modulo un nombre lié à sa plage.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/18-signed-et-unsigned

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-018-01 — float et double

**Une seule bonne réponse**

Dans `printf`, `%f` attend quel type après les promotions d'arguments variadiques ?

- **A ❌** char *
- **B ❌** size_t
- **C ❌** float *
- **D ✅** double

**Corrigé candidat :** D. Un float argument est promu en double pour les appels variadiques.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/19-float-et-double

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-019-01 — char et caractère

**Plusieurs bonnes réponses**

Quelles déclarations produisent des objets de type char ?

- **A ✅** char lettre='A';
- **B ✅** char zero='\0';
- **C ❌** int lettre='A';
- **D ❌** double lettre='A';

**Corrigé candidat :** A, B. char déclare un caractère, la valeur '\0' est un caractère nul.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/20-char-et-caractere

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-020-01 — return 0 / return 1

**Une seule bonne réponse**

Qu'indique habituellement le retour de main à zéro ?

- **A ✅** Une fin de programme réussie
- **B ❌** Une fuite de mémoire automatiquement détectée
- **C ❌** Une erreur obligatoire de link
- **D ❌** Un signal systématique de segfault

**Corrigé candidat :** A. return 0 indique la réussite dans l'environnement hébergé.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/21-return-0-return-1

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-021-01 — return d’un caractère (char)

**Une seule bonne réponse**

Une fonction renvoie `char`; un appelant peut-il stocker le résultat dans un int ?

- **A ✅** Oui, la conversion intégrale existe
- **B ❌** Non, une fonction char ne retourne jamais
- **C ❌** Non, char et int sont incompatibles dans tous les contextes
- **D ❌** Oui mais seulement via malloc

**Corrigé candidat :** A. Un char peut être converti en int.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/22-return-d-un-caractere-char

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-022-01 — return d’un pointeur (int *)

**Plusieurs bonnes réponses**

À propos d'un pointeur renvoyé depuis une fonction C, quelles précautions sont justes ?

- **A ❌** Il est toujours sûr s'il est non NULL
- **B ❌** Un return garantit automatiquement la propriété du bloc
- **C ✅** Il ne doit pas pointer vers une variable automatique dont la durée de vie a fini
- **D ✅** Son objet cible doit rester valide à l'utilisation

**Corrigé candidat :** C, D. Validité et durée de vie de la cible restent essentielles.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/23-return-d-un-pointeur-int

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-023-01 — exit() — terminer le programme

**Une seule bonne réponse**

Quelle différence entre return et exit à l'intérieur d'une fonction ordinaire ?

- **A ✅** return quitte la fonction courante ; exit termine le processus selon son contrat
- **B ❌** return termine toujours le processus entier
- **C ❌** exit ne fait rien s'il est appelé dans main
- **D ❌** return libère automatiquement tout bloc malloc

**Corrigé candidat :** A. return concerne la fonction courante, exit concerne la terminaison du programme.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/24-exit-terminer-le-programme

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-024-01 — Dennis Ritchie — créateur du langage C

**Une seule bonne réponse**

À quel langage associe-t-on Dennis Ritchie parmi les propositions ?

- **A ❌** Python
- **B ❌** Java
- **C ✅** C
- **D ❌** Rust

**Corrigé candidat :** C. Dennis Ritchie a conçu le langage C.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/25-dennis-ritchie-createur-du-langage-c

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-025-01 — scanf() — lire une saisie au clavier

**Une seule bonne réponse**

Pour `int n;`, quel argument de `scanf("%d", ...)` est correct ?

- **A ❌** *n
- **B ✅** &n
- **C ❌** n
- **D ❌** sizeof n

**Corrigé candidat :** B. scanf exige l'adresse de l'objet int à remplir.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://en.cppreference.com/w/c/io/fscanf

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-025-02 — scanf() — lire une saisie au clavier

**Une seule bonne réponse**

Pour une saisie non numérique dès le premier caractère, que renvoie usuellement `scanf("%d", &n)` ?

- **A ❌** 1
- **B ✅** 0
- **C ❌** Le contenu de n
- **D ❌** -2

**Corrigé candidat :** B. Aucune conversion n'est affectée : échec de correspondance.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://en.cppreference.com/w/c/io/fscanf

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-026-01 — fgets() — lire une ligne avec une limite

**Plusieurs bonnes réponses**

Quelles affirmations concernant fgets sont correctes ?

- **A ❌** Elle agrandit automatiquement les tableaux trop petits
- **B ❌** Elle garantit que toute ligne dépassant la capacité est consommée
- **C ✅** Elle conserve le saut de ligne lorsqu'il est lu
- **D ✅** Elle lit au plus n-1 caractères utiles dans un tampon de n cases

**Corrigé candidat :** C, D. fgets peut conserver '\n' et laisse de la place pour '\0'.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/27-fgets-lire-une-ligne-avec-une-limite · https://en.cppreference.com/c/io/fgets

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-026-02 — fgets() — lire une ligne avec une limite

**Une seule bonne réponse**

Pourquoi faut-il vérifier le retour de fgets avant d'utiliser le tampon ?

- **A ❌** fgets renvoie le nombre de caractères
- **B ❌** Une erreur garantit toujours une chaîne vide
- **C ❌** fgets supprime toutes les erreurs de lecture
- **D ✅** NULL signale un échec ou une fin de fichier avant donnée

**Corrigé candidat :** D. Le tampon n'est pas nécessairement une ligne réussie si le résultat est NULL.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/27-fgets-lire-une-ligne-avec-une-limite · https://en.cppreference.com/c/io/fgets

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-027-01 — strtol() — convertir une entrée en entier

**Une seule bonne réponse**

Pourquoi utiliser strtol plutôt que atoi lors de la validation d'un entier saisi ?

- **A ❌** atoi renvoie toujours une structure complète
- **B ❌** atoi interdit les caractères numériques
- **C ✅** strtol offre un endptr et une détection d'erreur mieux adaptée
- **D ❌** strtol convertit seulement des chaînes de longueur 1

**Corrigé candidat :** C. strtol permet de vérifier l'endptr et une éventuelle plage hors limites.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/28-strtol-convertir-une-entree-en-entier · https://en.cppreference.com/w/c/string/byte/strtol

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-028-01 — Chaîne de format — ne pas utiliser une saisie comme format

**Une seule bonne réponse**

Pourquoi `printf(chaine_utilisateur)` est-il dangereux ?

- **A ❌** printf autorise uniquement les chaînes constantes
- **B ✅** La chaîne peut contenir des spécificateurs interprétés comme format
- **C ❌** printf ignore toujours les %
- **D ❌** La chaîne est toujours préalablement échappée

**Corrigé candidat :** B. Utiliser un format fixe, par exemple printf("%s", chaine).

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/29-chaine-de-format-ne-pas-utiliser-une-saisie-comme-format

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-029-01 — EOF — détecter la fin d'une entrée

**Une seule bonne réponse**

À quoi sert EOF lors de la lecture par getchar ?

- **A ✅** Indiquer une fin d'entrée ou une erreur selon l'état du flux
- **B ❌** Être un octet de nouvelle ligne
- **C ❌** Marquer systématiquement la valeur ASCII 255
- **D ❌** Représenter toujours le caractère '\0'

**Corrigé candidat :** A. getchar renvoie un int, permettant de distinguer les octets d'EOF.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/30-eof-detecter-la-fin-d-une-entree

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-08-030-01 — Integer overflow — dépassement de capacité d'un entier

**Une seule bonne réponse**

Le débordement d'un int signé lors de `INT_MAX+1` en C standard est-il défini ?

- **A ❌** Oui, il produit toujours INT_MIN
- **B ✅** Non, il entraîne un comportement indéfini
- **C ❌** Oui, il produit forcément 0
- **D ❌** Oui, il affiche un avertissement puis continue

**Corrigé candidat :** B. Le signed integer overflow est UB en C standard.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/31-integer-overflow-depassement-de-capacite-d-un-entier · https://en.cppreference.com/c/language/behavior

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-14-000-01 — Prototype de fonction

**Une seule bonne réponse**

Quel avantage apporte un prototype avant un appel de fonction C ?

- **A ❌** Allouer le tas automatiquement
- **B ❌** Créer une boucle implicite
- **C ✅** Vérifier la cohérence des paramètres et du retour
- **D ❌** Exécuter la fonction avant main

**Corrigé candidat :** C. Le prototype décrit la signature.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/1-prototype-de-fonction

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-14-001-01 — Entête de fonction

**Une seule bonne réponse**

Pourquoi documenter les paramètres d'une fonction ?

- **A ✅** Clarifier ses entrées et son résultat
- **B ❌** Changer la valeur de retour automatiquement
- **C ❌** Supprimer toute erreur de compilation
- **D ❌** Rendre inutile tout test

**Corrigé candidat :** A. La documentation explicite le contrat.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/2-entete-de-fonction

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-14-002-01 — Tester séparément

**Une seule bonne réponse**

Quel intérêt présente un test isolé d'une fonction ?

- **A ❌** Effacer le code obsolète
- **B ❌** Garantir l'absence de toute vulnérabilité
- **C ❌** Remplacer entièrement la compilation
- **D ✅** Localiser plus facilement une régression

**Corrigé candidat :** D. Des tests ciblés isolent les comportements.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/3-tester-separement

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-14-003-01 — Taille des types

**Une seule bonne réponse**

Pourquoi faut-il éviter de supposer que int et long ont une taille unique sur toutes les machines ?

- **A ❌** Tout type long occupe 8 octets selon le standard
- **B ❌** Les tailles n'existent pas
- **C ✅** Leurs tailles dépendent de l'implémentation
- **D ❌** Tout type int occupe 1 octet

**Corrigé candidat :** C. Utiliser sizeof et les contraintes du standard.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/4-taille-des-types

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-14-004-01 — Compilation et liaison

**Une seule bonne réponse**

Quelle erreur correspond à la phase de liaison et non à la syntaxe C ?

- **A ✅** undefined reference to symbole
- **B ❌** Une variable déclarée dans un for GNU89 strict
- **C ❌** Une accolade manquante
- **D ❌** Une expression avec un ; supplémentaire

**Corrigé candidat :** A. La liaison résout les symboles externes.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/5-compilation-et-liaison

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-14-005-01 — Commentaires et lisibilité

**Une seule bonne réponse**

Quel commentaire est le plus utile à un lecteur ?

- **A ❌** Une duplication de tous les messages stdout
- **B ❌** Un mot au hasard
- **C ✅** Une explication du pourquoi d'un choix non évident
- **D ❌** Un commentaire qui répète chaque opérateur évident

**Corrigé candidat :** C. Un commentaire utile apporte le contexte et les invariants.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/6-commentaires-et-lisibilite

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-14-007-01 — Invariant — condition qui doit rester vraie

**Une seule bonne réponse**

Qu'est-ce qu'un invariant dans un algorithme ?

- **A ❌** Un pointeur systématiquement NULL
- **B ❌** Une variable forcément constante dans toute la vie du programme
- **C ❌** Une sortie d'erreur de printf
- **D ✅** Une propriété qui doit rester vraie aux points définis

**Corrigé candidat :** D. L'invariant encadre le raisonnement correct.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/8-invariant-condition-qui-doit-rester-vraie

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-14-008-01 — Base bundle — analyser le code de départ d'un lab

**Une seule bonne réponse**

Comment analyser les fichiers de départ fournis pour un exercice C inconnu ?

- **A ❌** Exécuter free sur tous les pointeurs
- **B ❌** Affirmer une faille sans ouvrir le code
- **C ✅** Lire ses fichiers et reproduire les diagnostics
- **D ❌** Corriger uniquement son titre

**Corrigé candidat :** C. Le code et les tests sont nécessaires pour confirmer les risques.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/9-base-bundle-analyser-le-code-de-depart-d-un-lab

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée
