import React from "react";

import Navbar from "../../components/navbar";
import GeralContainer from "../../styled/page-margin";
import CartList from "./components/cart-list";

export default function Cart() {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <GeralContainer>
        <CartList />
      </GeralContainer>
    </div>
  );
}
