import React from "react";
import "../../global.css";
import "./style.css";

import NavBar from "../utils/navBar";
import importAll from "../utils/importAll";

export default function Products() {
  let images = importAll(
    require.context("../../images/products", false, /\.(jpg)$/)
  );

  return (
    <div className="products-container">
      <NavBar />
      <div className="products-banner">
        <div className="name-box">
          <h2>Produtos</h2>
        </div>
      </div>
      <div className="products-body">
        <div className="filters">
          <div className="category">
            <h2 className="category-name">Generos</h2>
            <div className="category-type-container">
              <a href="#a" className="category-type">
                Ação
              </a>
              <a href="#a" className="category-type">
                Aventura
              </a>
              <a href="#a" className="category-type">
                Corrida
              </a>
              <a href="#a" className="category-type">
                Estratégia
              </a>
              <a href="#a" className="category-type">
                Esporte
              </a>
              <a href="#a" className="category-type">
                FPS
              </a>
              <a href="#a" className="category-type">
                Online
              </a>
              <a href="#a" className="category-type">
                Simulação
              </a>
            </div>
          </div>
          <div className="category">
            <h2 className="category-name">Plataformas</h2>
            <div className="category-type-container">
              <a href="#a" className="category-type">
                PC
              </a>
              <a href="#a" className="category-type">
                PS4
              </a>
              <a href="#a" className="category-type">
                XBOX
              </a>
            </div>
          </div>
        </div>
        <div className="products"></div>
      </div>
    </div>
  );
}
