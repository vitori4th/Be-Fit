import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// desloga o usuario caso de o erro 401 em qualquer requisição
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("name");
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("userId");
      localStorage.removeItem("role");
      console.log("Erro 401: Usuário não autorizado");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
