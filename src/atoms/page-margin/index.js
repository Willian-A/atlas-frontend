import styled from "styled-components";

const GeralContainer = styled.div`
  height: fit-content;

  @media (min-width: 1024px) {
    padding: 0 2%;
    padding-top: 15px;
  }

  @media (min-width: 1440px) {
    padding: 0 10%;
    padding-top: 20px;
  }

  @media (min-width: 1920px) {
    padding: 0 12%;
    padding-top: 50px;
  }

  @media (min-width: 2560px) {
    padding: 0 16%;
    padding-top: 50px;
  }
`;

export default GeralContainer;
