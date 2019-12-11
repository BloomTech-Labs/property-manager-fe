import React from 'react';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import RouteAuth from './RouteAuth';

const Routes = () => (
  <div>
    <PublicRoutes />
    <RouteAuth>
      <ProtectedRoutes />
    </RouteAuth>
  </div>
);

export default Routes;
