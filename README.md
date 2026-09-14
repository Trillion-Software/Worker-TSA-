# Worker TSA

Application qui connecte les prestataires de services aux clients.
*Created by Trillion Software.*

## Structure du projet (tout à la racine, sans dossier)

- index.html                     -> Page 1 — Écran de démarrage (splash)
- page2-connexion.html           -> Page 2 — Connexion
- page3-choix-profil.html        -> Page 3 — Choix du profil (Client / Prestataire)
- page4-profil-prestataire.html  -> Page 4 — Création du profil prestataire
- style.css                      -> Styles partagés par toutes les pages
- main.js                        -> Scripts partagés (formulaires, sélection, uploads)
- logo.png                       -> Logo Worker TSA (fond transparent)
- splash-bg.png                  -> Fond de l'écran de démarrage
- auth-bg.jpg                    -> Fond de l'écran de connexion
- firebase-config.js             -> Configuration Firebase (à compléter)
- firebase.json                  -> Configuration Firebase Hosting
- .firebaserc                    -> Identifiant du projet Firebase (à compléter)

## Règles métier

- **Client** : crée un compte, valide son profil lui-même et gratuitement, et consulte les services disponibles. Il ne peut pas proposer de services.
- **Prestataire de services** : crée un profil détaillé (domaine, spécialité, documents, etc.). Un prestataire peut aussi agir comme client (double rôle).

## Mettre en ligne sur GitHub

1. Crée un nouveau repository sur GitHub (ex : worker-tsa).
2. Glisse-déposes TOUS ces fichiers directement à la racine du repository (aucun dossier à créer, tout est déjà à plat).
3. Commit + push.

## Déployer avec Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

Avant de déployer :
1. Crée un projet sur console.firebase.google.com
2. Remplace les valeurs dans .firebaserc (nom du projet) et firebase-config.js (clés SDK).
3. Active Firebase Authentication (Email/Mot de passe), Firestore et Cloud Storage selon les besoins des pages suivantes.

## Pages à venir

D'autres pages seront ajoutées au fur et à mesure, toujours à plat, toujours en réutilisant style.css et main.js.
