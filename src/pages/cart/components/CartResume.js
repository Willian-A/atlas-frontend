import React from "react";

import FlexContainer from "../../../styled/flex-container";
import * as text from "../../../components/text";
import Button from "../../../styled/button";

export default function CartResume(props) {
  return (
    <>
      <text.BigBold>Resumo:</text.BigBold>
      <FlexContainer padding="0" shadow="0" direction="row">
        <text.MediumSemiBold>Total</text.MediumSemiBold>
        <text.MediumSemiBold>R$ {props.value}</text.MediumSemiBold>
      </FlexContainer>
      <Button>Finalizar</Button>
    </>
  );
}
