import React from "react";

import "./style.css";

import Banner from "./contents/banner";
import NavBar from "../../components/navBar";
import Categories from "./contents/categories";
import Cards from "../../components/card";

export default function Index() {
  return (
    <div className="main-container">
      <NavBar />
      <Banner />
      <Categories />
      <div className="teste">
        <Cards
          title="true"
          limit="6"
          size="100%"
          amount={{ "1440": "6", "1920": "6", "2560": "6" }}
        />
      </div>
    </div>
  );
}
