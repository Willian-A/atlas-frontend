import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../api";

import * as component from "./component";
import * as text from "../text";
import MenuBar from "../../assets/images/icons/menu-bar";

export default function Navbar() {
  const [logged, setLogged] = useState(false);
  const [open, setOpen] = useState(false);

  async function getLoginStatus() {
    try {
      let response = await api.get("/logged");
      console.log(response);
      setLogged(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  function UserButtons() {
    if (logged) {
      return (
        <li>
          <Link to="/logout">
            <text.H4_Big>Sair</text.H4_Big>
          </Link>
        </li>
      );
    }
    return (
      <>
        <li>
          <Link to="/login">
            <text.H4_Big>Login</text.H4_Big>
          </Link>
        </li>
        <li>
          <Link to="/cadastro">
            <text.H4_Big>Cadastrar</text.H4_Big>
          </Link>
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
        <text.H4_Big style={{ margin: "2.5px " }}>Menu </text.H4_Big>
      </div>
      <div id="menu" className="pages">
        <ul>
          <li>
            <Link to="/">
              <text.H4_Big>Home </text.H4_Big>
            </Link>
          </li>
          <li>
            <Link to="/carrinho">
              <text.H4_Big>Carrinho</text.H4_Big>
            </Link>
          </li>
          <li>
            <Link to="/produtos">
              <text.H4_Big>Produtos</text.H4_Big>
            </Link>
          </li>
        </ul>
        <ul>{UserButtons()}</ul>
      </div>
    </component.NavbarContainer>
  );
}
