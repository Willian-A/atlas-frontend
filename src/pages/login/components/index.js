import React, { useState } from "react";
import { navigate } from "hookrouter";

import api from "../../../api";

import * as component from "./components";
import { H5, H3, H2 } from "../../../components/text";
import Input from "../../../components/input";
import Button from "../../../components/button";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [err, setErr] = useState(" ");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/login", {
        email,
        password,
      });
      navigate("/");
    } catch (error) {
      setErr(error.response.data);
    }
  }

  return (
    <component.LoginContainer>
      <H5>
        <a href="/">Voltar a Pagina Incial</a>
      </H5>
      <H2>Login</H2>
      <H3>{err}</H3>
      <form onSubmit={handleSubmit} autoComplete="on">
        <Input
          type="email"
          placeholder="Email"
          autoComplete="on"
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
        <H5>
          <a href="/senha">Esqueceu sua Senha</a>
        </H5>
        <Button width="100%" type="submit">
          Login
        </Button>
      </form>
      <H5>
        Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
      </H5>
    </component.LoginContainer>
  );
}
