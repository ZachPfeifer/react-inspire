//RCE SNIPPET

import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class TodoItem extends Component {

  Strikethrough = () => {
    return {
      textDecoration: this.props.todo.completed ?
        'line-through' : 'none',
    }
  }

  render() {
    const { _id, description } = this.props.todo //Alias out long prop
    return (
      <div className="row">
        <div
          className="col"
          style={this.Strikethrough()}>
          <p>
            <input
              className="strikethrough largerCheckbox"
              type="checkbox"
              onChange={this.props.markComplete.bind(this, _id)}
            />
            {description}
            <button
              className="btn btn-danger redx float-right mx-auto"
              onClick={this.props.deleteTodo.bind(this, _id)}> X</button>
          </p>
        </div>
      </div>
    )
  }
}


//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}
