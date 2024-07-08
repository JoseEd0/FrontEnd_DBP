// Home.jsx
import React, { useState, useEffect } from 'react';
import { fetchRestaurantes } from './Api';
import '../styles/Formulario.css';
import SearchBar from './SearchBar';
import Restaurantes from './Restaurantes';

const Home = () => {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const data = await fetchRestaurantes();
        setRestaurantes(data.content); // Asume que la API devuelve los restaurantes en un campo `content`
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    loadRestaurants();
  }, []);

  const handleSearch = (location, query) => {
    // Filtrar los resultados de acuerdo a los criterios de búsqueda
    const filteredResults = restaurantes.filter(
      (restaurante) =>
        restaurante.location.includes(location) &&
        restaurante.name.includes(query)
    );

    setRestaurantes(filteredResults);
  };

  return (
    <div className="home">
      <h1>Discover and book the best restaurant</h1>
      <SearchBar onSearch={handleSearch} />
      <Restaurantes restaurantes={restaurantes} />
      <div className="guide-me">
        <span>Not inspired?</span>
        <button>GUIDE ME</button>
      </div>
    </div>
  );
};

export default Home;