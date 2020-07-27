import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "../../global.css";
import "./style.css";

import api from "../../service/api.js";
import importAll from "../../utils/importAll";

import { YellowButton } from "../../shared/components/buttons/style";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    await handleRegister();
  }

  async function handleRegister() {
    let msgLog = document.getElementById("msgLog");
    try {
      await api.post(
        "/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      history.push("/");
    } catch (error) {
      msgLog.innerHTML = error.response.data;
      msgLog.style.color = "red";
    }
    msgLog.style.visibility = "visible";
  }

  let images = importAll(
    require.context("../../shared/images/login", false, /\.(png)$/)
  );

  return (
    <div className="box-container">
      <div className="box">
        <div className="container">
          <form onSubmit={handleSubmit} className="inputs">
            <h1>
              <Link to="/">Voltar a Página Inicial</Link>
            </h1>
            <h2>Login</h2>
            <h3
              id="msgLog"
              style={{
                fontSize: "14.5px",
                textAlign: "center",
                marginBottom: "15px",
                visibility: "hidden",
              }}
            >
              Logado com Sucesso!
            </h3>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name="pass"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />

            <a href="#test">
              <h3>Esqueci minha senha</h3>
            </a>

            <YellowButton borderRadius="0" defineHeight="35px">
              Login
            </YellowButton>

            <h4>
              Não tem um cadastro? <Link to="/register">Cadastre-se</Link>
            </h4>
          </form>
          <img src={images["logo.png"]} alt="" />
        </div>
      </div>
    </div>
  );
}
