import React, { useState } from "react";

import "../../global.css";
import "./style.css";

import NavBar from "../../shared/components/navBar";
import DropDownBox from "../../shared/components/dropdown";
import Cards from "../../shared/components/card";
import NameBox from "../../shared/components/nameBox";

import { Filters, IconContainer, Icon } from "./Filter.js";

export default function Products() {
  const [active, setActive] = useState(false);
  const [config, setConfig] = useState(false);

  return (
    <div className="products-container">
      <NavBar />
      <div className="products-banner">
        <NameBox>Produtos</NameBox>
      </div>
      <div className="products-body">
        <Filters width={config.width}>
          <IconContainer>
            <Icon
              onClick={() => {
                if (active === true) {
                  setConfig({ width: "0", display: "none" });
                  setActive(false);
                } else {
                  setConfig({ width: "100%", display: "block" });
                  setActive(true);
                }
              }}
            />
          </IconContainer>
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
              active: active,
            }}
          />
          <DropDownBox
            options={{
              title: "Plataforma",
              fields: ["PC", "Playstation", "XBOX"],
              display: config.display,
              active: active,
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
