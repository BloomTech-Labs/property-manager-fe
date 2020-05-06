import React from 'react';

// Reach Router
import { Router, Redirect } from '@reach/router';

// Components
import Dashboard from '../../../views/dashboard/Dashboard';
import Properties from '../../../views/dashboard/properties/Properties';
import Profile from '../../../views/dashboard/profile/Profile';
import Overview from '../../../views/dashboard/overview/Overview';
import CreateProperty from '../../../views/dashboard/properties/CreateProperty';
import Property from '../../../views/dashboard/properties/Property';
import EditProperty from '../../../views/dashboard/properties/EditProperty';
import EditTenant from '../../../views/dashboard/tenants/EditTenant';
import CreateTenant from '../../../views/dashboard/tenants/CreateTenant';
import Tenants from '../../../views/dashboard/tenants/Tenants';
import Tenant from '../../../views/dashboard/tenants/Tenant';
import WorkOrderForm from '../../WorkOrderForm/WorkOrderForm';
import TenantDashboard from '../../../views/tenantDashboard/TenantDashboard';
import TenantProperty from '../../../views/tenantDashboard/TenantProperty';
import WorkOrders from '../../../views/dashboard/workorders/WorkOrders';
import WorkOrderEditForm from '../../WorkOrderForm/WorkOrderEditForm';
import NotFound from '../../../views/notfound/NotFound';

function ProtectedRoutes({ user, landlord }) {
  if (user && landlord === true) {
    return (
      <Router>
        <Dashboard path="/">
          <Overview path="/" />
          <Profile path="profile" />

          <Properties path="properties" />
          <Property path="properties/:id" />
          <CreateProperty path="properties/add" />
          <EditProperty path="properties/edit/:id" />

          <Tenants path="tenants" />
          <Tenant path="tenants/:id" />
          <CreateTenant path="tenants/add" />
          <EditTenant path="tenants/edit/:id" />

          <WorkOrders path="workorders" />
          <WorkOrderForm path="workorders/add" />
          <WorkOrderEditForm path="workorders/:workOrderId" />
          <NotFound default />
        </Dashboard>
      </Router>
    );
  }

  // Tenant Routing
  if (user && landlord === false) {
    return (
      <Router>
        <TenantDashboard path="/">
          <Overview path="/" />
          <Profile path="profile" />
          <TenantProperty path="property" />
          <WorkOrders path="workorders" />
          <WorkOrderForm path="workorders/add" />
          <WorkOrderEditForm path="workorders/:workOrderId" />
          <NotFound default />
        </TenantDashboard>
      </Router>
    );
  }

  if (!user) {
    return <Redirect to="/" noThrow />;
  }

  return null;
}

export default ProtectedRoutes;
