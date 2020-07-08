import styled from "styled-components";

export const YellowButton = styled.button`
  width: 100%;
  height: ${(props) => props.defineHeight || "50px"};
  padding: 15px;
  font-size: ${(props) => props.fontSize || "18px"};
  border-radius: ${(props) => props.borderRadius || "5px"};
  background-color: #ffae00;
  cursor: pointer;
  transition: 500ms;
  &:hover {
    color: #ffffff;
    background-color: #1f1f1f;
  }
`;
