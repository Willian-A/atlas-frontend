import React from "react";

import Card from "./Card";
import * as component from "./component";

function ProductCard(props) {
  function loadCards() {
    return props.products.map((value) => {
      return (
        <Card
          key={value._id}
          img={props.images[value.image]}
          name={value.name}
          price={value.price}
          _id={value._id}
        />
      );
    });
  }
  return (
    <component.ProductsContainer
      ContainerConfig={props.ContainerConfig || [0]}
      useMargin={props.useMargin}
    >
      {loadCards()}
    </component.ProductsContainer>
  );
}

export default ProductCard;
