import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import todosAPI from '../api/TodoResourseAPI';
import * as actions from '../actions';
import Todo from '../model/Todo';

const mapStateToProps = (state, ownProps) => {
  const status = ownProps.match.params.status;
  state.filter = status === undefined ? 'all' : status;
  return {
    todos:
      state.filter === 'all'
        ? state.todos
        : state.todos.filter(item => item.status === status)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleActive: (viewId, status) => {
      const toggleStatus =
        status === Todo.ACTIVE ? Todo.COMPLETED : Todo.ACTIVE;
      todosAPI.toggleActive(viewId, toggleStatus, todo =>
        dispatch(actions.modifyTodo(todo))
      );
    },

    updateItemContent: (viewId, content) => {
      todosAPI.updateItemContent(viewId, content, todo =>
        dispatch(actions.modifyTodo(todo))
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
