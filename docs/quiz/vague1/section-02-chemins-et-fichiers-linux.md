# Banque de revue — Chemins et fichiers Linux

36 questions candidates couvrant 9 notions. **Toutes les réponses sont des propositions à vérifier indépendamment** ; elles sont dérivées des fiches existantes et peuvent contenir des distracteurs ambigus. **Ne rien publier sur le site.**

## N02_000 — Racine /

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/1-racine)

### V1-N02_000-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Début de l’arborescence Linux. » ?

- **A ❌** Chemin relatif
- **B ✅** Racine /
- **C ❌** . / ..
- **D ❌** Chemin absolu

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/1-racine

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_000-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Racine / » ?

- **A ✅** Début de l’arborescence Linux.
- **B ❌** Part de /, indépendamment du répertoire actuel.
- **C ❌** Dossier courant / dossier parent.
- **D ❌** Dépend du répertoire actuel.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Début de l’arborescence Linux.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/1-racine

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_000-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Racine / » ?

- **A ❌** Avant une commande relative qui échoue, utilise pwd pour vérifier ton point de départ.
- **B ❌** Un chemin commençant par / ne dépend pas de la position courante.
- **C ❌** « . » vise le répertoire courant ; « .. » son parent. Un nom commençant par un point est généralement masqué par défaut.
- **D ✅** La racine / n'est pas le dossier /root : /root est généralement le dossier personnel de l'administrateur.

**Réponse candidate :** D · **Explication :** La fiche indique : La racine / n'est pas le dossier /root : /root est généralement le dossier personnel de l'administrateur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/1-racine

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_000-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Racine / » ?

- **A ✅** La racine / n'est pas le dossier /root : /root est généralement le dossier personnel de l'administrateur.
- **B ❌** EOF est une valeur entière spéciale signalant la fin d'un flux ou une erreur ; getchar retourne un int et scanf peut aussi renvoyer EOF.
- **C ✅** Début de l’arborescence Linux.
- **D ❌** Une fonction de type int * renvoie une adresse ou NULL ; l’objet pointé doit encore exister lors de son utilisation.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/1-racine

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N02_001 — ~

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/2-)

### V1-N02_001-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dossier personnel de l’utilisateur. » ?

- **A ❌** cat / file / find / man
- **B ❌** Racine /
- **C ✅** ~
- **D ❌** cp / mv / rm

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/2-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_001-02 · description

**Une seule bonne réponse**

Quelle description caractérise « ~ » ?

- **A ❌** Début de l’arborescence Linux.
- **B ✅** Dossier personnel de l’utilisateur.
- **C ❌** Copier / déplacer-renommer / supprimer.
- **D ❌** Afficher le contenu / type du fichier / rechercher / consulter le manuel.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Dossier personnel de l’utilisateur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/2-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_001-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « ~ » ?

- **A ❌** file tente d'identifier le format ; find cherche des chemins ; man explique comment employer une commande.
- **B ❌** rm supprime généralement sans corbeille. Vérifie le nom et le chemin, surtout avec -r.
- **C ✅** Le tilde est développé par le shell dans les contextes prévus : dans des guillemets simples ou doubles, « ~ » reste du texte.
- **D ❌** La racine / n'est pas le dossier /root : /root est généralement le dossier personnel de l'administrateur.

**Réponse candidate :** C · **Explication :** La fiche indique : Le tilde est développé par le shell dans les contextes prévus : dans des guillemets simples ou doubles, « ~ » reste du texte.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/2-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_001-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « ~ » ?

- **A ✅** Dossier personnel de l’utilisateur.
- **B ❌** Branche de développement / fusion.
- **C ✅** Le tilde est développé par le shell dans les contextes prévus : dans des guillemets simples ou doubles, « ~ » reste du texte.
- **D ❌** Un prototype annonce une signature ; la définition contient le corps de la fonction.

**Réponse candidate :** A, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/2-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N02_002 — . / ..

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/3-)

### V1-N02_002-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dossier courant / dossier parent. » ?

- **A ❌** pwd / cd / ls
- **B ❌** Chemin relatif
- **C ❌** mkdir / touch
- **D ✅** . / ..

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/3-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_002-02 · description

**Une seule bonne réponse**

Quelle description caractérise « . / .. » ?

- **A ✅** Dossier courant / dossier parent.
- **B ❌** Créer un dossier / créer un fichier vide ou actualiser sa date.
- **C ❌** Afficher le dossier actuel / changer de dossier / lister les fichiers.
- **D ❌** Dépend du répertoire actuel.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Dossier courant / dossier parent.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/3-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_002-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « . / .. » ?

