import React, { useState, useEffect } from "react";

import * as components from "./component";
import Button from "../../atoms/button";
import importAll from "../../utils/importAll";

export default function CartCard() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(
      importAll(require.context("../../images/products", false, /\.(jpg)$/))
    );
  }, []);

  return (
    <components.CardContainer>
      <img src={images["cyberpunk2077.jpg"]} />
      <components.CardBio>
        <h2>Cyberpunk 2077 </h2>
        <h3>R$ 299.99</h3>
        <components.CardQty>
          <Button width="55%" fontSize="15px" padding="0 10px">
            Adicionar
          </Button>

          <h2>1</h2>
          <Button width="55%" fontSize="15px" padding="0 10px">
            Adicionar
          </Button>
        </components.CardQty>
      </components.CardBio>
    </components.CardContainer>
  );
}
