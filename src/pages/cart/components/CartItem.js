import React, { useState, useEffect } from "react";

import * as components from "./component";
import * as text from "../../../components/text";

import Button from "../../../styled/button";
import importAll from "../../../functions/importAll";

import api from "../../../api";

export default function CartItem(props) {
  const [images, setImages] = useState([]);
  const decimalFormat = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setImages(
        importAll(
          require.context(
            "../../../assets/images/products/medium",
            false,
            /\.(webp)$/
          )
        )
      );
    }

    return function cleanup() {
      mounted = false;
    };
  }, [props]);

  async function productQty(action) {
    try {
      await api.post("/cart", {
        productID: props.id,
        action: action,
      });
      window.location.reload();
    } catch (error) {}
  }

  return (
    <components.CardContainer>
      <img src={images[`${props.image}`]} alt="" />
      <components.CardBio>
        <text.MediumBold>{props.name}</text.MediumBold>
        <text.MediumSemiBold>
          R$ {decimalFormat.format(props.price * props.qty)}
        </text.MediumSemiBold>
        <text.SmallLight>R$ {props.price}</text.SmallLight>
        <components.CardQty>
          <Button
            width="100px"
            fontSize="25px"
            padding="0 10px"
            onClick={() => {
              productQty("add");
            }}
          >
            +
          </Button>
          <text.MediumSemiBold>{props.qty}</text.MediumSemiBold>
          <Button
            width="100px"
            fontSize="25px"
            padding="0 10px"
            onClick={() => {
              productQty("remove");
            }}
          >
            -
          </Button>
        </components.CardQty>
      </components.CardBio>
    </components.CardContainer>
  );
}
