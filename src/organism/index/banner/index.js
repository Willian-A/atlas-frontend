import React, { useState, useEffect, useRef } from "react";

import Button from "../../../atoms/button";
import ArrowDown from "../../../shared/images/icons/arrow-down";
import * as component from "./component";

import importAll from "../../../utils/importAll";

export default function Banner() {
  let bannerContainer = useRef();
  const [bannerConfig, setBannerConfig] = useState({ top: 0, index: 1 });

  let bannerTimer = setInterval(() => {
    moveUp();
  }, 4000);

  let imagesJPEG = importAll(
    require.context("../../../shared/images/banner", false, /\.(jpg)$/)
  );

  function moveUp() {
    clearInterval(bannerTimer);
    if (bannerConfig.index >= bannerContainer.current.bannerCounter) {
      setBannerConfig({
        top: 0,
        index: 1,
      });
    } else {
      setBannerConfig({
        top:
          bannerContainer.current.slideContainer.clientHeight *
          bannerConfig.index,
        index: bannerConfig.index + 1,
      });
    }
  }

  useEffect(() => {
    bannerContainer.current = {
      bannerCounter: document.getElementById("banner-main-container")
        .childElementCount,
      slideContainer: document.getElementById("banner-slide-container"),
    };
  }, []);

  return (
    <component.BannerContainer>
      <component.BannerSlideContainer id="banner-main-container">
        <component.BannerSlideBox
          id="banner-slide-container"
          top={`-${bannerConfig.top}px`}
        >
          <img src={Object.values(imagesJPEG)[0]} alt="FIFA 20" />
          <component.BannerDescBox>
            <component.BannerDesc>
              <h2>FIFA 20</h2>
              <h3>
                FIFA 20 apresenta uma nova maneira de jogar futebol, com toda
                cultura, criatividade e estilo das ruas e quadras pelo mundo.
                Crie seu jogador ou jogadora, escolha seu equipamento e mostre
                seu estilo no mundo inteiro, de uma quadra em Londres a uma
                passagem subterrânea em Amsterdã. Jogue futebol do seu jeito em
                vários formatos de partida, como 5x5, com ou paredes, sem
                goleiros ou futsal profissional.
              </h3>
            </component.BannerDesc>
            <component.BannerButtonsBox>
              <Button>Comprar</Button>
              <div
                onClick={() => {
                  moveUp();
                }}
              >
                <ArrowDown />
              </div>
            </component.BannerButtonsBox>
          </component.BannerDescBox>
        </component.BannerSlideBox>
        <component.BannerSlideBox top={`-${bannerConfig.top}px`}>
          <img src={Object.values(imagesJPEG)[1]} alt="Cyberpunk 2077" />
          <component.BannerDescBox>
            <component.BannerDesc>
              <h2>Cyberpunk 2077</h2>
              <h3>
                Cyberpunk 2077 é uma história de ação e aventura de mundo aberto
                ambientada em Night City, uma megalópole obcecada por poder,
                glamour e biomodificações. Você joga como V, um mercenário fora
                da lei atrás de um implante único que carrega a chave da
                imortalidade. Você pode personalizar aparatos cibernéticos,
                conjunto de habilidades e estilo de jogo do personagem e
                explorar uma vasta cidade onde as decisões tomadas definem a
                história e o mundo ao seu redor.
              </h3>
            </component.BannerDesc>
            <component.BannerButtonsBox>
              <Button>Comprar</Button>
              <div
                onClick={() => {
                  moveUp();
                }}
              >
                <ArrowDown />
              </div>
            </component.BannerButtonsBox>
          </component.BannerDescBox>
        </component.BannerSlideBox>
        <component.BannerSlideBox top={`-${bannerConfig.top}px`}>
          <img src={Object.values(imagesJPEG)[2]} alt="NBA 2K20" />
          <component.BannerDescBox>
            <component.BannerDesc>
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
                estilos característicos, controles avançados de controle, um
                novo sistema de avaliação de drible, colisões sem bola e bola e
                uma nova jogabilidade defensiva , baseada em leitura e reação.
              </h3>
            </component.BannerDesc>
            <component.BannerButtonsBox>
              <Button>Comprar</Button>
              <div
                onClick={() => {
                  moveUp();
                }}
              >
                <ArrowDown />
              </div>
            </component.BannerButtonsBox>
          </component.BannerDescBox>
        </component.BannerSlideBox>
      </component.BannerSlideContainer>
    </component.BannerContainer>
  );
}
