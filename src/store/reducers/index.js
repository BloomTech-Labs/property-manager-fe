import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import propReducer from './propReducer';
import workOrderReducer from './workOrderReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  propReducer,
  workOrderReducer,
  uiReducer,
  firebase: firebaseReducer
});
