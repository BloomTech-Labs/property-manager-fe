import React from 'react';
import { Router } from '@reach/router';
import { useSelector } from 'react-redux';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import Toast from '../../UI/Toast';

const Routes = () => {
  const user = useSelector(state => state.firebase.auth);
  const profile = useSelector(state => state.firebase.profile.token);
  const landlord = profile ? profile.claims.landlord : null;
  return (
    <>
      <Router>
        <PublicRoutes path="/*" />

        <ProtectedRoutes path="dashboard/*" user={user} landlord={landlord} />
      </Router>
      <Toast />
    </>
  );
};

export default Routes;
