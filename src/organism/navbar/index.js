import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../service/api.js";

import * as component from "./component";
import MenuBar from "../../shared/images/icons/menu-bar";

export default function Navbar() {
  const [logged, setLogged] = useState(false);

  async function getLoginStatus() {
    try {
      let response = await api.get("/logged");
      setLogged(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  function UserButtons() {
    if (logged) {
      return (
        <li>
          <Link to="/logout">Sair</Link>
        </li>
      );
    }
    return (
      <>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastrar</Link>
        </li>
      </>
    );
  }

  useEffect(() => {
    getLoginStatus();
  }, []);

  return (
    <component.NavbarContainer>
      <ul>
        <div
          className="icon"
          onClick={() => {
            console.log("CLICO K K K ");
          }}
        >
          <MenuBar />
        </div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/carrinho">Carrinho</Link>
        </li>
        <li>
          <a href="/products">Produtos</a>
        </li>
      </ul>
      <ul>{UserButtons()}</ul>
    </component.NavbarContainer>
  );
}
