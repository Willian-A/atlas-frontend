import React, { useState, useEffect } from "react";

import Card from "./Card";
import * as component from "./component";

import importAll from "../../../../functions/importAll";
import api from "../../../../api";

export default function ProductsCard() {
  const [result, setResult] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setImages(
        importAll(
          require.context(
            "../../../../assets/images/products/medium",
            false,
            /\.(webp)$/
          )
        )
      );
      async function selectProducts() {
        try {
          await api
            .get(`/product${5}`)
            .then((response) => setResult(response.data.result));
        } catch (err) {
          console.log(err.response);
        }
      }
      selectProducts();
    }

    return function cleanup() {
      mounted = false;
    };
  }, []);

  function CardLoader() {
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

  return <component.CardContainer>{CardLoader()}</component.CardContainer>;
}
