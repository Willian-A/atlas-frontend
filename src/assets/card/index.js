import styled from "styled-components";

const Boxes = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, auto);
  grid-template-columns: repeat(auto-fill, 190px);
  gap: 8.5px;
  padding: 5px;
  box-shadow: 0px 0 25px 15px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

const Title = styled.h1``;
const Products = styled.div``;
const Card = styled.div`
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.2);
`;

const CardIMG = styled.img`
  max-width: 100%;
  transition: 300ms filter linear;

  &:hover {
    filter: brightness(50%);
  }
`;

const CardBio = styled.div`
  padding: 10px;
  background-color: #ffffff;

  h2 {
    font-size: 15px;
    letter-spacing: -1px;
    color: #000000;
    text-transform: capitalize;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    padding-bottom: 20px;
    font-size: 18px;
    letter-spacing: 1px;
    color: #000000;
    text-transform: capitalize;
  }
`;

export { Boxes, Title, Products, Card, CardIMG, CardBio };
