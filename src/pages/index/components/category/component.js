import styled from "styled-components";

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CategoriesBox = styled.div`
  position: relative;
  width: 85%;
  text-align: center;
  margin: 0 auto 10px;

  h2 {
    position: absolute;
    margin: 25% 0;
    color: #ffae00;
    transition: 500ms;
  }

  img {
    width: 100%;
    cursor: pointer;
    transition: 500ms;
    filter: brightness(40%);
  }

  &:hover {
    img {
      filter: brightness(20%);
      transform: scale(1.05);
    }

    h2 {
      color: white;
    }
  }

  @media (min-width: 390px) {
    width: 80%;
    margin: 0 auto 15px;
  }
  @media (min-width: 768px) {
    width: 32%;
  }
  @media (min-width: 1024px) {
    width: 32.5%;
    margin: 0;

    h2 {
      margin: 28% 0;
    }
  }
  @media (min-width: 1440px) {
    width: 32.5%;
  }
`;

export { CategoriesContainer, CategoriesBox };
