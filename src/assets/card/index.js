import styled from "styled-components";

const Boxes = styled.ul`
  display: grid;
  width: 100%;
  box-shadow: 0px 0 25px 15px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 280px);
    padding: 25px 55px;
    grid-column-gap: 10%;
    grid-row-gap: 20px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 32%);
    padding: 25px 25px;
    grid-column-gap: 15px;
    grid-row-gap: 20px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: ${(props) =>
      "repeat(" + props.amount["1440"] + ", 1fr)"};
    padding: 20px 25px;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }

  @media (min-width: 1920px) {
    grid-template-columns: ${(props) =>
      "repeat(" + props.amount["1920"] + ", 280px)"};
    padding: 20px 20px;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }

  @media (min-width: 2560px) {
  }
`;

const Title = styled.h1``;
const Products = styled.div`
  width: 100%;
`;
const Card = styled.div`
  width: 300px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);

  @media (min-width: 390px) {
    width: 270px;
  }

  @media (min-width: 768px) {
    width: 280px;
  }

  @media (min-width: 1024px) {
    width: 220px;
    margin: auto;
  }

  @media (min-width: 1440px) {
    width: 215px;
  }

  @media (min-width: 1920px) {
    width: 280px;
  }

  @media (min-width: 2560px) {
  }
`;

const CardIMG = styled.img`
  width: 100%;
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
      font-size: 15px;
    }
    h3 {
      margin-top: 5px;
      font-size: 18px;
    }
  }

  @media (min-width: 1024px) {
    padding: 15px;

    h2 {
      font-size: 13px;
    }
    h3 {
      margin-top: 10px;
      font-size: 17px;
    }
  }

  @media (min-width: 1440px) {
    padding: 15px;

    h2 {
      font-size: 13px;
    }
    h3 {
      margin-top: 10px;
      font-size: 17px;
    }
  }

  @media (min-width: 1920px) {
    padding: 20px;
    h2 {
      font-size: 15px;
    }
    h3 {
      margin-top: 10px;
      font-size: 18px;
    }
  }

  @media (min-width: 2560px) {
    h2 {
      font-size: 20px;
      height: 42px;
    }
    h3 {
      font-size: 25px;
    }
  }
`;

export { Boxes, Title, Products, Card, CardIMG, CardBio };
