# Questions techniques de C — syntaxe, mémoire, pointeurs, structures et callbacks

**123 questions candidates inédites**. Toutes doivent faire l'objet d'une vérification documentaire et/ou de compilation avant publication. Les réponses déclarées correctes sont visibles uniquement dans cet outil de revue GitHub.

## CDEEP-08-000-01 — main()

**Une seule bonne réponse**

En C hébergé, quelle forme d'entrée est conventionnellement utilisée comme point de départ du programme ?

- **A ✅** int main(void)
- **B ❌** void start(void)
- **C ❌** int scanf(void)
- **D ❌** char printf(void)

**Correction proposée :** A. main est le point d'entrée du programme C hébergé.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/1-main

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-001-01 — Prototype vs définition

**Plusieurs bonnes réponses**

Quelles propositions distinguent prototype et définition de fonction ?

- **A ✅** Le prototype annonce les types de paramètres et le retour
- **B ✅** La définition apporte le corps de la fonction
- **C ❌** Tout prototype doit obligatoirement contenir un corps
- **D ❌** Le prototype exécute une fonction lors de la compilation

**Correction proposée :** A, B. Le prototype indique la signature ; la définition apporte le code exécuté.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/2-prototype-vs-definition

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-002-01 — void

**Une seule bonne réponse**

Que signifie le retour `void` dans une définition de fonction ?

- **A ✅** La fonction ne renvoie pas de valeur
- **B ❌** Elle ne peut effectuer aucun appel
- **C ❌** Elle retourne forcément 0
- **D ❌** Elle reçoit forcément un paramètre int

**Correction proposée :** A. void indique l'absence de valeur de retour.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/3-void

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-003-01 — return

**Une seule bonne réponse**

Dans une fonction `int calcul(void)`, quelle instruction renvoie l'entier 7 ?

- **A ✅** return 7;
- **B ❌** exit;
- **C ❌** break 7;
- **D ❌** void 7;

**Correction proposée :** A. return fournit une valeur compatible avec le type de retour.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/4-return

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-004-01 — printf / _putchar

**Une seule bonne réponse**

Quel appel affiche `A` avec la conversion de caractère de printf ?

- **A ✅** printf("%c", 'A');
- **B ❌** printf("%d", "A");
- **C ❌** printf("%s", 'A');
- **D ❌** printf("%p", 'A');

**Correction proposée :** A. %c affiche un caractère à partir de la valeur entière promue.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/5-printf-putchar

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-005-01 — %d / %c / %.6f

**Une seule bonne réponse**

Pour `double d=1.5;`, quelle conversion de printf affiche six chiffres après la virgule (locale C) ?

- **A ✅** %.6f
- **B ❌** %d
- **C ❌** %c
- **D ❌** %p

**Correction proposée :** A. %.6f indique six chiffres après le séparateur décimal pour une conversion flottante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/6-d-c-6f

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-006-01 — ASCII

**Une seule bonne réponse**

Quel code ASCII correspond à la lettre majuscule A ?

- **A ✅** 65
- **B ❌** 97
- **C ❌** 48
- **D ❌** 10

**Correction proposée :** A. Dans ASCII, A vaut 65, a vaut 97 et '0' vaut 48.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/7-ascii

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-007-01 — Compilation vs édition de liens

**Une seule bonne réponse**

À quelle étape rattache-t-on la résolution d'une référence externe à une fonction ?

- **A ✅** Édition de liens
- **B ❌** Prétraitement seul
- **C ❌** Lecture au clavier
- **D ❌** Montage d'un disque

**Correction proposée :** A. Le linker assemble les objets et résout les références externes.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/8-compilation-vs-edition-de-liens

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-008-01 — undefined reference

**Une seule bonne réponse**

Quelle situation peut produire `undefined reference to fonction` au lien ?

- **A ✅** La fonction a été déclarée mais sa définition n'est pas fournie au linker
- **B ❌** La variable int vaut 0
- **C ❌** Une chaîne contient un retour à la ligne
- **D ❌** Une boucle for commence à 0

**Correction proposée :** A. Une déclaration ne fournit pas le code de la fonction à l'éditeur de liens.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/9-undefined-reference

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-009-01 — gcc -o nom source.c

**Une seule bonne réponse**

Que fait `gcc -o programme main.c` lorsque toutes les étapes réussissent ?

- **A ✅** Produit un exécutable nommé programme
- **B ❌** Affiche uniquement le prétraitement
- **C ❌** Produit forcément main.o sans lien
- **D ❌** Démarre un dépôt Git

**Correction proposée :** A. -o définit le nom de sortie.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/10-gcc-o-nom-source-c

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-010-01 — GNU89

**Une seule bonne réponse**

Quelle instruction n'est pas une déclaration de boucle for portable en GNU89 strict avec -pedantic ?

- **A ✅** for (int i=0; i<3; i++)
- **B ❌** int i; for (i=0; i<3; i++)
- **C ❌** while (1)
- **D ❌** do {} while (0);

**Correction proposée :** A. Déclarer une variable dans l'initialisation d'un for est une fonctionnalité introduite en C99.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/11-gnu89

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-011-01 — gcc -E

**Une seule bonne réponse**

Que fait `gcc -E source.c` ?

- **A ✅** Exécute seulement le préprocesseur
- **B ❌** Édite uniquement les liens
- **C ❌** Exécute source.c
- **D ❌** Génère toujours un fichier objet

**Correction proposée :** A. -E arrête après le prétraitement.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/12-gcc-e

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-012-01 — gcc -S

**Une seule bonne réponse**

Que fait `gcc -S source.c` ?

- **A ✅** Produit du code assembleur sans assembler
- **B ❌** Lance un binaire nommé S
- **C ❌** Génère uniquement le flux stdin
- **D ❌** Supprime les avertissements

**Correction proposée :** A. -S s'arrête à la génération assembleur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/13-gcc-s

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-013-01 — gcc -c

**Une seule bonne réponse**

Que fait `gcc -c source.c` ?

- **A ✅** Compile/assemble en fichier objet sans étape de liaison
- **B ❌** Exécute le programme
- **C ❌** Télécharge la bibliothèque libc
- **D ❌** Produits uniquement des logs Git

**Correction proposée :** A. -c produit un fichier objet sans créer l'exécutable complet.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/14-gcc-c

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-014-01 — gcc -o

**Une seule bonne réponse**

Que signifie `-o sortie` dans une commande gcc ?

- **A ✅** Définit le nom du fichier de sortie
- **B ❌** Active la lecture seule
- **C ❌** Optimise à un niveau o
- **D ❌** Indique le langage Objective-C

**Correction proposée :** A. -o choisit le chemin du fichier généré.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/15-gcc-o

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-015-01 — puts / printf

**Plusieurs bonnes réponses**

Quels usages de `puts` sont corrects ?

- **A ✅** Affiche une chaîne suivie d'un retour à la ligne
- **B ✅** Ne prend pas de spécificateurs de format comme printf
- **C ❌** Formate des nombres avec %d comme printf
- **D ❌** Écrit nécessairement sur stderr

**Correction proposée :** A, B. puts écrit une chaîne puis une fin de ligne, contrairement aux conversions de printf.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/16-puts-printf

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-016-01 — Types entiers en C

**Une seule bonne réponse**

Peut-on supposer que `sizeof(int)` vaut toujours 4 sur toute implémentation C ?

- **A ✅** Non, sa taille dépend de l'implémentation
- **B ❌** Oui, c'est imposé par tous les standards C
- **C ❌** Oui, tout int occupe 64 bits
- **D ❌** Non, int ne possède jamais de taille

