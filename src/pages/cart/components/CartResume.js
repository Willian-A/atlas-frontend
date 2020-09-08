import React from "react";

import FlexContainer from "../../../styled/flex-container";
import * as text from "../../../styled/text";
import Button from "../../../styled/button";

export default function CartResume(props) {
  return (
    <>
      <h1>Resumo:</h1>
      <FlexContainer padding="0" shadow="0" direction="row">
        <text.Text font="22px" color="black">
          Total
        </text.Text>
        <text.Text font="22px" margin="0 0 0 auto" color="black">
          R$ {props.value}
        </text.Text>
      </FlexContainer>
      <Button>Finalizar</Button>
    </>
  );
}
