import styled from "styled-components";

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "fit-content"};
  padding: ${(props) => props.padding || "30px"};
  margin: ${(props) => props.margin || "0"};
  top: ${(props) => props.top || "0"};
  box-shadow: ${(props) =>
    props.shadow || "0px 0px 15px 3px rgba(0, 0, 0, 0.2)"};
`;

export default FlexContainer;
