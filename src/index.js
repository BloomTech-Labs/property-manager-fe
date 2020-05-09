import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/browser';
import App from './App';
import './scss/index.scss';
import store from './store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { rrfConfig, config } from '../src/vendors/fb';

firebase.initializeApp(config);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
};

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY
});

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
