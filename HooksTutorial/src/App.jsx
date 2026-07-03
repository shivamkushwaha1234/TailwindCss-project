import { useState,useEffect,useRef } from 'react'
import './App.css'

function App() {
  let inputValue=useRef("");
  console.log(inputValue);
  return (
    <>
    <input type="text" ref={inputValue} value="virtual code" />  
    </>
  )
}

export default App