**Correction proposée :** A. Le standard impose des contraintes, mais pas 4 octets universels.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/17-types-entiers-en-c

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-017-01 — signed et unsigned

**Une seule bonne réponse**

Quelle propriété de l'arithmétique unsigned est garantie en C ?

- **A ✅** Le résultat est réduit modulo 2^N selon la largeur du type
- **B ❌** Toute opération unsigned provoque un crash en débordement
- **C ❌** Le résultat est toujours négatif après débordement
- **D ❌** Le résultat est indéfini comme pour le signed overflow

**Correction proposée :** A. L'arithmétique non signée est définie modulo un nombre lié à sa plage.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/18-signed-et-unsigned

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-018-01 — float et double

**Une seule bonne réponse**

Dans `printf`, `%f` attend quel type après les promotions d'arguments variadiques ?

- **A ✅** double
- **B ❌** float *
- **C ❌** char *
- **D ❌** size_t

**Correction proposée :** A. Un float argument est promu en double pour les appels variadiques.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/19-float-et-double

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-019-01 — char et caractère

**Plusieurs bonnes réponses**

Quelles déclarations produisent des objets de type char ?

- **A ✅** char lettre='A';
- **B ✅** char zero='\0';
- **C ❌** int lettre='A';
- **D ❌** double lettre='A';

**Correction proposée :** A, B. char déclare un caractère, la valeur '\0' est un caractère nul.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/20-char-et-caractere

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-020-01 — return 0 / return 1

**Une seule bonne réponse**

Qu'indique habituellement le retour de main à zéro ?

- **A ✅** Une fin de programme réussie
- **B ❌** Un signal systématique de segfault
- **C ❌** Une erreur obligatoire de link
- **D ❌** Une fuite de mémoire automatiquement détectée

**Correction proposée :** A. return 0 indique la réussite dans l'environnement hébergé.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/21-return-0-return-1

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-021-01 — return d’un caractère (char)

**Une seule bonne réponse**

Une fonction renvoie `char`; un appelant peut-il stocker le résultat dans un int ?

- **A ✅** Oui, la conversion intégrale existe
- **B ❌** Non, char et int sont incompatibles dans tous les contextes
- **C ❌** Oui mais seulement via malloc
- **D ❌** Non, une fonction char ne retourne jamais

**Correction proposée :** A. Un char peut être converti en int.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/22-return-d-un-caractere-char

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-022-01 — return d’un pointeur (int *)

**Plusieurs bonnes réponses**

À propos d'un pointeur renvoyé depuis une fonction C, quelles précautions sont justes ?

- **A ✅** Il ne doit pas pointer vers une variable automatique dont la durée de vie a fini
- **B ✅** Son objet cible doit rester valide à l'utilisation
- **C ❌** Il est toujours sûr s'il est non NULL
- **D ❌** Un return garantit automatiquement la propriété du bloc

**Correction proposée :** A, B. Validité et durée de vie de la cible restent essentielles.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/23-return-d-un-pointeur-int

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-023-01 — exit() — terminer le programme

**Une seule bonne réponse**

Quelle différence entre return et exit à l'intérieur d'une fonction ordinaire ?

- **A ✅** return quitte la fonction courante ; exit termine le processus selon son contrat
- **B ❌** return termine toujours le processus entier
- **C ❌** exit ne fait rien s'il est appelé dans main
- **D ❌** return libère automatiquement tout bloc malloc

**Correction proposée :** A. return concerne la fonction courante, exit concerne la terminaison du programme.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/24-exit-terminer-le-programme

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-024-01 — Dennis Ritchie — créateur du langage C

**Une seule bonne réponse**

À quel langage associe-t-on Dennis Ritchie parmi les propositions ?

- **A ✅** C
- **B ❌** Rust
- **C ❌** Python
- **D ❌** Java

**Correction proposée :** A. Dennis Ritchie a conçu le langage C.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/25-dennis-ritchie-createur-du-langage-c

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-025-01 — scanf() — lire une saisie au clavier

**Une seule bonne réponse**

Pour `int n;`, quel argument de `scanf("%d", ...)` est correct ?

- **A ✅** &n
- **B ❌** n
- **C ❌** *n
- **D ❌** sizeof n

**Correction proposée :** A. scanf exige l'adresse de l'objet int à remplir.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://en.cppreference.com/w/c/io/fscanf

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-025-02 — scanf() — lire une saisie au clavier

**Une seule bonne réponse**

Pour une saisie non numérique dès le premier caractère, que renvoie usuellement `scanf("%d", &n)` ?

- **A ✅** 0
- **B ❌** 1
- **C ❌** -2
- **D ❌** Le contenu de n

**Correction proposée :** A. Aucune conversion n'est affectée : échec de correspondance.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://en.cppreference.com/w/c/io/fscanf

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-026-01 — fgets() — lire une ligne avec une limite

**Plusieurs bonnes réponses**

Quelles affirmations concernant fgets sont correctes ?

- **A ✅** Elle lit au plus n-1 caractères utiles dans un tampon de n cases
- **B ✅** Elle conserve le saut de ligne lorsqu'il est lu
- **C ❌** Elle agrandit automatiquement les tableaux trop petits
- **D ❌** Elle garantit que toute ligne dépassant la capacité est consommée

**Correction proposée :** A, B. fgets peut conserver '\n' et laisse de la place pour '\0'.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/27-fgets-lire-une-ligne-avec-une-limite · https://en.cppreference.com/c/io/fgets

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-026-02 — fgets() — lire une ligne avec une limite

**Une seule bonne réponse**

Pourquoi faut-il vérifier le retour de fgets avant d'utiliser le tampon ?

- **A ✅** NULL signale un échec ou une fin de fichier avant donnée
- **B ❌** Une erreur garantit toujours une chaîne vide
- **C ❌** fgets renvoie le nombre de caractères
- **D ❌** fgets supprime toutes les erreurs de lecture

**Correction proposée :** A. Le tampon n'est pas nécessairement une ligne réussie si le résultat est NULL.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/27-fgets-lire-une-ligne-avec-une-limite · https://en.cppreference.com/c/io/fgets

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-027-01 — strtol() — convertir une entrée en entier

**Une seule bonne réponse**

Pourquoi utiliser strtol plutôt que atoi lors de la validation d'un entier saisi ?

- **A ✅** strtol offre un endptr et une détection d'erreur mieux adaptée
- **B ❌** atoi renvoie toujours une structure complète
- **C ❌** strtol convertit seulement des chaînes de longueur 1
- **D ❌** atoi interdit les caractères numériques

**Correction proposée :** A. strtol permet de vérifier l'endptr et une éventuelle plage hors limites.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/28-strtol-convertir-une-entree-en-entier · https://en.cppreference.com/w/c/string/byte/strtol

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-028-01 — Chaîne de format — ne pas utiliser une saisie comme format

**Une seule bonne réponse**

Pourquoi `printf(chaine_utilisateur)` est-il dangereux ?

- **A ✅** La chaîne peut contenir des spécificateurs interprétés comme format
- **B ❌** printf ignore toujours les %
- **C ❌** printf autorise uniquement les chaînes constantes
- **D ❌** La chaîne est toujours préalablement échappée

**Correction proposée :** A. Utiliser un format fixe, par exemple printf("%s", chaine).

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/29-chaine-de-format-ne-pas-utiliser-une-saisie-comme-format

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-029-01 — EOF — détecter la fin d'une entrée

**Une seule bonne réponse**

À quoi sert EOF lors de la lecture par getchar ?

