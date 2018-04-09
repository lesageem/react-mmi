/**
 *
 * Machine.js
 *
 */
import React from 'react';




class Machine extends React.Component {

    
  onhandleClick() {
  this.props.handleStatusChange(this.props.index);
  }
    
    
   render() {
    return (
    <div className='machine'
    className={this.props.isActive ? "machine active" : "machine"}>
    <h2> {this.props.name} </h2>
     <button onClick={(e) => this.onhandleClick(e)} type="button" className="btn">
        Activer
    </button>
      
    </div>
    )
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
