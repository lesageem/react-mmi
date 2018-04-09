import React from 'react';

import Machine from '../../components/Machine.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
<<<<<<< HEAD
import CSS from '../../css/style.css';
import { Router, Route, Switch } from 'react-router';
 



class App extends React.Component {
  
   
    
  
constructor(props) {
  super(props)
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
        }
      ]
    };
   
  
}
  
  
  render() {
    return (
       <div> 
        <Header/> 
        {
          this.state.machines.map(machine => 
          //console.log(machine.name))
          <Machine name={machine.name} 
                  key={machine.id}
                  isActive={machine.isActive} />
          
        // <Machine title ={this.state.machines[0].name}  isActive= {this.state.machines[0].isActive} />
        //<Machine title ={this.state.machines[1].name}  isActive= {this.state.machines[1].isActive}/>
        //<Machine title ={this.state.machines[2].name}  isActive= {this.state.machines[2].isActive}/>
        )}
       
        <Footer/>
        </div>
      );
  }
}

export default App;
=======
import '../../css/styles.css';
// On peut aussi importer du CSS de la meme facon.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      machines: [
        {
          id: 0,
          name: "Machine à café",
          isActive: true
        },
        {
          id: 1,
          name: "Machine à thé",
          isActive: false
        },
        {
          id: 2,
          name: "Machine à frappucino",
          isActive: true
        },
        {
          id: 3,
          name: "Machine à citron",
          isActive: true
        }
      ]
    };
  }

  render() {
    return (
      <div className="main">
        <Header/>
          {/*Conteneur de notre liste*/}
          <div className="machines-list">
            {/*Boucle sur notre collection de machines*/}
            { this.state.machines.map(machine =>
                // Le composant Machine s'affichera autant de fois
                // qu'il y a d'objets dans la collection.
                <Machine name={machine.name}
                         key={machine.id}
                         isActive={machine.isActive}/>
              )}
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
>>>>>>> 124b566e20826f3a857f76448eb099289e2c36c4
