import React, { useState, useEffect } from "react";

import * as component from "./component";
import Button from "../../../../styled/button";
import FlexContainer from "../../../../styled/flex-container";

import importAll from "../../../../utils/importAll";

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
    <FlexContainer
      width="72%"
      direction="row"
      shadow=""
      padding="30px"
      margin="0 auto"
    >
      <component.ProdIMG src={images["thelastofus2.jpg"]} alt="" />
      <FlexContainer
        width="550px"
        height="unset"
        padding="0"
        margin="0 auto"
        direction="column"
        shadow="0"
      >
        <component.ProdBio>
          <h1 style={{ padding: "0 0 20px" }}>The Last Of Us II</h1>
          <h4>
            Cinco anos depois da jornada perigosa pelos Estados Unidos
            pós-pandêmicos, Ellie e Joel se estabelecem em Jackson, Wyoming. A
            vida em uma próspera comunidade de sobreviventes lhes trouxe paz e
            estabilidade, apesar da ameaça constante dos infectados e de outros
            sobreviventes mais desesperados. Quando um evento violento
            interrompe essa paz, Ellie embarca em uma jornada implacável para
            fazer justiça e encontrar uma solução. Enquanto vai atrás de cada um
            dos responsáveis, ela se confronta com as repercussões físicas e
            emocionais devastadoras de suas ações.
          </h4>
        </component.ProdBio>
        <FlexContainer
          width="fit-content"
          padding="50px 0 0"
          margin="0 0 0 auto"
          justify="flex-end"
          shadow="0"
        >
          <h2
            style={{
              padding: "0 0 5px",
              width: "fit-content",
              margin: "0 0 0 auto",
            }}
          >
            R$ 200,99
          </h2>
          <Button width="190px">Comprar</Button>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}
