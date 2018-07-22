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
        const todo = new Todo(ref.value);
        todosAPI.add(todo, todo => dispatch(actions.addTodo(todo)));
        // const todos = deepCopy(todosAPI.todos);
        ref.value = '';
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
