import styled from "styled-components";

const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    img {
      width: 65%;
      margin: 2.5vh auto;
    }
  }

  @media (min-width: 1024px) {
    width: 85%;
    min-height: 645px;
    flex-direction: row;
    margin: 0 auto;
    padding: 30px;

    img {
      margin: 0;
    }
  }

  @media (min-width: 2560px) {
    width: 60%;
  }
`;

const ProdBioContainer = styled.div`
  width: 90%;
  margin: 5vw auto;

  @media (min-width: 1024px) {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 0 0 20px;
  }
`;

const ProdBioBox = styled.div`
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
    color: #545454;
    line-height: 1.3;
    -webkit-line-clamp: 30;
  }

  @media (min-width: 1024px) {
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
  margin: 20px 0 0;

  h3:first-child {
    font-weight: 400;
  }
  h2 {
    margin: 0 0 5px;
    font-weight: 400;
  }
  @media (min-width: 1024px) {
    position: absolute;
    top: unset;
    margin: 0;
  }
`;

export { ProductContainer, ProdBioContainer, ProdBioBox, ProdResume };
