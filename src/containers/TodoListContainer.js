import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import todosAPI from '../api/TodoResourseAPI';

const deepCopy = array => {
  return JSON.parse(JSON.stringify(array));
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos: deepCopy(todosAPI.filerByStatus(state.filter))
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleActive: viewId => {
      todosAPI.toggleActive(viewId);
      const todos = deepCopy(todosAPI.todos);
      dispatch({ type: 'ADDTODO', todos });
    },

    updateItemContent: (viewId, content) => {
      todosAPI.updateItemContent(viewId, content);
      const todos = deepCopy(todosAPI.todos);
      dispatch({ type: 'ADDTODO', todos });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
