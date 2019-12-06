import React from 'react';
import PropTypes from 'prop-types';
import { MdCheck, MdError } from 'react-icons/md';
import { FormError, FormSuccess, I } from '../components/UI';

const Error = ({ touched, message }) => {
  if (!touched) {
    return null;
  }
  if (message) {
    return (
      <FormError>
        <I>
          <MdError />
        </I>{' '}
        {message}
      </FormError>
    );
  }
  return (
    <FormSuccess>
      <I>
        <MdCheck />
      </I>
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
