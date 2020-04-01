import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import importAll from "../../../utils/importAll";

function Produtos() {
  let images = importAll(
    require.context("../../../../images/img", false, /\.(jpe?g)$/)
  );
  return (
    <div className="produtos">
      <h2 className="title">mais vendidos</h2>
      <div className="items">
        <div className="card">
          <Link to="/product-page">
            <img src={images[0]} alt="" />
            <div className="cover"></div>
            <div className="bio">
              <h2>NBA 2K20</h2>
              <h3>R$210</h3>

              <button className="buy">Comprar</button>
            </div>
          </Link>
        </div>
        <div className="card">
          <a href="#gameCard">
            <img src={images[1]} alt="" />
            <div className="cover"></div>
            <div className="bio">
              <h2>Spider-man</h2>
              <h3>R$210</h3>
              <button className="buy">Comprar</button>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="#gameCard">
            <img src={images[2]} alt="" />
            <div className="cover"></div>
            <div className="bio">
              <h2>Tom clancy's rainbow six: siege</h2>
              <h3>R$210</h3>
              <button className="buy">Comprar</button>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="#gameCard">
            <img src={images[3]} alt="" />
            <div className="cover"></div>
            <div className="bio">
              <h2>Halo 5</h2>
              <h3>R$210</h3>
              <button className="buy">Comprar</button>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="#gameCard">
            <img src={images[4]} alt="" />
            <div className="cover"></div>
            <div className="bio">
              <h2>Assassin's Creed Odyssey</h2>
              <h3>R$210</h3>
              <button className="buy">Comprar</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
