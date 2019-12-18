// IMPORTS/INITIALIZATION =========================|
// ================================================|
import axios from 'axios';
import axiosAuth from '../../helpers/axiosAuth';
// ------------------------------------------------|
// BASE URL ---------------------------------------|
const baseUrl = 'https://pt6-propman-staging.herokuapp.com/api';
// ------------------------------------------------|
// AUTH ACTIONS ===================================|
// ================================================|
export const AUTH_REQUEST_START = 'AUTH_REQUEST_START';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_FAIL = 'AUTH_REQUEST_FAIL';
export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';
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
export const ADD_TENANT_START = 'ADD_TENANT_START';
export const ADD_TENANT_SUCCESS = 'ADD_TENANT_SUCCESS';
export const ADD_TENANT_FAIL = 'ADD_TENANT_FAIL';
// ------------------------------------------------|
// CREATE A PROPERTY ------------------------------|
export const createProperty = property => async dispatch => {
  dispatch({ type: ADD_PROPERTY_START });

  try {
    const res = await axiosAuth().post(`${baseUrl}properties`, property);

    dispatch({
      type: ADD_PROPERTY_SUCCESS,
      payload: {
        created: res
      }
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    dispatch({ type: ADD_PROPERTY_FAIL, payload: { errorMessage: err } });
  }
};
// ------------------------------------------------|
// GET PROPERTIES ---------------------------------|
export const getProperties = () => async dispatch => {
  dispatch({ type: GET_PROPERTIES_START });

  try {
    const res = await axiosAuth().get(`${baseUrl}/properties`);

    if (res.data.length) {
      localStorage.setItem('properties', res.data);
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
// ------------------------------------------------|
// GET PROPERTY -----------------------------------|
// Takes in the property id to pass in as a url
// parameter for endpoint
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
// ------------------------------------------------|
// EDIT PROPERTY ----------------------------------|
export const editProperty = (id, property) => {
  return async dispatch => {
    dispatch({ type: EDIT_PROPERTY_START });

    try {
      const res = await axiosAuth().put(
        `${baseUrl}/properties/${id}`,
        property
      );

      // eslint-disable-next-line no-console
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
};
// ------------------------------------------------|
// ADD TENANT TO PROPERTY -------------------------|
export const addTenant = url => tenant => async dispatch => {
  dispatch({ type: ADD_TENANT_START });

  try {
    const res = await axiosAuth().post(url, tenant);

    // eslint-disable-next-line no-console
    console.log(res.data);

    dispatch({
      type: ADD_TENANT_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: ADD_TENANT_FAIL, payload: { errMsg: err.message } });
  }
};
// ------------------------------------------------|
// USER ACTIONS ===================================|
// ================================================|

// define your user actions here
// ------------------------------------------------|
export const getUserInfo = url => async dispatch => {
  dispatch({ type: GET_USER_START });

  try {
    const res = await axiosAuth().get(url);

    console.log(res.data);
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
