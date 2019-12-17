import React from 'react';
import { Router } from '@reach/router';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';

const Routes = () => (
  <Router>
    <PublicRoutes path="/" />

    <ProtectedRoutes path="/dashboard" />
  </Router>
);

export default Routes;
