import React from "react";
import "./scroll.styles.css";

const Scroll = ({ children }) => {
  return (
    <div className="scroll"
      style={{
        overflowY: "scroll",
        height: "70vh",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
