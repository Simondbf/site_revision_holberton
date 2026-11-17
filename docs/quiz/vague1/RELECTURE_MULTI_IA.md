# Protocole contradictoire de validation — Quiz Holberton (vague 1)

**État : instructions de relecture pour des questions NON validées.** Rien dans cette PR ne doit être publié sur le site avant validation des réponses, des distracteurs, des liens et des justifications.

## Périmètre

- **1 273 questions candidates, 214 notions, 13 thèmes** : fondamentaux, Linux, terminal, Shell/Bash, C et Git/GitHub.
- **856 questions structurées** issues des résumés/notes, avec des pièges parfois trop simples ou ambigus ; priorité à la **détection des faux distracteurs**.
- **417 questions pratiques/techniques** ; certaines sont des variations numériques proches. Les doublons sémantiques et la diversité réelle doivent être évalués, et pas uniquement le nombre d'IDs différents.
- **243 questions à plusieurs bonnes réponses**, le reste avec une seule bonne réponse.
- **6 notions de pointeurs de fonctions liées à la PR #20** et pas encore présentes sur le site public. Vérifier leurs liens **après fusion** de #20 ; éviter de déclarer qu'ils fonctionnent déjà en production.
- **50–100 questions variées par notion en moyenne** est un objectif à terme, **non atteint** : environ 5,9 questions par notion à ce stade. Répartir davantage l'effort sur les fondamentaux et les notions difficiles sans créer de variantes superficielles.
- L'ancien prototype **PR #14** est abandonné et non réutilisé.

## Répartition suggérée : avis réellement indépendants

1. **Claude — langage C** : syntaxe GNU89 stricte, types, tailles, prototypes, pointeurs, allocations, chaînes, comportement indéfini. Vérifier les sorties seulement sur les programmes à comportement défini.
2. **Gemini — contre-expertise** : énoncés et distracteurs, interprétations alternatives, ambigüités, liens notion / question, pertinence du niveau.
3. **DeepSeek — contre-exemple technique** : rechercher de façon adversariale les hypothèses cachées et tous les cas dans lesquels une réponse marquée fausse serait également vraie ; citer une source.
4. **Mistral Le Chat — qualité pédagogique** : français accessible, absence d'indices involontaires, variété de difficulté et qualité des explications.
5. **GitHub Copilot (optionnel)** : revue du format JSON, scripts d'intégrité, tests du moteur de quiz ; ne pas le compter automatiquement comme une expertise indépendante lorsque le modèle sous-jacent est identique à un autre relecteur.

**Important :** les IA peuvent toutes se tromper ou partager la même erreur. Une question ne devient pas correcte par consensus ; résoudre les désaccords avec le standard C pertinent, les manuels fiables ou une expérimentation qui isole précisément un comportement défini.

## Méthode anti-ancrage

Demander aux relecteurs de traiter les questions **sans lire d'abord les cochettes ✅** ou les champs `correct_option_ids` lorsqu'une revue aveugle est possible. Ils doivent proposer toutes les réponses vraies puis confronter leur jugement au corrigé. À défaut, leur imposer la vérification séparée de chaque proposition, même lorsque le corrigé semble plausible.

Ne pas attribuer un « validé » collectif à un fichier entier. Chaque question possède son propre ID et son statut `review_status` qui reste `a_verifier` tant que son examen complet n'est pas terminé.

## Grille de revue par question

```text
ID :
Notion ciblée :
Verdict : VALIDÉE / À CORRIGER / AMBIGUË / À REJETER
Énoncé : auto-suffisant ? Hypothèses explicites ?
Réponses réellement vraies :
Option A : vraie / fausse / ambiguë ; justification
Option B : vraie / fausse / ambiguë ; justification
Option C : vraie / fausse / ambiguë ; justification
Option D : vraie / fausse / ambiguë ; justification
Le mode "une seule" ou "plusieurs" correspond-il à la réalité ?
Y a-t-il un doublon sémantique ou une réponse devinable sans connaissance ?
Niveau de difficulté et intérêt pédagogique :
Explication corrigée :
Source primaire / test reproductible :
Confiance :
```

## Règles techniques particulières

- **C :** toujours distinguer C89/GNU89, C99 et extensions. Ne jamais attribuer une sortie prédictible à un comportement indéfini ; vérifier signatures `scanf`/`printf`, largeur des tampons, durée de vie, overflow, aliasing, gestion `malloc/free/realloc`.
- **Shell :** spécifier Bash quand nécessaire ; distinguer sortie standard et erreur, code retour, expansions, citations, permissions de dossiers/fichiers, conditions d'environnement.
- **Git :** distinguer dépôt local, remote, branches et HEAD ; ne pas supposer qu'une PR fusionnée a échoué parce qu'un ancien run était rouge.
- **Réponses multiples :** l'élève verra « Plusieurs bonnes réponses », **jamais le nombre exact** ; si une option non cochée est également vraie, la question doit être revue avant publication.
- **Sources :** vérifier que la référence prouve réellement la proposition ; la fiche du site est un point de retour pédagogique, **pas une preuve indépendante de sa propre exactitude**.
- **URL :** les fiches C de la PR #20 ne sont pas encore en production. Les routes sont proposées et doivent être testées dans le navigateur après déploiement de #20.

## Critères stricts avant publication

- Aucune question avec `review_status: a_verifier` ou des désaccords non résolus n'est exportée vers le site.
- Toutes les options fausses ont été vérifiées, pas seulement la/les bonne(s).
- Les doublons, variantes sans apport pédagogique et questions à indices évidents sont écartés ou réécrits.
- La difficulté est **interne et adaptative** ; l'élève ne la choisit pas manuellement.
- En cas d'erreur, afficher la justification et **la fiche spécifique à la notion** ; en fin de quiz fournir score, historique et statistiques par notion.
- Consultation et quiz possibles **sans compte** ; historique local des invités et synchronisation **facultative** seulement après implémentation sécurisée.
- Les courriels de futurs comptes utiliseront **Brevo** côté serveur, jamais une clé exposée dans le navigateur.
- Les tests JSON/Markdown automatiques doivent réussir et, lorsque pertinent, les exemples C doivent être compilés sous `gcc -std=gnu89 -Wall -Wextra -Werror -pedantic`.

## Soumission des retours

Idéalement, chaque IA transmet un rapport Markdown avec des **IDs de questions précis**, classés par sévérité, plus une proposition de correction justifiée. Créer ensuite une PR de correction de la banque **sans réécrire simultanément des centaines de questions non inspectées**, afin de garder un historique de validation compréhensible.

**Ordre suggéré :** commencer par les 417 questions pratiques et par les 214 questions à réponses multiples issues des fiches, puis les autres questions d'identification ; corriger d'abord les questions douteuses et réduire les faux distracteurs. Les relecteurs peuvent répartir les fichiers par thème pour éviter les coupures de contexte.
