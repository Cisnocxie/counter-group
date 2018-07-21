import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import todosAPI from '../api/TodoResourseAPI';
import Todo from '../model/Todo';

const deepCopy = array => {
  return JSON.parse(JSON.stringify(array));
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: ref => {
      if (ref.value !== '') {
        todosAPI.add(new Todo(ref.value));
        const todos = deepCopy(todosAPI.todos);
        ref.value = '';
        dispatch({ type: 'ADDTODO', todos });
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
