import React, { Component } from 'react';
import '../App.css';

class AddTodo extends Component {
  render() {
    const { addTodo } = this.props;
    return (
      <div>
        <input className="input-text" id="todo-creator" ref="newItem" />
        <div className="button" onClick={() => addTodo(this.refs.newItem)}>
          Add
        </div>
      </div>
    );
  }
}

export default AddTodo;
