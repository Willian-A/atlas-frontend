import styled from "styled-components";

const CardBox = styled.div`
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);
  width: 270px;
  margin: 0 auto 20px auto;

  img {
    width: 100%;
    height: 360px;
    transition: 300ms filter linear;

    &:hover {
      filter: brightness(50%);
    }
  }

  @media (min-width: 390px) {
    width: 280px;
    margin: 0 auto 20px auto;

    img {
      height: 360px;
    }
  }

  @media (min-width: 768px) {
    width: 180px;
    margin: 0;

    img {
      height: 250px;
    }
    &:last-child {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    width: 190px;
    img {
      height: 260px;
    }
    &:last-child {
      display: initial;
    }
  }

  @media (min-width: 1440px) {
    width: 250px;
    img {
      height: 340px;
    }
  }

  @media (min-width: 1920px) {
    width: 275px;
    img {
      height: 360px;
    }
  }

  @media (min-width: 2560px) {
    width: 275px;
    img {
      height: 360px;
    }
  }
`;

const CardBio = styled.div`
  padding: 10px 20px;

  h4 {
    font-size: 15px;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  @media (min-width: 390px) {
  }

  @media (min-width: 768px) {
    padding: 10px;
    h4 {
      font-size: 12px;
      margin-bottom: 5px;
    }

    h3 {
      font-size: 15px;
      margin-bottom: 15px;
    }
  }

  @media (min-width: 1024px) {
    padding: 10px;
    h4 {
      font-size: 14px;
      margin-bottom: 5px;
    }

    h3 {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1920px) {
  }

  @media (min-width: 2560px) {
  }
`;

export { CardBox, CardBio };
