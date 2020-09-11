import React from "react";

import * as component from "./component";
import * as text from "../../../../components/text";

export default function CategoryCard(props) {
  return (
    <component.CategoriesBox>
      <component.CategoriesCover src={props.img} />
      <text.H2_Big>{props.txt}</text.H2_Big>
    </component.CategoriesBox>
  );
}
