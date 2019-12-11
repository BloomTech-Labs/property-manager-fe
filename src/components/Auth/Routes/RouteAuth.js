import React, { useContext } from 'react';
import { Router, navigate, Redirect } from '@reach/router';

// eslint-disable-next-line react/prop-types
export default function RouteAuth({ children: Component, to = '/', ...props }) {
  const token = localStorage.getItem('token');

  // eslint-disable-next-line react/jsx-props-no-spreading
  return token ? <Component {...props} /> : <Redirect to={to} />;
}
