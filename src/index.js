import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/browser';
import App from './App';
import './scss/index.scss';
import store from './store';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
