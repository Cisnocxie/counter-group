import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import todosAPI from '../api/TodoResourseAPI';
import * as actions from '../actions';
import Todo from '../model/Todo';

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
    toggleActive: (viewId, status) => {
      const toggleStatus =
        status === Todo.ACTIVE ? Todo.COMPLETED : Todo.ACTIVE;
      todosAPI.toggleActive(viewId, toggleStatus, todos =>
        dispatch(actions.getTodos(todos))
      );
    },

    updateItemContent: (viewId, content) => {
      todosAPI.updateItemContent(viewId, content, todos =>
        dispatch(actions.getTodos(todos))
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
