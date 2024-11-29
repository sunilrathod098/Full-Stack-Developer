// import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  // const [count, setCount] = useState(0)

  // let myObj = {
  //   username: 'Rathod',
  //   age: 22,
  // }

  return (
    <>
    <h1 className='bg-orange-500 text-black p-4 rounded-xl mb-4' >Tailwind Project</h1>
    <Card username="Rathod" />
    <br />
    <Card username="Pawar" btnText='Click me'/>
    </>
  )
}

export default App
