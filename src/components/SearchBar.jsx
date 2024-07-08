// SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(location, query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Restaurant name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>SEARCH</button>
    </div>
  );
};

export default SearchBar;