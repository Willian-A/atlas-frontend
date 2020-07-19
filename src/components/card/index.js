import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import importAll from "../../pages/utils/importAll";
import api from "../../service/api.js";

import * as components from "../../assets/card";
import { YellowButton } from "../../assets/buttons";

export default function Cards(prop) {
  const [result, setResult] = useState([]);

  function showTitle() {
    if (prop.title) {
      return <h1> Mais Vendidos</h1>;
    }
  }
  useEffect(() => {
    async function selectProducts() {
      const response = await api.get(`/product${prop.limit}`);
      setResult(response.data.result);
    }
    async function select() {
      await selectProducts();
    }

    select();
  }, [prop]);

  let images = importAll(
    require.context("../../images/products", false, /\.(jpg)$/)
  );

  return (
    <components.Boxes amount={prop.amount} size={prop.size}>
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
              <YellowButton defineHeight="40px" fontSize="15px" width="100%">
                Ver Produto
              </YellowButton>
            </components.CardBio>
          </Link>
        </components.Card>
      ))}
    </components.Boxes>
  );
}
