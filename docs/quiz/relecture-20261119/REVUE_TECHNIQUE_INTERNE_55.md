# Relecture technique des 55 questions — contrôles internes, 19 novembre 2026

**Nature du document :** vérification technique interne à ChatGPT, ajustée après le rapport PDF externe du 19 novembre 2026. **Ce document NE REMPLACE PAS une deuxième relecture indépendante exhaustive** ; le statut des questions reste `a_verifier`.

Les lettres correctes ci-dessous ont été reconstruites question par question, puis comparées aux clés du dépôt. Toutes les propositions sont analysées individuellement. La relecture véritablement indépendante doit partir de `QUESTIONS_SANS_CORRIGES.md`, sans ouvrir ce document.

Références transversales : [main et argv](https://en.cppreference.com/w/c/language/main_function), [fonctions variadiques](https://cppreference.com/c/language/variadic), [va_start](https://en.cppreference.com/w/c/variadic/va_start), [macros GNU](https://sourceware.org/glibc/manual/2.43/html_node/Argument-Macros.html), [stdarg POSIX](https://man7.org/linux/man-pages/man0/stdarg.h.0p.html).

## V1-N09_072-01 — main(int argc, char *argv[]) — recevoir des arguments

**Clé examinée : A** · Mode : réponse unique.

- **A — correcte :** Signature conforme de main en environnement hébergé.
- **B — incorrecte :** Un unique char* ne représente pas le tableau des arguments.
- **C — incorrecte :** Le retour void n’est pas la forme standard attendue.
- **D — incorrecte :** argc doit être un int, pas un pointeur vers int.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_072-02 — main(int argc, char *argv[]) — recevoir des arguments

**Clé examinée : C** · Mode : réponse unique.

- **A — incorrecte :** Omet des arguments fournis.
- **B — incorrecte :** Ne compte pas correctement la commande et ses paramètres.
- **C — correcte :** argv[0], bonjour et deux mots forment trois éléments.
- **D — incorrecte :** Les guillemets regroupent deux mots en un argument.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_072-03 — main(int argc, char *argv[]) — recevoir des arguments

**Clé examinée : B, D** · Mode : réponses multiples.

- **A — incorrecte :** Les arguments de lancement ne proviennent pas de scanf.
- **B — correcte :** Ils sont transmis au démarrage du programme.
- **C — incorrecte :** argv expose des chaînes, non des int imposés.
- **D — correcte :** Les guillemets du shell groupent les mots.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_072-04 — main(int argc, char *argv[]) — recevoir des arguments

**Clé examinée : C** · Mode : réponse unique.

- **A — incorrecte :** argc peut valoir 1 sans argument utilisateur.
- **B — incorrecte :** argc égal à 1 désigne habituellement le seul argv[0].
- **C — correcte :** argc > 1 garantit la présence d’argv[1].
- **D — incorrecte :** Ne garantit pas d’argument utilisateur.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_072-05 — main(int argc, char *argv[]) — recevoir des arguments

**Clé examinée : A** · Mode : réponse unique.

- **A — correcte :** Chaque élément valide de argv possède le type char*.
- **B — incorrecte :** Il ne s’agit pas d’un int.
- **C — incorrecte :** char** désigne argv après ajustement, pas argv[0].
- **D — incorrecte :** Un caractère n’est pas un pointeur vers caractère.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_073-01 — argc — compter les arguments de la ligne de commande

**Clé examinée : D** · Mode : réponse unique.

- **A — incorrecte :** Omet argv[0].
- **B — incorrecte :** Ne compte que deux éléments.
- **C — incorrecte :** Un lancement normal ne donne pas zéro avec trois arguments utilisateur.
- **D — correcte :** argv[0] et les trois arguments font quatre éléments.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_073-02 — argc — compter les arguments de la ligne de commande

**Clé examinée : B** · Mode : réponse unique.

- **A — incorrecte :** argc ne mesure pas la taille mémoire des arguments.
- **B — correcte :** argv contient argc éléments avant le pointeur nul final.
- **C — incorrecte :** argc ne fournit pas la longueur des chaînes.
- **D — incorrecte :** argc ne mesure pas la longueur d’argv[0].

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_073-03 — argc — compter les arguments de la ligne de commande

**Clé examinée : A** · Mode : réponse unique.

- **A — correcte :** Avec argc=3, argv[1] et argv[2] sont les deux arguments utilisateur.
- **B — incorrecte :** Inclut à tort l’élément d’invocation.
- **C — incorrecte :** Compte un argument en trop.
- **D — incorrecte :** Ignore les deux arguments utilisateur.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_073-04 — argc — compter les arguments de la ligne de commande

**Clé examinée : B, D** · Mode : réponses multiples.

- **A — incorrecte :** argc est un entier et non un pointeur.
- **B — correcte :** La norme C impose un entier argc non négatif.
- **C — incorrecte :** argc ne mesure pas les caractères d’argv[1].
- **D — correcte :** Dans l’invocation normale décrite, argv[0] entre dans le décompte.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_073-05 — argc — compter les arguments de la ligne de commande

**Clé examinée : C** · Mode : réponse unique.

- **A — incorrecte :** argc-1 compte les arguments utilisateur usuels.
- **B — incorrecte :** sizeof argv dans main mesure le pointeur ajusté, pas la chaîne.
- **C — correcte :** strlen retourne le nombre de caractères avant le nul final.
- **D — incorrecte :** argv[argc] est le pointeur nul sentinelle.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_074-01 — argv — tableau de chaînes et indices

**Clé examinée : B** · Mode : réponse unique.

- **A — incorrecte :** rouge se trouve normalement dans argv[1].
- **B — correcte :** argv[0] contient le nom/chemin d’invocation, si fourni.
- **C — incorrecte :** La sentinelle n’est pas argv[0] dans cette invocation.
- **D — incorrecte :** argc, et non argv[0], compte les arguments.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_074-02 — argv — tableau de chaînes et indices

**Clé examinée : D** · Mode : réponse unique.

- **A — incorrecte :** Un argument utilisateur est présent.
- **B — incorrecte :** Les guillemets empêchent de scinder les mots.
- **C — incorrecte :** Trois arguments utilisateur ne sont pas fournis.
- **D — correcte :** Le shell transmet deux mots comme une chaîne unique.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_074-03 — argv — tableau de chaînes et indices

**Clé examinée : A** · Mode : réponse unique.

- **A — correcte :** argv[2] désigne le deuxième argument utilisateur.
- **B — incorrecte :** argv[1] désigne le premier.
- **C — incorrecte :** argv[argc], ici argv[3], est NULL.
- **D — incorrecte :** argv[0] désigne normalement l’invocation.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_074-04 — argv — tableau de chaînes et indices

**Clé examinée : A, C** · Mode : réponses multiples.

- **A — correcte :** Pour un indice valide inférieur à argc, chaque élément est une chaîne C terminée par nul.
- **B — incorrecte :** argv[i] n’est pas un int, mais un char*.
- **C — correcte :** argv[argc] est un pointeur nul et ne doit pas être traité comme une chaîne.
- **D — incorrecte :** La longueur des différentes chaînes peut varier.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_074-05 — argv — tableau de chaînes et indices

**Clé examinée : D** · Mode : réponse unique.

- **A — incorrecte :** c appartient au second argument cd.
- **B — incorrecte :** Le terminateur de ab est à l’indice 2, pas à 1.
- **C — incorrecte :** a est à l’indice 0.
- **D — correcte :** b est le caractère à l’indice 1 de ab.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_075-01 — argv[i][j] — caractère d'un argument et double indirection

**Clé examinée : B** · Mode : réponse unique.

- **A — incorrecte :** char* désigne un élément de argv, pas le paramètre tableau ajusté.
- **B — correcte :** Un paramètre char* argv[] est ajusté en char** argv.
- **C — incorrecte :** char ne représente pas un tableau de pointeurs.
- **D — incorrecte :** char (*)[2] est un pointeur vers tableau de deux char.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_075-02 — argv[i][j] — caractère d'un argument et double indirection

**Clé examinée : A** · Mode : réponse unique.

- **A — correcte :** c est le premier caractère de code.
- **B — incorrecte :** o est le second, indice 1.
- **C — incorrecte :** Le nul final se trouve après les quatre caractères.
- **D — incorrecte :** d est le troisième caractère.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_075-03 — argv[i][j] — caractère d'un argument et double indirection

**Clé examinée : D** · Mode : réponse unique.

- **A — incorrecte :** L’expression déréférence finalement un caractère, pas argv[0].
- **B — incorrecte :** c est à l’indice 0, pas 1.
- **C — incorrecte :** Le nul final suit code, à l’indice 4.
- **D — correcte :** Le calcul mène au caractère d’indice 1, o.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_075-04 — argv[i][j] — caractère d'un argument et double indirection

**Clé examinée : C** · Mode : réponse unique.

- **A — incorrecte :** argc>0 ne garantit pas l’existence d’argv[1].
- **B — incorrecte :** Il manque une garde sur argc avant d’accéder à argv[1].
- **C — correcte :** L’évaluation courte assure argc>1, puis exige deux caractères non nuls ; lire le terminateur à l’indice 1 d’une chaîne d’un caractère est légal.
- **D — incorrecte :** argc==1 peut rendre l’expression vraie sans deuxième caractère et sans valider la présence de l’argument.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_075-05 — argv[i][j] — caractère d'un argument et double indirection

**Clé examinée : A, C** · Mode : réponses multiples.

- **A — correcte :** L’indice i choisit une chaîne et j un caractère.
- **B — incorrecte :** argc est un entier indépendant, pas un tableau d’octets.
- **C — correcte :** Les deux indices doivent rester dans les limites de leurs objets respectifs.
- **D — incorrecte :** Les longueurs de chaînes ne sont pas uniformes.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_076-01 — argv[argc] == NULL — borne de fin et parcours sûr

**Clé examinée : C** · Mode : réponse unique.

- **A — incorrecte :** Le caractère '0' n’est pas un pointeur nul.
- **B — incorrecte :** Une chaîne vide est un objet, pas la valeur NULL du pointeur.
- **C — correcte :** La norme garantit argv[argc] == NULL.
- **D — incorrecte :** La sentinelle ne pointe pas vers argc.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_076-02 — argv[argc] == NULL — borne de fin et parcours sûr

**Clé examinée : B** · Mode : réponse unique.

- **A — incorrecte :** La boucle n’effectue pas trois itérations lorsque argc vaut 3.
- **B — correcte :** i prend les valeurs 1 et 2 : deux itérations.
- **C — incorrecte :** Une seule itération oublierait un argument.
- **D — incorrecte :** L’indice 3 termine la boucle, sans quatrième itération.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_076-03 — argv[argc] == NULL — borne de fin et parcours sûr

**Clé examinée : D** · Mode : réponse unique.

- **A — incorrecte :** argv[4] est la sentinelle NULL lorsque argc=4.
- **B — incorrecte :** argv[0] est le premier élément.
- **C — incorrecte :** argv[5] sort du tableau garanti.
- **D — correcte :** Le dernier indice d’une chaîne est argc-1, ici 3.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_076-04 — argv[argc] == NULL — borne de fin et parcours sûr

**Clé examinée : A** · Mode : réponse unique.

- **A — correcte :** puts attend un pointeur vers chaîne valide et argv[argc] est NULL.
- **B — incorrecte :** Comparer argv[argc] à NULL est défini.
- **C — incorrecte :** Comparer argv[argc] à un pointeur non nul est défini.
- **D — incorrecte :** Comparer l’entier argc à zéro est défini.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## V1-N09_076-05 — argv[argc] == NULL — borne de fin et parcours sûr

**Clé examinée : B, D** · Mode : réponses multiples.

- **A — incorrecte :** La chaîne est terminée par un caractère nul, non un pointeur nul.
- **B — correcte :** Chaque chaîne argv[i] valide possède le caractère '\0' final.
- **C — incorrecte :** La sentinelle n’est pas la chaîne littérale NULL.
- **D — correcte :** argv[argc] est un pointeur nul qui suit la liste d’éléments.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-031-01 — Fonction variadique — déclarer des arguments avec ...

**Clé examinée : B** · Mode : réponse unique.

- **A — incorrecte :** La forme sans paramètre fixe n’est pas admise en ISO C89.
- **B — correcte :** Le paramètre fixe n précède les points de suspension.
- **C — incorrecte :** L’ellipse ne peut pas se placer au milieu d’un déclarateur.
- **D — incorrecte :** Cette syntaxe ne déclare pas valablement un paramètre facultatif C89.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-031-02 — Fonction variadique — déclarer des arguments avec ...

**Clé examinée : C** · Mode : réponse unique.

- **A — incorrecte :** Un seul argument facultatif omettrait une valeur.
- **B — incorrecte :** Trois compte aussi n alors que la question demande ceux après n.
- **C — correcte :** Les valeurs 7 et 9 sont les deux arguments facultatifs.
- **D — incorrecte :** Le passage de deux arguments après n exclut zéro.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-031-03 — Fonction variadique — déclarer des arguments avec ...

**Clé examinée : A, C, D** · Mode : réponses multiples.

- **A — correcte :** Le nombre de paramètres après l’ellipse peut varier.
- **B — incorrecte :** argc ne s’applique pas automatiquement aux fonctions variadiques.
- **C — correcte :** L’appelant et la fonction doivent convenir des types et de l’arrêt.
- **D — correcte :** En C89, l’ellipse exige au moins un paramètre fixe nommé.
- **E — incorrecte :** va_arg ne découvre pas dynamiquement les types.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-031-04 — Fonction variadique — déclarer des arguments avec ...

**Clé examinée : A** · Mode : réponse unique.

- **A — correcte :** Lire un troisième int alors que seuls deux arguments variables ont été fournis entraîne un comportement indéfini.
- **B — incorrecte :** Le langage n’ajoute aucun zéro automatiquement.
- **C — incorrecte :** Aucune erreur de compilation n’est imposée pour une incohérence non vérifiable à l’appel.
- **D — incorrecte :** Une lecture de fin de liste n’est pas une opération à comportement défini : elle provoque un comportement indéfini.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-031-05 — Fonction variadique — déclarer des arguments avec ...

**Clé examinée : B** · Mode : réponse unique.

- **A — incorrecte :** n n’est pas la somme calculée.
- **B — correcte :** Un compteur explicite permet de limiter les lectures.
- **C — incorrecte :** n ne convertit pas les arguments facultatifs en double.
- **D — incorrecte :** Aucun tableau n’est automatiquement réservé.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-032-01 — va_list et va_start — initialiser le parcours

**Clé examinée : C** · Mode : réponse unique.

- **A — incorrecte :** vararg_t n’est pas le nom standard du type.
- **B — incorrecte :** va_arg est une macro de lecture, pas un type.
- **C — correcte :** va_list est le type qui conserve l’état du parcours.
- **D — incorrecte :** va_start est une macro d’initialisation, pas un type.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-032-02 — va_list et va_start — initialiser le parcours

**Clé examinée : A** · Mode : réponse unique.

- **A — correcte :** va_start prend l’objet va_list puis le dernier paramètre fixe nommé.
- **B — incorrecte :** Les paramètres sont inversés.
- **C — incorrecte :** va_arg lit un argument ; il n’initialise pas la liste.
- **D — incorrecte :** Le second argument doit désigner nombre dans cet exemple.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-032-03 — va_list et va_start — initialiser le parcours

**Clé examinée : D** · Mode : réponse unique.

- **A — incorrecte :** Lire avant initialisation est incorrect.
- **B — incorrecte :** Terminer avant initialisation et lecture est incorrect.
- **C — incorrecte :** Lire après va_end sans réinitialisation est incorrect.
- **D — correcte :** Initialiser, lire puis terminer respecte l’ordre.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-032-04 — va_list et va_start — initialiser le parcours

**Clé examinée : A, C, D** · Mode : réponses multiples.

- **A — correcte :** La représentation de va_list dépend de l’implémentation.
- **B — incorrecte :** va_list n’est pas universellement char*.
- **C — correcte :** va_start initialise un objet va_list préalablement déclaré.
- **D — correcte :** Une liste initialisée par va_start doit être terminée par va_end.
- **E — incorrecte :** La copie d’un va_list par simple affectation ne fonctionne pas de façon portable.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-032-05 — va_list et va_start — initialiser le parcours

**Clé examinée : B** · Mode : réponse unique.

- **A — incorrecte :** ap est l’objet curseur et non le dernier paramètre fixe.
- **B — correcte :** format est le dernier paramètre fixe de f.
- **C — incorrecte :** argc n’est pas un paramètre de f.
- **D — incorrecte :** argv n’est pas un paramètre de f.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-033-01 — va_arg — lire les valeurs et comprendre les promotions

**Clé examinée : B** · Mode : réponse unique.

- **A — incorrecte :** char n’est pas le type promu lu avec va_arg.
- **B — correcte :** signed char se promeut en int sur les environnements ISO C concernés.
- **C — incorrecte :** char* est un pointeur, pas la promotion de signed char.
- **D — incorrecte :** float n’est pas la promotion entière de signed char.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-033-02 — va_arg — lire les valeurs et comprendre les promotions

**Clé examinée : C** · Mode : réponse unique.

- **A — incorrecte :** Un float transmis n’est pas promu en int.
- **B — incorrecte :** Le type effectif transmis n’est plus float.
- **C — correcte :** La promotion par défaut convertit float en double.
- **D — incorrecte :** long double n’est pas la promotion par défaut de float.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-033-03 — va_arg — lire les valeurs et comprendre les promotions

**Clé examinée : A** · Mode : réponse unique.

- **A — correcte :** 4+5+6 donne 15.
- **B — incorrecte :** 14 est inférieur à la somme réelle.
- **C — incorrecte :** 11 omet l’un des termes.
- **D — incorrecte :** 16 est supérieur à la somme réelle.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-033-04 — va_arg — lire les valeurs et comprendre les promotions

**Clé examinée : A, C, D** · Mode : réponses multiples.

- **A — correcte :** Chaque va_arg avance à l’argument suivant.
- **B — incorrecte :** Aucune vérification automatique de fin de liste n’est fournie.
- **C — correcte :** Le type demandé doit tenir compte des promotions par défaut ; quelques exceptions normatives existent.
- **D — correcte :** Lire au-delà des arguments présents est indéfini.
- **E — incorrecte :** va_arg nécessite une initialisation préalable par va_start ou une copie valide.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-033-05 — va_arg — lire les valeurs et comprendre les promotions

**Clé examinée : A** · Mode : réponse unique.

- **A — correcte :** Les arguments sont transmis dans l’ordre : int 42, puis float promu en double.
- **B — incorrecte :** Cette séquence inverse l’ordre et lit le premier int comme un double.
- **C — incorrecte :** float a été promu en double : va_arg(ap, float) n’est pas approprié.
- **D — incorrecte :** long double n’est pas le type promu d’un float transmis dans ...

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-034-01 — va_end — terminer correctement une liste variadique

**Clé examinée : C** · Mode : réponse unique.

- **A — incorrecte :** va_next n’est pas une macro standard.
- **B — incorrecte :** va_copy duplique une liste, sans clôturer son usage.
- **C — correcte :** va_end termine une liste initialisée.
- **D — incorrecte :** free ne remplace pas va_end.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-034-02 — va_end — terminer correctement une liste variadique

**Clé examinée : A** · Mode : réponse unique.

- **A — correcte :** Une liste initialisée doit être terminée avant le retour.
- **B — incorrecte :** L’objet va_list n’est pas une allocation à libérer avec free.
- **C — incorrecte :** Un second va_start n’est pas une terminaison.
- **D — incorrecte :** La clôture par va_end est requise.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-034-03 — va_end — terminer correctement une liste variadique

**Clé examinée : D** · Mode : réponse unique.

- **A — incorrecte :** Un parcours terminé ne peut pas être relu tel quel.
- **B — incorrecte :** La valeur zéro ne réactive pas un va_list terminé.
- **C — incorrecte :** Le signe de n ne change pas la validité du curseur.
- **D — correcte :** va_start doit réinitialiser avant une nouvelle lecture.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-034-04 — va_end — terminer correctement une liste variadique

**Clé examinée : A, D** · Mode : réponses multiples.

- **A — correcte :** va_end clôt le parcours en cours.
- **B — incorrecte :** va_end ne revient pas au premier argument.
- **C — incorrecte :** va_end ne compte pas les arguments lus.
- **D — correcte :** va_end ne libère pas les objets vers lesquels pointent les arguments.
- **E — incorrecte :** va_end ne crée aucune sentinelle.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-034-05 — va_end — terminer correctement une liste variadique

**Clé examinée : C** · Mode : réponse unique.

- **A — incorrecte :** va_end ne doit pas être utilisé sur une liste jamais initialisée.
- **B — incorrecte :** Deux appels va_end ne réparent pas une liste non initialisée.
- **C — correcte :** Aucun va_start n’a eu lieu : aucun va_end correspondant n’est nécessaire.
- **D — incorrecte :** va_list n’exige pas un malloc préalable.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-035-01 — Fonction variadique — compteur ou sentinelle de fin

**Clé examinée : C** · Mode : réponse unique.

- **A — incorrecte :** Deux oublierait une donnée.
- **B — incorrecte :** Quatre inclurait la sentinelle.
- **C — correcte :** Les trois valeurs 2, 3, 5 sont les données.
- **D — incorrecte :** Cinq excède le nombre de données transmises.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-035-02 — Fonction variadique — compteur ou sentinelle de fin

**Clé examinée : A** · Mode : réponse unique.

- **A — correcte :** Sans sentinelle, la boucle peut lire au-delà de la liste réelle : comportement indéfini.
- **B — incorrecte :** La sentinelle n’est jamais ajoutée par le langage.
- **C — incorrecte :** La macro n’a pas de test de fin intégré.
- **D — incorrecte :** Un NULL final n’est pas garanti.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-035-03 — Fonction variadique — compteur ou sentinelle de fin

**Clé examinée : B** · Mode : réponse unique.

- **A — incorrecte :** n ne porte pas le résultat final.
- **B — correcte :** Dans le contrat décrit, n compte les valeurs supplémentaires.
- **C — incorrecte :** n ne décrit pas le type dynamique des arguments.
- **D — incorrecte :** n ne contient pas sizeof(va_list).

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-035-04 — Fonction variadique — compteur ou sentinelle de fin

**Clé examinée : A, C, D** · Mode : réponses multiples.

- **A — correcte :** Le contrat impose une sentinelle à chaque appel.
- **B — incorrecte :** La sentinelle réservée ne peut pas indistinctement être une donnée ordinaire.
- **C — correcte :** Le marqueur doit avoir un type compatible avec la lecture via va_arg.
- **D — correcte :** Une valeur réservée permet de distinguer fin et données.
- **E — incorrecte :** Les points de suspension ne génèrent aucun marqueur.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-035-05 — Fonction variadique — compteur ou sentinelle de fin

**Clé examinée : C** · Mode : réponse unique.

- **A — incorrecte :** La séquence ne contient pas -1.
- **B — incorrecte :** Zéro n’est pas la sentinelle -1 spécifiée.
- **C — correcte :** La sentinelle finale est l’int -1 attendu.
- **D — incorrecte :** -1.0 est un double, pas l’int sentinelle exigé.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-036-01 — vprintf et va_copy — transmettre ou dupliquer une liste

**Clé examinée : C** · Mode : réponse unique.

- **A — incorrecte :** printf accepte des arguments variadiques et non directement va_list.
- **B — incorrecte :** scanf ne consomme pas la va_list d’un format d’affichage.
- **C — correcte :** vprintf accepte un format et un objet va_list.
- **D — incorrecte :** puts n’accepte qu’une chaîne.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-036-02 — vprintf et va_copy — transmettre ou dupliquer une liste

**Clé examinée : A** · Mode : réponse unique.

- **A — correcte :** Le code appelant doit appeler va_end après le relais vprintf.
- **B — incorrecte :** free(ap) n’est pas la fermeture prévue.
- **C — incorrecte :** Fermer stdout n’est pas nécessaire ni pertinent.
- **D — incorrecte :** Un second va_start ne remplace pas va_end.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-036-03 — vprintf et va_copy — transmettre ou dupliquer une liste

**Clé examinée : B** · Mode : réponse unique.

- **A — incorrecte :** va_copy n’a pas été standardisée en C89.
- **B — correcte :** va_copy entre dans l’ISO C avec C99.
- **C — incorrecte :** C90 ne normalise pas va_copy.
- **D — incorrecte :** La macro est normalisée depuis C99.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-036-04 — vprintf et va_copy — transmettre ou dupliquer une liste

**Clé examinée : A** · Mode : réponse unique.

- **A — correcte :** En C99, va_copy initialise dest depuis src ; après utilisation, dest et src reçoivent chacun va_end.
- **B — incorrecte :** L’affectation d’un va_list n’est pas une copie portable et dest n’est pas correctement terminé.
- **C — incorrecte :** Après va_end(src), src ne peut plus servir de source à va_copy sans réinitialisation.
- **D — incorrecte :** Les arguments de va_copy sont inversés : dest, non initialisé, ne peut pas servir de source valide.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## VAR-08-036-05 — vprintf et va_copy — transmettre ou dupliquer une liste

**Clé examinée : A, C, D** · Mode : réponses multiples.

- **A — correcte :** vprintf reçoit un va_list fourni par l’appelant.
- **B — incorrecte :** va_copy est apparu avec C99, pas C89.
- **C — correcte :** __va_copy n’est qu’une extension GNU et ne garantit pas ISO C89.
- **D — correcte :** Les types et le nombre d’arguments doivent respecter le format.
- **E — incorrecte :** free(ap) ne remplace pas va_end.

**Conclusion provisoire :** cohérent après contrôle interne ; une seconde expertise autonome reste nécessaire.

## Limites et suite

- 55/55 questions et 226/226 options évaluées en pré-revue interne.
- La nuance sur les promotions dans `VAR-08-033-04` et la distinction entre terminateur et accès hors limites dans `V1-N09_075-04` ont été clarifiées sur la branche.
- Toute divergence de la relecture indépendante doit être corrigée avant de passer le statut pédagogique des questions à validé.
- Les tests unitaires et navigateur restent obligatoires après la dernière modification.

## Contrôle du rapport PDF reçu le 19 novembre

- Rapport externe favorable sur le dossier, mais **seulement 12 questions sur 55** ont été vérifiées techniquement avec références ; il réclame lui-même une seconde contre-expertise indépendante complète.
- Rectification du rapport : pour `VAR-08-031-03`, l’affirmation D (« Un paramètre fixe est requis dans cette forme C89 ») est vraie ; la clé correcte est **A, C, D** et non A, C. Le JSON n’a pas été modifié sur ce point.
- Rectification du rapport : les 55 questions comptent **11 questions à réponses multiples** et non les huit mentionnées dans une section du PDF.
- Les six corrections de forme ou de diversité proposées ont été intégrées au quiz. La version aveugle a été régénérée depuis les JSON après ces changements, et les libellés de mode ont été harmonisés.
- Ces changements rendent l’audit précédent partiellement obsolète. **Les réponses nouvelles de `VAR-08-033-05` et `VAR-08-036-04` exigent une revue externe supplémentaire** avant toute validation définitive.
