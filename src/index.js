import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from "redux";
import './index.css';
import App from './App';
import {searchRobots, requestRobots} from './reducer';
import {createLogger} from 'redux-logger';
import thunkMiddeleware from 'redux-thunk';

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddeleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);