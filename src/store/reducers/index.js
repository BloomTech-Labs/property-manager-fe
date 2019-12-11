import { combineReducers } from 'redux';
import authReducer from './authReducer';
import propReducer from './propReducer';

export default combineReducers({ authReducer, propReducer });
