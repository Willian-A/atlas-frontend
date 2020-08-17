import React, { useState, useEffect } from "react";

import * as components from "./component";
import Button from "../../../../styled/button";
import importAll from "../../../../functions/importAll";

import api from "../../../../api";

export default function CartItem(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(
      importAll(
        require.context("../../../../assets/images/products", false, /\.(jpg)$/)
      )
    );
  }, [props]);

  async function addOnCart() {
    try {
      await api.post("/cart", {
        productID: props.id,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <components.CardContainer>
      <img src={images[`${props.image}.jpg`]} alt="" />
      <components.CardBio>
        <h2>{props.name}</h2>
        <h3>R$ {props.price}</h3>
        <h5>R$ 259.99</h5>
        <components.CardQty>
          <Button
            width="55%"
            fontSize="25px"
            padding="0 10px"
            onClick={() => {
              addOnCart();
            }}
          >
            +
          </Button>
          <h4>{props.qty}</h4>
          <Button
            width="55%"
            fontSize="25px"
            padding="0 10px"
            onClick={() => {
              addOnCart();
            }}
          >
            -
          </Button>
        </components.CardQty>
      </components.CardBio>
    </components.CardContainer>
  );
}
