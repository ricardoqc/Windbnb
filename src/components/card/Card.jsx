import React from 'react';
import './Card.css';

const Card = ({ title, beds, rating, type, superHost, photo }) => {
  return (
    <div className="card">
      <img src={photo} alt={title} className="card-img" />
      <div className="card-body">
        <div className="card-details">
          {superHost && <span className="super-host">SUPER HOST</span>}
          <span className="property-type">{type}</span>
          <span className="property-beds">{beds} beds</span>
          <span className="rating">{rating}</span>
        </div>
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
};

export default Card;