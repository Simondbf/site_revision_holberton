# Audit des PR, de la CI et des limites de sécurité — 16 novembre 2026

## Périmètre et niveau de preuve

Contrôle des **13 pull requests fusionnées**, de la PR **#14 alors en brouillon (fermée sans fusion depuis)**, de l'historique des **118 exécutions GitHub Actions** accessibles, des workflows, des scripts de tests et de la branche `main` de `Simondbf/site_revision_holberton`. L'audit s'appuie sur GitHub et le code du dépôt : **pas d'accès au VPS, à son journal de déploiement, à sa configuration Nginx ou à une campagne de tests d'intrusion**. Les résultats de CI ne prouvent ni la disponibilité de la production ni l'absence de vulnérabilités.

## Résultat de l'historique GitHub

- 118 exécutions GitHub Actions examinées : **92 réussites, 26 échecs historiques**. Ces échecs concernent des versions intermédiaires ; les **dernières exécutions disponibles sur la tête de chacune des PR fusionnées sont réussies**.
- Le dernier contrôle sur `main` avant cet audit est **réussi** : [exécution 43921171444](https://github.com/Simondbf/site_revision_holberton/actions/runs/43921171444), commit `dd588ab7` du 16 novembre 2026.
- Toutes les PR fusionnées suivantes ont un dernier contrôle vert sur leur branche, et un contrôle `verifier` vert sur `main` après fusion : **#3, #4, #5, #7, #8, #9, #10, #11, #12, #13, #15, #16, #17**. #3 n'avait qu'un workflow disponible avant fusion.
- **#14 est fermée sans fusion** : prototype de quiz 25 questions abandonné, tests de sa dernière révision réussis, mais branche en retard et conflit de fusion potentiel. Le fichier `index.html` de #14 contient **228 notions**, alors que `main` en contient **242** ; **ne pas fusionner ni remplacer le fichier de `main` tel quel**.
- Supprimer une branche après une fusion ne supprime pas les changements déjà intégrés à `main` ; la PR, les commits et les anciennes exécutions restent consultables.

### Exemples d'échecs historiques (cause établie dans les logs)

| PR | Exécution historique | Erreur constatée | État de la dernière révision |
| --- | --- | --- | --- |
| #4 | [41884718981](https://github.com/Simondbf/site_revision_holberton/actions/runs/41884718981) | Attente d'un élément du navigateur arrivée à expiration | Tests réussis avant fusion |
| #5 | [41927917694](https://github.com/Simondbf/site_revision_holberton/actions/runs/41927917694) | Positionnement incorrect d'une notion après navigation directe | Tests réussis avant fusion |
| #9 | [41940100570](https://github.com/Simondbf/site_revision_holberton/actions/runs/41940100570) | Assertion d'illustration manquante | Tests réussis avant fusion |
| #10 | [43277949429](https://github.com/Simondbf/site_revision_holberton/actions/runs/43277949429) | Test figé à 17 post-it alors que la branche en avait 19 | Tests réussis avant fusion |
| #11 | [43484787136](https://github.com/Simondbf/site_revision_holberton/actions/runs/43484787136) | Test figé à 214 notions alors que la branche en avait 215 | Tests réussis avant fusion |
| #14 | [43867456054](https://github.com/Simondbf/site_revision_holberton/actions/runs/43867456054) | Timeout du scénario de quiz dans le navigateur | Tests réussis sur la dernière tête, mais PR toujours brouillon |
| #16 | [43906670654](https://github.com/Simondbf/site_revision_holberton/actions/runs/43906670654) | Assertion textuelle trop stricte sur la formulation « sans consulter les fichiers » | Tests réussis avant fusion |

La dernière réussite d'une suite ne signifie pas que toutes les exigences métier ont été vérifiées : les tests ne couvrent pas toutes les situations ni le rendu réel en production.

## Constats prioritaires

### P1 — Fusion non protégée

Lors de l'inspection, la branche `main` est **non protégée** et aucun ruleset n'est présent. GitHub peut donc permettre une fusion malgré des checks rouges, selon les droits du contributeur. **Action propriétaire du dépôt :** activer une règle de protection de `main` imposant une PR, l'approbation requise si souhaitée, les checks `verifier` et `navigateur` avant fusion et idéalement la résolution des conversations. Conserver la validation finale au propriétaire du projet.

### P1 — Déploiement non conditionné par la CI

`AGENTS.md` décrit un `holberton-deploy.timer` sur le VPS qui contrôle les changements environ toutes les 5 minutes puis met à jour le fichier HTML, **sans interroger les statuts GitHub Actions**. Le workflow navigateur actuel ne s'exécute que sur les PR modifiant certains fichiers, pas sur le push `main`. Cette PR ajoute un contrôle navigateur après chaque push `main`, mais **ne verrouille pas le déploiement du VPS** : avant mise en ligne d'un backend/compte, préparer un pipeline de publication conditionné à la CI, avec rollback et sauvegardes. Vérifier les journaux du timer côté serveur avant d'affirmer qu'une version est publiée.

### Historique — ancien prototype de quiz abandonné

La PR #14 était un **pilote isolé** avec sauvegarde locale, niveau automatique et 25 questions sur cinq notions. Son `index.html` est obsolète (228 notions contre 242 sur `main`). **Décision ultérieure du propriétaire : fermer #14 sans fusion et abandonner les 25 questions**. Il ne faut ni reprendre ni rebaser ce prototype. Tout futur moteur de quiz devra être conçu sur la version actuelle du site, avec absence de régression des cours, de la navigation et des illustrations, revue indépendante des nouvelles questions et tests de sécurité avant publication.

### P2 — Tests liés à des effectifs figés

Plusieurs échecs précédents proviennent de l'ajout légitime de fiches qui invalidait des assertions codées en dur. Les tests de conservation des contenus doivent utiliser des seuils protecteurs ou des invariants calculés, plutôt que des égalités rigides devenues obsolètes. Ne pas supprimer une assertion simplement parce qu'elle échoue : en vérifier le sens.

### P2 — Sécurité du futur compte non implémentée

Le `main` actuel est un site HTML statique (242 fiches, 17 thèmes), sans API, base de données d'utilisateurs, formulaire de connexion ni mot de passe ; les favoris et le thème clair/sombre sont enregistrés localement. Aucun mécanisme actuel de connexion n'a donc été audité comme opérationnel ou « sécurisé ». Les schémas et contenus externes étant chargés seulement au besoin via des liens, le script applicatif principal ne réalise actuellement **aucune requête `fetch` ou XHR**. Cette PR ajoute un test d'invariants statiques et de garde-fous ; ce n'est **pas** un scan de sécurité exhaustif.

### P2 — Dépendances de CI et protection serveur

Le workflow Playwright utilise `npm install --no-save --no-package-lock playwright` : les versions ne sont pas verrouillées, ce qui nuit à la reproductibilité. Prévoir un `package-lock.json` contrôlé et `npm ci` avant de rendre les tests obligatoires. Contrôler également HSTS, en-têtes de sécurité (dont CSP adaptée au gros script inline), journalisation, permissions système et sauvegardes réelles du VPS ; **impossible de confirmer ces éléments depuis ce dépôt**.

## Contrôles ajoutés dans cette PR

- Script `scripts/verifier_securite.mjs` : vérifier les invariants du site statique, le maintien d'un fonctionnement invité, l'absence de scripts tiers embarqués, d'exécution dynamique de JavaScript et d'appels réseau dans le script principal, et la présence d'une protection sur les liens nouvel onglet.
- Ajouter ce script au workflow `verifier-site.yml`.
- Exécuter le navigateur aussi sur les pushes de `main` : meilleure détection des régressions **après fusion**, sans remplacer les checks pré-fusion.
- Documenter le parcours de comptes facultatifs et le plan de sécurisation.

## Vérifications encore nécessaires

1. Exécuter les nouveaux checks de la PR et les inspecter sur son dernier commit.
2. Protéger `main` dans les réglages du dépôt ; les changements de ce document ne peuvent pas le faire automatiquement.
3. Vérifier HTTPS, headers, déploiement effectif, sauvegardes, logs, droits et restauration sur le VPS.
4. Lorsqu'un **nouveau moteur de quiz** sera proposé (sans reprendre le prototype #14) : rejouer intégralement le scénario invité, mobile, pause/reprise, déconnexion réseau, rechargement, anti-régression de toutes les notions en production et revue humaine/IA de justesse des réponses.
5. **Avant ouverture d'un compte** : revue d'architecture, contrôle d'accès par utilisateur, sauvegarde/restauration, suppression de compte, tests d'intrusion adaptés, suivi de dépendances.

**Conclusion :** les anciens checks rouges ne prouvent pas une mauvaise fusion ; ils correspondent à des versions intermédiaires. Le risque principal démontré est l'absence d'un verrou obligatoire avant fusion / publication et l'écart de contenu de la branche du quiz.

## Décisions complémentaires du 16 novembre 2026

- Prestataire d'envoi d'e-mails transactionnels : **Brevo**, décidé par le propriétaire. Pas de service actuellement connecté à la production et aucun secret dans le dépôt.
- Informations publiques : « À propos » annonce que la consultation et les quiz resteront utilisables sans compte ; le suivi multi-appareils sera facultatif et n'est pas encore disponible.
- Ancien quiz : prototype [#14](https://github.com/Simondbf/site_revision_holberton/pull/14) fermé sans fusion, anciennes questions abandonnées et retirées de la branche de revue. La [PR #19](https://github.com/Simondbf/site_revision_holberton/pull/19) reçoit une banque entièrement nouvelle et sa revue inter-IA, sans publication sur le site.
- **Échecs historiques :** une PR déjà fusionnée ne peut pas être « défusionnée » par correction des anciens journaux ; on corrige les éventuelles régressions actuelles par une **nouvelle PR** et des tests. Les anciennes exécutions rouges restent consultables et ne sont pas en elles-mêmes la preuve qu'une erreur subsiste dans le code actuel.
- **Protection de `main` :** à activer **après validation de la PR #18** : empêcher une fusion si les checks `verifier` ou `navigateur` échouent, demander une PR, protéger des pushes directs destructifs et, si souhaité, exiger une revue.
