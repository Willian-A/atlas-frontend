import styled from "styled-components";

const CategoriesContainer = styled.div`
  width: fit-content;
  margin: 0 auto 10px;
  display: grid;
  grid-gap: 5vw;
  grid-template-columns: repeat(auto-fit, minmax(0, 280px));

  @media (min-width: 768px) {
    width: 100%;
    grid-gap: 1vw;
    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  }

  @media (min-width: 1024px) {
    grid-gap: 0.8em;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  @media (min-width: 1920px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  @media (min-width: 2560px) {
    grid-template-columns: repeat(auto-fit, minmax(620px, 1fr));
  }
`;

const CategoriesBox = styled.div`
  position: relative;

  h1 {
    position: absolute;
    top: 35%;
    height: fit-content;
    text-align: center;
    font-weight: 600;
    color: #eceff4;
    transition: 500ms;
    z-index: 2;
  }

  img {
    width: 100%;
    transition: 500ms;
  }

  &:hover {
    img {
      filter: brightness(40%);
    }

    h1 {
      color: #ffae00;
    }
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1920px) {
    h1 {
      top: 42%;
    }
  }

  @media (min-width: 2560px) {
  }
`;

export { CategoriesContainer, CategoriesBox };
