# Revue de questions — questions c techniques

**123 nouvelles questions candidates, non validées.** Les réponses visibles ci-dessous servent exclusivement à la revue des IA ; elles ne sont pas destinées à l'interface du quiz. Les propositions ont été réordonnées de manière déterministe pour éviter qu'une position signale systématiquement la bonne réponse.

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

## CDEEP-09-000-01 — Pointeur (pointer)

**Une seule bonne réponse**

Quel opérateur donne l'adresse d'un objet ordinaire en C ?

- **A ✅** &
- **B ❌** ||
- **C ❌** %
- **D ❌** *

**Corrigé candidat :** A. L'opérateur unaire & prend l'adresse.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/1-pointeur-pointer

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-002-01 — & (opérateur d’adresse)

**Une seule bonne réponse**

Avec `int a=7;`, quelle expression a le type int * ?

- **A ❌** a
- **B ❌** sizeof a
- **C ✅** &a
- **D ❌** *a

**Corrigé candidat :** C. &a désigne l'adresse de l'objet a.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/3-operateur-d-adresse

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-003-01 — * dans une déclaration

**Une seule bonne réponse**

Quelle déclaration exprime correctement un pointeur vers int ?

- **A ✅** int *p;
- **B ❌** pointer<int> p;
- **C ❌** int &p;
- **D ❌** int p*;

**Corrigé candidat :** A. L'astérisque appartient à la déclaration du pointeur C.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/4-dans-une-declaration

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-004-01 — * dans une expression

**Une seule bonne réponse**

Avec `int a=7; int *p=&a;`, que vaut `*p` ?

- **A ❌** Une chaîne vide
- **B ❌** La taille d'un int
- **C ❌** L'adresse de a
- **D ✅** 7

**Corrigé candidat :** D. *p lit l'objet pointé tant que l'adresse est valide.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/5-dans-une-expression

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-005-01 — Modifier une valeur par un pointeur

**Une seule bonne réponse**

Avec `int n=2; int *p=&n; *p=9;`, que vaut n ?

- **A ❌** L'adresse de p
- **B ❌** 0
- **C ✅** 9
- **D ❌** 2

**Corrigé candidat :** C. Le déréférencement modifie l'objet original n.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/6-modifier-une-valeur-par-un-pointeur

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-006-01 — Valeur de p, *p et &p

**Plusieurs bonnes réponses**

Avec `int n=3; int *p=&n;`, quels objets sont différents conceptuellement ?

- **A ✅** *p désigne la valeur de n
- **B ❌** p, *p et &p ont toujours le même type
- **C ✅** p est une variable contenant une adresse
- **D ✅** &p désigne l'adresse de la variable p

**Corrigé candidat :** A, C, D. Les trois expressions ne désignent pas la même chose.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/7-valeur-de-p-p-et-p

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-007-01 — Type pointé

**Une seule bonne réponse**

Pourquoi le type pointé d'un int * est-il important ?

- **A ❌** Il autorise la modification arbitraire de n'importe quel objet
- **B ❌** Il force toutes les adresses à valoir zéro
- **C ✅** Il définit le type de l'objet lors du déréférencement
- **D ❌** Il donne automatiquement la capacité d'une zone allouée

**Corrigé candidat :** C. Le type guide l'interprétation et la taille d'un accès.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/8-type-pointe

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-008-01 — %p avec printf

**Une seule bonne réponse**

Comment afficher correctement un pointeur vers objet avec printf `%p` ?

- **A ❌** printf("%d", p);
- **B ✅** printf("%p", (void *)p);
- **C ❌** printf("%c", p);
- **D ❌** printf("%s", p);

**Corrigé candidat :** B. %p attend un argument void * dans les règles de printf.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/9-p-avec-printf

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-009-01 — sizeof

**Une seule bonne réponse**

Que mesure sizeof pour un tableau local `int a[4]` dans sa portée ?

- **A ✅** La taille de tout le tableau en octets
- **B ❌** La valeur du premier élément
- **C ❌** Toujours 4 octets
- **D ❌** La taille du pointeur implicite

**Corrigé candidat :** A. sizeof sur le tableau entier donne la taille des quatre objets int.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/10-sizeof

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-010-01 — Tailles des pointeurs

**Une seule bonne réponse**

Est-il portable de considérer que tout pointeur de fonction fait exactement 8 octets ?

- **A ❌** Oui, même en C89
- **B ❌** Oui, pour tout système Linux
- **C ❌** Oui, seulement avec GNU89
- **D ✅** Non

**Corrigé candidat :** D. La représentation et taille des pointeurs dépendent de la plateforme.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/11-tailles-des-pointeurs

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-011-01 — Passage d’arguments par valeur

**Une seule bonne réponse**

En C, modifier un paramètre `int n` change-t-il automatiquement l'argument original ?

- **A ❌** Oui : C utilise le passage par référence partout
- **B ❌** Oui : seulement si n vaut 0
- **C ❌** Oui : la pile est toujours partagée
- **D ✅** Non : les arguments sont passés par valeur

**Corrigé candidat :** D. Un paramètre reçoit une copie de la valeur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/12-passage-d-arguments-par-valeur

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-012-01 — Passer une adresse à une fonction

**Une seule bonne réponse**

