import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/index.scss';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://91785aae1f5c49a29b8d16a078e35508@sentry.io/1825288'
});

ReactDOM.render(<App />, document.getElementById('root'));
