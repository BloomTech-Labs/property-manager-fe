import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { getFirebase } from 'react-redux-firebase';
import reducer from './reducers';

const middleware =
  process.ENV === 'production'
    ? [thunk.withExtraArgument(getFirebase)]
    : [thunk.withExtraArgument(getFirebase), logger];

export const makeStore = state =>
  createStore(
    reducer,
    state,
    compose(
      applyMiddleware(...middleware),

      /* eslint-disable */
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );

export default makeStore();
