import React from "react";

import * as component from "./component";
import { H1 } from "../../../../components/text";

export default function CategoryCard(props) {
  return (
    <component.CategoriesBox>
      <a href={props.name}>
        <img src={props.img} alt={props.name} />
        <H1>{props.name}</H1>
      </a>
    </component.CategoriesBox>
  );
}
