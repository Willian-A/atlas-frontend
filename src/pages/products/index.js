import React, { useState, useEffect } from "react";

import NavBar from "../../components/navbar";
import GeralContainer from "../../styled/page-margin";

import ProductsLayout from "./components";

function ProductsPage(props) {
  const [id, setID] = useState("todos");

  useEffect(() => {
    setID(props.id);
  }, [props.id]);

  return (
    <div>
      <NavBar />
      <GeralContainer>
        <ProductsLayout id={id} />
      </GeralContainer>
    </div>
  );
}

export default ProductsPage;
