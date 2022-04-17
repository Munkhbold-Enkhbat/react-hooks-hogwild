import React from "react"
import Tale from "./Tale"

function Hoglist({ hogs, isGreased, selectSort }) {

  let hogArr = []

  if(isGreased) {
    hogArr = hogs.filter(hog => hog.greased)
  } else {
    hogArr = [...hogs]
  }

  if(selectSort === "name") {
    hogArr = hogArr.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
  } else if(selectSort === 'weight') {
    hogArr = hogArr.sort((a, b) => a.weight > b.weight ? 1 : -1)
  } 

  return (
    hogArr.map(hog => {
      return (
        <div key={hog.name} className="ui eight wide column">
          <Tale hog={hog}/>
        </div>      
      )
    })
  )
}

export default Hoglist