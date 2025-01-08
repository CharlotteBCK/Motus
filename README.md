# Motus

**Motus** est un jeu de mots inspiré du célèbre jeu télévisé. L'objectif du jeu est de deviner un mot en un nombre limité de tentatives. Chaque tentative est évaluée, et des indices sont donnés pour chaque lettre du mot : 
- **Vert** si la lettre est à la bonne position.
- **Jaune** si la lettre est dans le mot, mais à une mauvaise position.
- **Gris** si la lettre n'est pas dans le mot.

Le jeu propose une interface simple et ludique, offrant une expérience de jeu engageante.

## Description du projet

**Motus** est une implémentation moderne du jeu classique qui repose sur des principes de logique et de stratégie. Le jeu se joue sur une grille de lettres, où le joueur essaie de deviner un mot de 5 lettres en faisant des essais. À chaque essai, le système fournit des retours colorés qui permettent d'affiner les prochaines tentatives.

Le jeu est conçu pour être simple et intuitif, tout en offrant un défi de réflexion pour les amateurs de jeux de mots.

## Fonctionnalités

- **Interface utilisateur claire et réactive** : Le jeu s'adapte aussi bien aux écrans de bureau qu'aux écrans mobiles.
- **Feedback visuel** : Les lettres devinées sont colorées en vert, jaune ou gris selon leur pertinence dans le mot recherché.
- **Historique des tentatives** : Chaque tentative est enregistrée, avec un retour visuel sur la validité des lettres dans le mot cible.
- **Jeu simple et intuitif** : Facilité de jouer, sans règles complexes.
- **Mots aléatoires** : Le mot à deviner est choisi de manière aléatoire parmi une liste de mots valides.

## Technologies utilisées

Ce projet utilise les technologies suivantes :

- **HTML5** : Structure de la page et des éléments d'interface.
- **CSS3** : Mise en forme et design de l'application, incluant des animations pour améliorer l'expérience utilisateur.
- **JavaScript (ES6)** : Logique du jeu, gestion des entrées utilisateur et calculs des indices pour chaque tentative.
- **LocalStorage** : Sauvegarde de l'état du jeu et de l'historique des tentatives.

## Installation et démarrage

Pour exécuter l'application sur votre machine locale, suivez les étapes suivantes :

### 1. Clonez ce dépôt

Dans votre terminal, exécutez la commande suivante pour cloner le dépôt :

```bash
git clone https://github.com/CharlotteBCK/Motus.git
