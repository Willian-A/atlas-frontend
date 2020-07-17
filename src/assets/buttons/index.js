import styled from "styled-components";

export const YellowButton = styled.button`
  width: ${(props) => props.width || "50%"};
  height: ${(props) => props.defineHeight || "40px"};
  font-size: ${(props) => props.fontSize || "18px"};
  border-radius: ${(props) => props.borderRadius || "5px"};
  background-color: #ffae00;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    color: #ffffff;
    background-color: #1f1f1f;
  }

  @media (min-width: 390px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1920px) {
  }

  @media (min-width: 2560px) {
    width: 50%;
    height: 40px;
    font-size: 20px;
  }
`;
