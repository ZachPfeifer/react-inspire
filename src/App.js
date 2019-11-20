import React, { Component } from 'react'
import Axios from 'axios'

import './App.css';
import Background from './components/background/Background'



export default class App extends Component {

  //SECTION State
  state = {
    image: {}
  }

  //SECTION API IMAGE GET
  componentDidMount() {
    Axios.get('//bcw-sandbox.herokuapp.com/api/images')
      .then(res => this.setState({
        image: res.data.large_url
      }))
  }


  //SECTION APP Render
  render() {
    console.log(this.state.image)

    return (
      <div className="App">

        <Background image={this.state.image} />


      </div>

    );
  }
}