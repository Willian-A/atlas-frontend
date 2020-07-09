import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./style.css";
import { YellowButton } from "../../../../assets/buttons";
import importAll from "../../../utils/importAll";

const BannerIMG = styled.img`
  position: relative;
  top: ${(props) => props.top || "0"};
  width: 100%;
  min-height: 100%;
  transition: 500ms;
`;

const Text = styled.div`
  position: relative;
  transition: 500ms;
  top: ${(props) => props.top || "0"};

  h2 {
    text-transform: capitalize;
    color: #5a5a5a;
  }

  h3 {
    text-transform: capitalize;
    color: #9aa3af;
  }

  @media (min-width: 390px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1440px) {
    width: 300px;
    height: 550px;
    h2 {
      padding-bottom: 10px;
      font-size: 20px;
    }
    h3 {
      padding-bottom: 35px;
      font-size: 12px;
    }
  }

  @media (min-width: 1920px) {
    width: 400px;
    height: 680px;
    padding: 0;

    h2 {
      padding-bottom: 40px;
      font-size: 25px;
    }
    h3 {
      font-size: 16px;
    }
  }

  @media (min-width: 2560px) {
    width: 400px;
    height: 680px;
    padding: 0;
    h2 {
      padding-bottom: 40px;
      font-size: 25px;
    }
    h3 {
      font-size: 16px;
    }
  }
`;

function Banner() {
  const [index, setIndex] = useState(1);
  const [top, setTop] = useState(0);

  let imagesPNG = importAll(
    require.context("../../../../images/banner", false, /\.(png)$/)
  );
  let imagesJPEG = importAll(
    require.context("../../../../images/banner", false, /\.(jpg)$/)
  );
  let bannerTimer;

  function bannerLoader() {
    let banners = [];
    let bannerImagesFiles = Object.values(imagesJPEG);
    for (let f = 0; f < Object.keys(imagesJPEG).length; f++) {
      banners.push(
        <BannerIMG
          top={top + "px"}
          id="banner-img"
          key={f}
          src={bannerImagesFiles[f]}
          alt="jogos"
        />
      );
    }
    return banners;
  }

  function startTimer() {
    bannerTimer = setTimeout(() => {
      moveBanner();
    }, 4000);
  }

  useEffect(() => {
    startTimer();
  });

  function moveBanner() {
    try {
      if (index >= Object.keys(imagesJPEG).length) {
        setTop("0");
        setIndex(1);
      } else {
        setTop(
          "-" + document.getElementById("banner-img").clientHeight * index
        );
        setIndex(index + 1);
      }
      clearInterval(bannerTimer);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="banner">
      <div id="banner-box" className="slide">
        <div className="images">{bannerLoader()}</div>
        <div className="info">
          <Text top={top + "px"}>
            <h2>FIFA 20</h2>
            <h3>
              FIFA 20 apresenta uma nova maneira de jogar futebol, com toda
              cultura, criatividade e estilo das ruas e quadras pelo mundo. Crie
              seu jogador ou jogadora, escolha seu equipamento e mostre seu
              estilo no mundo inteiro, de uma quadra em Londres a uma passagem
              subterrânea em Amsterdã. Jogue futebol do seu jeito em vários
              formatos de partida, como 5x5, com ou paredes, sem goleiros ou
              futsal profissional.
            </h3>

            <div className="buttons">
              <YellowButton>Comprar</YellowButton>
              <div className="banner-buttons">
                <img
                  onClick={() => {
                    moveBanner();
                  }}
                  className="icon"
                  src={imagesPNG["0.png"]}
                  alt=""
                />
              </div>
            </div>
          </Text>
          <Text top={top + "px"}>
            <h2>Cyberpunk 2077</h2>
            <h3>
              Cyberpunk 2077 é uma história de ação e aventura de mundo aberto
              ambientada em Night City, uma megalópole obcecada por poder,
              glamour e biomodificações. Você joga como V, um mercenário fora da
              lei atrás de um implante único que carrega a chave da
              imortalidade. Você pode personalizar aparatos cibernéticos,
              conjunto de habilidades e estilo de jogo do personagem e explorar
              uma vasta cidade onde as decisões tomadas definem a história e o
              mundo ao seu redor.
            </h3>
            <div className="buttons">
              <button className="buy">Comprar</button>
              <div className="banner-buttons">
                <img
                  onClick={() => {
                    moveBanner();
                  }}
                  className="icon"
                  src={imagesPNG["0.png"]}
                  alt=""
                />
              </div>
            </div>
          </Text>
          <Text top={top + "px"}>
            <h2>NBA 2K20</h2>
            <h3>
              NBA 2K transformou-se em algo muito maior que uma simulação de
              basquete. Com NBA 2K20 a 2K continua a redefinir ou é possível
              fazer um jogo de esportes, com gráficos e jogabilidade da
              primeira, modos de jogo, controle e personalização de jogadores
              inigualáveis. E mais: com o Neighborhood, um modo de imersão no
              mundo aberto, NBA 2K20 é uma plataforma para jogadores e fãs de
              basquete, se você quiser e criar o futuro da cultura do esporte.
              Dê um salto nas suas habilidades com o controle mais realista de
              todos os tempos, com um mecanismo de movimento melhorado com
              estilos característicos, controles avançados de controle, um novo
              sistema de avaliação de drible, colisões sem bola e bola e uma
              nova jogabilidade defensiva , baseada em leitura e reação.
            </h3>
            <div className="buttons">
              <button className="buy">Comprar</button>
              <div className="banner-buttons">
                <img
                  onClick={() => {
                    moveBanner();
                  }}
                  className="icon"
                  src={imagesPNG["0.png"]}
                  alt=""
                />
              </div>
            </div>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Banner;
