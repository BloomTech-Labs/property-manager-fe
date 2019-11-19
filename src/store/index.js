import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';

export const makeStore = state =>
  createStore(
    reducer,
    state,
    compose(
      applyMiddleware(thunk, logger)
      // /* eslint-disable */
      // window.__REDUX_DEVTOOLS_EXTENSION__
      //   ? window.__REDUX_DEVTOOLS_EXTENSION__()
      //   : f => f
      // /* eslint-enable */
    )
  );

export default makeStore();
