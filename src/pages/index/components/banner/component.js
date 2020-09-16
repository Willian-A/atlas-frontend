import styled from "styled-components";

const BannerContainer = styled.div`
  background-color: #fff;
  height: 65vw;

  @media (min-width: 1024px) {
    height: 60vw;
  }
  @media (min-width: 1440px) {
    height: 40vw;
  }
  @media (min-width: 1920px) {
    height: 35vw;
  }
  @media (min-width: 2560px) {
    height: 35vw;
  }

  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
`;

const BannerSlideContainer = styled.div`
  height: inherit;
  overflow: hidden;
`;

const BannerSlideBox = styled.div`
  position: relative;
  top: ${(props) => props.top || "0"};
  height: inherit;
  display: flex;
  transition: 500ms;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BannerDescBox = styled.div`
  display: none;

  @media (min-width: 1440px) {
    display: initial;
    width: 30vw;
    padding: 20px;
  }
  @media (min-width: 1920px) {
    width: 25vw;
    padding: 30px;
  }
`;

const BannerDesc = styled.div`
  transition: 500ms;
  height: 93%;
  position: relative;

  h2 {
    text-transform: capitalize;
    color: #5a5a5a;
  }

  h4 {
    text-transform: capitalize;
    color: #9aa3af;
  }

  @media (min-width: 1440px) {
    h2 {
      margin-bottom: 5px;
    }
  }

  @media (min-width: 1920px) {
    h2 {
      margin-bottom: 10px;
    }
  }
`;

const BannerButtonsBox = styled.div`
  display: flex;

  div {
    margin: 0 auto;

    svg {
      cursor: pointer;
      transition: 500ms;

      &:hover {
        transform: scale(1.15);
        opacity: 0.3;
      }
    }
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
