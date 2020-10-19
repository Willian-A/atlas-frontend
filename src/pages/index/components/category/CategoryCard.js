import React from "react";

import * as component from "./component";
import * as text from "../../../../components/text";
import DivPlaceholder from "../../../../components/Placeholder";

export default function CategoryCard(props) {
  return (
    <component.CategoriesBox>
      <a href={props.name}>
        <DivPlaceholder img={props.img} alt={props.name} />
        <text.ExtraBigBold>{props.name}</text.ExtraBigBold>
      </a>
    </component.CategoriesBox>
  );
}
