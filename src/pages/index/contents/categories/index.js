import React from "react";

import "./style.css";

function Categories() {
  return (
    <div className="categories">
      <a href="#acessorios">
        <div className="cover"></div>
        <img src={require("./img/categories/acessorios.jpg")} alt="" />
        <h2>acessorios</h2>
      </a>
      <a href="#jogos">
        <div className="cover"></div>
        <img src={require("./img/categories/acessorios.jpg")} alt="" />
        <h2>jogos</h2>
      </a>
      <a href="#consoles">
        <div className="cover"></div>
        <img src={require("./img/categories/acessorios.jpg")} alt="" />
        <h2>consoles</h2>
      </a>
    </div>
  );
}

export default Categories;
