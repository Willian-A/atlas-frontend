import React from "react";
import { A } from "hookrouter";

import * as component from "./component";
import * as text from "../../../../components/text";
import Button from "../../../../styled/button";
import DivPlaceholder from "../../../../components/Placeholder";

export default function Card(props) {
  return (
    <component.CardBox>
      <A href={`/produto/${props.id_product}`}>
        <DivPlaceholder alt={props.name} img={props.img} />
        <component.CardBio>
          <text.SmallSemiBold>{props.name}</text.SmallSemiBold>
          <text.MediumSemiBold>R$ {props.price}</text.MediumSemiBold>
          <Button width="100%">Ver Produto</Button>
        </component.CardBio>
      </A>
    </component.CardBox>
  );
}
