import axios from "axios";
axios.defaults.withCredentials = true;
const api = axios.create({
  baseURL: "https://backend-tcc.vercel.app/:3333",
  withCredentials: true,
});

export default api;
