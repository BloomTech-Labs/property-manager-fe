import {
  ADD_PROPERTY_FAIL,
  ADD_PROPERTY_START,
  ADD_PROPERTY_SUCCESS,
  GET_PROPERTY_START,
  GET_PROPERTY_SUCCESS,
  GET_PROPERTY_FAIL
} from '../actions';

const initialState = {
  properties: [],
  isAddingProp: false,
  isGettingProperties: true,
  errMsg: null
};

export default function propReducer(state = initialState, action) {
  switch (action.type) {
    // PROPERTIES ==========================|
    // =====================================|
    // ADD_PROPERTY ------------------------|
    case ADD_PROPERTY_START: {
      return {
        ...state,
        isAddingProp: true
      };
    }
    case ADD_PROPERTY_SUCCESS: {
      return {
        ...state,
        isAddingProp: false
      };
    }
    case ADD_PROPERTY_FAIL: {
      return {
        ...state,
        isAddingProp: false
      };
    }
    // -------------------------------------|
    // GET_PROPERTIES ----------------------|
    case GET_PROPERTY_START: {
      return {
        ...state,
        isGettingProperties: true,
        errMsg: null
      };
    }
    case GET_PROPERTY_SUCCESS: {
      // console.log(action.payload);

      return {
        ...state,
        isGettingProperties: false,
        properties: action.payload.properties,
        errMsg: null
      };
    }
    case GET_PROPERTY_FAIL: {
      return {
        ...state,
        isGettingProperties: false,
        errMsg: action.payload.errMsg
      };
    }
    // -------------------------------------|
    default:
      return state;
    // -------------------------------------|
  }
}
