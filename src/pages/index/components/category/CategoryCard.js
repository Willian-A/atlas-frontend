import React from "react";
import ProgressiveImage from "react-progressive-image";

import Placeholder from "../../../../assets/images/placeholders/ContainerPlaceholder.jpg";
import * as component from "./component";
import * as text from "../../../../components/text";

export default function CategoryCard(props) {
  return (
    <component.CategoriesBox>
      <ProgressiveImage delay={1000} src={props.img} placeholder={Placeholder}>
        {(src, loading) => (
          <img
            style={{ opacity: loading ? 0.5 : 1 }}
            src={src}
            alt={props.name}
          />
        )}
      </ProgressiveImage>

      <text.ExtraBigBold>{props.name}</text.ExtraBigBold>
    </component.CategoriesBox>
  );
}
