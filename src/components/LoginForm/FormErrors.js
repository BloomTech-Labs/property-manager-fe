import React from 'react';
import PropTypes from 'prop-types';
import { FaCheck, FaRegDizzy } from 'react-icons/fa';
import { FormError, FormSuccess } from '../UI';

const Error = ({ touched, message }) => {
  if (!touched) {
    return <FormError>&nbsp;</FormError>;
  }
  if (message) {
    return (
      <FormError>
        <FaRegDizzy /> {message}
      </FormError>
    );
  }
  return (
    <FormSuccess>
      <FaCheck />
    </FormSuccess>
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
