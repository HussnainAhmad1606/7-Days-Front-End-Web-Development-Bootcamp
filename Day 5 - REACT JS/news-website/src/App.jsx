import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import News from "./components/News"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <h1 >Hello, Welcome to the Website</h1>
      <p>Read latest news</p>
      <News title={"This is news 1"} description={"Desc 1"} cover={"https://plus.unsplash.com/premium_photo-1710361778521-255f338ad5d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>


      <News title={"This is news 2"} description={"Desc 2"} cover={"https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>


      <News title={"This is news 3"} description={"Desc 3"} cover={"https://images.unsplash.com/photo-1711426793038-667ebb1be968?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      
    </div>
  )
}

export default App
