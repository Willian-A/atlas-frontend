import React from "react";
import { Link } from "react-router-dom";

import "../../global.css";
import "./style.css";
import importAll from "../utils/importAll";

export default function Login() {
  let images = importAll(
    require.context("../../images/login", false, /\.(png)$/)
  );

  return (
    <div className="box-container">
      <div className="box">
        <div className="cover"></div>
        <div className="container">
          <div className="inputs">
            <h1>
              <Link to="/">Voltar a Página Inicial</Link>
            </h1>
            <h2>Login</h2>
            <input name="email" type="text" placeholder="Email" />
            <input name="pass" type="password" placeholder="Senha" />

            <a href="#test">
              <h3>Esqueci minha senha</h3>
            </a>

            <button>Login</button>

            <h4>
              Não tem um cadastro? <Link to="/register">Castre-se</Link>
            </h4>
          </div>
          <img src={images["logo.png"]} alt="" />
        </div>
      </div>
    </div>
  );
}
