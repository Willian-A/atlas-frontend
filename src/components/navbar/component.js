import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  height: ${(props) => (props.scrolling ? "3em" : "5em")};
  background-color: #f2f4f8;
  transition: 250ms;
  z-index: 3;

  a {
    margin: 0 0.2em;
    padding: 0.2em 0.5em;
    border-radius: 0.5em;
    font-weight: 500;
    color: #2e3440;
    transition: 500ms;

    &:hover {
      background-color: #c9cfd8;
    }
  }

  div.user {
    display: none;
  }

  @media (min-width: 768px) {
    div.user {
      display: initial;
    }
  }
`;

export { NavbarContainer };
