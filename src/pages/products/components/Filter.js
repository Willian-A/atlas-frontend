import React, { useState } from "react";
import { navigate } from "hookrouter";

import * as component from "./component";
import * as text from "../../../components/text";

function Filter(props) {
  const [open, setOpen] = useState(false);

  async function selectProducts(index) {
    navigate(`/produtos/${index}`);
    window.location.reload();
  }

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
            return (
              <text.SmallSemiBold
                key={index}
                onClick={() => {
                  selectProducts(props.options[props.options.indexOf(name)]);
                }}
              >
                {name}
              </text.SmallSemiBold>
            );
          })}
        </component.FilterOptions>
      </component.FilterBox>
    </>
  );
}

export default Filter;
