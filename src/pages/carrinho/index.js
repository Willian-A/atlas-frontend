import React, { useState, useEffect } from "react";
import "../../global.css";
import "./style.css";
import api from "../../service/api.js";

import NavBar from "../utils/navBar";
import importAll from "../utils/importAll";

export default function Carrinho() {
  const [result, setResult] = useState([]);
  let images = importAll(
    require.context("../../images/products", false, /\.(jpg)$/)
  );

  async function listCart() {
    try {
      let response = await api.get("/cart", {
        withCredentials: true,
      });
      setResult(response.data.newResult);
    } catch (error) {}
  }

  function pinto(result) {
    return result.map((index) => {
      return (
        <div className="product" key={index["id_product"]}>
          <img src={images[index["img"] + ".jpg"]} alt="" />
          <div className="main-bio">
            <h2 className="item-name">{index["name"]}</h2>
            <h2 className="item-price">R$ {index["price"]}</h2>
            <h2 className="item-qt">Quantidade: {index["quantity"]}</h2>
            <div className="cart-product-buttons">
              <button>Adicionar</button>
              <button>Remover</button>
            </div>
          </div>
        </div>
      );
    });
  }

  useEffect(() => {
    listCart();
  }, []);

  return (
    <div className="cart-container">
      <NavBar />
      <div className="cart-banner">
        <div className="name-box">
          <h2>Carrinho</h2>
        </div>
      </div>
      <div className="cart-body">
        <h2 className="title">Produtos no carrinho</h2>
        <div className="cart-main">
          <div className="cart-items">{pinto(result)}</div>
          <div className="cart-resume">
            <h2>Total: R$ 340,00</h2>
            <button>Finalizar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
