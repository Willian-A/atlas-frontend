import React, { useState } from "react";

export default function DivPlaceholder(props) {
  const [status, setStatus] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundColor: "#c9cfd8",
          width: "100%",
          height: "100%",
          position: "absolute",
          borderRadius: "1em",
          opacity: status ? 0 : 1,
          visibility: status ? "hidden" : "visible",
          transition: "500ms",
          zIndex: 2,
        }}
      />
      <img
        style={{
          opacity: status ? 1 : 0,
        }}
        src={props.img}
        alt={props.alt}
        onLoad={() =>
          setTimeout(() => {
            setStatus(true);
          }, 500)
        }
      />
    </>
  );
}
