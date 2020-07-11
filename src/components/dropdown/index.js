import React, { useState } from "react";

import * as components from "../../assets/dropdown";

export default function DropDownBox(props) {
  const [config, setConfig] = useState({
    opacity: 0,
    visibility: "hidden",
    height: 0,
  });

  function active(button) {
    setConfig({
      opacity: 1,
      visibility: "visible",
      height: "100%",
    });
    //on
    button.style.borderBottom = "6px #ffae00 solid";
  }

  function deActive(button) {
    setConfig({
      opacity: 0,
      visibility: "hidden",
      height: 0,
    });
    //off
    button.style.borderBottom = "2px white solid";
  }

  function renderEachOption() {
    let elements = [];
    for (let key in props.options.fields) {
      elements.push(
        <a
          key={key}
          href={"#" + props.options.fields[key]}
          className="dropdown-category-type"
        >
          {props.options.fields[key]}
        </a>
      );
    }
    return elements;
  }
  return (
    <components.Dropdown>
      <components.DropdownName
        onClick={(button) => {
          if (config.opacity >= 1) {
            deActive(button.target);
          } else {
            active(button.target);
          }
        }}
      >
        {props.options.title}
      </components.DropdownName>
      <components.DropdownCategoryBox
        opacity={config.opacity}
        visibility={config.visibility}
        height={config.height}
      >
        {renderEachOption()}
      </components.DropdownCategoryBox>
    </components.Dropdown>
  );
}
