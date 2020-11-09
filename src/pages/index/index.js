import React from "react";

import NavBar from "../../components/navbar";
import Banner from "./components/Banner/";
import ProductsCard from "./components/Card";
import Category from "./components/Category";

export default function Index() {
  return (
    <>
      <NavBar />
      <Banner />
      <ProductsCard />
      <Category />
    </>
  );
}
