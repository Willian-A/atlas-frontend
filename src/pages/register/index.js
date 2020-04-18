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
  const [phone, setPhone] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await handleRegister();
  }
  async function handleRegister() {
    var msgLog = document.getElementById("teste");
    try {
      await api.post("/cadastrar", {
        name,
        email,
        password,
        cpf,
        phone,
      });
      msgLog.style.color = "green";
      msgLog.innerHTML =
        'Registrado com Sucesso! Faça <Link to="/login">Login</Link>';
      msgLog.style.visibility = "visible";
    } catch (error) {
      if (error.response.status === 422) {
        msgLog.style.color = "red";
        msgLog.innerHTML = "Campos com Conteudo Invalido";
        msgLog.style.visibility = "visible";
      } else if (error.response.status === 409) {
        msgLog.style.color = "red";
        msgLog.innerHTML = "Email ou CPF Já Cadastrados";
        msgLog.style.visibility = "visible";
      }
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
              id="teste"
              style={{
                color: "green",
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
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              name="pass"
              type="password"
              placeholder="Senha"
              minLength="8"
              onChange={(e) => setPass(e.target.value)}
            />
            <InputMask
              name="cpf"
              mask="999.999.999-99"
              maskChar=""
              placeholder="CPF"
              onChange={(e) => setCpf(e.target.value)}
            />
            <InputMask
              name="phone"
              mask="(99) 99999-9999"
              maskChar=""
              placeholder="Telefone"
              onChange={(e) => setPhone(e.target.value)}
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
