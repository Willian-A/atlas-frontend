import React, { useState, useEffect } from "react";

import "./style.css";
import importAll from "../utils/importAll";
import NavBar from "../utils/navBar";
import api from "../../service/api.js";

export default function ProductPage(props) {
  let images = importAll(
    require.context("../../images/products", false, /\.(jpe?g)$/)
  );

  const [result, setResult] = useState([]);

  useEffect(() => {
    console.log("DB Online");

    async function select() {
      await selectProducts();
    }
    async function selectProducts() {
      const response = await api.post("/productPage", props.location.state);
      setResult(response.data.result);
    }
    select();
  }, [props.location.state]);

  function renderProduct(data) {
    if (data[0] === undefined) {
    } else {
      return (
        <div className="product-info-main">
          <img src={images[result[0]["img"] + ".jpg"]} alt="nba 2k20" />
          <div className="product-bio">
            <h2>{result[0]["name"]}</h2>
            <h6>{result[0]["description"]}</h6>
            <div className="product-resume">
              <button
                onClick={() => {
                  cartAdd(result);
                }}
              >
                Comprar
              </button>
              <h3>R$ {result[0]["price"]}</h3>
            </div>
          </div>
        </div>
      );
    }
  }

  async function cartAdd(data) {
    try {
      await api.post(
        "/addCart",
        {
          productID: data[0]["id_product"],
        },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="product-page-container">
      <NavBar />
      <div className="product-info-frame">
        {renderProduct(result)}
        <div className="product-requirements">
          <div className="product-requirements-info">
            <h2 className="product-requirements-title">Requisitos Mínimos:</h2>
            <h2 className="product-field">
              Sistema Operacional:
              <p>Windows 7 / 8.1 / 10 (versões de 64-bit)</p>
            </h2>
            <h2 className="product-field">
              Processador:
              <p>Intel® Core™ i3-530 @ 2.93 GHz / AMD FX-4100 @ 3.60 GHz</p>
            </h2>
            <h2 className="product-field">
              Memória: <p>4 GB de RAM</p>
            </h2>
            <h2 className="product-field">
              Placa de vídeo:
              <p>NVIDIA® GeForce® GT 450 1GB / AMD® Radeon™ HD 7770 1GB</p>
            </h2>
            <h2 className="product-field">
              Armazenamento: <p>80 GB de espaço disponível</p>
            </h2>
          </div>

          <div className="product-requirements-info">
            <h2 className="product-requirements-title">
              Requisitos Recomendados:
            </h2>
            <h2 className="product-field">
              Sistema Operacional:
              <p>Windows 7 / 8.1 / 10 (versões de 64-bit)</p>
            </h2>
            <h2 className="product-field">
              Processador:
              <p>Intel® Core™ i5-4430 @ 3 GHz / AMD FX-8370 @ 3.4 GHz</p>
            </h2>
            <h2 className="product-field">
              Memória: <p>8 GB de RAM</p>
            </h2>
            <h2 className="product-field">
              Placa de vídeo:
              <p>NVIDIA® GeForce® GTX 770 2GB / AMD® Radeon™ R9 270 2GB</p>
            </h2>
            <h2 className="product-field">
              Armazenamento: <p>80 GB de espaço disponível</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
