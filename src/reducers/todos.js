export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [...state, action.todo];
    }
    case 'GET_TODOS': {
      return action.todos;
    }
    default:
      return state;
  }
};
