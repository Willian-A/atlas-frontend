import React from "react";
import { A } from "hookrouter";

import * as component from "./component.js";
import { H3, H4 } from "../text";
import Button from "../button";

function Card(props) {
  return (
    <component.CardBox shouldDisplayLast={true}>
      <A href={`/produto/${props.product_id}`}>
        <img alt={props.name} src={props.img} />
        <component.CardBio>
          <H4>{props.name}</H4>
          <H3>
            R$
            {props.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </H3>
          <Button width="100%">Ver Produto</Button>
        </component.CardBio>
      </A>
    </component.CardBox>
  );
}

export default Card;