- **A ❌** Avant une commande relative qui échoue, utilise pwd pour vérifier ton point de départ.
- **B ✅** « . » vise le répertoire courant ; « .. » son parent. Un nom commençant par un point est généralement masqué par défaut.
- **C ❌** touch n'écrit pas de texte dans un fichier ; mkdir -p peut créer plusieurs niveaux de répertoires.
- **D ❌** pwd te situe, cd te déplace et ls liste le contenu : aucun des trois ne supprime de fichier.

**Réponse candidate :** B · **Explication :** La fiche indique : « . » vise le répertoire courant ; « .. » son parent. Un nom commençant par un point est généralement masqué par défaut.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/3-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_002-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « . / .. » ?

- **A ❌** Variable définie dans le Shell en cours, non nécessairement exportée.
- **B ❌** Liste des dossiers recherchés pour trouver une commande, séparés par :.
- **C ✅** « . » vise le répertoire courant ; « .. » son parent. Un nom commençant par un point est généralement masqué par défaut.
- **D ✅** Dossier courant / dossier parent.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/3-

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N02_003 — Chemin absolu

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/4-chemin-absolu)

### V1-N02_003-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Part de /, indépendamment du répertoire actuel. » ?

- **A ✅** Chemin absolu
- **B ❌** ~
- **C ❌** Racine /
- **D ❌** . / ..

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/4-chemin-absolu

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_003-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Chemin absolu » ?

- **A ❌** Dossier courant / dossier parent.
- **B ❌** Dossier personnel de l’utilisateur.
- **C ❌** Début de l’arborescence Linux.
- **D ✅** Part de /, indépendamment du répertoire actuel.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Part de /, indépendamment du répertoire actuel.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/4-chemin-absolu

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_003-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Chemin absolu » ?

- **A ✅** Un chemin commençant par / ne dépend pas de la position courante.
- **B ❌** « . » vise le répertoire courant ; « .. » son parent. Un nom commençant par un point est généralement masqué par défaut.
- **C ❌** Le tilde est développé par le shell dans les contextes prévus : dans des guillemets simples ou doubles, « ~ » reste du texte.
- **D ❌** La racine / n'est pas le dossier /root : /root est généralement le dossier personnel de l'administrateur.

**Réponse candidate :** A · **Explication :** La fiche indique : Un chemin commençant par / ne dépend pas de la position courante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/4-chemin-absolu

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_003-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Chemin absolu » ?

- **A ✅** Part de /, indépendamment du répertoire actuel.
- **B ❌** Noyau du système d’exploitation ; interface entre logiciels et ressources matérielles.
- **C ❌** Une struct peut contenir un pointeur vers son propre type, par exemple struct noeud *suivant.
- **D ✅** Un chemin commençant par / ne dépend pas de la position courante.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/4-chemin-absolu

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N02_004 — Chemin relatif

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/5-chemin-relatif)

### V1-N02_004-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Dépend du répertoire actuel. » ?

- **A ❌** cat / file / find / man
- **B ✅** Chemin relatif
- **C ❌** mkdir / touch
- **D ❌** cp / mv / rm

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/5-chemin-relatif

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_004-02 · description

**Une seule bonne réponse**

Quelle description caractérise « Chemin relatif » ?

- **A ❌** Copier / déplacer-renommer / supprimer.
- **B ❌** Créer un dossier / créer un fichier vide ou actualiser sa date.
- **C ✅** Dépend du répertoire actuel.
- **D ❌** Afficher le contenu / type du fichier / rechercher / consulter le manuel.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Dépend du répertoire actuel.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/5-chemin-relatif

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_004-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « Chemin relatif » ?

- **A ❌** file tente d'identifier le format ; find cherche des chemins ; man explique comment employer une commande.
- **B ❌** touch n'écrit pas de texte dans un fichier ; mkdir -p peut créer plusieurs niveaux de répertoires.
- **C ❌** rm supprime généralement sans corbeille. Vérifie le nom et le chemin, surtout avec -r.
- **D ✅** Avant une commande relative qui échoue, utilise pwd pour vérifier ton point de départ.

**Réponse candidate :** D · **Explication :** La fiche indique : Avant une commande relative qui échoue, utilise pwd pour vérifier ton point de départ.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/5-chemin-relatif

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_004-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « Chemin relatif » ?

- **A ✅** Avant une commande relative qui échoue, utilise pwd pour vérifier ton point de départ.
- **B ✅** Dépend du répertoire actuel.
- **C ❌** Le préprocesseur prépare le texte, le compilateur produit du code, l’assembleur génère des objets, et l’éditeur de liens crée l’exécutable.
- **D ❌** Retirer 1, puis utiliser la nouvelle valeur.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/5-chemin-relatif

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N02_005 — pwd / cd / ls

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/6-pwd-cd-ls)

### V1-N02_005-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Afficher le dossier actuel / changer de dossier / lister les fichiers. » ?

