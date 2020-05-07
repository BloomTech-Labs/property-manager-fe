/* eslint-disable react/prop-types */
import React from 'react';
import LandingPage from '../../../views/landing/LandingPage';
import firebase from '../../../vendors/fb';

// eslint-disable-next-line react/prop-types
export default function RouteAuth({
  // eslint-disable-next-line react/prop-types
  children: Component,
  // eslint-disable-next-line react/prop-types
  // dest = '/',
  // eslint-disable-next-line no-unused-vars
  ...props
}) {
  const user = firebase.auth().currentUser;
  return user ? <Component /> : <LandingPage />;
}
