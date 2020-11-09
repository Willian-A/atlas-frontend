import styled from "styled-components";

const PageNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px 20px;

  h2 {
    font-weight: 500;
  }

  h3 {
    margin: auto 0 auto;
    height: min-content;
    font-weight: 500;
  }

  h5 {
    margin: auto auto auto 10px;
    height: min-content;
    font-weight: 400;
  }

  @media (min-width: 1024px) {
    margin: 20px 0;

    h3 {
      display: none;
    }
  }
`;

const PageNameBox = styled.div`
  display: flex;
  width: fit-content;

  h4 {
    margin-left: 10px;
    transform: translateY(32%);
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
  padding: 1em;
  width: ${({ open }) => (open ? "45%" : "0")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  overflow: hidden;
  background-color: #000;
  color: #fff;
  z-index: 2;
  transition: 500ms;

  @media (min-width: 390px) {
    width: ${({ open }) => (open ? "35%" : "0")};
  }

  @media (min-width: 768px) {
    width: ${({ open }) => (open ? "20%" : "0")};
  }

  @media (min-width: 1024px) {
    position: relative;
    width: 18%;
    opacity: 1;
  }

  @media (min-width: 1920px) {
    width: 15%;
  }

  @media (min-width: 2560px) {
    width: 10%;
  }
`;
const FilterBox = styled.div`
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 1vh;
  text-transform: capitalize;
  transition: 250ms;

  h3 {
    padding-bottom: 0.5vh;
    transition: 250ms;
    font-weight: 500;
    border-bottom: ${({ open }) => (open ? "2.5px solid white" : "0")};

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
  margin: ${({ open }) => (open ? "0 0 15px" : "0")};
  transition: 350ms;

  h4 {
    transition: 250ms;
    font-weight: 400;

    &:hover {
      color: #ffae00;
    }
  }
`;

export {
  PageNameBox,
  PageNameContainer,
  PageContainer,
  FilterContainer,
  FilterBox,
  FilterOptions,
};
