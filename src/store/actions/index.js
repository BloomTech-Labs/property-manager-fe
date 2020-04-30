import { auth } from './auth/authCreators';
import {
  createProperty,
  getProperties,
  getProperty,
  editProperty
} from './properties/propertyCreators';
import {
  getTenants,
  getTenantById,
  editTenant,
  addTenant,
  getTenantsByResidence
} from './tenants/tenantCreators';
import { getUserInfo, editUserInfo } from './users/userCreators';
import {
  getWorkOrders,
  addWorkOrder,
  updateWorkOrder
} from './workorders/workorderCreators';

export {
  addTenant,
  addWorkOrder,
  auth,
  createProperty,
  editProperty,
  editTenant,
  editUserInfo,
  getProperty,
  getProperties,
  getTenantById,
  getTenantsByResidence,
  getTenants,
  getUserInfo,
  getWorkOrders,
  updateWorkOrder
};
