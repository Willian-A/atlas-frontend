import React from "react";
import { A } from "hookrouter";

import * as components from "./component";
import { P, H3, H2 } from "../../../components/text";
import Button from "../../../components/button";
import { smallProductImages } from "../../../functions/importImages";

import api from "../../../api";

export default function CartItem(props) {
  const images = smallProductImages();

  async function add(action) {
    try {
      await api.post("/add_cart", {
        id: props._id,
      });
      window.location.reload();
    } catch (error) {}
  }

  async function remove(action) {
    try {
      await api.post("/remove_cart", {
        id: props._id,
      });
      window.location.reload();
    } catch (error) {}
  }

  return (
    <components.CardContainer>
      <A href={`/produto/${props._id}`}>
        <img src={images[`${props.image}`]} alt="" />
      </A>
      <components.CardBio>
        <H2>{props.name}</H2>
        <H3>R$ {props.total.toFixed(2)}</H3>
        <P>R$ {props.price.toFixed(2)}</P>
        <components.CardQty>
          <Button
            width="50px"
            fontSize="25px"
            padding="0 10px"
            onClick={() => {
              add();
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
              remove();
            }}
          >
            -
          </Button>
        </components.CardQty>
      </components.CardBio>
    </components.CardContainer>
  );
}
