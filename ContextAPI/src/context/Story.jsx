import React, { createContext } from 'react'

export let HindiKahani=createContext()
function Story({children}) {
  let kahani={
    name:"Margarmach ka dukh",
    storyline:"ek magarmach hai uski zindagi me bhot dukh hai"
  }
  return (
    <div>
      <HindiKahani.Provider value={kahani}>
        {children}
      </HindiKahani.Provider>
    </div>
  )
}

export default Story
