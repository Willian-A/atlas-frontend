import React from "react";

import { H3, H2 } from "../../../components/text";
import Button from "../../../components/button";

export default function CartResume(props) {
  return (
    <>
      <H2>Resumo:</H2>
      <div>
        <H3>Total</H3>
        <H3>R$ {props.value}</H3>
      </div>
      <Button width="100%" margin="10px 0 0">
        Finalizar
      </Button>
    </>
  );
}
