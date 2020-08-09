import styled from "styled-components";

const LoginContainer = styled.div`
  width: fit-content;
  position: relative;
  top: 25%;
  display: flex;
  flex-direction: column;
  padding: 30px 35px;
  margin: auto;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.5);

  h2 {
    margin-bottom: 15px;
  }

  h4 {
    margin: 5px 0 15px;
    font-size: 14px;
    color: #a3a3a3;
    transition: 500ms;

    &:hover {
      cursor: pointer;
      color: #212121;
    }
  }
  h5 {
    color: #a3a3a3;
    transition: 500ms;

    &:last-child {
      margin: 20px auto 0;
    }
    &:hover {
      cursor: pointer;
      color: #212121;
    }
  }
`;

export { LoginContainer };
