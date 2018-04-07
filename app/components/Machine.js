/**
 *
 * App.js
 *
 */
import React from 'react';


class Machine extends React.Component {

    
    handleClick(){
        this.setState(prevState => ({
        isActive: !prevState.isActive
    }));
  
        
        console.log('Hello');
        console.log(this.props.name);
    }
    
    
   render() {
    // Dans tous les cas, afficher
    return (
    <div className='machine'
    className={this.props.isActive ? "machine active" : "machine"}>
    <h2> {this.props.name} </h2>
    <button onClick={(e) => this.handleClick(e)} type="button" className="btn" >
       {this.props.isActive ? 'True' : 'False'}
       
        
    </button>
      
    </div>
    )
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
