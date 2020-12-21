import React, { useState, useEffect } from "react";
import { navigate } from "hookrouter";

import * as component from "./component";
import { P, H3, H2 } from "../../../components/text";
import Button from "../../../components/button";
import { bigProductImages } from "../../../functions/importImages";
import api from "../../../api";

export default function ProdCard(props) {
  const images = bigProductImages();
  const [result, setResult] = useState([]);
  const [error, setError] = useState({ error: false, message: null });

  async function addOnCart() {
    try {
      await api.post("/cart/add", {
        id: props.id,
      });
      navigate("/carrinho");
    } catch (error) {
      setError({ error: true, message: error.response.data });
    }
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      async function selectProduct() {
        const response = await api.post("/product", {
          id: props.id,
        });
        setResult(response.data[0]);
      }
      selectProduct();
    }

    return () => (isMounted = false);
  }, [props.id]);

  return (
    <component.ProductContainer>
      <img src={images[`${result.image}`]} alt={result.name} />
      <component.ProdBioContainer>
        <component.ProdBioBox>
          <H2>{result.name}</H2>
          <P>{result.description}</P>
        </component.ProdBioBox>
        <component.ProdResume>
          <H3
            style={{
              color: "red",
              opacity: error.error ? "1" : "0",
              transition: "350ms",
            }}
          >
            {error.message}
          </H3>
          <H2>R$ {result.price}</H2>
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
