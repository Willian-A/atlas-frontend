import styled from "styled-components";

const ProdcutsContainer = styled.div`
  position: relative;
  display: flow-root;
  text-align: center;
  box-shadow: 0px 0 25px 15px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  z-index: 1;

  @media (min-width: 390px) {
    padding: 0 15%;
  }

  @media (min-width: 768px) {
    display: table;
    padding: 15px;
  }

  @media (min-width: 1024px) {
    padding: 35px 0 10px 45px;
  }

  @media (min-width: 1440px) {
    padding: 8px;
  }

  @media (min-width: 1920px) {
    display: flex;
    width: unset;
    text-align: left;
    flex-direction: column;
    padding: 50px 0 30px 28px;
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
  max-width: 260px;
  margin: 0 auto 25px auto;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);

  &:first-child {
    margin: 25px auto 25px auto;
  }

  @media (min-width: 390px) {
    width: 100%;
    max-width: 270px;
    margin: 0 auto 45px auto;

    &:first-child {
      margin: 45px auto 45px auto;
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    max-width: 270px;
    margin: 20px 40px;

    &:first-child {
      margin: 20px 40px;
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 270px;
    margin: 0 auto 25px 0;

    &:first-child {
      margin: 0 auto 25px 0;
    }
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 250px;
    margin: 10px;

    &:first-child {
      margin: 10px;
    }
  }

  @media (min-width: 1920px) {
    width: 100%;
    max-width: 270px;
    margin: 0 0 27px 27px;

    &:first-child {
      margin: 0 0 27px 27px;
    }
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

export {
  ProdcutsContainer as ProductsContainer,
  Products,
  Card,
  CardIMG,
  CardBio,
};
