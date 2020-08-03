import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;

  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);

  &:last-child {
    margin-bottom: 0;
  }

  img {
    width: 100px;
  }
`;

const CardBio = styled.div`
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardQty = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 220px;

  h2 {
    margin: 0 20px 0;
    padding: 5px 20px 0 20px;
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
  }
`;

export { CardContainer, CardBio, CardQty };
