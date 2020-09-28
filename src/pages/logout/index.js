import { useEffect } from "react";

import api from "../../api";

export default function Logout() {
  async function makeLogout() {
    try {
      await api.get("/logout");
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    makeLogout();
  });

  return null;
}