Comment une fonction peut-elle modifier un int de l'appelant ?

- **A ✅** Recevoir son adresse dans int *p et écrire *p
- **B ❌** Recevoir une copie int p et écrire p
- **C ❌** Déclarer p en local et l'affecter
- **D ❌** Recevoir int p et appeler printf

**Corrigé candidat :** A. Le pointeur donne accès à l'objet original.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/13-passer-une-adresse-a-une-fonction

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-013-01 — Tableau

**Une seule bonne réponse**

Combien d'éléments comporte `int tab[5]` ?

- **A ❌** 6
- **B ✅** 5
- **C ❌** sizeof(int)
- **D ❌** 4

**Corrigé candidat :** B. La déclaration donne cinq éléments indexés 0…4.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/14-tableau

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-015-01 — Tableau ≠ pointeur

**Une seule bonne réponse**

Pourquoi un tableau n'est-il pas un pointeur, même s'il peut se convertir en pointeur ?

- **A ✅** Il s'agit de types et d'objets distincts
- **B ❌** Parce que tous les tableaux sont des fonctions
- **C ❌** Parce que sizeof(array) vaut toujours sizeof(pointer)
- **D ❌** Parce que les tableaux ne contiennent jamais de valeurs

**Corrigé candidat :** A. Le tableau est un ensemble d'éléments, le pointeur est un objet pouvant contenir une adresse.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/16-tableau-pointeur

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-016-01 — Conversion tableau → pointeur

**Une seule bonne réponse**

Dans un appel f(tab), que devient normalement un tableau d'int comme expression argument ?

- **A ❌** Une structure contenant sa longueur
- **B ✅** Une adresse de son premier élément
- **C ❌** Une copie automatique de tous les octets dans un int
- **D ❌** Toujours NULL

**Corrigé candidat :** B. Le tableau est converti en pointeur vers son premier élément, sauf contextes particuliers.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/17-conversion-tableau-pointeur

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-018-01 — &tableau

**Une seule bonne réponse**

Pour un tableau int tab[5], quelle différence entre &tab et &tab[0] ?

- **A ❌** &tab[0] désigne toute une structure
- **B ✅** Ils ont des types de pointeurs différents
- **C ❌** Ils désignent nécessairement des allocations différentes
- **D ❌** &tab correspond à un int *

**Corrigé candidat :** B. &tab est pointeur vers tableau, &tab[0] est pointeur vers élément int.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/19-tableau

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-019-01 — Arithmétique des pointeurs

**Une seule bonne réponse**

Que signifie `p+1` lorsque p est un int * valide au sein d'un tableau ?

- **A ❌** Exécuter l'instruction C suivante
- **B ✅** Avancer d'un élément int
- **C ❌** Déréférencer automatiquement p
- **D ❌** Avancer toujours d'un octet

**Corrigé candidat :** B. L'arithmétique des pointeurs dépend de la taille du type pointé.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/20-arithmetique-des-pointeurs

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-021-01 — Chaîne de caractères en C

**Une seule bonne réponse**

Qu'est-ce qu'une chaîne C valide ?

- **A ❌** Un pointeur non initialisé
- **B ❌** Une valeur char unique
- **C ✅** Une suite de caractères terminée par '\0' dans une zone accessible
- **D ❌** Un tableau obligatoirement de 100 octets

**Corrigé candidat :** C. La terminaison nulle délimite la chaîne.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/22-chaine-de-caracteres-en-c

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-022-01 — Caractère nul

**Une seule bonne réponse**

Quel rôle joue '\0' dans une chaîne C ?

- **A ❌** Indiquer la mémoire allouée
- **B ❌** Être un saut de ligne
- **C ❌** Signifier EOF dans le fichier source
- **D ✅** Marquer la fin de chaîne

**Corrigé candidat :** D. Les fonctions sur les chaînes repèrent le caractère nul.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/23-caractere-nul

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-023-01 — %s avec printf

**Une seule bonne réponse**

Que faut-il passer à printf %s ?

- **A ❌** Une adresse de tableau sans terminateur
- **B ✅** Une adresse de chaîne valide terminée par nul
- **C ❌** Un simple caractère sans adresse
- **D ❌** Une valeur int quelconque

**Corrigé candidat :** B. %s lit une chaîne terminée par un caractère nul.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/24-s-avec-printf

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-030-01 — malloc — allocation dynamique

**Plusieurs bonnes réponses**

Quels comportements sont possibles pour malloc selon la taille et l'environnement ?

- **A ❌** Mettre obligatoirement tous les octets à zéro
- **B ❌** Libérer le pointeur automatiquement à la fin du bloc local
- **C ✅** Renvoyer un pointeur utilisable si elle réussit
- **D ✅** Renvoyer NULL si l'allocation échoue

**Corrigé candidat :** C, D. malloc peut échouer et n'initialise pas les octets alloués.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/31-malloc-allocation-dynamique

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-031-01 — free — libérer la mémoire

**Une seule bonne réponse**

Que fait `free(NULL)` selon la bibliothèque standard C ?

- **A ❌** Libère toute la mémoire du processus
- **B ❌** Provoque toujours SIGSEGV
- **C ❌** Renvoie -1
- **D ✅** Rien

