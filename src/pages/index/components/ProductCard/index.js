import React, { useState, useEffect } from "react";

import Card from "./Card";
import * as component from "./component";

import importAll from "../../../../functions/importAll";
import api from "../../../../api";

export default function MainCard() {
  const [result, setResult] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      async function selectProducts() {
        const response = await api.get(`/product${5}`);
        setResult(response.data.result);
      }
      setImages(
        importAll(
          require.context(
            "../../../../assets/images/products",
            false,
            /\.(jpg)$/
          )
        )
      );
      selectProducts();
    }

    return function cleanup() {
      mounted = false;
    };
  }, []);

  function loadCard() {
    return result.map((value) => {
      return (
        <Card
          key={value.id_product}
          img={images[value.image]}
          name={value.name}
          price={value.price}
          id_product={value.id_product}
        />
      );
    });
  }

  return <component.CardContainer>{loadCard()}</component.CardContainer>;
}
