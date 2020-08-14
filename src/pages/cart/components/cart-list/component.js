import styled from "styled-components";

const PageNameBox = styled.div`
  display: flex;
  padding-bottom: 25px;

  h5 {
    margin-left: 10px;
    transform: translateY(35%);
  }
`;

const CartListContainer = styled.div`
  width: 100%;
  margin-right: 25px;
`;

const ResumeContainer = styled.div`
  width: 35%;
  height: 100%;
  padding: 15px 20px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);

  h1 {
    border-bottom: 5px solid rgba(0, 0, 0, 0.8);
    padding-bottom: 10px;
    margin-bottom: 15px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  padding: 12px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);

  img {
    width: 100px;
    cursor: pointer;
    transition: 500ms;

    &:hover {
      filter: brightness(30%);
    }
  }
`;

const CardBio = styled.div`
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
  h5 {
    font-size: 14px;
    opacity: 0.5;
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

const ResumeBox = styled.div`
  display: flex;
  margin: 5px 0;
  padding: 5px 0 0;
  border-top: 2px rgba(0, 0, 0, 0.2) solid;

  h2.value {
    margin: 0 0 0 auto;
  }
`;

export {
  PageNameBox,
  CartListContainer,
  ResumeContainer,
  CardContainer,
  CardBio,
  CardQty,
  ResumeBox,
};