- **A ✅** Indiquer une fin d'entrée ou une erreur selon l'état du flux
- **B ❌** Représenter toujours le caractère '\0'
- **C ❌** Être un octet de nouvelle ligne
- **D ❌** Marquer systématiquement la valeur ASCII 255

**Correction proposée :** A. getchar renvoie un int, permettant de distinguer les octets d'EOF.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/30-eof-detecter-la-fin-d-une-entree

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-08-030-01 — Integer overflow — dépassement de capacité d'un entier

**Une seule bonne réponse**

Le débordement d'un int signé lors de `INT_MAX+1` en C standard est-il défini ?

- **A ✅** Non, il entraîne un comportement indéfini
- **B ❌** Oui, il produit toujours INT_MIN
- **C ❌** Oui, il produit forcément 0
- **D ❌** Oui, il affiche un avertissement puis continue

**Correction proposée :** A. Le signed integer overflow est UB en C standard.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/31-integer-overflow-depassement-de-capacite-d-un-entier · https://en.cppreference.com/c/language/behavior

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-000-01 — Pointeur (pointer)

**Une seule bonne réponse**

Quel opérateur donne l'adresse d'un objet ordinaire en C ?

- **A ✅** &
- **B ❌** *
- **C ❌** %
- **D ❌** ||

**Correction proposée :** A. L'opérateur unaire & prend l'adresse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/1-pointeur-pointer

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-002-01 — & (opérateur d’adresse)

**Une seule bonne réponse**

Avec `int a=7;`, quelle expression a le type int * ?

- **A ✅** &a
- **B ❌** a
- **C ❌** *a
- **D ❌** sizeof a

**Correction proposée :** A. &a désigne l'adresse de l'objet a.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/3-operateur-d-adresse

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-003-01 — * dans une déclaration

**Une seule bonne réponse**

Quelle déclaration exprime correctement un pointeur vers int ?

- **A ✅** int *p;
- **B ❌** int p*;
- **C ❌** pointer<int> p;
- **D ❌** int &p;

**Correction proposée :** A. L'astérisque appartient à la déclaration du pointeur C.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-004-01 — * dans une expression

**Une seule bonne réponse**

Avec `int a=7; int *p=&a;`, que vaut `*p` ?

- **A ✅** 7
- **B ❌** L'adresse de a
- **C ❌** La taille d'un int
- **D ❌** Une chaîne vide

**Correction proposée :** A. *p lit l'objet pointé tant que l'adresse est valide.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/5-dans-une-expression

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-005-01 — Modifier une valeur par un pointeur

**Une seule bonne réponse**

Avec `int n=2; int *p=&n; *p=9;`, que vaut n ?

- **A ✅** 9
- **B ❌** 2
- **C ❌** L'adresse de p
- **D ❌** 0

**Correction proposée :** A. Le déréférencement modifie l'objet original n.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/6-modifier-une-valeur-par-un-pointeur

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-006-01 — Valeur de p, *p et &p

**Plusieurs bonnes réponses**

Avec `int n=3; int *p=&n;`, quels objets sont différents conceptuellement ?

- **A ✅** p est une variable contenant une adresse
- **B ✅** *p désigne la valeur de n
- **C ✅** &p désigne l'adresse de la variable p
- **D ❌** p, *p et &p ont toujours le même type

**Correction proposée :** A, B, C. Les trois expressions ne désignent pas la même chose.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/7-valeur-de-p-p-et-p

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-007-01 — Type pointé

**Une seule bonne réponse**

Pourquoi le type pointé d'un int * est-il important ?

- **A ✅** Il définit le type de l'objet lors du déréférencement
- **B ❌** Il force toutes les adresses à valoir zéro
- **C ❌** Il autorise la modification arbitraire de n'importe quel objet
- **D ❌** Il donne automatiquement la capacité d'une zone allouée

**Correction proposée :** A. Le type guide l'interprétation et la taille d'un accès.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/8-type-pointe

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-008-01 — %p avec printf

**Une seule bonne réponse**

Comment afficher correctement un pointeur vers objet avec printf `%p` ?

- **A ✅** printf("%p", (void *)p);
- **B ❌** printf("%d", p);
- **C ❌** printf("%s", p);
- **D ❌** printf("%c", p);

**Correction proposée :** A. %p attend un argument void * dans les règles de printf.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/9-p-avec-printf

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-009-01 — sizeof

**Une seule bonne réponse**

Que mesure sizeof pour un tableau local `int a[4]` dans sa portée ?

- **A ✅** La taille de tout le tableau en octets
- **B ❌** Toujours 4 octets
- **C ❌** La valeur du premier élément
- **D ❌** La taille du pointeur implicite

**Correction proposée :** A. sizeof sur le tableau entier donne la taille des quatre objets int.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/10-sizeof

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-010-01 — Tailles des pointeurs

**Une seule bonne réponse**

Est-il portable de considérer que tout pointeur de fonction fait exactement 8 octets ?

- **A ✅** Non
- **B ❌** Oui, même en C89
- **C ❌** Oui, seulement avec GNU89
- **D ❌** Oui, pour tout système Linux

**Correction proposée :** A. La représentation et taille des pointeurs dépendent de la plateforme.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/11-tailles-des-pointeurs

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-011-01 — Passage d’arguments par valeur

**Une seule bonne réponse**

En C, modifier un paramètre `int n` change-t-il automatiquement l'argument original ?

- **A ✅** Non : les arguments sont passés par valeur
- **B ❌** Oui : C utilise le passage par référence partout
- **C ❌** Oui : seulement si n vaut 0
- **D ❌** Oui : la pile est toujours partagée

**Correction proposée :** A. Un paramètre reçoit une copie de la valeur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/12-passage-d-arguments-par-valeur

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-012-01 — Passer une adresse à une fonction

**Une seule bonne réponse**

Comment une fonction peut-elle modifier un int de l'appelant ?

- **A ✅** Recevoir son adresse dans int *p et écrire *p
- **B ❌** Recevoir une copie int p et écrire p
- **C ❌** Recevoir int p et appeler printf
- **D ❌** Déclarer p en local et l'affecter

**Correction proposée :** A. Le pointeur donne accès à l'objet original.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/13-passer-une-adresse-a-une-fonction

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-013-01 — Tableau

**Une seule bonne réponse**

Combien d'éléments comporte `int tab[5]` ?

- **A ✅** 5
- **B ❌** 4
- **C ❌** 6
- **D ❌** sizeof(int)

**Correction proposée :** A. La déclaration donne cinq éléments indexés 0…4.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/14-tableau

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-015-01 — Tableau ≠ pointeur

**Une seule bonne réponse**

Pourquoi un tableau n'est-il pas un pointeur, même s'il peut se convertir en pointeur ?

- **A ✅** Il s'agit de types et d'objets distincts
- **B ❌** Parce que tous les tableaux sont des fonctions
- **C ❌** Parce que sizeof(array) vaut toujours sizeof(pointer)
- **D ❌** Parce que les tableaux ne contiennent jamais de valeurs

**Correction proposée :** A. Le tableau est un ensemble d'éléments, le pointeur est un objet pouvant contenir une adresse.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/16-tableau-pointeur

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-016-01 — Conversion tableau → pointeur

**Une seule bonne réponse**

Dans un appel f(tab), que devient normalement un tableau d'int comme expression argument ?

- **A ✅** Une adresse de son premier élément
- **B ❌** Une copie automatique de tous les octets dans un int
- **C ❌** Une structure contenant sa longueur
- **D ❌** Toujours NULL

**Correction proposée :** A. Le tableau est converti en pointeur vers son premier élément, sauf contextes particuliers.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/17-conversion-tableau-pointeur

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-018-01 — &tableau

