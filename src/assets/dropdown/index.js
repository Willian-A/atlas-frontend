import styled from "styled-components";

const Dropdown = styled.div`
  padding-bottom: 5px;
`;

const DropdownName = styled.h2`
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-bottom: 2px white solid;
  transition: 600ms;

  &:hover {
    color: #ffae00;
  }
`;

const DropdownCategoryBox = styled.div`
  padding: 0 0 15px 30px;
  opacity: ${(props) => props.opacity};
  visibility: ${(props) => props.visibility};
  height: ${(props) => props.height};
  display: flex;
  max-height: fit-content;
  flex-direction: column;
  transition: 400ms;

  a {
    font-size: 15px;
    color: #888888;
    transition: 500ms;
  }
  a:first-child {
    padding-top: 10px;
  }
  a:hover {
    color: #ffffff;
  }
`;

export { Dropdown, DropdownName, DropdownCategoryBox };
