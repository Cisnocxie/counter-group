export default (state = 'all', action) => {
  switch (action.type) {
    case 'SET_STATUS_OF_LIST': {
      return action.statusOfList;
    }
    default:
      return state;
  }
};
