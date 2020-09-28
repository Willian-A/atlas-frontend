import React, { useState, useEffect } from "react";
import { A } from "hookrouter";

import api from "../../api";

import * as component from "./component";
import * as text from "../text";
import { ReactComponent as Logo } from "../../assets/images/icons/menu.svg";

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
          <A href="">
            <text.MediumSemiBold>Sair</text.MediumSemiBold>
          </A>
        </li>
      );
    }
    return (
      <>
        <li>
          <A href="/login">
            <text.MediumSemiBold>Login</text.MediumSemiBold>
          </A>
        </li>
        <li>
          <A href="/cadastro">
            <text.MediumSemiBold>Cadastrar</text.MediumSemiBold>
          </A>
        </li>
      </>
    );
  }

  useEffect(() => {
    let mounted = true;

    if (mounted) {
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
    }

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
        <Logo />
        <text.MediumSemiBold style={{ margin: "2.5px " }}>
          Menu
        </text.MediumSemiBold>
      </div>
      <div id="menu" className="pages">
        <ul>
          <li>
            <A href="/">
              <text.MediumSemiBold>Home</text.MediumSemiBold>
            </A>
          </li>
          <li>
            <A href="/carrinho">
              <text.MediumSemiBold>Carrinho</text.MediumSemiBold>
            </A>
          </li>
          <li>
            <A href="/produtos">
              <text.MediumSemiBold>Produtos</text.MediumSemiBold>
            </A>
          </li>
        </ul>
        <ul>{UserButtons()}</ul>
      </div>
    </component.NavbarContainer>
  );
}