**Corrigé candidat :** D. Un pointeur nul est accepté par free.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/32-free-liberer-la-memoire

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-033-01 — Chaîne littérale et tableau de char

**Une seule bonne réponse**

Avec `char *s="abc";`, peut-on modifier s[0] de façon définie ?

- **A ✅** Non : modifier un littéral de chaîne est indéfini
- **B ❌** Oui : les littéraux sont toujours en mémoire écrivable
- **C ❌** Oui : uniquement sous Linux
- **D ❌** Oui : char * garantit l'écriture

**Corrigé candidat :** A. Un littéral de chaîne n'est pas modifiable par le programme.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/34-chaine-litterale-et-tableau-de-char · https://en.cppreference.com/w/c/language/string_literal

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-034-01 — malloc : vérifier NULL

**Une seule bonne réponse**

Après un malloc potentiellement défaillant, quelle condition empêche de déréférencer NULL ?

- **A ❌** if (p == NULL) puis *p=1
- **B ❌** while (p == NULL) *p=1
- **C ❌** if (sizeof p == 0)
- **D ✅** if (p != NULL)

**Corrigé candidat :** D. Tester la réussite avant tout accès.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/35-malloc-verifier-null

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-035-01 — Fuite mémoire — allocation perdue

**Une seule bonne réponse**

Qu'est-ce qu'une fuite mémoire ?

- **A ❌** Une sortie standard vide
- **B ❌** Une simple lecture de mémoire
- **C ✅** Un bloc alloué qu'on ne libère pas lorsqu'il n'est plus utile
- **D ❌** Une variable int locale

**Corrigé candidat :** C. La responsabilité de libération n'est pas honorée.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/36-fuite-memoire-allocation-perdue

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-036-01 — Valgrind — détecter les fuites

**Une seule bonne réponse**

Quel outil peut signaler une fuite par une catégorie definitely lost ?

- **A ❌** gcc -E
- **B ❌** git status
- **C ✅** Valgrind Memcheck
- **D ❌** grep -A

**Corrigé candidat :** C. Valgrind Memcheck détecte certaines fuites et accès invalides.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/37-valgrind-detecter-les-fuites

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-038-01 — malloc et sizeof : allouer le bon nombre d’octets

**Une seule bonne réponse**

Pour un int *p et un nombre d'éléments n, quel schéma d'allocation est généralement adéquat si le produit ne déborde pas ?

- **A ❌** malloc(n) toujours
- **B ❌** malloc(sizeof n) toujours
- **C ✅** malloc(n * sizeof *p)
- **D ❌** malloc(sizeof p) toujours

**Corrigé candidat :** C. Le produit doit tenir compte de la taille de l'élément.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/39-malloc-et-sizeof-allouer-le-bon-nombre-d-octets

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-039-01 — strlen, sizeof et terminateur nul

**Une seule bonne réponse**

Avec `char mot[]="abc";`, que valent strlen(mot) et sizeof mot ?

- **A ❌** 3 et 3
- **B ✅** 3 et 4
- **C ❌** 4 et 4
- **D ❌** 4 et 3

**Corrigé candidat :** B. strlen exclut le terminateur nul, sizeof mesure tout le tableau.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-040-01 — strcpy : copier dans un espace existant

**Une seule bonne réponse**

Quel danger représente strcpy sans capacité suffisante dans la destination ?

- **A ❌** Une conversion implicite en int
- **B ❌** Une allocation automatique sûre
- **C ❌** Une suppression de ' ' garantie
- **D ✅** Une écriture hors limites

**Corrigé candidat :** D. strcpy ne reçoit pas la taille du tampon de destination.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/41-strcpy-copier-dans-un-espace-existant

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-041-01 — strdup : copie allouée dynamiquement

**Une seule bonne réponse**

Pourquoi faut-il généralement free le résultat réussi de strdup ?

- **A ❌** Le résultat pointe forcément vers un littéral
- **B ✅** La chaîne dupliquée est allouée dynamiquement
- **C ❌** strdup renvoie toujours un objet automatique
- **D ❌** Le résultat est une constante du compilateur

**Corrigé candidat :** B. La copie sur le tas doit être libérée.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/42-strdup-copie-allouee-dynamiquement

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-042-01 — Pile et tas : durée de vie des allocations

**Plusieurs bonnes réponses**

Quelle distinction de durée de vie est correcte ?

- **A ✅** Une allocation sur le tas doit être libérée explicitement
- **B ❌** malloc garantit un objet local temporaire
- **C ✅** Une variable automatique a souvent la durée de vie du bloc
- **D ❌** Une variable automatique dure nécessairement jusqu'à l'arrêt du programme

**Corrigé candidat :** A, C. Les durées de vie des variables automatiques et blocs alloués diffèrent.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/43-pile-et-tas-duree-de-vie-des-allocations

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-043-01 — free : quelles adresses peut-on libérer ?

**Une seule bonne réponse**

Quelle adresse est libérable par free ?

- **A ✅** Un pointeur issu d'un malloc réussi et non encore libéré
- **B ❌** Une adresse calculée en plein milieu d'un bloc
- **C ❌** L'adresse d'un int local
- **D ❌** L'adresse d'un littéral de chaîne

