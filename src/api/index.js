import axios from "axios";
axios.defaults.withCredentials = true;
const api = axios.create({
  baseURL: "https://localhost:3333",
  withCredentials: true,
});

export default api;
