import React, { useState } from "react"

function NewHogAdd(updateHogs, setUpdateHogs) {
  
  const [newName, setNewName] = useState('')
	const [newImage, setNewImage] = useState('')
	const [newSpecialty, setNewSpecialty] = useState('')
	const [newWeight, setNewWeight] = useState(0)
	const [newGreased, setNewGreased] = useState(false)
	const [newHighestMedal, setNewHighestMedal] = useState('') 

  function handleSubmit(e) {
    e.preventDefault()
    const newHog = {name: newName, image: newImage, specialty: newSpecialty, greased: newGreased, weight: newWeight, "heighest medal achieved": newHighestMedal}
    const newHogList = [...updateHogs, newHog]
    setUpdateHogs(newHogList)
  }
  
  return (
    <form className="new-hog-add-form" onSubmit={handleSubmit}>
      <label className="hoggyText"> Add a New Hog
        <div>
          <input type="text" name="name" onChange={(e) => setNewName(e.target.value)} placeholder="name..."/>
          <input type="text" name="image" onChange={(e) => setNewImage(e.target.value)} placeholder="link of image..."/>
          <input type="text" name="specialty" onChange={(e) => setNewSpecialty(e.target.value)} placeholder="specialty..."/>
          <input type="number" name="weight" onChange={(e) => setNewWeight(e.target.value)} placeholder="weight..."/>
          <input type="text" name="greased" onChange={(e) => setNewGreased(e.target.value)} placeholder="greased..."/>
          <input type="text" name="highestMedal" onChange={(e) => setNewHighestMedal(e.target.value)} placeholder="highest medal achieved..."/>
        </div>     
      </label>      
    </form>
  )
}

export default NewHogAdd