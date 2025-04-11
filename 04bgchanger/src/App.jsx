import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons';

function App() {
  const [color, setColor] = useState("olive");
  const handleChange = (c) =>{
    setColor(c);
  }
  return (
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <Buttons buttonText="Red" color="red" handleChange={handleChange}/>
            <Buttons buttonText="Green" color="green" handleChange={handleChange}/>
            <Buttons buttonText="Blue" color="blue" handleChange={handleChange}/>
            <Buttons buttonText="Black" color="black" handleChange={handleChange}/>
          </div>
        </div>
      </div>
  )
}

export default App
