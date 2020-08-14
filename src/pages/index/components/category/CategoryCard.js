import React from "react";

import * as component from "./component";

export default function CategoryCard(props) {
  return (
    <component.CategoriesBox>
      <component.CategoriesCover src={props.img} />
      <h2>{props.txt}</h2>
    </component.CategoriesBox>
  );
}
