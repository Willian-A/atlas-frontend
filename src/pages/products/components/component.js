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
`;
const FilterContainer = styled.div`
  width: 30%;
  color: #fff;
  background-color: #000;
`;
const ProductsContainer = styled.div`
  width: 100%;
`;

const CardBox = styled.div`
  width: 100%;
  max-width: 85%;
  margin: 0 auto 20px;
  overflow: hidden;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    transition: 500ms;

    &:hover {
      filter: brightness(30%);
    }
  }

  @media (min-width: 390px) {
    max-width: 80%;
    margin: 0 auto 30px;
  }

  @media (min-width: 768px) {
    flex-basis: calc(25% - 6px);
    margin: 0;

    &:last-child {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    flex-basis: calc(20% - 6px);

    &:last-child {
      display: block;
    }
  }

  @media (min-width: 1440px) {
    flex-basis: calc(20% - 10px);
  }

  @media (min-width: 1920px) {
    flex-basis: calc(20% - 15px);
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
