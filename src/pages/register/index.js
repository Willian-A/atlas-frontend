import React from "react";

import GeralContainer from "../../styled/page-margin";
import RegisterCard from "./components/register-card";

export default function Register() {
  return (
    <div>
      <GeralContainer style={{ position: "relative", height: "92vh" }}>
        <RegisterCard />
      </GeralContainer>
    </div>
  );
}
