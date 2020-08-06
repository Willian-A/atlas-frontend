import React, { useState, useEffect } from "react";

import * as components from "./component";
import Button from "../../../atoms/button";
import importAll from "../../../utils/importAll";

export default function CartCard() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(
      importAll(require.context("../../../images/products", false, /\.(jpg)$/))
    );
  }, []);

  return (
    <components.CardContainer>
      <img src={images["cyberpunk2077.jpg"]} />
      <components.CardBio>
        <h2>Cyberpunk 2077</h2>
        <h3>R$ 259.99</h3>
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
