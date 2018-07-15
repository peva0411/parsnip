import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import tasks from './reducers';
import tasksReducer from './reducers';
import App from './App';
import './index.css';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = (state = {}, action) => {
  return {
    tasks: tasksReducer(state.tasks, action)
  };
};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



