import axios from "axios";
const api = axios.create({
  baseURL: "https://localhost:3333",
  withCredentials: true,
});

export default api;
