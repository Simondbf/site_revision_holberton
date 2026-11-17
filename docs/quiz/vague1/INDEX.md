# Quiz Holberton — PR #19 : pointeurs, tableaux et structures

**494 questions candidates sur 93 notions, réparties en 2 thèmes : pointeurs/tableaux C et structures/typedef en C.**

> **BROUILLON NON VALIDÉ :** aucune question n'est en production, aucun corrigé n'est considéré validé sur le fond. Relecture indépendante de chaque option obligatoire.

## Périmètre après séparation des PR

La [PR #21](https://github.com/Simondbf/site_revision_holberton/pull/21) contient désormais les **779 autres questions**, vérifiées structurellement sur sa propre branche. La séparation conserve **1 273 questions en tout**, sans réutiliser les 25 questions abandonnées de la PR #14. Les corrections antérieures sur `do…while` ont été transférées à #21.

| Thème | Notions | Questions | Fichier Markdown | JSON |
|---|---:|---:|---|---|
| Pointeurs et tableaux C | 72 | 389 | [Lire](section-09-pointeurs-et-tableaux-c.md) | [Données](section-09-pointeurs-et-tableaux-c.json) |
| Structures et typedef en C | 21 | 105 | [Lire](section-16-structures-et-typedef-en-c.md) | [Données](section-16-structures-et-typedef-en-c.json) |
| **Total** | **93** | **494** | | |

**Questions complémentaires comprises dans les totaux :**

- [40 questions d'application](questions-application.md) ([JSON](questions-application.json)), toutes sur les pointeurs et tableaux.
- [82 questions techniques C](questions-c-techniques.md) ([JSON](questions-c-techniques.json)), liées aux pointeurs/tableaux/structures.

Les **372 questions structurées** (288 + 84) manquent encore de variété et de distracteurs crédibles pour une bonne partie. Aucune question ne doit être publiée sur la seule foi d'une CI verte.

## Suite du travail

- Vérifier chaque corrigé, les 4 options, les versions C, les exemples et les liens.
- Réduire les définitions recopiées, les distracteurs hors sujet et les clones de questions.
- Ajouter les questions sur `argc`/`argv` **après création des nouvelles fiches correspondantes par la PR #22**, en conservant des IDs stables, sans doublons.
- Garder la banque et les fiches nouvelles hors production jusqu'à accord du propriétaire, après tests.

[Protocole de relecture](RELECTURE_MULTI_IA.md) · [PR #19](https://github.com/Simondbf/site_revision_holberton/pull/19).
