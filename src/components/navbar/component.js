import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  position: sticky;
  background-color: #ffffff;
  box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.2);
  z-index: 3;

  ul {
    display: flex;
    flex: 1;
    list-style-type: none;
    padding: 18px;

    &:last-child {
      justify-content: flex-end;
    }
  }

  div.icon {
    transition: 500ms;

    &:hover {
      opacity: 0.5;
    }
  }

  ul li {
    display: none;
  }

  ul li a {
    text-transform: capitalize;
    color: #000000;
    transition: 500ms;

    &:hover {
      color: #ffae00;
      text-shadow: 0 1px #000000;
    }
  }

  @media (min-width: 390px) {
    ul {
      padding: 15px;
    }
  }

  @media (min-width: 768px) {
    div.icon {
      display: none;
    }

    ul li {
      display: initial;
    }

    ul {
      padding: 35px;
    }

    ul li a {
      margin: 0 20px 0 0;
      font-size: 15px;
    }
  }

  @media (min-width: 1024px) {
    ul li a {
      font-size: 16px;
    }
  }

  @media (min-width: 1440px) {
    ul li a {
      margin: 0 20px 0 0;
      font-size: 16px;
    }
  }

  @media (min-width: 1920px) {
    ul {
      padding: 35px;
    }

    ul li a {
      margin: 0 20px 0 0;
      font-size: 20px;
    }
  }

  @media (min-width: 2560px) {
    ul {
      padding: 50px;
    }

    ul li a {
      margin: 0 20px 0 0;
      font-size: 22px;
    }
  }
`;

export { NavbarContainer };
