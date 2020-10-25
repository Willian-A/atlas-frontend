import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: fit-content;
  padding: 30px;
  margin: 0 auto;
  top: 25%;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);

  a {
    color: #b2b2b2;
    transition: 500ms;

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
    color: red;
  }

  h4:last-child {
    margin: 0 auto;

    a {
      color: #939393;
      transition: 500ms;

      &:hover {
        color: black;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      font-family: WorkSans-Medium;
    }
  }
`;

export { LoginContainer };
