import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => props.width || "50%"};
  height: ${(props) => props.defineHeight || "40px"};
  font-size: ${(props) => props.fontSize || "18px"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  background-color: #ffae00;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    color: #ffffff;
    background-color: #1f1f1f;
  }

  @media (min-width: 2560px) {
    font-size: 18px;
  }
`;

export default Button;
