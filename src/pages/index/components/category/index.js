import React from "react";

import * as component from "./component";
import CategoryCard from "./CategoryCard";

import importAll from "../../../../utils/importAll";

export default function Category() {
  let imagesJPEG = importAll(
    require.context("../../../../assets/images/categories", false, /\.(jpg)$/)
  );
  return (
    <component.CategoriesContainer>
      <CategoryCard img={imagesJPEG["consoles.jpg"]} txt="Consoles" />
      <CategoryCard img={imagesJPEG["jogos.jpg"]} txt="Jogos" />
      <CategoryCard img={imagesJPEG["acessorios.jpg"]} txt="Acessorios" />
    </component.CategoriesContainer>
  );
}
