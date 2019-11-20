import {
  AUTH_REQUEST_FAIL,
  AUTH_REQUEST_START,
  AUTH_REQUEST_SUCCESS
} from '../actions';

const initialState = {
  isLoading: true,
  isLoggedIn: false,
  errorMessage: null
};

export default function reducer(
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
        isLoggedIn: true
      };
    }

    case AUTH_REQUEST_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errorMessage
      };
    }
    default:
      return state;
  }
}
