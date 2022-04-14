import React from "react"
import Tale from "./Tale"

function Hoglist({ hogs }) {

  function handleClick(animal) {
    return (
      <>
        <p>
          Specialty: {animal.specialtiy}, 
          weight: {animal.weight}, 
          greased: {animal.greased ? "Yes" : "No"}, 
          highest medal achieved: {animal["highest medal achieved"]}
        </p>
      </> 
    )
  }

  return (
    hogs.map(hog => {
      return <Tale key={hog.name} hog={hog} handleClick={handleClick}/>
    })
  )
}

export default Hoglist