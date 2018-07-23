import React, { Component } from 'react';
import '../App.css';
import { Icon } from 'antd';
import 'antd/dist/antd.css';

class AddTodo extends Component {
  render() {
    const { addTodo } = this.props;
    return (
      <div>
        <input className="input-text" id="todo-creator" ref="newItem" />
        <Icon
          type="plus"
          className="button"
          onClick={() => addTodo(this.refs.newItem)}
        />
      </div>
    );
  }
}

export default AddTodo;
