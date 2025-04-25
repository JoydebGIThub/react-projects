import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showMessage, setShowMessage] = useState(false);

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      const now = new Date();
      setCurrentTime(now);
      // Check if it's 11 PM in India (IST)
      if (now.getHours() === 23 && now.getMinutes() === 0) {
        setShowMessage(true);
      } else {
        setShowMessage(false);
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  },[]);// Empty dependency array means this effect runs once after the initial render

  const formattedTime = currentTime.toLocaleTimeString();

  const hour = currentTime.getHours() % 12;
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  const hourRotation = (hour * 30) + (minute / 2); // 30 degrees per hour, plus a fraction for the minutes
  const minuteRotation = (minute * 6) + (second / 10); // 6 degrees per minute, plus a fraction for the seconds
  const secondRotation = second * 6; // 6 degrees per second
  return (
    <>
      <div className="App">
      {/* <h1>Real-Time Clock</h1>
      <div className="clock">{formattedTime}</div> */}
       <h1>Analog Clock</h1>
      <div className="clock">
        <div className="hand hour" style={{ transform: `rotate(${hourRotation}deg)` }} />
        <div className="hand minute" style={{ transform: `rotate(${minuteRotation}deg)` }} />
        <div className="hand second" style={{ transform: `rotate(${secondRotation}deg)` }} />
      </div>
      {showMessage && (
        <div className="message">It's 11:00 PM! Time for a break!</div>
      )}
    </div>
    </>
  )
}

export default App
