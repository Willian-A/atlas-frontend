import React, { useState, useEffect } from "react";

import * as components from "./component";

import Button from "../../../../styled/button";
import api from "../../../../api";

import CartResume from "./CartResume";
import CartItem from "./CartItem";

export default function CartList() {
  const [carResult, setCartResult] = useState([]);
  const [cartTotal, setCartTotal] = useState("0");

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      async function getCart() {
        try {
          const response = await api.get("/cart");
          setCartResult(response.data.newResult);
          setCartTotal(response.data.totalPrice);
        } catch (error) {
          console.log(error);
        }
      }
      getCart();
    }

    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <components.PageNameBox>
        <h1>Seu Carrinho</h1>
        <h5>{carResult.length} itens</h5>
      </components.PageNameBox>
      <components.CartContainer>
        <components.CartListContainer>
          {carResult.map((value) => {
            return (
              <CartItem
                key={value.id_product}
                id={value.id_product}
                image={value.image}
                name={value.name}
                qty={value.quantity}
                price={value.price}
              />
            );
          })}
        </components.CartListContainer>
        <components.ResumeContainer>
          <h1>Resumo:</h1>
          <CartResume value={cartTotal} />
          <Button>Finalizar</Button>
        </components.ResumeContainer>
      </components.CartContainer>
    </div>
  );
}
