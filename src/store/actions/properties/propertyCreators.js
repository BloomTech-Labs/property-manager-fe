import {
  ADD_PROPERTY_START,
  ADD_PROPERTY_FAIL,
  ADD_PROPERTY_SUCCESS,
  EDIT_PROPERTY_START,
  EDIT_PROPERTY_SUCCESS,
  EDIT_PROPERTY_FAIL,
  GET_PROPERTIES_START,
  GET_PROPERTIES_FAIL,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTY_START,
  GET_PROPERTY_FAIL,
  GET_PROPERTY_SUCCESS
} from './propertyTypes';
import { baseUrl } from '../../../helpers/baseUrl';
import axiosAuth from '../../../helpers/axiosAuth';
import { showSuccessToast, showErrorToast } from '../toastActions';

export const createProperty = property => {
  return async dispatch => {
    dispatch({ type: ADD_PROPERTY_START });

    try {
      const res = await axiosAuth().post(`${baseUrl}/properties`, property);

      // show success toast
      dispatch(showSuccessToast(`Property created!`));
      // dispatch success
      dispatch({
        type: ADD_PROPERTY_SUCCESS,
        payload: {
          created: res
        }
      });
    } catch (err) {
      // show error toast
      dispatch(showErrorToast('Uh oh! Something went wrong'));
      // dispatch fail
      dispatch({ type: ADD_PROPERTY_FAIL, payload: { errorMessage: err } });
    }
  };
};

export const getProperties = () => async dispatch => {
  dispatch({ type: GET_PROPERTIES_START });

  try {
    const res = await axiosAuth().get(`${baseUrl}/properties`);

    const localProperties = JSON.stringify(res.data);

    if (res.data.length) {
      localStorage.setItem('properties', localProperties);
    }

    dispatch({
      type: GET_PROPERTIES_SUCCESS,
      payload: {
        properties: res.data
      }
    });
  } catch (err) {
    dispatch({ type: GET_PROPERTIES_FAIL, payload: { errMsg: err.message } });
  }
};

export const getProperty = id => async dispatch => {
  dispatch({ type: GET_PROPERTY_START });

  try {
    const res = await axiosAuth().get(`${baseUrl}/properties/${id}`);

    dispatch({
      type: GET_PROPERTY_SUCCESS,
      payload: {
        property: res.data
      }
    });
  } catch (err) {
    dispatch({ type: GET_PROPERTY_FAIL, payload: { errMsg: err.message } });
  }
};

export const editProperty = (id, property) => {
  return async dispatch => {
    dispatch({ type: EDIT_PROPERTY_START });

    try {
      await axiosAuth().put(`${baseUrl}/properties/${id}`, property);

      // show success toast
      dispatch(showSuccessToast(`Property updated!`));

      dispatch({
        type: EDIT_PROPERTY_SUCCESS
      });
    } catch (err) {
      // show error toast
      dispatch(showErrorToast('Uh oh! Something went wrong'));
      dispatch({ type: EDIT_PROPERTY_FAIL, payload: { errMsg: err.message } });
    }
  };
};
