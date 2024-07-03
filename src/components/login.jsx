import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { login } from "./Api.jsx"

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
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
            />
            <br />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;