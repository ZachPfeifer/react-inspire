import React, { Component } from 'react'
import Axios from 'axios'
// import Clock from 'react-clock';
import './App.css';
// import Background from './components/background/Background'
import Quote from './components/quote/Quote'
import Weather from './components/weather/Weather'
import MyClock from './components/clock/Clock'
import Todos from './components/todos/Todos.js';
import AddTodo from './components/todos/AddTodo.js';



export default class App extends Component {

  //SECTION State
  state = {
    image: {},
    quote: {},
    weather: [],
    main: {},
    sys: {},
    details: [],
    // date: new Date(),
    todos: []

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

    //GET WEATHER
    Axios.get('//bcw-sandbox.herokuapp.com/api/weather')
      .then(res => this.setState({
        weather: res.data,
        main: res.data.main,
        // main: ((res.data.main.temp - 273.15) * 1.8 + 32).toFixed(0),
        sys: res.data.sys,
        details: res.data.weather[0]
      }))
    // setInterval(
    //   () => this.setState({ date: new Date() }),
    //   1000
    // );

    //GET TODOS
    Axios.get('https://bcw-sandbox.herokuapp.com/api/zachp/todos?_limit=10')
      .then(res => this.setState({ todos: res.data.data }))
  }
  // Delete TODOS 
  deleteTodo = (_id) => {
    Axios.delete(`https://bcw-sandbox.herokuapp.com/api/zachp/todos/${_id}`)
      .then(res => this.setState({
        todos:
          [...this.state.todos.filter(todo => todo._id !== _id)]
      })
      )
  }
  //Add TODOS 
  addTodo = (description) => {
    Axios.post('https://bcw-sandbox.herokuapp.com/api/zachp/todos/', {
      description: description,
      completed: false
    })
      .then(res => this.setState({
        todos:
          [...this.state.todos, res.data.data]
      })
      )
  }
  //Toggle Complete
  markComplete = (_id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo._id === _id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }


  //SECTION APP Render
  render() {
    // console.log(this.state.image)
    // console.log(this.state.quote)
    // console.log(this.state.weather)


    return (
      <div className="App container-fluid"
        style={{ backgroundImage: `url(${this.state.image})` }}
      >
        {/* <Background image={this.state.image} /> */}

        <Weather
          weather={this.state.weather}
          main={this.state.main}
          sys={this.state.sys}
          details={this.state.details} />

        <Quote quote={this.state.quote} />
        <MyClock />
        {/* <Clock
            value={this.state.date}
          /> */}

        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />

        <AddTodo addTodo={this.addTodo} />


      </div>

    );
  }
}


