import styled from "styled-components";

const CategoriesBox = styled.div`
  position: relative;
  width: 92%;
  text-align: center;
  margin: 0 auto 5px auto;

  &:hover {
    img {
      filter: brightness(20%);
      transform: scale(1.1);
    }
    h2 {
      color: white;
    }
  }

  h2 {
    margin: 28% auto;
    font-size: 35px;
    position: absolute;
    color: #ffae00;
    transition: 500ms;
  }

  @media (min-width: 390px) {
    width: 85%;
    margin: 0 auto 15px auto;

    h2 {
      font-size: 45px;
    }
  }

  @media (min-width: 768px) {
    width: 32%;
    margin: 0;

    h2 {
      font-size: 32px;
    }
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: 35px;
    }
  }

  @media (min-width: 1440px) {
    h2 {
      font-size: 38px;
    }
  }

  @media (min-width: 1920px) {
    width: 32.5%;
  }

  @media (min-width: 2560px) {
    h2 {
      font-size: 55px;
    }
  }
`;
const CategoriesCover = styled.img`
  width: 100%;
  cursor: pointer;
  transition: 500ms;
  filter: brightness(40%);
`;

export { CategoriesBox, CategoriesCover };
