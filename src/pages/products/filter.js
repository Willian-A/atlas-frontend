import styled from "styled-components";

const Filters = styled.div`
  width: ${(props) => props.width || "20px"};
  max-width: 240px;
  position: absolute;
  top: 55px;
  background-color: #0e0e0e;
  box-shadow: 30px 50px 100px rgba(0, 0, 0, 1);
  transition: 500ms;
  z-index: 1;

  @media (min-width: 1024px) {
    position: relative;
    width: 100%;
    top: 0;
    max-width: 200px;
    padding: 15px 0;
    margin: 0 0 0 0;
    box-shadow: 0 0 0 rgba(0, 0, 0, 1);
  }

  @media (min-width: 1440px) {
    max-width: 240px;
    padding: 10px 10px;
    margin: 0 25px 0 0;
  }

  @media (min-width: 1920px) {
    max-width: 280px;
    padding: 10px 10px;
    margin: 0 10px 0 0;
  }

  @media (min-width: 2560px) {
    max-width: 300px;
    padding: 10px 10px;
    margin: 0 15px 0 0;
  }
`;

const Icon = styled.div`
  position: sticky;
  z-index: 2;
  top: 200px;
  margin-left: 100%;
  border-style: solid;
  border-width: 30px 0 30px 35px;
  border-color: transparent transparent transparent #ff8a00;
  &:target {
    border-color: transparent transparent transparent blue;
  }
  @media (min-width: 1024px) {
    display: none;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1920px) {
  }

  @media (min-width: 2560px) {
  }
`;

export { Filters, Icon };
