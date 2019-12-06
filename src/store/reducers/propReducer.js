import {
  ADD_PROPERTY_FAIL,
  ADD_PROPERTY_START,
  ADD_PROPERTY_SUCCESS,
  GET_ALLPROPERTIES_FAIL,
  GET_ALLPROPERTIES_START,
  GET_ALLPROPERTIES_SUCCESS
} from '../actions';

const initialState = {
  isAddingProp: false,
  isGettingProperty: false
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
      console.log(action.payload);

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
    // =====================================|
    // GET_ALLPROPERTIES -------------------|
    case GET_ALLPROPERTIES_START: {
      return {
        ...state,
        isGettingProperty: true
      };
    }
    case GET_ALLPROPERTIES_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        isGettingProperty: false
      };
    }
    case GET_ALLPROPERTIES_FAIL: {
      return {
        ...state,
        isGettingProperty: false
      };
    }
    default:
      return state;
    // -------------------------------------|
  }
}
