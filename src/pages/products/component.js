import styled from "styled-components";

const PageNameBox = styled.div`
  display: flex;
  padding-bottom: 25px;
  margin: 20px 0 0 10px;

  h5 {
    margin-left: 10px;
    transform: translateY(35%);
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const PageContainer = styled.div`
  display: flex;
`;
const FilterContainer = styled.div`
  width: 30%;
  color: #fff;
  background-color: #000;
`;
const ProductsContainer = styled.div`
  width: 100%;
`;
export { PageNameBox, PageContainer, FilterContainer, ProductsContainer };
