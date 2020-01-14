/* eslint-disable no-console */
// IMPORTS/INITIALIZATION =========================|
// ================================================|
import axios from 'axios';
import axiosAuth from '../../helpers/axiosAuth';
// ------------------------------------------------|
// BASE URL ---------------------------------------|
const baseUrl = 'https://pt6-propman-staging.herokuapp.com/api';
// ------------------------------------------------|
// AUTH TYPES =====================================|
// ================================================|
export const AUTH_REQUEST_START = 'AUTH_REQUEST_START';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_FAIL = 'AUTH_REQUEST_FAIL';
// ------------------------------------------------|
// USER TYPES =====================================|
// ================================================|
export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';
// ------------------------------------------------|
export const EDIT_USER_START = 'EDIT_USER_START';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAIL = 'EDIT_USER_FAIL';
// ------------------------------------------------|
// PROPERTY TYPES =================================|
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
// TENANT TYPES ===================================|
// ================================================|
export const GET_TENANTS_START = 'GET_TENANTS_START';
export const GET_TENANTS_SUCCESS = 'GET_TENANTS_SUCCESS';
export const GET_TENANTS_FAIL = 'GET_TENANTS_FAIL';
// ------------------------------------------------|
export const GET_TENANT_ID_START = 'GET_TENANT_ID_START';
export const GET_TENANT_ID_SUCCESS = 'GET_TENANT_ID_SUCCESS';
export const GET_TENANT_ID_FAIL = 'GET_TENANT_ID_FAIL';
// ------------------------------------------------|
export const EDIT_TENANT_START = 'EDIT_TENANT_START';
export const EDIT_TENANT_SUCCESS = 'EDIT_TENANT_SUCCESS';
export const EDIT_TENANT_FAIL = 'EDIT_TENANT_FAIL';
// ------------------------------------------------|
export const ADD_TENANT_START = 'ADD_TENANT_START';
export const ADD_TENANT_SUCCESS = 'ADD_TENANT_SUCCESS';
export const ADD_TENANT_FAIL = 'ADD_TENANT_FAIL';
// ------------------------------------------------|
export const GET_TENANTS_RESIDENCE_START = 'GET_TENANTS_RESIDENCE_START';
export const GET_TENANTS_RESIDENCE_SUCCESS = 'GET_TENANTS_RESIDENCE_SUCCESS';
export const GET_TENANTS_RESIDENCE_FAIL = 'GET_TENANTS_RESIDENCE_FAIL';
// ------------------------------------------------|
// WORK ORDER TYPES ===============================|
// ================================================|
export const GET_WORK_ORDERS_START = 'GET_WORK_ORDERS_START';
export const GET_WORK_ORDERS_FAIL = 'GET_WORK_ORDERS_FAIL';
export const GET_WORK_ORDERS_SUCCESS = 'GET_WORK_ORDERS_SUCCESS';
// ------------------------------------------------|
export const ADD_WORK_ORDER_START = 'ADD_WORK_ORDER_START';
export const ADD_WORK_ORDER_FAIL = 'ADD_WORK_ORDER_FAIL';
export const ADD_WORK_ORDER_SUCCESS = 'ADD_WORK_ORDER_SUCCESS';
// ------------------------------------------------|
export const UPDATE_WORK_ORDER_START = 'UPDATE_WORK_ORDER_START';
export const UPDATE_WORK_ORDER_FAIL = 'UPDATE_WORK_ORDER_FAIL';
export const UPDATE_WORK_ORDER_SUCCESS = 'UPDATE_WORK_ORDER_SUCCESS';
// ------------------------------------------------|
// AUTH CREATORS ==================================|
// ================================================|
// LOGIN / SIGNUP ---------------------------------|
export const auth = url => (email, password, type) => async dispatch => {
  dispatch({ type: AUTH_REQUEST_START });

  try {
    const res = await axios.post(`${baseUrl}${url}`, {
      email,
      password,
      type
    });

    localStorage.setItem('token', res.data.token);

    dispatch({ type: AUTH_REQUEST_SUCCESS, payload: { token: res } });
  } catch (err) {
    dispatch({ type: AUTH_REQUEST_FAIL, payload: { errorMessage: err } });
  }
};
// ------------------------------------------------|
// PROPERTY CREATORS ==============================|
// ================================================|
// CREATE A PROPERTY ------------------------------|
export const createProperty = property => {
  return async dispatch => {
    dispatch({ type: ADD_PROPERTY_START });

    try {
      const res = await axiosAuth().post(`${baseUrl}/properties`, property);

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
      await axiosAuth().put(`${baseUrl}/properties/${id}`, property);

      dispatch({
        type: EDIT_PROPERTY_SUCCESS
      });
    } catch (err) {
      dispatch({ type: EDIT_PROPERTY_FAIL, payload: { errMsg: err.message } });
    }
  };
};
// ------------------------------------------------|
// TENANT CREATORS ================================|
// ================================================|
// GET TENANTS ------------------------------------|
export const getTenants = () => {
  return async dispatch => {
    dispatch({ type: GET_TENANTS_START });

    try {
      const res = await axiosAuth().get(`${baseUrl}/tenants`);

      dispatch({ type: GET_TENANTS_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: GET_TENANTS_FAIL, payload: { errMsg: err.message } });
    }
  };
};
// ------------------------------------------------|
// GET TENANT -----------------------------------|
// Takes in the tenant id to pass in as a url
// parameter for endpoint
export const getTenantById = id => async dispatch => {
  dispatch({ type: GET_TENANT_ID_START });

  try {
    const res = await axiosAuth().get(`${baseUrl}/tenants/${id}`);
    console.log(res.data);

    dispatch({
      type: GET_TENANT_ID_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: GET_TENANT_ID_FAIL, payload: { errMsg: err.message } });
  }
};
// ------------------------------------------------|
// EDIT TENANT ----------------------------------|
export const editTenant = (id, tenant) => {
  return async dispatch => {
    dispatch({ type: EDIT_TENANT_START });

    try {
      await axiosAuth().put(`${baseUrl}/tenants/${id}`, tenant);

      dispatch({
        type: EDIT_TENANT_SUCCESS
      });
    } catch (err) {
      dispatch({ type: EDIT_TENANT_FAIL, payload: { errMsg: err.message } });
    }
  };
};
// ------------------------------------------------|
// ADD TENANT TO PROPERTY -------------------------|
export const addTenant = url => tenant => async dispatch => {
  dispatch({ type: ADD_TENANT_START });

  try {
    const res = await axiosAuth().post(url, tenant);

    dispatch({
      type: ADD_TENANT_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: ADD_TENANT_FAIL, payload: { errMsg: err.message } });
  }
};
// ------------------------------------------------|
// GET TENANTS BY RESIDENCE ID --------------------|
export const getTenantsByResidence = residenceId => {
  return async dispatch => {
    dispatch({ type: GET_TENANTS_RESIDENCE_START });

    try {
      const res = await axiosAuth().get(
        `${baseUrl}/properties/${residenceId}/tenants`
      );

      console.log(res);

      dispatch({
        type: GET_TENANTS_RESIDENCE_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: GET_TENANTS_RESIDENCE_FAIL,
        payload: { errMsg: err.message }
      });
    }
  };
};
// ------------------------------------------------|
// USER CREATORS ==================================|
// ================================================|
// define your user actions here
// ------------------------------------------------|
export const getUserInfo = () => async dispatch => {
  dispatch({ type: GET_USER_START });

  try {
    const res = await axiosAuth().get(`${baseUrl}/users/me`);

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

export const editUserInfo = user => async dispatch => {
  dispatch({ type: EDIT_USER_START });

  try {
    const res = await axiosAuth().put(`${baseUrl}/users/me`, user);

    console.log(res.data);
    dispatch({
      type: EDIT_USER_SUCCESS,
      payload: {
        user: res.data
      }
    });
  } catch (err) {
    dispatch({ type: EDIT_USER_FAIL, payload: { errMsg: err } });
  }
};
// ------------------------------------------------|
// WORD ORDER ACTIONS =============================|
// ================================================|
// ------------------------------------------------|
// TODO: Resolve Unused Variables!
// Disabled eslint for unused vars, assuming this needs
// to be adjusted when the endpoint is available.
// eslint-disable-next-line no-unused-vars
export const getWorkOrders = property => async dispatch => {
  dispatch({ type: GET_WORK_ORDERS_START });
  try {
    const res = 'test';
    console.log(res);
    dispatch({
      type: GET_WORK_ORDERS_SUCCESS,
      payload: {
        workOrders: res
      }
    });
  } catch (err) {
    dispatch({ type: GET_WORK_ORDERS_FAIL, payload: { errMsg: err } });
  }
};
// ------------------------------------------------|
// eslint-disable-next-line no-unused-vars
export const addWorkOrder = (property, workOrder) => async dispatch => {
  dispatch({ type: ADD_WORK_ORDER_START });
  try {
    const res = 'test';
    console.log(res);
    dispatch({
      type: ADD_WORK_ORDER_SUCCESS,
      payload: {
        workOrders: res
      }
    });
  } catch (err) {
    dispatch({ type: ADD_WORK_ORDER_FAIL, payload: { errMsg: err } });
  }
};
// ------------------------------------------------|
// eslint-disable-next-line no-unused-vars
export const updateWorkOrder = workOrder => async dispatch => {
  dispatch({ type: UPDATE_WORK_ORDER_START });
  try {
    const res = 'test';
    console.log(res);
    dispatch({
      type: UPDATE_WORK_ORDER_SUCCESS,
      payload: {
        workOrders: res
      }
    });
  } catch (err) {
    dispatch({ type: UPDATE_WORK_ORDER_FAIL, payload: { errMsg: err } });
  }
};
