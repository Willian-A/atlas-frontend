import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import InputMask from "react-input-mask";

import api from "../../../../api";

import FlexContainer from "../../../../styled/flex-container";
import Input from "../../../../styled/input";
import Button from "../../../../styled/button";
import * as text from "../../../../styled/text";

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
    <FlexContainer width="fit-content" margin="0 auto" top="25%">
      <text.H4Link>
        <Link to="/">Voltar a Pagina Incial</Link>
      </text.H4Link>
      <text.H2Title>Cadastro</text.H2Title>
      <text.Text height="25px" margin="0 auto 5px" font="18px" color="red">
        {err}
      </text.Text>
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
      <text.Text margin="5px auto 0" font="13px">
        Já tem uma conta? <Link to="/login">Faça Login</Link>
      </text.Text>
    </FlexContainer>
  );
}
