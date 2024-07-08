
// Restaurantes.jsx
import React from 'react';
import { createReserva } from './Api';

const Restaurantes = ({ restaurantes }) => {
  const handleReserva = async (restauranteId) => {
    try {
      const response = await createReserva({ restauranteId });
      console.log('Reserva creada:', response);
      alert('Reserva creada exitosamente');
    } catch (error) {
      console.error('Error creating reserva:', error);
      alert('Error al crear la reserva');
    }
  };

  return (
    <div className="restaurant-list">
      {restaurantes.map((restaurante, index) => (
        <div key={index} className="restaurant-card">
          <h2>{restaurante.name}</h2>
          <p>{restaurante.location}</p>
          <button onClick={() => handleReserva(restaurante.id)}>Reservar</button>
        </div>
      ))}
    </div>
  );
};

export default Restaurantes;
