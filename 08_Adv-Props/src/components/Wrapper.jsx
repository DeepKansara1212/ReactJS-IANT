import React from "react";

const Wrapper = ({ children, color="red" }) => {
  return (
    <>
      <div
        style={{
          color: color,
          border: "2px solid whitesmoke",
          width: "400px",
          margin: "30px 10px",
          textAlign: "center",
        }}
      > 
        {children}
      </div>
    </>
  );
};

export default Wrapper;
