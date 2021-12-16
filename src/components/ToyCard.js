import React from "react";

function ToyCard({ toy, onDelete, onUpdate }) {
  const { id, name, image, likes } = toy;

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => {
        onDelete(toy);
      })
  }

  function handleLikeClick() {
    const updateObj = {
      likes: toy.likes + 1,
    }

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(updateObj),
    })
      .then(res => res.json())
      .then(onUpdate);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