**Corrigé candidat :** A. free doit recevoir un pointeur compatible issu de l'allocateur, ou NULL.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/44-free-quelles-adresses-peut-on-liberer

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-044-01 — Pointeur non initialisé : comportement indéfini

**Une seule bonne réponse**

Quel risque avec `int *p; *p=3;` si p n'a pas été initialisé ?

- **A ❌** Allocation automatique d'un int pointé
- **B ✅** Comportement indéfini
- **C ❌** Écriture garantie dans un bloc malloc
- **D ❌** Valeur 3 stockée dans p

**Corrigé candidat :** B. Le pointeur indéterminé ne désigne pas une cible valide garantie.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/45-pointeur-non-initialise-comportement-indefini

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-045-01 — realloc — redimensionner une allocation

**Une seule bonne réponse**

Pourquoi utiliser `tmp = realloc(p, taille)` avant de mettre p à jour ?

- **A ❌** Éviter tout besoin de free
- **B ❌** Rendre p utilisable après succès sans mise à jour
- **C ❌** Initialiser les nouveaux octets à zéro
- **D ✅** Préserver p si realloc échoue

**Corrigé candidat :** D. Un échec laisse l'ancien bloc intact ; un succès invalide l'ancien pointeur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation · https://en.cppreference.com/c/memory/realloc

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-045-02 — realloc — redimensionner une allocation

**Une seule bonne réponse**

Après un realloc réussi de taille positive, peut-on continuer à utiliser l'ancienne valeur de p pour accéder au bloc ?

- **A ❌** Oui, parce que realloc ne déplace jamais un bloc
- **B ✅** Non, même si l'adresse numérique semble identique
- **C ❌** Oui, toujours
- **D ❌** Oui, uniquement pour écrire

**Corrigé candidat :** B. L'ancien pointeur est invalidé par une réallocation réussie.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/46-realloc-redimensionner-une-allocation · https://en.cppreference.com/c/memory/realloc

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-046-01 — Segfault — faute de segmentation

**Une seule bonne réponse**

Une erreur de segmentation signifie-t-elle automatiquement qu'un pointeur nul a été déréférencé ?

- **A ❌** Non, elle ne concerne jamais la mémoire
- **B ✅** Non, plusieurs accès mémoire invalides peuvent la provoquer
- **C ❌** Oui, c'est sa cause unique
- **D ❌** Oui, sinon ce n'est pas une segfault

**Corrigé candidat :** B. Une segfault peut avoir différentes causes, selon l'environnement.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/47-segfault-faute-de-segmentation

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-047-01 — strncpy() — copie limitée et terminaison

**Une seule bonne réponse**

Pourquoi strncpy ne garantit-elle pas systématiquement le terminateur nul ?

- **A ✅** Une source de longueur >= n peut remplir les n octets sans '\0'
- **B ❌** Parce qu'elle agrandit le tableau sans borne
- **C ❌** Parce que toutes les destinations sont des int
- **D ❌** Parce qu'elle ajoute toujours deux terminateurs

**Corrigé candidat :** A. En cas de troncation, la destination peut manquer de caractère nul.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/48-strncpy-copie-limitee-et-terminaison

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-048-01 — calloc() — allouer et initialiser à zéro

**Une seule bonne réponse**

Quelle propriété de calloc est correcte ?

- **A ❌** Il empêche tout accès hors limites
- **B ❌** Il retourne toujours la même adresse
- **C ✅** Les octets alloués sont initialisés à zéro
- **D ❌** Il réserve toujours un bloc de 1 Go

**Corrigé candidat :** C. calloc initialise à zéro les octets de l'espace alloué.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/49-calloc-allouer-et-initialiser-a-zero

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-049-01 — Buffer overflow — dépassement de tampon

**Une seule bonne réponse**

Quel accès dépasse les bornes de `int t[3]` ?

- **A ❌** t[0]
- **B ❌** t[2]
- **C ❌** t[1]
- **D ✅** t[3]

**Corrigé candidat :** D. Les indices valides sont 0, 1 et 2.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/50-buffer-overflow-depassement-de-tampon

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-050-01 — Use-after-free — réutiliser un bloc libéré

**Une seule bonne réponse**

Après `free(p)`, que produit l'accès `*p=4` au bloc libéré ?

- **A ❌** Un zéro automatique
- **B ✅** Un comportement indéfini
- **C ❌** Un appel valide de malloc
- **D ❌** Une réallocation implicite

**Corrigé candidat :** B. La durée de vie du bloc est terminée.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/51-use-after-free-reutiliser-un-bloc-libere

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-051-01 — Double free — ne pas libérer deux fois

**Une seule bonne réponse**

Si q est un alias de p et que free(p) a réussi, que risque free(q) ?

- **A ✅** Double free et comportement indéfini
- **B ❌** Réduction du bloc de moitié
- **C ❌** Garantie de libération sûre sans erreur
- **D ❌** Remise automatique de q à NULL

**Corrigé candidat :** A. Les deux pointeurs visaient le même bloc déjà libéré.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/52-double-free-ne-pas-liberer-deux-fois

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-052-01 — Débordement du calcul de taille avant malloc

**Une seule bonne réponse**

Avant malloc(n * sizeof *p), quel contrôle empêche le débordement de size_t (taille élément positive) ?

