import styled from "styled-components";

const ProductsContainer = styled.div`
  width: fit-content;
  margin: 5vw auto;
  padding: 0 20px;
  display: grid;
  grid-gap: 10vw;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  @media (min-width: 768px) {
    width: 100%;
    padding: 0;
    margin: ${({ useMargin }) => (useMargin ? "0 1vw" : "1vw 0")};
    grid-gap: 1vw;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-template-rows: minmax(345px, 1fr);
  }

  @media (min-width: 1024px) {
    margin: ${({ useMargin }) => (useMargin ? "0 0 0 0.8em" : "0.8em 0")};
    grid-gap: 0.8em;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-template-rows: minmax(300px, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: minmax(375px, 1fr);
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-template-rows: minmax(470px, 1fr);
  }

  @media (min-width: 2560px) {
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  }
`;

const CardBox = styled.div`
  position: relative;

  img {
    width: 100%;
    min-height: 372px;
    transition: filter ease-in-out 450ms;

    &:hover {
      filter: brightness(40%);
    }
  }

  @media (min-width: 768px) {
    img {
      min-height: 250px;
    }

    &:last-child {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    img {
      min-height: 245px;
    }

    &:last-child {
      display: unset;
    }
  }

  @media (min-width: 1440px) {
    img {
      min-height: 275px;
    }
  }

  @media (min-width: 1920px) {
    img {
      min-height: 365px;
    }
  }

  @media (min-width: 2560px) {
    img {
      min-height: 450px;
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
