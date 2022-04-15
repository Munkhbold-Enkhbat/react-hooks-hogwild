import React, { useState } from "react"
import Details from "./Details"

function Tale({ hog }) {

  const [isDetailsHide, setDetailsHide] = useState(true)

  function handleClick() {
   setDetailsHide(!isDetailsHide)
  }

  const renderDetails = () => {
    if(isDetailsHide) {
      return true
    } else {
      return (
        <>
          <Details hog={hog}/><br/>
        </>      
      )
    }
  }

  return(
    <div className="pigTile" onClick={handleClick}>
      <h2 className="largeHeader">{hog.name}</h2>
      <img src={hog.image} alt="A cute hog..."/>
      {renderDetails()}
    </div>
  )
}

export default Tale