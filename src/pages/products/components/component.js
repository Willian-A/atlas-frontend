import styled from "styled-components";

const PageNameBox = styled.div`
  display: flex;
  padding-bottom: 25px;
  margin: 20px 0 0 10px;

  h5 {
    margin-left: 10px;
    transform: translateY(35%);
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const PageContainer = styled.div`
  display: flex;
  padding-bottom: 25px;
`;
const FilterContainer = styled.div`
  width: 25%;
  margin-right: auto;
  color: #fff;
  background-color: #000;
`;
const ProductsContainer = styled.div`
  width: fit-content;
  display: grid;
  padding: 0 1vw;

  @media (min-width: 390px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1920px) {
    grid-gap: 20px;
    grid-template-columns: 28vh 28vh 28vh 28vh;
  }
`;

const CardBox = styled.div`
  overflow: hidden;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);

  img {
    max-height: 350px;
    transition: 500ms;

    &:hover {
      filter: brightness(30%);
    }
  }

  @media (min-width: 390px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1920px) {
  }
`;

const CardBio = styled.div`
  padding: 12px;
  color: black;

  h4 {
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    padding: 10px;

    h4 {
      font-size: 12px;
    }

    h3 {
      font-size: 15px;
    }
  }

  @media (min-width: 1024px) {
    h4 {
      font-size: 14px;
    }

    h3 {
      font-size: 16px;
    }
  }

  @media (min-width: 2560px) {
    padding: 15px;
    h4 {
      font-size: 18px;
    }

    h3 {
      font-size: 20px;
    }
  }
`;

export {
  PageNameBox,
  PageContainer,
  FilterContainer,
  ProductsContainer,
  CardBox,
  CardBio,
};
