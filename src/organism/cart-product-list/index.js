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
      <div style={{ display: "flex", flexDirection: "row" }}>
        <components.CartListContainer>
          <CartCard />
          <CartCard />
          <CartCard />
        </components.CartListContainer>
        <div
          style={{
            boxShadow: " 0px 0px 15px 3px rgba(0, 0, 0, 0.2)",
            width: "40%",
          }}
        >
          <h1>blá blá blá pagar...</h1>
        </div>
      </div>
    </div>
  );
}
