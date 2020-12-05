import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  top: 25%;

  a {
    color: #8c8c8c;
    font-weight: 500;
    transition: 250ms;

    &:hover {
      color: black;
    }
  }

  h3 {
    height: 3vh;
    margin: 0 auto;
    font-weight: 400;
    color: red;
  }

  h5:last-child {
    margin: 0 auto;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      font-family: WorkSans-Medium;
    }

    button {
      margin: 20px 0 10px;
    }
  }
`;

export { UserContainer };
