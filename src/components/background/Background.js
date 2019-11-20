import React, { Component } from 'react'




export default class Background extends Component {

  render() {
    // console.log(this.props.image)// Shows props from state on app.js

    return (
      <div id="bg-image"  >
        <img src={this.props.image} alt={"Background-Image"} className="img-responsive" />
      </div>
    )
  }
}

