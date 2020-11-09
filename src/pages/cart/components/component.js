import styled from "styled-components";

const PageNameBox = styled.div`
  display: flex;
  margin: 20px 10px 20px;

  h2 {
    font-weight: 500;
  }

  h5 {
    height: fit-content;
    margin-left: 10px;
    font-weight: 400;
    transform: translateY(45%);
  }

  @media (min-width: 1024px) {
    margin: 20px 0;
  }
`;

const CartContainer = styled.div`
  padding: 10px;

  @media (min-width: 1024px) {
    display: flex;
    padding: 0;
  }
`;

const CartListContainer = styled.div`
  width: 100%;
`;

const ResumeContainer = styled.div`
  position: fixed;
  top: unset;
  bottom: 0;
  margin-bottom: 5px;
  height: fit-content;
  padding: 18px;
  background-color: #fff;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;

  h2 {
    font-weight: 600;
    border-bottom: 2px solid rgba(0, 0, 0, 0.8);
    padding-bottom: 10px;
    margin-bottom: 15px;
  }

  h3 {
    font-weight: 400;

    &:last-child {
      margin: 0 0 0 auto;
    }
  }

  @media (min-width: 1024px) {
    position: relative;
    width: 100%;
    max-width: 25vw;
    height: unset;
    padding: 10px 15px;
    background-color: transparent;
    box-shadow: none;
    border-left: 5px solid rgba(0, 0, 0, 0.15);
  }
`;

const CardContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  height: 150px;

  img {
    width: 110px;
    cursor: pointer;
    transition: 500ms;

    &:hover {
      filter: brightness(30%);
    }
  }

  @media (min-width: 1024px) {
    padding: 0;
    width: 92%;

    &:last-child {
      margin-bottom: 15px;
    }
  }
`;

const CardBio = styled.div`
  position: relative;
  margin: 0 0 0 10px;

  h2:first-child {
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    font-weight: 600;
  }

  p {
    font-weight: 400;
  }
`;

const CardQty = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  top: unset;
  bottom: 0;

  h2 {
    text-align: center;
    font-weight: 500;
    width: 45px;
    margin: 0 20px;
    padding: 5px;
    border: 1px rgba(0, 0, 0, 0.15) solid;
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