**Une seule bonne réponse**

Pour un tableau int tab[5], quelle différence entre &tab et &tab[0] ?

- **A ✅** Ils ont des types de pointeurs différents
- **B ❌** Ils désignent nécessairement des allocations différentes
- **C ❌** &tab correspond à un int *
- **D ❌** &tab[0] désigne toute une structure

**Correction proposée :** A. &tab est pointeur vers tableau, &tab[0] est pointeur vers élément int.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/19-tableau

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-019-01 — Arithmétique des pointeurs

**Une seule bonne réponse**

Que signifie `p+1` lorsque p est un int * valide au sein d'un tableau ?

- **A ✅** Avancer d'un élément int
- **B ❌** Avancer toujours d'un octet
- **C ❌** Exécuter l'instruction C suivante
- **D ❌** Déréférencer automatiquement p

**Correction proposée :** A. L'arithmétique des pointeurs dépend de la taille du type pointé.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/20-arithmetique-des-pointeurs

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-021-01 — Chaîne de caractères en C

**Une seule bonne réponse**

Qu'est-ce qu'une chaîne C valide ?

- **A ✅** Une suite de caractères terminée par '\0' dans une zone accessible
- **B ❌** Un tableau obligatoirement de 100 octets
- **C ❌** Une valeur char unique
- **D ❌** Un pointeur non initialisé

**Correction proposée :** A. La terminaison nulle délimite la chaîne.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/22-chaine-de-caracteres-en-c

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-022-01 — Caractère nul

**Une seule bonne réponse**

Quel rôle joue '\0' dans une chaîne C ?

- **A ✅** Marquer la fin de chaîne
- **B ❌** Être un saut de ligne
- **C ❌** Signifier EOF dans le fichier source
- **D ❌** Indiquer la mémoire allouée

**Correction proposée :** A. Les fonctions sur les chaînes repèrent le caractère nul.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/23-caractere-nul

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-023-01 — %s avec printf

**Une seule bonne réponse**

Que faut-il passer à printf %s ?

- **A ✅** Une adresse de chaîne valide terminée par nul
- **B ❌** Une valeur int quelconque
- **C ❌** Un simple caractère sans adresse
- **D ❌** Une adresse de tableau sans terminateur

**Correction proposée :** A. %s lit une chaîne terminée par un caractère nul.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/24-s-avec-printf

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-030-01 — malloc — allocation dynamique

**Plusieurs bonnes réponses**

Quels comportements sont possibles pour malloc selon la taille et l'environnement ?

- **A ✅** Renvoyer un pointeur utilisable si elle réussit
- **B ✅** Renvoyer NULL si l'allocation échoue
- **C ❌** Mettre obligatoirement tous les octets à zéro
- **D ❌** Libérer le pointeur automatiquement à la fin du bloc local

**Correction proposée :** A, B. malloc peut échouer et n'initialise pas les octets alloués.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-031-01 — free — libérer la mémoire

**Une seule bonne réponse**

Que fait `free(NULL)` selon la bibliothèque standard C ?

- **A ✅** Rien
- **B ❌** Libère toute la mémoire du processus
- **C ❌** Provoque toujours SIGSEGV
- **D ❌** Renvoie -1

**Correction proposée :** A. Un pointeur nul est accepté par free.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-033-01 — Chaîne littérale et tableau de char

**Une seule bonne réponse**

Avec `char *s="abc";`, peut-on modifier s[0] de façon définie ?

- **A ✅** Non : modifier un littéral de chaîne est indéfini
- **B ❌** Oui : les littéraux sont toujours en mémoire écrivable
- **C ❌** Oui : uniquement sous Linux
- **D ❌** Oui : char * garantit l'écriture

**Correction proposée :** A. Un littéral de chaîne n'est pas modifiable par le programme.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/34-chaine-litterale-et-tableau-de-char · https://en.cppreference.com/w/c/language/string_literal

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-034-01 — malloc : vérifier NULL

**Une seule bonne réponse**

Après un malloc potentiellement défaillant, quelle condition empêche de déréférencer NULL ?

- **A ✅** if (p != NULL)
- **B ❌** if (p == NULL) puis *p=1
- **C ❌** while (p == NULL) *p=1
- **D ❌** if (sizeof p == 0)

**Correction proposée :** A. Tester la réussite avant tout accès.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/35-malloc-verifier-null

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-035-01 — Fuite mémoire — allocation perdue

**Une seule bonne réponse**

Qu'est-ce qu'une fuite mémoire ?

- **A ✅** Un bloc alloué qu'on ne libère pas lorsqu'il n'est plus utile
- **B ❌** Une simple lecture de mémoire
- **C ❌** Une variable int locale
- **D ❌** Une sortie standard vide

**Correction proposée :** A. La responsabilité de libération n'est pas honorée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/36-fuite-memoire-allocation-perdue

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-036-01 — Valgrind — détecter les fuites

**Une seule bonne réponse**

Quel outil peut signaler une fuite par une catégorie definitely lost ?

- **A ✅** Valgrind Memcheck
- **B ❌** git status
- **C ❌** grep -A
- **D ❌** gcc -E

**Correction proposée :** A. Valgrind Memcheck détecte certaines fuites et accès invalides.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/37-valgrind-detecter-les-fuites

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-038-01 — malloc et sizeof : allouer le bon nombre d’octets

**Une seule bonne réponse**

Pour un int *p et un nombre d'éléments n, quel schéma d'allocation est généralement adéquat si le produit ne déborde pas ?

- **A ✅** malloc(n * sizeof *p)
- **B ❌** malloc(n) toujours
- **C ❌** malloc(sizeof p) toujours
- **D ❌** malloc(sizeof n) toujours

**Correction proposée :** A. Le produit doit tenir compte de la taille de l'élément.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/39-malloc-et-sizeof-allouer-le-bon-nombre-d-octets

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-039-01 — strlen, sizeof et terminateur nul

**Une seule bonne réponse**

Avec `char mot[]="abc";`, que valent strlen(mot) et sizeof mot ?

- **A ✅** 3 et 4
- **B ❌** 4 et 3
- **C ❌** 3 et 3
- **D ❌** 4 et 4

**Correction proposée :** A. strlen exclut le terminateur nul, sizeof mesure tout le tableau.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-040-01 — strcpy : copier dans un espace existant

**Une seule bonne réponse**

Quel danger représente strcpy sans capacité suffisante dans la destination ?

- **A ✅** Une écriture hors limites
- **B ❌** Une allocation automatique sûre
- **C ❌** Une conversion implicite en int
- **D ❌** Une suppression de ' ' garantie

**Correction proposée :** A. strcpy ne reçoit pas la taille du tampon de destination.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/41-strcpy-copier-dans-un-espace-existant

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-041-01 — strdup : copie allouée dynamiquement

**Une seule bonne réponse**

Pourquoi faut-il généralement free le résultat réussi de strdup ?

- **A ✅** La chaîne dupliquée est allouée dynamiquement
- **B ❌** strdup renvoie toujours un objet automatique
- **C ❌** Le résultat pointe forcément vers un littéral
- **D ❌** Le résultat est une constante du compilateur

**Correction proposée :** A. La copie sur le tas doit être libérée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/42-strdup-copie-allouee-dynamiquement

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-042-01 — Pile et tas : durée de vie des allocations

**Plusieurs bonnes réponses**

Quelle distinction de durée de vie est correcte ?

