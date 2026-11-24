# Audit des cours, du moteur et des questions du 24 novembre 2026

Le HTML servi par le site lors du contrôle avait la même empreinte SHA-256 que le fichier de la branche principale à `cfb3232`. Le dépôt comprenait 282 fiches dans 18 chapitres, 92 fiches illustrées et 55 questions jouables. Le contrôle de structure porte sur les 282 fiches. Les tests du dépôt compilent et exécutent 83 programmes de la suite pédagogique principale, complétés par des suites thématiques. Une CI verte ne suffit pas à certifier chaque phrase ni chaque exemple affiché.

## Ce qui posait problème

| Emplacement | Effet pour l’élève | Suite donnée |
|---|---|---|
| C, fiche 8:27, `strtol` | Une ligne composée de 29 zéros puis de `42abc` était acceptée. Le tampon s’arrêtait juste avant `abc`. | La PR #43 distingue fin de ligne, fin d’entrée et saisie tronquée. Les tests couvrent les deux fins valides et le suffixe invalide. |
| Structures, fiches 16:4 et 16:9 | La suite utilisait des options plus permissives pour ces exemples. Les options strictes du projet faisaient échouer la compilation. | Exemples et tests alignés dans la PR #43. Les valeurs de la copie et de l’original sont désormais visibles toutes les deux. |
| Taille des types, division entière, mesures du temps | `%zu` était présenté sans précision de dialecte, deux textes généralisaient l’arrondi des quotients négatifs et deux exemples appelaient des fonctions au niveau du fichier. | La PR #43 propose une version GNU89, précise la différence C90/C99 et place les appels à `clock` et `time` dans des programmes autonomes. |
| Bash, Git, Docker, récursivité | La portée de `local`, le contexte de `COPY`, les marqueurs de conflit et les variables locales étaient présentés sans leurs conditions. | Précisions sur les fonctions Bash appelées, `COPY --from`, les conflits modification/suppression et la durée de vie de `static`, entre autres corrections de la PR #43. |
| Quiz existant | « Lire argv[1] » pouvait vouloir dire lire la case sentinelle ou utiliser une chaîne. « Longueur en caractères » induisait en erreur pour UTF-8. Des questions sur `va_start` n’indiquaient pas le dialecte C. | Reformulations et explications corrigées. Les clés de notation historiques sont conservées. |
| Moteur de quiz | Une case cochée avant la pause disparaissait à la reprise. Le menu et plusieurs tests dépendaient de deux thèmes et de 55 questions. | Les sélections provisoires survivent à la pause et au rechargement. La note est attribuée après validation. Le menu compte les questions réellement disponibles. |
| Compte, `account/client.mjs`, `connectSession` | Avec une session identique sur deux copies, une réponse locale en attente de synchronisation disparaît si la connexion réinstalle la copie distante plus ancienne. Le même scénario efface un résultat terminé localement. | Reproduit avec le client réel, un stockage et une API simulés. Ce défaut reste ouvert. La résolution doit conserver la version locale associée au compte et proposer une résolution en cas de divergence. |

Avec la banque proposée, un second essai local atteint 264 123 octets de progression après 11 sessions complètes de 208 questions passées avec « Je ne sais pas ». L’API accepte au plus 256 Kio (262 144 octets). Le seuil dépend des réponses et de la taille des sessions. Le compte peut donc cesser de se synchroniser avant les 60 sessions prévues. Ce point reste ouvert côté comptes.

## Questions en attente

Sources figées pour la relecture : [banque de la PR #19](https://github.com/Simondbf/site_revision_holberton/tree/cfb3232ae90684b89d0d9ec0b3dbdbfc90291c2f/docs/quiz/vague1) et [banque de la PR #21](https://github.com/Simondbf/site_revision_holberton/tree/cc16394c5114d216838c87f9fd62599d906a07a4/docs/quiz/vague2). Les fichiers transversaux comptent dans le total. La première contient 315 questions dont 25 déjà jouables. Les 30 variadiques jouables proviennent d’une autre banque.

| Décision pour les identifiants sources | Nombre |
|---|---:|
| Déjà jouables sur argc/argv | 25 |
| Utilisés dans les scénarios proposés (50 conservent leur identifiant) | 502 |
| Conservés pour vérification de l’exactitude du corrigé et de la clarté de l’énoncé | 572 |
| **Total inventorié** | **1 099** |

Une question est à corriger uniquement si son corrigé est inexact ou si son énoncé est ambigu. Les questions de restitution, répétitions, variantes numériques et questions faciles sont conservées. Le rattachement à un scénario retravaillé indique la provenance et conserve la candidature de l’original. Les questions encore à vérifier sont identifiées dans le tableau.

Les 153 nouvelles questions couvrent 144 notions. Elles comprennent 101 questions simples et 52 multiples. Les 567 choix disposent d’une justification individuelle. Les liens sont vérifiés jusqu’à la fiche exacte à partir de son titre et de son index. Les 55 questions existantes conservent leurs identifiants pour la reprise des sessions.

Le lot sur Git, le modulo et l’incrémentation concentre 230 variantes en 26 situations. Par exemple, changer seulement les opérandes dans la série de 73 calculs APP-10 évaluait essentiellement le même geste. Les questions proposées distinguent entre autres la division avant conversion en double, le reste d’un entier négatif et le formatage pour l’affichage. En Git, les distracteurs opposent la copie de travail, l’index et le commit. Les anciens distracteurs sur typedef et malloc permettaient de répondre par élimination hors sujet.

| Nouveaux thèmes | Questions |
|---|---:|
| Bases informatiques, terminal, chemins, permissions, Bash | 46 |
| Conditions et boucles, programmation C, qualité et méthode | 41 |
| Git, modulo, incrémentation et décrémentation | 26 |
| Pointeurs et tableaux, structures et typedef | 40 |

[Tableau de tri par identifiant](tri-questions.csv) · [Questions préparées](../../../quiz/questions-revisees.json) · [Explications de chaque choix](../../../quiz/aide-pedagogique.json)
