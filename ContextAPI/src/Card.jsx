import React, { useContext } from 'react'
import { HindiKahani } from './context/Story'

function Card() {
   let s= useContext(HindiKahani)
   console.log(s)
  return (
    <div>
    <h1>name: {s.name}</h1>
      <h1>storyline :{s.storyline}</h1>
    </div>
  )
}

export default Card
