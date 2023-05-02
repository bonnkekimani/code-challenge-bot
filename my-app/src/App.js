import React from "react"
import BotsPage from "./containers/BotsPage"
import "./App.css"


export default function App() {
  return (
    <div className="App">
      <h1>Bots Page</h1>
      <p>Click on the images and then enlist to move the images to the top div</p>
      <p>Click on the x button to remove the element from the list</p>
      <p>You can move the images from the top div to bottom div by following either of the 2 ways</p>
      <li>Click on the 'Go back' button</li>
      <li>Click on the image</li>
      




      
      <BotsPage />
    </div>
  )
}
