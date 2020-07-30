import styled from "styled-components";

const CardBox = styled.div`
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);
  width: 275px;
  margin: 0 auto;

  img {
    width: 100%;
    transition: 300ms filter linear;

    &:hover {
      filter: brightness(50%);
    }
  }
`;

const CardBio = styled.div`
  padding: 10px 20px;

  h4 {
    font-size: 15px;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

export { CardBox, CardBio };
