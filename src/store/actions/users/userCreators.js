import {
  GET_USER_START,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  EDIT_USER_START,
  EDIT_USER_FAIL,
  EDIT_USER_SUCCESS
} from './userTypes';
import axiosAuth from '../../../helpers/axiosAuth';
import { showSuccessToast, showErrorToast } from '../toastActions';

export const getUserInfo = () => async dispatch => {
  dispatch({ type: GET_USER_START });

  try {
    const res = await axiosAuth.get(`/users/me`);
    dispatch({
      type: GET_USER_SUCCESS,
      payload: {
        user: res.data
      }
    });
  } catch (err) {
    dispatch({ type: GET_USER_FAIL, payload: { errMsg: err } });
  }
};

export const editUserInfo = user => async dispatch => {
  dispatch({ type: EDIT_USER_START });

  try {
    const res = await axiosAuth.put(`/users/me`, user);

    // show success toast
    dispatch(showSuccessToast('Profile updated!'));

    dispatch({
      type: EDIT_USER_SUCCESS,
      payload: {
        user: res.data
      }
    });
  } catch (err) {
    // show error toast
    dispatch(showErrorToast('Uh oh! Something went wrong'));

    dispatch({ type: EDIT_USER_FAIL, payload: { errMsg: err } });
  }
};
