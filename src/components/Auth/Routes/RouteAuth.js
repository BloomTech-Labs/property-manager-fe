import React, { useContext } from 'react';
import { Router, navigate } from '@reach/router';

// eslint-disable-next-line react/prop-types
export default function RouteAuth({ children: Component, to = '/', ...props }) {
  const token = localStorage.getItem('token');
  if (token) {
    return <Component {...props} />;
  } else {
    return <navigate to={to} />;
  }
}
