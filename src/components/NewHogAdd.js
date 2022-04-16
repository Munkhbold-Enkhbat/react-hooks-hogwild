import React from "react"

function NewHogAdd(updateHogs, setUpdateHogs, newName, setNewName, newImage, setNewImage, newSpecialty, setNewSpecialty, 
                  newWeight, setNewWeight, newGreased, setNewGreased, newHighestMedal, setNewHighestMedal) {
  
  function handleName(e) {
    setNewName(e.target.value)
  }

  function handleImage(e) {
    setNewImage(e.target.value)
  }

  function handleSpecialty(e) {
    setNewSpecialty(e.target.value)
  }

  function handleWeight(e) {
    setNewWeight(e.target.value)
  }

  function handleGreased(e) {
    setNewGreased(e.target.value)
  }

  function handleHighestMedal(e) {
    setNewHighestMedal(e.target.value)
  }

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
          <input type="text" name="name" onChange={handleName} placeholder="name..."/>
          <input type="text" name="image" onChange={handleImage} placeholder="link of image..."/>
          <input type="text" name="specialty" onChange={handleSpecialty} placeholder="specialty..."/>
          <input type="text" name="weight" onChange={handleWeight} placeholder="weight..."/>
          <input type="text" name="greased" onChange={handleGreased} placeholder="greased..."/>
          <input type="text" name="highestMedal" onChange={handleHighestMedal} placeholder="highest medal achieved..."/>
        </div>     
      </label>      
    </form>
  )
}

export default NewHogAdd