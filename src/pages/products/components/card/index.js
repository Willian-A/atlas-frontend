import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import importAll from "../../../utils/importAll.js";
import api from "../../../../service/api.js";

import * as components from "../../../../assets/card";
import { YellowButton } from "../../../../assets/buttons";

export default function Cards() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    async function selectProducts() {
      const response = await api.get("/product");
      setResult(response.data.result);
    }
    async function select() {
      await selectProducts();
    }

    select();
  }, []);

  let images = importAll(
    require.context("../../../../images/products", false, /\.(jpg)$/)
  );

  return (
    <components.ProdcutsContainer>
      <components.Products>
        {result.map((result) => (
          <components.Card key={result.id_product}>
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
                <YellowButton defineHeight="40px" fontSize="15px">
                  Ver Produto
                </YellowButton>
              </components.CardBio>
            </Link>
          </components.Card>
        ))}
      </components.Products>
    </components.ProdcutsContainer>
  );
}
