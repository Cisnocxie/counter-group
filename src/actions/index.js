import * as ActionTypes from '../constants/ActionTypes';

export const addTodo = todo => ({ type: ActionTypes.ADD_TODO, todo });
export const setStatusOfList = statusOfList => ({
  type: ActionTypes.SET_STATUS_OF_LIST,
  statusOfList
});
export const getTodos = todos => ({ type: ActionTypes.GET_TODOS, todos });
