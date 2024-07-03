import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Asegúrate de que jwt-decode esté instalado

export const BACKEND_URL = 'http://127.0.0.1:8080';

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
    const response = await axios.post(`${BACKEND_URL}/auth/register`, {
      username: body.username, 
      email: body.email,
      password: body.password,
    });
    console.log(response);
    return response.data; // O manejar la respuesta como sea adecuado
  } catch (error) {
    if (error.response && error.response.status === 403) {
      console.error("Registro fallido: Acceso denegado.");
    } else {
      console.error("Error en el registro:", error.message);
    }
    throw error; // O manejar el error como sea adecuado
  }
};

export const login = async (username, password) => {
  const response = await axios.post(`${BACKEND_URL}/auth/login`, { username, password });
  if (response.data.token) {
    localStorage.setItem('authToken', response.data.token);
  }
  return response.data;
};
