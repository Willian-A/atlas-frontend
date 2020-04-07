import React, { useState, useEffect } from "react";

import "./style.css";
import importAll from "../utils/importAll";
import NavBar from "../utils/navBar";
import api from "../../service/api.js";

export default function ProductPage() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    console.log("DB Online");
    select();
  }, []);

  let images = importAll(
    require.context("../../images/products", false, /\.(jpe?g)$/)
  );

  async function selectProducts() {
    const response = await api.get("/product");
    setResult(response.data.result);
  }

  async function select() {
    await selectProducts();
  }

  return (
    <div className="product-page-container">
      <NavBar />
      <div className="product-info-frame">
        <div className="product-info-main">
          <img src={images["nba2k20.jpg"]} alt="nba 2k20" />
          <div className="product-bio">
            <h2>NBA 2K20</h2>
            <h6>
              NBA 2K transformou-se em algo muito maior que uma simulação de
              basquete. Com NBA 2K20 a 2K continua a redefinir o que é possível
              fazer em um jogo de esportes, com gráficos e jogabilidade de
              primeira, modos de jogo, controle e personalização de jogadores
              inigualáveis. E mais: com o Neighborhood, um modo imersivo de
              mundo aberto, NBA 2K20 é uma plataforma para que jogadores e fãs
              de basquete se reúnam e criem o futuro da cultura do esporte. Dê
              um salto em suas habilidades com o controle mais realista de todos
              os tempos, com uma engine de movimento melhorado com estilos
              característicos, controles avançados de arremesso, um novo sistema
              de avaliação de drible, colisões sem a bola e bola e uma nova
              jogabilidade defensiva, baseada em leitura e reação.
            </h6>
            <div className="product-resume">
              <button>Comprar</button>
              <h3>R$ 200,00</h3>
            </div>
          </div>
        </div>
        <div className="product-requirements">
          <div className="product-requirements-info">
            <h2 className="product-requirements-title">Requisitos Mínimos:</h2>
            <h2 className="product-field">
              Sistema Operacional:
              <p>Windows 7 / 8.1 / 10 (versões de 64-bit)</p>
            </h2>
            <h2 className="product-field">
              Processador:
              <p>Intel® Core™ i3-530 @ 2.93 GHz / AMD FX-4100 @ 3.60 GHz</p>
            </h2>
            <h2 className="product-field">
              Memória: <p>4 GB de RAM</p>
            </h2>
            <h2 className="product-field">
              Placa de vídeo:
              <p>NVIDIA® GeForce® GT 450 1GB / AMD® Radeon™ HD 7770 1GB</p>
            </h2>
            <h2 className="product-field">
              Armazenamento: <p>80 GB de espaço disponível</p>
            </h2>
          </div>

          <div className="product-requirements-info">
            <h2 className="product-requirements-title">
              Requisitos Recomendados:
            </h2>
            <h2 className="product-field">
              Sistema Operacional:
              <p>Windows 7 / 8.1 / 10 (versões de 64-bit)</p>
            </h2>
            <h2 className="product-field">
              Processador:
              <p>Intel® Core™ i5-4430 @ 3 GHz / AMD FX-8370 @ 3.4 GHz</p>
            </h2>
            <h2 className="product-field">
              Memória: <p>8 GB de RAM</p>
            </h2>
            <h2 className="product-field">
              Placa de vídeo:
              <p>NVIDIA® GeForce® GTX 770 2GB / AMD® Radeon™ R9 270 2GB</p>
            </h2>
            <h2 className="product-field">
              Armazenamento: <p>80 GB de espaço disponível</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