- **A ✅** pwd / cd / ls
- **B ❌** Chemin relatif
- **C ❌** Chemin absolu
- **D ❌** . / ..

**Réponse candidate :** A · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/6-pwd-cd-ls

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_005-02 · description

**Une seule bonne réponse**

Quelle description caractérise « pwd / cd / ls » ?

- **A ❌** Dossier courant / dossier parent.
- **B ✅** Afficher le dossier actuel / changer de dossier / lister les fichiers.
- **C ❌** Dépend du répertoire actuel.
- **D ❌** Part de /, indépendamment du répertoire actuel.

**Réponse candidate :** B · **Explication :** Le résumé de la fiche indique : Afficher le dossier actuel / changer de dossier / lister les fichiers.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/6-pwd-cd-ls

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_005-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « pwd / cd / ls » ?

- **A ❌** Un chemin commençant par / ne dépend pas de la position courante.
- **B ❌** « . » vise le répertoire courant ; « .. » son parent. Un nom commençant par un point est généralement masqué par défaut.
- **C ✅** pwd te situe, cd te déplace et ls liste le contenu : aucun des trois ne supprime de fichier.
- **D ❌** Avant une commande relative qui échoue, utilise pwd pour vérifier ton point de départ.

**Réponse candidate :** C · **Explication :** La fiche indique : pwd te situe, cd te déplace et ls liste le contenu : aucun des trois ne supprime de fichier.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/6-pwd-cd-ls

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_005-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « pwd / cd / ls » ?

- **A ❌** Un tampon peut être de taille fixe, avoir une durée de vie statique ou être alloué dynamiquement : ces propriétés sont différentes.
- **B ✅** pwd te situe, cd te déplace et ls liste le contenu : aucun des trois ne supprime de fichier.
- **C ✅** Afficher le dossier actuel / changer de dossier / lister les fichiers.
- **D ❌** Un raw pointer est un pointeur ordinaire tel que int * ou char * : il contient une adresse, sans garantie automatique de validité ni gestion de propriété.

**Réponse candidate :** B, C · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/6-pwd-cd-ls

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N02_006 — mkdir / touch

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/7-mkdir-touch)

### V1-N02_006-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Créer un dossier / créer un fichier vide ou actualiser sa date. » ?

- **A ❌** ~
- **B ❌** Racine /
- **C ❌** cat / file / find / man
- **D ✅** mkdir / touch

**Réponse candidate :** D · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/7-mkdir-touch

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_006-02 · description

**Une seule bonne réponse**

Quelle description caractérise « mkdir / touch » ?

- **A ✅** Créer un dossier / créer un fichier vide ou actualiser sa date.
- **B ❌** Dossier personnel de l’utilisateur.
- **C ❌** Début de l’arborescence Linux.
- **D ❌** Afficher le contenu / type du fichier / rechercher / consulter le manuel.

**Réponse candidate :** A · **Explication :** Le résumé de la fiche indique : Créer un dossier / créer un fichier vide ou actualiser sa date.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/7-mkdir-touch

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_006-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « mkdir / touch » ?

- **A ❌** Le tilde est développé par le shell dans les contextes prévus : dans des guillemets simples ou doubles, « ~ » reste du texte.
- **B ❌** file tente d'identifier le format ; find cherche des chemins ; man explique comment employer une commande.
- **C ✅** touch n'écrit pas de texte dans un fichier ; mkdir -p peut créer plusieurs niveaux de répertoires.
- **D ❌** La racine / n'est pas le dossier /root : /root est généralement le dossier personnel de l'administrateur.

**Réponse candidate :** C · **Explication :** La fiche indique : touch n'écrit pas de texte dans un fichier ; mkdir -p peut créer plusieurs niveaux de répertoires.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/7-mkdir-touch

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_006-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « mkdir / touch » ?

- **A ❌** Pour échanger deux cases, on conserve provisoirement l'une des valeurs dans une variable temporaire.
- **B ❌** Une fuite mémoire (memory leak) survient lorsqu’un bloc alloué n’est pas libéré et devient inaccessible ; les fuites répétées épuisent la mémoire.
- **C ✅** touch n'écrit pas de texte dans un fichier ; mkdir -p peut créer plusieurs niveaux de répertoires.
- **D ✅** Créer un dossier / créer un fichier vide ou actualiser sa date.

**Réponse candidate :** C, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/7-mkdir-touch

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N02_007 — cp / mv / rm

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/8-cp-mv-rm)

### V1-N02_007-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Copier / déplacer-renommer / supprimer. » ?

- **A ❌** pwd / cd / ls
- **B ❌** Chemin relatif
- **C ✅** cp / mv / rm
- **D ❌** mkdir / touch

**Réponse candidate :** C · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/8-cp-mv-rm

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_007-02 · description

