import React, { Component } from 'react';

export default class MyClock extends Component {

  state = {
    date: new Date()
  }

  updateTime() {
    setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock-pos">{this.state.date.toLocaleTimeString()}</div>
        {this.updateTime()}
      </div>
    );
  }
}

