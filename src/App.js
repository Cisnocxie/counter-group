import React, { Component } from 'react';
import './App.css';
import Todo from './model/Todo';
import AddTodoContainer from './containers/AddTodoContainer';
import TodoListContainer from './containers/TodoListContainer';
import FilterContainer from './containers/FilterContainer';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h2>Jquery To Do List</h2>
          <p>
            <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
        </div>
        <AddTodoContainer />
        <div>
          <BrowserRouter>
            <ol>
              <Route exact path={`/`} component={TodoListContainer} />
              <Route path={`/:status`} component={TodoListContainer} />
            </ol>
          </BrowserRouter>
        </div>
        <div>
          <ul className="filters">
            <FilterContainer href="/" dataFilter="all" filterName={Todo.ALL}>
              ALL
            </FilterContainer>
            <FilterContainer
              href="/active"
              dataFilter="active"
              filterName={Todo.ACTIVE}
            >
              Active
            </FilterContainer>
            <FilterContainer
              href="/completed"
              dataFilter="completed"
              filterName={Todo.COMPLETED}
            >
              Completed
            </FilterContainer>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
