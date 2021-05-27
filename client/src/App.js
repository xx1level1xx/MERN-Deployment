import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import PetDashboard from './views/Main';
import AddPet from './views/AddPet';
import PetDetail from './views/PetDetail';
import EditPet from './views/EditPet';
//Black Belt:
//Chose "Sort the pets in the shelter by type" and "Ensure the pet name is unique when adding it to the database"
function App() {
  return (
    <div className="App">
      <Router>
        <PetDashboard path="/"/>
        <AddPet path="/pets/new"/>
        <PetDetail path="/pets/:id"/>
        <EditPet path="/pets/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;