- **A ✅** Une variable automatique a souvent la durée de vie du bloc
- **B ✅** Une allocation sur le tas doit être libérée explicitement
- **C ❌** Une variable automatique dure nécessairement jusqu'à l'arrêt du programme
- **D ❌** malloc garantit un objet local temporaire

**Correction proposée :** A, B. Les durées de vie des variables automatiques et blocs alloués diffèrent.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/43-pile-et-tas-duree-de-vie-des-allocations

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-043-01 — free : quelles adresses peut-on libérer ?

**Une seule bonne réponse**

Quelle adresse est libérable par free ?

- **A ✅** Un pointeur issu d'un malloc réussi et non encore libéré
- **B ❌** L'adresse d'un int local
- **C ❌** L'adresse d'un littéral de chaîne
- **D ❌** Une adresse calculée en plein milieu d'un bloc

**Correction proposée :** A. free doit recevoir un pointeur compatible issu de l'allocateur, ou NULL.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/44-free-quelles-adresses-peut-on-liberer

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-044-01 — Pointeur non initialisé : comportement indéfini

**Une seule bonne réponse**

Quel risque avec `int *p; *p=3;` si p n'a pas été initialisé ?

- **A ✅** Comportement indéfini
- **B ❌** Écriture garantie dans un bloc malloc
- **C ❌** Allocation automatique d'un int pointé
- **D ❌** Valeur 3 stockée dans p

**Correction proposée :** A. Le pointeur indéterminé ne désigne pas une cible valide garantie.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/45-pointeur-non-initialise-comportement-indefini

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-045-01 — realloc — redimensionner une allocation

**Une seule bonne réponse**

Pourquoi utiliser `tmp = realloc(p, taille)` avant de mettre p à jour ?

- **A ✅** Préserver p si realloc échoue
- **B ❌** Éviter tout besoin de free
- **C ❌** Initialiser les nouveaux octets à zéro
- **D ❌** Rendre p utilisable après succès sans mise à jour

**Correction proposée :** A. Un échec laisse l'ancien bloc intact ; un succès invalide l'ancien pointeur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation · https://en.cppreference.com/c/memory/realloc

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-045-02 — realloc — redimensionner une allocation

**Une seule bonne réponse**

Après un realloc réussi de taille positive, peut-on continuer à utiliser l'ancienne valeur de p pour accéder au bloc ?

- **A ✅** Non, même si l'adresse numérique semble identique
- **B ❌** Oui, toujours
- **C ❌** Oui, uniquement pour écrire
- **D ❌** Oui, parce que realloc ne déplace jamais un bloc

**Correction proposée :** A. L'ancien pointeur est invalidé par une réallocation réussie.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation · https://en.cppreference.com/c/memory/realloc

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-046-01 — Segfault — faute de segmentation

**Une seule bonne réponse**

Une erreur de segmentation signifie-t-elle automatiquement qu'un pointeur nul a été déréférencé ?

- **A ✅** Non, plusieurs accès mémoire invalides peuvent la provoquer
- **B ❌** Oui, c'est sa cause unique
- **C ❌** Oui, sinon ce n'est pas une segfault
- **D ❌** Non, elle ne concerne jamais la mémoire

**Correction proposée :** A. Une segfault peut avoir différentes causes, selon l'environnement.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/47-segfault-faute-de-segmentation

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-047-01 — strncpy() — copie limitée et terminaison

**Une seule bonne réponse**

Pourquoi strncpy ne garantit-elle pas systématiquement le terminateur nul ?

- **A ✅** Une source de longueur >= n peut remplir les n octets sans '\0'
- **B ❌** Parce qu'elle ajoute toujours deux terminateurs
- **C ❌** Parce que toutes les destinations sont des int
- **D ❌** Parce qu'elle agrandit le tableau sans borne

**Correction proposée :** A. En cas de troncation, la destination peut manquer de caractère nul.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/48-strncpy-copie-limitee-et-terminaison

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-048-01 — calloc() — allouer et initialiser à zéro

**Une seule bonne réponse**

Quelle propriété de calloc est correcte ?

- **A ✅** Les octets alloués sont initialisés à zéro
- **B ❌** Il réserve toujours un bloc de 1 Go
- **C ❌** Il retourne toujours la même adresse
- **D ❌** Il empêche tout accès hors limites

**Correction proposée :** A. calloc initialise à zéro les octets de l'espace alloué.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/49-calloc-allouer-et-initialiser-a-zero

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-049-01 — Buffer overflow — dépassement de tampon

**Une seule bonne réponse**

Quel accès dépasse les bornes de `int t[3]` ?

- **A ✅** t[3]
- **B ❌** t[2]
- **C ❌** t[1]
- **D ❌** t[0]

**Correction proposée :** A. Les indices valides sont 0, 1 et 2.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/50-buffer-overflow-depassement-de-tampon

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-050-01 — Use-after-free — réutiliser un bloc libéré

**Une seule bonne réponse**

Après `free(p)`, que produit l'accès `*p=4` au bloc libéré ?

- **A ✅** Un comportement indéfini
- **B ❌** Une réallocation implicite
- **C ❌** Un zéro automatique
- **D ❌** Un appel valide de malloc

**Correction proposée :** A. La durée de vie du bloc est terminée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/51-use-after-free-reutiliser-un-bloc-libere

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-051-01 — Double free — ne pas libérer deux fois

**Une seule bonne réponse**

Si q est un alias de p et que free(p) a réussi, que risque free(q) ?

- **A ✅** Double free et comportement indéfini
- **B ❌** Réduction du bloc de moitié
- **C ❌** Garantie de libération sûre sans erreur
- **D ❌** Remise automatique de q à NULL

**Correction proposée :** A. Les deux pointeurs visaient le même bloc déjà libéré.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/52-double-free-ne-pas-liberer-deux-fois

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-052-01 — Débordement du calcul de taille avant malloc

**Une seule bonne réponse**

Avant malloc(n * sizeof *p), quel contrôle empêche le débordement de size_t (taille élément positive) ?

- **A ✅** n <= SIZE_MAX / sizeof *p
- **B ❌** n <= sizeof *p
- **C ❌** n == 0 seulement
- **D ❌** sizeof p == sizeof *p

**Correction proposée :** A. La division par la taille élément donne le maximum d'éléments représentable.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/53-debordement-du-calcul-de-taille-avant-malloc

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-053-01 — Valgrind Memcheck — comprendre les alertes

**Une seule bonne réponse**

Que peut signaler Memcheck avec `Invalid write` ?

- **A ✅** Une écriture à une adresse invalide selon son analyse
- **B ❌** Un succès garanti de malloc
- **C ❌** Une branche Git non fusionnée
- **D ❌** Une variable Bash non exportée

**Correction proposée :** A. Memcheck signale des écritures invalides, dont hors limites et après libération.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/54-valgrind-memcheck-comprendre-les-alertes

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-054-01 — memcpy() ou memmove() — zones qui se recouvrent

**Une seule bonne réponse**

Quel outil standard convient si source et destination de la copie peuvent se recouvrir ?

- **A ✅** memmove
- **B ❌** memcpy
- **C ❌** strcpy sans conditions
- **D ❌** calloc

**Correction proposée :** A. memmove gère le recouvrement, contrairement à memcpy.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/55-memcpy-ou-memmove-zones-qui-se-recouvrent

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-055-01 — Dépassement de tampon sur la pile — erreur avant malloc

**Une seule bonne réponse**

Si la saisie déborde déjà un tampon local avant malloc, quel correctif est prioritaire ?

- **A ✅** Limiter la lecture selon la capacité du tableau
- **B ❌** Ajouter davantage de free après strcpy
- **C ❌** Changer uniquement le nom du fichier
- **D ❌** Ne jamais vérifier les tailles

