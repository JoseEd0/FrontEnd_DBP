import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { login } from "./Api";
import '../styles/Formulario.css'; // Importar los estilos
import gato from '../assets/gato.png'; // Asegúrate de que la ruta del archivo de imagen sea correcta

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login: setAuthToken } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await login(username, password); // Usando username para el login
            setAuthToken(response.token);
        } catch (error) {
            console.error("Login failed: ", error);
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
