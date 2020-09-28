import React, { useState, useEffect } from "react";

import * as component from "./component";

import CategoryCard from "./CategoryCard";

import importAll from "../../../../functions/importAll";

export default function Category() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(
      importAll(
        require.context(
          "../../../../assets/images/categories",
          false,
          /\.(jpg)$/
        )
      )
    );
  }, []);
  return (
    <component.CategoriesContainer>
      <CategoryCard img={images["consoles"]} name="Consoles" />
      <CategoryCard img={images["jogos"]} name="Jogos" />
      <CategoryCard img={images["acessorios"]} name="Acessorios" />
    </component.CategoriesContainer>
  );
}
