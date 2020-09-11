import React, { useState } from "react";

import * as component from "./component";
import * as text from "../../../components/text";

function Filter(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <component.FilterBox
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <text.MediumSemiBold>{props.name}</text.MediumSemiBold>
        <component.FilterOptions open={open}>
          {props.options.map((name, index) => {
            return <text.SmallSemiBold key={index}>{name}</text.SmallSemiBold>;
          })}
        </component.FilterOptions>
      </component.FilterBox>
    </>
  );
}

export default Filter;
