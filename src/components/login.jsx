import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import '../styles/Formulario.css';
import gato from '../assets/gato.png';

const Login = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await login(username, password);
            navigate("/home");
        } catch (error) {
            console.error("Login failed: ", error);
            setError("Usuario o contraseña incorrectos.");
        }
    };

    return (
        <div className="register-container">
            <div className="logo-container">
                <img src={gato} alt="Gato" className="logo" />
                <h1 className="title">SaborLocal</h1>
            </div>
            <form onSubmit={handleSubmit} className="register-form">
                <h2 className="form-title">INICIAR SESIÓN</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className="input-field"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="input-field"
                    required
                />
                <button type="submit" className="submit-btn">LOGIN</button>
                {error && <p className="error-message">{error}</p>}
                <div className="divider">
                    <span>OR WITH</span>
                </div>
                <div className="login-container">
                    <span>Don't have an account? <a href="/register" className="login-link">Register</a></span>
                </div>
            </form>
        </div>
    );
};

export default Login;
