# AR4 MK3 HMI – Human-Machine Interface

> Interface Web pour le pilotage du bras robotique AR4 MK3

![Angular](https://img.shields.io/badge/built%20with-Angular-red)
![Status](https://img.shields.io/badge/status-en%20cours-yellow)

## Objectif

Cette interface Angular permet de contrôler et configurer un bras robotique AR4 MK3. Elle offre un accès aux paramètres critiques de la cinématique, ainsi qu'aux entrées/sorties pour une utilisation en laboratoire ou en production.

## Fonctionnalités clés

- Configuration des axes et paramètres de Denavit-Hartenberg
- Importation de fichiers G-code
- Contrôle moteur (positions, vitesses...)
- Interface I/O : entrées numériques, sorties numériques
- Paramétrage des broches (pins)
- WebSocket via `ngx-socket-io` pour communication temps réel

## Stack technique

- **Frontend** : Angular 18.2, Angular Material, Flex Layout
- **Backend SSR** : Express.js
- **Communication** : WebSockets (ngx-socket-io)
- **Langages** : TypeScript, HTML, SCSS

## Statut

En cours de développement. Plusieurs fonctionnalités sont opérationnelles, mais le merge des branches beta reste à finaliser.

## Structure du projet

```bash
ar4-mk3-hmi/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── pages/
│   └── assets/
├── dist/
├── angular.json
├── package.json
└── README.md
```

## Lancer le projet en local

```bash
git clone https://github.com/Bebel19/AR4_MK3_hmi.git
cd AR4_MK3_hmi
npm install
ng serve
```
Accès via `http://localhost:4200`

## Démo (à venir)

<!-- ![Demo GIF](https://raw.githubusercontent.com/Bebel19/AR4_MK3_hmi/main/assets/demo.gif) -->

## Liens utiles

- [Documentation AR4 MK3 (site officiel)](https://www.annexrobotics.com/ar4)


