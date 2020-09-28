import React from "react";

import Navbar from "../../components/navbar";
import GeralContainer from "../../styled/page-margin";
import ProdCard from "./components/";

export default function Product(props) {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <GeralContainer>
        <ProdCard id={props.productID} />
      </GeralContainer>
    </div>
  );
}
