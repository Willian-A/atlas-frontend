import React from "react";

import "./style.css";

import Banner from "./contents/banner";
import NavBar from "../../components/navBar";
import Categories from "./contents/categories";

export default function Index() {
  return (
    <div className="main-container">
      <NavBar />
      <Banner />
      <Categories />
    </div>
  );
}
