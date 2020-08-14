import React from "react";

import * as components from "./component";

import Button from "../../../../styled/button";

import CartResume from "./CartResume";
import CartItem from "./CartItem";

export default function CartList() {
  return (
    <div>
      <components.PageNameBox>
        <h1>Seu Carrinho</h1>
        <h5>1 itens</h5>
      </components.PageNameBox>
      <components.CartContainer>
        <components.CartListContainer>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </components.CartListContainer>
        <components.ResumeContainer>
          <h1>Resumo:</h1>
          <CartResume value="779.97" />
          <Button>Finalizar</Button>
        </components.ResumeContainer>
      </components.CartContainer>
    </div>
  );
}
