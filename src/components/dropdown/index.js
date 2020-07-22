import React, { useState } from "react";

import * as components from "../../assets/dropdown";

export default function DropDownBox(props) {
  const [config, setConfig] = useState(false);

  function active(button) {
    setConfig(true);
    button.style.borderBottom = "6px #ffae00 solid";
  }

  function deActive(button) {
    setConfig(false);
    button.style.borderBottom = "2px white solid";
  }

  function test() {
    if (config === true) {
      return (
        <components.DropdownCategoryBox display={props.options.display}>
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
        onClick={(button) => {
          if (config === true) {
            deActive(button.target);
          } else {
            active(button.target);
          }
        }}
      >
        {props.options.title}
      </components.DropdownName>
      {test()}
    </components.Dropdown>
  );
}
