import React from "react";

import NavBar from "../../../components/navbar";
import GeralContainer from "../../../styled/page-margin";

import Banner from "./Banner";
import Category from "./Category";
import MainCard from "./ProductCard";

export default function IndexLayout() {
  return (
    <div>
      <NavBar />
      <GeralContainer>
        <Banner />
        <MainCard />
        <Category />
      </GeralContainer>
    </div>
  );
}