- **A ❌** n == 0 seulement
- **B ❌** sizeof p == sizeof *p
- **C ❌** n <= sizeof *p
- **D ✅** n <= SIZE_MAX / sizeof *p

**Corrigé candidat :** D. La division par la taille élément donne le maximum d'éléments représentable.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/53-debordement-du-calcul-de-taille-avant-malloc

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-053-01 — Valgrind Memcheck — comprendre les alertes

**Une seule bonne réponse**

Que peut signaler Memcheck avec `Invalid write` ?

- **A ❌** Une branche Git non fusionnée
- **B ✅** Une écriture à une adresse invalide selon son analyse
- **C ❌** Un succès garanti de malloc
- **D ❌** Une variable Bash non exportée

**Corrigé candidat :** B. Memcheck signale des écritures invalides, dont hors limites et après libération.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/54-valgrind-memcheck-comprendre-les-alertes

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-054-01 — memcpy() ou memmove() — zones qui se recouvrent

**Une seule bonne réponse**

Quel outil standard convient si source et destination de la copie peuvent se recouvrir ?

- **A ✅** memmove
- **B ❌** strcpy sans conditions
- **C ❌** calloc
- **D ❌** memcpy

**Corrigé candidat :** A. memmove gère le recouvrement, contrairement à memcpy.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/55-memcpy-ou-memmove-zones-qui-se-recouvrent

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-055-01 — Dépassement de tampon sur la pile — erreur avant malloc

**Une seule bonne réponse**

Si la saisie déborde déjà un tampon local avant malloc, quel correctif est prioritaire ?

- **A ❌** Ne jamais vérifier les tailles
- **B ✅** Limiter la lecture selon la capacité du tableau
- **C ❌** Ajouter davantage de free après strcpy
- **D ❌** Changer uniquement le nom du fichier

**Corrigé candidat :** B. La corruption se produit au moment de la lecture non bornée.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/56-depassement-de-tampon-sur-la-pile-erreur-avant-malloc

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-056-01 — Tampon fixe, statique et dynamique — emplacement et durée de vie

**Plusieurs bonnes réponses**

Quelles propriétés sont indépendantes ?

- **A ✅** Taille fixe ou variable d'un tampon
- **B ❌** Tout tampon fixe est forcément statique
- **C ❌** Tout tampon sur le tas est forcément global
- **D ✅** Durée de vie automatique ou statique

**Corrigé candidat :** A, D. Taille, durée de vie et allocation sont des aspects distincts.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/57-tampon-fixe-statique-et-dynamique-emplacement-et-duree-de-vie

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-057-01 — Stack overflow — épuisement de la pile d'appels

**Une seule bonne réponse**

Quelle cause fréquente peut provoquer un épuisement de la pile ?

- **A ❌** Un commit Git
- **B ❌** Une variable d'environnement vide
- **C ❌** Un simple printf unique
- **D ✅** Récursion sans condition d'arrêt

**Corrigé candidat :** D. Les appels répétés peuvent épuiser l'espace de pile.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/58-stack-overflow-epuisement-de-la-pile-d-appels

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-058-01 — Valgrind : « definitely lost » et les octets perdus

**Une seule bonne réponse**

Un rapport `definitely lost: 32 bytes in 1 blocks` indique quoi ?

- **A ❌** Un bloc correctement libéré
- **B ✅** Un bloc de 32 octets perdu directement
- **C ❌** 32 pointeurs valides
- **D ❌** Un temps CPU de 32 ms

**Corrigé candidat :** B. La fuite certaine concerne un bloc alloué de 32 octets.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/59-valgrind-definitely-lost-et-les-octets-perdus

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-059-01 — strlen sans terminateur nul — lecture hors limites

**Une seule bonne réponse**

Pourquoi strlen sur un tableau sans '\0' accessible peut-elle poser problème ?

- **A ❌** Elle complète automatiquement le tableau
- **B ❌** Elle renvoie toujours la capacité exacte
- **C ❌** Elle appelle malloc
- **D ✅** Elle poursuit la recherche et peut lire hors limites

**Corrigé candidat :** D. strlen ne reçoit pas de longueur maximale et cherche un caractère nul.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/60-strlen-sans-terminateur-nul-lecture-hors-limites

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-060-01 — memcpy() — copier des octets sans chevauchement

**Une seule bonne réponse**

Quel comportement est garanti par memcpy quand les n octets sont valides et ne se recouvrent pas ?

- **A ✅** La copie exacte de n octets
- **B ❌** Le tri lexicographique
- **C ❌** L'ajout systématique de '\0'
- **D ❌** La suppression des allocations de destination

**Corrigé candidat :** A. memcpy copie des octets sans ajouter de terminaison de chaîne.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/61-memcpy-copier-des-octets-sans-chevauchement

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-061-01 — Ownership — qui est responsable de free() ?

**Une seule bonne réponse**

Copier un pointeur p dans q transfère-t-il automatiquement la responsabilité de free ?

- **A ❌** Oui, q devient obligatoirement propriétaire unique
- **B ❌** Oui, p devient NULL
- **C ❌** Non, mais malloc devient inutile
- **D ✅** Non, il faut définir explicitement le propriétaire

