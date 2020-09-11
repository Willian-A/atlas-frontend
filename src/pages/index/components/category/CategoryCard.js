import React from "react";

import * as component from "./component";
import * as text from "../../../../components/text";

export default function CategoryCard(props) {
  return (
    <component.CategoriesBox>
      <component.CategoriesCover src={props.img} />
      <text.ExtraBigSemiBold>{props.txt}</text.ExtraBigSemiBold>
    </component.CategoriesBox>
  );
}
