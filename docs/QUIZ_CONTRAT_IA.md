# Contrat des questions de quiz — référence pour les IA

Ce document décrit **le format réellement utilisé** par les banques accessibles du site. Il sert à créer, corriger et relire les futures questions. Ne pas inventer un autre schéma ou remplacer silencieusement les banques existantes.

## Sources de vérité

- `docs/quiz/vague1/section-09-pointeurs-et-tableaux-c.json` : banque plus large ; seules les **25 questions** dont l'identifiant correspond à `^V1-N09_07[2-6]-0[1-5]$` sont actuellement publiées.
- `quiz/questions-variadiques.json` : **30 questions** sur les fonctions variadiques, intégralement publiées.
- `quiz/questions-revisees.json` : scénarios préparés à partir des deux vagues, triés par chapitre. Le champ `candidate_ids` renvoie aux brouillons dans le [tableau de tri](quiz/relecture-20261124/tri-questions.csv).
- `quiz/aide-pedagogique.json` : reformulations visibles et justifications individuelles des réponses pour **chaque** question publiée.
- `quiz/core.mjs` : validations, sélection aléatoire ou adaptative, notation et progression.
- `quiz/engine.mjs` : interface et gestion des sessions.
- `scripts/integrer_quiz_html.mjs` : génération du **quiz autonome intégré à `index.html`**. Le VPS historique ne publie que ce fichier.

Les banques complètes non fusionnées, notamment celles de la PR #21, ne sont **pas automatiquement jouables** : vérifier le code de sélection et le contenu publié avant d'annoncer un nouveau thème.

## Objet question : champs effectivement employés

| Champ | Rôle |
| --- | --- |
| `id` | Identifiant **stable et unique** d'une question ; ne jamais le réutiliser pour une question différente |
| `notion_id` | Identifiant stable de la notion révisée, par exemple `N08_031` |
| `legacy_notion_key` | Correspondance de la fiche `si:ii`, par exemple `8:31` |
| `theme`, `notion` | Noms pédagogiques affichés, compatibles avec la fiche source |
| `question_type` | Type pédagogique (ex. `fondement`), distinct du mode de réponse |
| `answer_mode` | `single` (exactement une bonne option) ou `multiple` (plusieurs) |
| `prompt` | Énoncé de référence, exact et techniquement vérifié |
| `options` | Tableau de **3 à 5** objets `{ "id": "A", "text": "..." }`, avec identifiants consécutifs A, B, C, D, E |
| `correct_option_ids` | Identifiants des bonnes réponses, **jamais leurs positions à l'écran** |
| `explanation` | Explication de la correction générale |
| `source_urls` | Au moins un lien direct `https://revision-hbtn.soleiljaune.be/#cours/...` vers une fiche existante ; autres références techniques si utiles |
| `difficulty_internal` | Niveau interne lorsqu'il existe ; **ne pas proposer un sélecteur manuel de difficulté** |
| `review_status`, `review_flags` | Métadonnées de relecture à vérifier, pas preuve d'une validation acquise |

Les fichiers racines possèdent des métadonnées différentes (`version`, `schema_version`, `questions`), déjà prises en charge par le moteur. Garder leur structure existante.

### Exemple réel, extrait des questions variadiques

```json
{
  "id": "VAR-08-031-01",
  "notion_id": "N08_031",
  "legacy_notion_key": "8:31",
  "theme": "Programmation C — fonctions variadiques",
  "notion": "Fonction variadique — déclarer des arguments avec ...",
  "question_type": "fondement",
  "difficulty_internal": 1,
  "answer_mode": "single",
  "prompt": "En ISO C89, quelle déclaration autorise des arguments facultatifs ? (Une seule réponse correcte.)",
  "options": [
    { "id": "A", "text": "`void f(...);`" },
    { "id": "B", "text": "`void f(int n, ...);`" },
    { "id": "C", "text": "`void f(int ... n);`" },
    { "id": "D", "text": "`void f(int n, int ...);`" }
  ],
  "correct_option_ids": ["B"],
  "explanation": "Un paramètre fixe nommé précède ... en C89.",
  "source_urls": [
    "https://revision-hbtn.soleiljaune.be/#cours/programmation-c/32-fonction-variadique-declarer-des-arguments-avec",
    "https://man7.org/linux/man-pages/man3/stdarg.3.html"
  ]
}
```