**Corrigé candidat :** D. L'ownership est une convention du programme, pas une opération implicite du langage C.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/62-ownership-qui-est-responsable-de-free

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-062-01 — Dangling pointer — pointeur vers un objet qui n'existe plus

**Une seule bonne réponse**

Un pointeur vers un objet local dont la durée de vie s'est terminée est appelé comment ?

- **A ❌** Pointeur vers un objet toujours valide
- **B ✅** Dangling pointer
- **C ❌** Pointeur de fonction
- **D ❌** Pointeur garanti NULL

**Corrigé candidat :** B. La cible n'existe plus.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/63-dangling-pointer-pointeur-vers-un-objet-qui-n-existe-plus

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-063-01 — Raw pointer — pointeur brut en C

**Une seule bonne réponse**

Que garantit un raw pointer non NULL en C ?

- **A ✅** Il contient une valeur de pointeur, pas la validité de sa cible
- **B ❌** La mémoire est libérée automatiquement
- **C ❌** La cible est forcément accessible
- **D ❌** La taille du bloc pointé est connue

**Corrigé candidat :** A. La non-nullité ne prouve ni validité ni propriété.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/64-raw-pointer-pointeur-brut-en-c

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-064-01 — char * — pointeur vers un caractère ou une chaîne

**Une seule bonne réponse**

Un char * contient-il la taille du tableau pointé ?

- **A ✅** Non
- **B ❌** Oui, seulement sous Linux
- **C ❌** Oui, automatiquement
- **D ❌** Oui, si l'adresse est paire

**Corrigé candidat :** A. Le pointeur ne porte pas la longueur du bloc.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/65-char-pointeur-vers-un-caractere-ou-une-chaine

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-065-01 — Diagnostics mémoire — INVALID_WRITE, UNINITIALIZED_VALUE et fuites

**Une seule bonne réponse**

Peut-on déduire avec certitude la vulnérabilité d'un code en lisant seulement l'intitulé de son lab ?

- **A ❌** Oui, sans jamais compiler
- **B ❌** Oui, l'intitulé suffit
- **C ✅** Non, il faut examiner le code réel et les diagnostics
- **D ❌** Oui, les noms du lab sont des messages Valgrind exacts

**Corrigé candidat :** C. Ne pas prétendre avoir établi une erreur sans consulter les preuves.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/66-diagnostics-memoire-invalid-write-uninitialized-value-et-fuites

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

---

## CDEEP-16-000-01 — struct : regrouper plusieurs données

**Une seule bonne réponse**

Qu'est-ce qu'une struct en C ?

- **A ❌** Un objet toujours dynamique
- **B ❌** Une commande Git
- **C ✅** Un type regroupant plusieurs membres
- **D ❌** Une boucle exécutée automatiquement

**Corrigé candidat :** C. Une structure regroupe des données nommées.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/1-struct-regrouper-plusieurs-donnees

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-001-01 — struct : type et variable

**Une seule bonne réponse**

Avec `struct point {int x; int y;};`, comment déclarer une variable du type ?

- **A ❌** struct p point;
- **B ✅** struct point p;
- **C ❌** point p; sans typedef
- **D ❌** int point;

**Corrigé candidat :** B. Sans typedef, le nom de type inclut le mot-clé struct.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/2-struct-type-et-variable

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-002-01 — Accès aux membres avec .

**Une seule bonne réponse**

Pour `struct point p;`, quel opérateur accède au membre x ?

- **A ❌** &p.x comme accès à la valeur
- **B ❌** p->x
- **C ❌** *p.x
- **D ✅** p.x

**Corrigé candidat :** D. . accède à un membre d'objet structure.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/3-acces-aux-membres-avec

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-003-01 — Accès par pointeur avec ->

**Une seule bonne réponse**

Pour `struct point *p` valide, comment accéder à x ?

- **A ❌** p.x()
- **B ✅** p->x
- **C ❌** p.x
- **D ❌** (*p)->x

**Corrigé candidat :** B. p->x correspond à (*p).x.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/4-acces-par-pointeur-avec

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-004-01 — Initialiser une struct avec { }

**Une seule bonne réponse**

Que permet l'initialisation `struct point p={1,2};` ?

- **A ❌** Créer forcément un tableau de deux structures
- **B ✅** Initialiser les membres dans leur ordre de déclaration
- **C ❌** Déclarer une fonction retournant int
- **D ❌** Appeler implicitement malloc

**Corrigé candidat :** B. Une liste d'initialisation affecte les membres correspondants.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/5-initialiser-une-struct-avec

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-005-01 — Initialiseurs désignés .membre (C99)

**Une seule bonne réponse**

Quel mécanisme C99 permet d'écrire `struct point p={.x=1,.y=2};` ?

- **A ❌** Appel de fonction via pointeur
- **B ✅** Initialiseurs désignés
- **C ❌** Union anonyme obligatoire
- **D ❌** Arithmétique des pointeurs

**Corrigé candidat :** B. Les initialisateurs désignés sont une fonctionnalité C99.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/6-initialiseurs-designes-membre-c99

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-006-01 — Tableau de structures

**Une seule bonne réponse**

Avec `struct point p[3];`, combien de structures contient le tableau ?

- **A ❌** 0
- **B ✅** 3
- **C ❌** 1
- **D ❌** 6

