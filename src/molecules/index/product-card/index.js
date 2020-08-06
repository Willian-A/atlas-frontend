import React from "react";

import * as component from "./component";
import Button from "../../../atoms/button";

export default function Card(props) {
  return (
    <component.CardBox>
      <img src={props.cover} alt={props.name} />
      <component.CardBio>
        <h4>{props.name}</h4>
        <h3>R${props.price}</h3>
        <Button width="100%">Ver Produto</Button>
      </component.CardBio>
    </component.CardBox>
  );
}
