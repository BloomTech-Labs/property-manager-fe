import { combineReducers } from 'redux';
import authReducer from './authReducer';
import propReducer from './propReducer';
import getUserReducer from './getUserReducer'

export default combineReducers({ authReducer, propReducer, getUserReducer });
