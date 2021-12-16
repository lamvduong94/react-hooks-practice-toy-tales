import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(res => res.json())
      .then(setToys);
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    const updatedToys = [newToy, ...toys];
    setToys(updatedToys);
  }

  function handleDeleteToy(targetToy) {
    const updatedToys = toys.filter(toy => toy.id !== targetToy.id);
    setToys(updatedToys);
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map(toy => 
      toy.id === updatedToy.id ? updatedToy : toy
    )

    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAdd={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys}
        onDelete={handleDeleteToy}
        onUpdate={handleUpdateToy}
      />
    </>
  );
}

export default App;
