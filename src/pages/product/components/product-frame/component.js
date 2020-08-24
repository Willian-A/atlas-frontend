import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 80%;
    margin: 0 auto;
    padding: 25px;
    box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ProdIMG = styled.img`
  width: 100%;
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 1024px) {
    width: 30%;
    box-shadow: none;
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

  h1 {
    font-size: 1.5em;
    margin: 25px 0 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h4 {
    color: #3f3f3f;
    font-size: 0.9em;
    -webkit-line-clamp: 30;
  }

  @media (min-width: 1024px) {
    width: 500px;
    padding: 0;
    box-shadow: none;

    h1 {
      margin: 0 0 10px;
    }

    h4 {
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

  h3 {
    font-size: 1.4em;
    margin-bottom: 5px;
  }

  @media (min-width: 1024px) {
    margin: 20px 0 0;
  }
`;

export { ProductContainer, ProdIMG, ProdBioContainer, ProdBioBox, ProdResume };