L'extrait ci-dessus illustre les champs actifs ; les URLs et métadonnées complémentaires restent dans le JSON source. Lors de la lecture d'une session, `combineCandidates()` ajoute la propriété interne `family` (`argc`, `stdarg` ou `chapitre-<index>`) pour le filtrage par thèmes.

## Reformulations et justification de **toutes** les options

Les énoncés affichés peuvent être remplacés par `quiz/aide-pedagogique.json`, indexé par `id` :

```json
{
  "questions": {
    "VAR-08-031-01": {
      "prompt": "Reformulation de l'énoncé, si nécessaire",
      "feedback": {
        "A": "Pourquoi cette option est fausse.",
        "B": "Pourquoi cette option est juste.",
        "C": "Pourquoi cette option est fausse.",
        "D": "Pourquoi cette option est fausse."
      }
    }
  }
}
```

Cet exemple est **illustratif** : employer les formulations exactes et techniquement vérifiées du fichier source. Toutes les options, y compris les fausses, doivent disposer d'une justification précise. Le corrigé du JSON de question reste la source de vérité ; une reformulation ne doit **jamais** changer le sens de la question ou le bon ensemble de réponses.

L'interface mélange l'ordre des propositions avec Fisher–Yates ; les lettres A/B/C/D/E **affichées** désignent les positions mélangées, tandis que le score se calcule avec les identifiants `id` d'origine. Ne jamais déduire la correction de la lettre visible.

## Comportements fonctionnels impératifs

- Les questions sont tirées aléatoirement par défaut, quel que soit le type d'utilisateur. La priorité aux notions difficiles est un réglage possible **uniquement pour un compte connecté**.
- Choix de plusieurs thèmes à la fois depuis une liste déroulante recherchable ; ne pas revenir à un seul thème obligatoire.
- `single` : boutons radio, une seule bonne réponse ; `multiple` : cases à cocher, plusieurs bonnes réponses, sans annoncer leur nombre exact.
- Proposer `Je ne sais pas` ; une réponse n'est correcte que si elle sélectionne toutes les bonnes propositions et aucune mauvaise.
- Choix du moment de correction : immédiatement après validation **ou** en fin de quiz, sans révéler les réponses avant le bilan dans le deuxième cas.
- Une pause doit préserver question courante, réponses déjà saisies, ordre des questions et ordre des choix.
- **Invité** : ne conserver localement que la session inachevée utile à sa reprise ; aucun historique des quiz terminés, aucune statistique par notion, aucun export des résultats.
- **Compte connecté** (fonctionnalité à déployer séparément) : historique et progression par notion visibles dans `Compte → Quiz` ; réglages dans `Compte → Paramètres`.

## Checklist avant de soumettre une PR

1. Vérifier l'exactitude C (promotions de types, UB, formats, etc.) et les sources officielles ; ne pas reprendre une réponse proposée sans la revérifier.
2. Contrôler la cohérence avec la fiche `legacy_notion_key`, les liens directs et les identifiants existants.
3. Relire indépendamment chaque bonne réponse, chaque distracteur et **chaque justification** ; éviter les ambiguïtés et les fausses réponses plausibles mais également justes.
4. Mettre à jour les fichiers JSON concernés et `quiz/aide-pedagogique.json`, puis les validations/tests adaptés ; jamais une simple modification isolée de `index.html`.
5. Exécuter `node scripts/verifier_quiz.mjs`, puis `node scripts/integrer_quiz_html.mjs --write` et `node scripts/integrer_quiz_html.mjs --check`. Vérifier aussi les tests navigateur et la CI.
6. Travailler sur une **branche dédiée** ; PR et CI vertes, puis validation **explicite du propriétaire** avant la fusion/déploiement. Aucun ajout automatique de banque expérimentale.
