import styled from "styled-components";

const ProductGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, auto);
  grid-template-columns: repeat(auto-fill, 290px);
  gap: 20px;
  padding: 25px 0 25px 0;
  justify-content: center;
  box-shadow: 0px 0 25px 15px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;

  @media (min-width: 390px) {
    grid-template-columns: repeat(auto-fill, 280px);
    gap: 20px;
    padding: 35px 0 35px 0;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, 230px);
    gap: 12px;
    padding: 10px 10px 10px 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, 250px);
    gap: 12px;
    padding: 10px 0 10px 0;
  }

  @media (min-width: 1440px) {
    gap: 20px;
    padding: 18px 0 18px 0;
  }

  @media (min-width: 1920px) {
    gap: 10px;
    padding: 10px 0 10px 0;
  }

  @media (min-width: 2560px) {
    grid-template-columns: repeat(auto-fill, 290px);
    gap: 20px;
    padding: 15px 0 15px 0;
  }
`;

const ProductCard = styled.div`
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
`;

const CardIMG = styled.img`
  max-width: 100%;
  transition: 300ms filter linear;

  &:hover {
    filter: brightness(50%);
  }
`;

const CardBio = styled.div`
  background-color: #ffffff;
  padding: 20px;

  h2 {
    margin-bottom: 5px;
    font-size: 15px;
    letter-spacing: -1px;
    color: #000000;
    text-transform: capitalize;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: 500ms;
  }
  h2:hover{
    margin-left: 10px;
  }

  h3 {
    margin-bottom: 15px;
    color: #000;
    font-size: 18px;
    letter-spacing: 1px;w
    text-transform: capitalize;
    transition: 500ms;
  }

  h3:hover{
    margin-left: 10px;
  }

  @media (min-width: 390px) {
    padding: 20px;
  }

  @media (min-width: 768px) {
    padding: 15px;
    h2 {
      margin-bottom: 5px;
      font-size: 14px;
    }

    h3 {
      margin-bottom: 15px;
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    padding: 15px;
    h2 {
      margin-bottom: 5px;
      font-size: 15px;
    }

    h3 {
      margin-bottom: 15px;
      font-size: 18px;
    }
  }

  @media (min-width: 1440px) {
    padding: 18px;
    h2 {
      margin-bottom: 5px;
      font-size: 14px;
    }

    h3 {
      margin-bottom: 15px;
      font-size: 16px;
    }
  }

  @media (min-width: 1920px) {
  }

  @media (min-width: 2560px) {
    padding: 20px;
    h2 {
      margin-bottom: 5px;
      font-size: 17px;
    }

    h3 {
      margin-bottom: 15px;
      font-size: 22px;
    }
  }
`;

export { ProductGrid, ProductCard, CardIMG, CardBio };
