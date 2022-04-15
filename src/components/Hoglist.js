import React from "react"
import Tale from "./Tale"

function Hoglist({ hogs, isGreased }) {

  let hogArr = []

  if(isGreased) {
    hogArr = hogs.filter(hog => hog.greased)
  } else {
    hogArr = [...hogs]
  }

  return (
    hogArr.map(hog => {
      return (
        <div key={hog.name}>
          <Tale hog={hog}/>
        </div>      
      )
    })
  )
}

export default Hoglist