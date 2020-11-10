import axios from "axios";
axios.defaults.withCredentials = true;
const api = axios.create({
  baseURL: "https://remake-backend-tcc.herokuapp.com",
  withCredentials: true,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

export default api;
