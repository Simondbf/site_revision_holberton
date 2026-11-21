# Première vague — Chemins et fichiers Linux

**36 questions candidates concernant ce chapitre.** La répartition des réponses a été rééquilibrée pour éviter les biais de position. Ces réponses restent des propositions **non validées sur le fond** ; vérifier chaque distracteur et les sources avant publication.

## N02_000 — Racine /

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/1-racine)

### V1-N02_000-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Début de l’arborescence Linux. » ?

- **A ❌** Chemin absolu
- **B ❌** . / ..
- **C ✅** Racine /
- **D ❌** Chemin relatif

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/1-racine

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_000-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Racine / » ?

- **A ❌** Dépend du répertoire actuel.
- **B ❌** Part de /, indépendamment du répertoire actuel.
- **C ✅** Début de l’arborescence Linux.
- **D ❌** Dossier courant / dossier parent.

**Réponse proposée :** C. Le résumé de la fiche indique : Début de l’arborescence Linux.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/1-racine

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_000-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Racine / » ?

- **A ❌** Avant une commande relative qui échoue, utilise pwd pour vérifier ton point de départ.
- **B ✅** La racine / n'est pas le dossier /root : /root est généralement le dossier personnel de l'administrateur.
- **C ❌** « . » vise le répertoire courant ; « .. » son parent. Un nom commençant par un point est généralement masqué par défaut.
- **D ❌** Un chemin commençant par / ne dépend pas de la position courante.

**Réponse proposée :** B. La fiche indique : La racine / n'est pas le dossier /root : /root est généralement le dossier personnel de l'administrateur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/1-racine

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_000-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Racine / » ?

- **A ❌** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.
- **B ✅** La racine / n'est pas le dossier /root : /root est généralement le dossier personnel de l'administrateur.
- **C ❌** Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation.
- **D ✅** Début de l’arborescence Linux.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/1-racine

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N02_001 — ~

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/2-)

### V1-N02_001-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dossier personnel de l’utilisateur. » ?

- **A ✅** ~
- **B ❌** cat / file / find / man
- **C ❌** Racine /
- **D ❌** cp / mv / rm

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/2-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_001-02 — description

**Une seule bonne réponse**

Quelle description caractérise « ~ » ?

- **A ❌** Afficher le contenu / type du fichier / rechercher / consulter le manuel.
- **B ❌** Début de l’arborescence Linux.
- **C ❌** Copier / déplacer-renommer / supprimer.
- **D ✅** Dossier personnel de l’utilisateur.

**Réponse proposée :** D. Le résumé de la fiche indique : Dossier personnel de l’utilisateur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/2-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_001-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « ~ » ?

- **A ❌** La racine / n'est pas le dossier /root : /root est généralement le dossier personnel de l'administrateur.
- **B ❌** rm supprime généralement sans corbeille. Vérifie le nom et le chemin, surtout avec -r.
- **C ✅** Le tilde est développé par le shell dans les contextes prévus : dans des guillemets simples ou doubles, « ~ » reste du texte.
- **D ❌** file tente d'identifier le format ; find cherche des chemins ; man explique comment employer une commande.

**Réponse proposée :** C. La fiche indique : Le tilde est développé par le shell dans les contextes prévus : dans des guillemets simples ou doubles, « ~ » reste du texte.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/2-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_001-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « ~ » ?

- **A ✅** Le tilde est développé par le shell dans les contextes prévus : dans des guillemets simples ou doubles, « ~ » reste du texte.
- **B ❌** Branche de développement / fusion.
- **C ❌** Un prototype annonce une signature ; la définition contient le corps de la fonction.
- **D ✅** Dossier personnel de l’utilisateur.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/2-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N02_002 — . / ..

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/3-)

### V1-N02_002-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dossier courant / dossier parent. » ?

- **A ✅** . / ..
- **B ❌** pwd / cd / ls
- **C ❌** Chemin relatif
- **D ❌** mkdir / touch

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/3-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_002-02 — description

**Une seule bonne réponse**

Quelle description caractérise « . / .. » ?

- **A ❌** Afficher le dossier actuel / changer de dossier / lister les fichiers.
- **B ❌** Dépend du répertoire actuel.
- **C ❌** Créer un dossier / créer un fichier vide ou actualiser sa date.
- **D ✅** Dossier courant / dossier parent.

