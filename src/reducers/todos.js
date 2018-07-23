export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [...state, action.todo];
    }
    case 'GET_TODOS': {
      return action.todos;
    }
    case 'MODIFY_TODO': {
      return state.map(todo => {
        if (todo.id === action.todo.id) {
          todo = action.todo;
        }
        return todo;
      });
    }
    default:
      return state;
  }
};
