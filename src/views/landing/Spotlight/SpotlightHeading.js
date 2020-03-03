import React from 'react';
import SpotHeaderImage from '../../../assets/svg/landing-3homes-middle.svg';
import './spotlight.scss';

const SpotlightHeading = () => {
  return (
    <div className="spotHeadingWrapper">
      <img
        className="spotHeaderImage"
        src={SpotHeaderImage}
        alt="Orange computer and phone"
      />
      <h1 className="spotHeading">
        Manage your properties, don’t let them manage you!
      </h1>
    </div>
  );
};

export default SpotlightHeading;
