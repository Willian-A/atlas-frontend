import styled from "styled-components";

const BannerContainer = styled.div`
  height: 60vw;

  @media (min-width: 1440px) {
    height: 70vh;
  }
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

  @media (min-width: 1440px) {
    img {
      width: 70%;
    }
  }
  @media (min-width: 2560px) {
    img {
      width: 80%;
    }
  }
`;

const BannerDescBox = styled.div`
  display: none;
  position: relative;

  @media (min-width: 1440px) {
    display: initial;
    width: 30vw;
    padding: 0 1em;
  }
  @media (min-width: 1920px) {
    width: 25vw;
  }
  @media (min-width: 2560px) {
    width: 15vw;
  }
`;

const BannerDesc = styled.div`
  transition: 500ms;
  position: relative;

  h1 {
    width: 20vw;
    margin-bottom: 0.25em;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
    color: #2e3440;
  }

  p {
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 20;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-transform: capitalize;
    color: #545454;
    line-height: 1.3;
  }
`;

const BannerButtonsBox = styled.div`
  display: flex;
  position: absolute;
  height: fit-content;
  top: unset;
  padding: inherit;

  svg {
    margin: 0 0 0 auto;
    cursor: pointer;
    transition: 500ms;

    &:hover {
      transform: scale(1.15);
      opacity: 0.3;
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
