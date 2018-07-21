export default (state = [], action) => {
  switch (action.type) {
    case 'MODIFY_TODOS': {
      return action.todos;
    }
    default:
      return state;
  }
};
