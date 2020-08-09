import React from "react";

import * as component from "./component";
import Input from "../../atoms/input";
import Button from "../../atoms/button";

export default function LoginCard() {
  return (
    <component.LoginContainer>
      <h4>Voltar a Pagina Incial</h4>
      <h2>Login</h2>
      <Input placeholder="Email" />
      <Input placeholder="Senha" />
      <h5>Esqueceu a Senha</h5>
      <Button width="100%" margin="20px 0 0">
        Login
      </Button>
      <h5>Não tem uma conta? Cadastre-se</h5>
    </component.LoginContainer>
  );
}
