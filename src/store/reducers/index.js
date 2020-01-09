import { combineReducers } from 'redux';
import authReducer from './authReducer';
import propReducer from './propReducer';
import getUserReducer from './getUserReducer';
import workOrderReducer from './workOrderReducer';

export default combineReducers({
  authReducer,
  propReducer,
  getUserReducer,
  workOrderReducer
});
