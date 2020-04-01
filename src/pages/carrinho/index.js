import React from "react";
import "../../global.css";
import "./style.css";

import NavBar from "../utils/navBar";
import importAll from "../utils/importAll";

export default function Carrinho() {
  let images = importAll(
    require.context("../../images/img", false, /\.(jpe?g)$/)
  );
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
          <div className="cart-items">
            <div className="product">
              <img src={images[0]} alt="" />
              <div className="main-bio">
                <h2 className="item-name">NBA 2K20</h2>
                <h2 className="item-price">R$ 220,00</h2>
                <h2 className="item-qt">Quantidade: 1</h2>
                <div className="cart-product-buttons">
                  <button>Adicionar</button>
                  <button>Remover</button>
                </div>
              </div>
            </div>
            <div className="product">
              <img src={images[3]} alt="" />
              <div className="main-bio">
                <h2 className="item-name">Tom Clancy's rainbow six: Siege</h2>
                <h2 className="item-price">R$ 120,00</h2>
                <h2 className="item-qt">Quantidade: 1</h2>
                <div className="cart-product-buttons">
                  <button>Adicionar</button>
                  <button>Remover</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-resume">
            <h2>Total: R$ 340,00</h2>
            <button>Finalizar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
