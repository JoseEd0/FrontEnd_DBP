import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import '../styles/NavBar.css';

const NavBar = () => {
  const { token, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">SaborLocal</Link>
      </div>
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        {!token ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/Restaurantes">Restaurantes</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
