import React from "react";

import GeralContainer from "../../styled/page-margin";
import Navbar from "../../components/navbar";

import Banner from "./components/banner";
import MainCard from "./components/main-card";
import Category from "./components/category";

export default function Index() {
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
