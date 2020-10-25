import React, { useState, useEffect } from "react";

import ProductCard from "../../../../components/ProductCard";
import { mediumProductImages } from "../../../../functions/importImages";
import api from "../../../../api";

export default function ProductsCard() {
  const [result, setResult] = useState([]);
  const images = mediumProductImages();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      async function selectProducts() {
        try {
          await api
            .get(`/product${5}`)
            .then((response) => setResult(response.data.result));
        } catch (error) {}
      }
      selectProducts();
    }

    return () => (isMounted = false);
  }, []);

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
