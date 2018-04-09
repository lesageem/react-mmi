import React from 'react';
// Importe les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import CSS from '../../css/style.css';
import Toggle from 'react-toggle';

class App extends React.Component {

constructor(props) {
  super(props);
  this.handleStatusChange = this.handleStatusChange.bind(this);
  this.state = {
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
      name : "Machine à eau", 
      isActive : false
      }
    ]
  };
}
 // Méthode pour activer une machine
handleStatusChange(key) {
// 1. On copie le state existant
  const machines = { ...this.state.machines };
  console.log(machines[key].isActive)
// 2. On modifie le status de CETTE machine
  machines[key].isActive = !machines[key].isActive;
// On verifie dans la console
  console.log(machines[key].isActive);
// 3. On applique cette nouvelle collection au state
  this.setState({ machines });
}
  
render() {
  return (
    <div className="main">
      <Header/>
       {/*Conteneur de notre liste*/}
      <div className="machines-list">
        {/*Boucle sur notre collection de machines*/}
        {
          Object
            .keys(this.state.machines)
            .map(key =>
             // Le composant Machine s'affichera autant de fois qu'il y a d'objets dans la collection.
            <Machine name={this.state.machines[key].name}
            key={this.state.machines[key].id}
            index={this.state.machines[key].id}
            handleStatusChange={this.handleStatusChange}
            isActive={this.state.machines[key].isActive}/>
            )}
        </div>
        <Footer/>
      </div>
    );
  }
}
export default App;
