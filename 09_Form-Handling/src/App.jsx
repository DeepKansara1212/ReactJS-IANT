import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")

  function handleChange(e) {
    setName(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    setName(e.target.value);
    alert(name);
    setPassword(e.target.value);
    alert(password);
  } 

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name: </label>
      <input type="text" value={name} onChange={handleChange} />
      <br />
      <label>Enter your Password: </label>
      <input type="password" value={password} onChange={handlePassword} />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default App;
