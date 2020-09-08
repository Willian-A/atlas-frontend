import React from "react";

import GeralContainer from "../../../styled/page-margin";
import Navbar from "../../../components/navbar";

import Banner from "./Banner";
import MainCard from "./ProductCard";
import Category from "./Category";

export default function IndexLayout() {
  return (
    <div>
      <Navbar />
      <GeralContainer>
        <Banner />
        <MainCard />
        <Category />
      </GeralContainer>
    </div>
  );
}
