import React from "react";

import NavBar from "../../components/navbar";
import Banner from "./components/banner";
import ProductsCard from "./components/card";
import Category from "./components/category";

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
