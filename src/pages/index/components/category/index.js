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
          /\.(webp)$/
        )
      )
    );
  }, []);
  return (
    <component.CategoriesContainer>
      <CategoryCard img={images["consoles.webp"]} txt="Consoles" />
      <CategoryCard img={images["jogos.webp"]} txt="Jogos" />
      <CategoryCard img={images["acessorios.webp"]} txt="Acessorios" />
    </component.CategoriesContainer>
  );
}
