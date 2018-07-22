import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import rootReducers from './reducers';
import { Provider } from 'react-redux';
import todosAPI from './api/TodoResourseAPI';
import * as actions from './actions';

const store = createStore(rootReducers);
todosAPI.getAllTodos(todos => store.dispatch(actions.getTodos(todos)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
