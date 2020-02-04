import { combineReducers } from 'redux';
import authReducer from './authReducer';
import propReducer from './propReducer';
import getUserReducer from './getUserReducer';
import workOrderReducer from './workOrderReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  authReducer,
  propReducer,
  getUserReducer,
  workOrderReducer,
  uiReducer
});
