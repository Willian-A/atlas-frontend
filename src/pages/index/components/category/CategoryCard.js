import React from "react";

import * as component from "./component";
import * as text from "../../../../components/text";

export default function CategoryCard(props) {
  return (
    <component.CategoriesBox>
      <img src={props.img} alt={props.txt} />
      <text.ExtraBigBold>{props.txt}</text.ExtraBigBold>
    </component.CategoriesBox>
  );
}
