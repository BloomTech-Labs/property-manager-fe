import React from 'react';

// eslint-disable-next-line react/prop-types
const AbsoluteWrapper = ({ children }) => {
  return <div className="position-absolute">{children}</div>;
};

export default AbsoluteWrapper;
