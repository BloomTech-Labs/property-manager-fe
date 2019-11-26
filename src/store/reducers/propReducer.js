import {
  ADD_PROPERTY_FAIL,
  ADD_PROPERTY_START,
  ADD_PROPERTY_SUCCESS
} from '../actions';

const initialState = {
  isAddingProp: false
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
    default:
      return state;
    // -------------------------------------|
  }
}
