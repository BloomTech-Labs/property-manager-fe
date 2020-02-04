import {
  TOAST_SUCCESS,
  TOAST_ERROR,
  TOAST_INFO,
  TOAST_CLEAR
} from '../actions/toastActions';

const initialState = {
  openToast: false,
  toastMessage: null,
  toastSeverity: null
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case TOAST_SUCCESS: {
      return {
        ...state,
        toastSeverity: 'success',
        openToast: true,
        toastMessage: action.payload
      };
    }
    case TOAST_ERROR: {
      return {
        ...state,
        toastSeverity: 'error',
        openToast: true,
        toastMessage: action.payload
      };
    }
    case TOAST_INFO: {
      return {
        ...state,
        toastSeverity: 'info',
        openToast: true,
        toastMessage: action.payload
      };
    }
    case TOAST_CLEAR: {
      return {
        ...state,
        openToast: false
      };
    }
    default:
      return state;
  }
}
