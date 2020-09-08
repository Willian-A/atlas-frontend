import React from "react";

import Navbar from "../../components/navbar";
import GeralContainer from "../../styled/page-margin";
import CartList from "./components";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <GeralContainer>
        <CartList />
      </GeralContainer>
    </div>
  );
}
