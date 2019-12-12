import React from 'react';
import { Router, Redirect } from '@reach/router';
import Dashboard from '../../../views/dashboard/Dashboard';
import Properties from '../../../views/dashboard/properties/Properties';
import Profile from '../../../views/dashboard/profile/Profile';
import Overview from '../../../views/dashboard/overview/Overview';

function ProtectedRoutes() {
  function getToken() {
    try {
      let token = localStorage.getItem('token');
      return token;
    } catch (err) {
      console.log(err);
    }
  }
  const token = getToken();

  if (!token) {
    return <Redirect to="/home" />;
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
