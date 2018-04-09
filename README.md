## Commandes

1. D'aborder, installer les dépendances avec `npm install`
2. Lancer `npm start` pour voir l'app à `http://localhost:3000`.

# Découverte de React.js
### Modalités 
Travail par groupes de 2, production individuelle.

### Objectif 
- Mettre en place un environnement de dev pour React.js
- Découvrir React.js avec des fonctionnalités simples 
- Créer une première app avec des composants qui communiquent entre eux.

### Consignes
- Lancez le serveur et ouvrez les fichiers app/containers/App/index.js et app/components/Machine.js
- Affichez le composant Machine plusieurs fois dans la page. 
- Affichez des données dynamiques dans le composant Machine en lui passant du texte via des Props depuis App/index.js
- Créez un composant Header, et un composant Footer.


# Développement de l'application
### Modalités 
Travail par groupes de 2, production individuelle.

### Objectif 
- Utiliser Git en situation
- Découvrir et utiliser le state de React.js
- Écouter des évènements et les lier à des méthodes.
- Ajouter un composant externe dans le projet

## Consignes

### Gérer son code avec Git
- Suivre le tuto :
https://docs.google.com/document/d/1uQuQNz9Dj4QouTHlxnpFPNZvizns5TTzpcWtkAjf-d8/edit

### Lister nos machines depuis le state
- Convertir la fonction App en classe.
- Renseigner un state et y rajouter notre donnée : nom des machines et leur état
- Afficher la liste des machines en appellant le state
- Boucler sur cette donnée pour afficher la liste.
https://reactjs.org/docs/state-and-lifecycle.html

### Event : écouter le clic sur un bouton
- Ajouter un bouton par Machine pour l'activer / désactiver
- Écouter l'évènement clic sur ce bouton
- Inverser l'état actif / inactif d'une machine au clic sur le bouton
https://reactjs.org/docs/handling-events.html

### Ajouter un composant externe
- Charger un composant externe avec npm : un toggle
- Remplacer le bouton activer / désactiver par ce composant

### Naviguer sur une page produit
- On a besoin de voir le détail de la machine, pour la localiser grâce à une carte. 
- Router : utiliser React Router pour naviguer sur différentes pages. 
- Ajouter une carte Google Maps sur la page produit
https://github.com/ReactTraining/react-router

### déployer avec netlify

## Documentation

- [**The Hitchhikers Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
- [**Troubleshooting**](docs/general/gotchas.md): Solutions to common problems faced by developers.

## License

This project is licensed under the MIT license, Copyright (c) 2017 Maximilian
Stoiber. For more information see `LICENSE.md`.
