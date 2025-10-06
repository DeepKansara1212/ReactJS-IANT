import React from "react";
import User from "./components/User";

const App = () => {
  const name = "Deep";
  const age = 23;

  const UserDetails = {
    email: "deep@gmail.com",
    mobile: 1234567890,
  };

  return (
    <>
      <User name={name} age={age} UserDetails={UserDetails} />
    </>
  );
};

export default App;
