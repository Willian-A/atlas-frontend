import axios from "axios";
axios.defaults.withCredentials = true;
const api = axios.create({
  baseURL: "https://backend-tcc.vercel.app",
  withCredentials: true,
});

export default api;
