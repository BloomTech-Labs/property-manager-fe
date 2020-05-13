import {
  ADD_TENANT_START,
  ADD_TENANT_FAIL,
  ADD_TENANT_SUCCESS,
  GET_TENANTS_RESIDENCE_START,
  GET_TENANTS_RESIDENCE_FAIL,
  GET_TENANTS_RESIDENCE_SUCCESS,
  GET_TENANTS_START,
  GET_TENANTS_FAIL,
  GET_TENANTS_SUCCESS,
  GET_TENANT_ID_START,
  GET_TENANT_ID_FAIL,
  GET_TENANT_ID_SUCCESS,
  EDIT_TENANT_START,
  EDIT_TENANT_FAIL,
  EDIT_TENANT_SUCCESS
} from './tenantTypes';
import { getProperties } from '../properties/propertyCreators';
import axiosAuth from '../../../helpers/axiosAuth';
import { showSuccessToast, showErrorToast } from '../toastActions';

export const getTenants = () => {
  return async dispatch => {
    dispatch({ type: GET_TENANTS_START });

    try {
      const res = await axiosAuth.get(`/tenants/bylandlord`);

      dispatch({ type: GET_TENANTS_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: GET_TENANTS_FAIL, payload: { errMsg: err.message } });
    }
  };
};

export const getTenantById = id => async dispatch => {
  dispatch({ type: GET_TENANT_ID_START });

  try {
    const res = await axiosAuth.get(`/tenants/${id}`);
    dispatch({
      type: GET_TENANT_ID_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: GET_TENANT_ID_FAIL, payload: { errMsg: err.message } });
  }
};

export const editTenant = (id, tenant) => {
  return async dispatch => {
    dispatch({ type: EDIT_TENANT_START });

    try {
      await axiosAuth.put(`/tenants/${id}`, tenant);

      // show success toast
      dispatch(showSuccessToast('Tenant updated!'));

      dispatch({
        type: EDIT_TENANT_SUCCESS
      });
    } catch (err) {
      // show error toast
      dispatch(showErrorToast('Uh oh! Something went wrong'));

      dispatch({ type: EDIT_TENANT_FAIL, payload: { errMsg: err.message } });
    }
  };
};

export const addTenant = url => tenant => async dispatch => {
  dispatch({ type: ADD_TENANT_START });

  try {
    const res = await axiosAuth.post(url, tenant);

    // show success toast
    dispatch(showSuccessToast('Tenant added to property!'));

    dispatch(getProperties());

    dispatch({
      type: ADD_TENANT_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Tenant error', err);
    // show error toast
    dispatch(showErrorToast('Uh oh! Something went wrong'));

    dispatch({ type: ADD_TENANT_FAIL, payload: { errMsg: err.message } });
  }
};

export const getTenantsByResidence = residenceId => {
  return async dispatch => {
    dispatch({ type: GET_TENANTS_RESIDENCE_START });

    try {
      const res = await axiosAuth.get(`/tenants/byunit/${residenceId}`);
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
