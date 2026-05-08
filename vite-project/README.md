# Kasa

Projet React réalisé avec Vite dans le cadre de la formation OpenClassrooms.

L'application permet d'afficher une liste de logements et d'accéder à la page détail de chaque logement.

## Technologies utilisées

* React
* React Router
* Vite
* CSS
* Fetch API

## Installation du projet

Cloner le projet puis aller dans le dossier front-end :

```bash
cd vite-project
```

Installer les dépendances :

```bash
npm install
```

Lancer le front-end :

```bash
npm run dev
```

Le projet sera accessible sur :

```bash
http://localhost:5173
```

## Lancement du back-end

Depuis la racine du projet :

```bash
docker-compose up -d
```

Pour arrêter les conteneurs :

```bash
docker-compose down
```

Ou lancer le back-end manuellement :

```bash
cd backend
npm install
npm start
```

## Fonctionnalités principales

* Navigation avec React Router
* Page d'accueil avec les logements
* Page détail d'un logement
* Page d'erreur 404
* Slideshow des images
* Collapse réutilisable
* Appels API avec fetch

## Structure du projet

* `pages/` : pages principales de l'application
* `components/` : composants réutilisables
* `assets/` : images et logos
* `router.jsx` : configuration des routes
* `index.css` : styles globaux
