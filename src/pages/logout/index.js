import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "../../service/api.js";

export default function Logout() {
  const history = useHistory();
  async function makeLogout() {
    try {
      await api.get("/logout");
      history.push("/");
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    makeLogout();
  });

  return null;
}
