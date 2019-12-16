import {
  ADD_PROPERTY_FAIL,
  ADD_PROPERTY_START,
  ADD_PROPERTY_SUCCESS,
  GET_PROPERTIES_START,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAIL,
  GET_PROPERTY_START,
  GET_PROPERTY_SUCCESS,
  GET_PROPERTY_FAIL,
  EDIT_PROPERTY_START,
  EDIT_PROPERTY_SUCCESS,
  EDIT_PROPERTY_FAIL
} from '../actions';

const initialState = {
  properties: [],
  property: {},
  isAddingProp: false,
  isGettingProperties: true,
  isGettingProperty: false,
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
    case GET_PROPERTIES_START: {
      return {
        ...state,
        isGettingProperties: true,
        errMsg: null
      };
    }
    case GET_PROPERTIES_SUCCESS: {
      // console.log(action.payload);

      return {
        ...state,
        isGettingProperties: false,
        properties: action.payload.properties,
        errMsg: null
      };
    }
    case GET_PROPERTIES_FAIL: {
      return {
        ...state,
        isGettingProperties: false,
        errMsg: action.payload.errMsg
      };
    }
    // -------------------------------------|
    // GET_PROPERTY ------------------------|
    case GET_PROPERTY_START: {
      return {
        ...state,
        isGettingProperty: true,
        errMsg: null
      };
    }
    case GET_PROPERTY_SUCCESS: {
      return {
        ...state,
        property: action.payload.property,
        isGettingProperty: false,
        errMsg: null
      };
    }
    case GET_PROPERTY_FAIL: {
      return {
        ...state,
        isGettingProperty: false,
        errMsg: action.payload.errMsg
      };
    }
    // -------------------------------------|
    // EDIT_PROPERTY -----------------------|
    case EDIT_PROPERTY_START: {
      return {
        ...state,
        isUpdatingProperty: true,
        errMsg: null,
        updated: false
      };
    }
    case EDIT_PROPERTY_SUCCESS: {
      return {
        ...state,
        isUpdatingProperty: false,
        errMsg: null,
        updated: true
      };
    }
    case EDIT_PROPERTY_FAIL: {
      return {
        ...state,
        isUpdatingProperty: false,
        errMsg: action.payload.errMsg,
        updated: false
      };
    }
    // -------------------------------------|
    default:
      return state;
    // -------------------------------------|
  }
}
