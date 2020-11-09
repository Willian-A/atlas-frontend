import styled from "styled-components";

const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 0 auto;
    padding: 25px;
  }
  @media (min-width: 1920px) {
    padding: 35px;
  }

  img {
    width: 100%;

    @media (min-width: 768px) {
      width: 60%;
      margin: 5vh auto;
    }
    @media (min-width: 1024px) {
      width: 30vw;
      margin: 0;
    }
    @media (min-width: 1920px) {
      width: 20vw;
    }
  }
`;

const ProdBioContainer = styled.div`
  padding: 0 5%;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

const ProdBioBox = styled.div`
  height: 100%;

  h2 {
    margin: 25px 0 15px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-weight: 600;
  }

  p {
    color: #3f3f3f;
    -webkit-line-clamp: 30;
  }

  @media (min-width: 1024px) {
    width: 500px;
    padding: 0;

    h2 {
      margin: 0 0 1.5vh;
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 12;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media (min-width: 1920px) {
    width: 40vw;
  }
`;

const ProdResume = styled.div`
  margin: 20px 0 25px;

  h3:first-child {
    font-weight: 400;
  }

  h2 {
    margin-bottom: 5px;
  }

  @media (min-width: 1024px) {
    margin: 20px 0 0;
  }
`;

export { ProductContainer, ProdBioContainer, ProdBioBox, ProdResume };
