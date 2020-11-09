import React, { useState, useEffect } from "react";

import NavBar from "../../components/navbar";
import ProductsLayout from "./components";

function ProductsPage(props) {
  const [id, setID] = useState("todos");

  useEffect(() => {
    setID(props.id);
  }, [props.id]);

  return (
    <>
      <NavBar />
      <ProductsLayout id={id} />
    </>
  );
}

export default ProductsPage;
