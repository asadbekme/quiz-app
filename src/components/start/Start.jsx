import { useRef } from 'react'
import './start.css'

const Start = ({ setUsername }) => {
  const inputRef = useRef()

  const handleClick = () => {
    (inputRef.current.value && setUsername(inputRef.current.value))
  }

  return (
    <div className="start">
      <input 
        type="text" 
        placeholder="Enter your name" 
        className="startInput"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>Start</button>
    </div>
  )
}

export default Start