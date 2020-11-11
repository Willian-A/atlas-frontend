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

  h2 {
    margin: 0 0 10px;
  }

  h3 {
    height: 3vh;
    margin: 0 auto 5px;
    font-weight: 400;
    color: red;
  }

  h4:last-child {
    margin: 0 auto;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      font-family: WorkSans-Medium;
    }
  }
`;

export { UserContainer };
