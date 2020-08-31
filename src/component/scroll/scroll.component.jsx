import React from "react";
import "./scroll.styles.css";

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
