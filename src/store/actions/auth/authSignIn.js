import {
  AUTH_REQUEST_START,
  AUTH_REQUEST_SUCCESS,
  AUTH_REQUEST_FAIL
} from './authTypes';
import axiosAuth from '../../../helpers/axiosAuth';
import { showSuccessToast, showErrorToast } from '../toastActions';
import firebase from '../../../vendors/fb';

export const authSignIn = url => (emailFromForm, password) => {
  return async dispatch => {
    dispatch({ type: AUTH_REQUEST_START });
    try {
      // firebase login will persist until browser is closed or user logs out
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION);
      // Logs User Into Firebase
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(emailFromForm, password);
      // Send info Email, Uid, Token to backend.
      const res = await axiosAuth.post(`${url}`, {
        email: emailFromForm,
        uid: user.uid,
        token: await firebase.auth().currentUser.getIdToken()
      });

      dispatch(showSuccessToast(`Success! Welcome to Freehold!`));
      // grab user key values and dispatch them
      const { email, displayName, uid, phoneNumber } = user;
      dispatch({
        type: AUTH_REQUEST_SUCCESS,
        payload: {
          email,
          displayName,
          uid,
          phoneNumber,
          userType: res.data.type
        }
      });
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
