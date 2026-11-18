# Quiz Holberton — PR #19 : pointeurs, tableaux et structures

**521 questions candidates sur 98 notions, réparties en 2 thèmes : pointeurs/tableaux C et structures/typedef en C.**

> **BROUILLON NON VALIDÉ :** aucune question n'est en production, aucun corrigé n'est considéré validé sur le fond. Relecture indépendante de chaque option obligatoire.

## Périmètre après séparation des PR

La [PR #21](https://github.com/Simondbf/site_revision_holberton/pull/21) conserve les **779 autres questions initiales**, auxquelles cinq questions ciblées sur les avertissements GCC ont été ajoutées (**784 au total**). Les 1 273 questions initiales sont donc conservées, complétées par 25 questions `argc`/`argv` en #19, puis par les sept nouvelles questions de cette ressource (deux en #19 et cinq en #21). Le total candidat combiné atteint **1 305 questions**, non validées sur le fond.

| Thème | Notions | Questions | Fichier Markdown | JSON |
|---|---:|---:|---|---|
| Pointeurs et tableaux C | 77 | 416 | [Lire](section-09-pointeurs-et-tableaux-c.md) | [Données](section-09-pointeurs-et-tableaux-c.json) |
| Structures et typedef en C | 21 | 105 | [Lire](section-16-structures-et-typedef-en-c.md) | [Données](section-16-structures-et-typedef-en-c.json) |
| **Total** | **98** | **521** | | |

**Questions complémentaires comprises dans les totaux :**

- [40 questions d'application](questions-application.md) ([JSON](questions-application.json)), toutes sur les pointeurs et tableaux.
- [82 questions techniques C](questions-c-techniques.md) ([JSON](questions-c-techniques.json)), liées aux pointeurs/tableaux/structures.

Les **399 questions structurées** (315 + 84) manquent encore de variété et de distracteurs crédibles pour une bonne partie. Aucune question ne doit être publiée sur la seule foi d'une CI verte.

## Nouvelle ressource : variables inutilisées

Deux questions ciblées sur les pointeurs locaux et les paramètres de `main` non utilisés. [Documentation de la ressource et des essais GNU89](SOURCES_VARIABLES_INUTILISEES.md). Elles demeurent **à vérifier indépendamment** ; aucun simple contrôle GCC ne valide la pédagogie des distracteurs.

## Suite du travail

- Vérifier chaque corrigé, les 4 options, les versions C, les exemples et les liens.
- Réduire les définitions recopiées, les distracteurs hors sujet et les clones de questions.
- Les 25 nouvelles questions sur `argc`/`argv` renvoient aux cinq fiches de la **PR #22 fusionnée le 18 novembre 2026** ; vérifier leurs liens avant publication de la banque.
- Garder la banque et les fiches nouvelles hors production jusqu'à accord du propriétaire, après tests.

[Protocole de relecture](RELECTURE_MULTI_IA.md) · [PR #19](https://github.com/Simondbf/site_revision_holberton/pull/19).
