import React from "react";
import { Link } from "react-router-dom";

import * as component from "./component";
import * as text from "../../../components/text";
import Button from "../../../styled/button";

export default function ProductCard(props) {
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
          <text.SmallSemiBold>{props.name}</text.SmallSemiBold>
          <text.MediumSemiBold>R$ {props.price}</text.MediumSemiBold>
          <Button width="100%">Ver Produto</Button>
        </component.CardBio>
      </Link>
    </component.CardBox>
  );
}
