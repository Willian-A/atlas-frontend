import React from "react";
import { A } from "hookrouter";

import * as component from "./component.js";
import { H3, H4 } from "../text/text";
import Button from "../../styled/button";
import DivPlaceholder from "../placeholder";

function Card(props) {
  return (
    <component.CardBox shouldDisplayLast={true}>
      <A href={`/produto/${props.id_product}`}>
        <DivPlaceholder alt={props.name} img={props.img} />
        <component.CardBio>
          <H4>{props.name}</H4>
          <H3>R$ {props.price}</H3>
          <Button width="100%">Ver Produto</Button>
        </component.CardBio>
      </A>
    </component.CardBox>
  );
}

export default Card;
