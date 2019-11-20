import React, { Component } from 'react'
import Axios from 'axios'

import './App.css';
import Background from './components/background/Background'
import Quote from './components/quote/quote'


export default class App extends Component {

  //SECTION State
  state = {
    image: {},
    quote: {}
  }

  //SECTION API 
  componentDidMount() {
    // GET BACKGROUND IMAGE
    Axios.get('//bcw-sandbox.herokuapp.com/api/images')
      .then(res => this.setState({
        image: res.data.large_url
      }))

    //GET QUOTE
    Axios.get('//bcw-sandbox.herokuapp.com/api/quotes')
      .then(res => this.setState({
        quote: res.data.quote
      }))

  }


  //SECTION APP Render
  render() {
    // console.log(this.state.image)
    console.log(this.state.quote)

    return (
      <div className="App">
        <Quote quote={this.state.quote} />

        <Background image={this.state.image} />


      </div>

    );
  }
}