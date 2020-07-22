import React, { useState } from "react";

import "../../global.css";
import "./style.css";
import Logo from "../../images/icon.png";

import NavBar from "../../components/navBar";
import DropDownBox from "../../components/dropdown";
import Cards from "../../components/card";
import { Filters, Icon } from "./filter.js";

export default function Products() {
  const [active, setActive] = useState(false);
  const [config, setConfig] = useState(false);

  return (
    <div className="products-container">
      <NavBar />
      <div className="products-banner">
        <div className="name-box">
          <h2>Produtos</h2>
        </div>
      </div>
      <div className="products-body">
        <Filters width={config.width}>
          <Icon
            onClick={() => {
              if (active === true) {
                setConfig({ width: "20px", display: "none" });
                setActive(false);
              } else {
                setConfig({ width: "100%", display: "block" });
                setActive(true);
              }
            }}
          />
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
              display: config.display,
            }}
          />
          <DropDownBox
            options={{
              title: "Plataforma",
              fields: ["PC", "Playstation", "XBOX"],
              display: config.display,
            }}
          />
        </Filters>
        <div className="teste">
          <Cards amount={{ "1440": "4", "1920": "5", "2560": "6" }} />
        </div>
      </div>
    </div>
  );
}
