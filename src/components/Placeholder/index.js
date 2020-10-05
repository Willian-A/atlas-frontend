import React, { useState } from "react";

export default function DivPlaceholder(props) {
  const [status, setStatus] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundColor: "#d6d6d6",
          width: "100%",
          height: "100%",
          position: "absolute",
          opacity: status ? 0 : 1,
          visibility: status ? "hidden" : "visible",
          transition: "500ms",
          zIndex: 2,
        }}
      />
      <img src={props.img} alt={props.alt} onLoad={() => setStatus(true)} />
    </>
  );
}
