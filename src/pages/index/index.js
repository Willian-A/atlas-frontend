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
      <Cards
        title="true"
        limit="5"
        size="100%"
        amount={{ "1440px": "6", "1920px": "6", "2560px": "6" }}
      />
    </div>
  );
}
