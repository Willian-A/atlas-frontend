import React from "react";

import "./style.css";
import importAll from "../utils/importAll";
import NavBar from "../utils/navBar";

export default function ProductPage() {
  let images = importAll(
    require.context("../../images/img", false, /\.(jpe?g)$/)
  );
  return (
    <div className="product-page-container">
      <NavBar />
      <div className="product-info-frame">
        <img src={images[0]} alt="nba 2k20" />
        <div className="product-bio">
          <h2>NBA 2K20</h2>
          <h6>
            NBA 2K transformou-se em algo muito maior que uma simulação de
            basquete. Com NBA 2K20 a 2K continua a redefinir o que é possível
            fazer em um jogo de esportes, com gráficos e jogabilidade de
            primeira, modos de jogo, controle e personalização de jogadores
            inigualáveis. E mais: com o Neighborhood, um modo imersivo de mundo
            aberto, NBA 2K20 é uma plataforma para que jogadores e fãs de
            basquete se reúnam e criem o futuro da cultura do esporte. Dê um
            salto em suas habilidades com o controle mais realista de todos os
            tempos, com uma engine de movimento melhorado com estilos
            característicos, controles avançados de arremesso, um novo sistema
            de avaliação de drible, colisões sem a bola e bola e uma nova
            jogabilidade defensiva, baseada em leitura e reação.
          </h6>
          <div className="teste">
            <button>Comprar</button>
            <h3>R$ 323200,00</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
