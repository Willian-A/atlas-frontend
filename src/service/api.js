import axios from "axios";
axios.defaults.withCredentials = true;
const api = axios.create({
  baseURL: "http://192.168.0.107:3333",
  withCredentials: true,
});

export default api;
