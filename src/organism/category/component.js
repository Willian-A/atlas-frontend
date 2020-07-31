import styled from "styled-components";

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 20px auto;

  @media (min-width: 390px) {
    padding: 0 0 30px 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 0 10px 10px 10px;
  }

  @media (min-width: 1024px) {
    padding: 0 0 10px 0;
  }

  @media (min-width: 1440px) {
    padding: 0 0 15px 0;
  }

  @media (min-width: 1920px) {
    padding: 0 0 20px 0;
  }

  @media (min-width: 2560px) {
    padding: 0 0 25px 0;
  }
`;

export { CategoriesContainer };
