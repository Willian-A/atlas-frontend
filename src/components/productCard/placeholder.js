import React from "react";
import ContentLoader from "react-content-loader";

export default function Placeholder() {
  //add props pra width e height
  return (
    <ContentLoader
      height={365.5}
      width={275}
      speed={2}
      animate={true}
      backgroundColor={"#ECEFF4"}
      foregroundColor={"#d0d3d9"}
      style={{ marginBottom: "4px", position: "absolute", zIndex: "2" }}
    >
      <rect x="0" y="0" rx="3" ry="3" width="275" height="365.5" />
    </ContentLoader>
  );
}
