// Home.jsx
import React, { useState } from 'react';
import '../styles/Formulario.css';
import SearchBar from './SearchBar';
import Restaurantes from './Restaurantes';

const Home = () => {
  const [restaurantes, setRestaurantes] = useState([]);

  const handleSearch = (location, query, priceRange) => {
    // Simular una búsqueda de restaurantes
    const results = [
      { name: 'Restaurante 1', location: 'Lima', cuisine: 'Peruana', priceRange: '$$' },
      { name: 'Restaurante 2', location: 'Cusco', cuisine: 'Italiana', priceRange: '$$$' },
      { name: 'Restaurante 3', location: 'Arequipa', cuisine: 'Japonesa', priceRange: '$' },
    ];

    // Filtrar los resultados de acuerdo a los criterios de búsqueda
    const filteredResults = results.filter(
      (restaurante) =>
        restaurante.location.includes(location) &&
        restaurante.cuisine.includes(query) &&
        restaurante.priceRange.includes(priceRange)
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
