import React, { useContext } from "react";

const Child3 = () => {
  const count = useContext(UserContext);
  return (
    <>
      <h1>This is child3: {count}</h1>
    </>
  );
};

export default Child3;
