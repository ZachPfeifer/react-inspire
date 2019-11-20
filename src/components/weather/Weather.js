import React, { Component } from 'react'


export default class Weather extends Component {
  render() {
    console.log(this.props) //hows props from state on app.js
    //        description: data.weather[0].description,

    return (
      <div className="card text-center w-25 p-2 text-white bg-dark mb-3">
        <div className="card-header">
          <h4><b>Today's Weather</b></h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {this.props.weather.name}, {this.props.sys.country}
            <br />
            | {((this.props.main.temp - 273.15) * 1.8 + 32).toFixed(0)}°F
          </h5>
          <p className="card-text">
            {this.props.weather.visibility}
            <br />
            Sunrise: {this.props.sys.sunrise}
            <br />
            Sunset: {this.props.sys.sunset}
          </p>
          <button className="btn btn-secondary">Refresh</button>
        </div>
        <div className="card-footer text-muted">
          Today
  </div>
      </div>








      // <div >
      //   <h1>TEST Weather</h1>
      //   <p>{this.props.weather.base} <br />
      //     <a>{this.props.weather.name}, {this.props.sys.country}</a>
      //   </p>

      //   <p>{((this.props.main.temp - 273.15) * 1.8 + 32).toFixed(0)}°F</p>
      //   {/* ((res.data.main.temp - 273.15) * 1.8 + 32).toFixed(0) */}
      //   {/* <p>{this.props.weather.visibility}</p> */}
      // </div>
    )
  }
}