# Revue de quiz — undefined

**20 questions candidates à vérifier.** Les réponses indiquées sont destinées aux relecteurs, pas à l'interface des élèves.

## APP-09-014-001 — Indices de tableau

**Une seule bonne réponse**

Avec `int t[8]={2,4,6,8,10,12,14,16};`, que vaut `t[0]` ? (Une seule réponse correcte.)

- **A ❌** 0
- **B ❌** Impossible dans cet exemple
- **C ❌** 101
- **D ✅** 2

**Corrigé candidat :** D. Le premier indice est 0.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-020-001 — Notation équivalente

**Une seule bonne réponse**

Avec `int t[8]={2,4,6,8,10,12,14,16}; int *p=t;`, que vaut `*(p+0)` ? (Une seule réponse correcte.)

- **A ❌** 0
- **B ❌** Impossible dans cet exemple
- **C ❌** 101
- **D ✅** 2

**Corrigé candidat :** D. L'arithmétique des pointeurs avance en éléments, pas en octets.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-026-001 — Parcourir un tableau

**Une seule bonne réponse**

Un tableau C déclaré avec un seul élément possède quels indices valides ? (Une seule réponse correcte.)

- **A ❌** 1 à 1
- **B ❌** 0 à 1
- **C ✅** 0 à 0
- **D ❌** 1 à 2

**Corrigé candidat :** C. En C, la plage est 0 à n-1.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-014-002 — Indices de tableau

**Une seule bonne réponse**

Avec `int t[8]={2,4,6,8,10,12,14,16};`, que vaut `t[1]` ? (Une seule réponse correcte.)

- **A ✅** 4
- **B ❌** 3
- **C ❌** 1
- **D ❌** 102

**Corrigé candidat :** A. Le premier indice est 0.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-020-002 — Notation équivalente

**Une seule bonne réponse**

Avec `int t[8]={2,4,6,8,10,12,14,16}; int *p=t;`, que vaut `*(p+1)` ? (Une seule réponse correcte.)

- **A ✅** 4
- **B ❌** 102
- **C ❌** 3
- **D ❌** 1

**Corrigé candidat :** A. L'arithmétique des pointeurs avance en éléments, pas en octets.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-026-002 — Parcourir un tableau

**Une seule bonne réponse**

Un tableau déclaré avec 2 éléments valides a quelle plage d'indices ? (Une seule réponse correcte.)

- **A ❌** 0 à 2
- **B ❌** 1 à 3
- **C ✅** 0 à 1
- **D ❌** 1 à 2

**Corrigé candidat :** C. En C, la plage est 0 à n-1.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-014-003 — Indices de tableau

**Une seule bonne réponse**

Pour `int t[4]={7,8,9,10};`, quel est le statut de la lecture `t[4]` ? (Une seule réponse correcte.)

- **A ❌** Elle vaut nécessairement 10.
- **B ❌** Elle lit nécessairement zéro.
- **C ❌** Elle déclenche obligatoirement SIGSEGV.
- **D ✅** Elle dépasse les bornes : comportement indéfini.

**Corrigé candidat :** D. Les indices du tableau sont 0,1,2,3 ; t[4] ne désigne pas un élément accessible.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-020-003 — Notation équivalente

**Une seule bonne réponse**

Avec `int t[]={2,4,6}; int *p=t+1;`, que vaut `p[-1]` ? (Une seule réponse correcte.)

- **A ❌** 4
- **B ✅** 2
- **C ❌** 6
- **D ❌** Comportement indéfini dans ce contexte.

**Corrigé candidat :** B. p désigne t[1] ; p[-1] est identique à *(p-1), soit t[0].

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-026-003 — Parcourir un tableau

**Une seule bonne réponse**

Avec `int t[3]={1,2,3};`, que risque la boucle `for(i=0;i<=3;i++) printf("%d",t[i]);` ? (Une seule réponse correcte.)

- **A ❌** Elle affiche forcément 1230.
- **B ✅** Elle lit hors des limites lorsque i vaut 3.
- **C ❌** Elle n'effectue que deux tours.
- **D ❌** Elle s'arrête automatiquement à la taille du tableau.

**Corrigé candidat :** B. Le dernier indice de t est 2. La condition i<=3 permet une itération hors limites.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-014-004 — Indices de tableau

**Une seule bonne réponse**

Dans `int t[4]={4,8,12,16};`, quel indice désigne le dernier élément valide ? (Une seule réponse correcte.)

- **A ✅** 3
- **B ❌** 4
- **C ❌** 2
- **D ❌** 5

**Corrigé candidat :** A. Le dernier indice d'un tableau de n éléments est n-1.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/15-indices-de-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-020-004 — Notation équivalente

**Plusieurs bonnes réponses**

Avec `int t[]={2,4,6}; int *p=t;`, quelles affirmations sur `*(p++)` sont exactes ? (Plusieurs réponses correctes.)

