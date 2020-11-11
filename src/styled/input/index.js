import styled from "styled-components";

const Input = styled.input`
  width: 280px;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 15px;
  font-family: Rubik, sans-serif !important;
  background-color: #d6d6d6;
  transition: 500ms;

  &:focus,
  &:hover {
    color: #fff;
    background-color: #1f1f1f;

    &::placeholder {
      color: #fff;
    }
  }

  &::placeholder {
    color: #606060;
  }
`;

export default Input;
