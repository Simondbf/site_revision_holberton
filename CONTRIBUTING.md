# Contribuer à Holberton Révision

Merci de contribuer à rendre les explications plus accessibles aux débutants.

## Les contributions utiles

- Corriger une erreur technique, une faute ou une définition ambiguë.
- Ajouter une **analogie juste**, accompagnée de ses limites.
- Ajouter un schéma clair avec une légende et un texte alternatif.
- Améliorer l'explication d'un exemple sans résoudre entièrement un exercice évalué.
- Ajouter une notion réellement abordée dans les cours.

## Comment procéder sur GitHub

1. Ouvre une **issue** pour discuter d'une idée importante.
2. Crée un **fork** du dépôt, puis une branche dédiée.
3. Modifie les fichiers concernés.
4. Ouvre une **pull request** vers la branche `main` avec un titre descriptif, idéalement en français.
5. Explique ce que tu as changé et pourquoi ; ajoute un lien vers une documentation de référence pour les faits techniques.

Exemple de titre : `Expliquer le déréférencement avec un schéma mémoire`.

## Règles éditoriales

- Le **résumé** doit rester court et compréhensible sans ouvrir la fiche.
- L'**explication développée** doit définir les termes avant de les utiliser.
- Les **exemples** doivent être corrects, illustratifs et, si besoin, décryptés.
- Les **analogies** servent à comprendre, sans remplacer la définition technique.
- Ne copie pas les corrigés d'exercices, les textes entiers d'autrui ni les contenus protégés.
- Cite les sources pertinentes : documentations GNU, Git, Docker, langage C, etc.
- Évite d'ajouter des dépendances lourdes ou des services externes pour une fonction simple.
- N'ajoute jamais de token, mot de passe, donnée personnelle ou clé API.

## Tester avant une pull request

Avec Node.js 22 ou plus récent :

```bash
node scripts/verifier_site.mjs
```

Tu peux ouvrir `index.html` localement pour vérifier l'affichage, les fiches, le mode mobile, l'historique du navigateur et les fenêtres de cours.

## Publication

Les contributions ne sont **pas** publiées automatiquement sur le serveur. La personne qui maintient le site relit, fusionne puis déclenche le déploiement.
