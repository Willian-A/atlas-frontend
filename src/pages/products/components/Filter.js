import React, { useState } from "react";
import * as component from "./component";

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
        <h3>{props.name}</h3>
        <component.FilterOptions open={open}>
          {props.options.map((name, index) => {
            return <h4 key={index}>{name}</h4>;
          })}
        </component.FilterOptions>
      </component.FilterBox>
    </>
  );
}

export default Filter;
