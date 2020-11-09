import React from "react";

import NavBar from "../../components/navbar";
import ProdCard from "./components/";

export default function Product(props) {
  return (
    <div style={{ height: "100%" }}>
      <NavBar />
      <ProdCard id={props.id} />
    </div>
  );
}
