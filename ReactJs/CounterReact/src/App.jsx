import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const addValue = () =>{
    if (count < 20) {
      setCount(count + 1)
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
