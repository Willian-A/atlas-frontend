import React from "react";

import * as component from "./component";
import CategoryBox from "../../../../molecules/index/category-box";

import importAll from "../../../../utils/importAll";

export default function Category() {
  let imagesJPEG = importAll(
    require.context("../../../../shared/images/categories", false, /\.(jpg)$/)
  );
  return (
    <component.CategoriesContainer>
      <CategoryBox img={imagesJPEG["consoles.jpg"]} txt="Consoles" />
      <CategoryBox img={imagesJPEG["jogos.jpg"]} txt="Jogos" />
      <CategoryBox img={imagesJPEG["acessorios.jpg"]} txt="Acessorios" />
    </component.CategoriesContainer>
  );
}
