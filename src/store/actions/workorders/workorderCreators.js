import {
  ADD_WORK_ORDER_START,
  ADD_WORK_ORDER_FAIL,
  ADD_WORK_ORDER_SUCCESS,
  GET_WORK_ORDERS_START,
  GET_WORK_ORDERS_FAIL,
  GET_WORK_ORDERS_SUCCESS,
  UPDATE_WORK_ORDER_START,
  UPDATE_WORK_ORDER_FAIL,
  UPDATE_WORK_ORDER_SUCCESS
} from './workorderTypes';
import axiosAuth from '../../../helpers/axiosAuth';
import { showSuccessToast, showErrorToast } from '../toastActions';

export const getWorkOrders = () => async dispatch => {
  dispatch({ type: GET_WORK_ORDERS_START });
  try {
    const res = await axiosAuth.get(`/workorders`);
    dispatch({
      type: GET_WORK_ORDERS_SUCCESS,
      payload: {
        workOrders: res.data
      }
    });
  } catch (err) {
    dispatch({ type: GET_WORK_ORDERS_FAIL, payload: { errMsg: err } });
  }
};

export const getWorkOrderById = id => async dispatch => {
  dispatch({ type: GET_WORK_ORDERS_START });
  try {
    const res = await axiosAuth.get(`/workorders/${id}`);
    dispatch({
      type: GET_WORK_ORDERS_SUCCESS,
      payload: {
        workOrders: res.data
      }
    });
  } catch (err) {
    dispatch({ type: GET_WORK_ORDERS_FAIL, payload: { errMsg: err } });
  }
};

// eslint-disable-next-line no-unused-vars
export const addWorkOrder = workOrder => async dispatch => {
  dispatch({ type: ADD_WORK_ORDER_START });
  try {
    const res = await axiosAuth.post(`/workorders`, workOrder);

    // show success toast
    dispatch(showSuccessToast('Work Order created!'));

    dispatch({
      type: ADD_WORK_ORDER_SUCCESS,
      payload: {
        workOrders: res.data
      }
    });
  } catch (err) {
    // show error toast
    dispatch(showErrorToast('Uh oh! Something went wrong'));

    dispatch({ type: ADD_WORK_ORDER_FAIL, payload: { errMsg: err } });
  }
};

// eslint-disable-next-line no-unused-vars
export const updateWorkOrder = workOrder => async dispatch => {
  dispatch({ type: UPDATE_WORK_ORDER_START });
  try {
    const res = await axiosAuth.put(`/workorders/${workOrder.id}`, workOrder);

    // show success toast
    dispatch(showSuccessToast('Work Order updated!'));

    dispatch({
      type: UPDATE_WORK_ORDER_SUCCESS,
      payload: {
        workOrders: res.data
      }
    });
  } catch (err) {
    // show error toast
    dispatch(showErrorToast('Uh oh! Something went wrong'));

    dispatch({ type: UPDATE_WORK_ORDER_FAIL, payload: { errMsg: err } });
  }
};
