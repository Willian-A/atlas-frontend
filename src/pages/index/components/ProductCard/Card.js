import React from "react";
import { Link } from "react-router-dom";

import * as component from "./component";
import * as text from "../../../../components/text";
import Button from "../../../../styled/button";

export default function Card(props) {
  return (
    <component.CardBox>
      <Link
        to={{
          pathname: "/produto",
          state: props.id_product,
        }}
      >
        <img src={props.cover} alt={props.name} />
        <component.CardBio>
          <text.H4_Medium>{props.name}</text.H4_Medium>
          <text.H4_Big>R$ {props.price}</text.H4_Big>
          <Button width="100%">Ver Produto</Button>
        </component.CardBio>
      </Link>
    </component.CardBox>
  );
}
