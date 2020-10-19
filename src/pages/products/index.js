import React from "react";

import NavBar from "../../components/navbar";
import GeralContainer from "../../styled/page-margin";

import ProductsLayout from "./components";

function ProductsPage(props) {
  return (
    <div>
      <NavBar />
      <GeralContainer>
        <ProductsLayout id={props.id} />
      </GeralContainer>
    </div>
  );
}

export default ProductsPage;
