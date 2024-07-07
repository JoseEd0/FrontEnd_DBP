// PostRestaurant.jsx
import React, { useState } from 'react';

const PostRestaurant = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar la lógica para enviar los datos del restaurante a la API
    console.log(`Posting restaurant: ${name}, ${location}, ${cuisine}, ${priceRange}`);
  };

  return (
    <div className="post-restaurant">
      <h1>Post a New Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Cuisine" 
          value={cuisine} 
          onChange={(e) => setCuisine(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Price Range" 
          value={priceRange} 
          onChange={(e) => setPriceRange(e.target.value)} 
          required 
        />
        <button type="submit">Post Restaurant</button>
      </form>
    </div>
  );
};

export default PostRestaurant;
