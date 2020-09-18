import React from "react"
import Pig from "./Pig.js"
import GalaxySNote7 from "./GalaxySNote7.js"
import exclaim from '../assets/exclaim.mp3';


const pigs = [
  "Sobriety",
  "Trouble",
  "Cherub",
  "MasterBlaster"
]

export default class PigPen extends React.Component {
  constructor() {
    super()
    this.state = {
      environment: "docile"
    }
    this.audio = new Audio(exclaim)
  }

  //changing environment back to docile
  relax = () => {
    const newState = {environment: 'docile'}
    this.setState(newState)
  }

  //changing environment back to inhospitable
  alterEnvironment = (vibe) => {
    if (vibe === "inhospitable")
      this.audio.play()
    const newState = {environment: vibe}
    this.setState(newState)
  }

  // making pigs
  generateSheeple = () => {
    return pigs.map((name, idx) => (
      <Pig key={idx} id={name} name={name} environment={this.state.environment} relax={this.relax} />
    ))
  }

  render() {
    const sheeple = this.generateSheeple()
    return(
      <div id="pig-pen">
        {sheeple}
        <GalaxySNote7 environment={null} alterEnvironment={this.alterEnvironment} />
      </div>
    )
  }
}
