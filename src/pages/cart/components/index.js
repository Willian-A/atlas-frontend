import React, { useState, useEffect } from "react";

import * as components from "./component";
import { H5, H2 } from "../../../components/text";
import api from "../../../api";
import CartResume from "./cartResume";
import CartItem from "./cartItem";

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
          setCartResult(response.data.dbResult);
          setCartTotal(response.data.cartTotal);
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
          <H2
            style={{
              margin: "10% auto",
              width: "fit-content",
              fontWeight: "400",
            }}
          >
            {error.message}
          </H2>
        </>
      );

    return (
      <>
        <components.PageNameBox>
          <H2>Seu Carrinho</H2>
          <H5>{carResult.length} itens</H5>
        </components.PageNameBox>
        <components.CartContainer>
          <components.CartListContainer>
            {carResult.map((value) => {
              return (
                <CartItem
                  key={value._id}
                  id={value._id}
                  image={value.image}
                  name={value.name}
                  qty={value.qty}
                  total={value.total}
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
