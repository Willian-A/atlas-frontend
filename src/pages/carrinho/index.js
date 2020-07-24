import React, { useState, useEffect } from "react";
import "../../global.css";
import "./style.css";
import api from "../../service/api.js";

import NavBar from "../../components/navBar";
import importAll from "../../utils/importAll";
import { YellowButton } from "../../components/buttons";

export default function Carrinho() {
  const [result, setResult] = useState([]);
  const [total, setTotal] = useState({});

  let images = importAll(
    require.context("../../images/products", false, /\.(jpg)$/)
  );

  async function listCart() {
    try {
      let response = await api.get("/cart", {
        withCredentials: true,
      });
      setResult(response.data.newResult);
      setTotal({
        error: null,
        msg: response.data.totalPrice,
      });
    } catch (error) {
      setTotal({ error: true, msg: error.response.data });
    }
  }

  function loadCart(result) {
    return result.map((index) => {
      return (
        <div className="product" key={index["id_product"]}>
          <img src={images[index["image"] + ".jpg"]} alt="" />
          <div className="main-bio">
            <h2 className="item-name">{index["name"]}</h2>
            <h2 className="item-price">R$ {index["price"]}</h2>
            <h2 className="item-qt">Quantidade: {index["quantity"]}</h2>
            <div className="cart-product-buttons">
              <YellowButton
                defineHeight="30px"
                fontSize="15px"
                borderRadius="0"
              >
                Adicionar
              </YellowButton>
              <YellowButton
                defineHeight="30px"
                fontSize="15px"
                borderRadius="0"
              >
                Remover
              </YellowButton>
            </div>
          </div>
        </div>
      );
    });
  }

  function resumeCart() {
    if (total["error"] === true) {
      return (
        <div className="cart-resume">
          <h2>{total["msg"]}</h2>
        </div>
      );
    } else {
      return (
        <div className="cart-resume">
          <h2>Total: R${total["msg"]}</h2>
          <YellowButton defineHeight="45px">Finalizar</YellowButton>
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
