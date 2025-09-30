import React from 'react'
import { useState } from 'react'

const App = () => {

  const [fruit, setFruit] = useState("Apple")

  return (
    <>
      <h1>State in React JS</h1>
      <h2>{fruit}</h2>
      <button onClick={() => setFruit("Kiwi")}>Change Fruit Name</button>
    </>
  )
}

export default App 