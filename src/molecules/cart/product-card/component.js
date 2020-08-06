import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;
  padding: 12px;

  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-bottom: 0;
  }

  img {
    width: 100px;
  }
`;

const CardBio = styled.div`
  position: relative;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 420px;

  h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CardQty = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 220px;

  h4 {
    font-size: 22px;
    margin: 0 20px 0;
    padding: 5px 20px 0 20px;
    border: 1px rgba(0, 0, 0, 0.08) solid;
  }
`;

export { CardContainer, CardBio, CardQty };
