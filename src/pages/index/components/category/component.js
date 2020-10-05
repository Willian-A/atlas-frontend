import styled from "styled-components";

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CategoriesBox = styled.div`
  position: relative;
  margin: 0 auto 10px;
  width: 85%;
  h2 {
    position: absolute;
    text-align: center;
    margin: 25% 0;
    color: #ffae00;
    transition: 500ms;
    z-index: 2;
  }

  img {
    position: relative;
    width: 100%;
    cursor: pointer;
    transition: 500ms;
    z-index: 1;
  }

  &:hover {
    img {
      filter: brightness(50%);
      transform: scale(1.05);
    }

    h2 {
      color: white;
    }
  }

  @media (min-width: 390px) {
    margin: 0 auto 15px;
    width: 80%;
  }

  @media (min-width: 768px) {
    margin: 0 auto 15px;
    width: 31.8%;
  }

  @media (min-width: 1024px) {
    margin: 0 0 15px;
    width: 32.5%;

    h2 {
      margin: 28% 0;
    }
  }
`;

export { CategoriesContainer, CategoriesBox };