**Corrigé candidat :** B. Le tableau comporte trois éléments struct.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/7-tableau-de-structures

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-007-01 — Structure imbriquée

**Une seule bonne réponse**

Comment accéder au champ x d'un membre position lui-même de type struct, dans un objet p ?

- **A ❌** p[x][position]
- **B ❌** p->position->x dans tous les cas
- **C ✅** p.position.x
- **D ❌** p.position->x quelle que soit sa déclaration

**Corrigé candidat :** C. L'opérateur . s'enchaîne sur les objets structures imbriquées.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/8-structure-imbriquee

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-008-01 — Copier une struct par affectation

**Une seule bonne réponse**

Que signifie `b=a;` pour deux objets du même type struct ?

- **A ❌** Interdiction absolue du langage C
- **B ✅** Copie par valeur des membres de a vers b
- **C ❌** Simple alias automatique de a
- **D ❌** Allocation implicite de b sur le tas

**Corrigé candidat :** B. L'affectation de structures copie la valeur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/9-copier-une-struct-par-affectation

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-009-01 — Passer une struct par valeur

**Une seule bonne réponse**

Une structure passée comme paramètre ordinaire est-elle copiée ?

- **A ❌** Oui, seulement si elle contient un pointeur
- **B ❌** Non, les structures sont incompatibles avec les paramètres
- **C ❌** Non, passage par référence automatique
- **D ✅** Oui, passage par valeur

**Corrigé candidat :** D. Le paramètre reçoit une copie de la structure.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/10-passer-une-struct-par-valeur

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-010-01 — Modifier une struct via son adresse

**Une seule bonne réponse**

Quel paramètre permet à une fonction de modifier directement l'objet struct de l'appelant ?

- **A ❌** struct point p
- **B ❌** int p
- **C ❌** char p
- **D ✅** struct point *p

**Corrigé candidat :** D. Un pointeur permet l'accès à l'objet initial.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/11-modifier-une-struct-via-son-adresse

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-011-01 — typedef : donner un alias à un type

**Une seule bonne réponse**

Que fait typedef en C ?

- **A ✅** Donne un alias à un type existant
- **B ❌** Crée un objet alloué
- **C ❌** Exécute le code de la struct
- **D ❌** Ajoute obligatoirement un membre

**Corrigé candidat :** A. typedef est un alias de nom de type.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/12-typedef-donner-un-alias-a-un-type

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-012-01 — typedef struct : nommer une structure

**Une seule bonne réponse**

Quel intérêt a `typedef struct point point_t;` si struct point est défini ?

- **A ✅** Utiliser point_t comme alias du type struct point
- **B ❌** Supprimer tous les membres de la structure
- **C ❌** Transformer une structure en chaîne
- **D ❌** Allouer un tableau automatiquement

**Corrigé candidat :** A. L'alias facilite la déclaration.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/13-typedef-struct-nommer-une-structure

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-013-01 — typedef avec structure anonyme

**Une seule bonne réponse**

Une struct anonyme définie avec typedef peut-elle être utilisée via son alias ?

- **A ❌** Non, typedef n'accepte aucune structure
- **B ✅** Oui
- **C ❌** Non, il faut toujours un tag struct nommé
- **D ❌** Oui seulement dans C++

**Corrigé candidat :** B. L'alias nomme le type même sans tag.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/14-typedef-avec-structure-anonyme

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-014-01 — sizeof(struct) et padding (avancé)

**Une seule bonne réponse**

Pourquoi sizeof(struct) peut-elle dépasser la somme des sizeof des membres ?

- **A ❌** Parce que tous les champs ont une taille nulle
- **B ❌** Parce qu'une struct est toujours de taille 1024
- **C ✅** À cause du padding d'alignement
- **D ❌** Parce que sizeof mesure les valeurs numériques

**Corrigé candidat :** C. Le compilateur peut insérer des octets de padding.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/15-sizeof-struct-et-padding-avance

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-015-01 — malloc pour une struct

**Une seule bonne réponse**

Quel idiome alloue l'espace d'une structure visée par p, sous réserve de vérifier le résultat ?

- **A ❌** p = sizeof *p;
- **B ❌** p = malloc(sizeof p); en toute circonstance
- **C ✅** p = malloc(sizeof *p);
- **D ❌** p = free(sizeof *p);

**Corrigé candidat :** C. sizeof *p mesure la structure pointée.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/16-malloc-pour-une-struct

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-016-01 — Structure autoréférentielle (avancé)

**Une seule bonne réponse**

Quel champ permet une liste chaînée autoréférentielle de struct noeud ?

- **A ✅** struct noeud *suivant;
- **B ❌** char suivant; contenant une adresse
- **C ❌** struct noeud suivant; comme membre complet
- **D ❌** int *suivant exigeant une conversion implicite

**Corrigé candidat :** A. Une structure peut contenir un pointeur vers son propre type.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/17-structure-autoreferentielle-avance

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-017-01 — Documenter une struct pour Betty

**Une seule bonne réponse**

Pourquoi documenter les membres d'une struct dans un en-tête ?

- **A ❌** Augmenter automatiquement sa taille
- **B ❌** Remplacer les prototypes
- **C ✅** Rendre le contrat du type compréhensible
- **D ❌** Transformer tous les champs en pointeurs