**Réponse proposée :** D. Le résumé de la fiche indique : Dossier courant / dossier parent.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/3-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_002-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « . / .. » ?

- **A ❌** pwd te situe, cd te déplace et ls liste le contenu : aucun des trois ne supprime de fichier.
- **B ❌** Avant une commande relative qui échoue, utilise pwd pour vérifier ton point de départ.
- **C ✅** « . » vise le répertoire courant ; « .. » son parent. Un nom commençant par un point est généralement masqué par défaut.
- **D ❌** touch n'écrit pas de texte dans un fichier ; mkdir -p peut créer plusieurs niveaux de répertoires.

**Réponse proposée :** C. La fiche indique : « . » vise le répertoire courant ; « .. » son parent. Un nom commençant par un point est généralement masqué par défaut.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/3-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_002-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « . / .. » ?

- **A ✅** « . » vise le répertoire courant ; « .. » son parent. Un nom commençant par un point est généralement masqué par défaut.
- **B ❌** Variable définie dans le Shell en cours, non nécessairement exportée.
- **C ❌** Liste des dossiers recherchés pour trouver une commande, séparés par :.
- **D ✅** Dossier courant / dossier parent.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/3-

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N02_003 — Chemin absolu

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/4-chemin-absolu)

### V1-N02_003-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Part de /, indépendamment du répertoire actuel. » ?

- **A ✅** Chemin absolu
- **B ❌** ~
- **C ❌** Racine /
- **D ❌** . / ..

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/4-chemin-absolu

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_003-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Chemin absolu » ?

- **A ✅** Part de /, indépendamment du répertoire actuel.
- **B ❌** Dossier courant / dossier parent.
- **C ❌** Début de l’arborescence Linux.
- **D ❌** Dossier personnel de l’utilisateur.

**Réponse proposée :** A. Le résumé de la fiche indique : Part de /, indépendamment du répertoire actuel.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/4-chemin-absolu

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_003-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Chemin absolu » ?

- **A ❌** La racine / n'est pas le dossier /root : /root est généralement le dossier personnel de l'administrateur.
- **B ❌** Le tilde est développé par le shell dans les contextes prévus : dans des guillemets simples ou doubles, « ~ » reste du texte.
- **C ❌** « . » vise le répertoire courant ; « .. » son parent. Un nom commençant par un point est généralement masqué par défaut.
- **D ✅** Un chemin commençant par / ne dépend pas de la position courante.

**Réponse proposée :** D. La fiche indique : Un chemin commençant par / ne dépend pas de la position courante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/4-chemin-absolu

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_003-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Chemin absolu » ?

- **A ❌** Noyau du système d’exploitation ; interface entre logiciels et ressources matérielles.
- **B ✅** Part de /, indépendamment du répertoire actuel.
- **C ❌** Une struct peut contenir un pointeur vers son propre type, par exemple struct noeud *suivant.
- **D ✅** Un chemin commençant par / ne dépend pas de la position courante.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/4-chemin-absolu

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N02_004 — Chemin relatif

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/5-chemin-relatif)

### V1-N02_004-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dépend du répertoire actuel. » ?

- **A ❌** mkdir / touch
- **B ✅** Chemin relatif
- **C ❌** cp / mv / rm
- **D ❌** cat / file / find / man

**Réponse proposée :** B. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/5-chemin-relatif

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_004-02 — description

**Une seule bonne réponse**

Quelle description caractérise « Chemin relatif » ?

- **A ❌** Afficher le contenu / type du fichier / rechercher / consulter le manuel.
- **B ✅** Dépend du répertoire actuel.
- **C ❌** Copier / déplacer-renommer / supprimer.
- **D ❌** Créer un dossier / créer un fichier vide ou actualiser sa date.

**Réponse proposée :** B. Le résumé de la fiche indique : Dépend du répertoire actuel.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/5-chemin-relatif

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_004-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Chemin relatif » ?

- **A ❌** rm supprime généralement sans corbeille. Vérifie le nom et le chemin, surtout avec -r.
- **B ✅** Avant une commande relative qui échoue, utilise pwd pour vérifier ton point de départ.
- **C ❌** touch n'écrit pas de texte dans un fichier ; mkdir -p peut créer plusieurs niveaux de répertoires.
- **D ❌** file tente d'identifier le format ; find cherche des chemins ; man explique comment employer une commande.

