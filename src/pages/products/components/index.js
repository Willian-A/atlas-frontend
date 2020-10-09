import React, { useState, useEffect } from "react";

import * as component from "./component";
import * as text from "../../../components/text";

import ProductCard from "../../../components/ProductCard";
import Filter from "./Filter";

import importAll from "../../../functions/importAll";
import api from "../../../api";

export default function ProductsLayout() {
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
            "../../../assets/images/products/medium",
            false,
            /\.(webp)$/
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

  return (
    <>
      <component.PageNameContainer>
        <component.PageNameBox>
          <text.BigBold>Produtos</text.BigBold>
          <text.SmallSemiBold>{result.length} Produtos</text.SmallSemiBold>
        </component.PageNameBox>
        <text.MediumSemiBold
          id="filter-button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Filtro
        </text.MediumSemiBold>
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
        <ProductCard
          products={result}
          ContainerConfig={{
            "768px": ["0 1.5vw", 3],
            "1024px": ["0 0 0 1vw", 3],
            "1440px": ["0 0 0 1vw", 4],
          }}
          images={images}
        />
      </component.PageContainer>
    </>
  );
}
