import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import '../styles/NavBar.css';

const NavBar = () => {
    const { token, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogoClick = () => {
        if (token) {
            navigate('/home');
        } else {
            navigate('/');
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <button onClick={handleLogoClick}>SaborLocal</button>
            </div>
            <ul className="navbar-list">
                {token ? (
                    <>
                        <li><Link to="/home">Home</Link></li>
                        <li><button onClick={logout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
