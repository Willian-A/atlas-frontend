import React, { useState, useEffect } from "react";

import * as components from "./component";
import * as text from "../../../components/text";
import api from "../../../api";
import CartResume from "./CartResume";
import CartItem from "./CartItem";

export default function CartList() {
  const [carResult, setCartResult] = useState([]);
  const [cartTotal, setCartTotal] = useState("0");
  const [error, setError] = useState({ error: true, message: null });

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      async function getCart() {
        try {
          const response = await api.get("/cart");
          setCartResult(response.data.newResult);
          setCartTotal(response.data.totalPrice);
          setError({ error: false, message: null });
        } catch (error) {
          setError({ error: true, message: error.response.data });
        }
      }
      getCart();
    }

    return () => (isMounted = false);
  }, []);

  function checkLogin() {
    if (error.error)
      return (
        <>
          <text.BigBold style={{ margin: "10% auto", width: "fit-content" }}>
            {error.message}
          </text.BigBold>
        </>
      );

    return (
      <>
        <components.PageNameBox>
          <text.BigBold>Seu Carrinho</text.BigBold>
          <text.SmallSemiBold>{carResult.length} itens</text.SmallSemiBold>
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
            <CartResume value={cartTotal} />
          </components.ResumeContainer>
        </components.CartContainer>
      </>
    );
  }

  return checkLogin();
}
