import React from 'react';
import { navigate } from '@reach/router';

const Logout = () => {
  const handleLogout = () => {
    window.localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <button type="button" onClick={handleLogout} className="GetMeOutOfThisApp">
      Logout
    </button>
  );
};

export default Logout;
