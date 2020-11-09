import React from "react";

import FlexContainer from "../../../styled/flex-container";
import { H3, H2 } from "../../../components/text/text";
import Button from "../../../styled/button";

export default function CartResume(props) {
  return (
    <>
      <H2>Resumo:</H2>
      <FlexContainer padding="0" shadow="0" direction="row">
        <H3>Total</H3>
        <H3>R$ {props.value}</H3>
      </FlexContainer>
      <Button width="100%" margin="10px 0 0">
        Finalizar
      </Button>
    </>
  );
}
