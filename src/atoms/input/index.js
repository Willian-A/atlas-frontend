import styled from "styled-components";

const Input = styled.input`
  width: 280px;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #d6d6d6;
  transition: 500ms;

  &:focus,
  &:hover {
    color: #fff;
    transform: scale(1.02);
    background-color: #212121;

    &::placeholder {
      color: #fff;
    }
  }

  &::placeholder {
    color: #606060;
  }
`;

export default Input;
