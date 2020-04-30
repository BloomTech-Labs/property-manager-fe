import {
  AUTH_REQUEST_START,
  AUTH_REQUEST_SUCCESS,
  AUTH_REQUEST_FAIL
} from './authTypes';
import axiosAuth from '../../../helpers/axiosAuth';
import { showSuccessToast, showErrorToast } from '../toastActions';
import firebase from '../../../vendors/fb';

export const authSignUp = url => (emailFromForm, password, type) => {
  return async dispatch => {
    dispatch({ type: AUTH_REQUEST_START });
    try {
      // firebase login will persist until browser is closed or user logs out
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION);
      // Creates user in firebase and logs them in
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(emailFromForm, password);
      // create new object with user's uid
      const userWithType = {
        email: emailFromForm,
        uid: user.uid,
        type
      };
      // send userWithType to node server, set custom firebase claim {landlord: true}
      const res = await axiosAuth.post(`${url}`, userWithType);
      // refresh the token with to get the new claim
      await firebase.auth().currentUser.getIdToken(true);
      // set userType local storage
      localStorage.setItem('userType', res.data.user.type);
      // show success toast
      dispatch(showSuccessToast(`Success! Welcome to Freehold!`));
      // grab user key values and dispatch them
      const { email, displayName, phoneNumber, uid } = user;
      dispatch({
        type: AUTH_REQUEST_SUCCESS,
        payload: {
          email,
          displayName,
          phoneNumber,
          uid,
          userType: res.data.user.type
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
