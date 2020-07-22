import styled from "styled-components";

const Filters = styled.div`
  width: ${(props) => props.width || "20px"};
  height: 93vh;
  max-width: 240px;
  position: absolute;
  top: 55px;
  z-index: 2;
  height: 100%;
  background-color: #0e0e0e;
  box-shadow: 30px 50px 100px rgba(0, 0, 0, 1);
  transition: 1s;

  @media (min-width: 1024px) {
    width: 208px;
    padding: 10px 10px;
    margin: 0 0 0 0;
  }

  @media (min-width: 1440px) {
    width: 280px;
    padding: 10px 10px;
    margin: 0 25px 0 0;
  }

  @media (min-width: 1920px) {
    width: 280px;
    padding: 10px 10px;
    margin: 0 10px 0 0;
  }

  @media (min-width: 2560px) {
    width: 300px;
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
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1920px) {
  }

  @media (min-width: 2560px) {
  }
`;

export { Filters, Icon };
