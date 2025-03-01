import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

export const BACKEND_URL = 'http://localhost:8080';

// Asegúrate de configurar axios para incluir el token en todas las solicitudes
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('authToken');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export const getRoleBasedOnToken = () => {
    const token = localStorage.getItem('authToken');
    if (!token) return null;
    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.role;
    } catch (error) {
        console.error("Error decoding token:", error);
        return null;
    }
};

export const fetchRegister = async (body) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/auth/register`, body);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error en el registro:", error.response ? error.response.data : error.message);
        throw error;
    }
};

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/auth/login`, { username, password });
        if (response.data.token) {
            localStorage.setItem('authToken', response.data.token);
        }
        return response.data;
    } catch (error) {
        console.error("Error en el login:", error.response ? error.response.data : error.message);
        throw error;
    }
};
