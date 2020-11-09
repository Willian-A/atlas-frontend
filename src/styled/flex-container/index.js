import styled from "styled-components";

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "flex-start"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "fit-content"};
  padding: ${(props) => props.padding || "30px"};
  margin: ${(props) => props.margin || "0"};
  top: ${(props) => props.top || "0"};
`;

export default FlexContainer;
