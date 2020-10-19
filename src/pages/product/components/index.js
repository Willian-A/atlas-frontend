import React, { useState, useEffect } from "react";
import { navigate } from "hookrouter";

import * as component from "./component";
import * as text from "../../../components/text";

import Button from "../../../styled/button";
import DivPlaceholder from "../../../components/Placeholder";

import importAll from "../../../functions/importAll";
import api from "../../../api";

export default function ProdCard(props) {
  const [images, setImages] = useState([]);
  const [result, setResult] = useState([]);
  const [error, setError] = useState({ error: false, message: null });

  async function addOnCart() {
    try {
      await api.post("/cart", {
        productID: props.id,
        action: "add",
      });
      navigate("/carrinho");
    } catch (error) {
      setError({ error: true, message: error.response.data });
    }
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setImages(
        importAll(
          require.context(
            "../../../assets/images/products/big",
            false,
            /\.(jpg)$/
          )
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
      <DivPlaceholder img={images[`${result.image}`]} alt={result.name} />
      <component.ProdBioContainer>
        <component.ProdBioBox>
          <text.BigBold>{result.name}</text.BigBold>
          <text.SmallSemiBold>{result.description}</text.SmallSemiBold>
        </component.ProdBioBox>
        <component.ProdResume>
          <text.SmallSemiBold
            style={{
              color: "red",
              opacity: error.error ? "1" : "0",
              transition: "350ms",
            }}
          >
            {error.message}
          </text.SmallSemiBold>
          <text.MediumBold>R$ {result.price}</text.MediumBold>
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
