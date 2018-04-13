import React from 'react';

class AddMachine extends React.Component {
  

  render() {
    return(
      
     <form  className="form" ref="MachineForm"onSubmit={(e) => this.props.addMachineToState(e)}>
        <div className="form-group">
        <label for="machineItem">
          Nom:
          <input type="text" name="name" id="machineItem" placeholder="Machine à..." ref="fruitName" className="form-control" />
        </label>
        <select>
          <option value="true">Activée</option>
          <option value="false">Désactivée</option>
        </select>
        <input type="submit" value="Ajouter"></input>
        </div>
      </form>
    );
  }
}

 

export default AddMachine;