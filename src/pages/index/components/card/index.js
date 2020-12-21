import React, { useState, useEffect } from "react";

import ProductCard from "../../../../components/productCard";
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
            .get(`/products${5}`)
            .then((response) => setResult(response.data));
        } catch (error) {}
      }
      selectProducts();
    }

    return () => (isMounted = false);
  }, []);

  return <ProductCard products={result} images={images} />;
}
