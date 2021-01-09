import React from "react";

import ProductCard from "../../../../components/productCard";
import { mediumProductImages } from "../../../../functions/importImages";
import api from "../../../../api";

export default function ProductsCard() {
  const [result, setResult] = React.useState([]);
  const images = mediumProductImages();

  React.useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      async function selectProducts() {
        try {
          await api
            .post(`/products`, { qty: 5 })
            .then((response) => setResult(response.data));
        } catch (error) {}
      }
      selectProducts();
    }

    return () => (isMounted = false);
  }, []);

  return <ProductCard products={result} images={images} />;
}
