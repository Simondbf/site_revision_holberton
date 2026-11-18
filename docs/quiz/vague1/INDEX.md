# PR #19 — Banque de quiz : pointeurs, tableaux et structures

**315 questions candidates sur 98 notions.** Aucune question n'est encore publiée par le moteur du site ; tous les statuts restent « a_verifier ».

## Répartition après révision du 18 novembre 2026

| Thème | Notions | Questions (applications comprises) | JSON | Markdown |
|---|---:|---:|---|---|
| Pointeurs et tableaux C | 77 | 252 | [Données](section-09-pointeurs-et-tableaux-c.json) | [Relecture](section-09-pointeurs-et-tableaux-c.md) |
| Structures et typedef C | 21 | 63 | [Données](section-16-structures-et-typedef-en-c.json) | [Relecture](section-16-structures-et-typedef-en-c.md) |
| **Total** | **98** | **315** | | |

Le total comprend 213 questions structurées (93 reconnaissances de notion, 93 QCM conceptuels et 27 questions spécialisées), [82 questions techniques](questions-c-techniques.md), et [20 applications](questions-application.md).

## Changements réalisés

- Suppression de 186 questions de type « description » et « vigilance » qui copiaient les mêmes définitions et notes des fiches.
- Remplacement de 20 des 40 applications numériques quasi identiques par une sélection plus concise et de nouveaux scénarios sur les tableaux, les pointeurs et les chaînes.
- Refonte de 93 questions de synthèse, avec des contre-sens portant sur la même notion : [186 propositions erronées à contre-vérifier](CONTRESENS_AUDIT_93_NOTIONS.json).
- Les QCM ont maintenant quatre ou cinq options et peuvent comporter deux, trois ou quatre bonnes réponses, sans en annoncer le nombre exact.
- Correction de plusieurs cas techniques : caractère NUL parasite, calcul de borne size_t adapté à GNU89, contrôle après malloc et durée de vie des objets.
- Consigne « une seule réponse » ou « plusieurs réponses » explicite dans les énoncés JSON et Markdown.

## État de validation

Les corrections automatiques de cohérence ne constituent pas une validation de fond. Les 93 nouveaux QCM et leurs distracteurs, les cas subtils GNU89 et les éventuels biais de longueur restent soumis à une relecture contradictoire indépendante. Les questions de reconnaissance servent d'introduction, non d'évaluation approfondie à elles seules.

Les cinq fiches argc/argv ont été intégrées via la [PR #22](https://github.com/Simondbf/site_revision_holberton/pull/22), fusionnée le 18 novembre 2026. Les [784 autres questions de la PR #21](https://github.com/Simondbf/site_revision_holberton/pull/21) sont un lot indépendant, toujours en brouillon.

Le volume visé à long terme reste 50 à 100 questions réellement variées par notion en moyenne ; la présente banque n'atteint pas cet objectif et ne prétend pas l'atteindre.

[Protocole de relecture](RELECTURE_MULTI_IA.md) · [Références sur les variables inutilisées](SOURCES_VARIABLES_INUTILISEES.md)

**Ne pas mettre le quiz en production ni fusionner sans accord explicite du propriétaire.**
