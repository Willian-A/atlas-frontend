import axios from "axios";
const api = axios.create({
  baseURL: "https://remake-backend-tcc.herokuapp.com/",
});

export default api;
