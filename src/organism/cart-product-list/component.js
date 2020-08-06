import styled from "styled-components";

const PageNameBox = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 25px;

  h5 {
    position: relative;
    top: 50%;
    margin-left: 10px;
    transform: translateY(35%);
  }
`;

const CartListContainer = styled.div`
  width: 100%;
  position: relative;
  margin-right: 25px;
`;

export { PageNameBox, CartListContainer };
