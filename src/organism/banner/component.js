import styled from "styled-components";

const BannerContainer = styled.div`
  background-color: #fff;
  height: 250px;

  @media (min-width: 390px) {
    height: 295px;
  }
  @media (min-width: 768px) {
    height: 480px;
  }

  @media (min-width: 1024px) {
    height: 550px;
  }

  @media (min-width: 1440px) {
    height: 550px;
  }

  @media (min-width: 1920px) {
    height: 630px;
  }

  @media (min-width: 2560px) {
    height: 900px;
  }
`;

const BannerSlideContainer = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
`;

const BannerSlideBox = styled.div`
  display: flex;
  position: relative;
  top: ${(props) => props.top || "0"};
  flex-direction: row;
  transition: 500ms;
  height: inherit;

  img {
    min-height: 1px;
    display: block;
    height: 100%;
    left: 0px;
    object-fit: cover;
    top: 0px;
    width: 100%;
  }

  @media (min-width: 1440px) {
    img {
      width: 72%;
    }
  }
  @media (min-width: 2560px) {
    img {
      width: 100%;
    }
  }
`;

const BannerDescBox = styled.div`
  display: none;

  svg {
    margin: 0 auto;
    cursor: pointer;
    transition: 500ms;

    &:hover {
      opacity: 0.3;
    }
  }

  @media (min-width: 1440px) {
    display: block;

    padding: 20px 20px;
  }

  @media (min-width: 1920px) {
    padding: 30px;
  }

  @media (min-width: 2560px) {
    width: 30%;
    padding: 30px 30px;
  }
`;

const BannerDesc = styled.div`
  transition: 500ms;
  height: 90%;

  h2 {
    text-transform: capitalize;
    color: #5a5a5a;
  }

  h3 {
    text-transform: capitalize;
    color: #9aa3af;
  }

  @media (min-width: 1440px) {
    h2 {
      margin-bottom: 15px;
      font-size: 20px;
    }

    h3 {
      font-size: 12px;
    }
  }

  @media (min-width: 1440px) {
    h2 {
      margin-bottom: 15px;
      font-size: 20px;
    }

    h3 {
      font-size: 12px;
    }
  }

  @media (min-width: 1920px) {
    h2 {
      margin-bottom: 25px;
      font-size: 25px;
    }
    h3 {
      font-size: 0.88em;
    }
  }

  @media (min-width: 2560px) {
    h2 {
      font-size: 28px;
    }

    h3 {
      font-size: 18px;
    }
  }
`;

const BannerButtonsBox = styled.div`
  top: 100%;
  display: flex;
  flex-direction: row;

  div {
    margin: 0 auto;
  }
`;

export {
  BannerContainer,
  BannerSlideContainer,
  BannerSlideBox,
  BannerDescBox,
  BannerDesc,
  BannerButtonsBox,
};
