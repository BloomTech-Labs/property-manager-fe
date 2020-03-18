import React from 'react';
import FeatureImage from '../../../assets/svg/features-image.svg';

const FeatureHeading = () => {
  return (
    <div className="featureHeadingWrapper">
      <img
        className="featureImage"
        src={FeatureImage}
        alt="Orange computer and phone"
      />
      <h1 className="featureHeading">Which Freehold is right for me?</h1>
    </div>
  );
};

export default FeatureHeading;
