import React, { useState, useEffect } from "react";

import ProductCard from "../../../../components/ProductCard";

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
    return (
      <ProductCard
        products={result}
        images={images}
        ContainerConfig={{
          "768px": ["1.5vh 0", 4],
          "1024px": ["1.5vh 0", 5],
          "1440px": ["1.5vh 0", 5],
        }}
      />
    );
  }

  return CardLoader();
}
