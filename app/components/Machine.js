/**
 *
 * Machine.js
 *
 */
import React from 'react';
import Toggle from 'react-toggle';



class Machine extends React.Component {
// Méthode lancée au clic sur le bouton "Toggle"
    
  onhandleClick() {
// On envoie l'index à la méthode qui changera la valeur
// La méthode et son argument sont tous les deux accessibles
// via des props qui ont été passées au composant
  this.props.handleStatusChange(this.props.index);
  }
    
    
 
   render() {
    return (
    <div className='machine'
    className={this.props.isActive ? "machine active" : "machine"}>  {/* Si isActive passée en props est à true, ajouter la classe "active" */}
    <h2> {this.props.name} </h2>
    {/* On appelle handleClick avec (e) pour pouvoir accéder à this*/}
    {/*  <button onClick={(e) => this.onhandleClick(e)} type="button" className="btn">
    {this.props.isActive ? "ACTIVÉE" : "DÉSACTIVÉE"}
    </button>*/}
  <label>
  {/* Ajout du Toggle*/}
    <Toggle
      checked={this.props.isActive}
      onClick={(e) => this.onhandleClick(e)} />
  </label>
</div>
    );}}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
