import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../../../service/api.js";

import FlexContainer from "../../../../atoms/flex-container";
import Input from "../../../../atoms/input";
import Button from "../../../../atoms/button";
import * as text from "../../../../atoms/text";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [err, setErr] = useState(" ");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/login", {
        email,
        password,
      });
      history.push("/");
    } catch (error) {
      setErr(error.response.data);
    }
  }

  return (
    <FlexContainer width="fit-content" margin="0 auto" top="25%">
      <text.H4Link>
        <Link to="/">Voltar a Pagina Incial</Link>
      </text.H4Link>
      <text.H2Title>Login</text.H2Title>
      <text.Text height="25px" margin="0 auto 5px" font="18px" color="red">
        {err}
      </text.Text>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          required
          onChange={(e) => setPass(e.target.value)}
        />
        <text.Text font="13px">
          <Link to="/senha">Esqueceu sua Senha</Link>
        </text.Text>
        <Button width="100%" margin="20px 0 10px" type="submit">
          Login
        </Button>
      </form>
      <text.Text margin="5px auto 0" font="13px">
        Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
      </text.Text>
    </FlexContainer>
  );
}
