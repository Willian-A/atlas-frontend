import axios from "axios";
let URL =
  process.env.NODE_ENV === "dev"
    ? "https://remake-backend-tcc.herokuapp.com"
    : "https://localhost:3333";
const api = axios.create({
  baseURL: URL,
  withCredentials: true,
});

export default api;
