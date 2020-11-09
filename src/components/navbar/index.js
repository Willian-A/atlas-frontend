import React from "react";

import api from "../../api";

import * as component from "./component";
import { A } from "../text/text";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [scrolling, setScrolling] = React.useState();

  async function getLoginStatus() {
    try {
      const response = await api.get("/logged");
      setIsLoggedIn(response.data);
    } catch (error) {}
  }

  function UserButtons() {
    function Logged() {
      return <A href="/logout">Sair</A>;
    }

    function Unlogged() {
      return (
        <>
          <A href="/login">Login</A>
          <A href="/cadastro">Cadastrar</A>
        </>
      );
    }

    if (!loading) {
      return isLoggedIn ? Logged() : Unlogged();
    }
    return "";
  }

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 2) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
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
    <component.NavbarContainer
      open={open}
      scrolling={scrolling ? scrolling.toString() : undefined}
    >
      <div>
        <A href="/">Home</A>
        <A href="/carrinho">Carrinho</A>
        <A href="/produtos/all">Produtos</A>
      </div>
      <div id="menu" className="user">
        <UserButtons />
      </div>
    </component.NavbarContainer>
  );
}

export default React.memo(Navbar);
