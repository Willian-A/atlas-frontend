import React from "react";
import { Link } from "react-router-dom";

import FlexContainer from "../../atoms/flex-container";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import * as text from "../../atoms/text";

export default function LoginCard() {
  return (
    <FlexContainer width="fit-content" margin="0 auto" top="25%">
      <text.H4Link>
        <Link to="/">Voltar a Pagina Incial</Link>
      </text.H4Link>
      <text.H2Title>Login</text.H2Title>
      <Input placeholder="Email" />
      <Input placeholder="Senha" />
      <text.Text font="13px">
        <Link to="/senha">Esqueceu sua Senha</Link>
      </text.Text>
      <Button width="100%" margin="20px 0 10px">
        Login
      </Button>
      <text.Text margin="5px auto 0" font="13px">
        Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
      </text.Text>
    </FlexContainer>
  );
}
