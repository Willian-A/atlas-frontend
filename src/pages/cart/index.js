import React from "react";

import Navbar from "../../organism/navbar";
import GeralContainer from "../../atoms/page-margin";
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
