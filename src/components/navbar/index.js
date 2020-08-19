import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../api";

import * as component from "./component";
import MenuBar from "../../assets/images/icons/menu-bar";

export default function Navbar() {
  const [logged, setLogged] = useState(false);
  const [open, setOpen] = useState(false);

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
    let mounted = true;

    getLoginStatus();
    document.addEventListener(
      "mousedown",
      (e) => {
        if (mounted) {
          if (!document.getElementById("menu").contains(e.target)) {
            setOpen(false);
          }
        }
      },
      false
    );

    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <component.NavbarContainer open={open}>
      <div
        className="icon"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <MenuBar />
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
