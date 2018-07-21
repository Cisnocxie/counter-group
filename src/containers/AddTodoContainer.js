import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import todosAPI from '../api/TodoResourseAPI';
import Todo from '../model/Todo';

const deepCopy = array => {
  return JSON.parse(JSON.stringify(array));
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: ref => {
      if (ref.value !== '') {
        todosAPI.add(new Todo(ref.value));
        const todos = deepCopy(todosAPI.filerByStatus('all'));
        ref.value = '';
        console.log(todos);
        dispatch({ type: 'ADDTODO', todos });
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
