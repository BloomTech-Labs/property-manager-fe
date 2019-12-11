import React from 'react';
import { Router } from '@reach/router';
import Dashboard from '../../../views/dashboard/Dashboard';
import Properties from '../../../views/dashboard/properties/Properties';
import Profile from '../../../views/dashboard/profile/Profile';
import Overview from '../../../views/dashboard/overview/Overview';

const ProtectedRoutes = () => (
  <Router>
    <Dashboard path="dashboard">
      <Overview path="/" />
      <Profile path="profile" />
      <Properties path="properties" />
    </Dashboard>
  </Router>
);

export default ProtectedRoutes;
