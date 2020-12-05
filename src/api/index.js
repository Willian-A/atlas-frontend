import axios from "axios";
const api = axios.create({
  baseURL: "https://remake-backend-tcc.herokuapp.com/",
  withCredentials: true,
});

export default api;
