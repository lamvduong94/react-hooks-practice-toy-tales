import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDelete, onUpdate }) {
  const toyCards = toys.map(toy => (
    <ToyCard 
      key={toy.id}
      toy={toy}
      onDelete={onDelete}
      onUpdate={onUpdate}
    />
  ))
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
