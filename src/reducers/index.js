import todosAPI from '../api/TodoResourseAPI';
export default (state = [], action) => {
  switch (action.type) {
    case 'ADDTODO': {
      console.log(action.todos);
      return action.todos;
    }
    default:
      return state;
  }
};
