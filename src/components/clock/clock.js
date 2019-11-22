import React, { Component } from 'react';

export default class MyClock extends Component {

  state = {
    date: new Date()
  }

  callMe() {
    setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        {this.callMe()}
      </div>
    );
  }
}

