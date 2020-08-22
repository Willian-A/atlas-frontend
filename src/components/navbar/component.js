import styled from "styled-components";

const NavbarContainer = styled.div`
  position: sticky;
  background-color: #ffffff;
  box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.2);
  z-index: 3;

  div.pages {
    position: fixed;
    max-width: 55vw;
    overflow-x: hidden;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 0, 0, 0.8) 100%
    );
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: 350ms;
    z-index: 2;

    ul {
      padding: 8vh 5vh 0;
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
      max-width: 100%;
      transform: translateX(0);
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
