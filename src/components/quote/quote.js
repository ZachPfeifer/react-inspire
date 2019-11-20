import React, { Component } from 'react'


export default class Quote extends Component {
  render() {
    // console.log(this.props.quote)// Shows props from state on app.js

    return (
      <div >
        <h1>TEST Quote</h1>
        <p>{this.props.quote.body}</p>
        <p>{this.props.quote.author}</p>
        <p>{this.props.quote.tags}</p>

      </div>
    )
  }
}