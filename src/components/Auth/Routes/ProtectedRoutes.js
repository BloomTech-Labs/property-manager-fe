import React from 'react';
import { Router, Redirect } from '@reach/router';
import Dashboard from '../../../views/dashboard/Dashboard';
import Properties from '../../../views/dashboard/properties/Properties';
import Profile from '../../../views/dashboard/profile/Profile';
import Overview from '../../../views/dashboard/overview/Overview';
import CreateProperty from '../../../views/dashboard/properties/CreateProperty';
import Property from '../../../views/dashboard/properties/Property';
import EditProperty from '../../../views/dashboard/properties/EditProperty';
import CreateTenant from '../../../views/dashboard/tenants/CreateTenant';
import Tenants from '../../../views/dashboard/tenants/Tenants';

function ProtectedRoutes() {
  // eslint-disable-next-line consistent-return
  function getToken() {
    try {
      const token = localStorage.getItem('token');
      return token;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      return null;
    }
  }
  const token = getToken();

  if (!token) {
    return <Redirect to="/" noThrow />;
  }
  return (
    <Router>
      <Dashboard path="/">
        <Overview path="/" />
        <Profile path="profile" />
        <Properties path="properties" />
        <Tenants path="tenants" />
        <Property path="properties/:id" />
        <CreateProperty path="properties/add" />
        <EditProperty path="properties/edit/:id" />
        <CreateTenant path="tenants/add" />
      </Dashboard>
    </Router>
  );
}

export default ProtectedRoutes;
