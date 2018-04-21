import React from 'react';
import GoogleMapReact from 'google-map-react';
// Importe les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import AddMachine from '../../components/AddMachine.js';
//React-Router
import { Router, Route, Switch } from 'react-router'
//Importer la CSS
import CSS from '../../css/style.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.addMachineToState = this.addMachineToState.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  
  
    //Propriété de la carte
    this.state = {
      center: {
      lat: 48.8566,
      lng: 2.3522
    },
    zoom: 11,
    
    //Propriétés des machines  
    machines:[
      {id:0,
        name : "Machine à café", 
        isActive : true}, 
      { id:1,
        name : "Machine à thé ", 
        isActive : false}, 
      { id:2,
        name : "Machine à chocolat", 
        isActive : true
      },
      { id:3,
        name : "Machine à eau ", 
        isActive : false
      }
    ]
  };
}


 // Méthode pour ajouter un formulaire
  addMachineToState(machine) {
    console.log("addMachineToState");
    console.log(machine);
  }


  // Méthode pour activer une machine
  handleStatusChange(key) {
    // 1. On copie le state existant
      const machines = { ...this.state.machines };
      console.log(machines[key].isActive);
    // 2. On modifie le status de CETTE machine
      machines[key].isActive = !machines[key].isActive;
    // On verifie dans la console
      console.log(machines[key].isActive);
    // 3. On applique cette nouvelle collection au state
      this.setState({ machines });
  }

  //COMPTEURS
  render() {
    // Calcul des compteurs
    const machinesIds = Object.keys(this.state.machines);
    const totalActive = machinesIds.reduce((prevTotal, key) => {
      const machine = this.state.machines[key];
      const isAvailable = machine && machine.isActive;
      // On incrémente le compteur à chaque fois que l'on trouve une machine active
      return isAvailable ? prevTotal + 1 : prevTotal
    }, 0);
    const total = machinesIds.length;
   

  //affichage
  return (
    <div className="main">
      <Header/>
      <AddMachine addMachineToState={this.addMachineToState}/>
      {/*Compteurs*/}
      <div className="counter">
        <strong>{totalActive}</strong> / <strong>{total}</strong> Machines actives
      </div>
      {/*Conteneur de notre liste*/}
      <div className="machines-list">
        {/*Boucle sur notre collection de machines*/}
        {Object
          .keys(this.state.machines)
          .map(key =>
          // Le composant Machine s'affichera autant de fois qu'il y a d'objets dans la collection.
          <Machine name={this.state.machines[key].name}
            key={this.state.machines[key].id}
            index={this.state.machines[key].id}
            handleStatusChange={this.handleStatusChange}
            isActive={this.state.machines[key].isActive}/>
          )}
          {/*Affichage de la carte*/}
          <div className="map-container">
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBU_IEeDtk0fIKfm18yj8bD6DDaJ0N-3e4" }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}>
            <AnyReactComponent
              lat={this.state.center.lat}
              lng={this.state.center.lng}/>
            </GoogleMapReact>
          </div>
        </div>
        <br/>
        <br/>
        {/* Nombre total de machine */}
         <div className="counter">
        <strong>{total}</strong> Machines
      </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
