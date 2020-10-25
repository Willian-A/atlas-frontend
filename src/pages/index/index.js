import React from "react";

import NavBar from "../../components/navbar";

import GeralContainer from "../../styled/page-margin";

import Banner from "./components/Banner";
import ProductsCard from "./components/Card";
import Category from "./components/Category";

export default function Index() {
  return (
    <div>
      <NavBar />
      <GeralContainer>
        <Banner />
        <ProductsCard />
        <Category />
      </GeralContainer>
    </div>
  );
}
