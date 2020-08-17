import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../api";

import * as component from "./component";
import MenuBar from "../../assets/images/icons/menu-bar";

export default function Navbar() {
  const [logged, setLogged] = useState(false);
  const [config, setConfig] = useState({
    width: "0",
    state: false,
  });

  async function getLoginStatus() {
    try {
      let response = await api.get("/logged");
      setLogged(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  function MobileMenu() {
    if (config.state === false) {
      setConfig({
        width: "100",
        state: true,
      });
    } else {
      setConfig({
        width: "0",
        state: false,
      });
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
    document.addEventListener(
      "mousedown",
      (e) => {
        if (e.path[1].id !== "menu") {
          setConfig({
            width: "0",
            state: false,
          });
        }
      },
      false
    );
  }, []);

  return (
    <component.NavbarContainer width={config.width} display={config.display}>
      <div
        className="icon"
        onClick={() => {
          MobileMenu();
        }}
      >
        <MenuBar id="menu" />
        <h3 style={{ margin: "5px " }}>Menu</h3>{" "}
      </div>
      <div id="menu" className="pages">
        <ul>
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
      </div>
    </component.NavbarContainer>
  );
}