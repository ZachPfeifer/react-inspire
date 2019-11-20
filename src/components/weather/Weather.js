import React, { Component } from 'react'


export default class Weather extends Component {
  render() {
    console.log(this.props.main) //hows props from state on app.js
    //        description: data.weather[0].description,

    return (
      <div >
        <h1>TEST Weather</h1>
        <p>{this.props.weather.base} <br />
          <a>{this.props.weather.name}, {this.props.sys.country}</a>
        </p>

        <p>{((this.props.main.temp - 273.15) * 1.8 + 32).toFixed(0)}°F</p>
        {/* ((res.data.main.temp - 273.15) * 1.8 + 32).toFixed(0) */}
        {/* <p>{this.props.weather.visibility}</p> */}

      </div>
    )
  }
}