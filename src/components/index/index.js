import React from "react";

import "./style.css";

import Banner from "../../shared/components/banner";
import NavBar from "../../shared/components/navBar";
import Categories from "./contents/categories";
import Cards from "../../shared/components/card";

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
