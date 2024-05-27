import axios from 'axios';
import { parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

api.interceptors.request.use((config) => {
  const { 'nextauth.token': token } = parseCookies();
  console.log('api', token);
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      destroyCookie(undefined, 'nextauth.token');
      console.log("Erro 401: Usuário não autorizado");
      Router.push('/login'); // Redirecionar para a página de login
    }
    return Promise.reject(error);
  }
);

export default api;
