import React from "react";

import Navbar from "../../organism/navbar";
import GeralContainer from "../../atoms/page-margin";
import ProdCard from "./components/product-frame";

export default function Product() {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <GeralContainer>
        <ProdCard />
      </GeralContainer>
    </div>
  );
}
