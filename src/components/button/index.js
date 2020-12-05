import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => props.width || "50%"};
  height: ${(props) => props.defineHeight || "40px"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  font-size: ${(props) => props.fontSize || "18px"};
  font-family: Rubik;
  font-weight: 500;
  background-color: #1f1f1f;
  color: #eceff4;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    color: #1f1f1f;
    background-color: #ffae00;
  }

  @media (min-width: 2560px) {
    font-size: 18px;
  }
`;

export default Button;
