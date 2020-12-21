import React from "react";

import * as component from "./component";
import BannerComponent from "./bannerComponent";
import { bannerImages } from "../../../../functions/importImages";

export default function Banner() {
  const [bannerConfigs, setBannerConfigs] = React.useState({
    bannerTopPosition: 0,
    bannerIndex: 1,
    bannerHeight: 0,
  });
  const images = bannerImages();

  // Titulo, descrição e imagem para cada banner
  const bannerContent = [
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

  // Quando "component did mount" define as configs do banner
  React.useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setBannerConfigs({
        bannerTopPosition: bannerConfigs.bannerTopPosition,
        bannerIndex: bannerConfigs.bannerIndex,
        // Pega a altura do Banner (responsivamente)
        bannerHeight: document.getElementById("banner-container").clientHeight,
      });
    }
    return () => (isMounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const moveUpInterval = setInterval(moveUpBannerUp, 3500);
    return () => clearInterval(moveUpInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bannerConfigs]);

  function moveUpBannerUp() {
    if (bannerConfigs.bannerIndex >= bannerContent.length)
      return setBannerConfigs({
        bannerTopPosition: 0,
        bannerIndex: 1,
        bannerHeight: bannerConfigs.bannerHeight,
      });
    return setBannerConfigs({
      bannerTopPosition: bannerConfigs.bannerHeight * bannerConfigs.bannerIndex,
      bannerIndex: bannerConfigs.bannerIndex + 1,
      bannerHeight: bannerConfigs.bannerHeight,
    });
  }

  return (
    <component.BannerContainer>
      <component.BannerSlideContainer id="banner-main-container">
        <BannerComponent
          content={bannerContent}
          images={images}
          top={bannerConfigs.bannerTopPosition}
          moveUp={moveUpBannerUp}
        />
      </component.BannerSlideContainer>
    </component.BannerContainer>
  );
}
