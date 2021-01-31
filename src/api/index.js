import axios from "axios";
let URL =
  process.env.ENV === "DEV"
    ? "https://localhost:3333"
    : "https://remake-backend-tcc.herokuapp.com";
const api = axios.create({
  baseURL: URL,
  withCredentials: true,
});

export default api;
