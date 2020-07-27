import React from "react";
function Categories() {
  return (
    <div className="categories">
      <a href="#acessorios">
        <div className="cover"></div>
        <img
          src={require("../../../../shared/images/categories/acessorios.jpg")}
          alt=""
        />
        <h2>acessorios</h2>
      </a>
      <a href="#jogos">
        <div className="cover"></div>
        <img
          src={require("../../../../shared/images/categories/jogos.jpg")}
          alt=""
        />
        <h2>jogos</h2>
      </a>
      <a href="#consoles">
        <div className="cover"></div>
        <img
          src={require("../../../../shared/images/categories/consoles.jpg")}
          alt=""
        />
        <h2>consoles</h2>
      </a>
    </div>
  );
}

export default Categories;
