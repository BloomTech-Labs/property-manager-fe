import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from '../actions/index';

const initialState = {
  firstName: '',
  lastName: '',
  type: '',
  isLoading: true
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
    default:
      return state;
  }
}
