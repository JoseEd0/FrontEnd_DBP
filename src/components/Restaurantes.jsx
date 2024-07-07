// Restaurantes.jsx
import React from 'react';

const Restaurantes = ({ restaurantes }) => {
  return (
    <div className="restaurant-list">
      {restaurantes.map((restaurante, index) => (
        <div key={index} className="restaurant-card">
          <h2>{restaurante.name}</h2>
          <p>{restaurante.location}</p>
          <p>{restaurante.cuisine}</p>
          <p>{restaurante.priceRange}</p>
        </div>
      ))}
    </div>
  );
};

export default Restaurantes;
