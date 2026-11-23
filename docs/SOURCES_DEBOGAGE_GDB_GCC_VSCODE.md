# Sources — Débogage C avec GCC, GDB et Visual Studio Code

## Liens transmis pour Holberton

1. **GDB, documentation officielle (GNU / Sourceware)** — https://www.sourceware.org/gdb/documentation/ — manuels de référence GDB, points d'arrêt, exécution, inspection des variables, pile d'appels.
2. **GCC, Debugging Options** — https://gcc.gnu.org/onlinedocs/gcc/Debugging-Options.html — option `-g` pour les symboles de débogage, comportement des optimisations, notamment `-Og`.
3. **Visual Studio Code, Debug C++ (C/C++)** — https://code.visualstudio.com/docs/cpp/cpp-debug — prise en charge de GDB sous Linux, points d'arrêt conditionnels, inspection des variables, configuration du débogueur.

La documentation officielle GDB est aussi directement consultable sous https://sourceware.org/gdb/current/onlinedocs/gdb.html/ .

## Intégration pédagogique proposée

Cinq fiches ajoutées **à la fin du chapitre « Qualité et méthode en C »**, sans réordonner ni renommer les fiches existantes :

- `14:9` — gcc -g : préparer le programme ;
- `14:10` — GDB : lancer et définir un point d'arrêt ;
- `14:11` — GDB : next / step / continue ;
- `14:12` — GDB : print / info locals / backtrace ;
- `14:13` — VS Code : utiliser l'interface de GDB.

Les fiches sont des références générales pour observer un programme **pendant son exécution**, et non des solutions à un exercice particulier. Elles mentionnent un exemple de configuration Linux/WSL de VS Code ; son chemin GDB et le binaire doivent être adaptés à l'environnement local.

## Vérification

- Sources officielles contrôlées le 23 novembre 2026.
- Le manuel GDB peut évoluer : pointer vers sa page de documentation générale comme ressource de référence.
- Aucun quiz ajouté automatiquement à partir de ces liens ; une banque de questions exigerait une revue distincte.
- Aucune modification de l'API, des comptes, des ports ou de la configuration du VPS.
