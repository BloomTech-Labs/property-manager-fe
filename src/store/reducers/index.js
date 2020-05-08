import { combineReducers } from 'redux';
import authReducer from './authReducer';
import propReducer from './propReducer';
import getUserReducer from './getUserReducer';
import workOrderReducer from './workOrderReducer';
import uiReducer from './uiReducer';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
  authReducer,
  propReducer,
  getUserReducer,
  workOrderReducer,
  uiReducer,
  firebase: firebaseReducer
});
