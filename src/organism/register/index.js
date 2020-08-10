import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

import api from "../../service/api.js";

import FlexContainer from "../../atoms/flex-container";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import * as text from "../../atoms/text";

export default function RegisterCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cpf, setCpf] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/cadastrar", {
        name,
        email,
        password,
        cpf,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  }
  return (
    <FlexContainer width="fit-content" margin="0 auto" top="25%">
      <text.H4Link>
        <Link to="/">Voltar a Pagina Incial</Link>
      </text.H4Link>
      <text.H2Title>Cadastro</text.H2Title>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="Nome"
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
      <text.Text margin="5px auto 0" font="13px">
        Já tem uma conta? <Link to="/login">Faça Login</Link>
      </text.Text>
    </FlexContainer>
  );
}
