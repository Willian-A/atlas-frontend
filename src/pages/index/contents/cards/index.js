import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import importAll from "../../../utils/importAll";
import api from "../../../../service/api.js";

function Produtos() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    console.log("DB Online");
    async function selectProducts() {
      const response = await api.get("/product");
      setResult(response.data.result);
    }
    async function select() {
      await selectProducts();
    }

    select();
  }, []);

  const images = importAll(
    require.context("../../../../images/products", false, /\.(jpg)$/)
  );

  return (
    <div className="produtos">
      <h2 className="title">mais vendidos</h2>
      <div className="items">
        {result.map((result) => (
          <div key={result.id_product} className="card">
            <Link
              to={{
                pathname: "/product-page",
                state: { productID: `${result.id_product}` },
              }}
            >
              <img src={images[result.img + ".jpg"]} alt="" />
              <div className="cover"></div>
              <div className="bio">
                <h2>{result.name}</h2>
                <h3>R${result.price}</h3>
                <button className="buy">Comprar</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
