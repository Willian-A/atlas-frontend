import React from "react";
import { Link } from "react-router-dom";

import * as component from "./component";
import Button from "../../../../styled/button";

function ProductCard(props) {
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
          <h4>{props.name}</h4>
          <h3>R$ {props.price}</h3>
          <Button width="100%">Ver Produto</Button>
        </component.CardBio>
      </Link>
    </component.CardBox>
  );
}

export default ProductCard;
