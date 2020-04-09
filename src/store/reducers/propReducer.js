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
} from '../actions/properties/propertyTypes';
import {
  ADD_TENANT_START,
  ADD_TENANT_SUCCESS,
  ADD_TENANT_FAIL,
  GET_TENANTS_RESIDENCE_START,
  GET_TENANTS_RESIDENCE_SUCCESS,
  GET_TENANTS_RESIDENCE_FAIL,
  GET_TENANTS_START,
  GET_TENANTS_SUCCESS,
  GET_TENANTS_FAIL,
  GET_TENANT_ID_START,
  GET_TENANT_ID_SUCCESS,
  GET_TENANT_ID_FAIL,
  EDIT_TENANT_START,
  EDIT_TENANT_SUCCESS,
  EDIT_TENANT_FAIL
} from '../actions/tenants/tenantTypes';

const initialState = {
  properties: [],
  property: {},
  currentPropertyTenants: [],
  tenants: [],
  currentTenant: {},
  isGettingTenants: false,
  isGettingTenant: false,
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
    // GET_TENANTS -------------------------|
    // -------------------------------------|
    case GET_TENANTS_START: {
      return {
        ...state,
        isGettingProperties: true,
        errMsg: null
      };
    }
    case GET_TENANTS_SUCCESS: {
      return {
        ...state,
        isGettingProperties: false,
        errMsg: null,
        tenants: action.payload
      };
    }
    case GET_TENANTS_FAIL: {
      return {
        ...state,
        isGettingProperties: false,
        errMsg: action.payload.errMsg
      };
    }
    // GET_TENANT --------------------------|
    // -------------------------------------|
    case GET_TENANT_ID_START: {
      return {
        ...state,
        isGettingTenant: true,
        errMsg: null
      };
    }
    case GET_TENANT_ID_SUCCESS: {
      return {
        ...state,
        isGettingTenant: false,
        currentTenant: action.payload,
        errMsg: null
      };
    }
    case GET_TENANT_ID_FAIL: {
      return {
        ...state,
        isGettingTenant: false,
        errMsg: action.payload.errMsg
      };
    }
    // EDIT_TENANT --------------------------|
    // -------------------------------------|
    case EDIT_TENANT_START: {
      return {
        ...state,
        isGettingTenant: true,
        errMsg: null
      };
    }
    case EDIT_TENANT_SUCCESS: {
      return {
        ...state,
        isGettingTenant: false,
        currentTenant: action.payload,
        errMsg: null
      };
    }
    case EDIT_TENANT_FAIL: {
      return {
        ...state,
        isGettingTenant: false,
        errMsg: action.payload.errMsg
      };
    }
    case 'LOGOUT': {
      return initialState;
    }
    default:
      return state;
    // -------------------------------------|
  }
}
