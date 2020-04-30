import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import Toast from '../../UI/Toast';
import firebase from '../../../vendors/fb';
import { useSelector } from 'react-redux';

const Routes = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = firebase.auth().onAuthStateChanged(fbUser => {
      if (fbUser) {
        setUser(fbUser);
      } else {
        setUser(null);
      }
      return () => user();
    });
    return user;
  }, [user]);
  const userInfo = useSelector(state => state.authReducer.user);
  const landlord = (userInfo.userType = 'landlord' ? true : false);
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
