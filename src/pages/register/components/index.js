import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import InputMask from "react-input-mask";

import api from "../../../api";

import * as component from "./component";
import * as text from "../../../components/text";

import Input from "../../../styled/input";
import Button from "../../../styled/button";

export default function RegisterCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cpf, setCpf] = useState("");
  const [err, setErr] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/cadastrar", {
        name,
        email,
        password,
        cpf,
      });
      history.push("/login");
    } catch (error) {
      setErr(error.response.data);
    }
  }

  return (
    <component.UserContainer>
      <text.SmallSemiBold>
        <Link to="/">Voltar a Pagina Incial</Link>
      </text.SmallSemiBold>
      <text.BigBold>Cadastro</text.BigBold>
      <text.MediumSemiBold>{err}</text.MediumSemiBold>
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
        <Button width="100%" margin="20px 0 10px" type="submit">
          Login
        </Button>
      </form>
      <text.SmallSemiBold margin="5px auto 0" font="13px">
        Já tem uma conta? <Link to="/login">Faça Login</Link>
      </text.SmallSemiBold>
    </component.UserContainer>
  );
}