**Correction proposée :** A. La corruption se produit au moment de la lecture non bornée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/56-depassement-de-tampon-sur-la-pile-erreur-avant-malloc

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-056-01 — Tampon fixe, statique et dynamique — emplacement et durée de vie

**Plusieurs bonnes réponses**

Quelles propriétés sont indépendantes ?

- **A ✅** Taille fixe ou variable d'un tampon
- **B ✅** Durée de vie automatique ou statique
- **C ❌** Tout tampon fixe est forcément statique
- **D ❌** Tout tampon sur le tas est forcément global

**Correction proposée :** A, B. Taille, durée de vie et allocation sont des aspects distincts.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/57-tampon-fixe-statique-et-dynamique-emplacement-et-duree-de-vie

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-057-01 — Stack overflow — épuisement de la pile d'appels

**Une seule bonne réponse**

Quelle cause fréquente peut provoquer un épuisement de la pile ?

- **A ✅** Récursion sans condition d'arrêt
- **B ❌** Un simple printf unique
- **C ❌** Un commit Git
- **D ❌** Une variable d'environnement vide

**Correction proposée :** A. Les appels répétés peuvent épuiser l'espace de pile.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/58-stack-overflow-epuisement-de-la-pile-d-appels

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-058-01 — Valgrind : « definitely lost » et les octets perdus

**Une seule bonne réponse**

Un rapport `definitely lost: 32 bytes in 1 blocks` indique quoi ?

- **A ✅** Un bloc de 32 octets perdu directement
- **B ❌** 32 pointeurs valides
- **C ❌** Un temps CPU de 32 ms
- **D ❌** Un bloc correctement libéré

**Correction proposée :** A. La fuite certaine concerne un bloc alloué de 32 octets.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/59-valgrind-definitely-lost-et-les-octets-perdus

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-059-01 — strlen sans terminateur nul — lecture hors limites

**Une seule bonne réponse**

Pourquoi strlen sur un tableau sans '\0' accessible peut-elle poser problème ?

- **A ✅** Elle poursuit la recherche et peut lire hors limites
- **B ❌** Elle renvoie toujours la capacité exacte
- **C ❌** Elle complète automatiquement le tableau
- **D ❌** Elle appelle malloc

**Correction proposée :** A. strlen ne reçoit pas de longueur maximale et cherche un caractère nul.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/60-strlen-sans-terminateur-nul-lecture-hors-limites

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-060-01 — memcpy() — copier des octets sans chevauchement

**Une seule bonne réponse**

Quel comportement est garanti par memcpy quand les n octets sont valides et ne se recouvrent pas ?

- **A ✅** La copie exacte de n octets
- **B ❌** L'ajout systématique de '\0'
- **C ❌** La suppression des allocations de destination
- **D ❌** Le tri lexicographique

**Correction proposée :** A. memcpy copie des octets sans ajouter de terminaison de chaîne.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/61-memcpy-copier-des-octets-sans-chevauchement

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-061-01 — Ownership — qui est responsable de free() ?

**Une seule bonne réponse**

Copier un pointeur p dans q transfère-t-il automatiquement la responsabilité de free ?

- **A ✅** Non, il faut définir explicitement le propriétaire
- **B ❌** Oui, q devient obligatoirement propriétaire unique
- **C ❌** Oui, p devient NULL
- **D ❌** Non, mais malloc devient inutile

**Correction proposée :** A. L'ownership est une convention du programme, pas une opération implicite du langage C.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/62-ownership-qui-est-responsable-de-free

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-062-01 — Dangling pointer — pointeur vers un objet qui n'existe plus

**Une seule bonne réponse**

Un pointeur vers un objet local dont la durée de vie s'est terminée est appelé comment ?

- **A ✅** Dangling pointer
- **B ❌** Pointeur garanti NULL
- **C ❌** Pointeur vers un objet toujours valide
- **D ❌** Pointeur de fonction

**Correction proposée :** A. La cible n'existe plus.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/63-dangling-pointer-pointeur-vers-un-objet-qui-n-existe-plus

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-063-01 — Raw pointer — pointeur brut en C

**Une seule bonne réponse**

Que garantit un raw pointer non NULL en C ?

- **A ✅** Il contient une valeur de pointeur, pas la validité de sa cible
- **B ❌** La cible est forcément accessible
- **C ❌** La taille du bloc pointé est connue
- **D ❌** La mémoire est libérée automatiquement

**Correction proposée :** A. La non-nullité ne prouve ni validité ni propriété.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/64-raw-pointer-pointeur-brut-en-c

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-064-01 — char * — pointeur vers un caractère ou une chaîne

**Une seule bonne réponse**

Un char * contient-il la taille du tableau pointé ?

- **A ✅** Non
- **B ❌** Oui, automatiquement
- **C ❌** Oui, seulement sous Linux
- **D ❌** Oui, si l'adresse est paire

**Correction proposée :** A. Le pointeur ne porte pas la longueur du bloc.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/65-char-pointeur-vers-un-caractere-ou-une-chaine

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-065-01 — Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites

**Une seule bonne réponse**

Peut-on déduire avec certitude la vulnérabilité d'un code en lisant seulement l'intitulé de son lab ?

- **A ✅** Non, il faut examiner le code réel et les diagnostics
- **B ❌** Oui, l'intitulé suffit
- **C ❌** Oui, les noms du lab sont des messages Valgrind exacts
- **D ❌** Oui, sans jamais compiler

**Correction proposée :** A. Ne pas prétendre avoir établi une erreur sans consulter les preuves.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/66-diagnostics-memoire-invalid-write-uninitialized-value-et-fuites

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-14-000-01 — Prototype de fonction

**Une seule bonne réponse**

Quel avantage apporte un prototype avant un appel de fonction C ?

- **A ✅** Vérifier la cohérence des paramètres et du retour
- **B ❌** Allouer le tas automatiquement
- **C ❌** Exécuter la fonction avant main
- **D ❌** Créer une boucle implicite

**Correction proposée :** A. Le prototype décrit la signature.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/1-prototype-de-fonction

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-14-001-01 — Entête de fonction

**Une seule bonne réponse**

Pourquoi documenter les paramètres d'une fonction ?

- **A ✅** Clarifier ses entrées et son résultat
- **B ❌** Changer la valeur de retour automatiquement
- **C ❌** Supprimer toute erreur de compilation
- **D ❌** Rendre inutile tout test

**Correction proposée :** A. La documentation explicite le contrat.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/2-entete-de-fonction

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-14-002-01 — Tester séparément

**Une seule bonne réponse**

Quel intérêt présente un test isolé d'une fonction ?

- **A ✅** Localiser plus facilement une régression
- **B ❌** Garantir l'absence de toute vulnérabilité
- **C ❌** Remplacer entièrement la compilation
- **D ❌** Effacer le code obsolète

**Correction proposée :** A. Des tests ciblés isolent les comportements.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/3-tester-separement

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-14-003-01 — Taille des types

**Une seule bonne réponse**

Pourquoi faut-il éviter de supposer que int et long ont une taille unique sur toutes les machines ?

- **A ✅** Leurs tailles dépendent de l'implémentation
- **B ❌** Tout type int occupe 1 octet
- **C ❌** Tout type long occupe 8 octets selon le standard
- **D ❌** Les tailles n'existent pas

**Correction proposée :** A. Utiliser sizeof et les contraintes du standard.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/4-taille-des-types

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-14-004-01 — Compilation et liaison

**Une seule bonne réponse**

