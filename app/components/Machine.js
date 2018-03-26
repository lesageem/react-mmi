/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
    handleClick = () => {
    console.log('this is:', this);
      }
  
    render() {
    // Dans tous les cas, afficher
    return (
    <div className='machine'
    className={this.props.isActive ? "machine active" : "machine"}>
    <h2> {this.props.title} | {this.props.isActive} </h2>
      
    <button onClick={this.handleClick}>
    {this.props.isActive? 'true' : 'false'}
    
    </button>
      
    </div>
    )
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
