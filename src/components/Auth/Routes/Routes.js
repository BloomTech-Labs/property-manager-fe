import React from 'react';
import { Router } from '@reach/router';
import { useSelector } from 'react-redux';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import Toast from '../../UI/Toast';

const Routes = () => {
  const user = useSelector(state => state.firebase.auth);
  const token = useSelector(state => state.firebase.profile.token);
  const landlord = token ? token.claims.landlord : null;
  return (
    <>
      <Router>
        <PublicRoutes path="/*" user={user} />

        <ProtectedRoutes path="dashboard/*" user={user} landlord={landlord} />
      </Router>
      <Toast />
    </>
  );
};

export default Routes;
