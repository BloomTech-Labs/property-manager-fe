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
  EDIT_PROPERTY_FAIL,
  ADD_TENANT_START,
  ADD_TENANT_SUCCESS,
  ADD_TENANT_FAIL,
  GET_TENANTS_RESIDENCE_START,
  GET_TENANTS_RESIDENCE_SUCCESS,
  GET_TENANTS_RESIDENCE_FAIL
} from '../actions/index';

const properties = localStorage.getItem('properties');

const initialState = {
  properties: [],
  property: {},
  currentPropertyTenants: [],
  tenants: [],
  isGettingTenants: false,
  isAddingProp: false,
  isGettingProperties: true,
  isGettingProperty: false,
  errMsg: null,
  ...properties
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
    // ADD_TENANT --------------------------|
    case ADD_TENANT_START: {
      return {
        ...state,
        isAddingTenant: true,
        errMsg: null
      };
    }
    case ADD_TENANT_SUCCESS: {
      return {
        ...state,
        isAddingTenant: false,
        errMsg: null
      };
    }
    case ADD_TENANT_FAIL: {
      return {
        ...state,
        isAddingTenant: false,
        errMsg: action.payload.errMsg
      };
    }
    // -------------------------------------|
    // GET_TENANTS_RESIDENCE ---------------|
    // -------------------------------------|
    case GET_TENANTS_RESIDENCE_START: {
      return {
        ...state,
        isGettingTenants: true,
        errMsg: null,
        currentPropertyTenants: []
      };
    }
    case GET_TENANTS_RESIDENCE_SUCCESS: {
      return {
        ...state,
        isGettingTenants: false,
        errMsg: null,
        currentPropertyTenants: action.payload
      };
    }
    case GET_TENANTS_RESIDENCE_FAIL: {
      return {
        ...state,
        isGettingTenants: false,
        errMsg: action.payload.errMsg,
        currentPropertyTenants: []
      };
    }
    default:
      return state;
    // -------------------------------------|
  }
}
