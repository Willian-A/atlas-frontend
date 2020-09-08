import React from "react";

import NavBar from "../../components/navbar";
import GeralContainer from "../../styled/page-margin";

import ProductsLayout from "./components";

function ProductsPage() {
  return (
    <div>
      <NavBar />
      <GeralContainer>
        <ProductsLayout />
      </GeralContainer>
    </div>
  );
}

export default ProductsPage;
