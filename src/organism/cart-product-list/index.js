import React from "react";

import * as components from "./component";
import CartCard from "../../molecules/cart-product-card";

export default function CartList() {
  return (
    <div>
      <components.PageNameBox>
        <h1>Seu Carrinho</h1>
        <h5>1 itens</h5>
      </components.PageNameBox>
      <components.CartListContainer>
        <CartCard />
        <CartCard />
        <CartCard />
      </components.CartListContainer>
    </div>
  );
}
