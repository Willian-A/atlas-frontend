import styled from "styled-components";

const NavbarContainer = styled.div`
  position: sticky;
  background-color: #ffffff;
  box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.2);
  z-index: 3;

  div.icon {
    display: flex;
    width: fit-content;
    padding: 1.2em;
    transition: 500ms;

    &:hover {
      opacity: 0.5;
    }
  }

  div.pages {
    position: fixed;
    max-width: 55vw;
    overflow-x: hidden;
    background-color: rgba(0, 0, 0, 1);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: 350ms;

    ul {
      padding: 8vw 8vw 0;
      list-style-type: none;

      li a {
        text-transform: capitalize;
        color: #fff;
        transition: 500ms;

        &:hover {
          color: #ffae00;
          text-shadow: 0 1px #000000;
        }
      }
    }
  }

  @media (min-width: 768px) {
    div.icon {
      display: none;
    }

    div.pages {
      display: flex;
      position: relative;
      max-width: 100%;
      transform: unset;
      background: unset;

      ul {
        display: flex;
        padding: 3vh;

        li {
          display: initial;
          margin: 0 20px 0 0;

          a {
            color: #000;
          }
        }

        &:last-child {
          flex: 1;
          justify-content: flex-end;
        }
      }
    }
  }

  @media (min-width: 2560px) {
    div.pages {
      ul {
        padding: 4vh;
      }
    }
  }
`;

export { NavbarContainer };
