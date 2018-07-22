import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { todos, toggleActive, updateItemContent } = this.props;
    return (
      <ol>
        {todos.map(item => (
          <TodoItem
            item={item}
            key={item.id}
            toggleActiveHandler={viewId => toggleActive(viewId)}
            updateItemContent={(viewId, content) =>
              updateItemContent(viewId, content)
            }
          />
        ))}
      </ol>
    );
  }
}

export default TodoList;
