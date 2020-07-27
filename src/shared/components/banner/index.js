import React, { useState, useEffect } from "react";

import { YellowButton } from "../buttons/style";
import * as components from "./style";
import importAll from "../../../utils/importAll";

export default function Banner() {
  const [index, setIndex] = useState(1);
  const [top, setTop] = useState(0);
  let bannerTimer;

  let imagesPNG = importAll(
    require.context("../../images/banner", false, /\.(png)$/)
  );
  let imagesJPEG = importAll(
    require.context("../../images/banner", false, /\.(jpg)$/)
  );

  function bannerLoader() {
    let banner = [];
    let bannerImagesFiles = Object.values(imagesJPEG);
    for (let f = 0; f < Object.keys(imagesJPEG).length; f++) {
      banner.push(
        <components.BannerImage
          top={top + "px"}
          id="banner-img"
          key={f}
          src={bannerImagesFiles[f]}
          alt="jogos"
        />
      );
    }
    return banner;
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
    <components.Banner>
      <components.BannerBox>
        <components.BannerImageBox>{bannerLoader()}</components.BannerImageBox>
        <components.BannerInfo>
          <components.BannerTextBox top={top + "px"}>
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
            <components.BannerButtonsBox>
              <YellowButton>Comprar</YellowButton>
              <components.BannerButtons>
                <img
                  onClick={() => {
                    moveBanner();
                  }}
                  className="icon"
                  src={imagesPNG["0.png"]}
                  alt=""
                />
              </components.BannerButtons>
            </components.BannerButtonsBox>
          </components.BannerTextBox>
          <components.BannerTextBox top={top + "px"}>
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
            <components.BannerButtonsBox>
              <YellowButton>Comprar</YellowButton>
              <components.BannerButtons>
                <img
                  onClick={() => {
                    moveBanner();
                  }}
                  src={imagesPNG["0.png"]}
                  alt=""
                />
              </components.BannerButtons>
            </components.BannerButtonsBox>
          </components.BannerTextBox>
          <components.BannerTextBox top={top + "px"}>
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
            <components.BannerButtonsBox>
              <YellowButton>Comprar</YellowButton>
              <components.BannerButtons>
                <img
                  onClick={() => {
                    moveBanner();
                  }}
                  className="icon"
                  src={imagesPNG["0.png"]}
                  alt=""
                />
              </components.BannerButtons>
            </components.BannerButtonsBox>
          </components.BannerTextBox>
        </components.BannerInfo>
      </components.BannerBox>
    </components.Banner>
  );
}
