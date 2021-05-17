import axios from "axios";
// let URL = "https://localhost:3333";
let URL = "https://remake-backend-tcc.herokuapp.com";
const api = axios.create({
  baseURL: URL,
  withCredentials: true,
});

export default api;
