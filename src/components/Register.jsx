import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { fetchRegister } from "./api";

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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
            />
            <br />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
            />
            <br />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;