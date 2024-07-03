import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { fetchRegister } from "./Api.jsx";
import '../styles/Register.css';
import gato from '../assets/gato.png'; // Asegúrate de que la ruta del archivo de imagen sea correcta

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth(); // Utiliza login para establecer el token después del registro

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await fetchRegister({ username, email, password });
            // Después de registrar, inicia sesión automáticamente para establecer el token
            await login(username, password);
        } catch (error) {
            console.error("Registration failed: ", error);
        }
    };

    return (
        <div className="register-container">
            <div className="logo-container">
                <img src={gato} alt="Gato" className="logo" />
                <h1 className="title">SaborLocal</h1>
            </div>
            <form onSubmit={handleSubmit} className="register-form">
                <h2 className="form-title">REGISTRO</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className="input-field"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
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
                <button type="submit" className="submit-btn">NEXT</button>
                <div className="divider">
                    <span>OR WITH</span>
                </div>
                <div className="login-container">
                    <span>Have an account? <a href="/login" className="login-link">Log in</a></span>
                </div>
            </form>
        </div>
    );
};

export default Register;
