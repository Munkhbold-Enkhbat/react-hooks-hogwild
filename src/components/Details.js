import React from "react"

function Details({ hog }) {
  return (
    <>
      <p className="hoggyText">
        Specialty: {hog.specialty}, 
        weight: {hog.weight}, 
        greased: {hog.greased ? "Yes" : "No"}, 
        highest medal achieved: {hog["highest medal achieved"]}
      </p>
    </> 
  )
}

export default Details