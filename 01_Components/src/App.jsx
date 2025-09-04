import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar /> 
      <h1 className="text-red-600 text-3xl font-extrabold">App</h1>
      <Footer />
    </>
  );
};

export default App;
