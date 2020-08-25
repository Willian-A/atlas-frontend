import React from "react";

import * as component from "./component";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <>
      <component.PageNameBox>
        <h1>Produtos</h1>
        <h5>12 Categorias</h5>
      </component.PageNameBox>
      <component.PageContainer>
        <component.FilterContainer>
          <h1>Teste1</h1>
        </component.FilterContainer>
        <component.ProductsContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </component.ProductsContainer>
      </component.PageContainer>
    </>
  );
}

export default Products;
