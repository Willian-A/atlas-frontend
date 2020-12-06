import React, { useState } from "react";
import { navigate } from "hookrouter";
import InputMask from "react-input-mask";

import api from "../../../api";

import * as component from "./component";
import { H5, H3, H2 } from "../../../components/text/text";
import Input from "../../../components/input";
import Button from "../../../components/button";

export default function RegisterCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cpf, setCpf] = useState("");
  const [err, setErr] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/cadastrar", {
        name,
        email,
        password,
        cpf,
      });
      navigate("/login");
    } catch (error) {
      setErr(error.response);
    }
  }

  return (
    <component.UserContainer>
      <H5>
        <a href="/">Voltar a Pagina Incial</a>
      </H5>
      <H2>Cadastro</H2>
      <H3>{err}</H3>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="Nome"
          minLength="2"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          minLength="8"
          required
          onChange={(e) => setPass(e.target.value)}
        />
        <InputMask
          mask="999.999.999-99"
          maskChar=""
          minLength="11"
          onChange={(e) => setCpf(e.target.value)}
        >
          {() => {
            return <Input placeholder="CPF" required />;
          }}
        </InputMask>
        <Button width="100%" type="submit">
          Login
        </Button>
      </form>
      <H5>
        Já tem uma conta? <a href="/login">Faça Login</a>
      </H5>
    </component.UserContainer>
  );
}
