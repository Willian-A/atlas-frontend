import React, { useState, useEffect } from "react";

import * as component from "./component";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

import importAll from "../../../../functions/importAll";
import api from "../../../../api";

function Products() {
  const [result, setResult] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      async function selectProducts() {
        const response = await api.get(`/product${0}`);
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
        <ProductCard
          key={value.id_product}
          cover={images[value.image + ".jpg"]}
          name={value.name}
          price={value.price}
          id_product={value.id_product}
        />
      );
    });
  }

  return (
    <>
      <component.PageNameBox>
        <h1>Produtos</h1>
        <h5>12 Categorias</h5>
      </component.PageNameBox>
      <component.PageContainer>
        <component.FilterContainer>
          <Filter
            name="categorias"
            options={[
              "ação",
              "aventura",
              "puzzle",
              "rpg",
              "tiro",
              "estratégia",
              "sobrevivência",
              "indie",
              "esporte",
              "horror",
              "dança",
            ]}
          />
          <Filter
            name="plataforma"
            options={[
              "steam",
              "PSN",
              "xbox live",
              "uplay",
              "origin",
              "nintendo",
              "battle.net",
              "epic games",
              "rockstar",
            ]}
          />
        </component.FilterContainer>
        <component.ProductsContainer>{loadCard()}</component.ProductsContainer>
      </component.PageContainer>
    </>
  );
}

export default Products;
