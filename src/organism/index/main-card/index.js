import React, { useState, useEffect } from "react";

import Card from "../../../molecules/index/product-card";
import CardContainer from "./component";

import importAll from "../../../utils/importAll";
import api from "../../../service/api";

export default function MainCard() {
  const [result, setResult] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function selectProducts() {
      const response = await api.get(`/product${5}`);
      setResult(response.data.result);
    }
    setImages(
      importAll(require.context("../../../images/products", false, /\.(jpg)$/))
    );
    selectProducts();
  }, []);

  function loadCard() {
    return result.map((value) => {
      return (
        <Card
          key={value.id_product}
          cover={images[value.image + ".jpg"]}
          name={value.name}
          price={value.price}
        />
      );
    });
  }

  return <CardContainer>{loadCard()}</CardContainer>;
}
