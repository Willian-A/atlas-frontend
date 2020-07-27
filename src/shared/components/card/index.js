import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import importAll from "../../../utils/importAll";
import api from "../../../service/api";

import * as components from "./Card";
import { YellowButton } from "../buttons";

export default function Cards(prop) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function selectProducts() {
      const response = await api.get(`/product${prop.limit}`);
      setResult(response.data.result);
    }
    selectProducts();
  }, [prop]);

  let images = importAll(
    require.context("../../images/products", false, /\.(jpg)$/)
  );

  return (
    <components.ProductGrid amount={prop.amount} size={prop.size}>
      {result.map((result) => (
        <components.ProductCard
          key={result.id_product}
          LastDisplay={prop.LastDisplay}
        >
          <Link
            to={{
              pathname: "/product-page",
              state: { productID: `${result.id_product}` },
            }}
          >
            <components.CardIMG src={images[result.image + ".jpg"]} alt="" />
            <components.CardBio>
              <h2>{result.name}</h2>
              <h3>R${result.price}</h3>
              <YellowButton defineHeight="40px" fontSize="15px" width="100%">
                Ver Produto
              </YellowButton>
            </components.CardBio>
          </Link>
        </components.ProductCard>
      ))}
    </components.ProductGrid>
  );
}
