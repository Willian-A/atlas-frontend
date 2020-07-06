import React from "react";

import "./style.css";

export default function DropDownBox(props) {
  function active(e, button) {
    e.style.opacity = "1";
    e.style.height = "230px";
    e.style.visibility = "visible";
    button.style.borderBottom = "6px #ffae00 solid";
  }

  function deActive(e, button) {
    e.style.opacity = "0";
    e.style.height = "0";
    e.style.visibility = "hidden";
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
    <div className="dropdown-category">
      <h2
        className="dropdown-category-name"
        onClick={(button) => {
          let e = document.getElementById(props.options.title);
          if (e.style.opacity >= 1) {
            deActive(e, button.target);
          } else {
            active(e, button.target);
          }
        }}
      >
        {props.options.title}
      </h2>
      <div
        id={props.options.title}
        className="dropdown-category-type-container"
      >
        {renderEachOption()}
      </div>
    </div>
  );
}
