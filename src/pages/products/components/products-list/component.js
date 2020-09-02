import styled from "styled-components";

const PageNameContainer = styled.div`
  position: relative;
  width: fit-content;
  margin: 1.5vh auto;

  h3 {
    width: fit-content;
    margin: 1.5vh auto;
  }

  @media (min-width: 768px) {
    width: auto;
    margin: 3.5vw;
    display: flex;

    h3 {
      margin: 1.5vh 0 0 auto;
    }
  }

  @media (min-width: 1024px) {
    margin: 0 0 2vh;

    h3 {
      display: none;
    }
  }
`;

const PageNameBox = styled.div`
  display: flex;
  width: fit-content;

  h5 {
    margin-left: 10px;
    transform: translateY(40%);
  }
`;

const PageContainer = styled.div`
  display: flex;
  position: relative;

  @media (min-width: 768px) {
    padding: 0 0 2vh 0;
  }

  @media (min-width: 1024px) {
    padding: 0 0 2vh 0;
  }
`;
const FilterContainer = styled.div`
  position: absolute;
  width: ${({ open }) => (open ? "50vw" : "0")};
  overflow: hidden;
  opacity: ${({ open }) => (open ? "1" : "0")};
  padding: 3vw 3vw 0;
  background-color: #000;
  color: #fff;
  box-shadow: 0px 25px 50px 35px rgba(0, 0, 0, 0.5);
  z-index: 2;
  transition: 500ms;

  @media (min-width: 768px) {
    padding: 1.5vw 1.5vw 0;
    width: ${({ open }) => (open ? "30vw" : "0")};
  }

  @media (min-width: 1024px) {
    position: relative;
    width: 18vw;
    opacity: 1;
    padding: 1vw 1vw 0;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    width: 13vw;
  }

  @media (min-width: 1920px) {
    width: 10vw;
  }

  @media (min-width: 2560px) {
    width: 11vw;
  }
`;
const FilterBox = styled.div`
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 1vh;
  text-transform: capitalize;
  transition: 500ms;

  h3 {
    padding-bottom: 0.5vh;
    transition: 500ms;
    border-bottom: ${({ open }) => (open ? "5px solid white" : "0")};

    &:hover {
      color: #ffae00;
    }
  }
`;

const FilterOptions = styled.div`
  padding-top: ${({ open }) => (open ? "1vh" : "0")};
  height: ${({ open }) => (open ? "fit-content" : "0")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: 500ms;

  h4 {
    transition: 500ms;

    &:hover {
      color: #ffae00;
    }
    &:last-child {
      padding-bottom: 0.5vh;
    }
  }
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-gap: 5vw;
  margin: 0 auto;
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
    grid-gap: 1.5vw;
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
  PageNameContainer,
  PageContainer,
  FilterContainer,
  FilterBox,
  FilterOptions,
  ProductsContainer,
  CardBox,
  CardBio,
};
