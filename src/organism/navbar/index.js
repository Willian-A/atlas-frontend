import React from "react";
import { Link } from "react-router-dom";

import * as component from "./component";
import MenuBar from "../../images/icons/menu-bar";

export default function Navbar() {
  return (
    <component.NavbarContainer>
      <ul>
        <div
          className="icon"
          onClick={() => {
            console.log("CLICO K K K ");
          }}
        >
          <MenuBar />
        </div>
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
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/carrinho">Cadastrar</Link>
        </li>
      </ul>
    </component.NavbarContainer>
  );
}
