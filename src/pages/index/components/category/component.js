import styled from "styled-components";

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 20px;

  @media (min-width: 390px) {
    padding: 0 0 30px 0;
  }
  @media (min-width: 768px) {
    margin: 0;
    padding: 0 10px 10px;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    padding: 0 0 10px;
  }
  @media (min-width: 1440px) {
    padding: 0 0 15px;
  }
  @media (min-width: 1920px) {
    padding: 0 0 20px;
  }
  @media (min-width: 2560px) {
    padding: 0 0 25px;
  }
`;

const CategoriesBox = styled.div`
  position: relative;
  width: 92%;
  text-align: center;
  margin: 0 auto 5px;

  &:hover {
    img {
      filter: brightness(20%);
      transform: scale(1.05);
    }
    h2 {
      color: white;
    }
  }

  h2 {
    position: absolute;
    margin: 28% auto;
    color: #ffae00;
    transition: 500ms;
  }

  @media (min-width: 390px) {
    width: 85%;
    margin: 0 auto 15px;
  }
  @media (min-width: 768px) {
    width: 32%;
    margin: 0;
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1440px) {
  }
  @media (min-width: 1920px) {
    width: 32.5%;
  }
  @media (min-width: 2560px) {
  }
`;
const CategoriesCover = styled.img`
  width: 100%;
  cursor: pointer;
  transition: 500ms;
  filter: brightness(40%);
`;

export { CategoriesContainer, CategoriesBox, CategoriesCover };
