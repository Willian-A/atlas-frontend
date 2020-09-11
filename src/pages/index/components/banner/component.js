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
  position: relative;
  top: ${(props) => props.top || "0"};
  height: inherit;
  display: flex;
  flex-direction: row;
  transition: 500ms;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @media (min-width: 1440px) {
    img {
      width: 72%;
    }
  }
  @media (min-width: 2560px) {
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
    display: initial;
    padding: 20px;
  }
  @media (min-width: 1920px) {
    padding: 30px;
  }
`;

const BannerDesc = styled.div`
  transition: 500ms;
  height: 90%;
  position: relative;

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
    }
  }

  @media (min-width: 1920px) {
    h2 {
      margin-bottom: 25px;
    }
  }
`;

const BannerButtonsBox = styled.div`
  display: flex;

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
