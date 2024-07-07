import React, { createContext, useState, useContext, useEffect } from "react";
import { getRoleBasedOnToken, login as apiLogin } from "./components/Api.jsx"; // Ajustado el path y renombrado apiLogin

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("authToken"));
    const [userRole, setUserRole] = useState(getRoleBasedOnToken());

    useEffect(() => {
        const role = getRoleBasedOnToken();
        setUserRole(role);
    }, [token]);

    const login = async (username, password) => {
        try {
            const data = await apiLogin(username, password);
            if (data.token) {
                setToken(data.token);
                localStorage.setItem("authToken", data.token);
                setUserRole(getRoleBasedOnToken());
            } else {
                throw new Error("Invalid login");
            }
        } catch (error) {
            console.error("Error en login:", error);
            throw error;
        }
    };

    const logout = () => {
        setToken(null);
        setUserRole(null);
        localStorage.removeItem("authToken");
    };

    return (
        <AuthContext.Provider value={{ token, userRole, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
