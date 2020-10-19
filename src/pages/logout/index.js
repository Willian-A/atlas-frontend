import { useEffect } from "react";
import { navigate } from "hookrouter";

import api from "../../api";

export default function Logout() {
  async function makeLogout() {
    try {
      await api.get("/logout");
      navigate("/");
    } catch (error) {}
  }

  useEffect(() => {
    makeLogout();
  }, []);

  return null;
}
