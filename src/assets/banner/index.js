import styled from "styled-components";

const Banner = styled.div`
  box-shadow: 0px 20px 19px 0px rgba(0, 0, 0, 0.2);

  @media (min-width: 390px) {
    height: 200px;
  }

  @media (min-width: 768px) {
    height: 450px;
  }

  @media (min-width: 1024px) {
    height: 550px;
  }

  @media (min-width: 1440px) {
    padding: 30px;
  }

  @media (min-width: 1920px) {
    height: 680px;
    padding: 55px;
  }

  @media (min-width: 2560px) {
    height: 900px;
    padding: 50px 100px;
  }
`;

const BannerBox = styled.div`
  display: flex;
  height: inherit;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
`;
const BannerImageBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

const BannerImage = styled.img`
  position: relative;
  top: ${(props) => props.top || "0"};
  width: 100%;
  min-height: 100%;
  transition: 500ms;
`;

const BannerInfo = styled.div`
  visibility: hidden;
  position: relative;
  overflow: hidden;
  width: 0;

  @media (min-width: 1440px) {
    visibility: visible;
    width: 450px;
    height: 520px;
    padding: 30px 30px 0;
  }

  @media (min-width: 1920px) {
    width: 600px;
    height: 650px;
    padding: 30px 60px 0 60px;
  }

  @media (min-width: 2560px) {
    width: 650px;
    height: 850px;
    padding: 50px 60px 0 60px;
  }
`;

const BannerTextBox = styled.div`
  position: relative;
  transition: 500ms;
  top: ${(props) => props.top || "0"};

  h2 {
    text-transform: capitalize;
    color: #5a5a5a;
  }

  h3 {
    text-transform: capitalize;
    color: #9aa3af;
  }

  @media (min-width: 1440px) {
    width: 300px;
    height: 550px;
    h2 {
      padding-bottom: 10px;
      font-size: 20px;
    }
    h3 {
      padding-bottom: 35px;
      font-size: 12px;
    }
  }

  @media (min-width: 1920px) {
    width: 400px;
    height: 680px;
    padding: 0;

    h2 {
      padding-bottom: 40px;
      font-size: 25px;
    }
    h3 {
      font-size: 16px;
    }
  }

  @media (min-width: 2560px) {
    width: 400px;
    height: 680px;
    padding: 0;
    h2 {
      padding-bottom: 40px;
      font-size: 25px;
    }
    h3 {
      font-size: 16px;
    }
  }
`;

const BannerButtonsBox = styled.div`
  top: 82%;
  display: flex;
  flex-direction: row;
  position: absolute;
`;

const BannerButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12vh;
  height: 100px;

  img {
    cursor: pointer;
    width: 50px;
    transition: 300ms;
  }
  img:hover {
    opacity: 0.3;
  }
`;

export {
  Banner,
  BannerBox,
  BannerImageBox,
  BannerImage,
  BannerInfo,
  BannerTextBox,
  BannerButtonsBox,
  BannerButtons,
};
