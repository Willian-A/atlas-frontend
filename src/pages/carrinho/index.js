import React, { useState, useEffect } from "react";
import "../../global.css";
import "./style.css";
import api from "../../service/api.js";

import NavBar from "../utils/navBar";
import importAll from "../utils/importAll";

export default function Carrinho() {
  const [result, setResult] = useState([]);
  const [total, setTotal] = useState("");
  let images = importAll(
    require.context("../../images/products", false, /\.(jpg)$/)
  );

  async function listCart() {
    try {
      let response = await api.get("/cart", {
        withCredentials: true,
      });
      setResult(response.data.newResult);
      //"Total: R$" + response.data.totalPrice + ",00"
      setTotal(response.data.totalPrice + ",00");
    } catch (error) {
      setTotal(false);
    }
    console.log(total);
  }

  function loadCart(result) {
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

  function resumeCart() {
    let msg;
    if (!total) {
      msg = "Você Não Está Logado";
      return (
        <div className="cart-resume">
          <h2> {msg}</h2>
        </div>
      );
    } else {
      return (
        <div className="cart-resume">
          <h2> Total: R$ {total}</h2>
          <button>Finalizar</button>
        </div>
      );
    }
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
          <div className="cart-items">{loadCart(result)}</div>
          {resumeCart()}
        </div>
      </div>
    </div>
  );
}
