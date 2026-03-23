import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let counter = 15

  const addValue = () =>{
    console.log("clicked", counter );
    counter = counter+1;
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value : {counter}</h2>
    
    <button
    onClick={addValue}
    >Add value</button>
    <br></br>
    <button>Remove value</button>
    </>
  )
}

export default App
