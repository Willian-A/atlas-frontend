import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  function openMobileNav() {
    document.getElementById("mobile-pages").style.width = "100%";
  }

  function closeMobileNav() {
    document.getElementById("mobile-pages").style.width = "0";
  }
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
            <a href="#travesti">Produtos</a>
          </li>
        </ul>
        <ul className="secondary-pages">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Cadastro</Link>
          </li>
        </ul>
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
              <a href="#travesti">Produtos</a>
            </li>
          </ul>
          <ul className="secondary-pages">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
          </ul>
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
