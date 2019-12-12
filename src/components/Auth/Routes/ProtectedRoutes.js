import React from 'react';
import { Router, Redirect } from '@reach/router';
import Dashboard from '../../../views/dashboard/Dashboard';
import Properties from '../../../views/dashboard/properties/Properties';
import Profile from '../../../views/dashboard/profile/Profile';
import Overview from '../../../views/dashboard/overview/Overview';

function ProtectedRoutes() {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Redirect to="/" />;
  }
  return (
    <Router>
      <Dashboard path="/">
        <Overview path="/" />
        <Profile path="profile" />
        <Properties path="properties" />
      </Dashboard>
    </Router>
  );
}

export default ProtectedRoutes;
