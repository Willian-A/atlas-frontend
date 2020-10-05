import React from "react";
import { A } from "hookrouter";

import * as component from "./component";
import * as text from "../../../components/text";
import Button from "../../../styled/button";

export default function ProductCard(props) {
  return (
    <component.CardBox>
      <A href={`/produto/${props.id_product}`}>
        <img src={props.img} alt={props.name} />
        <component.CardBio>
          <text.SmallSemiBold>{props.name}</text.SmallSemiBold>
          <text.MediumSemiBold>R$ {props.price}</text.MediumSemiBold>
          <Button width="100%">Ver Produto</Button>
        </component.CardBio>
      </A>
    </component.CardBox>
  );
}
