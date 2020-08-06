import React from "react";

import * as components from "./component";
import CartCard from "../../molecules/cart-product-card";
import Button from "../../atoms/button";

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
            boxShadow: " 0px 0px 15px 3px rgba(0, 0, 0, 0.08)",
            width: "30%",
            padding: "15px 20px",
          }}
        >
          <h1>Resumo:</h1>
          <div
            style={{
              display: "flex",
              position: "relative",
              marginTop: "10px",
              marginBottom: "5px",
              borderTop: "2px rgba(0, 0, 0, 0.5) solid",
            }}
          >
            <h2
              style={{
                margin: "10px 0 0 0",
              }}
            >
              Total
            </h2>
            <h2
              style={{
                margin: "10px 0 0 auto",
              }}
            >
              R$ 499.99
            </h2>
          </div>
          <Button width="100%">CLICA AI</Button>
        </div>
      </div>
    </div>
  );
}
