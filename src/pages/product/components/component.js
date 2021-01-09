import styled from "styled-components";

const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
    height: 425px;
    padding: 30px;
  }

  @media (min-width: 2560px) {
    width: 50vw;
    height: 480px;
  }

  img {
    width: 100%;
    margin: 0 0 15px;

    @media (min-width: 768px) {
      width: 65%;
      margin: 2.5vh auto;
    }
    @media (min-width: 1024px) {
      width: 325px;
      margin: 0;
    }
    @media (min-width: 2560px) {
      width: 350px;
    }
  }
`;

const ProdBioContainer = styled.div`
  width: 20%;
  padding: 0 5%;

  @media (min-width: 1024px) {
    width: 950px;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 0 0 20px;
    padding: 0;
  }
`;

const ProdBioBox = styled.div`
  height: 100%;

  h2 {
    margin: 0 0 10px;
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
    h2 {
      margin: 0 0 10px;
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 12;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const ProdResume = styled.div`
  margin: 20px 0 25px;

  h3:first-child {
    font-weight: 400;
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: unset;
    bottom: 0;
    margin: 0;
  }
`;

export { ProductContainer, ProdBioContainer, ProdBioBox, ProdResume };
