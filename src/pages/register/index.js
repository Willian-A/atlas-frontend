import React, { useState } from "react";
import { Link } from "react-router-dom";

import InputMask from "react-input-mask";
import api from "../../service/api.js";

import "../../global.css";
import "./style.css";
import importAll from "../utils/importAll";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cpf, setCpf] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await handleRegister();
  }
  async function handleRegister() {
    var msgLog = document.getElementById("msgLog");
    try {
      await api.post("/cadastrar", {
        name,
        email,
        password,
        cpf,
      });
      msgLog.style.color = "green";
      msgLog.innerHTML = "Registrado com Sucesso! Faça Login";
      msgLog.style.visibility = "visible";
      setName("");
      setEmail("");
      setPass("");
      setCpf("");
    } catch (error) {
      msgLog.innerHTML = error.response.data;
      msgLog.style.color = "red";
      msgLog.style.visibility = "visible";
    }
  }

  let images = importAll(
    require.context("../../images/login", false, /\.(png)$/)
  );

  return (
    <div className="box-container">
      <div className="box">
        <div className="container">
          <form onSubmit={handleSubmit} className="inputs">
            <h1>
              <Link to="/">Voltar a Página Inicial</Link>
            </h1>
            <h2>Cadastro</h2>
            <h3
              id="msgLog"
              style={{
                fontSize: "14.5px",
                textAlign: "center",
                marginBottom: "15px",
                visibility: "hidden",
              }}
            >
              Registrado com Sucesso! Faça <Link to="/login">Login</Link>
            </h3>
            <input
              name="name"
              type="text"
              value={name}
              placeholder="Nome"
              minLength="2"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              name="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              name="pass"
              type="password"
              value={password}
              placeholder="Senha"
              minLength="8"
              onChange={(e) => setPass(e.target.value)}
            />
            <InputMask
              name="cpf"
              mask="999.999.999-99"
              value={cpf}
              maskChar=""
              placeholder="CPF"
              minLength="11"
              onChange={(e) => setCpf(e.target.value)}
            />

            <button>Cadastrar</button>

            <h4>
              Já tem um cadastro? Faça <Link to="/login">Login</Link>
            </h4>
          </form>
          <img src={images["logo.png"]} alt="" />
        </div>
      </div>
    </div>
  );
}
