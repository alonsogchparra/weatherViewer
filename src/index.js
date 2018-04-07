import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { applyMiddleware, createStore } from 'redux';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>
, document.querySelector('.container'));