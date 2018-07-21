import * as ActionTypes from '../constants/ActionTypes';

export const modifyTodos = todos => ({ type: ActionTypes.MODIFY_TODOS, todos });
export const setStatusOfList = statusOfList => ({
  type: ActionTypes.SET_STATUS_OF_LIST,
  statusOfList
});
