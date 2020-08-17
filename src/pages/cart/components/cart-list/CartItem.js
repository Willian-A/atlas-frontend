import React, { useState, useEffect } from "react";

import * as components from "./component";
import Button from "../../../../styled/button";
import importAll from "../../../../functions/importAll";

export default function CartItem() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(
      importAll(
        require.context("../../../../assets/images/products", false, /\.(jpg)$/)
      )
    );
  }, []);

  return (
    <components.CardContainer>
      <img src={images["cyberpunk2077.jpg"]} alt="" />
      <components.CardBio>
        <h2>Cyberpunk 2077</h2>
        <h3>R$ 259.99</h3>
        <h5>R$ 259.99</h5>
        <components.CardQty>
          <Button width="55%" fontSize="25px" padding="0 10px">
            +
          </Button>
          <h4>1</h4>
          <Button width="55%" fontSize="25px" padding="0 10px">
            -
          </Button>
        </components.CardQty>
      </components.CardBio>
    </components.CardContainer>
  );
}