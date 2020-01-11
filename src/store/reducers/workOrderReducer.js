import {
  GET_WORK_ORDERS_START,
  GET_WORK_ORDERS_FAIL,
  GET_WORK_ORDERS_SUCCESS,
  ADD_WORK_ORDER_START,
  ADD_WORK_ORDER_FAIL,
  ADD_WORK_ORDER_SUCCESS,
  UPDATE_WORK_ORDER_START,
  UPDATE_WORK_ORDER_FAIL,
  UPDATE_WORK_ORDER_SUCCESS
} from '../actions/index';

const initialState = {
  workOrders: [],
  isLoading: false,
  errorMessage: ''
};

export default function workOrderReducer(
  state = initialState,
  action = { type: 'Not Valid' }
) {
  switch (action.type) {
    case GET_WORK_ORDERS_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_WORK_ORDERS_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errMsg
      };
    }
    case GET_WORK_ORDERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        workOrders: action.payload.workOrders
      };
    }
    case ADD_WORK_ORDER_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case ADD_WORK_ORDER_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errMsg
      };
    }
    case ADD_WORK_ORDER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        workOrders: action.payload.workOrders
      };
    }
    case UPDATE_WORK_ORDER_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case UPDATE_WORK_ORDER_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errMsg
      };
    }
    case UPDATE_WORK_ORDER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        workOrders: action.payload.workOrders
      };
    }
    default:
      return state;
  }
}
