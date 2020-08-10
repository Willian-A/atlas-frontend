import React from "react";

import * as components from "./component";
import CartCard from "../../../molecules/cart/product-card";
import CartResume from "../../../molecules/cart/resume";
import Button from "../../../atoms/button";
import FlexContainer from "../../../atoms/flex-container";

export default function CartList() {
  return (
    <div>
      <components.PageNameBox>
        <h1>Seu Carrinho</h1>
        <h5>1 itens</h5>
      </components.PageNameBox>
      <FlexContainer padding="0" shadow="0" direction="row">
        <components.CartListContainer>
          <CartCard />
          <CartCard />
          <CartCard />
        </components.CartListContainer>
        <components.ResumeContainer>
          <h1>Resumo:</h1>
          <CartResume value="779.97" />
          <Button width="100%" margin="10px 0 0">
            Finalizar
          </Button>
        </components.ResumeContainer>
      </FlexContainer>
    </div>
  );
}
