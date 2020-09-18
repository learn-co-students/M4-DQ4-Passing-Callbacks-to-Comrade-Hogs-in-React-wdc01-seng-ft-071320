import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {


  panic = () => (<img className="exclamation" src={exclamation} alt="" />)

  checkForPanic = () => {
  if (this.props.environment === "inhospitable"){
    setInterval(this.props.relax, 2000)
    return this.panic()
  }
  
}

  render() {
    return(
      <div id={this.props.name} className="sheeple">
        {this.checkForPanic()}
      </div>
    )
  }
}