**Réponse proposée :** B. La fiche indique : Avant une commande relative qui échoue, utilise pwd pour vérifier ton point de départ.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/5-chemin-relatif

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_004-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Chemin relatif » ?

- **A ✅** Avant une commande relative qui échoue, utilise pwd pour vérifier ton point de départ.
- **B ❌** Le préprocesseur prépare le texte, le compilateur produit du code, l’assembleur génère des objets, et l’éditeur de liens crée l’exécutable.
- **C ❌** Retirer 1, puis utiliser la nouvelle valeur.
- **D ✅** Dépend du répertoire actuel.

**Réponse proposée :** A, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/5-chemin-relatif

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N02_005 — pwd / cd / ls

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/6-pwd-cd-ls)

### V1-N02_005-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Afficher le dossier actuel / changer de dossier / lister les fichiers. » ?

- **A ❌** . / ..
- **B ❌** Chemin relatif
- **C ✅** pwd / cd / ls
- **D ❌** Chemin absolu

**Réponse proposée :** C. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/6-pwd-cd-ls

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_005-02 — description

**Une seule bonne réponse**

Quelle description caractérise « pwd / cd / ls » ?

- **A ❌** Part de /, indépendamment du répertoire actuel.
- **B ❌** Dépend du répertoire actuel.
- **C ❌** Dossier courant / dossier parent.
- **D ✅** Afficher le dossier actuel / changer de dossier / lister les fichiers.

**Réponse proposée :** D. Le résumé de la fiche indique : Afficher le dossier actuel / changer de dossier / lister les fichiers.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/6-pwd-cd-ls

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_005-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « pwd / cd / ls » ?

- **A ❌** Avant une commande relative qui échoue, utilise pwd pour vérifier ton point de départ.
- **B ❌** Un chemin commençant par / ne dépend pas de la position courante.
- **C ❌** « . » vise le répertoire courant ; « .. » son parent. Un nom commençant par un point est généralement masqué par défaut.
- **D ✅** pwd te situe, cd te déplace et ls liste le contenu : aucun des trois ne supprime de fichier.

**Réponse proposée :** D. La fiche indique : pwd te situe, cd te déplace et ls liste le contenu : aucun des trois ne supprime de fichier.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/6-pwd-cd-ls

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_005-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « pwd / cd / ls » ?

- **A ✅** Afficher le dossier actuel / changer de dossier / lister les fichiers.
- **B ✅** pwd te situe, cd te déplace et ls liste le contenu : aucun des trois ne supprime de fichier.
- **C ❌** Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.
- **D ❌** Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/6-pwd-cd-ls

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N02_006 — mkdir / touch

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/7-mkdir-touch)

### V1-N02_006-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Créer un dossier / créer un fichier vide ou actualiser sa date. » ?

- **A ✅** mkdir / touch
- **B ❌** ~
- **C ❌** Racine /
- **D ❌** cat / file / find / man

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/7-mkdir-touch

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_006-02 — description

**Une seule bonne réponse**

Quelle description caractérise « mkdir / touch » ?

- **A ❌** Dossier personnel de l’utilisateur.
- **B ❌** Début de l’arborescence Linux.
- **C ❌** Afficher le contenu / type du fichier / rechercher / consulter le manuel.
- **D ✅** Créer un dossier / créer un fichier vide ou actualiser sa date.

**Réponse proposée :** D. Le résumé de la fiche indique : Créer un dossier / créer un fichier vide ou actualiser sa date.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/7-mkdir-touch

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_006-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « mkdir / touch » ?

- **A ❌** Le tilde est développé par le shell dans les contextes prévus : dans des guillemets simples ou doubles, « ~ » reste du texte.
- **B ✅** touch n'écrit pas de texte dans un fichier ; mkdir -p peut créer plusieurs niveaux de répertoires.
- **C ❌** file tente d'identifier le format ; find cherche des chemins ; man explique comment employer une commande.
- **D ❌** La racine / n'est pas le dossier /root : /root est généralement le dossier personnel de l'administrateur.

**Réponse proposée :** B. La fiche indique : touch n'écrit pas de texte dans un fichier ; mkdir -p peut créer plusieurs niveaux de répertoires.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/7-mkdir-touch

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_006-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « mkdir / touch » ?

- **A ❌** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.
- **B ✅** touch n'écrit pas de texte dans un fichier ; mkdir -p peut créer plusieurs niveaux de répertoires.
- **C ✅** Créer un dossier / créer un fichier vide ou actualiser sa date.
- **D ❌** Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.

