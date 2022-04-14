import React from "react"

function Tale({ hog, handleClick }) {
  return(
    <div>
      <h2>{hog.name}</h2>
      <img src={hog.image} onClick={handleClick} alt="A cute hog..."/>
    </div>
  )
}

export default Tale