import { createContext, useState } from "react";
import "./App.css";
import Child1 from "./components/Child1";

function App() {
  const [count, setCount] = useState(7);

  const UserContext = createContext();

  return (
    <>
      <UserContext.Provider value={count}>
        <Child1 />
      </UserContext.Provider>
    </>
  );
}

export default App;
