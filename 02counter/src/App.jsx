import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter =5

  let [count, setCount]= useState(16);

  const addValue = () =>{
    // console.log("value added", Math.random());
    console.log("value added", counter);
    counter=counter+1;
    // setCount(count++); // after 2 click it change the value
    if(count<20)
      setCount(count+1);
    
  }
  const removeCount=()=>{
    if (count>0) {
      setCount(count-1)
    }
    
  }
  return (
    <>
      <h1>React and hooks</h1>
      <h2>counter value: {counter}---{count}</h2>
      <button
        // onClick={addValue()} //this will executing without clicking run infinite loop
        onClick={addValue} // click on execute so pass reference
      >Add value {counter}----- {count}</button>
      <br />
      <button onClick={removeCount}>Remove value {counter}----- {count}</button>
      <p>footer {counter} ---------{count}</p>
    </>
  )
}

export default App
