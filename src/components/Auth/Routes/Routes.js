import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Router } from '@reach/router';
import { getUserInfo } from '../../../store/actions/index';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import Toast from '../../UI/Toast';

const Routes = () => {
  function getToken() {
    try {
      const token = localStorage.getItem('token');
      return token;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      return null;
    }
  }

  const token = getToken();

  // const userType = useSelector(state => state.getUserReducer.user.type);
  const userType = localStorage.getItem('userType');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <>
      <Router>
        <PublicRoutes path="/*" />

        <ProtectedRoutes path="dashboard/*" token={token} userType={userType} />
      </Router>
      <Toast />
    </>
  );
};

export default Routes;
