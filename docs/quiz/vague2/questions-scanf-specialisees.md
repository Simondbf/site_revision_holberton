# Revue de questions — questions scanf specialisees

**15 nouvelles questions candidates, non validées.** Les réponses visibles ci-dessous servent exclusivement à la revue des IA ; elles ne sont pas destinées à l'interface du quiz. Les propositions ont été réordonnées de manière déterministe pour éviter qu'une position signale systématiquement la bonne réponse.

## SCN-001 — scanf() — lire une saisie au clavier

**Plusieurs bonnes réponses**

Avec `int a=0,b=99;` et l'entrée `12 x`, que peut-on affirmer après `scanf("%d %d", &a, &b)` ?

- **A ✅** La fonction retourne 1.
- **B ✅** `b` reste à 99.
- **C ❌** La fonction retourne nécessairement EOF.
- **D ✅** `a` vaut 12.

**Corrigé candidat :** A, B, D. Une première affectation réussit. Le second entier ne correspond pas à `x` : échec de correspondance et arrêt, sans écraser `b`.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://man7.org/linux/man-pages/man3/scanf.3.html

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## SCN-002 — scanf() — lire une saisie au clavier

**Plusieurs bonnes réponses**

Avec l'entrée `10 20` et `scanf("%*d %d", &n)`, quelles propositions sont vraies ?

- **A ✅** Le résultat de `scanf` est 1 si la conversion réussit.
- **B ✅** Le premier entier est consommé sans être affecté.
- **C ❌** Le résultat est 2 puisque deux nombres figurent dans l'entrée.
- **D ✅** `n` reçoit 20.

**Corrigé candidat :** A, B, D. L'astérisque supprime l'affectation du premier nombre ; elle n'est pas comptée dans le résultat.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://man7.org/linux/man-pages/man3/scanf.3.html

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## SCN-003 — scanf() — lire une saisie au clavier

**Une seule bonne réponse**

On a `int n=7;`. L'entrée commence par `bonjour`. Que renvoie `scanf("%d", &n)` en cas d'échec de correspondance sans erreur de lecture ?

- **A ❌** 7
- **B ❌** EOF
- **C ✅** 0
- **D ❌** 1

**Corrigé candidat :** C. Le premier caractère ne correspond pas à un nombre entier ; aucune conversion n'est affectée. La valeur initiale de n est conservée.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://man7.org/linux/man-pages/man3/scanf.3.html

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## SCN-004 — scanf() — lire une saisie au clavier

**Plusieurs bonnes réponses**

Avec `scanf("%3c", lettres)` et un tableau `char lettres[3]`, que faut-il savoir ?

- **A ✅** Le tableau doit avoir de la place pour les trois caractères.
- **B ❌** Elle ajoute systématiquement un `\0`.
- **C ✅** Cette conversion n'ignore pas automatiquement les blancs initiaux.
- **D ✅** La conversion peut stocker trois caractères.

**Corrigé candidat :** A, C, D. `%c` avec largeur lit les caractères bruts sans ajouter de terminateur nul. Il faut une longueur de tableau adaptée.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://man7.org/linux/man-pages/man3/scanf.3.html

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## SCN-005 — scanf() — lire une saisie au clavier

**Une seule bonne réponse**

Quelle différence principale existe entre les conversions `%d` et `%i` de `scanf` ?

- **A ✅** `%i` déduit la base à partir du préfixe d'entrée, contrairement à `%d`.
- **B ❌** `%d` lit seulement un chiffre.
- **C ❌** `%i` exige toujours une entrée hexadécimale.
- **D ❌** `%d` exige un `double *`.

**Corrigé candidat :** A. `%i` interprète par exemple `0x10` comme un entier en base 16, tandis que `%d` effectue une conversion décimale.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://man7.org/linux/man-pages/man3/scanf.3.html

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## SCN-006 — scanf() — lire une saisie au clavier

**Plusieurs bonnes réponses**

Pour l'entrée `42\n`, que produit `scanf("%d%c", &n, &c)` si `n` est un `int` et `c` un `char` ?

- **A ✅** `c` reçoit le caractère retour à la ligne.
- **B ✅** Le retour vaut 2 si les deux affectations réussissent.
- **C ❌** `%c` supprime automatiquement le retour à la ligne.
- **D ✅** `n` reçoit 42.

**Corrigé candidat :** A, B, D. `%d` s'arrête avant le caractère blanc, puis `%c` lit ce caractère, puisqu'il ne saute pas les blancs.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://man7.org/linux/man-pages/man3/scanf.3.html

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## SCN-007 — scanf() — lire une saisie au clavier

**Une seule bonne réponse**

Pour l'entrée `a=5`, quelle écriture lit l'entier après les caractères littéraux `a=` ?

- **A ✅** `scanf("a=%d", &n)`
- **B ❌** `scanf("%d=a", &n)`
- **C ❌** `scanf("%a=%d", &n)`
- **D ❌** `scanf("a%d", &n)`

**Corrigé candidat :** A. Les caractères ordinaires d'un format doivent correspondre à l'entrée dans l'ordre ; seul `%d` affecte la variable.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://man7.org/linux/man-pages/man3/scanf.3.html

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## SCN-008 — scanf() — lire une saisie au clavier

**Plusieurs bonnes réponses**

Avec `int n=0;` et l'entrée `123`, quel résultat est attendu pour `scanf("%2d", &n)` ?

