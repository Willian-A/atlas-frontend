import React from "react";

import "./style.css";

import Banner from "./contents/banner";
import NavBar from "../utils/navBar";
import Categories from "./contents/categories";
import Cards from "../../components/card";

export default function Index() {
  return (
    <div className="main-container">
      <NavBar />
      <Banner />
      <Categories />
      <Cards />
    </div>
  );
}
