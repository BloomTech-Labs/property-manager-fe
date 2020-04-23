import React from 'react';
import BadRoute from '../../assets/svg/404.svg';
import './notfound.scss';

function NotFound() {
  return (
    <div className="notFoundWrapper">
      <img
        className="notFound"
        src={BadRoute}
        alt="Redirecting user back to landing."
      />
    </div>
  );
}

export default NotFound;