- **A ✅** Le caractère `3` peut rester disponible pour une lecture suivante.
- **B ❌** La largeur impose une valeur maximale de 2.
- **C ✅** `n` peut recevoir 12.
- **D ✅** La conversion de `n` utilise au plus deux caractères.

**Corrigé candidat :** A, C, D. La largeur limite le nombre de caractères examinés dans ce champ, et non la valeur numérique.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://man7.org/linux/man-pages/man3/scanf.3.html

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## SCN-009 — scanf() — lire une saisie au clavier

**Une seule bonne réponse**

Que signifie `EOF` comme valeur de retour de `scanf` lorsque aucune conversion n'a encore réussi ?

- **A ❌** Un nombre négatif a été saisi.
- **B ❌** Toutes les conversions demandées ont réussi.
- **C ✅** Une fin d'entrée ou une erreur de lecture avant la première conversion.
- **D ❌** Un entier égal à -1 a été affecté.

**Corrigé candidat :** C. Il faut distinguer EOF (échec de lecture avant conversion) d'un retour zéro (échec de correspondance).

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://man7.org/linux/man-pages/man3/scanf.3.html

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## SCN-010 — scanf() — lire une saisie au clavier

**Plusieurs bonnes réponses**

Pour `char mot[8];`, quelles affirmations sont correctes avec `scanf("%7s", mot)` ?

- **A ✅** La largeur 7 permet de garder une case pour le terminateur.
- **B ✅** La conversion s'arrête avant un espace après le mot.
- **C ✅** La conversion `%s` ignore les espaces initiaux.
- **D ❌** La conversion lit forcément toute une phrase contenant des espaces.

**Corrigé candidat :** A, B, C. Le champ `%s` produit une chaîne terminée par `\0` et s'arrête à l'espace ; sa largeur doit préserver la capacité de destination.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://man7.org/linux/man-pages/man3/scanf.3.html

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## SCN-011 — scanf() — lire une saisie au clavier

**Une seule bonne réponse**

Un programme ne teste pas le résultat de `scanf("%d", &nombre)`. Quel est le défaut principal ?

- **A ✅** Il risque d'utiliser `nombre` alors qu'aucune valeur nouvelle n'a été affectée.
- **B ❌** La compilation échoue toujours.
- **C ❌** `scanf` bloque systématiquement le clavier.
- **D ❌** L'appel initialise forcément `nombre` à zéro.

**Corrigé candidat :** A. Ne jamais présumer qu'une conversion a réussi ; contrôler le nombre d'affectations et gérer l'échec.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://man7.org/linux/man-pages/man3/scanf.3.html

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## SCN-012 — scanf() — lire une saisie au clavier

**Plusieurs bonnes réponses**

Dans un format de saisie, quelles propriétés de `%n` sont correctes (si son utilisation est adaptée et sûre) ?

- **A ✅** Il n'exige pas de lire un caractère d'entrée supplémentaire.
- **B ✅** Il écrit le nombre de caractères consommés jusque-là dans un `int *`.
- **C ✅** Il ne compte pas comme une conversion affectée dans la valeur de retour.
- **D ❌** Il initialise une chaîne de caractères terminée par zéro.

**Corrigé candidat :** A, B, C. `%n` rapporte la quantité déjà consommée ; c'est un cas particulier qui ne compte pas comme conversion affectée dans le retour.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://man7.org/linux/man-pages/man3/scanf.3.html

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## SCN-013 — scanf() — lire une saisie au clavier

**Une seule bonne réponse**

Avec `scanf("%3[abc]", mot)`, que décrit le scanset `[abc]` ?

- **A ✅** Une suite non vide de caractères appartenant à l'ensemble a, b ou c, avec largeur maximale 3.
- **B ❌** Une chaîne quelconque de trois caractères maximum.
- **C ❌** Exactement la chaîne `abc`.
- **D ❌** Un nombre octal.

**Corrigé candidat :** A. Un scanset accepte les caractères appartenant à l'ensemble spécifié, pas seulement une séquence exacte.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://man7.org/linux/man-pages/man3/scanf.3.html

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## SCN-014 — scanf() — lire une saisie au clavier

**Plusieurs bonnes réponses**

Pourquoi mélanger `scanf("%d", &n)` puis `fgets` demande-t-il une attention particulière ?

- **A ✅** Il faut traiter explicitement le reste de la saisie selon le comportement souhaité.
- **B ✅** Le `fgets` suivant peut lire uniquement ce retour à la ligne.
- **C ✅** Un retour à la ligne peut rester dans le flux après l'entier.
- **D ❌** `scanf` vide toujours toute la ligne d'entrée.

**Corrigé candidat :** A, B, C. La conversion numérique peut laisser des caractères, dont `\n`, à lire par l'opération suivante.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://man7.org/linux/man-pages/man3/scanf.3.html

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée

---

## SCN-015 — scanf() — lire une saisie au clavier

**Une seule bonne réponse**

Pour lire une valeur dans `tab[1]` avec `int tab[3];`, quel argument convient à `%d` ?

- **A ❌** `tab[1]`
- **B ✅** `&tab[1]`
- **C ❌** `&tab`
- **D ❌** `*tab[1]`

**Corrigé candidat :** B. La conversion `%d` attend un `int *` pointant vers l'élément ciblé.

**Fiche et sources :** https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier · https://man7.org/linux/man-pages/man3/scanf.3.html

**Contrôle IA :** ☐ validée ☐ ambiguë ☐ à corriger ☐ rejetée
