import React from "react";

import FlexContainer from "../../../atoms/flex-container";
import * as text from "../../../atoms/text";

export default function CartResume(props) {
  return (
    <FlexContainer padding="0" shadow="0" direction="row">
      <text.Text font="22px" color="black">
        Total
      </text.Text>
      <text.Text font="22px" margin="0 0 0 auto" color="black">
        R$ {props.value}
      </text.Text>
    </FlexContainer>
  );
}
