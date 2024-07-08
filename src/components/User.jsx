// User.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className="user-page">
      <h1>User Profile</h1>
      <ul>
        <li><Link to="/post-restaurant">¿Deseas publicar tu negocio?</Link></li>
      </ul>
    </div>
  );
};

export default User;