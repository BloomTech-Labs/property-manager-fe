/* eslint-disable import/prefer-default-export */
// import axios from 'axios';
import {
  AUTH_REQUEST_START,
  AUTH_REQUEST_SUCCESS,
  AUTH_REQUEST_FAIL
} from './authTypes';
import axiosAuth from '../../../helpers/axiosAuth';
import { showSuccessToast, showErrorToast } from '../toastActions';
import fb from '../../../vendors/fb';

export const auth = url => (email, password, type) => {
  return async dispatch => {
    dispatch({ type: AUTH_REQUEST_START });
    try {
      // this is executed on when a new user is signing up
      const successAlert = showSuccessToast(`Success! Welcome to Freehold!`);
      if (type) {
        const { user } = await fb
          .auth()
          .createUserWithEmailAndPassword(email, password);

        // create new object with user's uid
        const userWithType = {
          email,
          uid: user.uid,
          type
        };
        // send userWithType to node server, set custom firebase claim {landlord: true}
        const res = await axiosAuth.post(`${url}`, userWithType);
        // refresh the token with the new claim
        await fb.auth().currentUser.getIdToken(true);
        // set to userType & token in local storage
        localStorage.setItem('userType', res.data.user.type);
        // show success toast
        dispatch(successAlert);
        dispatch({
          type: AUTH_REQUEST_SUCCESS,
          payload: { user: res.data.user }
        });
      } else {
        // this is executed when a existing user is logging in
        const { user } = await fb
          .auth()
          .signInWithEmailAndPassword(email, password);
        const token = await fb.auth().currentUser.getIdToken();
        const res = await axiosAuth.post(`${url}`, {
          email,
          uid: user.uid,
          token
        });
        localStorage.setItem('userType', res.data.type);
        dispatch(successAlert);
        dispatch({
          type: AUTH_REQUEST_SUCCESS,
          payload: { user: res.data.user }
        });
      }
    } catch (err) {
      // pull out error message
      // show error toast
      dispatch(showErrorToast(`${err}`));
      dispatch({
        type: AUTH_REQUEST_FAIL,
        payload: err
      });
    }
  };
};