Quelle erreur correspond à la phase de liaison et non à la syntaxe C ?

- **A ✅** undefined reference to symbole
- **B ❌** Une accolade manquante
- **C ❌** Une expression avec un ; supplémentaire
- **D ❌** Une variable déclarée dans un for GNU89 strict

**Correction proposée :** A. La liaison résout les symboles externes.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/5-compilation-et-liaison

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-14-005-01 — Commentaires et lisibilité

**Une seule bonne réponse**

Quel commentaire est le plus utile à un lecteur ?

- **A ✅** Une explication du pourquoi d'un choix non évident
- **B ❌** Un commentaire qui répète chaque opérateur évident
- **C ❌** Un mot au hasard
- **D ❌** Une duplication de tous les messages stdout

**Correction proposée :** A. Un commentaire utile apporte le contexte et les invariants.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/6-commentaires-et-lisibilite

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-14-007-01 — Invariant — condition qui doit rester vraie

**Une seule bonne réponse**

Qu'est-ce qu'un invariant dans un algorithme ?

- **A ✅** Une propriété qui doit rester vraie aux points définis
- **B ❌** Une variable forcément constante dans toute la vie du programme
- **C ❌** Une sortie d'erreur de printf
- **D ❌** Un pointeur systématiquement NULL

**Correction proposée :** A. L'invariant encadre le raisonnement correct.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/8-invariant-condition-qui-doit-rester-vraie

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-14-008-01 — Base bundle — analyser le code de départ d'un lab

**Une seule bonne réponse**

Comment analyser un base bundle de lab inconnu ?

- **A ✅** Lire ses fichiers et reproduire les diagnostics
- **B ❌** Affirmer une faille sans ouvrir le code
- **C ❌** Exécuter free sur tous les pointeurs
- **D ❌** Corriger uniquement son titre

**Correction proposée :** A. Le code et les tests sont nécessaires pour confirmer les risques.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/qualite-et-methode-en-c/9-base-bundle-analyser-le-code-de-depart-d-un-lab

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-000-01 — struct : regrouper plusieurs données

**Une seule bonne réponse**

Qu'est-ce qu'une struct en C ?

- **A ✅** Un type regroupant plusieurs membres
- **B ❌** Une boucle exécutée automatiquement
- **C ❌** Un objet toujours dynamique
- **D ❌** Une commande Git

**Correction proposée :** A. Une structure regroupe des données nommées.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/1-struct-regrouper-plusieurs-donnees

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-001-01 — struct : type et variable

**Une seule bonne réponse**

Avec `struct point {int x; int y;};`, comment déclarer une variable du type ?

- **A ✅** struct point p;
- **B ❌** point p; sans typedef
- **C ❌** struct p point;
- **D ❌** int point;

**Correction proposée :** A. Sans typedef, le nom de type inclut le mot-clé struct.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/2-struct-type-et-variable

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-002-01 — Accès aux membres avec .

**Une seule bonne réponse**

Pour `struct point p;`, quel opérateur accède au membre x ?

- **A ✅** p.x
- **B ❌** p->x
- **C ❌** *p.x
- **D ❌** &p.x comme accès à la valeur

**Correction proposée :** A. . accède à un membre d'objet structure.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/3-acces-aux-membres-avec

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-003-01 — Accès par pointeur avec ->

**Une seule bonne réponse**

Pour `struct point *p` valide, comment accéder à x ?

- **A ✅** p->x
- **B ❌** p.x
- **C ❌** (*p)->x
- **D ❌** p.x()

**Correction proposée :** A. p->x correspond à (*p).x.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/4-acces-par-pointeur-avec

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-004-01 — Initialiser une struct avec { }

**Une seule bonne réponse**

Que permet l'initialisation `struct point p={1,2};` ?

- **A ✅** Initialiser les membres dans leur ordre de déclaration
- **B ❌** Appeler implicitement malloc
- **C ❌** Créer forcément un tableau de deux structures
- **D ❌** Déclarer une fonction retournant int

**Correction proposée :** A. Une liste d'initialisation affecte les membres correspondants.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/5-initialiser-une-struct-avec

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-005-01 — Initialiseurs désignés .membre (C99)

**Une seule bonne réponse**

Quel mécanisme C99 permet d'écrire `struct point p={.x=1,.y=2};` ?

- **A ✅** Initialiseurs désignés
- **B ❌** Appel de fonction via pointeur
- **C ❌** Arithmétique des pointeurs
- **D ❌** Union anonyme obligatoire

**Correction proposée :** A. Les initialisateurs désignés sont une fonctionnalité C99.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/6-initialiseurs-designes-membre-c99

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-006-01 — Tableau de structures

**Une seule bonne réponse**

Avec `struct point p[3];`, combien de structures contient le tableau ?

- **A ✅** 3
- **B ❌** 6
- **C ❌** 1
- **D ❌** 0

**Correction proposée :** A. Le tableau comporte trois éléments struct.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/7-tableau-de-structures

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-007-01 — Structure imbriquée

**Une seule bonne réponse**

Comment accéder au champ x d'un membre position lui-même de type struct, dans un objet p ?

- **A ✅** p.position.x
- **B ❌** p->position->x dans tous les cas
- **C ❌** p[x][position]
- **D ❌** p.position->x quelle que soit sa déclaration

**Correction proposée :** A. L'opérateur . s'enchaîne sur les objets structures imbriquées.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/8-structure-imbriquee

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-008-01 — Copier une struct par affectation

**Une seule bonne réponse**

Que signifie `b=a;` pour deux objets du même type struct ?

- **A ✅** Copie par valeur des membres de a vers b
- **B ❌** Simple alias automatique de a
- **C ❌** Allocation implicite de b sur le tas
- **D ❌** Interdiction absolue du langage C

**Correction proposée :** A. L'affectation de structures copie la valeur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/9-copier-une-struct-par-affectation

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-009-01 — Passer une struct par valeur

**Une seule bonne réponse**

Une structure passée comme paramètre ordinaire est-elle copiée ?

- **A ✅** Oui, passage par valeur
- **B ❌** Non, passage par référence automatique
- **C ❌** Oui, seulement si elle contient un pointeur
- **D ❌** Non, les structures sont incompatibles avec les paramètres

**Correction proposée :** A. Le paramètre reçoit une copie de la structure.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/10-passer-une-struct-par-valeur

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-010-01 — Modifier une struct via son adresse

**Une seule bonne réponse**

Quel paramètre permet à une fonction de modifier directement l'objet struct de l'appelant ?

- **A ✅** struct point *p
- **B ❌** struct point p
- **C ❌** int p
- **D ❌** char p

**Correction proposée :** A. Un pointeur permet l'accès à l'objet initial.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/11-modifier-une-struct-via-son-adresse

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-011-01 — typedef : donner un alias à un type

**Une seule bonne réponse**

Que fait typedef en C ?

- **A ✅** Donne un alias à un type existant
- **B ❌** Crée un objet alloué
- **C ❌** Exécute le code de la struct
- **D ❌** Ajoute obligatoirement un membre

**Correction proposée :** A. typedef est un alias de nom de type.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/12-typedef-donner-un-alias-a-un-type

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-012-01 — typedef struct : nommer une structure

**Une seule bonne réponse**

Quel intérêt a `typedef struct point point_t;` si struct point est défini ?

- **A ✅** Utiliser point_t comme alias du type struct point
- **B ❌** Supprimer tous les membres de la structure
- **C ❌** Transformer une structure en chaîne
- **D ❌** Allouer un tableau automatiquement

