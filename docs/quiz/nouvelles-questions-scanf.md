# Nouvelle banque — scanf() (lot de revue IA)

**Statut : nouvelles questions originales proposées à la revue, non publiées sur le site.** Les réponses indiquées sont candidates, pas définitivement validées. 

Fiche liée : [scanf() — lire une saisie au clavier](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier). Référence générale : [manuel scanf](https://man7.org/linux/man-pages/man3/scanf.3.html).

## SCN-001 — niveau interne 2

**Plusieurs bonnes réponses**

Avec `int a=0,b=99;` et l'entrée `12 x`, que peut-on affirmer après `scanf("%d %d", &a, &b)` ?

- **A** La fonction retourne 1. ✅
- **B** `a` vaut 12. ✅
- **C** `b` reste à 99. ✅
- **D** La fonction retourne nécessairement EOF. ❌

**Réponse proposée :** A, B, C. **Justification :** Une première affectation réussit. Le second entier ne correspond pas à `x` : échec de correspondance et arrêt, sans écraser `b`.

**Fiche :** [revoir la notion](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Source :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Revue externe :** ☐ Validé ☐ Corriger ☐ Rejeter · _arguments et preuve à ajouter_

---

## SCN-002 — niveau interne 2

**Plusieurs bonnes réponses**

Avec l'entrée `10 20` et `scanf("%*d %d", &n)`, quelles propositions sont vraies ?

- **A** Le premier entier est consommé sans être affecté. ✅
- **B** `n` reçoit 20. ✅
- **C** Le résultat de `scanf` est 1 si la conversion réussit. ✅
- **D** Le résultat est 2 puisque deux nombres figurent dans l'entrée. ❌

**Réponse proposée :** A, B, C. **Justification :** L'astérisque supprime l'affectation du premier nombre ; elle n'est pas comptée dans le résultat.

**Fiche :** [revoir la notion](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Source :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Revue externe :** ☐ Validé ☐ Corriger ☐ Rejeter · _arguments et preuve à ajouter_

---

## SCN-003 — niveau interne 1

**Une seule bonne réponse**

On a `int n=7;`. L'entrée commence par `bonjour`. Que renvoie `scanf("%d", &n)` en cas d'échec de correspondance sans erreur de lecture ?

- **A** 0 ✅
- **B** 1 ❌
- **C** EOF ❌
- **D** 7 ❌

**Réponse proposée :** A. **Justification :** Le premier caractère ne correspond pas à un nombre entier ; aucune conversion n'est affectée. La valeur initiale de n est conservée.

**Fiche :** [revoir la notion](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Source :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Revue externe :** ☐ Validé ☐ Corriger ☐ Rejeter · _arguments et preuve à ajouter_

---

## SCN-004 — niveau interne 2

**Plusieurs bonnes réponses**

Avec `scanf("%3c", lettres)` et un tableau `char lettres[3]`, que faut-il savoir ?

- **A** La conversion peut stocker trois caractères. ✅
- **B** Elle ajoute systématiquement un `\0`. ❌
- **C** Le tableau doit avoir de la place pour les trois caractères. ✅
- **D** Cette conversion n'ignore pas automatiquement les blancs initiaux. ✅

**Réponse proposée :** A, C, D. **Justification :** `%c` avec largeur lit les caractères bruts sans ajouter de terminateur nul. Il faut une longueur de tableau adaptée.

**Fiche :** [revoir la notion](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Source :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Revue externe :** ☐ Validé ☐ Corriger ☐ Rejeter · _arguments et preuve à ajouter_

---

## SCN-005 — niveau interne 1

**Une seule bonne réponse**

Quelle différence principale existe entre les conversions `%d` et `%i` de `scanf` ?

- **A** `%i` déduit la base à partir du préfixe d'entrée, contrairement à `%d`. ✅
- **B** `%d` exige un `double *`. ❌
- **C** `%i` exige toujours une entrée hexadécimale. ❌
- **D** `%d` lit seulement un chiffre. ❌

**Réponse proposée :** A. **Justification :** `%i` interprète par exemple `0x10` comme un entier en base 16, tandis que `%d` effectue une conversion décimale.

**Fiche :** [revoir la notion](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Source :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Revue externe :** ☐ Validé ☐ Corriger ☐ Rejeter · _arguments et preuve à ajouter_

---

## SCN-006 — niveau interne 2

**Plusieurs bonnes réponses**

Pour l'entrée `42\n`, que produit `scanf("%d%c", &n, &c)` si `n` est un `int` et `c` un `char` ?

- **A** `n` reçoit 42. ✅
- **B** `c` reçoit le caractère retour à la ligne. ✅
- **C** Le retour vaut 2 si les deux affectations réussissent. ✅
- **D** `%c` supprime automatiquement le retour à la ligne. ❌

**Réponse proposée :** A, B, C. **Justification :** `%d` s'arrête avant le caractère blanc, puis `%c` lit ce caractère, puisqu'il ne saute pas les blancs.

**Fiche :** [revoir la notion](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Source :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Revue externe :** ☐ Validé ☐ Corriger ☐ Rejeter · _arguments et preuve à ajouter_

---

## SCN-007 — niveau interne 2

**Une seule bonne réponse**

Pour l'entrée `a=5`, quelle écriture lit l'entier après les caractères littéraux `a=` ?

- **A** `scanf("a=%d", &n)` ✅
- **B** `scanf("%a=%d", &n)` ❌
- **C** `scanf("a%d", &n)` ❌
- **D** `scanf("%d=a", &n)` ❌

**Réponse proposée :** A. **Justification :** Les caractères ordinaires d'un format doivent correspondre à l'entrée dans l'ordre ; seul `%d` affecte la variable.

**Fiche :** [revoir la notion](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Source :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Revue externe :** ☐ Validé ☐ Corriger ☐ Rejeter · _arguments et preuve à ajouter_

---

## SCN-008 — niveau interne 2

**Plusieurs bonnes réponses**

Avec `int n=0;` et l'entrée `123`, quel résultat est attendu pour `scanf("%2d", &n)` ?

- **A** La conversion de `n` utilise au plus deux caractères. ✅
- **B** `n` peut recevoir 12. ✅
- **C** Le caractère `3` peut rester disponible pour une lecture suivante. ✅
- **D** La largeur impose une valeur maximale de 2. ❌

**Réponse proposée :** A, B, C. **Justification :** La largeur limite le nombre de caractères examinés dans ce champ, et non la valeur numérique.

**Fiche :** [revoir la notion](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Source :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Revue externe :** ☐ Validé ☐ Corriger ☐ Rejeter · _arguments et preuve à ajouter_

---

## SCN-009 — niveau interne 1

**Une seule bonne réponse**

Que signifie `EOF` comme valeur de retour de `scanf` lorsque aucune conversion n'a encore réussi ?

- **A** Une fin d'entrée ou une erreur de lecture avant la première conversion. ✅
- **B** Un nombre négatif a été saisi. ❌
- **C** Un entier égal à -1 a été affecté. ❌
- **D** Toutes les conversions demandées ont réussi. ❌

**Réponse proposée :** A. **Justification :** Il faut distinguer EOF (échec de lecture avant conversion) d'un retour zéro (échec de correspondance).

**Fiche :** [revoir la notion](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Source :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Revue externe :** ☐ Validé ☐ Corriger ☐ Rejeter · _arguments et preuve à ajouter_

---

## SCN-010 — niveau interne 2

**Plusieurs bonnes réponses**

Pour `char mot[8];`, quelles affirmations sont correctes avec `scanf("%7s", mot)` ?

- **A** La largeur 7 permet de garder une case pour le terminateur. ✅
- **B** La conversion `%s` ignore les espaces initiaux. ✅
- **C** La conversion s'arrête avant un espace après le mot. ✅
- **D** La conversion lit forcément toute une phrase contenant des espaces. ❌

**Réponse proposée :** A, B, C. **Justification :** Le champ `%s` produit une chaîne terminée par `\0` et s'arrête à l'espace ; sa largeur doit préserver la capacité de destination.

**Fiche :** [revoir la notion](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Source :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Revue externe :** ☐ Validé ☐ Corriger ☐ Rejeter · _arguments et preuve à ajouter_

---

## SCN-011 — niveau interne 3

**Une seule bonne réponse**

Un programme ne teste pas le résultat de `scanf("%d", &nombre)`. Quel est le défaut principal ?

- **A** Il risque d'utiliser `nombre` alors qu'aucune valeur nouvelle n'a été affectée. ✅
- **B** La compilation échoue toujours. ❌
- **C** `scanf` bloque systématiquement le clavier. ❌
- **D** L'appel initialise forcément `nombre` à zéro. ❌

**Réponse proposée :** A. **Justification :** Ne jamais présumer qu'une conversion a réussi ; contrôler le nombre d'affectations et gérer l'échec.

**Fiche :** [revoir la notion](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Source :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Revue externe :** ☐ Validé ☐ Corriger ☐ Rejeter · _arguments et preuve à ajouter_

---

## SCN-012 — niveau interne 3

**Plusieurs bonnes réponses**

Dans un format de saisie, quelles propriétés de `%n` sont correctes (si son utilisation est adaptée et sûre) ?

- **A** Il écrit le nombre de caractères consommés jusque-là dans un `int *`. ✅
- **B** Il ne compte pas comme une conversion affectée dans la valeur de retour. ✅
- **C** Il n'exige pas de lire un caractère d'entrée supplémentaire. ✅
- **D** Il initialise une chaîne de caractères terminée par zéro. ❌

**Réponse proposée :** A, B, C. **Justification :** `%n` rapporte la quantité déjà consommée ; c'est un cas particulier qui ne compte pas comme conversion affectée dans le retour.

**Fiche :** [revoir la notion](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Source :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Revue externe :** ☐ Validé ☐ Corriger ☐ Rejeter · _arguments et preuve à ajouter_

---

## SCN-013 — niveau interne 2

**Une seule bonne réponse**

Avec `scanf("%3[abc]", mot)`, que décrit le scanset `[abc]` ?

- **A** Une suite non vide de caractères appartenant à l'ensemble a, b ou c, avec largeur maximale 3. ✅
- **B** Exactement la chaîne `abc`. ❌
- **C** Une chaîne quelconque de trois caractères maximum. ❌
- **D** Un nombre octal. ❌

**Réponse proposée :** A. **Justification :** Un scanset accepte les caractères appartenant à l'ensemble spécifié, pas seulement une séquence exacte.

**Fiche :** [revoir la notion](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Source :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Revue externe :** ☐ Validé ☐ Corriger ☐ Rejeter · _arguments et preuve à ajouter_

---

## SCN-014 — niveau interne 1

**Plusieurs bonnes réponses**

Pourquoi mélanger `scanf("%d", &n)` puis `fgets` demande-t-il une attention particulière ?

- **A** Un retour à la ligne peut rester dans le flux après l'entier. ✅
- **B** Le `fgets` suivant peut lire uniquement ce retour à la ligne. ✅
- **C** Il faut traiter explicitement le reste de la saisie selon le comportement souhaité. ✅
- **D** `scanf` vide toujours toute la ligne d'entrée. ❌

**Réponse proposée :** A, B, C. **Justification :** La conversion numérique peut laisser des caractères, dont `\n`, à lire par l'opération suivante.

**Fiche :** [revoir la notion](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Source :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Revue externe :** ☐ Validé ☐ Corriger ☐ Rejeter · _arguments et preuve à ajouter_

---

## SCN-015 — niveau interne 2

**Une seule bonne réponse**

Pour lire une valeur dans `tab[1]` avec `int tab[3];`, quel argument convient à `%d` ?

- **A** `&tab[1]` ✅
- **B** `tab[1]` ❌
- **C** `&tab` ❌
- **D** `*tab[1]` ❌

**Réponse proposée :** A. **Justification :** La conversion `%d` attend un `int *` pointant vers l'élément ciblé.

**Fiche :** [revoir la notion](https://revision-hbtn.soleiljaune.be/#cours/programmation-c/26-scanf-lire-une-saisie-au-clavier) · **Source :** https://man7.org/linux/man-pages/man3/scanf.3.html

**Revue externe :** ☐ Validé ☐ Corriger ☐ Rejeter · _arguments et preuve à ajouter_

---

