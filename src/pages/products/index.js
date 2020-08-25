import React from "react";

import NavBar from "../../components/navbar";
import GeralContainer from "../../styled/page-margin";

import Products from "./components";

function ProductsPage() {
  return (
    <div>
      <NavBar />
      <GeralContainer>
        <Products />
      </GeralContainer>
    </div>
  );
}

export default ProductsPage;
