import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as component from "./component";
import Button from "../../../styled/button";
import importAll from "../../../functions/importAll";

function Products() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setImages(
        importAll(
          require.context("../../../assets/images/products", false, /\.(jpg)$/)
        )
      );
    }

    return function cleanup() {
      mounted = false;
    };
  }, []);
  return (
    <component.CardBox>
      <Link
        to={{
          pathname: "/produto",
          state: 2,
        }}
      >
        <img src={images["cyberpunk2077.jpg"]} alt="asdasd" />
        <component.CardBio>
          <h4>Cyberpunj 2077</h4>
          <h3>R$ 299.99</h3>
          <Button width="100%">Ver Produto</Button>
        </component.CardBio>
      </Link>
    </component.CardBox>
  );
}

export default Products;
