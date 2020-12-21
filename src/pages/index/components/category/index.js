import React from "react";

import * as component from "./component";
import CategoryCard from "./categoryCard";
import { categoriesImages } from "../../../../functions/importImages";

export default function Category() {
  const images = categoriesImages();

  return (
    <component.CategoriesContainer>
      <CategoryCard img={images["consoles"]} name="Consoles" />
      <CategoryCard img={images["jogos"]} name="Jogos" />
      <CategoryCard img={images["acessorios"]} name="Acessorios" />
    </component.CategoriesContainer>
  );
}
