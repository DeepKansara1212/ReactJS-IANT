import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar /> 
      <h1 className="text-red-600 text-3xl font-extrabold">App</h1>
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <Welcome />
      <Footer />
    </>
  );
};

// React Function / Component
const Welcome = () => {
  return (
    <>
      <h1>Welcome to ReactJs</h1>
    </>
  )
}

// Normal JS Function
const add = () => {
  return 10 + 20;
}
add()

export default App;