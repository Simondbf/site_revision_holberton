# Pré-revue pédagogique — 19 novembre 2026

**Statut : pré-revue ChatGPT, NON indépendante ; aucun feu vert éditorial accordé.**

## Périmètre

- PR #23 : 6 fiches `stdarg.h` dans `main` (fusion déjà effectuée le 18/11).
- PR #25 (empilée sur #24) : **55 questions**, dont 25 `argc/argv` issues de #19 et 30 `stdarg.h` originales, sur 11 notions.
- **226 propositions** à contrôler individuellement ; 11 questions à réponses multiples.
- 55 IDs uniques ; 55 explications présentes ; 55 questions avec au moins un lien de source ; **55 restent au statut `a_verifier`**.
- PR #21 / 784 autres questions : **hors périmètre**, à reprendre séparément.

## Contrôles réalisés

1. Première lecture technique des 55 énoncés, options, bonnes réponses et explications par ChatGPT. Les règles générales C89, `main(argc, argv)`, `stdarg.h`, promotions `char -> int` / `float -> double`, sentinelles et `va_copy` ont été confrontées aux références ci-dessous. Cette première lecture **n'est pas une revue contradictoire indépendante**.
2. Inspection des 6 fiches de la PR #23 : définition, détails C89 vs C99, exemples C et explications sont cohérents à première lecture. Le script `scripts/verifier_fonctions_variadiques.mjs` contrôle déjà que les 6 exemples compilent avec `-std=gnu89 -Wall -Werror -Wextra -pedantic` et donnent les sorties attendues. **Ne pas remplacer une analyse des notions par cette compilation.**
3. Les 4 références externes communes aux six cours ont été consultées : la documentation GNU `Argument-Macros`, `Variadic-Example`, POSIX `stdarg.h` et cppreference `/c/variadic` sont accessibles.
4. **Anomalie éditoriale corrigée dans #25** : `V1-N09_075-04`. La question prétendait qu'un test évitait toute lecture de `argv[1][1]` pour une chaîne d'un caractère ; en réalité, ce test lit légalement le terminateur `'\\0'`. L'énoncé et l'explication distinguent désormais la lecture de `'\\0'` d'un accès hors limites ; le corrigé `C` reste inchangé.

## Rapport de relecture externe reçu (19 novembre 2026)

Un rapport PDF de cinq pages, intitulé « Analyse du dossier de relecture aveugle », a été communiqué par le propriétaire. Il juge le dossier globalement bon et décrit **12 questions vérifiées sur sources**, mais **n'évalue pas indépendamment les 55 questions et leurs 226 options**. Il demande explicitement une contre-expertise supplémentaire complète avant validation de la banque.

Corrections mises en œuvre sur la branche #25 après ce rapport :

1. Clarification du lancement `./outil un deux trois` pour `V1-N09_073-01` et synchronisation des représentations JSON/Markdown.
2. Distracteur D retravaillé dans `VAR-08-031-04`.
3. Distracteur D `va_start` dans `VAR-08-032-01`.
4. Répartition 3 vraies / 2 fausses dans `VAR-08-032-04`.
5. Question `VAR-08-033-05` remplacée par un scénario de lecture de deux arguments dans l'ordre.
6. Question `VAR-08-036-04` remplacée par le cycle complet de copie `va_copy` en C99.

Les libellés des 30 questions variadiques précisent désormais explicitement le mode de réponse, en restant muets sur le **nombre exact** de bonnes réponses multiples. Le dossier aveugle a été régénéré.

**Écart factuel dans le rapport PDF :** `VAR-08-031-03` y est présentée comme ayant A et C correctes et D fausse ; **D est vraie pour C89**, de sorte que la clé JSON A, C, D reste inchangée. Le rapport mentionne aussi 8 questions multiples dans un passage alors que le corpus en comporte 11. Une révision du rapport par son auteur serait utile.

Ces corrections modifient le corpus depuis le contrôle PDF : **une nouvelle relecture indépendante de la version corrigée demeure obligatoire**, ainsi que les tests CI du dernier commit.

## Protocole indispensable à la validation indépendante

Le second relecteur doit **commencer par** `QUESTIONS_SANS_CORRIGES.md` et produire sa réponse AVANT d'ouvrir les JSON qui contiennent les corrigés. Pour chaque question :

- Déterminer les bonnes options sans connaître la réponse officielle, puis expliquer **chaque option** séparément.
- Comparer ensuite aux corrigés JSON. Signaler toute discordance, ambiguïté, exception de standard ou distraction trompeuse.
- Joindre les références exactes ; les tests qui passent ne constituent pas une preuve pédagogique.
- Attribuer un verdict `conforme`, `corriger`, `ambiguë` ou `à vérifier` à chacun des 55 IDs.

Pour chacune des 6 fiches `8:31` à `8:36`, commenter l'exactitude, l'adaptation à GNU89, le texte explicatif, les cas limites, l'exemple et ses sources.

**Critère de passage** : 55/55 revues, 226/226 propositions analysées, 6/6 fiches examinées, zéro divergence ou ambiguïté critique non résolue, tests CI verts après les dernières corrections. Le propriétaire conserve seul la décision de sortie du brouillon, de fusion et de déploiement.

## Sources techniques

- https://en.cppreference.com/w/c/language/main_function
- https://en.cppreference.com/w/c/language/variadic
- https://sourceware.org/glibc/manual/2.43/html_node/Argument-Macros.html
- https://sourceware.org/glibc/manual/2.43/html_node/Variadic-Example.html
- https://man7.org/linux/man-pages/man0/stdarg.h.0p.html
- https://manpages.debian.org/unstable/manpages-dev/stdarg.3.en.html

## Reste à réaliser avant l'approbation de la PR #25

- Obtenir et intégrer une **seconde relecture réellement indépendante** (autre modèle isolé ou relecteur humain compétent en C).
- Consolider les divergences question par question ; faire corriger les éventuels écarts sur la branche, sans marquer les questions approuvées prématurément.
- Vérifier le dernier SHA par GitHub Actions et tester les parcours de l'interface dans un navigateur.
- Confirmer la protection de `main` et la condition CI du déploiement VPS avant **toute fusion en production**.
