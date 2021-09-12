import "./DetailCard.css";
// import { useState } from "react";

function DetailCard(props) {
  const { name, age, id, onDelete, onEdit, edit } = props;
  return (
    <div className="card">
      <div className="container">
        <h2>{props.name}</h2>
        <h3>{props.age}</h3>
        <button
          className="detail-card__button"
          onClick={() => onEdit(name, age, id, edit)}
        >
          edit
        </button>
        <button className="detail-card__button" onClick={() => onDelete(id)}>
          delete
        </button>
      </div>
    </div>
  );
}
export default DetailCard;
