# Holberton Révision

Un support de révision **indépendant**, consultable librement, qui associe des **résumés courts** à des explications plus développées, exemples et schémas. Ce projet n'est pas une publication officielle de Holberton.

🌐 Site actuellement publié : https://revision-hbtn.soleiljaune.be

## Utiliser le site

- **Accueil** : découvrir les thèmes et le nombre de notions.
- **Catégories** : choisir un grand domaine, puis un thème.
- **Fiches** : lire le résumé sans ouvrir le cours complet.
- **Explications** : cliquer sur une fiche pour ouvrir l'explication au-dessus de la page. Échap ou un clic à l'extérieur ferme la fenêtre.
- **Sommaire** : accéder directement à une notion, dont l'adresse peut être partagée.
- **Favoris** : conserver ses notions préférées dans le navigateur utilisé, sans compte.
- **Recherche** : retrouver une notion par son nom, sa définition ou son thème.

Le site est statique : les cours sont intégrés à `index.html`. Il n'exige **ni API payante ni serveur d'IA**.

## Participer

Des corrections, suggestions, exemples plus simples, schémas et nouvelles notions sont les bienvenus !

1. Ouvrir une [issue](https://github.com/Simondbf/site_revision_holberton/issues/new) pour proposer une idée, ou corriger un détail.
2. Pour un changement de contenu, créer une branche / un fork puis une **pull request**.
3. Expliquer ce qui a changé et, lorsque c'est utile, fournir une source de référence.

Lire [CONTRIBUTING.md](CONTRIBUTING.md) pour les recommandations.

## Organisation

- `index.html` : interface, styles, données de cours et comportements de navigation.
- `scripts/verifier_site.mjs` : contrôle syntaxique et cohérence des fiches.
- `.github/workflows/verifier-site.yml` : contrôle automatique proposé pour les pull requests.

Le projet est volontairement facile à ouvrir sans compilation : on peut consulter `index.html` directement. Pour tester une vraie navigation dans un navigateur, on peut aussi lancer un serveur HTTP local.

## Publier une nouvelle version

**La branche `main` n'est pas automatiquement publiée sur le VPS.** Une pull request doit être relue, fusionnée puis déployée explicitement sur le serveur. Ne jamais mettre de jetons, mots de passe ou identifiants secrets dans un fichier public.

## Évolutions envisagées

- Améliorer régulièrement les cours et les illustrations pédagogiques.
- Ajouter progressivement de nouveaux langages selon le cursus (Python, Java, PHP, etc.).
- Étudier des quiz adaptatifs, d'abord sans IA obligatoire.
- Examiner plus tard l'utilité de comptes utilisateurs pour synchroniser la progression, en tenant compte de la sécurité et de la vie privée.

## Licence et réutilisation

Le dépôt est consultable publiquement mais aucune licence de réutilisation n'a encore été choisie. **Public ne signifie pas automatiquement libre de droits.** Une licence explicite sera discutée avant de présenter le code ou le contenu comme réutilisables sans conditions.
