import styled from "styled-components";

const ProdcutsContainer = styled.div`
  position: relative;
  display: flow-root;
  text-align: center;
  padding: 15px;
  box-shadow: 0px -20px 19px 0px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  z-index: 2;

  @media (min-width: 390px) {
    padding: 0 15%;
  }

  @media (min-width: 768px) {
    display: table;
    padding: 15px;
  }

  @media (min-width: 1024px) {
    padding: 90px;
  }

  @media (min-width: 1440px) {
    display: flex;
    text-align: left;
    flex-direction: column;
    padding: 35px 180px;
  }

  @media (min-width: 1920px) {
    display: flex;
    text-align: left;
    flex-direction: column;
    padding: 50px 25px;
  }

  @media (min-width: 2560px) {
    padding: 60px 135px 20px;
  }
`;

const Products = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const Card = styled.div`
  position: relative;
  float: left;
  width: 80%;
  max-width: 380px;
  margin: 15px 30px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);

  @media (min-width: 390px) {
    width: 100%;
    margin: 15px 0;
  }

  @media (min-width: 768px) {
    width: 320px;
    margin: 20px 15px;
  }

  @media (min-width: 1024px) {
    width: 350px;
    margin: 20px;
  }

  @media (min-width: 1440px) {
    width: 280px;
    margin: 25px 55px 8px 0px;
  }

  @media (min-width: 1920px) {
    width: 270px;
    margin: 0 12px 25px;
  }

  @media (min-width: 2560px) {
    width: 350px;
    height: 640px;
    max-height: none;
    margin: 30px 12px;
  }
`;

const CardIMG = styled.img`
  width: 100%;
  height: 320px;
  transition: 300ms filter linear;

  &:hover {
    filter: brightness(50%);
  }
`;

const CardBio = styled.div`
  position: relative;
  padding: 20px;
  background-color: #ffffff;
  z-index: 2;

  h2 {
    font-size: 15px;
    letter-spacing: -1px;
    color: #000000;
    text-transform: capitalize;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    padding-bottom: 20px;
    font-size: 18px;
    letter-spacing: 1px;
    color: #000000;
    text-transform: capitalize;
  }

  @media (min-width: 390px) {
    h2 {
      font-size: 14px;
    }
    h3 {
      font-size: 18px;
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 22px;
    }
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: 20px;
    }
  }

  @media (min-width: 1440px) {
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 20px;
    }
  }

  @media (min-width: 1920px) {
    h2 {
      font-size: 15px;
      margin-bottom: 15px;
    }
    h3 {
      font-size: 20px;
    }
  }

  @media (min-width: 2560px) {
    h2 {
      font-size: 22px;
      height: 42px;
    }
    h3 {
      font-size: 25px;
    }
  }
`;

export { ProdcutsContainer, Products, Card, CardIMG, CardBio };
