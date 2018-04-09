import React from 'react';

import Machine from '../../components/Machine.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import CSS from '../../css/style.css';


class App extends React.Component {

constructor(props) {
  super(props)
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
   handleStatusChange(key) {
      const machines = { ...this.state.machines };
      machines[key].isActive = true;
      console.log({ machines });
      this.setState({ machines });
  }
  
  render() {
    return (
      <div className="main">
        <Header/>
          <div className="machines-list">
            {}
            {
            Object
              .keys(this.state.machines)
              .map(key =>
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
