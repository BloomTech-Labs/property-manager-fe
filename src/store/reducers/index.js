import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import mediaReducer from './mediaReducer';
import propReducer from './propReducer';
import workOrderReducer from './workOrderReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  mediaReducer,
  propReducer,
  workOrderReducer,
  uiReducer,
  firebase: firebaseReducer
});
