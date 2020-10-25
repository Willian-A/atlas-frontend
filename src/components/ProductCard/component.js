import styled from "styled-components";

const ProductsContainer = styled.div`
  display: grid;
  width: fit-content;
  grid-gap: 5vw;
  margin: 2vh auto;
  grid-template-columns: repeat(1, 80vw);

  @media (min-width: 768px) {
    width: 100%;
    margin: ${(props) => props.ContainerConfig["768px"][0]};
    grid-gap: 1.5vw;
    grid-template-columns: repeat(
      ${(props) => props.ContainerConfig["768px"][1]},
      minmax(100px, 254px)
    );
  }

  @media (min-width: 1024px) {
    margin: ${(props) => props.ContainerConfig["1024px"][0]};
    grid-gap: 1vw;
    grid-template-columns: repeat(
      ${(props) => props.ContainerConfig["1024px"][1]},
      minmax(100px, 254px)
    );
  }

  @media (min-width: 1440px) {
    margin: ${(props) => props.ContainerConfig["1440px"][0]};
    grid-template-columns: repeat(
      ${(props) => props.ContainerConfig["1440px"][1]},
      minmax(100px, 225px)
    );
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(
      ${(props) => props.ContainerConfig["1440px"][1]},
      minmax(100px, 290px)
    );
  }

  @media (min-width: 2560px) {
    grid-template-columns: repeat(
      ${(props) => props.ContainerConfig["1440px"][1]},
      minmax(100px, 335px)
    );
  }
`;

const CardBox = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    transition: 500ms;

    &:hover {
      filter: brightness(30%);
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
  padding: 10px;
  color: black;

  h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 1vh;
  }
`;

export { ProductsContainer, CardBox, CardBio };
