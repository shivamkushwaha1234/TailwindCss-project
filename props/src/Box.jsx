import React from 'react'
import "./App.css"
function Box({name="Ayush Sahu",profession="Web Deve"}) {
  return (
    <div className="box">
      <h1>{name}</h1>
      <h2>{profession}</h2>
    </div>
  )
}

export default Box  
