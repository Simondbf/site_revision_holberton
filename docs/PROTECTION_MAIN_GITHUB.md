# Activer la protection de `main` dans GitHub

**Statut au 17 novembre 2026 :** branche `main` non protégée ; aucune règle de protection active. La connexion GitHub de l'assistant peut modifier des fichiers et proposer des PR, mais **n'a pas la permission Administration / Edit repository rules**. Le propriétaire du dépôt doit activer cette règle dans l'interface.

## Préalable important

**Fusionner et valider d'abord la PR #18**, puis vérifier que les workflows sont bien déclenchés pour toute PR : `verifier` et `navigateur`. À la date de création de ce document, le workflow navigateur de `main` ne s'exécute que sur les PR modifiant certains chemins. Si on rend `navigateur` obligatoire **avant** la mise à jour issue de la PR #18, une PR documentaire peut être bloquée à tort avec un check « Pending ». Le workflow de la PR #18 corrige ce problème.

## Procédure (dans GitHub)

1. Ouvrir https://github.com/Simondbf/site_revision_holberton/settings/rules
2. Cliquer **New ruleset** → **New branch ruleset**.
3. **Ruleset name :** `Protection de main - PR et tests`.
4. **Enforcement status : Active**.
5. **Target branches :** **Add target** → **Include default branch** (ou **Include by pattern** et saisir exactement `main`).
6. **Bypass list :** vide, sauf dérogation explicitement voulue. Éviter un contournement permanent pour les admins/applications.
7. **Branch protections :**
   - ✅ **Restrict deletions**
   - ✅ **Block force pushes**
   - ✅ **Require a pull request before merging**
   - ✅ **Require status checks to pass before merging**
   - ✅ **Require conversation resolution before merging** si proposé et compatible avec l'organisation de travail
8. Dans les status checks requis, sélectionner exactement les **noms des jobs**, pas les titres des workflows :
   - `verifier` (workflow « Vérifier Holberton Révision »)
   - `navigateur` (workflow « Tester les illustrations dans un navigateur »)
   Choisir la source **GitHub Actions** si GitHub le propose. Vérifier que ces checks ont réellement été observés sur une PR récente.
9. **Require branches to be up to date before merging :** recommandé pour protéger des changements de base non testés ; oblige parfois à mettre à jour la branche puis relancer la CI.
10. **Required approving reviews :** si tu travailles seul, commencer sans exigence d'un autre approbateur ; GitHub ne compte pas l'auto-approbation. Activer les approbations obligatoires seulement avec un autre contributeur disponible.
11. Cliquer **Create**, puis vérifier que le ruleset apparaît comme **Active** et cible `main`.

## Ce que cette règle ne garantit pas

- Elle **ne remplace pas** une revue technique, ni un audit de sécurité ni un pipeline de déploiement sécurisé.
- Le timer VPS actuel décrit dans `AGENTS.md` peut toujours récupérer un commit fusionné sans attendre les checks post-fusion. Pour éviter les déploiements après un incident, prévoir un pipeline CI → publication conditionné à la réussite, avec rollback et sauvegardes.
- Le workflow `banque_quiz` de la PR #19 n'est **pas** à rendre obligatoire sur toutes les PR, car il est volontairement conditionné aux fichiers du quiz (un check requis qui ne s'exécute pas peut bloquer une PR non concernée).

Source officielle : https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository et https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets

**N.B.** : le ruleset est disponible pour les dépôts **publics sur GitHub Free**. La propriété publique du dépôt ne donne toutefois aucune permission d'administration à une application externe.
