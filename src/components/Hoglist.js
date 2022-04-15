import React from "react"
import Tale from "./Tale"

function Hoglist({ hogs }) {
  return (
    hogs.map(hog => {
      return (
        <div key={hog.name}>
          <Tale hog={hog}/>
        </div>      
      )
    })
  )
}

export default Hoglist