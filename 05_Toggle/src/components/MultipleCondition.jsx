import React, { useState } from "react";

const MultipleCondition = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Value: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>

      {count === 0 ? (
        <h3>Value of count is 0</h3>
      ) : count === 1 ? (
        <h3>Value of count is 1</h3>
      ) : count === 2 ? (
        <h3>Value of count is 2</h3>
      ) : (
        <h3>Count value exceeds 3</h3>
      )}
    </> 
  );
};

export default MultipleCondition;
