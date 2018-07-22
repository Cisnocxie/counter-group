import Todo from '../model/Todo';
import axios from 'axios';

const todosAPI = {
  todos: [],
  apiUrl: 'http://localhost:8080/api',
  add(todo, successCallBack) {
    // this.todos.push(todo, successCallBack);
    axios
      .post(`${this.apiUrl}/todos`, {
        id: todo.viewId,
        content: todo.content,
        status: todo.status
      })
      .then(function(response) {
        console.log(response);
        successCallBack(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  filerByStatus(status, successCallBack) {
    let url = `${this.apiUrl}/todos/search/statusOfTodos?status=`;
    if (status === Todo.ALL) {
      url += 'completed,active';
    } else if (status === Todo.ACTIVE) {
      url += 'active';
    } else {
      url += 'completed';
    }
    axios
      .get(url)
      .then(function(response) {
        successCallBack(response.data._embedded.todos);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  toggleActive(viewId) {
    let todo = this.todos.find(item => item.viewId === viewId);
    if (todo !== undefined) {
      todo.toggleActive();
    }
  },
  updateItemContent(viewId, content) {
    let todo = this.todos.find(item => item.viewId === viewId);
    if (todo !== undefined) {
      todo.content = content;
    }
  }
};
export default todosAPI;
