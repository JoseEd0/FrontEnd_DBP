<<<<<<< HEAD
// src/ProtectedRoute.js
=======
>>>>>>> jose
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

<<<<<<< HEAD
const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
=======
const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();

    if (!token) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
>>>>>>> jose
