import React from "react";

import * as components from "./component";
import { P, H3, H2 } from "../../../components/text";
import Button from "../../../components/button";
import { smallProductImages } from "../../../functions/importImages";

import api from "../../../api";

export default function CartItem(props) {
  const images = smallProductImages();
  const decimalFormat = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
  });
  console.log(props);
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
        <H2>{props.name}</H2>
        <H3>R$ {decimalFormat.format(props.totalPrice)}</H3>
        <P>R$ {props.price}</P>
        <components.CardQty>
          <Button
            width="50px"
            fontSize="25px"
            padding="0 10px"
            onClick={() => {
              productQty("add");
            }}
          >
            +
          </Button>
          <H2>{props.qty}</H2>
          <Button
            width="50px"
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
