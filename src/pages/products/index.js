import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../global.css";
import "./style.css";

import NavBar from "../utils/navBar";
import DropDownBox from "../../assets/dropdown";
import importAll from "../utils/importAll";
import api from "../../service/api.js";

export default function Products() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    async function selectProducts() {
      const response = await api.get("/product");
      setResult(response.data.result);
    }
    async function select() {
      await selectProducts();
    }

    select();
  }, []);

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
          <DropDownBox
            options={{
              title: "Genero",
              fields: [
                "Aventura",
                "Ação",
                "Battle Royale",
                "Construção",
                "Corrida",
                "Esportes",
                "Luta",
                "MMO",
                "MMORPG",
                "PvP",
                "RPG",
                "Tiro",
                "Vida Virtual",
              ],
            }}
          />
          <DropDownBox
            options={{
              title: "Plataforma",
              fields: ["PC", "Playstation", "XBOX"],
            }}
          />
        </div>
        <div className="products">
          <div className="items">
            {result.map((result) => (
              <div key={result.id_product} className="card">
                <Link
                  to={{
                    pathname: "/product-page",
                    state: { productID: `${result.id_product}` },
                  }}
                >
                  <img src={images[result.image + ".jpg"]} alt="" />
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
      </div>
    </div>
  );
}
