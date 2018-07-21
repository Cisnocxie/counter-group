import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import todosAPI from '../api/TodoResourseAPI';
import Todo from '../model/Todo';
import * as actions from '../actions';

const deepCopy = array => {
  return JSON.parse(JSON.stringify(array));
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: ref => {
      if (ref.value !== '') {
        todosAPI.add(new Todo(ref.value));
        const todos = deepCopy(todosAPI.todos);
        ref.value = '';
        dispatch(actions.modifyTodos(todos));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
