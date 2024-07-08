import React, { createContext, useState, useContext, useEffect } from "react";
import { getRoleBasedOnToken, login as apiLogin, fetchUserProfile } from "./components/Api.jsx"; // Ajustado el path e importado fetchUserProfile

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("authToken"));
    const [userRole, setUserRole] = useState(getRoleBasedOnToken());
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const role = getRoleBasedOnToken();
        setUserRole(role);
        if (role) {
            // Obtener perfil de usuario si el rol está presente
            fetchUserProfileData();
        }
    }, [token]);

    const fetchUserProfileData = async () => {
        try {
            const profile = await fetchUserProfile(getRoleBasedOnToken().userId); // Asumiendo que el token contiene userId
            setUserProfile(profile);
        } catch (error) {
            console.error("Error obteniendo el perfil de usuario:", error);
        }
    };

    const login = async (username, password) => {
        try {
            const data = await apiLogin(username, password);
            if (data.token) {
                setToken(data.token);
                localStorage.setItem("authToken", data.token);
                setUserRole(getRoleBasedOnToken());
                await fetchUserProfileData();
            } else {
                throw new Error("Login inválido");
            }
        } catch (error) {
            console.error("Error en el login:", error);
            throw error;
        }
    };

    const logout = () => {
        setToken(null);
        setUserRole(null);
        setUserProfile(null);
        localStorage.removeItem("authToken");
    };

    return (
        <AuthContext.Provider value={{ token, userRole, userProfile, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);