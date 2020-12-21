import React from "react";

import * as component from "./component";
import { A } from "../text";

function Navbar() {
  const [scrolling, setScrolling] = React.useState();

  /*async function getLoginStatus() {
    try {
      const response = await api.get("/logged");
      setIsLoggedIn(response.data);
    } catch (error) {}
  }*/

  /*React.useEffect(() => {
    let mounted = true;

    if (mounted) {
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
  }, []);*/

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
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

  return (
    <component.NavbarContainer
      scrolling={scrolling ? scrolling.toString() : undefined}
    >
      <div>
        <A href="/">Home</A>
        <A href="/carrinho">Carrinho</A>
        <A href="/produtos/all">Produtos</A>
      </div>
      <div id="menu" className="user">
        <A href="/login">Login</A>
        <A href="/cadastro">Cadastrar</A>
      </div>
    </component.NavbarContainer>
  );
}

export default React.memo(Navbar);
