import React from "react";

import GeralContainer from "../../styled/page-margin";
import LoginCard from "./components";

export default function Login() {
  return (
    <div>
      <GeralContainer style={{ position: "relative", height: "92vh" }}>
        <LoginCard />
      </GeralContainer>
    </div>
  );
}
