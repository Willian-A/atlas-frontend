import axios from "axios";
let URL;
if (process.env.NODE_ENV === "development") {
  URL = "https://localhost:3333";
} else {
  URL = "https://remake-backend-tcc.herokuapp.com/";
}
const api = axios.create({
  baseURL: URL,
  withCredentials: true,
});

export default api;
