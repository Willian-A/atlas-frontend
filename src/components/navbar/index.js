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
            <text.MediumSemiBold>Sair</text.MediumSemiBold>
          </Link>
        </li>
      );
    }
    return (
      <>
        <li>
          <Link to="/login">
            <text.MediumSemiBold>Login</text.MediumSemiBold>
          </Link>
        </li>
        <li>
          <Link to="/cadastro">
            <text.MediumSemiBold>Cadastrar</text.MediumSemiBold>
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
        <text.MediumSemiBold style={{ margin: "2.5px " }}>
          Menu
        </text.MediumSemiBold>
      </div>
      <div id="menu" className="pages">
        <ul>
          <li>
            <Link to="/">
              <text.MediumSemiBold>Home </text.MediumSemiBold>
            </Link>
          </li>
          <li>
            <Link to="/carrinho">
              <text.MediumSemiBold>Carrinho</text.MediumSemiBold>
            </Link>
          </li>
          <li>
            <Link to="/produtos">
              <text.MediumSemiBold>Produtos</text.MediumSemiBold>
            </Link>
          </li>
        </ul>
        <ul>{UserButtons()}</ul>
      </div>
    </component.NavbarContainer>
  );
}
