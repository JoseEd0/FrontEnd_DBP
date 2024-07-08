// PostRestaurant.jsx
import React, { useState } from 'react';
import { createRestaurante } from './Api';

const PostRestaurant = ({ onRestaurantCreated }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createRestaurante({ name, location });
      console.log('Restaurant created:', response);
      onRestaurantCreated(response); // Llama a la función pasada por prop
    } catch (error) {
      console.error('Error creating restaurant:', error);
    }
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
        <button type="submit">Post Restaurant</button>
      </form>
    </div>
  );
};

export default PostRestaurant;
