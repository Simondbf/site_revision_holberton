# Reprise du chantier « Comptes Holberton » — 21 novembre 2026

Ce document conserve les choix fonctionnels et les limites opérationnelles du chantier, indépendamment des fils de discussion. **Il ne constitue pas une autorisation de fusion ou de mise en production.**

## État vérifié

- `main` contient le site statique et les corrections quiz récentes ; l'ancienne interface de favoris et l'historique invité sont **déjà supprimés**. Ne pas les réintroduire.
- La PR #37 (`preparer-comptes-docker-brevo-restic-20261121`) réintègre le backend des comptes depuis l'ancienne PR #26 sur la version actuelle de `main`. Elle est en **brouillon**, non fusionnée, non installée sur le VPS. Les deux contrôles GitHub `verifier` et `navigateur` étaient verts sur le commit `2e7093a64d3cbf8e9b6b1b42c6ed8b04300bb0e1`.
- La PR #31 (rôle administrateur et statistiques) reste distincte, en brouillon et dépendante de l'ancien backend. Ne pas la fusionner telle quelle.
- Le système de publication historique de l'HTML statique ne déploie pas les nouveaux fichiers du backend et ne constitue pas une stratégie de migrations/restauration.

## Contrat fonctionnel à conserver

- Les cours et quiz restent publics et gratuits, sans obligation de compte.
- Invité : aucune fonction « favoris », aucun historique de sessions terminées, aucune statistique de maîtrise ou export. Seule une **session de quiz inachevée** peut être conservée localement pour reprise.
- Compte vérifié par e-mail (lien unique Brevo) : historique, progression par notion, session en cours, paramètres de correction et priorité adaptative, ainsi que thème clair/sombre synchronisés entre navigateurs.
- **Synchronisation automatique dès la connexion**, sans option d'activation ou demande systématique de confirmation. En cas de modification concurrente, refus de l'écrasement silencieux (révision/HTTP 409) et résolution compréhensible pour l'utilisateur.
- Compte : onglet « Quiz » par défaut pour les indicateurs/historiques, onglet « Paramètres » pour le moment de correction (immédiate/fin) et la priorité adaptative (facultative, désactivée par défaut). Aucun sommaire latéral sur Quiz/Compte.
- Quiz : questions aléatoires par défaut pour tous, sélection de plusieurs thèmes, réponses multiples, « Je ne sais pas », pause/reprise et session sans quota fixe.
- Suppression rapide des données du compte dans la base active ; ne jamais promettre la suppression immédiate d'anciennes sauvegardes chiffrées conservées selon leur durée de rétention.

## Architecture et isolement

- Backend Node.js + SQLite Holberton dans Docker ; API privée sur la boucle locale du VPS en attendant le reverse proxy HTTPS.
- Fournisseur d'e-mails transactionnels Brevo, **identifiants propres à Holberton**.
- Restic et snapshot SQLite cohérent via Docker ; **dépôt distant chiffré indépendant**, test de restauration non destructif.
- Ne pas modifier les ports, bases, volumes, secrets, timers ou sauvegardes des autres services du VPS (notamment les applications financières, médias et assistant personnel).
- Aucun secret ni fichier `.env` de production dans le dépôt.

## Vérifications requises avant lancement

1. Vérifier la justesse de la synchronisation lors de modifications locales simultanées, des déconnexions et des ouvertures multi-appareils. Ajouter des tests automatisés réels.
2. Vérifier la délivrabilité SMTP **depuis le conteneur sur le VPS** avec un véritable lien à usage unique.
3. Provisionner séparément les secrets et les permissions de lecture Restic ; exécuter snapshot, sauvegarde distante, rétention et restauration de contrôle.
4. Tester l'isolation entre comptes, la résistance aux abus et la suppression de compte, ainsi que la compatibilité du proxy HTTPS et des cookies.
5. Finaliser les informations de confidentialité et les délais de conservation tenant compte des sauvegardes.
6. Qualifier en staging avant toute ouverture publique, prévoir un rollback de schéma/données et un déploiement conditionné à la CI ; éviter deux déployeurs concurrents.
7. Après CI verte et revue de sécurité, obtenir **l'accord exprès du propriétaire pour la fusion et pour le déploiement** ; ne jamais déduire cet accord de l'existence d'une PR.

Références : `AGENTS.md`, `docs/MISE_EN_SERVICE_COMPTES_DOCKER_BREVO.md`, PR #37, `docs/QUIZ_CONTRAT_IA.md`.
