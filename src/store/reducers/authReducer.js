import {
  AUTH_REQUEST_FAIL,
  AUTH_REQUEST_START,
  AUTH_REQUEST_SUCCESS
} from '../actions/auth/authTypes';

const initialState = {
  isLoading: true,
  isLoggedIn: false,
  errorMessage: null,
  user: {}
};

export default function authReducer(
  state = initialState,
  action = { type: 'Not valid' }
) {
  switch (action.type) {
    case AUTH_REQUEST_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case AUTH_REQUEST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payload
      };
    }
    case AUTH_REQUEST_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    }
    case 'LOGOUT': {
      return initialState;
    }
    default:
      return state;
  }
}
