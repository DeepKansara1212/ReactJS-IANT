import React from "react";

const App = () => {
  const a = 30;
  const b = 10;

  const isErr = false;

  const user = { name: "Deep", role: "Developer" };
  const skills = ["React", "JS", "Tailwind"];

  const alertMsg = (name) => alert(`Hello, ${name}`);

  return (
    <>
      <h1>Value of a: {a + b}</h1>
      <div>{isErr ? <p>There is an Error</p> : <p>Code is working...</p>}</div>

      <h1>{user.name}</h1>
      <h1>{skills[1]}</h1>

      <button onClick={() => alertMsg("Deep")}>Click Me</button>
    </>
  );
};

export default App;
