import React, { useState } from 'react';
import '../styles/Formulario.css';

const Home = () => {
  const [location, setLocation] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Implementar la lógica de búsqueda
    console.log(`Searching for ${query} in ${location}`);
  };

  return (
    <div className="home">
      <h1>Discover and book the best restaurant</h1>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Cuisine, restaurant name..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
        />
        <button onClick={handleSearch}>SEARCH</button>
      </div>
      <div className="guide-me">
        <span>Not inspired?</span>
        <button>GUIDE ME</button>
      </div>
    </div>
  );
};

export default Home;