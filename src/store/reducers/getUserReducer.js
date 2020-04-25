import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL
} from '../actions/users/userTypes';

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    phone: '',
    type: ''
  },
  isLoading: true,
  errorMessage: ''
};

export default function getUserReducer(
  state = initialState,
  action = { type: 'Not valid' }
) {
  switch (action.type) {
    case GET_USER_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        isLoading: false
      };
    }
    case GET_USER_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errMsg
      };
    }
    case EDIT_USER_START: {
      return {
        ...state
      };
    }
    case EDIT_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload.user
      };
    }
    case EDIT_USER_FAIL: {
      return {
        ...state,
        errorMessage: action.payload.errMsg
      };
    }
    case 'LOGOUT': {
      return initialState;
    }
    default:
      return state;
  }
}
