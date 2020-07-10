import React from "react";

import "../../global.css";
import "./style.css";

import NavBar from "../utils/navBar";
import DropDownBox from "./components/dropdown";
import Cards from "./components/card";

export default function Products() {
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
        <Cards />
      </div>
    </div>
  );
}
