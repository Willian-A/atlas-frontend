import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 390px) {
  }

  @media (min-width: 768px) {
    flex-direction: row;

    padding: 10px;
  }

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export default CardContainer;
