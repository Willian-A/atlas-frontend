import React from "react";
import { A } from "hookrouter";

import * as component from "./component.js";
import { H3, H4 } from "../text";
import Button from "../../components/button";
import Placeholder from "./placeholder";

function Card(props) {
  const [teste, setTeste] = React.useState();

  function a() {
    if (teste) {
      return <></>;
    } else {
      return <Placeholder />;
    }
  }

  return (
    <component.CardBox shouldDisplayLast={true}>
      <A href={`/produto/${props._id}`}>
        {a()}
        <img alt={props.name} src={props.img} onLoad={() => setTeste(true)} />
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
