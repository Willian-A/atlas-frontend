import React, { useState, useEffect } from "react";
import { A } from "hookrouter";

import api from "../../api";

import * as component from "./component";
import * as text from "../text";
import { ReactComponent as Logo } from "../../assets/images/icons/menu.svg";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [loading, setLoading] = React.useState(true);
  const [open, setOpen] = useState(false);

  async function getLoginStatus() {
    try {
      const response = await api.get("/logged");
      setIsLoggedIn(response.data);
    } catch (error) {}
  }

  function UserButtons() {
    function Logged() {
      return (
        <li>
          <A href="/logout">
            <text.MediumSemiBold>Sair</text.MediumSemiBold>
          </A>
        </li>
      );
    }

    function Unlogged() {
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

    if (!loading) {
      return isLoggedIn ? Logged() : Unlogged();
    }
    return "";
  }

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getLoginStatus().then(() => {
        setLoading(false);
      });
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
            <A href="/produtos/all">
              <text.MediumSemiBold>Produtos</text.MediumSemiBold>
            </A>
          </li>
        </ul>
        <ul>
          <UserButtons />
        </ul>
      </div>
    </component.NavbarContainer>
  );
}
export default React.memo(Navbar);
