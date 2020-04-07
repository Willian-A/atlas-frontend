import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./style.css";

import importAll from "../../../utils/importAll";

function Banner() {
  const [slideIndex, setSlideIndex] = useState(0);

  let imagesJPEG = importAll(
    require.context("../../../../images/banner", false, /\.(jpg)$/)
  );
  let imagesPNG = importAll(
    require.context("../../../../images/banner", false, /\.(png)$/)
  );

  let bannerTimer;
  let banners = [];
  let bannerImagesFiles = Object.values(imagesJPEG);

  useEffect(() => {
    setSlideIndex(1);
  }, []);

  useEffect(() => {
    startTimer();
  });

  function bannerLoader() {
    for (let f = 0; f < Object.keys(imagesJPEG).length; f++) {
      banners.push(
        <img className="img" key={f} src={bannerImagesFiles[f]} alt="jogos" />
      );
    }
    return banners;
  }

  function getBannerHeight() {
    if (document.getElementById("banner-box") === null) {
      return null;
    } else {
      return document.getElementById("banner-box").clientHeight;
    }
  }

  function startTimer() {
    bannerTimer = setTimeout(() => {
      moveBanner();
    }, 4000);
  }

  let height = getBannerHeight();
  let moveBottom = -(slideIndex * height) + "px";
  let bannerImages = document.getElementsByClassName("img");
  let bannerText = document.getElementsByClassName("text");

  function moveBanner() {
    try {
      if (slideIndex === Object.keys(imagesJPEG).length) {
        for (let i = 0; i < Object.keys(imagesJPEG).length; i++) {
          ReactDOM.findDOMNode(bannerImages[i]).style.top = 0;
          ReactDOM.findDOMNode(bannerText[i]).style.top = 0;
        }
        setSlideIndex(1);
      } else {
        for (let x = 0; x < Object.keys(imagesJPEG).length; x++) {
          ReactDOM.findDOMNode(bannerImages[x]).style.top = moveBottom;
          ReactDOM.findDOMNode(bannerText[x]).style.top = moveBottom;
        }
        setSlideIndex(slideIndex + 1);
      }
    } catch (err) {}
    clearTimeout(bannerTimer);
  }

  return (
    <div className="banner">
      <div id="banner-box" className="slide">
        <div className="images">{bannerLoader()}</div>
        <div className="info">
          <div className="text">
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
          </div>
          <div className="text">
            <h2>Cyberpunk 2077</h2>
            <h3>
              Em 2077, a América está arruinada. Megacorporações controlam a
              vida em todos os aspectos, do topo de seus arranha-céus até as
              atividades ilícitas que acontecem nas ruas. O mundo entre esses
              dois extremos é onde a decadência, sexo e a cultura popular se
              misturam com crimes violentos, pobreza extrema e a promessa
              inatingível do Sonho Americano. Em um mundo em que você não tem
              futuro, o que importa é ter controle sob o que você é. Para
              sobreviver e proteger sua independência, você modifica seu corpo
              com itens cibernéticos e faça trabalhos que jamais ousaria.
              Escolha viver livremente, independente de sistemas ou controles –
              você obedece às suas regras. Em Cyberpunk você joga como V – um
              assassino(a) de alguel em ascensão – e você acabou de conseguir
              seu primeiro contrato sério. Em um mundo de guerreiros aprimorados
              cibernéticamente, gênios da tecnologia e lifehackers corporativos,
              você pode dar o primeiro passo para se tornar uma lenda urbana.
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
          </div>
          <div className="text">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
