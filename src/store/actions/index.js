// IMPORTS/INITIALIZATION =========================|
// ================================================|
import axios from 'axios';
import axiosAuth from '../../helpers/axiosAuth';
// ------------------------------------------------|
// AUTH ACTIONS ===================================|
// ================================================|
export const AUTH_REQUEST_START = 'AUTH_REQUEST_START';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_FAIL = 'AUTH_REQUEST_FAIL';
// ------------------------------------------------|
// LOGIN / SIGNUP ---------------------------------|
export const auth = url => (email, password) => async dispatch => {
  dispatch({ type: AUTH_REQUEST_START });

  try {
    const res = await axios.post(url, {
      email,
      password
    });

    localStorage.setItem('token', res.data.token);

    dispatch({ type: AUTH_REQUEST_SUCCESS, payload: { token: res } });
  } catch (err) {
    dispatch({ type: AUTH_REQUEST_FAIL, payload: { errorMessage: err } });
  }
};
// ------------------------------------------------|
// PROPERTY ACTIONS ===============================|
// ================================================|
export const ADD_PROPERTY_START = 'ADD_PROPERTY_START';
export const ADD_PROPERTY_SUCCESS = 'ADD_PROPERTY_SUCCESS';
export const ADD_PROPERTY_FAIL = 'ADD_PROPERTY_FAIL';
// ------------------------------------------------|
export const GET_PROPERTIES_START = 'GET_PROPERTIES_START';
export const GET_PROPERTIES_SUCCESS = 'GET_PROPERTIES_SUCCESS';
export const GET_PROPERTIES_FAIL = 'GET_PROPERTIES_FAIL';
// ------------------------------------------------|
export const GET_PROPERTY_START = 'GET_PROPERTY_START';
export const GET_PROPERTY_SUCCESS = 'GET_PROPERTY_SUCCESS';
export const GET_PROPERTY_FAIL = 'GET_PROPERTY_FAIL';
// ------------------------------------------------|
export const EDIT_PROPERTY_START = 'EDIT_PROPERTY_START';
export const EDIT_PROPERTY_SUCCESS = 'EDIT_PROPERTY_SUCCESS';
export const EDIT_PROPERTY_FAIL = 'EDIT_PROPERTY_FAIL';
// ------------------------------------------------|
// CREATE A PROPERTY ------------------------------|
export const createProperty = url => property => async dispatch => {
  dispatch({ type: ADD_PROPERTY_START });

  try {
    const res = await axiosAuth().post(url, property);

    dispatch({
      type: ADD_PROPERTY_SUCCESS,
      payload: {
        created: res
      }
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: ADD_PROPERTY_FAIL, payload: { errorMessage: err } });
  }
};
// ------------------------------------------------|
// GET PROPERTIES ---------------------------------|
export const getProperties = url => async dispatch => {
  dispatch({ type: GET_PROPERTIES_START });

  try {
    const res = await axiosAuth().get(url);

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
// ------------------------------------------------|
// GET PROPERTY -----------------------------------|
export const getProperty = url => async dispatch => {
  dispatch({ type: GET_PROPERTY_START });

  try {
    const res = await axiosAuth().get(url);

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
// ------------------------------------------------|
// EDIT PROPERTY ----------------------------------|
export const editProperty = url => property => async dispatch => {
  dispatch({ type: EDIT_PROPERTY_START });

  try {
    const res = await axiosAuth().put(url, property);

    console.log(res.data);

    dispatch({
      type: EDIT_PROPERTY_SUCCESS,
      payload: {
        updated: true
      }
    });
  } catch (err) {
    dispatch({ type: EDIT_PROPERTY_FAIL, payload: { errMsg: err.message } });
  }
};
// ------------------------------------------------|
// USER ACTIONS ===================================|
// ================================================|

// define your user actions here

// ------------------------------------------------|
