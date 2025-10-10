import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";

const App = () => {
  return (
    <>
      <div>
        <Wrapper color="orange">
          <h1>Deep Kansara</h1>
        </Wrapper>
        <Wrapper>
          <h1>Deep Kansara</h1>
        </Wrapper>
        <Wrapper>
          <h1>Deep Kansara</h1>
          <p style={{ color: "green", fontSize: "1.1rem", fontWeight: "bold" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            voluptas!
          </p>
        </Wrapper>
        <Wrapper>
          <h1>Deep Kansara</h1>
        </Wrapper>
      </div>
    </>
  );
};

export default App;
