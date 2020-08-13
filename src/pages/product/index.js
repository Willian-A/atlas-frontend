import React, { useState, useEffect } from "react";

import Navbar from "../../organism/navbar";
import GeralContainer from "../../atoms/page-margin";
import Button from "../../atoms/button";
import FlexContainer from "../../atoms/flex-container";

import importAll from "../../utils/importAll";

export default function Product() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(
      importAll(
        require.context("../../shared/images/products", false, /\.(jpg)$/)
      )
    );
  }, []);
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <GeralContainer>
        <FlexContainer direction="row" shadow="">
          <img
            src={images["thelastofus2.jpg"]}
            alt=""
            style={{ width: "40%", height: "730px" }}
          />
          <div style={{ margin: "0 auto ", width: "750px" }}>
            <div>
              <h1 style={{ padding: "0 0 20px" }}>The Last Of Us II</h1>
              <h4>
                Cinco anos depois da jornada perigosa pelos Estados Unidos
                pós-pandêmicos, Ellie e Joel se estabelecem em Jackson, Wyoming.
                A vida em uma próspera comunidade de sobreviventes lhes trouxe
                paz e estabilidade, apesar da ameaça constante dos infectados e
                de outros sobreviventes mais desesperados. Quando um evento
                violento interrompe essa paz, Ellie embarca em uma jornada
                implacável para fazer justiça e encontrar uma solução. Enquanto
                vai atrás de cada um dos responsáveis, ela se confronta com as
                repercussões físicas e emocionais devastadoras de suas ações.
              </h4>
            </div>
            <div style={{ width: "200px", padding: "20px 0 0" }}>
              <h3 style={{ padding: "0 0 5px" }}>R$ 200,99</h3>
              <Button width="80%">Comprar</Button>
            </div>
          </div>
        </FlexContainer>
      </GeralContainer>
    </div>
  );
}
