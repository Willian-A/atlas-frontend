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
`;

const ResumeContainer = styled.div`
  position: fixed;
  top: unset;
  height: fit-content;
  padding: 18px;
  background-color: #fff;
  box-shadow: 0px 0px 50px 20px rgba(0, 0, 0, 0.3);
  z-index: 2;

  h1 {
    border-bottom: 5px solid rgba(0, 0, 0, 0.8);
    padding-bottom: 10px;
    margin-bottom: 15px;
  }

  button {
    width: 100%;
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    padding: 25px 5%;
  }

  @media (min-width: 1024px) {
    width: 40%;
    flex-direction: row;
    position: relative;
    padding: 10px 15px;
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);
  }
`;

const CardContainer = styled.div`
  display: flex;
  padding: 15px;
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
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 15px;
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
  position: absolute;
  top: unset;
  bottom: 0;
  max-width: 220px;

  h4 {
    font-size: 22px;
    margin: 0 20px;
    padding: 5px 20px 0 20px;
    border: 1px rgba(0, 0, 0, 0.08) solid;
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
};
