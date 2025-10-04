import React, { useState } from 'react'

const Toggle = () => {
    const [display, setDisplay] = useState(true);
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Click Me</button>
      {display ? <h1>Hello World</h1> : null}
    </>
  )
}

export default Toggle