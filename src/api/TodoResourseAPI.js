import axios from 'axios';

const todosAPI = {
  status: undefined,
  apiUrl: 'http://localhost:8080/api',
  setStatus(status) {
    this.status = status;
  },
  add(todo, successCallBack) {
    axios
      .post(`${this.apiUrl}/todos`, {
        id: todo.viewId,
        content: todo.content,
        status: todo.status
      })
      .then(function(response) {
        successCallBack(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  getAllTodos(successCallBack) {
    axios
      .get(`${this.apiUrl}/todos/search/statusOfTodos?status=completed,active`)
      .then(function(response) {
        successCallBack(response.data._embedded.todos);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  toggleActive(viewId, status, successCallBack) {
    axios
      .patch(`${this.apiUrl}/todos/${viewId}`, {
        status: status
      })
      .then(response => {
        successCallBack(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  updateItemContent(viewId, content, successCallBack) {
    axios
      .patch(`${this.apiUrl}/todos/${viewId}`, {
        content: content
      })
      .then(response => {
        successCallBack(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
export default todosAPI;
