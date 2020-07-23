import React from "react";

import "./style.css";

import Banner from "../../components/banner";
import NavBar from "../../components/navBar";
import Categories from "./contents/categories";
import Cards from "../../components/card";

export default function Index() {
  return (
    <div className="main-container">
      <NavBar />
      <Banner />
      <Categories />
      <Cards limit="5" LastDisplay={"none"} />
    </div>
  );
}
