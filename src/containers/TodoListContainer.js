import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import todosAPI from '../api/TodoResourseAPI';
import * as actions from '../actions';
import Todo from '../model/Todo';

const deepCopy = array => {
  return JSON.parse(JSON.stringify(array));
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos:
      state.filter === Todo.ALL
        ? state.todos
        : state.todos.filter(item => item.status === state.filter)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleActive: viewId => {
      todosAPI.toggleActive(viewId);
      const todos = deepCopy(todosAPI.todos);
      dispatch(actions.modifyTodos(todos));
    },

    updateItemContent: (viewId, content) => {
      todosAPI.updateItemContent(viewId, content);
      const todos = deepCopy(todosAPI.todos);
      dispatch(actions.modifyTodos(todos));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
