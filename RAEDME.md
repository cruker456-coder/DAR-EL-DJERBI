# Dar El Djerbi — Site Web d'un Restaurant Tunisien

## Présentation du projet
**Dar El Djerbi** est un site web vitrine moderne et responsive dédié à un restaurant traditionnel tunisien. Ce mini-projet a été réalisé dans le cadre du module **Développement Web Côté Client (TI1.x - Semestre 1, A.U. 2026-2027)**[cite: 10, 14].

L'objectif principal est de présenter l'identité culinaire tunisienne à travers une interface élégante, adaptée aux ordinateurs, tablettes et smartphones, tout en intégrant des formulaires interactifs validés côté client[cite: 14, 15].

## Structure et pages du site
Le site est composé de **5 pages HTML5** reliées entre elles par une barre de navigation fixe[cite: 8, 9, 10, 11, 12, 14]:
* **`index.html` (Accueil)** : Présentation générale du restaurant et accès rapide à la réservation et au menu.
* **`menu.html` (Menu)** : Présentation des plats traditionnels tunisiens (Couscous, Ojja, Lablabi, Mloukhia, Salade Méchouia, Keftegi) avec leurs prix en TND[cite: 11].
* **`horaires.html` (Horaires)** : Tableau structuré indiquant les jours et heures d'ouverture du restaurant[cite: 9].
* **`reservation.html` (Réservation)** : Formulaire interactif de réservation de table avec validation en JavaScript[cite: 12].
* **`contact.html` (Contact)** : Coordonnées du restaurant, liens vers les réseaux sociaux et formulaire de contact validé en JavaScript[cite: 8].

## Technologies utilisées
* **HTML5** : Structure sémantique (`header`, `nav`, `main`, `section`, `footer`), formulaires accessibles (`label`, `required`) et attributs `alt` sur les images[cite: 8, 9, 10, 11, 12, 15].
* **CSS3** : Feuille de style externe (`style.css`), variables CSS (`:root`), Flexbox, CSS Grid, effets de transparence et `@media queries` pour le responsive design[cite: 14, 15].
* **JavaScript (Vanilla JS)** : Fichier externe (`reservation.js`), manipulation du DOM, gestion de l'événement `submit` et validation des champs des formulaires avec affichage dynamique des messages d'erreur et de confirmation[cite: 8, 12, 13, 15].
* **Git & GitHub** : Suivi de version et hébergement du code source[cite: 15].

## Arborescence du projet
```text
dar-el-djerbi/
├── index.html
├── menu.html
├── horaires.html
├── reservation.html
├── contact.html
├── style.css
├── reservation.js
├── README.md
└── images/