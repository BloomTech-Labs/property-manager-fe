import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';

const middleware = process.ENV === 'production' ? [thunk] : [thunk, logger];

export const makeStore = state =>
  createStore(reducer, state, compose(applyMiddleware(...middleware)));

export default makeStore();
