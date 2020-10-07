import React, { useState, useEffect } from "react";

import * as component from "./component";
import * as text from "../../../components/text";

import api from "../../../api";

function Filter(props) {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState();

  async function selectProducts(index) {
    const response = await api.post("/categories", {
      categoryID: index,
    });
    setResult(response.data.result);
  }
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      console.log(result);
    }

    return function cleanup() {
      mounted = false;
    };
  }, [result]);

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
                  selectProducts(props.options.indexOf(name));
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
