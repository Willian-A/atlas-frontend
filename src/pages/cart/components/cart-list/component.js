import styled from "styled-components";

const PageNameBox = styled.div`
  display: flex;
  padding-bottom: 25px;
  margin: 20px 0 0 10px;

  h5 {
    margin-left: 10px;
    transform: translateY(35%);
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const CartListContainer = styled.div`
  width: 100%;
  z-index: 1;
`;

const ResumeContainer = styled.div`
  position: fixed;
  top: unset;
  height: fit-content;
  padding: 15px 18px;
  background-color: #fff;
  box-shadow: 0px 0px 50px 20px rgba(0, 0, 0, 0.6);
  z-index: 2;

  h1 {
    border-bottom: 5px solid rgba(0, 0, 0, 0.8);
    padding-bottom: 10px;
    margin-bottom: 15px;
  }

  button {
    width: 100%;
    margin-top: 5px;
  }

  @media (min-width: 768px) {
    padding: 25px 5%;
  }

  @media (min-width: 1024px) {
    width: 40%;
    flex-direction: row;
    position: relative;
    padding: 15px 25px;
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);

    button {
      width: 100%;
      margin: 10px 0 0;
    }
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

  &:last-child {
    margin-bottom: 200px;
  }

  @media (min-width: 1024px) {
    width: 92%;

    &:last-child {
      margin-bottom: 15px;
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
  CartContainer,
  CartListContainer,
  ResumeContainer,
  CardContainer,
  CardBio,
  CardQty,
  ResumeBox,
};
