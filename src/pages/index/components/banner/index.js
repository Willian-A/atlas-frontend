import React, { useState, useEffect } from "react";

import * as component from "./component";
import * as text from "../../../../components/text";
import DivPlaceholder from "../../../../components/Placeholder";
import Button from "../../../../styled/button";
import { ReactComponent as ArrowDown } from "../../../../assets/images/icons/arrowDown.svg";

import importAll from "../../../../functions/importAll";

export default function Banner() {
  const [images, setImages] = useState([]);
  let bannerContent = [
    {
      name: "FIFA 20",
      img: images[0],
      description: `FIFA 20 apresenta uma nova maneira de jogar futebol, com toda
      cultura, criatividade e estilo das ruas e quadras pelo mundo.
      Crie seu jogador ou jogadora, escolha seu equipamento e mostre
      seu estilo no mundo inteiro, de uma quadra em Londres a uma
      passagem subterrânea em Amsterdã. Jogue futebol do seu jeito em
      vários formatos de partida, como 5x5, com ou paredes, sem
      goleiros ou futsal profissional.`,
    },
    {
      name: "Cyberpunk 2077",
      img: images[1],
      description: `Cyberpunk 2077 é uma história de ação e aventura de mundo aberto
      ambientada em Night City, uma megalópole obcecada por poder,
      glamour e biomodificações. Você joga como V, um mercenário fora
      da lei atrás de um implante único que carrega a chave da
      imortalidade. Você pode personalizar aparatos cibernéticos,
      conjunto de habilidades e estilo de jogo do personagem e
      explorar uma vasta cidade onde as decisões tomadas definem a
      história e o mundo ao seu redor.`,
    },
    {
      name: "NBA 2K20",
      img: images[2],
      description: `NBA 2K transformou-se em algo muito maior que uma simulação de
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
      uma nova jogabilidade defensiva , baseada em leitura e reação.`,
    },
  ];
  const [bannerConfig, setBannerConfig] = useState({
    top: 0,
    index: 1,
    counter: bannerContent.length,
    height: 0,
  });

  function moveBannerUp() {
    if (bannerConfig.index >= bannerConfig.counter) {
      setBannerConfig({
        top: 0,
        index: 1,
        counter: bannerContent.length,
        height: bannerConfig.height,
      });
    } else {
      setBannerConfig({
        top: bannerConfig.height * bannerConfig.index,
        index: bannerConfig.index + 1,
        counter: bannerContent.length,
        height: bannerConfig.height,
      });
    }
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setImages(
        importAll(
          require.context(
            "../../../../assets/images/banner",
            false,
            /\.(webp)$/
          )
        )
      );
      setBannerConfig({
        top: bannerConfig.top,
        index: bannerConfig.index,
        counter: bannerContent.length,
        height: document.getElementById("banner-slide-container").clientHeight,
      });
    }
    return function cleanup() {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(moveBannerUp, 3500);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bannerConfig]);

  function BannerLoader() {
    return bannerContent.map((value) => {
      return (
        <component.BannerSlideBox
          id="banner-slide-container"
          top={`-${bannerConfig.top}px`}
          key={value.name}
        >
          <DivPlaceholder img={value.img} alt={value.name} />
          <component.BannerDescBox>
            <component.BannerDesc>
              <text.BigBold>{value.name}</text.BigBold>
              <text.SmallLight>{value.description}</text.SmallLight>
            </component.BannerDesc>
            <component.BannerButtonsBox>
              <Button>Comprar</Button>
              <div onClick={moveBannerUp}>
                <ArrowDown />
              </div>
            </component.BannerButtonsBox>
          </component.BannerDescBox>
        </component.BannerSlideBox>
      );
    });
  }

  return (
    <component.BannerContainer>
      <component.BannerSlideContainer id="banner-main-container">
        {BannerLoader()}
      </component.BannerSlideContainer>
    </component.BannerContainer>
  );
}
