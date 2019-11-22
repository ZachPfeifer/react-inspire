import React, { Component } from 'react';
import TodoItem from './TodoItem.js'
import PropTypes from 'prop-types'

class Todos extends Component {



  render() {
    console.log(this.props.todos)// Shows props from state on app.js
    return this.props.todos.map((todo) => (
      <TodoItem key={todo._id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
    ));
  }
}


//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired

}

export default Todos;
