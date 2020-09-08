import React, { useState, useEffect } from "react";

import * as component from "./component";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

import importAll from "../../../../functions/importAll";
import api from "../../../../api";

function Products() {
  const [result, setResult] = useState([]);
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);

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

      document.addEventListener(
        "mousedown",
        (e) => {
          if (mounted) {
            if (!document.getElementById("filter-box").contains(e.target)) {
              if (
                !document.getElementById("filter-button").contains(e.target)
              ) {
                setOpen(false);
              }
            }
          }
        },
        false
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
      <component.PageNameContainer>
        <component.PageNameBox>
          <h1>Produtos</h1>
          <h5>{result.length} Produtos</h5>
        </component.PageNameBox>
        <h3
          id="filter-button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Filtro
        </h3>
      </component.PageNameContainer>
      <component.PageContainer>
        <component.FilterContainer id="filter-box" open={open}>
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
