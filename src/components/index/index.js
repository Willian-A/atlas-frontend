import React from "react";

import "./style.css";

import Banner from "../../shared/components/banner";
import NavBar from "../../shared/components/navBar";
import Cards from "../../shared/components/card";

export default function Index() {
  return (
    <div className="main-container">
      <NavBar />
      <Banner />
      <div className="categories">
        <a href="#acessorios">
          <div className="cover"></div>
          <img
            src={require("../../shared/images/categories/acessorios.jpg")}
            alt=""
          />
          <h2>acessorios</h2>
        </a>
        <a href="#jogos">
          <div className="cover"></div>
          <img
            src={require("../../shared/images/categories/jogos.jpg")}
            alt=""
          />
          <h2>jogos</h2>
        </a>
        <a href="#consoles">
          <div className="cover"></div>
          <img
            src={require("../../shared/images/categories/consoles.jpg")}
            alt=""
          />
          <h2>consoles</h2>
        </a>
      </div>
      <Cards limit="5" LastDisplay={"none"} />
    </div>
  );
}
