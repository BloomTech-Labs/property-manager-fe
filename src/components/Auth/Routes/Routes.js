import React from 'react';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import { AuthProvider } from './RouteAuth';

const Routes = () => (
  <div>
    <PublicRoutes />
    <AuthProvider>
      <ProtectedRoutes />
    </AuthProvider>
  </div>
);

export default Routes;