**Réponse proposée :** B, C. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/7-mkdir-touch

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N02_007 — cp / mv / rm

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/8-cp-mv-rm)

### V1-N02_007-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Copier / déplacer-renommer / supprimer. » ?

- **A ✅** cp / mv / rm
- **B ❌** mkdir / touch
- **C ❌** Chemin relatif
- **D ❌** pwd / cd / ls

**Réponse proposée :** A. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/8-cp-mv-rm

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_007-02 — description

**Une seule bonne réponse**

Quelle description caractérise « cp / mv / rm » ?

- **A ✅** Copier / déplacer-renommer / supprimer.
- **B ❌** Dépend du répertoire actuel.
- **C ❌** Afficher le dossier actuel / changer de dossier / lister les fichiers.
- **D ❌** Créer un dossier / créer un fichier vide ou actualiser sa date.

**Réponse proposée :** A. Le résumé de la fiche indique : Copier / déplacer-renommer / supprimer.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/8-cp-mv-rm

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_007-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « cp / mv / rm » ?

- **A ❌** touch n'écrit pas de texte dans un fichier ; mkdir -p peut créer plusieurs niveaux de répertoires.
- **B ❌** Avant une commande relative qui échoue, utilise pwd pour vérifier ton point de départ.
- **C ❌** pwd te situe, cd te déplace et ls liste le contenu : aucun des trois ne supprime de fichier.
- **D ✅** rm supprime généralement sans corbeille. Vérifie le nom et le chemin, surtout avec -r.

**Réponse proposée :** D. La fiche indique : rm supprime généralement sans corbeille. Vérifie le nom et le chemin, surtout avec -r.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/8-cp-mv-rm

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_007-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « cp / mv / rm » ?

- **A ❌** int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.
- **B ✅** rm supprime généralement sans corbeille. Vérifie le nom et le chemin, surtout avec -r.
- **C ❌** Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int.
- **D ✅** Copier / déplacer-renommer / supprimer.

**Réponse proposée :** B, D. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/8-cp-mv-rm

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

## N02_008 — cat / file / find / man

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/9-cat-file-find-man)

### V1-N02_008-01 — definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Afficher le contenu / type du fichier / rechercher / consulter le manuel. » ?

- **A ❌** . / ..
- **B ❌** ~
- **C ❌** Chemin absolu
- **D ✅** cat / file / find / man

**Réponse proposée :** D. La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/9-cat-file-find-man

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_008-02 — description

**Une seule bonne réponse**

Quelle description caractérise « cat / file / find / man » ?

- **A ❌** Dossier courant / dossier parent.
- **B ❌** Dossier personnel de l’utilisateur.
- **C ❌** Part de /, indépendamment du répertoire actuel.
- **D ✅** Afficher le contenu / type du fichier / rechercher / consulter le manuel.

**Réponse proposée :** D. Le résumé de la fiche indique : Afficher le contenu / type du fichier / rechercher / consulter le manuel.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/9-cat-file-find-man

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_008-03 — vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « cat / file / find / man » ?

- **A ❌** « . » vise le répertoire courant ; « .. » son parent. Un nom commençant par un point est généralement masqué par défaut.
- **B ❌** Un chemin commençant par / ne dépend pas de la position courante.
- **C ✅** file tente d'identifier le format ; find cherche des chemins ; man explique comment employer une commande.
- **D ❌** Le tilde est développé par le shell dans les contextes prévus : dans des guillemets simples ou doubles, « ~ » reste du texte.

**Réponse proposée :** C. La fiche indique : file tente d'identifier le format ; find cherche des chemins ; man explique comment employer une commande.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/9-cat-file-find-man

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

### V1-N02_008-04 — synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « cat / file / find / man » ?

- **A ✅** file tente d'identifier le format ; find cherche des chemins ; man explique comment employer une commande.
- **B ✅** Afficher le contenu / type du fichier / rechercher / consulter le manuel.
- **C ❌** Dialecte C89 avec extensions GNU. Pour rester compatible C89 strict, déclarer les variables avant les instructions.
- **D ❌** Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.

**Réponse proposée :** A, B. Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/9-cat-file-find-man

**Revue externe :** ☐ correcte ☐ ambiguë ☐ à reformuler ☐ rejetée

---

