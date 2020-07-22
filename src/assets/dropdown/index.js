import styled from "styled-components";

const Dropdown = styled.div`
  padding-bottom: 5px;
`;

const DropdownName = styled.h2`
  display: ${(props) => props.display || "none"};
  position: relative;
  margin: 0 20px 5px;
  padding: 10px;
  font-size: 20px;
  color: white;
  cursor: pointer;
  border-bottom: 2px white solid;
  transition: 600ms;

  &:hover {
    color: #ffae00;
    margin-left: 10px;
  }

  @media (min-width: 1024px) {
    display: block;
    margin: 10px 15px 0 15px;
    padding: 0;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1920px) {
  }

  @media (min-width: 2560px) {
  }
`;

const DropdownCategoryBox = styled.div`
  padding: 0 0 15px 30px;
  transition: 400ms;

  a {
    display: ${(props) => props.display || "none"};
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

  @media (min-width: 1440px) {
  }

  @media (min-width: 1920px) {
  }

  @media (min-width: 2560px) {
  }
`;

export { Dropdown, DropdownName, DropdownCategoryBox };
