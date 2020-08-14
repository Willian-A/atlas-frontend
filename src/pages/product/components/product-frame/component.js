import styled from "styled-components";

const ProductContainer = styled.div`
  width: 100vw;
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
  box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 1024px) {
    width: 30%;
    box-shadow: none;
  }
`;

const ProdBioContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

const ProdBioBox = styled.div`
  padding: 0 5% 50px;
  height: 100%;
  h1 {
    font-size: 22px;
    margin: 25px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h4 {
    font-size: 12px;
  }

  @media (min-width: 1024px) {
    width: 500px;
    padding: 0;
    box-shadow: none;

    h1 {
      font-size: 25px;
      margin: 0 0 10px;
    }

    h4 {
      font-size: 13px;
      display: -webkit-box;
      -webkit-line-clamp: 12;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const ProdResume = styled.div`
  h3 {
    margin-bottom: 5px;
  }
`;

export { ProductContainer, ProdIMG, ProdBioContainer, ProdBioBox, ProdResume };
