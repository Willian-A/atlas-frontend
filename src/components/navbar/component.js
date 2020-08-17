import styled from "styled-components";

const NavbarContainer = styled.div`
  position: sticky;
  background-color: #ffffff;
  box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.2);
  z-index: 3;

  div.pages {
    position: fixed;
    width: ${(props) => props.width || "0"}%;
    max-width: 60%;
    overflow-x: hidden;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 35%,
      rgba(0, 0, 0, 0.8) 80%,
      rgba(0, 0, 0, 0.6) 100%
    );
    box-shadow: 30px 50px 100px rgba(0, 0, 0, 0.3);
    transition: 500ms;
    z-index: 2;

    ul {
      padding: 20% 10%;
      list-style-type: none;
    }

    ul li a {
      font-size: 1.2em;
      text-transform: capitalize;
      color: #fff;
      transition: 500ms;

      &:hover {
        color: #ffae00;
        text-shadow: 0 1px #000000;
      }
    }
  }

  div.icon {
    display: flex;
    width: fit-content;
    padding: 1.2em;
    transition: 500ms;

    &:hover {
      opacity: 0.5;
    }
  }

  @media (min-width: 768px) {
    div.pages {
      display: flex;
      position: relative;
      width: 100%;
      max-width: 100%;
      overflow-x: unset;
      background: unset;
      box-shadow: unset;

      ul {
        padding: 2em;
      }

      ul li a {
        color: #000;
      }
    }

    div.icon {
      display: none;
    }

    ul li {
      display: initial;
    }

    ul {
      padding: 2em;

      &:last-child {
        display: flex;
        flex: 1;
        justify-content: flex-end;
      }
    }

    ul li a {
      margin: 0 20px 0 0;
      font-size: 1.2em;
    }
  }

  @media (min-width: 2560px) {
    div.pages {
      ul {
        padding: 3em;

        li a {
          font-size: 1.5em;
        }
      }
    }
  }
`;

export { NavbarContainer };
