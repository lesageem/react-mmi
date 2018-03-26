import React from 'react';

import Machine from '../../components/Machine.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import CSS from '../../css/style.css';

class App extends React.Component {
  
constructor(props) {
  super(props)
    this.state = {
      machines:[
       { 
          name : "Machine à café", 
          isActive : true}, 
        { 
          name : "Machine à thé ", 
          isActive : false}, 
        { 
          name : "Machine à chocolat", 
          isActive : true}
      
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
          <Machine title={machine.name} 
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