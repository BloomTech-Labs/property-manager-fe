import React from 'react';

import PropTypes from 'prop-types';

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
import TenantWorkOrderForm from '../../WorkorderForm/TenantWorkOrderForm';
import LandlordWorkOrderForm from '../../WorkorderForm/LandlordWorkOrderForm';
import TenantDashboard from '../../../views/tenantDashboard/TenantDashboard';
import WorkOrders from '../../../views/dashboard/workorders/WorkOrders';

function ProtectedRoutes({ token, userType }) {
  // eslint-disable-next-line consistent-return
  // function getToken() {
  //   try {
  //     const token = localStorage.getItem('token');
  //     return token;
  //   } catch (err) {
  //     // eslint-disable-next-line no-console
  //     console.error(err);
  //     return null;
  //   }
  // }
  // const token = getToken();
  // console.log(token)

  // const userType = useSelector(state => state.authReducer.user.type);
  // console.log(userType)

  // Landlord Routing
  if (token && userType === 'landlord') {
    return (
      <Router>
        <Dashboard path="/">
          <Overview path="/" />
          <Profile path="profile" />

          <Properties path="properties" />
          <Property path="properties/:id" />
          <CreateProperty path="properties/add" />
          <EditProperty path="properties/edit/:id" />
          <TenantWorkOrderForm path="properties/workOrderTenant" />
          <LandlordWorkOrderForm path="properties/workOrderLandlord" />

          <Tenants path="tenants" />
          <Tenant path="tenants/:id" />
          <CreateTenant path="tenants/add" />
          <EditTenant path="tenants/edit/:id" />

          <WorkOrders path="workorders" />
        </Dashboard>
      </Router>
    );
  }

  // Tenant Routing
  if (token && userType === 'tenant') {
    return (
      <Router>
        <TenantDashboard path="/">
          <Overview path="/" />
          <Profile path="profile" />
          <TenantWorkOrderForm path="properties/workOrderTenant" />
        </TenantDashboard>
      </Router>
    );
  }
  return <Redirect to="/" noThrow />;
}

ProtectedRoutes.propTypes = {
  token: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired
};

export default ProtectedRoutes;
