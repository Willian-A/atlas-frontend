import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0 20px 0;

  @media (min-width: 390px) {
    padding: 30px 0 30px 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 10px;
  }

  @media (min-width: 1024px) {
    padding: 10px 0 10px 0;
  }

  @media (min-width: 1440px) {
    padding: 15px 0 15px 0;
  }

  @media (min-width: 1920px) {
    padding: 20px 0 20px 0;
  }

  @media (min-width: 2560px) {
    padding: 25px 0 25px 0;
  }
`;

export default CardContainer;
