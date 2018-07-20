import React, { Component } from 'react';

class AddTodo extends Component {

    add() {
        this.props.add(this.refs.newItem);
    }

    render() {
        const {add} = this.props;
        return (
            <div>
                <input
                className="input-text"
                id="todo-creator"
                ref="newItem"
                />
                <div className="button" onClick={this.add}>
                Add
                </div>
            </div>
        )
    }
}

export default AddTodo;