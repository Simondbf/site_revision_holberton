# Cahier des charges — comptes facultatifs, progression et quiz

> **IMPORTANT — historisation :** ce cahier des charges initial conserve des propositions anciennes (favoris, export invité, synchronisation optionnelle). La décision actuelle du propriétaire, applicable aux nouvelles PR, est consignée dans AGENTS.md et docs/MISE_EN_SERVICE_COMPTES_DOCKER_BREVO.md. Invité : reprendre seulement un quiz inachevé ; compte : synchronisation automatique des quiz et préférences ; aucun favori ni export des résultats via l'interface. Cette note prime sur les sections historiques ci-dessous.\n\n
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

## Modes de réponse et retours pédagogiques

- Chaque question indique **« Une seule bonne réponse »** ou **« Plusieurs bonnes réponses »**. Dans le second cas, **ne jamais indiquer le nombre exact** de réponses correctes avant la soumission.
- En mode unique, sélectionner une seule réponse (radio). En mode multiple, permettre plusieurs choix (cases à cocher), avec une action « Valider » explicite. Ne pas révéler le corrigé avant la validation.
- Modèle versionné : identifiants stables pour les notions, questions et choix ; `answer_mode: single|multiple`, liste des `correct_option_ids`, justification, commentaire optionnel sur chaque distracteur, difficulté **interne**, sources et statut de validation indépendante.
- Notation : combinaison exacte par défaut en mode multiple ; ne jamais attribuer le maximum en cochant toutes les cases. Les erreurs d'omission et les réponses incorrectement cochées alimentent les statistiques pédagogiques.
- Après correction, proposer **une explication et un lien direct vers la fiche de la notion**. Ne pas afficher un autre cours par approximation ; prévoir une route stable si le plan du site change.
- Les questions et mauvaises réponses doivent être relues indépendamment par plusieurs IA et comparées à la documentation ; des réponses plausibles mais ambiguës doivent être corrigées ou rejetées.

## Bilan et suivi des résultats

- En fin de quiz : score, pourcentage, répartition par notion, réussites et erreurs, notions à retravailler par priorité, explications des erreurs et liens directs vers les fiches.
- Le diagnostic s'appuie sur plusieurs tentatives, le niveau des questions et les types d'erreurs ; **une seule réponse fausse ne suffit pas** à qualifier une notion de « non maîtrisée ».
- Recommandations de nouvelles sessions ciblant les notions faibles, avec répétition espacée envisageable. Sélection manuelle de notions possibles en plus de l'adaptation automatique ; **pas de choix manuel de la difficulté**.
- Invité : sauvegarde locale et export volontaire, sans inscription ni blocage si le service de comptes est indisponible.
- Compte facultatif : espace **« Ma progression »** avec résultats détaillés par session, statistiques par notion, historique daté, suivi de reprise, progression dans le temps, fiches conseillées et synchronisation entre appareils. Export et suppression possibles ; isolation des données de chaque utilisateur vérifiée côté serveur.
- Prévoir des données métier minimales et versionnées, évitant de conserver inutilement les saisies libres.

## Banque de quiz

- **Vise en moyenne 50 à 100 questions différentes par notion**, et davantage pour les notions riches (pointeurs, mémoire, allocations). Une notion courte ou culturelle peut en avoir nettement moins : **ce n'est pas un quota imposé**.
- Qualité avant quantité : reformulations, compréhension de code, prédiction de sorties *définies*, détection d'erreurs, cas limites, choix de bonnes pratiques et mini-scénarios ; éviter les clones de questions.
- Distinguer clairement la notion visée, la réponse, les distracteurs, la difficulté interne, l'explication et les sources.
- Validation croisée par **plusieurs modèles indépendants et relecture technique/éditoriale** avant publication de la banque. Une IA pendant chaque session n'est pas nécessaire.
- Prévoir des identifiants de notion et de question **stables**, indépendants des positions `sections[si].items[ii]`, afin de préserver l'historique lorsque les chapitres changent.
- Le prototype historique [#14](https://github.com/Simondbf/site_revision_holberton/pull/14) est **abandonné et fermé sans fusion**, à la demande du propriétaire. Son contenu (25 anciennes questions) ne constitue pas une base de travail et **ne doit pas être réutilisé**. La [PR #19](https://github.com/Simondbf/site_revision_holberton/pull/19) est réservée à la conception et à la validation d'une **nouvelle banque indépendante de questions**, hébergée sur GitHub sans publication sur le site.

## E-mails transactionnels : Brevo — choix validé

**Prestataire retenu : [Brevo](https://www.brevo.com/fr/).** Cette décision est définitive pour la **phase de conception** des e-mails transactionnels du futur système de comptes ; l'intégration technique n'est **pas encore mise en œuvre**.

- Usage envisagé : vérification d'adresse lors de l'inscription facultative, connexion/récupération selon la méthode d'authentification finalement retenue, alertes de sécurité pertinentes. Ne pas envoyer de publicité par défaut.
- Intégration **uniquement depuis le backend** via l'[API transactionnelle Brevo](https://developers.brevo.com/docs/send-a-transactional-email) ou, si justifié, son [relais SMTP](https://help.brevo.com/hc/en-us/articles/7924908994450-Send-transactional-emails-using-Brevo-SMTP). Choisir l'API ou SMTP lors de l'implémentation ; ne jamais mettre de clé dans le HTML, les scripts publics, les logs ou GitHub.
- Configurer un domaine et expéditeur vérifiés, authentification DNS (DKIM/DMARC, SPF approprié), quotas, limites de débit et journalisation minimale ; vérifier la délivrabilité réelle et le traitement des erreurs.
- Jetons d'inscription / récupération à durée courte, usage unique, hachés si stockés, contrôle d'abus, réponse générique contre l'énumération des adresses ; aucun compte activé avant vérification lorsque le parcours exige un e-mail.
- Un **service d'envoi** Brevo ne remplace pas automatiquement une **boîte de réception** destinée au propriétaire du site : distinguer les besoins.
- En cas d'indisponibilité de Brevo, les nouveaux parcours nécessitant un e-mail peuvent être différés, mais **le site et les quiz invités restent intégralement utilisables**.
- Prévoir la conformité RGPD et informer des traitements et sous-traitants réellement utilisés avant activation des comptes. Ne pas promettre de confidentialité ou de conformité sans revue.

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
2. Concevoir et faire relire une nouvelle banque de questions via la PR #19, puis développer un quiz indépendant compatible avec la branche actuelle, accessible sans compte.
3. Développer le suivi local invité, avec schéma de données versionné et export possible.
4. Choisir la méthode d'authentification, intégrer **Brevo** côté serveur et créer un backend minimal avec tests d'isolation.
5. Proposer la connexion facultative et la synchronisation, après vérification sécurité, suppression/export, sauvegardes et exploitation.

**Règle de validation :** aucune PR ne passe automatiquement en production. Le propriétaire garde la décision finale de fusion.
