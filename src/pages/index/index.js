import React from "react";
import styled from "styled-components";

import Navbar from "../../organism/navbar";
import Banner from "../../organism/banner";
import MainCard from "../../organism/main-card";

const DivTest = styled.div`
  height: 1000px;
  @media (min-width: 390px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    padding: 0 2%;
  }

  @media (min-width: 1440px) {
    padding: 0 10%;
  }

  @media (min-width: 1920px) {
    padding: 0 12%;
  }

  @media (min-width: 2560px) {
    padding: 0 16%;
  }
`;

export default function Index() {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <DivTest>
        <Banner />
        <MainCard />
      </DivTest>
    </div>
  );
}
