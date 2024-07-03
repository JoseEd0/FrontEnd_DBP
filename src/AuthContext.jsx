import React, { createContext, useState, useContext, useEffect } from "react";
import { getRoleBasedOnToken, login as apiLogin } from "./components/api"; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("authToken"));
    const [userRole, setUserRole] = useState(getRoleBasedOnToken()); // Obtener el rol al cargar

    useEffect(() => {
        if (token) {
            const role = getRoleBasedOnToken();
            if (role) setUserRole(role);
        }
    }, [token]);

    const login = async (username, password) => {
        const data = await apiLogin(username, password);
        if (data.token) {
            setToken(data.token);
            localStorage.setItem("authToken", data.token);
            const role = getRoleBasedOnToken();
            if (role) setUserRole(role);
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