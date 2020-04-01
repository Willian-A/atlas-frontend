import React from "react";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

import "../../global.css";
import "./style.css";
import importAll from "../utils/importAll";

export default function Cadastro() {
  let images = importAll(
    require.context("../../images/login", false, /\.(png)$/)
  );
  return (
    <div className="box-container">
      <div className="box">
        <div className="container">
          <div className="inputs">
            <h1>
              <Link to="/">Voltar a Página Inicial</Link>
            </h1>
            <h2>Cadastro</h2>
            <input name="email" type="text" placeholder="Email" />

            <input
              name="pass"
              type="password"
              placeholder="Senha"
              minLength="5"
            />
            <InputMask
              name="cpf"
              mask="999.999.999-99"
              maskChar=""
              placeholder="CPF"
            />
            <InputMask
              name="phone"
              mask="(99) 99999-9999"
              maskChar=""
              placeholder="Telefone"
            />

            <button>Login</button>

            <h4>
              Já tem um cadastro? Faça <Link to="/login">Login</Link>
            </h4>
          </div>
          <img src={images[0]} alt="" />
        </div>
      </div>
    </div>
  );
}