**Une seule bonne réponse**

Quelle description caractérise « cp / mv / rm » ?

- **A ❌** Créer un dossier / créer un fichier vide ou actualiser sa date.
- **B ❌** Dépend du répertoire actuel.
- **C ❌** Afficher le dossier actuel / changer de dossier / lister les fichiers.
- **D ✅** Copier / déplacer-renommer / supprimer.

**Réponse candidate :** D · **Explication :** Le résumé de la fiche indique : Copier / déplacer-renommer / supprimer.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/8-cp-mv-rm

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_007-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « cp / mv / rm » ?

- **A ✅** rm supprime généralement sans corbeille. Vérifie le nom et le chemin, surtout avec -r.
- **B ❌** pwd te situe, cd te déplace et ls liste le contenu : aucun des trois ne supprime de fichier.
- **C ❌** touch n'écrit pas de texte dans un fichier ; mkdir -p peut créer plusieurs niveaux de répertoires.
- **D ❌** Avant une commande relative qui échoue, utilise pwd pour vérifier ton point de départ.

**Réponse candidate :** A · **Explication :** La fiche indique : rm supprime généralement sans corbeille. Vérifie le nom et le chemin, surtout avec -r.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/8-cp-mv-rm

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_007-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « cp / mv / rm » ?

- **A ✅** Copier / déplacer-renommer / supprimer.
- **B ❌** Variable dont la valeur est une adresse mémoire. Exemple : int *p; déclare un pointeur vers un int.
- **C ❌** int *p pointe vers un int ; char *q pointe vers un char. Le type sert notamment à interpréter les valeurs et à avancer dans un tableau.
- **D ✅** rm supprime généralement sans corbeille. Vérifie le nom et le chemin, surtout avec -r.

**Réponse candidate :** A, D · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/8-cp-mv-rm

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

## N02_008 — cat / file / find / man

[Fiche de révision](https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/9-cat-file-find-man)

### V1-N02_008-01 · definition

**Une seule bonne réponse**

À quelle notion correspond la définition suivante : « Afficher le contenu / type du fichier / rechercher / consulter le manuel. » ?

- **A ❌** ~
- **B ✅** cat / file / find / man
- **C ❌** Chemin absolu
- **D ❌** . / ..

**Réponse candidate :** B · **Explication :** La définition est extraite du résumé de la fiche correspondante.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/9-cat-file-find-man

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_008-02 · description

**Une seule bonne réponse**

Quelle description caractérise « cat / file / find / man » ?

- **A ❌** Dossier courant / dossier parent.
- **B ❌** Dossier personnel de l’utilisateur.
- **C ✅** Afficher le contenu / type du fichier / rechercher / consulter le manuel.
- **D ❌** Part de /, indépendamment du répertoire actuel.

**Réponse candidate :** C · **Explication :** Le résumé de la fiche indique : Afficher le contenu / type du fichier / rechercher / consulter le manuel.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/9-cat-file-find-man

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_008-03 · vigilance

**Une seule bonne réponse**

Quel point à retenir est directement associé à « cat / file / find / man » ?

- **A ❌** « . » vise le répertoire courant ; « .. » son parent. Un nom commençant par un point est généralement masqué par défaut.
- **B ❌** Le tilde est développé par le shell dans les contextes prévus : dans des guillemets simples ou doubles, « ~ » reste du texte.
- **C ❌** Un chemin commençant par / ne dépend pas de la position courante.
- **D ✅** file tente d'identifier le format ; find cherche des chemins ; man explique comment employer une commande.

**Réponse candidate :** D · **Explication :** La fiche indique : file tente d'identifier le format ; find cherche des chemins ; man explique comment employer une commande.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/9-cat-file-find-man

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

### V1-N02_008-04 · synthese

**Plusieurs bonnes réponses**

Quelles affirmations concernent directement « cat / file / find / man » ?

- **A ✅** file tente d'identifier le format ; find cherche des chemins ; man explique comment employer une commande.
- **B ✅** Afficher le contenu / type du fichier / rechercher / consulter le manuel.
- **C ❌** Dialecte C89 avec extensions GNU. Pour rester compatible C89 strict, déclarer les variables avant les instructions.
- **D ❌** Termine immédiatement une fonction, en renvoyant une valeur si son type de retour le prévoit.

**Réponse candidate :** A, B · **Explication :** Les affirmations retenues reprennent la définition et la précision pédagogique de la fiche. Les autres propositions renvoient à des notions différentes ; ce choix doit être contrôlé par un relecteur.

**Sources :** https://revision-hbtn.soleiljaune.be/#cours/chemins-et-fichiers-linux/9-cat-file-find-man

**Revue IA :** ☐ Accepter ☐ Corriger ☐ Ambigu ☐ Rejeter

---

