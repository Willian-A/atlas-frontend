import React from "react";

import Navbar from "../../organism/navbar";
import Banner from "../../organism/index/banner";
import MainCard from "../../organism/index/main-card";
import Category from "../../organism/index/category";
import GeralContainer from "../../atoms/page-margin";

export default function Index() {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <GeralContainer>
        <Banner />
        <MainCard />
        <Category />
      </GeralContainer>
    </div>
  );
}
