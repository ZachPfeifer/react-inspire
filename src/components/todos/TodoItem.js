//RCE SNIPPET

import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class TodoItem extends Component {

  render() {
    const { _id, description } = this.props.todo //Alias out long prop
    return (
      <div>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, _id)} />
          {description}
          <button
            onClick={this.props.deleteTodo.bind(this, _id)}>X</button>
        </p>
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
