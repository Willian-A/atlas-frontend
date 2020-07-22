import React, { useState } from "react";

import * as components from "../../assets/dropdown";

export default function DropDownBox(props) {
  const [active, setActive] = useState(false);
  const [config, setConfig] = useState(false);

  function test() {
    if (active === true) {
      return (
        <components.DropdownCategoryBox display={config.display}>
          {renderEachOption()}
        </components.DropdownCategoryBox>
      );
    } else {
      return "";
    }
  }

  function renderEachOption() {
    let elements = [];
    for (let key in props.options.fields) {
      elements.push(
        <a key={key} href={"#" + props.options.fields[key]}>
          {props.options.fields[key]}
        </a>
      );
    }
    return elements;
  }
  return (
    <components.Dropdown>
      <components.DropdownName
        display={props.options.display}
        onClick={() => {
          if (active === true) {
            setConfig({ display: "none" });
            setActive(false);
          } else {
            setConfig({ display: "block" });
            setActive(true);
          }
        }}
      >
        {props.options.title}
      </components.DropdownName>
      {test()}
    </components.Dropdown>
  );
}
