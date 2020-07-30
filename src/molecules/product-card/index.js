import React from "react";

import * as component from "./component";
import cover from "../../images/products/cyberpunk2077.jpg";
import Button from "../../atoms/button";

export default function Card(props) {
  return (
    <component.CardBox>
      <img src={cover} alt="cyberpunk" />
      <component.CardBio>
        <h4>Cyberpunk 2077{props.name}</h4>
        <h3>R$259.99{props.price}</h3>
        <Button width="100%">Ver Produto</Button>
      </component.CardBio>
    </component.CardBox>
  );
}
