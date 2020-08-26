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
  padding: 0 5vw 5vh 0;

  @media (min-width: 768px) {
    padding: 0 2vw 2vh 0;
  }

  @media (min-width: 1024px) {
    padding: 0 0 2vh 0;
  }
`;
const FilterContainer = styled.div`
  color: #fff;
  background-color: #000;
  width: 5vw;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 3vw;
  }

  @media (min-width: 1024px) {
    width: 22vw;
  }

  @media (min-width: 1440px) {
    width: 16vw;
  }

  @media (min-width: 1920px) {
    width: 15vw;
  }

  @media (min-width: 2560px) {
    width: 14vw;
  }
`;
const ProductsContainer = styled.div`
  display: grid;
  grid-gap: 5vw;
  grid-template-columns: repeat(1, 80vw);

  @media (min-width: 768px) {
    grid-gap: 1.5vw;
    grid-template-columns: repeat(3, 30vw);
  }

  @media (min-width: 1024px) {
    grid-gap: 1vw;
    grid-template-columns: repeat(3, 23.5vw);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 15vw);
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, 14vw);
  }

  @media (min-width: 2560px) {
    grid-gap: 1vw;
    grid-template-columns: repeat(4, 12.5vw);
  }
`;

const CardBox = styled.div`
  overflow: hidden;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    transition: 500ms;

    &:hover {
      filter: brightness(30%);
    }
  }
`;

const CardBio = styled.div`
  padding: 10px;
  color: black;

  h4 {
    font-size: 1em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    font-size: 1.3em;
    margin-bottom: 15px;
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
