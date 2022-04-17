import React from "react"

function Details({ hog }) {
  return (
    <>
      <ul className="normalText">
        <li>Specialty: {hog.specialty}</li>
        <li>weight: {hog.weight}</li>
        <li>greased: {hog.greased ? "Yes" : "No"}</li>
        <li className="achievementText">highest medal achieved: {hog["highest medal achieved"]}</li>
      </ul>
    </> 
  )
}

export default Details