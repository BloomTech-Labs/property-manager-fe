// IMPORTS/INITIALIZATION =========================|
// ================================================|
import axios from 'axios';
// ------------------------------------------------|
// AUTH ACTIONS ===================================|
// ================================================|
export const AUTH_REQUEST_START = 'AUTH_REQUEST_START';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_FAIL = 'AUTH_REQUEST_FAIL';
// ------------------------------------------------|
export const auth = url => (email, password) => async dispatch => {
  dispatch({ type: AUTH_REQUEST_START });

  try {
    const res = await axios.post(url, {
      email,
      password
    });

    console.log(res);

    // TODO: Write to localStorage

    dispatch({ type: AUTH_REQUEST_SUCCESS, payload: { token: res } });
  } catch (err) {
    console.error(err);
    dispatch({ type: AUTH_REQUEST_FAIL, payload: { errorMessage: err } });
  }
};
// ------------------------------------------------|
// PROPERTY ACTIONS ===============================|
// ================================================|
export const ADD_PROPERTY_START = 'ADD_PROPERTY_START';
export const ADD_PROPERTY_SUCCESS = 'ADD_PROPERTY_SUCCESS';
export const ADD_PROPERTY_FAIL = 'ADD_PROPERTY_FAIL';

export const GET_ALLPROPERTIES_START = 'GET_ALLPROPERTIES_START';
export const GET_ALLPROPERTIES_SUCCESS = 'GET_ALLPROPERTIES_SUCCESS';
export const GET_ALLPROPERTIES_FAIL = 'GET_ALLPROPERTIES_FAIL';
// ------------------------------------------------|
export const createProperty = url => property => async dispatch => {
  dispatch({ type: ADD_PROPERTY_START });
  console.log(property);
  try {
    const res = await axios.post(url, { ...property });

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
export const getAllProperties = url => () => async dispatch => {
  dispatch({ type: GET_ALLPROPERTIES_START });

  try {
    const res = await axios.get(url);

    dispatch({
      type: GET_ALLPROPERTIES_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_ALLPROPERTIES_FAIL, payload: { errorMessage: err } });
  }
};
// ------------------------------------------------|
// USER ACTIONS ===================================|
// ================================================|

// define your user actions here

// ------------------------------------------------|
