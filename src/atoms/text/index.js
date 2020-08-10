import styled from "styled-components";

const H2Title = styled.h2`
  margin-bottom: 15px;
`;

const H4Link = styled.h4`
  margin: 5px 0 15px;

  a {
    font-size: 14px;
    color: #a3a3a3;
    transition: 500ms;

    &:hover {
      color: #212121;
    }
  }
`;

const Text = styled.h2`
  height: ${(props) => props.height || "fit-content"};
  margin: ${(props) => props.margin || "0"};
  font-size: ${(props) => props.font || "15px"};
  color: ${(props) => props.color || "#a3a3a3"};
  transition: 500ms;

  a {
    color: #a3a3a3;
    transition: 500ms;
  }

  &:hover {
    a {
      color: black;
    }
  }
`;

export { H2Title, H4Link, Text };
