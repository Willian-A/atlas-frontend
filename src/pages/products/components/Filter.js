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
        <text.H3_Medium>{props.name}</text.H3_Medium>
        <component.FilterOptions open={open}>
          {props.options.map((name, index) => {
            return <text.H4_Medium key={index}>{name}</text.H4_Medium>;
          })}
        </component.FilterOptions>
      </component.FilterBox>
    </>
  );
}

export default Filter;
