import React, { useState, useEffect } from "react";

import * as component from "./component";
import Button from "../../../../styled/button";
import FlexContainer from "../../../../styled/flex-container";

import importAll from "../../../../functions/importAll";

export default function ProdCard() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(
      importAll(
        require.context("../../../../assets/images/products", false, /\.(jpg)$/)
      )
    );
  }, []);

  return (
    <component.ProductContainer>
      <component.ProdIMG src={images["thelastofus2.jpg"]} alt="" />
      <component.ProdBioContainer>
        <component.ProdBioBox>
          <h1>Tom Clancy's Rainbow Six Siege</h1>
          <h4>
            Cinco anos depois da jornada perigosa pelos Estados Unidos
            pós-pandêmicos, Ellie e Joel se estabelecem em Jackson, Wyoming. A
            vida em uma próspera comunidade de sobreviventes lhes trouxe paz e
            estabilidade, apesar da ameaça constante dos infectados e de outros
            sobreviventes mais desesperados. Quando um evento violento
            interrompe essa paz, Ellie embarca em uma jornada implacável para
            fazer justiça e encontrar uma solução. Enquanto vai atrás de cada um
            dos responsáveis, ela se confronta com as repercussões físicas e
            emocionais devastadoras de suas ações. Cinco anos depois da jornada
            perigosa pelos Estados Unidos pós-pandêmicos, Ellie e Joel se
            estabelecem em Jackson, Wyoming. A vida em uma próspera comunidade
            de sobreviventes lhes trouxe paz e estabilidade, apesar da ameaça
            constante dos infectados e de outros sobreviventes mais
            desesperados. Quando um evento violento interrompe essa paz, Ellie
            embarca em uma jornada implacável para fazer justiça e encontrar uma
            solução. Enquanto vai atrás de cada um dos responsáveis, ela se
            confronta com as repercussões físicas e emocionais devastadoras de
            suas ações.
          </h4>
        </component.ProdBioBox>
        <component.ProdResume>
          <h3>R$ 200,99</h3>
          <Button width="150px">Comprar</Button>
        </component.ProdResume>
      </component.ProdBioContainer>
    </component.ProductContainer>
  );
}
