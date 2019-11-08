import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-message">&nbsp;</div>;
  }
  if (message) {
    return <div className="form-message">{message}</div>;
  }
  return (
    <div className="form-message">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
      </svg>
    </div>
  );
};

Error.propTypes = {
  touched: PropTypes.bool,
  message: PropTypes.string
};

Error.defaultProps = {
  touched: false,
  message: ''
};

export default Error;