**Corrigé candidat :** C. La documentation explicite les champs et leur sens.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/18-documenter-une-struct-pour-betty

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-018-01 — typedef avant la définition d'une struct

**Une seule bonne réponse**

Peut-on déclarer `typedef struct cellule cellule_t;` avant de définir les membres de struct cellule ?

- **A ❌** Oui, on peut immédiatement faire sizeof(cellule_t) avant définition
- **B ✅** Oui, il s'agit alors d'un type incomplet utilisable par pointeur
- **C ❌** Non, typedef est réservé aux entiers
- **D ❌** Non, C exige toujours des membres immédiats

**Corrigé candidat :** B. Le type incomplet peut être désigné par pointeur.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/19-typedef-avant-la-definition-d-une-struct

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-019-01 — Point ou flèche ? Comparer . et ->

**Une seule bonne réponse**

Quelle équivalence est correcte pour p pointeur vers struct ?

- **A ❌** p->x appelle toujours malloc
- **B ❌** p->x == *p.x pour tous les types
- **C ✅** p->x == (*p).x
- **D ❌** p.x == &p.x

**Corrigé candidat :** C. -> signifie déréférencement suivi d'accès au membre.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/20-point-ou-fleche-comparer-et

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-16-020-01 — Include guards — protéger les fichiers .h

**Une seule bonne réponse**

Quel est l'objectif d'un include guard #ifndef/#define/#endif dans un fichier .h ?

- **A ❌** Faire un appel réseau
- **B ❌** Remplacer un compilateur C
- **C ❌** Empêcher toute compilation de la source
- **D ✅** Éviter plusieurs traitements du même contenu dans une unité de traduction

**Corrigé candidat :** D. La garde limite les inclusions répétées dans une même unité de traduction.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/structures-et-typedef-en-c/21-include-guards-proteger-les-fichiers-h

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-066-01 — Pointeur de fonction — déclarer une signature

**Une seule bonne réponse**

Quelle déclaration représente un pointeur vers une fonction int prenant un int ?

- **A ✅** int (*f)(int);
- **B ❌** int *f(int);
- **C ❌** int f(int *);
- **D ❌** int f*(int);

**Corrigé candidat :** A. La parenthèse (*f) indique le pointeur de fonction.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/67-pointeur-de-fonction-declarer-une-signature

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-067-01 — Appeler un pointeur de fonction — f(x) ou (*f)(x)

**Plusieurs bonnes réponses**

Pour un pointeur de fonction valide f, quelles formes d'appel sont équivalentes ?

- **A ❌** f++(5) comme arithmétique définie
- **B ✅** f(5)
- **C ❌** &f(5) comme appel toujours équivalent
- **D ✅** (*f)(5)

**Corrigé candidat :** B, D. Les formes f(5) et (*f)(5) appellent la cible.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/68-appeler-un-pointeur-de-fonction-f-x-ou-f-x

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-068-01 — Callback — transmettre une fonction en paramètre

**Une seule bonne réponse**

Qu'est-ce qu'un callback en C ?

- **A ❌** Un pointeur de données toujours nul
- **B ✅** Une fonction passée à une autre fonction pour être appelée
- **C ❌** Un tableau toujours sur le tas
- **D ❌** Une variable locale de type char

**Corrigé candidat :** B. Le callback fournit un traitement sélectionnable via un pointeur de fonction.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/69-callback-transmettre-une-fonction-en-parametre

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-069-01 — Tableau de pointeurs de fonctions — choisir une opération

**Plusieurs bonnes réponses**

Quelles précautions avec un tableau de pointeurs de fonctions ?

- **A ✅** Ne pas appeler un élément NULL
- **B ❌** Supposer que toutes les signatures sont interchangeables
- **C ❌** Appeler un indice hors limites pour tester la vitesse
- **D ✅** Vérifier l'indice avant l'accès

**Corrigé candidat :** A, D. L'indice et le pointeur doivent être valides et les signatures compatibles.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/70-tableau-de-pointeurs-de-fonctions-choisir-une-operation

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-070-01 — typedef d'un pointeur de fonction — simplifier les signatures

**Une seule bonne réponse**

Que décrit `typedef int (*operation_fn)(int,int);` ?

- **A ❌** Une déclaration de tableau automatique
- **B ❌** Une chaîne de deux int
- **C ✅** Un alias pour un type de pointeur de fonction
- **D ❌** Une fonction appelée immédiatement

**Corrigé candidat :** C. typedef renomme le type de pointeur vers fonction.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/71-typedef-d-un-pointeur-de-fonction-simplifier-les-signatures

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## CDEEP-09-071-01 — qsort() — comparateur passé par pointeur de fonction

**Une seule bonne réponse**

Pourquoi utiliser `(a>b)-(a<b)` comme comparateur d'int pour qsort ?

- **A ✅** Éviter le débordement possible de `a-b`
- **B ❌** Garantir que qsort est stable
- **C ❌** Éviter de recevoir des void *
- **D ❌** Trier nécessairement en ordre décroissant

**Corrigé candidat :** A. Cette expression donne -1/0/1 sans soustraction potentiellement débordante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/72-qsort-comparateur-passe-par-pointeur-de-fonction

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

