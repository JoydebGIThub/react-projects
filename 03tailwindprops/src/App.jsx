import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj={
    username: "Joydeb",
    age: 25
  }

  let newArray = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="Joydeb" price="20"/>
      <Card/>
    </>
  )
}

export default App
