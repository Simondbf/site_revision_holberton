# Contribuer à Holberton Révision

Une correction, une explication plus claire, un exemple ou une nouvelle notion ? Toutes les améliorations utiles sont les bienvenues.

## Proposer un changement

- **Une idée ou une erreur à signaler ?** [Ouvre une issue](https://github.com/Simondbf/site_revision_holberton/issues/new).
- **Tu veux modifier le site ?** Crée un fork ou une branche, effectue tes changements puis ouvre une **pull request** vers `main`.
- Décris simplement ce que tu as amélioré. Pour les points techniques, un lien vers une documentation de référence est apprécié.

## Ce qui fait une bonne fiche

Une définition courte, une explication **claire et aérée**, un exemple correct et, si nécessaire, un schéma ou une analogie. Avant d'ajouter une notion, vérifie qu'elle n'est pas déjà expliquée sur le site.

Les vérifications automatiques se lancent lors des pull requests. Pour tester les cours localement :

```bash
node scripts/verifier_site.mjs
node scripts/verifier_contenu.mjs
```

**Tu contribues avec une IA ?** Transmets-lui le fichier [AGENTS.md](AGENTS.md) : il contient les conventions de rédaction et les indications techniques pour respecter le style du site.

Une fois la pull request validée et fusionnée, la mise à jour du site est automatique.
