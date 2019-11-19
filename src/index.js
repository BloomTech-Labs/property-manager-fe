import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/browser';
import App from './App';
import './scss/index.scss';
import store from './store';

Sentry.init({
  dsn: 'https://91785aae1f5c49a29b8d16a078e35508@sentry.io/1825288'
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
