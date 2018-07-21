export default (state = [], action) => {
  switch (action.type) {
    case 'ADDTODO': {
      return action.todos;
    }
    default:
      return state;
  }
};
