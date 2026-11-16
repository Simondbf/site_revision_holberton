# Cahier des charges — comptes facultatifs, progression et quiz

**Statut : conception — aucune création de compte ni collecte de données personnelles n'est implémentée dans cette PR.**

## Principe non négociable : accès libre

**Aucune inscription ni connexion n'est nécessaire** pour consulter les cours, chercher des notions, mettre en favori ou utiliser les quiz. Le visiteur est automatiquement en **mode invité**. Les éléments non sensibles peuvent être mémorisés localement pour retrouver sa progression sur le même appareil ; il doit être averti que vider les données du navigateur peut effacer le suivi.

Une action discrète « Créer un compte / Se connecter » sera facultative. L'absence de connexion, la panne du prestataire d'e-mail ou l'indisponibilité du service de synchronisation **ne doit pas bloquer la consultation et la révision en invité**. Ne pas imposer une invitation à s'inscrire à répétition.

## Ce qu'apporte un compte volontaire

- Retrouver favoris, parcours de révision, quiz commencés/terminés et historique des réponses sur plusieurs appareils.
- Voir par **notion** le nombre de tentatives, la réussite, la progression et les difficultés persistantes ; rappeler les cours à retravailler.
- Sélectionner volontairement des notions à réviser davantage sans contourner la sélection adaptative. La difficulté des questions n'est **pas choisie manuellement** : elle varie automatiquement.
- Pause/reprise fiable sur plusieurs appareils après synchronisation, sans perte silencieuse.
- Importation du suivi invité **seulement après information et validation explicite**, avec traitement clair des éventuels conflits ; ne jamais écraser sans avertissement un historique plus récent.
- Export et suppression du suivi ; possibilité de supprimer le compte avec une politique de rétention et sauvegardes expliquée.

## Banque de quiz

- **Vise en moyenne 50 à 100 questions différentes par notion**, et davantage pour les notions riches (pointeurs, mémoire, allocations). Une notion courte ou culturelle peut en avoir nettement moins : **ce n'est pas un quota imposé**.
- Qualité avant quantité : reformulations, compréhension de code, prédiction de sorties *définies*, détection d'erreurs, cas limites, choix de bonnes pratiques et mini-scénarios ; éviter les clones de questions.
- Distinguer clairement la notion visée, la réponse, les distracteurs, la difficulté interne, l'explication et les sources.
- Validation croisée par **plusieurs modèles indépendants et relecture technique/éditoriale** avant publication de la banque. Une IA pendant chaque session n'est pas nécessaire.
- Prévoir des identifiants de notion et de question **stables**, indépendants des positions `sections[si].items[ii]`, afin de préserver l'historique lorsque les chapitres changent.
- Le pilote #14 (25 questions sur cinq notions) **n'est ni la version finale, ni prêt à fusionner en l'état** : sa base de contenu contient 228 notions contre 242 sur `main` au 16 novembre 2026.

## E-mail : distinguer recevoir et envoyer

Une boîte de réception pour le propriétaire du site n'est **pas la même chose** qu'un service d'**envoi transactionnel** pour confirmer une adresse ou permettre la récupération d'un compte. Le choix du fournisseur, de l'offre gratuite et de la méthode de connexion reste **ouvert**. Vérifier quota, limites, confidentialité, disponibilité et configuration DNS (SPF/DKIM/DMARC si envoi sur un domaine propre), délivrabilité, conformité et gestion des secrets. Aucun identifiant SMTP ou clé API ne doit être stocké dans le HTML, GitHub ou les logs.

Évaluer d'abord la simplicité et la robustesse de l'authentification (passkeys, ou e-mail vérifié avec procédure sûre) ; ne pas choisir un système de mot de passe maison pour accélérer le projet.

## Critères de sécurité avant mise en ligne des comptes

1. **Contrôles d'accès vérifiés côté serveur** sur chaque ressource personnelle : un utilisateur A ne doit jamais lire, modifier ni effacer les quiz de B, y compris en changeant des IDs ou les requêtes réseau. Exécuter des tests d'autorisation multi-comptes.
2. **Sessions robustes** : HTTPS partout ; cookies `Secure`, `HttpOnly` et `SameSite` adaptés, rotation, expiration, invalidation à la déconnexion ; protection CSRF si cookies et actions sensibles ; protection XSS.
3. **Création/récupération** : confirmation d'e-mail si utilisée, jetons aléatoires à durée courte et usage unique, invalidation, limitation de tentatives/envois, réponses génériques anti-énumération, revalidation des actions sensibles.
4. **Secrets et stockage** : pas de secret dans le dépôt ni le navigateur ; minimum de données côté serveur ; chiffrement des sauvegardes ; rotation et permissions minimales. Si mot de passe, dérivation de clé robuste via solution éprouvée (ex. Argon2id), jamais texte clair.
5. **Confidentialité et droits** : politique de confidentialité adaptée, information sur durée de conservation, export, suppression, accès limité aux admins, journalisation sans réponses personnelles ni jetons ; conformité RGPD à revoir avec la mise en œuvre.
6. **Tests et opérations** : revue OWASP, test de non-régression invité, scan des dépendances, restauration de sauvegarde éprouvée, rollback, supervision et réponse à incident ; ne pas qualifier le système de sécurisé sur la seule foi d'un lint.

Références : [OWASP Authentication](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html), [OWASP Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html), [OWASP Forgot Password](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html).

## Ordre de livraison sans casser l'existant

1. Valider audit / CI et fiabiliser la fusion avant publication.
2. Porter le quiz pilote sur un `main` à jour, le faire relire, le tester en mode invité.
3. Développer le suivi local invité, avec schéma de données versionné et export possible.
4. Choisir l'authentification et le fournisseur d'e-mails, puis créer un backend minimal et les tests d'isolation.
5. Proposer la connexion facultative et la synchronisation, après vérification sécurité, suppression/export, sauvegardes et exploitation.

**Règle de validation :** aucune PR ne passe automatiquement en production. Le propriétaire garde la décision finale de fusion.
