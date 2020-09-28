import React, { useState } from "react";
import { A } from "hookrouter";

import api from "../../../api";

import * as component from "./components";
import * as text from "../../../components/text";

import Input from "../../../styled/input";
import Button from "../../../styled/button";

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
    } catch (error) {
      setErr(error.response.data);
    }
  }

  return (
    <component.UserContainer>
      <text.SmallSemiBold>
        <A href="/">Voltar a Pagina Incial</A>
      </text.SmallSemiBold>
      <text.BigBold>Login</text.BigBold>
      <text.MediumSemiBold>{err}</text.MediumSemiBold>
      <form action="" onSubmit={handleSubmit}>
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
        <text.SmallSemiBold>
          <A href="/senha">Esqueceu sua Senha</A>
        </text.SmallSemiBold>
        <Button width="100%" margin="20px 0 10px" type="submit">
          Login
        </Button>
      </form>
      <text.SmallSemiBold>
        Não tem uma conta? <A href="/cadastro">Cadastre-se</A>
      </text.SmallSemiBold>
    </component.UserContainer>
  );
}
