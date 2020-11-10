import styled from "styled-components";

const ProductsContainer = styled.div`
  width: fit-content;
  margin: 10vw auto;
  display: grid;
  grid-gap: 10vw;
  grid-template-columns: repeat(auto-fit, minmax(280px, 310px));

  @media (min-width: 768px) {
    width: 100%;
    margin: ${({ useMargin }) => (useMargin ? "0 1vw" : "1vw 0")};
    grid-gap: 1vw;
    grid-template-columns: repeat(auto-fit, minmax(180px, 210px));
    grid-template-rows: minmax(345px, 1fr);
  }

  @media (min-width: 1024px) {
    margin: ${({ useMargin }) => (useMargin ? "0 0 0 0.8em" : "0.8em 0")};
    grid-gap: 0.8em;
    grid-template-columns: repeat(auto-fit, minmax(180px, 210px));
    grid-template-rows: minmax(300px, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 230px));
    grid-template-rows: minmax(375px, 1fr);
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(auto-fit, minmax(230px, 290px));
  }

  @media (min-width: 2560px) {
    grid-template-columns: repeat(auto-fit, minmax(290px, 320px));
  }
`;

const CardBox = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    transition: ease-in-out 450ms;

    &:hover {
      filter: brightness(40%);
    }
  }

  @media (min-width: 768px) {
    &:last-child {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    &:last-child {
      display: unset;
    }
  }
`;

const CardBio = styled.div`
  padding: 10px 0 0;
  color: black;

  h4 {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.5em;
  }
`;

export { ProductsContainer, CardBox, CardBio };
