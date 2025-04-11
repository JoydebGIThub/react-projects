import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
 const [length, setLength]=useState(8)
 const [numbers, setNumbers] = useState(false)
 const [char, setChar] = useState(false)
 const [password, setPassword] = useState("")

 //useRef hook
 const passwordRef= useRef("")

 //password generator
 const passwordGenerator= useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numbers) str += "0123456789"
  if(char) str += "!@#$%^&*_-+=[]{}`"
  for (let i = 1; i <= length; i++) {
    let ch = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(ch)
  }
  setPassword(pass)
 }, [length, numbers, char, setPassword] )

 const copyPasswordToClib= useCallback(()=>{
  passwordRef.current?.select()//optional select if the value is null
  passwordRef.current?.setSelectionRange(0, 3);//show the renge
  window.navigator.clipboard.writeText(password);
  //we write code in react so we can write window, because after compilation to JS where it run
  //we will get the window
  //But in next js, there is not window because, there has server side rendering all code execute in server
  //server has no window object
 },[password])

useEffect (() => {
  passwordGenerator()
},[length, numbers, char,passwordGenerator]) 


  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={password}
            className='outline-none w-full py-2 px-3 bg-white'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer 
              active:scale-95 transition duration-150 
             hover:bg-purple-700 focus:outline-none focus:ring-2 
             focus:ring-purple-300'
            onClick={copyPasswordToClib}
            >
              copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div  className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div  className='flex items-center gap-x-1'>
            <input type="checkbox" id="numberInput" defaultChecked={numbers} 
              onChange={()=> setNumbers(prev => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div  className='flex items-center gap-x-1'>
            <input type="checkbox" id="numberInput" defaultChecked={char} 
              onChange={()=> setChar(prev => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