- **A ✅** L'expression lit 2.
- **B ✅** Après l'expression, p désigne t[1].
- **C ❌** L'incrémentation modifie t[0].
- **D ❌** L'expression est équivalente à `*(++p)`.

**Corrigé candidat :** A, B. p++ utilise l'ancienne adresse pour le déréférencement, puis avance p d'un élément.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/21-notation-equivalente

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-026-004 — Parcourir un tableau

**Une seule bonne réponse**

Avec `int t[3]={2,4,8}; int i=3,s=0; for(;i-->0;) s+=t[i];`, quelle est la valeur finale de s ? (Une seule réponse correcte.)

- **A ❌** 6
- **B ❌** 8
- **C ❌** 12
- **D ✅** 14

**Corrigé candidat :** D. La boucle additionne t[2], t[1] et t[0], soit 8+4+2=14.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/27-parcourir-un-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-039-001 — strlen, sizeof et terminateur nul

**Une seule bonne réponse**

Avec `char mot[]="Ada";`, que vaut `strlen(mot)` ? (Une seule réponse correcte.)

- **A ❌** 5
- **B ✅** 3
- **C ❌** 2
- **D ❌** 4

**Corrigé candidat :** B. strlen compte 3 caractères et exclut le terminateur nul.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-017-001 — sizeof(tableau)

**Une seule bonne réponse**

Avec `char mot[]="Ada";`, que vaut `sizeof mot` ? (Une seule réponse correcte.)

- **A ❌** 5
- **B ✅** 4
- **C ❌** 2
- **D ❌** 3

**Corrigé candidat :** B. Le tableau contient aussi le terminateur nul : 4 octets.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-039-002 — strlen, sizeof et terminateur nul

**Une seule bonne réponse**

Avec `char mot[]="C";`, que vaut `strlen(mot)` ? (Une seule réponse correcte.)

- **A ✅** 1
- **B ❌** 2
- **C ❌** 3
- **D ❌** 0

**Corrigé candidat :** A. strlen compte 1 caractères et exclut le terminateur nul.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-017-002 — sizeof(tableau)

**Une seule bonne réponse**

Avec `char mot[]="C";`, que vaut `sizeof mot` ? (Une seule réponse correcte.)

- **A ❌** 0
- **B ✅** 2
- **C ❌** 1
- **D ❌** 3

**Corrigé candidat :** B. Le tableau contient aussi le terminateur nul : 2 octets.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-039-003 — strlen, sizeof et terminateur nul

**Plusieurs bonnes réponses**

Pour `char s[]={'A','\0','B','\0'};`, quelles affirmations sont exactes ? (Plusieurs réponses correctes.)

- **A ✅** strlen(s) vaut 1.
- **B ✅** sizeof s vaut 4.
- **C ✅** Le caractère B est stocké après le premier nul.
- **D ❌** strlen(s) vaut 3.
- **E ❌** sizeof s vaut la taille d'un pointeur.

**Corrigé candidat :** A, B, C. Le premier caractère nul arrête strlen, mais le tableau contient quatre éléments dont B.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-017-003 — sizeof(tableau)

**Une seule bonne réponse**

Pour `int a[5]={1,2,3,4,5};`, que donne `sizeof a / sizeof a[0]` ? (Une seule réponse correcte.)

- **A ❌** 1
- **B ✅** 5
- **C ❌** La taille d'un pointeur.
- **D ❌** 20 sur toutes les architectures.

**Corrigé candidat :** B. sizeof a mesure le tableau entier, et sizeof a[0] un élément ; leur quotient vaut cinq.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-039-004 — strlen, sizeof et terminateur nul

**Une seule bonne réponse**

Avec `char s[2]={'A','B'};`, que peut-on dire de `strlen(s)` ? (Une seule réponse correcte.)

- **A ❌** Elle vaut toujours 2.
- **B ❌** Elle ajoute automatiquement '\0' dans s.
- **C ❌** Elle vaut toujours 3.
- **D ✅** s n'est pas une chaîne C terminée : l'appel ne possède pas de terminaison valide.

**Corrigé candidat :** D. strlen exige un terminateur nul ; ce tableau ne contient que A et B.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/40-strlen-sizeof-et-terminateur-nul

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

## APP-09-017-004 — sizeof(tableau)

**Plusieurs bonnes réponses**

Pour `char s[8]="Hi";`, quelles affirmations sont exactes ? (Plusieurs réponses correctes.)

- **A ✅** sizeof s vaut 8.
- **B ✅** strlen(s) vaut 2.
- **C ❌** sizeof s vaut 3 puisqu'il inclut le nul.
- **D ❌** Les octets qui suivent le nul restent non initialisés.

**Corrigé candidat :** A, B. Le tableau possède huit octets ; après H, i et le nul, les éléments restants sont initialisés à zéro.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/pointeurs-et-tableaux-c/18-sizeof-tableau

**Relecture indépendante :** ☐ exacte ☐ ambiguë ☐ correction ☐ rejetée

---

