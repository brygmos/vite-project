import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

import React from 'react'
import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";

function App() {
  const [value, setValue]  = useState('oh hi lol');

  return (
    <div className="App">
        <Counter/>
        {/*<ClassCounter/>*/}
        <h2 style={{color: "darkgoldenrod"}}>{value}</h2>
        <input
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}/>
    </div>
  )
}

export default App
