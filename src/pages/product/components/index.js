import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import * as component from "./component";
import Button from "../../../styled/button";

import importAll from "../../../functions/importAll";
import api from "../../../api";

export default function ProdCard(props) {
  const [images, setImages] = useState([]);
  const [result, setResult] = useState([]);
  const [error, setError] = useState({ error: false, message: null });
  const history = useHistory();

  async function addOnCart() {
    try {
      await api.post("/cart", {
        productID: props.id,
        action: "add",
      });
      history.push("/carrinho");
    } catch (error) {
      setError({ error: true, message: error.response.data });
    }
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setImages(
        importAll(
          require.context("../../../assets/images/products", false, /\.(jpg)$/)
        )
      );

      async function selectProduct() {
        const response = await api.post("/product", {
          productID: props.id,
        });
        setResult(response.data.result[0]);
      }

      selectProduct();
    }

    return function cleanup() {
      mounted = false;
    };
  }, [props.id]);

  return (
    <component.ProductContainer>
      <component.ProdIMG
        src={images[`${result.image}.jpg`]}
        alt={result.name}
      />
      <component.ProdBioContainer>
        <component.ProdBioBox>
          <h1>{result.name}</h1>
          <h4>{result.description}</h4>
        </component.ProdBioBox>
        <component.ProdResume>
          <h4 style={{ color: "red" }}>{error.message}</h4>
          <h3>R$ {result.price}</h3>
          <Button
            width="200px"
            onClick={() => {
              addOnCart();
            }}
          >
            Comprar
          </Button>
        </component.ProdResume>
      </component.ProdBioContainer>
    </component.ProductContainer>
  );
}
