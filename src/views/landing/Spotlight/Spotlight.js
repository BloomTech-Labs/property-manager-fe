import React from 'react';
import SpotlightHeading from './SpotlightHeading';
import SpotlightCards from './SpotlightCards';
import SpotlightButton from './SpotlightButton';

const Spotlight = () => {
  return (
    <div className="spotlightWrapper" id="spotlight">
      <SpotlightHeading />
      <SpotlightCards />
      <SpotlightButton />
    </div>
  );
};

export default Spotlight;
