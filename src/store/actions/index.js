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
import {
  getWorkOrders,
  addWorkOrder,
  updateWorkOrder
} from './workorders/workorderCreators';

export {
  addTenant,
  addWorkOrder,
  createProperty,
  editProperty,
  editTenant,
  getProperty,
  getProperties,
  getTenantById,
  getTenantsByResidence,
  getTenants,
  getWorkOrders,
  updateWorkOrder
};
