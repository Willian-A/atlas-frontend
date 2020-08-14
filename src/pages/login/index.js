import React from "react";

import GeralContainer from "../../atoms/page-margin";
import LoginCard from "./components/login-card";

export default function Login() {
  return (
    <div>
      <GeralContainer style={{ position: "relative", height: "92vh" }}>
        <LoginCard />
      </GeralContainer>
    </div>
  );
}
