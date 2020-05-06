import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import { useSelector } from 'react-redux';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import Toast from '../../UI/Toast';
import firebase from '../../../vendors/fb';

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
  const landlord = (userInfo.userType = !!'landlord');
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
