import React, { Component } from 'react'


export default class Quote extends Component {
  render() {
    // console.log(this.props.quote)// Shows props from state on app.js

    return (
      < div className="card text-white bg-dark mb-3 card-size quotes-pos" >
        <div className="card-header">Quote of the Day</div>
        <div className="card-body">
          <h5 className="card-title">{this.props.quote.author}</h5><h5>Once Said:</h5>
          <p className="card-text">
            <i>"{this.props.quote.body}"</i>
            <br />
            #{this.props.quote.tags}
          </p>
        </div>
      </div >


    )
  }
}