**Correction proposée :** A. L'alias facilite la déclaration.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/13-typedef-struct-nommer-une-structure

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-013-01 — typedef avec structure anonyme

**Une seule bonne réponse**

Une struct anonyme définie avec typedef peut-elle être utilisée via son alias ?

- **A ✅** Oui
- **B ❌** Non, il faut toujours un tag struct nommé
- **C ❌** Oui seulement dans C++
- **D ❌** Non, typedef n'accepte aucune structure

**Correction proposée :** A. L'alias nomme le type même sans tag.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/14-typedef-avec-structure-anonyme

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-014-01 — sizeof(struct) et padding (avancé)

**Une seule bonne réponse**

Pourquoi sizeof(struct) peut-elle dépasser la somme des sizeof des membres ?

- **A ✅** À cause du padding d'alignement
- **B ❌** Parce que sizeof mesure les valeurs numériques
- **C ❌** Parce qu'une struct est toujours de taille 1024
- **D ❌** Parce que tous les champs ont une taille nulle

**Correction proposée :** A. Le compilateur peut insérer des octets de padding.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/15-sizeof-struct-et-padding-avance

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-015-01 — malloc pour une struct

**Une seule bonne réponse**

Quel idiome alloue l'espace d'une structure visée par p, sous réserve de vérifier le résultat ?

- **A ✅** p = malloc(sizeof *p);
- **B ❌** p = malloc(sizeof p); en toute circonstance
- **C ❌** p = sizeof *p;
- **D ❌** p = free(sizeof *p);

**Correction proposée :** A. sizeof *p mesure la structure pointée.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/16-malloc-pour-une-struct

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-016-01 — Structure autoréférentielle (avancé)

**Une seule bonne réponse**

Quel champ permet une liste chaînée autoréférentielle de struct noeud ?

- **A ✅** struct noeud *suivant;
- **B ❌** struct noeud suivant; comme membre complet
- **C ❌** int *suivant exigeant une conversion implicite
- **D ❌** char suivant; contenant une adresse

**Correction proposée :** A. Une structure peut contenir un pointeur vers son propre type.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/17-structure-autoreferentielle-avance

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-017-01 — Documenter une struct pour Betty

**Une seule bonne réponse**

Pourquoi documenter les membres d'une struct dans un en-tête ?

- **A ✅** Rendre le contrat du type compréhensible
- **B ❌** Augmenter automatiquement sa taille
- **C ❌** Transformer tous les champs en pointeurs
- **D ❌** Remplacer les prototypes

**Correction proposée :** A. La documentation explicite les champs et leur sens.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/18-documenter-une-struct-pour-betty

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-018-01 — typedef avant la définition d'une struct

**Une seule bonne réponse**

Peut-on déclarer `typedef struct cellule cellule_t;` avant de définir les membres de struct cellule ?

- **A ✅** Oui, il s'agit alors d'un type incomplet utilisable par pointeur
- **B ❌** Non, C exige toujours des membres immédiats
- **C ❌** Oui, on peut immédiatement faire sizeof(cellule_t) avant définition
- **D ❌** Non, typedef est réservé aux entiers

**Correction proposée :** A. Le type incomplet peut être désigné par pointeur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/19-typedef-avant-la-definition-d-une-struct

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-019-01 — Point ou flèche ? Comparer . et ->

**Une seule bonne réponse**

Quelle équivalence est correcte pour p pointeur vers struct ?

- **A ✅** p->x == (*p).x
- **B ❌** p->x == *p.x pour tous les types
- **C ❌** p.x == &p.x
- **D ❌** p->x appelle toujours malloc

**Correction proposée :** A. -> signifie déréférencement suivi d'accès au membre.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/20-point-ou-fleche-comparer-et

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-16-020-01 — Include guards — protéger les fichiers .h

**Une seule bonne réponse**

Quel est l'objectif d'un include guard #ifndef/#define/#endif dans un fichier .h ?

- **A ✅** Éviter plusieurs traitements du même contenu dans une unité de traduction
- **B ❌** Empêcher toute compilation de la source
- **C ❌** Remplacer un compilateur C
- **D ❌** Faire un appel réseau

**Correction proposée :** A. La garde limite les inclusions répétées dans une même unité de traduction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/21-include-guards-proteger-les-fichiers-h

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-066-01 — Pointeur de fonction — déclarer une signature

**Une seule bonne réponse**

Quelle déclaration représente un pointeur vers une fonction int prenant un int ?

- **A ✅** int (*f)(int);
- **B ❌** int *f(int);
- **C ❌** int f*(int);
- **D ❌** int f(int *);

**Correction proposée :** A. La parenthèse (*f) indique le pointeur de fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/67-pointeur-de-fonction-declarer-une-signature

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-067-01 — Appeler un pointeur de fonction — f(x) ou (*f)(x)

**Plusieurs bonnes réponses**

Pour un pointeur de fonction valide f, quelles formes d'appel sont équivalentes ?

- **A ✅** f(5)
- **B ✅** (*f)(5)
- **C ❌** &f(5) comme appel toujours équivalent
- **D ❌** f++(5) comme arithmétique définie

**Correction proposée :** A, B. Les formes f(5) et (*f)(5) appellent la cible.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/68-appeler-un-pointeur-de-fonction-f-x-ou-f-x

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-068-01 — Callback — transmettre une fonction en paramètre

**Une seule bonne réponse**

Qu'est-ce qu'un callback en C ?

- **A ✅** Une fonction passée à une autre fonction pour être appelée
- **B ❌** Une variable locale de type char
- **C ❌** Un tableau toujours sur le tas
- **D ❌** Un pointeur de données toujours nul

**Correction proposée :** A. Le callback fournit un traitement sélectionnable via un pointeur de fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/69-callback-transmettre-une-fonction-en-parametre

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-069-01 — Tableau de pointeurs de fonctions — choisir une opération

**Plusieurs bonnes réponses**

Quelles précautions avec un tableau de pointeurs de fonctions ?

- **A ✅** Vérifier l'indice avant l'accès
- **B ✅** Ne pas appeler un élément NULL
- **C ❌** Appeler un indice hors limites pour tester la vitesse
- **D ❌** Supposer que toutes les signatures sont interchangeables

**Correction proposée :** A, B. L'indice et le pointeur doivent être valides et les signatures compatibles.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/70-tableau-de-pointeurs-de-fonctions-choisir-une-operation

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-070-01 — typedef d'un pointeur de fonction — simplifier les signatures

**Une seule bonne réponse**

Que décrit `typedef int (*operation_fn)(int,int);` ?

- **A ✅** Un alias pour un type de pointeur de fonction
- **B ❌** Une fonction appelée immédiatement
- **C ❌** Une chaîne de deux int
- **D ❌** Une déclaration de tableau automatique

**Correction proposée :** A. typedef renomme le type de pointeur vers fonction.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/71-typedef-d-un-pointeur-de-fonction-simplifier-les-signatures

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

## CDEEP-09-071-01 — qsort() — comparateur passé par pointeur de fonction

**Une seule bonne réponse**

Pourquoi utiliser `(a>b)-(a<b)` comme comparateur d'int pour qsort ?

- **A ✅** Éviter le débordement possible de `a-b`
- **B ❌** Garantir que qsort est stable
- **C ❌** Trier nécessairement en ordre décroissant
- **D ❌** Éviter de recevoir des void *

**Correction proposée :** A. Cette expression donne -1/0/1 sans soustraction potentiellement débordante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/72-qsort-comparateur-passe-par-pointeur-de-fonction

**Vérification indépendante :** ☐ validée ☐ corrigée ☐ ambiguë ☐ rejetée

---

