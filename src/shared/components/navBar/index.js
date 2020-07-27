import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../service/api";

import "./style.css";

function NavBar() {
  const [logged, setLogged] = useState();

  function openMobileNav() {
    document.getElementById("mobile-pages").style.width = "100%";
  }

  function closeMobileNav() {
    document.getElementById("mobile-pages").style.width = "0";
  }

  async function isLogged() {
    try {
      let response = await api.get("/logged", {
        withCredentials: true,
      });
      setLogged(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    try {
      await api.get("/logout", {
        withCredentials: true,
      });
      isLogged();
    } catch (error) {
      console.log(error);
    }
  }

  function userButtons() {
    if (logged === true) {
      return (
        <ul className="secondary-pages">
          <li>
            <Link to="/" onClick={() => logout()}>
              Sair
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="secondary-pages">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Cadastro</Link>
          </li>
        </ul>
      );
    }
  }

  useEffect(() => {
    isLogged();
  }, []);

  return (
    <div className="nav-bar">
      <div className="desktop-bar">
        <ul className="main-pages">
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
        {userButtons()}
      </div>
      <div className="mobile-bar">
        <div id="mobile-pages" className="mobile-pages">
          <button
            className="closebtn"
            onClick={() => {
              closeMobileNav();
            }}
          >
            &times;
          </button>
          <ul className="main-pages">
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
          {userButtons()}
        </div>
        <span
          onClick={() => {
            openMobileNav();
          }}
        >
          &#9776; Menu{" "}
        </span>
      </div>
    </div>
  );
}

export default NavBar;
