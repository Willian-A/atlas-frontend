import React, { useState, useEffect } from "react";

import * as component from "./component";
import { H5, H3, H2 } from "../../../components/text/text";

import ProductCard from "../../../components/ProductCard";
import Filter from "./Filter";

import importImages from "../../../functions/importImages";
import api from "../../../api";

export default function ProductsLayout(props) {
  const [result, setResult] = useState([]);
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.id !== "todos") {
      async function selectProducts() {
        const response = await api.post("/categories", {
          categoryID: props.id,
        });
        setResult(response.data.result);
      }
      selectProducts();
    } else {
      async function selectProducts() {
        const response = await api.get(`/product${0}`);
        setResult(response.data.result);
      }
      selectProducts();
    }
  }, [props.id]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setImages(
        importImages(
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
    }

    return function cleanup() {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <component.PageNameContainer>
        <component.PageNameBox>
          <H2>Produtos</H2>
          <H5>{result.length} Produtos</H5>
        </component.PageNameBox>
        <H3
          id="filter-button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Filtro
        </H3>
      </component.PageNameContainer>
      <component.PageContainer>
        <component.FilterContainer id="filter-box" open={open}>
          <Filter
            name="categorias"
            options={[
              "todos",
              "ação",
              "aventura",
              "puzzle",
              "RPG",
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
        <ProductCard products={result} useMargin={true} images={images} />
      </component.PageContainer>
    </>
  );
}
