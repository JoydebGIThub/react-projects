import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

const anotherElement=(
  <a href="https://google.com" target='_blank'> visite google</a>
)
const anotheruser="Joydeb biswas";

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click me to visit google',
  anotheruser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // anotherElement
    // reactElement
    // {/* <MyApp /> */}
    // {/* MyApp() we can run the function like this*/} 
  // </StrictMode>,
  <App/>
)
