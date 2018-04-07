import React from 'react';

import Machine from '../../components/Machine.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
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