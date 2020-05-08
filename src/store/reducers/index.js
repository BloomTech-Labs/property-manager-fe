import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import propReducer from './propReducer';
import getUserReducer from './getUserReducer';
import workOrderReducer from './workOrderReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  propReducer,
  getUserReducer,
  workOrderReducer,
  uiReducer,
  firebase: firebaseReducer
});
