# Navigation Compte / Quiz — interface préparatoire

## Changements de la capture du 18 novembre 2026

- En-tête : **Accueil · Compte · Quiz · Fiches · À propos**, dans cet ordre.
- Les raccourcis latéraux redondants « Accueil » et « Toutes les fiches » sont retirés ; les catégories/notions restent accessibles.
- Le bouton de la bannière **Mes favoris** devient **Quiz** et ouvre `#quiz`.
- La mention **Accessible hors ligne** est supprimée : aucun mode hors-ligne garanti n'existe.
- L'explication des données conservées localement est ajustée pour ne pas présenter la future synchronisation comme déjà opérationnelle.
- Les favoris sont préservés dans `#favoris`, accessibles depuis `#compte` : **aucune suppression de données** ni modification des clés localStorage.
- Une page `#compte` indique honnêtement le statut invité et l'absence d'inscription active ; une page `#quiz` décrit les prochaines étapes sans exposer les 315 questions candidates encore marquées `a_verifier`.

## Ce qui reste à développer dans des PR dédiées

1. Moteur de quiz invité avec correction après validation seulement, modes simple/multiple, diagnostics par notion, pause/reprise locale et recommandations ; ne diffuser aucune question `a_verifier` avant relecture.
2. Backend d'authentification facultative, sessions sécurisées, isolation par utilisateur, stockage des progrès, export et suppression, RGPD, tests de non-régression invité et de contrôle d'accès.
3. Brevo côté **serveur uniquement**, pour vérifier les adresses et envoyer les courriels transactionnels. Ne jamais exposer des identifiants dans le site statique ; tester la délivrabilité et gérer les erreurs, sans publicité par défaut.
4. Mettre sous contrôle CI le déploiement actuellement décrit comme un timer VPS, activer la protection de `main`, valider les sauvegardes et le rollback avant d'ouvrir des comptes.

Les PR de cours et quiz sont indépendantes. L'intégration réelle des comptes ne doit pas être simulée par un simple bouton : aucune inscription ou connexion fictive n'a été ajoutée.

**Règle : aucune fusion sans accord explicite du propriétaire.**
