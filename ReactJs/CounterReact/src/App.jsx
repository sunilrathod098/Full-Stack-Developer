import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const addValue = () =>{
    if (count < 20) {
      setCount(count + 1);
      // setCount(count + 1);
      // setCount(count + 1);
      // setCount(count + 1);

      /*here this is a interview question

      setCount(preCounter => preCounter + 1)
      setCount(preCounter => preCounter + 1)
      setCount(preCounter => preCounter + 1)
      setCount(preCounter => preCounter + 1)
      setCount(preCounter => preCounter + 1)

      This code uses functional updates in React (preCounter => preCounter + 1)
      to ensure each state update is based on the latest value,
      preventing stale or batched state issues.
      It ensures sequential and accurate updates,
      critical for scenarios where state changes depend on the current value.
      */
    }
  }

  const removeValue = () =>{
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
    <h1>Count Number Project</h1>
    <h2>Numbers Counting Value: {count}</h2>

    <button
    onClick={addValue}>Add Value: {count}</button>

    <button
    onClick={removeValue}>Remove Value: {count}</button>
    <p>footer: {count}</p>
    </>
  )
}

export default App
