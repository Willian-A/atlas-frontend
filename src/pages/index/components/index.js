import React from "react";

import NavBar from "../../../components/navbar";

import GeralContainer from "../../../styled/page-margin";

import Banner from "./Banner";
import ProductsCard from "./Card";
import Category from "./Category";

export default function IndexLayout() {
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
