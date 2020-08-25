import React from "react";

import * as component from "./component";

import NavBar from "../../components/navbar";
import GeralContainer from "../../styled/page-margin";

import Products from "./components";

function ProductsPage() {
  return (
    <div>
      <NavBar />
      <GeralContainer>
        <component.PageNameBox>
          <h1>Produtos</h1>
          <h5>12 Categorias</h5>
        </component.PageNameBox>
        <component.PageContainer>
          <component.FilterContainer>
            <h1>Teste1</h1>
          </component.FilterContainer>
          <component.ProductsContainer>
            <Products />
            <Products />
            <Products />
          </component.ProductsContainer>
        </component.PageContainer>
      </GeralContainer>
    </div>
  );
}

export default ProductsPage;
