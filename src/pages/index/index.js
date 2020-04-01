import React from "react";

import "./style.css";

import Banner from "./contents/banner";
import NavBar from "../utils/navBar";
import Categories from "./contents/categories";
import Produtos from "./contents/cards";

export default function Index() {
  return (
    <div className="main-container">
      <NavBar />
      <Banner />
      <Categories />
      <Produtos />
    </div>
  );
}
