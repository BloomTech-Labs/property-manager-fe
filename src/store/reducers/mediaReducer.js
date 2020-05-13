import {
  MEDIA_REQUEST_START,
  MEDIA_REQUEST_FAIL,
  MEDIA_REQUEST_SUCCESS
} from '../actions/media/mediaTypes';

const initialState = {
  files: [],
  isLoading: false,
  errorMessage: ''
};

export default function mediaReducer(
  state = initialState,
  action = { type: 'Not Valid' }
) {
  switch (action.type) {
    case MEDIA_REQUEST_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case MEDIA_REQUEST_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errMsg
      };
    }
    case MEDIA_REQUEST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        files: action.payload.media
      };
    }
    default:
      return state;
  }
}
